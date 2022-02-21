import React, {Component} from "react";
import ErrorPage from "../error-page";

import './error-boundary.css';

export default class ErrorBoundary extends Component {
    state = {
        hasError: false
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        });
    }

    render(){
        if(this.state.hasError) {return <ErrorPage />}
            return this.props.children;
    };
};