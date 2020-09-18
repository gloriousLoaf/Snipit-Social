import React, { ComponentElement, Component } from "react";
// import API from "../../utils/API";
import Card from "react-bootstrap/Card"
import NavBar from "../NavBar";

import { Link } from 'react-router-dom'
import './style.css';
// import AddPost from "./AddPost"
// import { connect } from 'react-redux';
// import { getPosts} from "../../actions/postActions/postActions"

class Post extends Component {
  render() {
    const { classes, post } = this.props

    // const items = list && list.map( )

    // console.log(classes)



    return (
      <div className=" card container mb-4 d-flex justify-content-center " id="border" >
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