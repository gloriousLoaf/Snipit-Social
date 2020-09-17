import React, { ComponentElement, Component } from "react";
// import API from "../../utils/API";
import Card from "react-bootstrap/Card"
import NavBar from "../NavBar";

import { Link } from 'react-router-dom'
// import AddPost from "./AddPost"
// import { connect } from 'react-redux';
// import { getPosts} from "../../actions/postActions/postActions"

class Post extends Component {
  render() {
    const { classes, post } = this.props

    // const items = list && list.map( )

    // console.log(classes)

    console.log(post)


    return (
      <Card>
        <div> 
        </div>

        <div> {post.user.fullname}
          <h3> 

            {/* david check this out  */}
            <Link to={`/reduxProfile/${post.user.id}`}> {post.user.fullname} </Link>
            <span> {new Date(post.createdAt).toLocaleString()} </span>
          </h3>
          {post.text}

        </div>
      </Card>
    )
  }
}



export default (Post);