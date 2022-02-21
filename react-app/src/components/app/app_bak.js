import React, {Component} from 'react';

import Header from '../header';
import MenuPanel from '../menu-panel';
/*import MainPanel from '../main-panel';*/
import Spinner from "../spinner";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Calculate, UsersList} from "../pages";
import Footer from '../footer';

import './app.css';

export default class App extends Component {

    state = {
        loading: true
    }

    render() {
        return (
            <div className="main">
                <Header/>
                <div className="body">
                    <div className="left-panel">
                        <MenuPanel/>
                    </div>
                    <div className="right-panel">
                        <Router>
                            <Switch>
                                <Route path="/" component={UsersList} exact/>
                                <Route path="/calc" component={Calculate}/>
                            </Switch>
                        </Router>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    };
};