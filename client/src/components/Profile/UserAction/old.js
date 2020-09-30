// USERACTIONS - PROFILE
import React from "react";
// import React, { useContext } from "react";
// import { Redirect } from "react-router-dom";
import { Button } from 'react-bootstrap';
// import { AuthContext } from "../../../App";
import './style.css';

const OldUserAction = () => {

    // ALL THIS commented out stuff was for GH auth,
    // please keep as we may get it working

    // AuthContext using reducer
    // const { state, dispatch } = useContext(AuthContext);

    // if (!state.isLoggedIn) {
    //     return <Redirect to="/" />;
    // }

    // const handleLogout = () => {
    //     dispatch({
    //         type: "LOGOUT"
    //     });
    // }

    return (
        <>
            <div className="card my-4 py-3 actions container">
                <h2 className="d-flex justify-content-center">Settings</h2>
                <div className="row justify-content-around my-2">

                    {/* Edit Profile function doesn't exist yet */}
                    <Button className="settingBtn">
                        <i className="fas fa-sliders-h"></i>
                    </Button>

                    {/* Logout used to work with GH AuthContext, but... */}
                    {/* <Button className="settingBtn" onClick={() => handleLogout()}> */}
                    {/* <Button className="settingBtn"> */}
                    {/* <i className="fas fa-sign-out-alt"></i> */}
                    {/* </Button> */}

                </div>
            </div>
        </>
    )
};

export default OldUserAction;