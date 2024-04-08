import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./LogIn.css"

const LogIn= () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (loading) {
    //         return;
    //     } 
    //     if (user) navigate("/");
    // }, [user, loading]);

    // const handleLogin = (google) =>{
    //     if(google){
    //         signInWithGoogle();
    //     } else{
    //         console.debug(`handleLogin(${email}, ${password})`)
    //         logInWithEmailAndPassword(email, password);
    //     }
    // }

    return (
        <div className="container">
            <div className="form">
                <div style={{display: "block"}}>
                    <input type="text" placeholder="email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button >Login with Google</button>
                    <button >Login With Email</button>
                    {/* onClick={() => handleLogin(false)} */}
                    <p className="message">
                        <Link to="/reset">Forgot Password</Link> <br/>
                        Not registered? <Link to="/signup">Create an account</Link>
                    </p>
                </div>
            </div>
        </div>
        );
}

export default LogIn;