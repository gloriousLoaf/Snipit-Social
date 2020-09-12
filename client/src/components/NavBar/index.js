// SIDEBAR - PROFILE
import React from 'react';
import { Button } from 'react-bootstrap';
import './style.css';

// THIS COULD BE COME OUR NAV FOR THE WHOLE APP!!
const NavBar = () => {
    return (
        <div className="navbarContainer">
            <Button href="/timeline" className="navbarLogo">
                <i className="fas fa-stream" aria-hidden="true" title="profile"></i>
            </Button>
            <Button href="/messages" className="navbarLogo">
                <i className="far fa-comment-alt" aria-hidden="true"></i>
            </Button>
            <Button href="/profile" className="navbarLogo">
                <i className="far fa-user-circle" aria-hidden="true"></i>
            </Button>
        </div>
    )
};

export default NavBar;