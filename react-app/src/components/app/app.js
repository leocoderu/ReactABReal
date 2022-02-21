import React, {Component} from 'react';

import Header from '../header';
import MenuPanel from '../menu-panel';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Calculate, UsersList} from "../pages";
import Footer from '../footer';

import ErrorBoundary from "../error-boundary";
import { AbServiceProvider } from "../abservice-context";
import Spinner from "../spinner";

import { AbService } from "../../services";

import './app.css';

export default class App extends Component {

    state = {
        abService: new AbService(),
        data: [],
        loading: true,
        error: false
    }

    update(){
        this.setState({
            loading: true,
            error: false
        });

        this.state.abService.getAllPeople()
            .then((data) => {
                //console.log("Update", data);
                this.setState({
                    data,
                    loading: false
                })
            })
            .catch(() => {
                this.setState({
                    error: true,
                    loading: false
                })
            });
    };

    componentDidMount() {

        this.update();
        //console.log("DidMount",this.state.data);
    }

    render() {
        if (this.state.loading) return <Spinner/>;
        //console.log("this.state.data");
//
        return (
            <ErrorBoundary>
                <AbServiceProvider value={this.state.abService}>
                    <div className="main">
                        <Header/>
                        <div className="body">
                            <div className="left-panel">
                                <MenuPanel/>
                            </div>
                            <div className="right-panel">
                                <Router>
                                    <Switch>
                                        <Route path="/" exact
                                               render={() => {
                                                   return <UsersList toData={this.state.data}/>
                                               }}/>
                                        <Route path="/calc" component={Calculate}/>
                                    </Switch>
                                </Router>
                            </div>
                        </div>
                        <Footer/>
                    </div>
                </AbServiceProvider>
            </ErrorBoundary>
        );
    };
};

//