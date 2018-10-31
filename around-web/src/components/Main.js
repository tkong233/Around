import React from 'react';
import {Register} from './Registration';
import {Login} from './Login';

export class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <Register/>
                <Login/>
            </div>

        );
    }
}