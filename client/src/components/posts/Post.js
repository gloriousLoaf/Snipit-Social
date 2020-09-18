//// POST - Individual post cards ////
import React, { Component } from "react";

import { Link } from 'react-router-dom'
import './style.css';

class Post extends Component {
  render() {
    const { classes, post } = this.props

    return (
      <div className="card container my-4 d-flex justify-content-center" id="border" >
        <hr></hr>
        <div className="card-title bg-lg">
          <Link to={`/reduxProfile/${post.user.id}`}><h3>{post.user.fullname}</h3></Link>
          <span id="date"> {new Date(post.createdAt).toLocaleString()} </span>
        </div>
        <div className="card-title">
          <div className="card-body ">
            <h6 className="card-text">
              {post.text}
            </h6>
          </div>
        </div>
      </div>
    )
  }
}



export default (Post);