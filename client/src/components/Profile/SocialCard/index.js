// SOCIAL CARD - PROFILE
import React from 'react';
import { Button } from 'react-bootstrap';
import './style.css';


const Social = () => {
    return (
        <div className="card profCard container my-2 d-flex justify-content-center" id="social">

            {/* This setup should work, just need to drop in links? */}
            <Button href="#" type="button" className="socialBtn">
                <i className="fa fa-facebook-square m-2" aria-hidden="true" title="facebook" ></i>
            </Button>
            <Button href="#" type="button" className="socialBtn">
                <i className="fa fa-instagram m-2" aria-hidden="true" title="Instagram" ></i>
            </Button>
            <Button href="#" type="button" className="socialBtn">
                <i className="fa fa-linkedin-square m-2" aria-hidden="true" title="Linkedin" ></i>
            </Button>
            <Button href="#" type="button" className="socialBtn">
                <i className="fa fa-github-square m-2" aria-hidden="true" title="Github" ></i>
            </Button>

        </div>
    )
};

export default Social;