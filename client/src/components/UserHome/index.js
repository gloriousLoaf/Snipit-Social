//// USERHOME ////
// merge into Profile Page
import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../App";
import './style.css';

// create UserHome, temporary profile with GH data, using AuthContext global state
const UserHome = () => {
    const { state, dispatch } = useContext(AuthContext);

    if (!state.isLoggedIn) {
        return <Redirect to="/login" />;
    }

    // create props for user
    const { avatar_url, name, public_repos, followers, following } = state.user

    const handleLogout = () => {
        dispatch({
            type: "LOGOUT"
        });
    }

    return (
        <div className="container">
            <button onClick={() => handleLogout()}>Logout</button>
            <div>
                <div className="content">
                    <img src={avatar_url} alt="Avatar" />
                    <span>{name}</span>
                    <span>{public_repos} Repos</span>
                    <span>{followers} Followers</span>
                    <span>{following} Following</span>
                </div>
            </div>
        </div>
    );
};

export default UserHome;