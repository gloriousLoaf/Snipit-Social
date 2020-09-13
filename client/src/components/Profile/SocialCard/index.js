// SOCIAL CARD - PROFILE
import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { AuthContext } from "../../../App";
import './style.css';


const Social = () => {

    // pulling state.user from Context
    const { state, dispatch } = useContext(AuthContext);
    const { html_url } = state.user;

    return (
        <div className="card profCard container my-2 d-flex justify-content-center" id="social">

            {/* This setup should work, just need to drop in links? */}
            <Button href="#" type="button" className="socialBtn">
                <i className="fab fa-facebook-square m-2" aria-hidden="true" title="facebook" ></i>
            </Button>
            <Button href="#" type="button" className="socialBtn">
                <i className="fab fa-instagram m-2" aria-hidden="true" title="Instagram" ></i>
            </Button>
            <Button href="#" type="button" className="socialBtn">
                <i className="fab fa-linkedin m-2" aria-hidden="true" title="Linkedin" ></i>
            </Button>
            <Button href={html_url} type="button" className="socialBtn">
                <i className="fab fa-github-square m-2" aria-hidden="true" title="Github" ></i>
            </Button>

        </div>
    )
};

export default Social;