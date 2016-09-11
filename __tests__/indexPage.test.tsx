// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import IndexPage from '../src/components/IndexPage';
declare var require;
const renderer = require('react-test-renderer');

it('renders correctly', () => {
    const tree = renderer.create(<IndexPage />).toJSON();
    expect(tree).toMatchSnapshot();
});
