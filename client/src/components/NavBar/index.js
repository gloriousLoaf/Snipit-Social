// NAVBAR - PROFILE
import React, { useState } from 'react';
import { Button, Dropdown, DropdownButton, Form, FormControl } from 'react-bootstrap';
import searchAPI from '../../utils/searchUserAPI';
import './style.css';

const NavBar = () => {

    // hooks for getting user & chatroom for URL,
    // and hook for search bar
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [search, setSearch] = useState('');

    // handleSelect for chat dropup menu
    // this works, grabs name & room selected to create URL
    const userName = JSON.parse(localStorage.getItem("user"));
    const handleSelect = (e) => {
        setRoom(e)
        setName(userName.name);
    }


    const handleSearch = (e) => {
        e.preventDefault();
        // send search to API to DB?
        // HOW DOES THIS WORK??
        searchAPI.searchUser(search)
            .then(res => {
                // if (res.data.items === "error") {
                //     throw new Error(res.data.items);
                // } else {
                //     console.log(res.data.items);
                // }
                console.log(res)
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="navbarContainer">
            <Button href="/feed" className="navbarLogo">
                <i className="fas fa-stream" aria-hidden="true" title="profile"></i>
            </Button>

            {/* Dropup Chat: pop into any of a few predefined live chatrooms,
                we can add as many more as we like, let's keep it under 10 maybe? */}
            <DropdownButton
                className="navbarLogo"
                title={
                    <i className="far fa-comment-alt" aria-hidden="true"></i>
                } drop="up">
                <Dropdown.Item onClick={e => (!name || !room) ? e.preventDefault() : null} className="liveChats">Chat Rooms:</Dropdown.Item>
                <Dropdown.Item onClick={e => (!name || !room) ? e.preventDefault() : null} href={`/chat?name=${name}&room=${room}`} eventKey="Frontend" onSelect={handleSelect}>#frontend</Dropdown.Item>
                <Dropdown.Item onClick={e => (!name || !room) ? e.preventDefault() : null} href={`/chat?name=${name}&room=${room}`} eventKey="Backend" onSelect={handleSelect}>#backend</Dropdown.Item>
                <Dropdown.Item onClick={e => (!name || !room) ? e.preventDefault() : null} href={`/chat?name=${name}&room=${room}`} eventKey="Hardware" onSelect={handleSelect}>#hardware</Dropdown.Item>
                <Dropdown.Item onClick={e => (!name || !room) ? e.preventDefault() : null} href={`/chat?name=${name}&room=${room}`} eventKey="Gaming" onSelect={handleSelect}>#gaming</Dropdown.Item>
                <Dropdown.Item onClick={e => (!name || !room) ? e.preventDefault() : null} href={`/chat?name=${name}&room=Life`} eventKey="Life" onSelect={handleSelect}>#life</Dropdown.Item>
            </DropdownButton>

            {/* Dropup Search - pass submission to db (not written)  */}
            <DropdownButton
                alignRight
                className="navbarLogo"
                title={
                    <i className="fas fa-search" aria-hidden="true"></i>
                } drop="up">
                <Form onSubmit={handleSearch}>
                    <FormControl
                        autoFocus
                        type="search"
                        className="mx-3 my-2 w-auto"
                        placeholder="Search for Users"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </Form>
            </DropdownButton>

            <Button href="/profile" className="navbarLogo">
                <i className="far fa-user-circle" aria-hidden="true"></i>
            </Button>
        </div>
    )
};

export default NavBar;