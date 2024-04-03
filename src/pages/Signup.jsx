// src/pages/Signup.jsx

import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = () => {
  // TODO Implement signup logic here
  alert(`First Name: ${firstName}\nLast Name: ${lastName}\nUsername: ${username}\nEmail: ${email}\nPassword: ${password}`);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    // TODO Implement logic for navigating to login page
  };

  return (
    <div className="signup-container-in-signup">
      <h2 className="signup-to-friendr-h2">Sign Up to Friendr</h2>
      <form>
        <input
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="first-name-box-in-signup"
        />
        <input
          type="text"
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="last-name-box-in-signup"
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="username-box-in-signup"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="email-box-in-signup"
        />
        <input
          type="email"
          placeholder="Confirm Email"
          value={confirmEmail}
          onChange={(e) => setConfirmEmail(e.target.value)}
          className="confirm-email-box-in-signup"
        />
        <div className="password-field">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="password-box-in-signup"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="show-password-button-in-signup"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="confirm-password-box-in-signup"
        />
        <button
          type="button"
          onClick={handleSignup}
          className="signup-button-in-signup"
        >
          Sign Up
        </button>
      </form>
      <div className="login-container-in-signup">
        <span>Already have an account?</span>
        <Link to="/login">
        <button
          type="button"
          onClick={handleLogin}
          className=""
        >
          Login
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
