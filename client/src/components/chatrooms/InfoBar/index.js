// INFOBAR
import React from 'react';
import onlineIcon from '../Icons/onlineIcon.png';
import closeIcon from '../Icons/closeIcon.png';
import './style.css';


// rendering an InfoBar that indicates what rooms are open
const InfoBar = ({ room }) => (
    <div className="infoBar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src={onlineIcon} alt="Online indicator." />
            <h3>{room}</h3>
        </div>
        <div className="rightInnerContainer">
            <a href="/"><img src={closeIcon} alt="Close chatbox." /></a>
        </div>
    </div>
);

export default InfoBar;
