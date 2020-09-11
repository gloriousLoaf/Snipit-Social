// PROFILE PAGE
import React from 'react';
import Sidebar from './Sidebar';
import UserCard from './UserCard';
import SocialCard from './SocialCard';
import AboutCard from './AboutCard';
import UserActions from './UserActions';
import PostsCard from './PostsCard'
import './style.css';

const Profile = () => {
    return (
        <div className="profilePage">

            <Sidebar />

            <div className="main-container container">
                <UserCard />
                <SocialCard />
                {/* To Do <PostsCard /> */}
                <AboutCard />
                <UserActions />
            </div>

        </div>
    )
};

export default Profile;