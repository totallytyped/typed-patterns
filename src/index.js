"use strict";
var React = require('react');
var ReactDOM = require('react-dom');
var react_router_1 = require('react-router');
var history_1 = require('history');
require('./css/main.styl');
require('./css/draft.styl');
require('../vendors/joint.min.css');
var Layout_tsx_1 = require('./components/Layout.tsx');
var IndexPage_tsx_1 = require('./components/IndexPage.tsx');
var PatternsLayout_tsx_1 = require('./components/PatternsLayout.tsx');
var PatternsIndex_tsx_1 = require('./components/PatternsIndex.tsx');
var PatternPage_tsx_1 = require('./components/PatternPage.tsx');
var appHistory = react_router_1.useRouterHistory(history_1.createHashHistory)({ queryKey: false });
var App = function () {
    return React.createElement(react_router_1.Router, {history: appHistory}, 
        React.createElement(react_router_1.Route, {path: "/", component: Layout_tsx_1.default}, 
            React.createElement(react_router_1.IndexRoute, {component: IndexPage_tsx_1.default}), 
            React.createElement(react_router_1.Route, {path: "patterns", component: PatternsLayout_tsx_1.default}, 
                React.createElement(react_router_1.IndexRoute, {component: PatternsIndex_tsx_1.default}), 
                React.createElement(react_router_1.Route, {path: "(:test)", component: PatternPage_tsx_1.default})))
    );
};
ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
