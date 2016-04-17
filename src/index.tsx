import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

import './css/main.styl';
import './css/draft.styl';
import '../vendors/joint.min.css';

import Main from './components/Main.tsx';
import MainIndex from './components/MainIndex.tsx';
import Patterns from './components/Patterns.tsx';
import PatternsIndex from './components/PatternsIndex.tsx';
import Pattern from './components/Pattern.tsx';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false } as any);

export default class App extends React.Component<{}, {}> {
    render() {
        return (
            <Router history={appHistory}>
                <Route path="/" component={Main}>
                    <IndexRoute component={MainIndex}></IndexRoute>
                    <Route path="patterns" component={Patterns}>
                        <IndexRoute component={PatternsIndex}></IndexRoute>
                        <Route path="(:test)" component={Pattern}></Route>
                    </Route>
                </Route>
            </Router>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('app'));
