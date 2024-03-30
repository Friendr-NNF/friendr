// src/pages/ChatRequest.jsx

import React from 'react';
import './ChatRequest.css'; // Import CSS for styling

const ChatRequest = ({ requesterName }) => {
  const handleAccept = () => {
    // TODO Implement logic for accepting the chat request
    alert('Chat request accepted');
  };

  const handleDecline = () => {
    // TODO Implement logic for declining the chat request
    alert('Chat request declined');
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

ChatRequest.defaultProps = {
  requesterName: "Barack Obama"
};

export default ChatRequest;
