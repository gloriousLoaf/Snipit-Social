// USERCARD - PROFILE
import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { AuthContext } from "../../../App";
import './style.css';
import gitAPI from "../../../utils/GithubAPIS";


const UserCard = () => {

    // // AuthContext using reducer
    const { state, dispatch } = useContext(AuthContext);

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

<<<<<<< HEAD
    
    // console.log(state.user)
=======
    console.log(state.user);
>>>>>>> 9bf0b6de30945c76d2b0006dfb8f3c00c9f04cc9

    // create props for user
    const {
        avatar_url,
        name,
        public_repos, followers, following } = state.user


    return (
        <div className="card profCard container" id="profile">
            <img className="avatar" src={avatar_url} alt="Avatar" />
            <h1>{name}</h1>
            <h3>Programmer | Meditator | Boxer | Surfer | Learner</h3>

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
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium atque distinctio similique
            illum facilis molestiae, a veniam, explicabo perspiciatis
   soluta error autem excepturi sed dolorem itaque. Mollitia deleniti animi laborum! Now is time to re-invente myself. This journey is starting with me learning web development in beautiful Lisbon</p>
            <Button href="#" target="_blank" className="msgBtn">Message me</Button>
        </div>
    )
};

export default UserCard;