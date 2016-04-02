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
                                <a href="https://github.com/totallytyped/typed-patterns" className>
                                    github
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <section className="content wrap documentationContent">
                    <div className="nav-docs">
                        <div className="nav-docs-section">
                            <h3>Main menu</h3>
                            <Menu />
                        </div>
                    </div>
                    <div className="inner-content">
                        <h1>
                            Overview
                        </h1>
                        <p>
                            ololo
                        </p>
                        {this.props.children}
                    </div>
                </section>
                <footer className="wrap">
                    <div className="right">
                        © 2016.
                    </div>
                </footer>
            </div>
        );
    }
}
