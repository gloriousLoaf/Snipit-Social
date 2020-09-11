// PROFILE PAGE
import React from 'react';
import NavBar from '../NavBar';
import UserCard from './UserCard';
import SocialCard from './SocialCard';
import AboutCard from './AboutCard';
import UserActions from './UserActions';
import './style.css';

const Profile = () => {
    return (
        <div className="profContainer">
            <NavBar />
            <div className="cardContainer">
                <UserCard />
                <SocialCard />
                <AboutCard />
                <UserActions />
            </div>
        </div>
    )
};

export default Profile;