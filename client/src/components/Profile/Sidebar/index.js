// SIDEBAR - PROFILE
import React from 'react';
import { Button } from 'react-bootstrap';
import './style.css';

// THIS COULD BE COME OUR NAV FOR THE WHOLE APP!!
const Sidebar = () => {
    return (
        <div className="sidebar">
            <Button href="#profile" className="sidebarLogo">
                <i className="fa fa-user" aria-hidden="true" title="profile"></i>
            </Button>
            <Button href="#movies" className="sidebarLogo">
                <i className="fa fa-film" aria-hidden="true"></i>
            </Button>
            <Button href="#about" className="sidebarLogo">
                <i className="fa fa-link" aria-hidden="true"></i>
            </Button>
        </div>
    )
};

export default Sidebar;