//// CREATE A POST ////
import React, { Component } from "react";

import { Form, Card, Button } from "react-bootstrap";

import { connect } from 'react-redux'

import { addPost } from "../../actions/postActions/postActions"

class AddPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    }

    this.handleTweetChange = this.handleTweetChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleTweetChange(event) {
    this.setState({ text: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const postData = {
      text: this.state.text
    };

    console.log(postData)

    this.props.addPost(postData);

    this.setState({ text: "" });
  }

  ///////// CSS /////////
  render() {
    return (
      <>
        <div className="getDown card container mb-4 d-flex justify-content-center">

          < Form.Group className="my-3">
            <h3>#feed</h3>
            <Form.Control
              placeholder="<snipit/> cannot be null..."
              as="textarea"
              rows="3"
              onChange={this.handleTweetChange}
              value={this.state.text}
            ></Form.Control>
          </Form.Group >

          <div className="text-right">
            <Button className="mb-2 sendSnip" onClick={this.handleSubmit}>Send Snip</Button>
          </div>

        </div >
      </>
    );
  }
}

export default connect(null, { addPost })(AddPost)