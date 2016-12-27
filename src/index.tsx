// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

import './css/main.styl';
import './css/draft.styl';
import '../vendors/joint.min.css';

import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import PatternsLayout from './components/PatternsLayout';
import PatternsIndex from './components/PatternsIndex';
import PatternPage from './components/PatternPage';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false } as any);

const App = () =>
    <Router history={appHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={IndexPage}></IndexRoute>
            <Route path="patterns" component={PatternsLayout}>
                <IndexRoute component={PatternsIndex}></IndexRoute>
                <Route path="(:patternName)" component={PatternPage}></Route>
            </Route>
        </Route>
    </Router>;


ReactDOM.render(<App />, document.getElementById('app'));
