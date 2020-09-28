///// MAIN PROFILE /////
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

import Banner from '../Banner';
import NavBar from "../NavBar";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Post from "../posts/Post";
import LoadingPosts from "../posts/LoadingPosts";
import SocialCard from "./SocialCard";
import UserAction from "./UserAction";

class Profile extends Component {
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
      profile,
      isAuthenticated
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
          <div>
            <Button className="following" onClick={this.handleFollow} {...this.props}>Follow</Button>
          </div>
        );
      } else {
        followButtons = (
          ///////// CSS? /////////
          <div>
            <Button className="following" onClick={this.handleUnfollow}>Unfollow</Button>
          </div>
        );
      }
    }

    ///////// GitHub Button Logic /////////
    let githubConnector;
    // if the id url matches the auth'd user, display button:
    this.props.location.pathname === `/Profile/${this.props.auth.user._id}` ? (
      // if user matches url, render GitHub connector
      githubConnector = (
        <>
          <div>
            <Button href="/githublogin" type="button" className="githubBtn">
              <i className="fab fa-github-square m-2" aria-hidden="true" title="Github"></i>
              Connect GitHub
            </Button>
          </div>
          <em style={{ marginBottom: "1.5rem" }}>Link your account to add avatar and share stats!</em>
        </>
      )
    ) : (
        // if not, don't
        console.log("Not your profile!")
      );
    // extract some data to display
    // this needs to come from db, not localstorage
    // so we can remove the button if you have already
    // connected you account to github
    let ghUser = JSON.parse(localStorage.getItem("user"));
    ////////////// alright ///////////////

    if (profile && items) {
      profileInfo = (
        <Card className="card container my-4 py-5 text-center" id="border">
          <h1> {profile.fullname} </h1>
          <div>
            {/* if GH connected, display GH avatar */}
            {!ghUser ? (
              <></>
            ) : (
                <img className="avatar" src={ghUser.avatar_url} alt="Avatar" />
              )
            }
          </div>

          <ul className="profStats list-unstyled mt-3">
            <li>
              <h5> {profile.email} </h5>
              <h5> Snipshot:</h5>
            </li>

            <li className="pb-1"> {items.length} posts </li>

            <li className="py-1"> {profile.followers.length} followers </li>

            <li className="py-1"> {profile.following.length} following </li>
          </ul>

          {/* NEW - close to working, see above */}
          {githubConnector}

          <div>
            <ul className="profStats list-unstyled mt-2">
              <li>
                <h5>GitHub Stats:</h5>
              </li>
              {!ghUser ? (
                <li>Click the Octocat button below to check out my profile!</li>
              ) : (
                  <>
                    <li className="pb-1">{ghUser.public_repos} Repos</li>
                    <li className="py-1">{ghUser.followers} Followers</li>
                    <li className="py-1">{ghUser.following} Following</li>
                  </>
                )}
            </ul>
          </div>

          {followButtons}

        </Card>
      );
    }

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
})(Profile);
