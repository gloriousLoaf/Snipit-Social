import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class Login extends Component {
  render() {
    return (
      <div>
        <Form className="modal-body mx-4">
          {/* Email */}
          <Form.Group className="md-form mb-4" controlId="formBasicEmail">
            <Form.Label data-error="wrong" data-success="right">
              Your email
              </Form.Label>
            {/* this is where user text goes, add cool autocomplete stuff to it later */}

            <Form.Control
              type="email"
              placeholder="Enter email"
              className="form-control validate"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
              </Form.Text>
          </Form.Group>
          {/* Password */}
          <Form.Group className="md-form pb-3" controlId="formBasicPassword">
            <Form.Label data-error="wrong" data-success="right">
              Your password
              </Form.Label>

            {/* this is where user pw input */}
            <Form.Control
              type="password"
              placeholder="••••••"
              className="form-control validate"
            />
            <p className="font-small blue-text d-flex justify-content-end">
              <a href="/" className="blue-text ml-1">
                Forgot Password?
                </a>
            </p>
          </Form.Group>
          {/* Sign in */}
          <div className="text-center mb-3">
            <Button
              type="button"
              className="modalSignin btn btn-primary btn-block btn-rounded"
            >
              Sign in
              </Button>
          </div>
          {/* Other Sign in Methods */}
          <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
            Or Sign in with
            </p>
          <div className="row my-2 d-flex justify-content-center">
            {/* Facebook Login, stretch goal?? */}

            {/* Google Login */}
            <Button
              href="/googlelogin"
              type="button"
              className="goog btn-dark mr-2 md-2"
            >
              <i className="fab fa-google" style={{ fontSize: 30 }}></i>
            </Button>
            {/* Github Login */}
            <Button
              href="/githublogin"
              type="button"
              className="github btn-dark mr-2 md-2"
            >
              <i className="fab fa-github" style={{ fontSize: 30 }}></i>
            </Button>
          </div>
        </Form>

      </div>
    );
  }
}

export default Login;
