// RIGHTSIDE - LANDINGPAGE

// Modal built-in,  could be broken out to a
// third Component, but that needs more research?
import React, { useState } from "react";
import { Form, Tabs, Tab, Button, Modal } from "react-bootstrap";

import Signup from "./Signup";
import Login from "./Login";

const RightSide = () => {
  // Modal State & helper functions
  const [modalShow, setModalShow] = useState(false);
  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

  return (
    <>
      <div className="col-md-6 p-0 bg-dark h-md-100 loginarea">
        <div className="d-md-flex align-items-center h-md-100 p-5 justify-content-center loginarea">
          <div className="d-md-flex align-items-center h-md-100 p-5 justify-content-center">
            <Form className="p-5">
              <Button
                type="button"
                className="signinBtn btn btn-primary btn-round btn-block"
                onClick={handleShow}
              >
                Sign in
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

      <Modal.Footer>
        <div className="options text-right">
          <p className="pt-1">
            Already have an account?{" "}
            <a href="login" className="blue-text mr-1">
              Log In
            </a>
          </p>
          <p>Escape to close</p>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default RightSide;
