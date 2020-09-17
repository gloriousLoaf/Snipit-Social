// RIGHTSIDE - LANDINGPAGE

// Modal built-in,  could be broken out to a
// third Component, but that needs more research?
import React, { useState } from "react";
import { Form, Button, Modal, } from "react-bootstrap";

import Signup from "./Signup";
import Login from "./Login";

const RightSide = () => {
  // Modal State & helper functions
  const [login, setShow1] = useState(false);
  const [register, setShow2] = useState(false);
  const handleShow1 = () => setShow1(true);
  const handleShow2 = () => setShow2(true);
  const handleClose1 = () => setShow1(false);
  const handleClose2 = () => setShow2(false);

  return (
    <>
      <div className='col-md-6 p-0 bg-d h-md-100 loginarea'>
        <div className='d-md-flex align-items-center h-md-100 p-5 justify-content-center loginarea'>
          <div className='d-md-flex align-items-center h-md-100 p-5 justify-content-center'>
            <Form className='p-5'>
              <h1 className="brand">Snipit</h1>
              <h2 className='logo'></h2>
              <p className='Join'>Join Today</p>
              <Button
                type='button'
                className='loginBtn btn-round btn-block btn-dark'
                onClick={handleShow1}
              >
                Log in
							</Button>
              <Button
                type='button'
                className='signupBtn btn-round btn-block btn-dark'
                onClick={handleShow2}
              >
                Sign Up
							</Button>
            </Form>
          </div>
        </div>
      </div>

      <Modal show={register} backdrop="static" keyboard={true}>
        <Modal.Body>
          <Modal.Header closeButton={handleClose1}>
            <Modal.Title id='justify-content-center'>Register</Modal.Title>
          </Modal.Header>
          <Signup />
        </Modal.Body>
      </Modal>

      <Modal show={login} backdrop="static" keyboard={true}>
        <Modal.Body>
          <Modal.Header closeButton={handleClose2}>
            <Modal.Title id='justify-content-center'>Login</Modal.Title>
          </Modal.Header>
          <Login />
        </Modal.Body>
      </Modal >
    </>
  );
};

export default RightSide;
