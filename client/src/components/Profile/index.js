// PROFILE PAGE
import React from 'react';
import Sidebar from './Sidebar';
// import MainContainer from './MainContainer';
import UserCard from './UserCard';
import SocialCard from './SocialCard';
import AboutCard from './AboutCard';
import './style.css';

const Profile = () => {
    return (
        <div className="profilePage">

            <Sidebar />
            <div className="main-container container">
                <UserCard />
                <SocialCard />
                <AboutCard />
            </div>
        </div>
    )
};

export default Profile;