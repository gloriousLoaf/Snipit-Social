// PROFILE PAGE
import React from 'react';
import Sidebar from './Sidebar';
// import MainContainer from './MainContainer';
import SocialCard from './SocialCard';
import './style.css';

const Profile = () => {
    return (
        <div className="profilePage">

            <Sidebar />

            <div className="main-container container">
                <div className="card profCard container" id="profile">
                    <img src="https://pecb.com/conferences/wp-content/uploads/2017/10/no-profile-picture.jpg" alt="Guillaume's profile picture" />
                    <h1>User Name</h1>
                    <h3>Programmer | Meditator | Boxer | Surfer | Learner</h3>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium atque distinctio similique
                    illum facilis molestiae, a veniam, explicabo perspiciatis
               soluta error autem excepturi sed dolorem itaque. Mollitia deleniti animi laborum! Now is time to re-invente myself. This journey is starting with me learning web development in beautiful Lisbon</p>
                    <a href="https://github.com/gbarthere" target="_blank" className="btn-click">Message me</a>
                </div>

                <SocialCard />

                <div className="card profCard text-align container">
                    <h2 className="d-flex justify-content-center">About me</h2>
                    <div className="book-card">
                        <img src="images/the_dharma_bums.jpg" alt="The Dharma Bums cover" />
                        <div className="book-content">
                            <h4>favorite Book</h4>
                            <p>The book concerns duality in Kerouac's life and ideals, examining the relationship of the outdoors, mountaineering, hiking, and hitchhiking through the West with his "city life" of jazz clubs, poetry readings, and drunken parties. The protagonist's search for a "Buddhist" context to his experiences (and those of others he encounters) recurs throughout the story.</p>
                        </div>
                    </div>
                    <div className="book-card">
                        <div className="book-content">
                            <h4>My Experience</h4>
                            <p>The quests of Fitz Chivalry, from royal bastard to assassin's apprentice</p>
                        </div>
                        <img src="images/the_royal_assassin.jpg" alt="The royal assassin's cover" />
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Profile;