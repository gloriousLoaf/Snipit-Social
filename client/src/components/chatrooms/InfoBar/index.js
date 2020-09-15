// INFOBAR
import React from 'react';
import './style.css';


// rendering an InfoBar that indicates what rooms are open
const InfoBar = ({ room }) => (
    <div className="infoBar chats-headline">
        {/* THIS could be subbed out for who you're chatting with in a DM setup? */}
        <div className="leftInnerContainer uk-flex">
            <h3>{room}</h3>
            <i className="onlineIcon ml-2 mt-1 text-success fas fa-signal"></i>
        </div>
    </div>

    // OLD LAYOUT - MIGHT NEED CHUNKS
    // <div className="infoBar">
    //     <div className="leftInnerContainer">
    //         <img className="onlineIcon" src={onlineIcon} alt="Online indicator." />
    //         <h3>{room}</h3>
    //     </div>
    //     <div className="rightInnerContainer">
    //         <a href="/"><i className="far fa-times-circle"></i></a>
    //     </div>
    // </div>
);

export default InfoBar;
