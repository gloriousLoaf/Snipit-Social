// USERACTIONS - PROFILE
import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { AuthContext } from "../../../App";
import './style.css';

const UserActions = () => {

    // AuthContext using reducer
    const { state, dispatch } = useContext(AuthContext);

    if (!state.isLoggedIn) {
        return <Redirect to="/" />;
    }

    const handleLogout = () => {
        dispatch({
            type: "LOGOUT"
        });
    }

    return (
        <div className="card profCard actions container">
            <h2 className="d-flex justify-content-center">Settings</h2>
            <div className="row justify-content-around my-2">

                {/* Edit Profile function doesn't exist yet */}
                <Button className="settingBtn">
                    <i className="fas fa-sliders-h"></i>
                </Button>

                <Button className="settingBtn" onClick={() => handleLogout()}>
                    <i className="fas fa-sign-out-alt"></i>
                </Button>


            </div>
        </div>
    )
};

export default UserActions;