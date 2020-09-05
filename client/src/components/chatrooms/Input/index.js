// INPUT Chat box
import React from 'react';
import Plane from '../Icons/paper-plane.svg'
import './style.css';


// render the Input text bar, passing all these as props
const Input = ({ setMessage, sendMessage, message }) => (
    <form className="form">
        <input
            className="input"
            type="text"
            placeholder="What's up?"
            value={message}
            onChange={({ target: { value } }) => setMessage(value)}
            onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}
        />
        <button className="sendButton" onClick={e => sendMessage(e)}><img alt="Paper Plane" src={Plane} /></button>
    </form>
)

export default Input;