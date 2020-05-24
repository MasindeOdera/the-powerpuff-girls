import React from 'react';
import { Image } from 'semantic-ui-react';
import logo from '../images/logo.png';
import './PathHeader.scss';

function PathHeader() {
    return (
        <React.Fragment>
            <div className="Path">
            <Image src={logo} verticalAlign='middle' avatar />
                <span>
                    <b>Home / Shows / The Powerpuff Girls</b>
                </span>
            </div>
        </React.Fragment>
    )
}

export default PathHeader
