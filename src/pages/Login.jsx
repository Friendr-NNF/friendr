// src/pages/Login.jsx

import React, { useState } from 'react';
import './Login.css'; // Import CSS for styling

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Implement login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPassword = () => {
    // Implement logic for forgot password functionality
    console.log('Forgot password clicked');
  };

  const handleSignUp = () => {
    // Implement logic for sign up
    console.log('Sign up clicked');
  };

  return (
    <div className="login-container">
      <h2>Login to Friendr</h2>
      <form>
        <input
          type="text"
          placeholder="Email or username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input-field"
        />
        <div className="password-field">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field password-input"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="show-password-button"
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
          className="login-button"
        >
          Login
        </button>
      </form>
      <div className="signup-container">
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
