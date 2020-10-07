// PROFILE SWITCHER //
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

import Profile from './Profile';
import ProfileOther from './ProfileOther';

import './style.css';

class ProfileSwitcher extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let myUser = JSON.parse(localStorage.getItem("authUser"));
        if (this.props.location.pathname === `/ProfileSwitcher/${myUser._id}`) {
            return (
                <Profile {...this.props} />
            )
        } else {
            return (
                console.log(myUser),
                <ProfileOther {...this.props} />
            )
        }
    }
}

//everything from actions
// export default ProfileSwitcher;
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
})(ProfileSwitcher);