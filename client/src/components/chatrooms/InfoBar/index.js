// INFOBAR
import React from 'react';


// rendering an InfoBar that indicates what rooms are open
const InfoBar = ({ room }) => (
    <div className="infoBar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" alt="Online indicator." />
            <h3>{room}</h3>
        </div>
        <div className="rightInnerContainer">
            <a href="/"><img alt="Close chatbox." /></a>
        </div>
    </div>
);

export default InfoBar;
