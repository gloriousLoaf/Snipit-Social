import React, { Component } from "react";
import { connect } from "react-redux";

import NavBar from "../NavBar";
import AddPost from "./AddPost";
import Post from "./Post";

import { getPosts, deletePosts } from "../../actions/postActions/postActions";
import LoadingPosts from "./LoadingPosts";
import DeleteButton from "../posts/DeleteButton"



import "./style.css";

class ListPost extends Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this)

    }
  componentDidMount() {
    this.props.getPosts();
  }

  handleDelete(id) {
      this.props.deletePosts(id);
  }

  render() {
    const { list, loading } = this.props;

    const items =
      list &&
      list.map(el => 
        (
          <div>
          <Post key={el._id} post={el} />

        </div>
      ));


      return (
      <>
        <NavBar />
        {/* CSS this div to resize. BUT cardContainer is used in profile,
                so know that changes here will cascade. Add a new class if needed? */}
        <div className="cardContainer">
          <AddPost />

          {loading ? <LoadingPosts /> : items}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  list: state.post.list,
  loading: state.post.loading
});

export default connect(mapStateToProps, { getPosts, deletePosts })(ListPost);
