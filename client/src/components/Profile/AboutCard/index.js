// ABOUTCARD - PROFILE
// NOT IN USE - yet?
// Could be used for parts?
import React from 'react';
import './style.css';

const AboutCard = () => {
    return (
        <div className="card profCard text-align container">
            <h2 className="d-flex justify-content-center">About me</h2>
            <div className="book-card">
                <div className="book-content">
                    <h4>Favorite Book</h4>
                    <p> </p>
                </div>
            </div>
            <div className="book-card">
                <div className="book-content">
                    <h4>My Experience</h4>
                    <p>The quests of Fitz Chivalry, from royal bastard to assassin's apprentice</p>
                </div>
            </div>
        </div>
    )
};

export default AboutCard;