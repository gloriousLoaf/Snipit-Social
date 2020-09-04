import React, { Component, useState, useInput } from "react";
import API from "../../utils/API";


import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


// class AddPost extends Component {
function AddPost() {
  // render() {
  const [Text, setText] = useState("Should log this on first press");
  // probably need context for global state of userID 

  const [formObject, setFormObject] = useState({});

  const handleTweetChange = e => {
    setText(e.target.value);
    // console.log(Text)
  };

  const handleTweetSubmit = e => {
    e.preventDefault();
    // console.log(Text);
    API.savePost({
      text: Text
    })
      .then(res => console.log(res))
      .catch(err => console.log(err))

    // To do send this to db
  };

  return (
    <div>
      <style type="text/css">
        {`
        .btn-flat {
        background-color: purple;
        color: white;
        }

        .card-size {
            padding: 8
        }

        .btn-xxl {
        padding: 1rem 1.5rem;
        font-size: 1.5rem;
        width: 100%;
        }

        .form-xxl {
            width: 300%;
        }
        `}
      </style>
      ; ~ start of TWEET~
      <Form.Group>
        <Form.Control
          label="What's on your mind?"
          as="textarea"
          rows="3"
          onChange={handleTweetChange}
          value={Text}
        />
      </Form.Group>
      <Button variant="flat" size="xxl" onClick={handleTweetSubmit}>
        Send Tweet
      </Button>{" "}
      ~~ end of TWEET ~
    </div>
  );
}
// }

export default AddPost;
