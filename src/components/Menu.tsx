import * as React from 'react';
import { Link } from 'react-router';
import { capitalizeFirstLetter } from '../utils';

import { patterns } from './Pattern';

export default class App extends React.Component<{}, {}> {
    render() {
        return (
            <ul>
                {
                    Object.keys(patterns).map((pattern) => {
                        return (
                            <li key={pattern}>
                                <Link activeClassName="active" to={'patterns/' + pattern}>{ capitalizeFirstLetter(pattern) }</Link>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}
