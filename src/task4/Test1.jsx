import React, { useState } from 'react';
import "./test.css"
const Test = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleLogin = () => {
        if (
            !username.includes("@") ||
            !/\d/.test(password) ||
            !/[A-Z]/.test(password) ||
            /[^\w@]/.test(password)
        ) {
            setErrorMessage("Invalid username or password format");
        } else if (password === "SmartServTest@123") {
            onLogin(true);
        } else {
            setErrorMessage("Invalid username or password ");
        }
    };

    const handleForgotPassword = () => {
        // Open the user's default email client for password reset
        window.location.href =
            "mailto:support@smartserv.io?subject=Password Reset Request";
    };
    return (
        <div className="wrapper">
            <div className='inner-wrapper'>
            <form className="form-signin"> 
                <div className='image'></div>
                <input
                    type="text"
                    className="form-control"
                    name="username"
                    placeholder="Username"
                    required
                    autoFocus
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                
                <button 
                    className="btn "
                    type="submit"
                    onClick={handleLogin}
                >
                    Login
                </button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <br></br>
                <div className='forgetpassword'>
                <a href="#" onClick={handleForgotPassword}>
                    Forgot Password?
                   
                </a>
                </div>
            </form>
            </div>
        </div>
    );
};

export default Test;
