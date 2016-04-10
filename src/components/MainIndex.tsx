import * as React from 'react';
import { Link } from 'react-router';

export default class MainIndex extends React.Component<{}, {}> {
    render() {
        return (
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
                    <p>Fish text</p>
                    <section className="home-bottom-section">
                        <div className="buttons-unit">
                            <Link className="button" to="/patterns">See more patterns</Link>
                        </div>
                    </section>
                </section>
            </div>
        );
    }
}
