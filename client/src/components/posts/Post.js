//// POST - Individual post cards ////
import React, { Component } from "react";

import { connect } from "react-redux";

import { deletePosts } from "../../actions/postActions/postActions";

import DeleteButton from "../../components/posts/DeleteButton";

import { Link } from "react-router-dom";
// unlinked for now, so much conflicting css that its hard to know where to style
// import "./style.css";

class Post extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    this.props.deletePosts(id);
  }

  render() {
    const { classes, post, list, auth, user, profile } = this.props;


    // console.log(auth);
    // console.log(list);

    return (
      <div
        className="card container my-3 d-flex justify-content-center"
        id="border"
      >
        <hr></hr>
        <Link style={{ maxWidth: "max-content" }} to={`/Profile/${post.user.id}`}>
          <h3 className="pl-3">{post.user.fullname}</h3>
        </Link>
        <div className="card-title">
          <div className="card-body ">
            <h6 className="card-text">{post.text}</h6>
          </div>
          <span className="pt-3" id="date"> {new Date(post.createdAt).toLocaleString()} </span>

          <DeleteButton className="deleteBtn my-1" onClick={() => this.handleDelete(post._id)}>
            <i className="uil-trash"></i>
          </DeleteButton>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.post.list,
  loading: state.post.loading,
  auth: state.auth
});

export default connect(mapStateToProps, { deletePosts })(Post);
