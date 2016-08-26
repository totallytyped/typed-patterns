// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import Menu from './Menu';


export default ({children}) =>
    <section className="content wrap documentationContent">
        <div className="nav-docs">
            <div className="nav-docs-section">
                <h3>All patterns</h3>
                <Menu />
            </div>
        </div>
        <div className="inner-content">
            {children}
        </div>
    </section>;
