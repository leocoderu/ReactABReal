import React from 'react';
import SearchPanel from "../search-panel";
import LoginPanel from "../login-panel";

import './header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <h3 className="text-muted">AB TEST REAL</h3>
            </div>
            <div className="search">
                <SearchPanel />
            </div>
            <div className="login">
                <LoginPanel />
            </div>
        </div>
    );
};

export default Header;