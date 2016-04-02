import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import PrismCode from './components/PrismCode';
declare function require(name: string): any;

// import 'milligram/dist/milligram.min.css';
import './css/main.styl';
import './css/draft.css';

import Main from './components/Main.tsx';

class Index extends React.Component<{}, {}> {
    render() {
        return (
            <div><h1>Index</h1></div>
        );
    }
}

class About extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <h1>Test</h1>
                <PrismCode className="language-typescript">
                    {require('raw-loader!./examples/Test.tsx') }
                </PrismCode>
            </div>
        );
    }
}



class Test extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <h1>Test</h1>
                <PrismCode className="language-typescript line-numbers">
                    {require('raw-loader!./examples/Test.tsx') }
                </PrismCode>
            </div>
        );
    }
}

export default class App extends React.Component<{}, {}> {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Main}>
                    <IndexRoute component={Index}></IndexRoute>
                    <Route path="about" component={About}></Route>
                    <Route path="*" component={Test}></Route>
                </Route>
            </Router>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('app'));
