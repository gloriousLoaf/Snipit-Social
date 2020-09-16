import React, { Component } from 'react';
import { connect } from "react-redux"

import NavBar from "../NavBar"
import AddPost from "./AddPost";
import Post from "./Post"

import { getPosts } from "../../actions/postActions/postActions"
import LoadingPosts from "./LoadingPosts"


class ListPost extends Component { 

    componentDidMount() {
        this.props.getPosts(); 
    }

    render() {
        const { list, loading } = this.props; 


        const items = list && list.map(el => <Post key={el._id} post={el} />)
        return ( 
            <div>
                <AddPost />
                List Post Page
                { loading ? <LoadingPosts /> : items}
                <NavBar/>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    list: state.post.list,
    loading: state.post.loading,

})

export default connect(mapStateToProps, { getPosts}) (ListPost);