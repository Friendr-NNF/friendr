// Settings.jsx
import React, { useState } from 'react';
import './Settings.css';

const Settings = () => {
  const [username, setUsername] = useState('John Doe');
  const [newName, setNewName] = useState('');

  const handleChangeName = () => {
    alert(`Are you sure you want to change your name from ${username} to ${newName}?`);

    if (newName.trim() !== '') {
      setUsername(newName.trim());
      setNewName('');
    }
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <div className="setting">
        <div className="change-name-box">
          <input
            type="text"
            placeholder={username}
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="password-box-in-login"
          />
          <button
            type="button"
            onClick={handleChangeName}
            className="change-name-button"
          >
            Change name
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
