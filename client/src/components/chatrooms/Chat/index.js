// CHAT
import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
// import CurrentUsers from '../CurrentUsers';
import Messages from '../Messages';
import InfoBar from '../InfoBar';
import Input from '../Input';
import './style.css';

// NEW!! Framework is here in this branch,
// BUT in the main is should live in pages.
// see commented out links to make that connection
import '../framework/css/style.css';
import '../framework/css/framework.css';
import '../framework/css/icons.css';
import '../framework/css/night-mode.css';

// import '../../../pages/FeedView/style.css';
// import '../../../pages/FeedView/css/framework.css';
// import '../../../pages/FeedView/css/icons.css';
// import '../../../pages/FeedView/night-mode.css';

let socket;
// Change room to thread, like texting? User to user, not group rooms?
const Chat = ({ location }) => {
    // Hooks
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    // individual message & all messages
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    // ENDPOINT will need to change if server changes
    const ENDPOINT = 'localhost:5000';

    // On Connect, data from URL params
    useEffect(() => {
        const { name, room } = queryString.parse(location.search);
        socket = io(ENDPOINT);
        setRoom(room);
        setName(name);

        // emit sends event to socket.io on backend
        socket.emit('join', { name, room }, (err) => {
            if (err) {
                alert(err);
            }
        });

        // ABOVE BLOCK socket.emit() might crash? try this:
        // socket.emit('join', {name, room}, (err) => {
        //     if(err){
        //          do{
        //              alert(err + 'Username taken, please go back and try another");
        //          }while(err);
        //     }
        //     });
        //  }, [ENDPOINT, location.search]);

        // might not need? begin:
        return () => {
            socket.emit('disconnect');
            socket.off();
        }
        // end

    }, [ENDPOINT, location.search]);

    // message handling
    useEffect(() => {
        // listen for messages, spread with new message
        socket.on('message', message => {
            setMessages(messages => [...messages, message]);
        });

        socket.on("roomData", ({ users }) => {
            setUsers(users);
        });
    }, []); // might need [messages] in callback

    // send a new message
    const sendMessage = (e) => {
        e.preventDefault();
        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    };

    return (
        <div className="outerChatContainer">
            <div className="chatContainer">
                <InfoBar room={room} />
                <Messages messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
            {/* <CurrentUsers users={users} /> */}
        </div>
    );
}

export default Chat;