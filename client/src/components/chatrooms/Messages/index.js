// MESSAGES Box
import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message';
import './style.css';


// ScrollToBottom scrolls to most recent messages
const Messages = ({ messages, name }) => (
    <ScrollToBottom className="messages messageViewer">
        {messages.map((message, i) => <div key={i}><Message message={message} name={name} /></div>)}
    </ScrollToBottom>
);

export default Messages;