import React, { Component, useState, useInput} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


// class AddPost extends Component {
function AddPost() {
    // render() {
    const [Text, setText] = useState("Should log this on first press");

    const handleTweetChange = (e) => {
        setText(e.target.value)
        console.log(Text)
    }

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
          <Form.Control variant="textField" as="textarea" rows="3" onChange={handleTweetChange}/>
        </Form.Group>
          <Button variant="flat" size="xxl" >Send Tweet</Button>{" "}
        ~~ end of TWEET ~
      </div>
    );
  }
// }

export default AddPost;
