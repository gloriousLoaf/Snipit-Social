// SOCIAL CARD - PROFILE
import React from 'react';
import './style.css';


const Social = () => {
    return (
        <div className="card profCard container my-2 d-flex justify-content-center" id="social">
            <a href="#" target="_blank">
                <i className="fa fa-facebook-square m-2 fbLogo" aria-hidden="true" title="facebook" ></i>
            </a>
            <a href="#" target="_blank">
                <i className="fa fa-instagram m-2 instaLogo" aria-hidden="true" title="Instagram" ></i>
            </a>
            <a href="#" target="_blank">
                <i className="fa fa-linkedin-square m-2 linkedLogo" aria-hidden="true" title="Linkedin" ></i>
            </a>
            <a href="#" target="_blank">
                <i className="fa fa-github-square m-2 gitLogo" aria-hidden="true" title="Github" ></i>
            </a>
        </div>
    )
};

export default Social;