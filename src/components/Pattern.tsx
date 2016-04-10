import * as React from 'react';
import PrismCode from './PrismCode';
declare function require(name: string): any;

import { capitalizeFirstLetter } from '../utils';


export const patterns = {
    'observer': {},
    'proxy': {}
};

Object.keys(patterns).forEach((e) => {
    patterns[e].example = require(`raw-loader!../patterns/${e}/example.ts`);
    patterns[e].implementation = require(`raw-loader!../patterns/${e}/implementation.ts`);
});

console.log(patterns);

export default class Pattern extends React.Component<{ params: any; }, {}> {
    render() {
        return (
            <div>
                { patterns[this.props.params.test.toLowerCase()] ?
                    <div>
                        <h1>{ capitalizeFirstLetter(this.props.params.test) }</h1>
                        <h2>Реализация</h2>
                        <PrismCode className="language-typescript">
                            {patterns[this.props.params.test.toLowerCase()].implementation}
                        </PrismCode>
                        <h2>Пример</h2>
                        <PrismCode className="language-typescript">
                            {patterns[this.props.params.test.toLowerCase()].example}
                        </PrismCode>
                    </div> :
                    <div>
                        <h1>Паттерн не найден.</h1>
                    </div>
                }
            </div>
        );
    }
}
