// JOIN
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Join = () => {
    // Hooks for onChange handlers
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="outerContainer">
            <div className="innerContainer">
                <h1 className="heading">Join</h1>
                <div>
                    <input placeholder="Name" className="joinInput" type="text" onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <input placeholder="Room" className="joinInput marginTop" type="text" onChange={(e) => setRoom(e.target.value)} />
                </div>
                {/* Link creates URL w/ params from useState Hooks */}
                <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button marginTop" type="submit">Sign In</button>
                </Link>
            </div>
        </div>
    );
};

export default Join;