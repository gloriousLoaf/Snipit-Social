// React-Bootstrap Components need to be imported and
// deployed JSX style. Just getting started, lots of
// research to do. See comments below to see where I'm at!

// Also, this one component is monstrous and should
// ideally be broken into several smaller ones.
// That can come later, and I think its actually much
// easier to convert this to proper bootstrap format
// all in one big chunk.

import React, { useState } from 'react';
import { Form, Nav, Button, Modal } from 'react-bootstrap'
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
                            {/* old button, CDN method: */}
                            {/* <Button type="button" className="btn btn-primary btn-round btn-block shadow-sm" data-toggle="modal" data-target="#exampleModalCenter">Sign in</Button> */}

                            {/* NEW react way (hopefully) */}
                            <Button type="button" className="btn btn-primary btn-round btn-block shadow-sm" onClick={handleShow}>Sign in</Button>
                        </Form>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton >
                    {/* Modal Nav tabs */}
                    <Nav className="nav nav-tabs" role="tablist" variant="tabs">
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
                    </Nav>


                    {/* LEFT OFF HERE! */}


                    <div className="tab-content">
                        {/* Login Modal Tab */}
                        <div className="tab-pane fade in show active" id="login" role="tabpanel">
                        </div>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    {/* Login Body */}
                    <div className="modal-body mx-4">
                        {/* Email */}
                        <div className="md-form mb-4">
                            <label data-error="wrong" data-success="right" htmlFor="Form-email1">Your email</label>
                            <input type="email" id="Form-email1" className="form-control validate" />
                        </div>
                        {/* Password */}
                        <div className="md-form pb-3">
                            <label data-error="wrong" data-success="right" htmlFor="Form-pass1">Your password</label>
                            <input type="password" id="Form-pass1" className="form-control validate" />
                            <p className="font-small blue-text d-flex justify-content-end">Forgot <a href="#" className="blue-text ml-1">Password?</a></p>
                        </div>
                        {/* Sign in */}
                        <div className="text-center mb-3">
                            <button type="button" className="btn btn-primary btn-block btn-rounded z-depth-1a">Sign in</button>
                        </div>
                        {/* Other Sign in Methods */}
                        <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">or Sign in with</p>
                        <div className="row my-2 d-flex justify-content-center">
                            {/* Facebook Login, stretch goal?? */}
                            {/* <button type="button" className="btn btn-white btn-rounded mr-md-2"><i className="fa fa-facebook text-center" style={{ fontSize: 30 }}></i></button> */}
                            {/* Google Login */}
                            <button type="button" className="btn btn-white btn-rounded mr-md-2"><i className="fa fa-google" style={{ fontSize: 30 }}></i></button>
                            {/* Github Login */}
                            <button type="button" className="btn btn-white btn-rounded mr-md-2"><i className="fa fa-github" style={{ fontSize: 30 }}></i></button>
                        </div>
                    </div>

                    {/* Register Modal Tab */}
                    <div className="tab-pane fade" id="register" role="tabpanel">
                        {/* Register Body */}
                        <div className="modal-body">

                            {/* Name */}
                            <div className="md-form form-sm mb-4">
                                <i className="fa fa-user prefix"></i>
                                <input type="email" id="modalLRInput12" className="form-control form-control-sm validate" />
                                <label data-error="wrong" data-success="right" htmlFor="modalLRInput12">Your Name</label>
                            </div>

                            {/* Email   */}
                            <div className="md-form form-sm mb-4">
                                <i className="fa fa-envelope prefix"></i>
                                <input type="email" id="modalLRInput12" className="form-control form-control-sm validate" />
                                <label data-error="wrong" data-success="right" htmlFor="modalLRInput12">Your Email</label>
                            </div>

                            {/* Password */}
                            <div className="md-form form-sm mb-4">
                                <i className="fa fa-lock prefix"></i>
                                <input type="password" id="modalLRInput13" className="form-control form-control-sm validate" />
                                <label data-error="wrong" data-success="right" htmlFor="modalLRInput13">Your Password</label>
                            </div>

                            {/* Sign Up */}
                            <div className="text-center form-sm mt-2">
                                <button className="btn btn-primary">Sign up <i className="fa fa-sign-in ml-1"></i></button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="modal-footer">
                        <div className="options text-right">
                            <p className="pt-1">Already have an account? <a href="login" className="blue-text mr-1">Log In</a></p>
                        </div>
                        <button type="button" className="btn btn-outline-primary waves-effect ml-auto" data-dismiss="modal">Close</button>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default LandingPage;