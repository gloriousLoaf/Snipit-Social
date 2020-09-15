import React, { ComponentElement, Component } from "react";
// import API from "../../utils/API";
import Card from "react-bootstrap/Card"

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
        <div />

        <div>
          <h3> {post}

          </h3>
        </div>
      </Card>
    )
  }
}


export default (Post);