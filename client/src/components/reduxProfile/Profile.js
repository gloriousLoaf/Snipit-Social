import React, { Component } from "react";

import { connect } from "react-redux";



import Post from "../posts/Post"
import loadingPosts from "../posts/LoadingPosts"

class Profile extends Component {
    constructor(props) {
        super(props) 
    }

    componentDidMount() {

    }

    render() {

        const { classes, 
                loadingPosts,
                loadingProfile,
                list,
                auth,
                user,
                profile
        } = this.props

        const items = list && list.map(el => <Post key={el.id} post={el}/>)

        return (
            <div>
                Redux profile page
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    loadingPosts: state.post.loading,
    list: state.post.list,
    profile: state.profile.user,
    loadingProfile: state.profile.loading,
    auth: state.auth,
    user: state.auth.user

})

export default connect(mapStateToProps, {}) (Profile);