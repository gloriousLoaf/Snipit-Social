///// OTHER USER'S PROFILE /////
import React, { Component } from "react";
import { connect } from "react-redux";
// connect this with export default at bottom
import {
    getPostsByUserId,
    getUserProfile,
    unfollowUser,
    followUser,
    refreshUserProfile,
    logoutUser
} from "../../actions/profileActions/profileActions";

import { deletePosts } from "../../actions/postActions/postActions";

// import gitAPI from '../../utils/GithubAPIS';

import Banner from '../Banner';
import NavBar from "../NavBar";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Post from "../posts/Post";
import LoadingPosts from "../posts/LoadingPosts";
import SocialCard from "./SocialCard";
import UserAction from "./UserAction";

class ProfileOther extends Component {
    constructor(props) {
        super(props);
        this.handleFollow = this.handleFollow.bind(this);
        this.handleUnfollow = this.handleUnfollow.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.props.getPostsByUserId(this.props.match.params.userId);
        this.props.getUserProfile(this.props.match.params.userId);
    }

    // do this for signup and login if you can.
    componentDidUpdate(prevProps) {
        if (this.props.auth.isAuthenticated) {
            // if we changed the following prop,
            if (
                prevProps.user &&
                prevProps.user.following !== this.props.user.following
            ) {
                // refresh the page
                this.props.refreshUserProfile(this.props.match.params.userId);
            }
        }
    }

    handleFollow() {
        this.props.followUser(this.props.match.params.userId);
    }

    handleUnfollow() {
        this.props.unfollowUser(this.props.match.params.userId);
    }

    handleDelete(id) {
        this.props.deletePosts(id);
    }

    render() {
        const {

            loadingPosts,
            loadingProfile,
            list,
            auth,
            user,
            profile
        } = this.props;

        const items =
            list &&
            list.map(el => (
                <div>
                    <Post key={el._id} post={el} />
                </div>
            ));

        let profileInfo;

        let followButtons;

        // if if authenticated,
        if (auth.isAuthenticated) {
            // if user exist, user has a following array
            if (
                user &&
                user.following &&
                // if you aren't following this person, show follow, else show unfollow
                user.following.indexOf(this.props.match.params.userId) === -1
            ) {
                followButtons = (
                    ///////// CSS? /////////
                    <div className="mt-1 mb-4">
                        <Button className="following" onClick={this.handleFollow}>Follow</Button>
                    </div>
                );
            } else {
                followButtons = (
                    ///////// CSS? /////////
                    <div className="mt-1 mb-4">
                        <Button className="following" onClick={this.handleUnfollow}>Unfollow</Button>
                    </div>
                );
            }
        }

        /* IMPORTANT - this is from Profile.js and will be the starting ground for the
            algorithm to show / not show any existing GitHub data on other users' pages.
            For now, commenting it in will cause problems. Pick this up later! */

        // ///////// GitHub Button Logic /////////
        // // GH button, rendered conditionally
        // // let githubConnector;
        // // GH info from db or assign to simple obj
        // let ghUser;
        // // new GH auth returns obj "user" to db & localstorage
        // let newGhUser = JSON.parse(localStorage.getItem("user"));
        // // auth'd user id from storage to query db & compare url
        // let myUser = JSON.parse(localStorage.getItem("authUser"));
        // // query db to see if user has already auth'd GH
        // gitAPI.getGitInfo(myUser._id)
        //     .then(res => {
        //         if (res === "error") {
        //             throw new Error(res);
        //         } else if (res.data) {
        //             // can't directly set value of ghUser to res.data
        //             localStorage.setItem("ghUser", JSON.stringify(res.data));
        //         } else {
        //             // and if no res.data, set ghUser as simple obj to compare
        //             localStorage.setItem("ghUser", JSON.stringify({ data: "none yet" }));
        //         }
        //     })
        //     .catch(res => console.log(res));

        // // parse it up for
        // ghUser = JSON.parse(localStorage.getItem("ghUser"));
        // console.log(ghUser);

        // // FINALLY, ghData will either be ghUser if api returns data,
        // // or newGhUser if the user makes a new GH auth connection.
        // // Used below to populate button or not, and display info.
        // let ghData;
        // if (ghUser === "no prior gh data") {
        //     // undefined until user auth's GH
        //     ghData = newGhUser;
        //     console.log("new", ghData);
        // } else {
        //     // previous GH auth existed
        //     ghData = ghUser;
        //     console.log("old", ghData);
        // }


        if (profile && items) {
            profileInfo = (
                <Card className="card container my-4 py-5 text-center" id="border">
                    <h1> {profile.fullname} </h1>
                    <div>
                        {/* SOON */}
                        {/* if GH data exists, display it */}
                        {/* {ghData === { data: "none yet" } ? (
                            <></>
                        ) : ( */}
                        {/* <img className="avatar" src={ghData.avatarUrl} alt="Avatar" /> */}
                        <img className="avatar" src="https://avatars3.githubusercontent.com/u/42220408?v=4" alt="Avatar" />
                        {/* )
                        } */}
                    </div>

                    <ul className="profStats list-unstyled mt-3">
                        <li>
                            <h5> {profile.email} </h5>
                            <h5>Snipshot:</h5>
                        </li>

                        <li className="pb-1"> {items.length} posts </li>

                        <li className="py-1"> {profile.followers.length} followers </li>

                        <li className="py-1 pb-1"> {profile.following.length} following </li>
                    </ul>

                    {followButtons}

                    {/* SOON */}
                    {/* GitHub Connector Button */}
                    {/* {githubConnector} */}

                    <div>
                        <ul className="profStats list-unstyled mt-2">
                            <li><h5>GitHub Stats:</h5></li>
                            <li className="py-1">46 Repos</li>
                            <li className="py-1">6 Followers</li>
                            <li className="py-1">3 Following</li>
                            <li className="py-1"><a style={{ color: 'blue' }} href="https://github.com/EricGip">View My GitHub</a></li>


                            {/* SOON */}
                            {/* {ghData === { data: "none yet" } ? (
                                <li>Click the Octocat button below to check out my profile!</li>
                            ) : (
                                    <>
                                        <li className="pb-1">{ghData.publicRepos} Repos</li>
                                        <li className="py-1">{ghData.followers} Followers</li>
                                        <li className="py-1">{ghData.following} Following</li>
                                        <li className="pb-1"><a style={{ color: 'blue' }} href={ghData.htmlUrl}>View Profile</a></li>
                                    </>
                                )} */}
                        </ul>
                    </div>

                </Card>
            );
        }

        // What was I doing here? I think it is important though?
        // setTimeout(() => {
        //     localStorage.removeItem("ghUser");
        // }, 1000);

        return (
            ///////// CSS /////////
            // these two containers give a ratio like old profile page
            // changes to cardContainer specifically will cascasde to ListPost.js
            <div className="profContainer">
                <div className="cardContainer">
                    <Banner />
                    {loadingProfile ? <div>Loading</div> : profileInfo}

                    {/* put any additional sections here, above LoadingPosts */}
                    {/* see respective cards for #DeleteMe */}
                    <SocialCard />
                    <UserAction />
                    {loadingPosts ? <LoadingPosts /> : items}
                </div>


                <NavBar />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loadingPosts: state.post.loading,
    list: state.post.list,
    profile: state.profile.user,
    loadingProfile: state.profile.loading,
    auth: state.auth,
    user: state.auth.user
});

//everything from actions
export default connect(mapStateToProps, {
    getPostsByUserId,
    getUserProfile,
    unfollowUser,
    followUser,
    refreshUserProfile,
    deletePosts,
    logoutUser
})(ProfileOther);