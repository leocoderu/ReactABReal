import React from "react";
import './login-panel.css';
import userFace from './ellipse.png';
import loginIco from './login.png';

const LoginPanel = () => {
    return (
        <div className="login-panel">
            <img src={userFace} alt="UserFace"/>
            <div className="but-log">
                <button>
                    <img src={loginIco} alt="LogIn"/>
                </button>
            </div>
        </div>
    );
};

export default LoginPanel;