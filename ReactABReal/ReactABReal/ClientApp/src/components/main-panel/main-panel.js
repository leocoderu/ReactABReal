import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { UsersList, Calculate } from '../pages';

import './main-panel.css';

const MainPanel = () => {
    return (
        <div className="main-panel">
            <Router>
                <Switch>
                    <Route path="/" component={UsersList} exact />
                    <Route path="/calc" component={Calculate} />
                </Switch>
            </Router>
        </div>
    );
};

export default MainPanel;