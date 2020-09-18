import React, { Component } from 'react';
import { connect } from "react-redux"

import NavBar from "../NavBar"
import AddPost from "./AddPost";
import Post from "./Post"

import { getPosts } from "../../actions/postActions/postActions"
import LoadingPosts from "./LoadingPosts"
import './style.css';


class ListPost extends Component {

    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        const { list, loading } = this.props;


        const items = list && list.map(el => <Post key={el._id} post={el} />)
        return (
            <>
                <NavBar />
                {/* CSS this div to resize. BUT cardContainer is used in profile,
                so know that changes here will cascade. Add a new class if needed? */}
                <div className="cardContainer">
                    <AddPost />
                List Post Page
                {loading ? <LoadingPosts /> : items}
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.post.list,
    loading: state.post.loading,

})

export default connect(mapStateToProps, { getPosts })(ListPost);