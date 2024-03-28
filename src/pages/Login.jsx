// src/pages/Login.jsx

import React, { useState } from 'react';
import './Login.css'; // Import CSS for styling

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // TODO Implement login logic here
    alert(`Username = ${username}\nPassword = ${password}`);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPassword = () => {
    // TODO Implement logic for forgot password functionality
    alert('Forgot password clicked');
  };

  const handleSignUp = () => {
    // TODO Implement logic for sign up
    alert('Sign up clicked');
  };

  return (
    <div className="login-container-in-login">
      <h2 className="login-to-friendr-h2">Login to Friendr</h2>
      <form>
        <input
          type="text"
          placeholder="Email or username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="email-or-user-box-in-login"
        />
        <div className="password-field">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="password-box-in-login"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="show-password-button-in-login"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <button
          type="button"
          onClick={handleForgotPassword}
          className="forgot-password-button"
        >
          Forgot password?
        </button>
        <button
          type="button"
          onClick={handleLogin}
          className="login-button-in-login"
        >
          Login
        </button>
      </form>
      <div className="signup-container-in-login">
        <span>New to us?</span>
        <button
          type="button"
          onClick={handleSignUp}
          className=""
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Login;
