// RIGHTSIDE - LANDINGPAGE

// Modal built-in,  could be broken out to a
// third Component, but that needs more research?
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Tabs, Tab, Button, Modal } from 'react-bootstrap';

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
                            <Button type="button" className="signinBtn btn btn-primary btn-round btn-block" onClick={handleShow}>Sign in</Button>
                        </Form>
                    </div>
                </div>
            </div>

            {/* onHide is not actually used, but maybe we add a close button? */}
            <SignupModal
                show={modalShow}
                onHide={handleClose}
            />
        </>
    )
};

// pulls props from above to trigger modal on click
const SignupModal = (props) => {

    return (
        <Modal
            {...props}
            backdrop="static"
            keyboard={true}
        >
            <Modal.Body>
                <Tabs defaultActiveKey="login">

                    {/* Login Body */}
                    <Tab eventKey="login" title="Login">
                        <Form className="modal-body mx-4">
                            {/* Email */}
                            <Form.Group className="md-form mb-4" controlId="formBasicEmail">
                                <Form.Label data-error="wrong" data-success="right">Your email</Form.Label>
                                <Form.Control type="email"
                                    placeholder="Enter email" className="form-control validate" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                            </Form.Group>
                            {/* Password */}
                            <Form.Group className="md-form pb-3" controlId="formBasicPassword">
                                <Form.Label data-error="wrong" data-success="right">Your password</Form.Label>
                                <Form.Control type="password" placeholder="••••••" className="form-control validate" />
                                <p className="font-small blue-text d-flex justify-content-end"><a href="#" className="blue-text ml-1">Forgot Password?</a></p>
                            </Form.Group>
                            {/* Sign in */}
                            <div className="text-center mb-3">
                                <Button type="button" className="modalSignin btn btn-primary btn-block btn-rounded">Sign in</Button>
                            </div>
                            {/* Other Sign in Methods */}
                            <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">Or Sign in with</p>
                            <div className="row my-2 d-flex justify-content-center">

                                {/* Facebook Login, stretch goal?? */}

                                {/* Google Login */}
                                <Button type="button" className="goog btn-dark mr-2 md-2">
                                    {/* <Link className="googLink" to="/googlelogin"> */}
                                    <i className="fa fa-google" style={{ fontSize: 30 }}></i>
                                    {/* </Link> */}
                                </Button>
                                {/* Github Login */}
                                <Button type="button" className="github btn-dark mr-2 md-2">
                                    <Link className="ghLink" to="/login">
                                        <i className="fa fa-github" style={{ fontSize: 30 }}></i>
                                    </Link>
                                </Button>
                            </div>
                        </Form>
                    </Tab>


                    {/* Register Modal Tab */}
                    <Tab eventKey="register" title="Register" id="register">
                        {/* Register Body */}
                        <Form className="modal-body">
                            {/* Name */}
                            <Form.Group className="md-form form-sm mb-4">
                                <i className="fa fa-user prefix mr-2"></i>
                                <Form.Label data-error="wrong" data-success="right">Your Name</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" className="form-control form-control-sm validate" />
                            </Form.Group>

                            {/* Email */}
                            <Form.Group className="md-form form-sm mb-4">
                                <i className="fa fa-envelope prefix mr-2"></i>
                                <Form.Label data-error="wrong" data-success="right">Your Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" className="form-control form-control-sm validate" />
                            </Form.Group>

                            {/* Password */}
                            <Form.Group className="md-form form-sm mb-4">
                                <i className="fa fa-lock prefix mr-2"></i>
                                <Form.Label data-error="wrong" data-success="right">Your Password</Form.Label>
                                <Form.Control type="password" placeholder="••••••" className="form-control form-control-sm validate" />
                            </Form.Group>

                            {/* Sign Up */}
                            <div className="text-center form-sm mt-2">
                                <Button className="modalSignin btn btn-primary">Sign up <i className="fa fa-sign-in ml-1"></i></Button>
                            </div>
                        </Form>
                    </Tab>

                </Tabs>
            </Modal.Body>

            <Modal.Footer>
                <div className="options text-right">
                    <p className="pt-1">Already have an account? <a href="login" className="blue-text mr-1">Log In</a></p>
                    <p>Escape to close</p>
                </div>
            </Modal.Footer>

        </Modal>
    )
};

export default RightSide;