import * as React from 'react';
import PrismCode from './PrismCode';
declare function require(name: string): any;


export const patterns = {
    'Test': {
        codeExample: ''
    },
    'Test2': {
        codeExample: ''
    }
};

Object.keys(patterns).forEach((e) => {
    patterns[e].codeExample = require(`raw-loader!../examples/${e}.tsx`);
});

console.log(patterns);

export default class Pattern extends React.Component<{ params: any; }, {}> {
    render() {
        return (
            <div>
                { patterns[this.props.params.test] ?
                    <div>
                        <h1>{this.props.params.test}</h1>
                        <PrismCode className="language-typescript">
                            {patterns[this.props.params.test].codeExample}
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
