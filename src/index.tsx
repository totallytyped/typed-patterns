// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

import './css/main.styl';
import './css/draft.styl';
import '../vendors/joint.min.css';

import Layout from './components/Layout.tsx';
import IndexPage from './components/IndexPage.tsx';
import PatternsLayout from './components/PatternsLayout.tsx';
import PatternsIndex from './components/PatternsIndex.tsx';
import PatternPage from './components/PatternPage.tsx';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false } as any);

const App = () =>
    <Router history={appHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={IndexPage}></IndexRoute>
            <Route path="patterns" component={PatternsLayout}>
                <IndexRoute component={PatternsIndex}></IndexRoute>
                <Route path="(:test)" component={PatternPage}></Route>
            </Route>
        </Route>
    </Router>;


ReactDOM.render(<App />, document.getElementById('app'));
