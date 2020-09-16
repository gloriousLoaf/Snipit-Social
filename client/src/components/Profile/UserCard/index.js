// USERCARD - PROFILE
import React, { useContext } from "react";
// import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { AuthContext } from "../../../App";
import './style.css';
// import gitAPI from "../../../utils/GithubAPIS";


const UserCard = () => {

    // // AuthContext using reducer
    const { state } = useContext(AuthContext);

    // const [gitName, setGitName] = useState()
    // const [id, setId] = useState()
    // const [bio, setBio] = useState()
    // const [company, setCompany] = useState()
    // const [blog, setBlog] = useState()
    // const [hireable, setHireable] = useState()
    // const [avatarURL, setAvatarURL] = useState()

    // useEffect(() => {
    //     gitAPI.getGitInfo(state.user.id)
    //         .then(res => {
    //             // console.log(res.data)
    //             setGitName = res.data.name
    //             setId = res.data.id;
    //             setBio = res.data.bio;
    //             setCompany = res.data.company;
    //             setBlog = res.data.blog;
    //             setHireable = res.data.hireable;
    //             setAvatarURL = res.data.avatarURL;
    //         })
    //         .catch(err => console.log(err));
    //         // console.log(profileState)
    // })

    if (!state.isLoggedIn) {
        return <Redirect to="/login" />;
    }


    // console.log(state.user)

    // create props for user
    const {
        avatar_url,
        name,
        public_repos, followers, following } = state.user;


    return (
        <div className="card profCard container" id="profile">

            {/* ternary to display GH avatar or placeholder */}
            {!state.avatar_url ? (
                <img className="avatar" src={avatar_url} alt="Avatar" />
            ) : (
                    <i className="avatar fas fa-user-circle" alt="Avatar"></i>
                )
            }
            <h1>{name}</h1>
            {/* <h3>Programmer | Meditator | Boxer | Surfer | Learner</h3> */}

            {/* if the user logs in w/ GH, show some details this ternary
            could be expanded & nested to sort for Google logins as well */}
            <ul className="ghStats mt-3"><h5>GitHub Stats</h5>
                {!state.user ? (
                    <li>Click the Octocat button below to check out my profile!</li>
                ) : (
                        <>
                            <li>{public_repos} Repos</li>
                            <li>{followers} Followers</li>
                            <li>{following} Following</li>
                        </>
                    )}
            </ul>
            <p> Maybe this will be the one box you can edit & write something
                about yourself. Plus, I couldn't look at the Lorem Ipsum anymore.</p>
            <Button href="#" target="_blank" className="msgBtn">Message me</Button>
        </div>
    )
};

export default UserCard;