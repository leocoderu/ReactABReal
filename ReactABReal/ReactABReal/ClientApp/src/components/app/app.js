import React from 'react';

import Header from '../header';
import MenuPanel from '../menu-panel';
import MainPanel from '../main-panel';
import Footer from '../footer';

import './app.css';

const App = () => {
    return (
        <div className="main">
            <Header />
            <div className="row mb2">
                <div className="col-md-6">
                    <MenuPanel />                    
                </div>
                <div className="col-md-6">
                    <MainPanel />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default App;