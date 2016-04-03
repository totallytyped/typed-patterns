import * as React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component<{}, {}> {
    render() {
        return (
            <ul>
                <li>
                    <Link activeClassName="active" to="/">Test2</Link>
                </li>
                <li>
                    <Link activeClassName="active" to="About">Test2</Link>
                </li>
            </ul>
        );
    }
}
