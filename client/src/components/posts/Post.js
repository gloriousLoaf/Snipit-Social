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
        <Link to={`/reduxProfile/${post.user.id}`}><h3 className="pl-3">{post.user.fullname}</h3></Link>
        <div className="card-title">
          <div className="card-body ">
            <h6 className="card-text">
              {post.text}
            </h6>
          </div><span id="date"> {new Date(post.createdAt).toLocaleString()} </span>
        </div>
      </div>
    )
  }
}



export default (Post);