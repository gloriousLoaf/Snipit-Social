//// LOGIN ////
// for now, this is just GitHub, but we can integrate Gogle here too
import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import GithubIcon from "mdi-react/GithubIcon";
import { AuthContext } from "../App";
import './style.css';

// creating our login component, using AuthContext global state
const Login = () => {
    const { state, dispatch } = useContext(AuthContext);
    const [data, setData] = useState({ errorMessage: "", isLoading: false });

    const { client_id, redirect_uri } = state;

    useEffect(() => {
        //  Github redirects back  with a code parameter
        const url = window.location.href;
        const hasCode = url.includes("?code=");

        // If Github API returns the code parameter
        if (hasCode) {
            const newUrl = url.split("?code=");
            window.history.pushState({}, null, newUrl[0]);
            setData({ ...data, isLoading: true });

            const requestData = {
                client_id: state.client_id,
                redirect_uri: state.redirect_uri,
                client_secret: state.client_secret,
                code: newUrl[1]
            };

            const proxy_url = state.proxy_url;

            // Use code parameter and other parameters to make POST request to proxy_server
            fetch(proxy_url, {
                method: "POST",
                body: JSON.stringify(requestData)
            })
                .then(response => response.json())
                .then(data => {
                    dispatch({
                        type: "LOGIN",
                        payload: { user: data, isLoggedIn: true }
                    });
                })
                .catch(error => {
                    setData({
                        isLoading: false,
                        errorMessage: "Sorry! Login failed"
                    });
                });
        }
    }, [state, dispatch, data]);

    if (state.isLoggedIn) {
        return <Redirect to="/" />;
    }

    return (
        <Wrapper>
            <section className="container">
                <div className="headerText">
                    <h1>Welcome</h1>
                    <span>Super amazing app</span>
                    <span className="errMsg">{data.errorMessage}</span>
                    <div className="login-container">
                        {data.isLoading ? (
                            <div className="loader-container">
                                <div className="loader"></div>
                            </div>
                        ) : (
                                <>
                                    {
                                        // Link to request GitHub access
                                    }
                                    <a
                                        className="login-link"
                                        href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`}
                                        onClick={() => {
                                            setData({ ...data, errorMessage: "" });
                                        }}
                                    >
                                        <GithubIcon />
                                        <span>Login with GitHub</span>
                                    </a>
                                </>
                            )}
                    </div>
                </div>
            </section>
        </Wrapper>
    );
}

export default Login;