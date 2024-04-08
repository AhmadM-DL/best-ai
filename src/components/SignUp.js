import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import {auth, registerWithEmailAndPassword} from "../firebase";
import "./SignUp.css"

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");

    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!name) alert("Please enter name");
        if (!password === confirmPassword) alert("Password doesn't match");

        registerWithEmailAndPassword(name, email, password);
        navigate("/");
      };

    useEffect(() => {
        if (loading) return;
        if (user) navigate("/");
    }, [user, loading]);
 

    return (
        <div className="container">
            <div className="form">
                <input type="name" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='name' required/>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' required/>
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" required/>
                <input type="password" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required placeholder="confirm password"/>
                <button type="submit" onClick={handleSubmit}>Sign Up</button>
            </div>
        </div>
    );
};

export default SignUp;
