import * as React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component<{}, {}> {
    render() {
        return (
            <ul>
                <li>
                    <Link activeClassName="active" to="/">Home</Link>
                </li>
                <li>
                    <Link activeClassName="active" to="About">About</Link>
                </li>
            </ul>
        );
    }
}
