import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import ChatRequest from './pages/ChatRequest.jsx'
import ChatPage from './pages/ChatPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login/>
    <Signup/>
    <ChatRequest/>
    <ChatPage/>
  </React.StrictMode>,
)
