import React from "react";
import Button from "react-bootstrap/Button"

function DeleteButton(props) {

  return (

    <Button className="delete-btn" {...props} role="button" tabIndex="0">

    </Button>
  );
}

export default DeleteButton;
