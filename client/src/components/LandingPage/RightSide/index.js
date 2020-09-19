// RIGHTSIDE - LANDINGPAGE

// Modal built-in,  could be broken out to a
// third Component, but that needs more research?
import React, { useState } from "react";
import { Form, Tabs, Tab, Button, Modal } from "react-bootstrap";
import SnipitLogo from "../../snipit.png";

import Signup from "./Signup";
import Login from "./Login";

const RightSide = () => {
  // Modal State & helper functions
  const [modalShow, setModalShow] = useState(false);
  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

  return (
    <>
      <div className="col-md-6 p-0 bg-d h-md-100 loginarea">
        <div className="d-md-flex align-items-center h-md-100 p-5 justify-content-center loginarea">
          <div className="d-md-flex align-items-center h-md-100 p-5 justify-content-center">
            <Form className="p-10">
              <img alt="logo" className="" src={SnipitLogo} />
              &nbsp;
              <p className="Join text-center">Join Today</p>
              <Button
                type="button"
                className="loginBtn btn-round btn-block btn-dark"
                onClick={handleShow}
              >
                Log in
              </Button>
              <Button
                type="button"
                className="signupBtn btn-round btn-block btn-dark"
                onClick={handleShow}
              >
                Sign Up
              </Button>
            </Form>
          </div>
        </div>
      </div>

      {/* onHide is not actually used, but maybe we add a close button? */}
      <SignupModal show={modalShow} onHide={handleClose} />
    </>
  );
};

// pulls props from above to trigger modal on click
const SignupModal = props => {
  // so the top part is made in hooks, then passes down props in a spreader operator,
  // but we need login those login form.controls to be in a `CLASS` component in order for
  // redux to work...
  // legit just moved all the code to signup.js and made that as class component, everything seems
  // to work still
  return (
    <Modal {...props} backdrop="static" keyboard={true}>
      <Modal.Header closeButton> 
      <Modal.Body>
        <Tabs defaultActiveKey="login">
          <Tab eventKey="login" title="Login">
            <Login />
          </Tab>
          <Tab eventKey="register" title="Register" id="register">
            <Signup />
          </Tab>
        </Tabs>
      </Modal.Body>
      </Modal.Header>
    </Modal>
  );
};

export default RightSide;
