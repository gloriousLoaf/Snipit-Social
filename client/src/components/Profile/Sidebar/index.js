// SIDEBAR - PROFILE
import React from 'react';
import './style.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <a href="#profile">
                <i className="fa fa-user" aria-hidden="true" title="profile"></i>
            </a>
            <a href="#movies">
                <i className="fa fa-film" aria-hidden="true"></i>
            </a>
            <a href="#about">
                <i className="fa fa-link" aria-hidden="true"></i>
            </a>
        </div>
    )
};

export default Sidebar;