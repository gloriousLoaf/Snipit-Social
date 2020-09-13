// USERCARD - PROFILE
import React, { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { AuthContext } from "../../../App";
import './style.css';
import gitAPI from "../../../utils/GithubAPIS";


const UserCard = () => {

    // AuthContext using reducer
    const { state, dispatch } = useContext(AuthContext);

    const profileState = {
        id: "",
        htmlURL: "",
        name: "",
        avatarUrl: "",
        bio: "",
        blog: "",
        company: "",
        hireable: ""
    };

    useEffect(() => {
        gitAPI.getGitInfo(state.user.id)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err));
    })

    if (!state.isLoggedIn) {
        return <Redirect to="/login" />;
    }

    

    // console.log(state.user)

    // create props for user
    const { avatar_url, name, public_repos, followers, following } = state.user;

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