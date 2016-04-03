import * as React from 'react';
import { Link } from 'react-router';

import { patterns } from './Pattern';

export default class App extends React.Component<{}, {}> {
    render() {
        return (
            <ul>
                {
                    Object.keys(patterns).map((e) => {
                        return (
                            <li key={e}>
                                <Link activeClassName="active" to={'patterns/' + e}>{e}</Link>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}
