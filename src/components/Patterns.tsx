import * as React from 'react';
import Menu from './Menu';

export default class Patterns extends React.Component<{}, {}> {
    render() {
        return (
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
        );
    }
}
