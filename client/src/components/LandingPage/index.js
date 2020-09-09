// React-Bootstrap Components need to be imported and
// deployed JSX style. Just getting started, lots of
// research to do. See comments below to see where I'm at!

// Also, this one component is monstrous and should
// ideally be broken into several smaller ones.
// That can come later, and I think its actually much
// easier to convert this to proper bootstrap format
// all in one big chunk.

import React, { useState } from 'react';
import { Form, Tabs, Tab, Button, Modal } from 'react-bootstrap'
import './style.css';

const LandingPage = () => {

    // MODAL
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="d-md-flex h-md-100 align-items-center">
            {/* First Half of page */}
            <div className="col-md-6 p-0 bg-main h-md-100">
                <div className="text-white d-md-flex align-items-center h-100 p-5 justify-content-center">
                    <div className="logoarea pt-5 pb-5">
                        <ul>
                            <ol>
                                <i className="fa fa-heart icon" style={{ marginLeft: "0.1rem" }}></i>
							 &nbsp; Follow your interests.
						    </ol>
                            <ol>
                                &nbsp;<i className="fa fa-user icon"></i>
                             &nbsp; Collaborate with others.
						    </ol>
                            <ol>
                                &nbsp;<i className="fa fa-search icon"></i>
                             &nbsp; See what's happening.
						    </ol>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Second Half of page */}
            <div className="col-md-6 p-0 bg-dark h-md-100 loginarea">
                <div className="d-md-flex align-items-center h-md-100 p-5 justify-content-center loginarea">
                    <div className="d-md-flex align-items-center h-md-100 p-5 justify-content-center">
                        <Form className="p-5">
                            <Button type="button" className="signinBtn btn btn-primary btn-round btn-block shadow-sm" onClick={handleShow}>Sign in</Button>
                        </Form>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={true}
            >
                {/* MODAL NAB TABS - left these in because they have the <i> icons */}
                {/* <Nav className="nav nav-tabs" role="tablist" variant="tabs">
                        <Nav.Item className="nav-item">
                            <Nav.Link href="#login" className="nav-link active text-secondary" data-toggle="tab" role="tab">
                                <i className="fa fa-user"></i>
                                &nbsp; Login
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="nav-item">
                            <Nav.Link href="#register" className="nav-link text-secondary"
                                data-toggle="tab" role="tab">
                                <i className="fa fa-user-plus"></i>
                                &nbsp; Register
                            </Nav.Link>
                        </Nav.Item>
                    </Nav> */}

                {/* CLOSE BUTTON can only be implementend in a Modal.Header, but that
                puts a janky looking header-line under it. Escape key closes Modal */}
                {/* <Modal closeButton className="text-secondary flex-row-reverse" >
                    <span className="ml-1">close</span>
                </Modal> */}

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
                                    <Button type="button" className="btn btn-primary btn-block btn-rounded z-depth-1a">Sign in</Button>
                                </div>
                                {/* Other Sign in Methods */}
                                <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">Or Sign in with</p>
                                <div className="row my-2 d-flex justify-content-center">

                                    {/* Facebook Login, stretch goal?? */}
                                    {/* <button type="button" className="btn btn-white btn-rounded mr-md-2"><i className="fa fa-facebook text-center" style={{ fontSize: 30 }}></i></button> */}

                                    {/* Google Login */}
                                    <Button type="button" className="btn-dark mr-2 md-2"><i className="fa fa-google" style={{ fontSize: 30 }}></i></Button>
                                    {/* Github Login */}
                                    <Button type="button" className="btn-dark mr-2 md-2"><i className="fa fa-github" style={{ fontSize: 30 }}></i></Button>
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
                                    <Button className="btn btn-primary">Sign up <i className="fa fa-sign-in ml-1"></i></Button>
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
        </div>
    )
}

export default LandingPage;