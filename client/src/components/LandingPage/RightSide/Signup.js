import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../../actions/authActions/authActions";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // really cool way to handle new errors
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const userData = {
      fullname: this.state.fullname,
      email: this.state.email,
      password: this.state.password
    };

    console.log(userData)

    this.props.registerUser(userData, this.props.history);

  }

  render() {
    const { classes } = this.props;
    const { errors } = this.state;

    return (
      <div>
        <Form className="modal-body">
          <Form.Group className="md-form form-sm mb-4">
            <i className="fa fa-user prefix mr-2"></i>
            <Form.Label data-error="wrong" data-success="right">
              Your Name
            </Form.Label>

            {/* name */}
            <Form.Control
              type="name"
              placeholder="Enter name"
              className="form-control form-control-sm validate"
              value={this.state.fullname}
              onChange={this.handleChange}
              name="fullname"
            />
            <Form.Text> {errors.fullname ? errors.fullname : null} </Form.Text>
          </Form.Group>

          {/* Email */}
          <Form.Group className="md-form form-sm mb-4">
            <i className="fa fa-envelope prefix mr-2"></i>
            <Form.Label data-error="wrong" data-success="right">
              Your Email
            </Form.Label>
            {/* user input email */}
            <Form.Control
              type="email"
              placeholder="Enter email"
              className="form-control form-control-sm validate"
              value={this.state.email}
              onChange={this.handleChange}
              name="email"
            />
            <Form.Text>{errors.email ? errors.email : null}</Form.Text>
          </Form.Group>

          {/* Password */}
          <Form.Group className="md-form form-sm mb-4">
            <i className="fa fa-lock prefix mr-2"></i>
            <Form.Label data-error="wrong" data-success="right">
              Your Password
            </Form.Label>
            
            {/* user input pw */}
            <Form.Control
              type="password"
              placeholder="••••••"
              className="form-control form-control-sm validate"
              value={this.state.password}
              onChange={this.handleChange}
              name="password"
            />
                        <Form.Text
            >
              {errors.password ? errors.password : null}
            </Form.Text>
          </Form.Group>

          {/* Sign Up */}
          <div className="text-center form-sm mt-2">
            <Button
              className="modalSignin btn btn-primary"
              onClick={this.handleSubmit}
            >
              Sign up <i className="fa fa-sign-in ml-1"></i>
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Signup));
