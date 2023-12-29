import React, { useState } from "react";
import "./page.css"; // Import the CSS file for styling
import Dashboard from "./Dashboard";
import Test1 from "./Test1"
const LoginDashboard = ({ onLogin }) => {
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
      setErrorMessage("Invalid username or password");
    }
  };

  const handleForgotPassword = () => {
    // Open the user's default email client for password reset
    window.location.href =
      "mailto:support@smartserv.io?subject=Password Reset Request";
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo">Logo</div>
        <div className="form-container">
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username (email format)"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password (no special characters, @ required, uppercase and number)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <a href="#" onClick={handleForgotPassword}>
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

const Wrapper = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) return <Dashboard />;
  else return <Test1 onLogin={() => setIsLoggedIn(true)} />;
};

export default Wrapper;
