// LOGIN MODAL //
import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux"
import { loginUser } from "../../../actions/authActions/authActions"


class Login extends Component {
  constructor(props) {
    // VS Intellisense is marking this use of 'super' as deprecated
    super(props);
    this.state = {
      email: "",
      password: "",
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
      email: this.state.email,
      password: this.state.password
    };


    this.props.loginUser(userData);


    ///////////////////////////

    /// ok, we have an email address in state, right? query db?
    // but this is 404, probably a mistake I'm making in
    // utils/searchUserAPI, or in routes/searchUser

    // searchAPI.searchUser(this.state.email)
    //   .then((res) => {
    //     if (res === "error") {
    //       throw new Error(res);
    //     } else {
    //       console.log(res)
    //       // let id = res.asdfasdf
    //       // this.props.history.push(`/profile/${id}`);
    //     }
    //   })
    //   .catch(err => console.log(err));

    ///////////////////////////

    // redirect to posts

  }

  render() {
    const {
      classes,
      auth,
      profile,
    } = this.props;

    if (auth.isAuthenticated) {
      this.props.history.push('/posts');
    }

    const { errors } = this.state;

    return (
      <div>
        <Form className="modal-body mx-4" ref="loggingIn" action="/profile">
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
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <Form.Text className="text-muted">
              {errors.email
                ? errors.email
                : "We'll never share your email with anyone else."}
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
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <div className="text-center mb-3">
            </div>
            <Form.Text className="text-muted">
              {errors.password ? errors.password : ""}
            </Form.Text>
            <p className="font-small blue-text d-flex justify-content-end">
              <a href="/" className="link ml-1">
                Forgot Password?
              </a>
            </p>
          </Form.Group>
          {/* Sign in */}
          <div className="text-center mb-3">
            <Button
              type="button"
              className="modalSignin bg-m btn-dark"
              onClick={this.handleSubmit}
            >
              Sign in
            </Button>
          </div>
          {/* Other Sign in Methods */}
          {/* <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
            Or Sign in with
          </p> */}
          <div className="row my-2 d-flex justify-content-center">
            {/* Facebook Login, stretch goal?? */}
            {/* Github Login */}
            {/* <Button
              href="/githublogin"
              type="button"
              className="github btn-dark mb-3"
            >
              <i className="fab fa-github" style={{ fontSize: 30 }}></i>
            </Button> */}
          </div>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.auth.user,
  errors: state.errors,
})


export default connect(mapStateToProps, { loginUser })(withRouter(Login));

