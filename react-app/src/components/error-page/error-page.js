import React from "react";
import img from './error.png';

import './error-page.css';

const ErrorPage = () => {
    return(
        <div className="error-page">
            <img src={img} alt="Error!"/>
            <span className="oops">Oops...</span>
            <span>something has gone terrible wrong!!!</span>
            <span>But don't worry, we are already fixing this problem</span>
        </div>
    );
};

export default ErrorPage;