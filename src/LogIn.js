import React, { useState } from 'react';
import "./LogIn.css"

const LogIn= ({onRegisterClick}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        // Implement login functionality
        console.log('Logging in with:', { username, password });
    };

    const handleRegister = () => {
        if (onRegisterClick) {
            onRegisterClick();
        }
    };

    return (
        <div class="container">
            <div class="form">
                <form style={{display: "block"}}>
                    <input type="text" placeholder="username"  value={username} onChange={handleUsernameChange}/>
                    <input type="password" placeholder="password" value={password} onChange={handlePasswordChange}/>
                    <button onClick={handleLogin}>login</button>
                    <p class="message">
                        Not registered? <span onClick={handleRegister}>Create an account</span>
                    </p>
                </form>
            </div>
        </div>
        );
}

export default LogIn;
