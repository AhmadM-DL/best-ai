import React, { useState } from 'react';
import { Link } from "react-router-dom";

import "./LogIn.css"

const LogIn= ({loginHandler}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        console.log('Logging in with:', { username, password });
        loginHandler();
    };

    return (
        <div class="container">
            <div class="form">
                <form style={{display: "block"}}>
                    <input type="text" placeholder="username"  value={username} onChange={handleUsernameChange}/>
                    <input type="password" placeholder="password" value={password} onChange={handlePasswordChange}/>
                    <button onClick={handleLogin}>login</button>
                    <p class="message">
                        Not registered?
                        <Link to="/signup">Create an account</Link>
                    </p>
                </form>
            </div>
        </div>
        );
}

export default LogIn;
