// CHAT
import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import TextBox from '../TextBox';
import Messages from '../Messages';
import InfoBar from '../InfoBar';
import Input from '../Input';
import './style.css';

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
        // above .emit() might crash? try this:
        // socket.emit('join', {name, room}, (err) => {
        //     if(err){
        //          do{
        //              alert(err + 'Username taken, please go back and try another");
        //          }while(err);
        //     }
        //     });
        //  }, [ENDPOINT, location.search]);

        // might not need?
        return () => {
            socket.emit('disconnect');
            socket.off();
        }
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
    }, []); // might need [messages]

    // send a new message
    const sendMessage = (e) => {
        e.preventDefault();
        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    };

    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room} />
                <Messages messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
            <TextBox users={users} />
        </div>
    );
}

export default Chat;