import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { connect } from 'react-redux'

import { addPost }from "../../actions/postActions/postActions"

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
  
  
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Form.Group>
          <Form.Control
            label="What's new?"
            as="textarea"
            rows="3"
            onChange={this.handleTweetChange}
            value={this.state.text}
            ></Form.Control>
        </Form.Group>

        <Button onClick={this.handleSubmit}>Send Tweet</Button>
      </div>
    );
  }
}

export default connect(null, {addPost} ) (AddPost)