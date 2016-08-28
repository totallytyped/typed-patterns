import * as React from 'react';
import PrismCode from './PrismCode';
import { capitalizeFirstLetter } from '../utils';

declare function require(name: string): any;


export const patterns = {
    'observer': {},
    'proxy': {}
};

Object.keys(patterns).forEach(e => {
    patterns[e].example = require(`!!raw-loader!../patterns/${e}/example.ts`);
    patterns[e].implementation = require(`!!raw-loader!../patterns/${e}/implementation.ts`);
    patterns[e].makeUml = require(`../patterns/${e}/uml.ts`).default;
});

console.log(patterns);

export default class PatternPage extends React.Component<{ params: any; }, {}> {
    umlWrapper: HTMLDivElement;

    componentDidMount() {
        patterns[this.props.params.patternName.toLowerCase()].makeUml(this.umlWrapper);
    }

    render() {
        const patternName = this.props.params.patternName.toLowerCase();
        return (
            <div>
                {patterns[patternName] ?
                    <div>
                        <h1>{capitalizeFirstLetter(patternName)}</h1>
                        <h2>Реализация</h2>
                        <PrismCode className="language-typescript">
                            {patterns[patternName].implementation}
                        </PrismCode>
                        <h2>Пример</h2>
                        <PrismCode className="language-typescript">
                            {patterns[patternName].example}
                        </PrismCode>
                        <h2>Диаграмма</h2>
                        <div ref={ref => this.umlWrapper = ref}></div>
                    </div> :
                    <div>
                        <h1>Паттерн не найден.</h1>
                    </div>
                }
            </div>
        );
    }
}
