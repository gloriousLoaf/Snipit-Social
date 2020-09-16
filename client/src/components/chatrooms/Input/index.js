// INPUT Chat box
import React from 'react';
import './style.css';


// render the Input text bar, passing all these as props
const Input = ({ setMessage, sendMessage, message }) => (

    <form className="message-reply uk-flex-middle uk-width-1-1">
        <textarea
            className="chatInput uk-textarea uk-width-expand"
            type="text"
            placeholder="What's up?"
            value={message}
            onChange={({ target: { value } }) => setMessage(value)}
            onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}
        />
        <button className="sendButton button primary" onClick={e => sendMessage(e)}><i className="uil-plane"></i></button>
    </form>

    // OLD LAYOUT - might need chunks
    // <form className="chatForm">
    //     <input
    //         className="chatInput"
    //         type="text"
    //         placeholder="What's up?"
    //         value={message}
    //         onChange={({ target: { value } }) => setMessage(value)}
    //         onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}
    //     />
    //     <button className="sendButton" onClick={e => sendMessage(e)}><img alt="Paper Plane" src={Plane} /></button>
    // </form>
)

export default Input;