import * as React from 'react';
import { Link } from 'react-router';


export default class Layout extends React.Component<{}, {}> {
    render() {
        return (
            <div className="container">
                <nav className="nav-main">
                    <div className="wrap">
                        <Link className="nav-home" to="/">Typed Patterns</Link>
                        <ul className="nav-site">
                            <li>
                                <Link activeClassName="active" to="/patterns">Patterns</Link>
                            </li>
                            <li>
                                <a href="https://github.com/totallytyped/typed-patterns">
                                    Github
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                {this.props.children}
                <footer>
                    <div className="wrap">
                        <div className="right">
                            Typed Patterns © 2016
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}
