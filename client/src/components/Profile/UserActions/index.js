// USERACTIONS - PROFILE
import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { AuthContext } from "../../../App";
// import './style.css';

const UserActions = () => {

    // AuthContext using reducer
    const { state, dispatch } = useContext(AuthContext);

    if (!state.isLoggedIn) {
        return <Redirect to="/login" />;
    }

    const handleLogout = () => {
        dispatch({
            type: "LOGOUT"
        });
    }

    return (
        <div className="card profCard">
            <h2 className="d-flex justify-content-center">Settings</h2>
            <div className="row my-3">

                {/* ADJUST - col-sm-XX, px-XX justify-content-(center,end, around),
                    as needed for more buttons in the future? */}
                <div className="col-sm-6 d-flex justify-content-end">
                    {/* Edit Profile function doesn't exist yet */}
                    <Button className="msgBtn px-2">Edit Profile</Button>
                </div>
                <div className="col-sm-6 d-flex justify-content-start">
                    {/* handleLogout logs out, but isn't super clean yet. */}
                    <Button className="msgBtn px-3" onClick={() => handleLogout()}>Logout</Button>
                </div>

            </div>
        </div>
    )
};

export default UserActions;