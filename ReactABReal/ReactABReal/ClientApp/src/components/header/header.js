import React, { Fragment } from 'react';
import img from './logo.png';
import './header.css';

const Header = () => {
    return (
        <Fragment>
            <div className="header">
                <img src={ img } alt="Logo" />
            </div>
        </Fragment>
    );
};

export default Header;