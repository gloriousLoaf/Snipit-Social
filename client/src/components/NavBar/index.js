// NAVBAR - PROFILE
import React, { useState, useEffect } from 'react';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';
import './style.css';

const NavBar = () => {

    // hooks for getting user & chatroom for URL
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    // handleSelect for chat dropup menu
    // this works, grabs name & room selected to create URL
    const userName = JSON.parse(localStorage.getItem("user"));
    console.log(userName.name)
    const handleSelect = (e) => {
        setRoom(e)
        setName(userName.name);
    }

    return (
        <div className="navbarContainer">
            <Button href="/feed" className="navbarLogo">
                <i className="fas fa-stream" aria-hidden="true" title="profile"></i>
            </Button>

            {/* Dropup menu to pop into any of a few predefined live chatrooms */}
            <DropdownButton
                className="navbarLogo"
                title={
                    <i className="far fa-comment-alt" aria-hidden="true"></i>
                } drop="up">
                <Dropdown.Item className="liveChats">Chat Rooms:</Dropdown.Item>
                <Dropdown.Item href={`/chat?name=${name}&room=${room}`} eventKey="Frontend" onSelect={handleSelect}>#frontend</Dropdown.Item>
                <Dropdown.Item href={`/chat?name=${name}&room=${room}`} eventKey="Backend" onSelect={handleSelect}>#backend</Dropdown.Item>
                <Dropdown.Item href={`/chat?name=${name}&room=${room}`} eventKey="Hardware" onSelect={handleSelect}>#hardware</Dropdown.Item>
                <Dropdown.Item href={`/chat?name=${name}&room=${room}`} eventKey="Gaming" onSelect={handleSelect}>#gaming</Dropdown.Item>
                <Dropdown.Item href={`/chat?name=${name}&room=Life`} eventKey="Life" onSelect={handleSelect}>#life</Dropdown.Item>
            </DropdownButton>

            <Button href="/profile" className="navbarLogo">
                <i className="far fa-user-circle" aria-hidden="true"></i>
            </Button>
        </div>
    )
};

export default NavBar;