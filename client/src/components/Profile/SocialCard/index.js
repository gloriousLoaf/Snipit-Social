// SOCIAL CARD - PROFILE
import React, { useContext } from 'react';
import { Redirect } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { AuthContext } from "../../../App";
import './style.css';


const Social = () => {

    // ALL THIS commented out stuff worked with GH auth,
    // not working now but please keep

    // pulling state.user from Context
    // const { state } = useContext(AuthContext);

    // Redirect needed to prevent crashing
    // if (!state.isLoggedIn) {
    //     return <Redirect to="/" />;
    // }
    // needs to be below if()
    // const { html_url } = state.user;


    return (
        <>
            <div className="card container my-3 py-2 d-flex justify-content-center" id="social">
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
                <Button href="#" type="button" className="socialBtn">
                    <i className="fab fa-github-square m-2" aria-hidden="true" title="Github" ></i>
                </Button>

                {/* GH would pull links this: */}
                {/* <Button href={html_url} type="button" className="socialBtn">
                <i className="fab fa-github-square m-2" aria-hidden="true" title="Github" ></i>
            </Button> */}

            </div>
        </>
    )
};

export default Social;