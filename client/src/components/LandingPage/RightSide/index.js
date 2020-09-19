// Modal built-in,  could be broken out to a
// third Component, but that needs more research?
import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import SnipitLogo from "../../snipit.png";
import Signup from "./Signup";
import Login from "./Login";
const RightSide = () => {
  // Modal State & helper functions
  const [Modal1, setModalShow1] = useState(false);
  const [Modal2, setModalShow2] = useState(false);
  const handleClose1 = () => setModalShow1(false);
  const handleClose2 = () => setModalShow2(false);
  const handleShow1 = () => setModalShow1(true);
  const handleShow2 = () => setModalShow2(true);
  return (
    <>
      <div className="col-md-6 p-0 bg-d h-md-100 loginarea">
        <div className="d-md-flex align-items-center h-md-100 p-5 justify-content-center loginarea">
          <div className="d-md-flex align-items-center h-md-100 p-5 justify-content-center">
            <Form className="p-10">
              <img alt="logo" classname="" src={SnipitLogo} />
              &nbsp;
              <p className="Join text-center">Join Today</p>
              <Button
                type="button"
                className="loginBtn btn-round btn-block btn-dark"
                onClick={handleShow1}
              >
                Log in
              </Button>
              <Button
                type="button"
                className="signupBtn btn-round btn-block btn-dark"
                onClick={handleShow2}
              >
                Sign Up
              </Button>
            </Form>
          </div>
        </div>
      </div>
      <Modal show={Modal1} backdrop="static">
        <Modal.Body>
          <Modal.Header closeButton onClick={handleClose1}>
            <Modal.Title id='justify-content-center'>Log In</Modal.Title>
          </Modal.Header>
          <Login />
        </Modal.Body>
      </Modal >
      <Modal show={Modal2} backdrop="static">
        <Modal.Body>
          <Modal.Header closeButton onClick={handleClose2}>
            <Modal.Title id='justify-content-center'>Sign Up</Modal.Title>
          </Modal.Header>
          <Signup />
        </Modal.Body>
      </Modal >
    </>
  );
};

export default RightSide;