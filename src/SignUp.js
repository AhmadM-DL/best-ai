import React, { useState } from 'react';
import "./SignUp.css"

const SignUp = ({onBackToLogIn}) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if passwords match
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        // Perform signup logic (send data to server, etc.)
        console.log('Signup form submitted:', formData);
    };

    const handleBackToLogIn = () => {
        if(onBackToLogIn){
            onBackToLogIn()
        }
    }

    return (
        <div class="container">
            <div class="form">
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='email' required/>
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="password" required/>
                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required placeholder="confirm password"/>
                <button type="submit">Sign Up</button>
                <p class="message">
                    <span onClick={handleBackToLogIn}>Back to login</span>
                </p>
            </form>
            </div>
        </div>
    );
};

export default SignUp;
