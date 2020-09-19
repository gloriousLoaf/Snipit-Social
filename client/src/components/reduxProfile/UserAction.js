import React, { Component } from "react";

import { logoutUser } from "../../actions/profileActions/profileActions";

import { connect } from "react-redux";

import Button from "react-bootstrap/Button";

import { Redirect } from "react-router-dom"

class UserAction extends Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  state = {
      redirect : false
  }

  setRedirect = () => {
      this.setState({
          redirect: true,
      })
    }
  

  renderRedirect = () => {
    if (this.state.redirect) {
        return (<Redirect to="/posts" />);
    }
  }

  handleLogout() {
    // console.log(id);
    this.props.logoutUser();
    localStorage.removeItem("jwToken");

    this.setRedirect();

    this.renderRedirect();
}

render() {
    
    const { 
        auth,
        user
    } = this.props;
    

    console.log(this.state.redirect)
    
    // console.log(user)
    // console.log(auth)

    return (
      <div>
        <div style={{ color: "#fff", textAlign: "center" }}>
          <p>#DeleteMe: 👇 These neither, need logic.</p>
        </div>
        <div className="card my-4 py-3 actions container">
          <h2 className="d-flex justify-content-center">Settings</h2>
          <div className="row justify-content-around my-2">
            {/* Edit Profile function doesn't exist yet */}
            <Button className="settingBtn">
              <i className="fas fa-sliders-h"></i>
            </Button>

            {/* Logout used to work with GH AuthContext, but... */}
            <Button className="settingBtn" onClick={() => this.handleLogout() +  this.renderRedirect()}>
              {/* <Button className="settingBtn"> */}
              <i className="fas fa-sign-out-alt"></i>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  user: state.auth.user
});

export default connect(mapStateToProps, { logoutUser }) (UserAction);
