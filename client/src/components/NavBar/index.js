// NAVBAR - PROFILE
import React, { useState, useEffect } from 'react';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';
import gitAPI from "../../utils/GithubAPIS";
import './style.css';

const NavBar = () => {

    // hooks
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    // handleSelect for chat dropup menu
    const handleSelect = (e) => {
        console.log(e);
        setRoom(e)
    }

    // GETTING USER NAME will look something like this...
    useEffect((e) => {
        gitAPI.getGitInfo()
            .then(response => {
                console.log(response);
                // setName(response.data.name);
            })
    })

    return (
        <div className="navbarContainer">
            <Button href="/feed" className="navbarLogo">
                <i className="fas fa-stream" aria-hidden="true" title="profile"></i>
            </Button>

            {/* OLD - Maybe we'll have good direct messaging, and move that up
            to the "Message Me" button in UserCard. Change it to "Inbox"? */}
            {/* <Button href="/messages" className="navbarLogo">
                <i className="far fa-comment-alt" aria-hidden="true"></i>
            </Button> */}

            {/* NEW!!! - Dropup menu to pop into any of a few
            predefined live chatrooms. Logic not working yet. */}
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