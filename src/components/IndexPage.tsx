// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import { Link } from 'react-router';


export default () =>
    <div>
        <div className="hero">
            <div className="wrap">
                <div className="text">
                    <strong>
                        Typed Patterns
                    </strong>
                </div>
                <div className="minitext">
                    Design Patterns from GoF book
                </div>
            </div>
        </div>
        <section className="content wrap">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <section className="home-bottom-section">
                <div className="buttons-unit">
                    <Link className="button" to="/patterns">See more patterns</Link>
                </div>
            </section>
        </section>
    </div>;
