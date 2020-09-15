import React, { Component } from 'react'

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

export default class AddPost extends Component {

  constructor (props) {
    super(props)

    this.state = {
      text: ''
    }

    this.handleTweetChange = this.handleTweetChange.bind(this)

  }

  handleTweetChange (event) {
    this.setState({ text: event.target.value})
    console.log(this.state.text)
  }

  render() {

    const { classes } = this.props 
    return (
      <div>
        <Form.Group>
          <Form.Control
            label = "What's new?"
            as="textarea"
            rows="3"

            onChange = {this.handleTweetChange}
            value={this.state.text}

          >
          </Form.Control>
        </Form.Group>

        <Button>
          Send Tweet 
        </Button>
      </div>
    )
  }
}
