// USERCARD - PROFILE
import React from 'react';
import { Button } from 'react-bootstrap';
import './style.css';

const UserCard = () => {
    return (
        <div className="card profCard container" id="profile">
            <img className="avatar" src="https://pecb.com/conferences/wp-content/uploads/2017/10/no-profile-picture.jpg" alt="User Profile" />
            <h1>User Name</h1>
            <h3>Programmer | Meditator | Boxer | Surfer | Learner</h3>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium atque distinctio similique
            illum facilis molestiae, a veniam, explicabo perspiciatis
   soluta error autem excepturi sed dolorem itaque. Mollitia deleniti animi laborum! Now is time to re-invente myself. This journey is starting with me learning web development in beautiful Lisbon</p>
            <Button href="#" target="_blank" className="msgBtn">Message me</Button>
        </div>
    )
};

export default UserCard;