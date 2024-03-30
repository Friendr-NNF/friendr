// src/pages/ChatRequest.jsx

import React from 'react';
import './ChatRequest.css'; // Import CSS for styling

const ChatRequest = ({ requesterName, onAccept, onDecline }) => {
  const handleAccept = () => {
    // TODO Implement logic for accepting the chat request
    alert('Chat request accepted');
    onAccept(); // Call the onAccept function passed as prop
  };

  const handleDecline = () => {
    // TODO Implement logic for declining the chat request
    alert('Chat request declined');
    onDecline(); // Call the onDecline function passed as prop
  };

  return (
    <div className="chat-request-container">
      <div className="chat-request">
        <h2>{requesterName}</h2>
        <p>wants to chat with you.</p>
        <div className="button-container">
          <button onClick={handleAccept}>Accept</button>
          <button onClick={handleDecline}>Decline</button>
        </div>
      </div>
    </div>
  );
};

export default ChatRequest;
