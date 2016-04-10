import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

import './css/main.styl';
import './css/draft.css';

import Main from './components/Main.tsx';
import Index from './components/Index.tsx';
import Pattern from './components/Pattern.tsx';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false } as any);

class Test extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                test index
            </div>
        );
    }
}

export default class App extends React.Component<{}, {}> {
    render() {
        return (
            <Router history={appHistory}>
                <Route path="/" component={Test}></Route>
                <Route path="/patterns/" component={Main}>
                    <IndexRoute component={Index}></IndexRoute>
                    <Route path="(:test)" component={Pattern}></Route>
                </Route>
            </Router>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('app'));
