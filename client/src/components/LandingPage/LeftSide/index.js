// LEFTSIDE - LANDINGPAGE
import React from 'react';

const LeftSide = () => {
    return (
        <div className="col-md-6 p-0 bg-m h-md-100">
            <div className="text-white d-md-flex align-items-center h-100 p-5 justify-content-center">
                <div className="logoarea pt-5 pb-5">
                    <ol>
                        <i className="fa fa-heart icon" style={{ marginLeft: "0.2rem" }}></i>
                 &nbsp; Built by developers.
                </ol>
                    <ol>
                        &nbsp;<i className="fa fa-user icon"></i>
                 &nbsp; Collaborate with others.
                </ol>
                    <ol>
                        &nbsp;<i className="fa fa-lock icon"></i>
                 &nbsp; Total control and privacy.
                </ol>
                </div>
            </div>
        </div>
    )
};

export default LeftSide;