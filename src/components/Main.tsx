import * as React from 'react';
import { Link } from 'react-router';

import Menu from './Menu';

export default class Main extends React.Component<{}, {}> {
    render() {
        return (
            <div className="container">
                <nav className="nav-main">
                    <div className="wrap">
                        <Link className="nav-home" to="/">Typed Patterns</Link>
                        <ul className="nav-site">
                            {/*<li>
                                <a href="/" className="active">
                                    docs
                                </a>
                            </li>*/}
                            <li>
                                <a href="https://github.com/totallytyped/typed-patterns">
                                    Github
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <section className="content wrap documentationContent">
                    <div className="nav-docs">
                        <div className="nav-docs-section">
                            <h3>All patterns</h3>
                            <Menu />
                        </div>
                    </div>
                    <div className="inner-content">
                        {this.props.children}
                    </div>
                </section>
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
