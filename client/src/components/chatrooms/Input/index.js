// INPUT Chat box
import React from 'react';


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
        <button className="sendButton" onClick={e => sendMessage(e)}>Send</button>
    </form>
)

export default Input;