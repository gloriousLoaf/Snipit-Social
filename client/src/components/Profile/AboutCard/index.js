// ABOUTCARD - PROFILE
import React from 'react';
import './style.css';

const AboutCard = () => {
    return (
        <div className="card profCard text-align container">
            <h2 className="d-flex justify-content-center">About me</h2>
            <div className="book-card">
                <div className="book-content">
                    <h4>Favorite Book</h4>
                    <p>The book concerns duality in Kerouac's life and ideals, examining the relationship of the outdoors, mountaineering, hiking, and hitchhiking through the West with his "city life" of jazz clubs, poetry readings, and drunken parties. The protagonist's search for a "Buddhist" context to his experiences (and those of others he encounters) recurs throughout the story.</p>
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