// LEFTSIDE - LANDINGPAGE
import React from 'react';

const LeftSide = () => {
    return (
        <div className="col-md-6 p-0 bg-main h-md-100">
            <div className="text-white d-md-flex align-items-center h-100 p-5 justify-content-center">
                <div className="logoarea pt-5 pb-5">
                    <ol>
                        <i className="fa fa-heart icon" style={{ marginLeft: "0.1rem" }}></i>
                     &nbsp; Follow your interests.
                    </ol>
                    <ol>
                        &nbsp;<i className="fa fa-user icon"></i>
                     &nbsp; Collaborate with others.
                    </ol>
                    <ol>
                        &nbsp;<i className="fa fa-search icon"></i>
                     &nbsp; See what's happening.
                    </ol>
                </div>
            </div>
        </div>
    )
};

export default LeftSide;