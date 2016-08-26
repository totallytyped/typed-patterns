// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import { Link } from 'react-router';
import { capitalizeFirstLetter } from '../utils';

import { patterns } from './PatternPage';


export default () =>
    <ul>
        {Object.keys(patterns).map(pattern =>
            <li key={pattern}>
                <Link activeClassName="active" to={'patterns/' + pattern}>{capitalizeFirstLetter(pattern)}</Link>
            </li>
        )}
    </ul>;
