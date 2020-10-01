// NAVBAR - PROFILE
import React, { Component } from 'react';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';
// import { Button, Dropdown, DropdownButton, Form, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';

// import { withRouter } from 'react-router-dom';
// import { getCurrentUser } from "../../actions/authActions/authActions";
import './style.css';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            room: '',
            // search: ''
        }
    }


    // works for GitHub auth, needs additional
    // logic for email auth users

    handleSelect = (e) => {
        let userName;
        let userObj = JSON.parse(localStorage.getItem("user"));
        if (!userObj) {
            // logic for getting email-auth's name
            userName = this.props.auth.user.fullname
        } else {
            userName = userObj.name;
        }
        this.setState({ name: userName });
        this.setState({ room: e.currentTarget });
    };

    // // this may have to be abandoned, no search? Stretch Goal!
    // handleSearch = (e) => {
    //     e.preventDefault();
    //     searchAPI.searchUser(search)
    //         .then(res => {
    //             if (res.data.items === "error") {
    //                 throw new Error(res.data.items);
    //             } else {
    //                 console.log(res.data);
    //             }
    //         })
    //         .catch(err => console.log(err));
    // };

    render() {

        const {
            // auth,
            // user,
            // profile,
            isAuthenticated,
        } = this.props;

        const authLinks = isAuthenticated
            && (
                <Button href={`/ProfileSwitcher/${this.props.auth.user._id}`} className="navbarLogo">
                    <i className="far fa-user-circle" alt="Profile" aria-hidden="true"></i>
                </Button>
            )

        return (
            <div className="navbarContainer">
                <Button href="/Posts" className="navbarLogo">
                    <i className="fas fa-stream" aria-hidden="true" title="profile"></i>
                </Button>

                {/* <Button href="/breakroom" className="navbarLogo breakroom">
                    <i className="fas fa-gamepad" aria-hidden="true" title="profile"></i>
                </Button> */}

                {/* Dropup Chat: pop into any of a few predefined live chatrooms,
                we can add as many more as we like, let's keep it under 10 maybe? */}
                <DropdownButton
                    className="navbarLogo"
                    title={
                        <i className="far fa-comment-alt" aria-hidden="true"></i>
                    } drop="up">
                    <Dropdown.Item className="liveChats">Chat Rooms:</Dropdown.Item>
                    <Dropdown.Item href={`/chat?name=${this.state.name}&room=Frontend`} eventKey="Frontend" onSelect={this.handleSelect}>#frontend</Dropdown.Item>
                    <Dropdown.Item href={`/chat?name=${this.state.name}&room=Backend`} eventKey="Backend" onSelect={this.handleSelect}>#backend</Dropdown.Item>
                    <Dropdown.Item href={`/chat?name=${this.state.name}&room=Hardware`} eventKey="Hardware" onSelect={this.handleSelect}>#hardware</Dropdown.Item>
                    <Dropdown.Item href={`/chat?name=${this.state.name}&room=Gaming`} eventKey="Gaming" onSelect={this.handleSelect}>#gaming</Dropdown.Item>
                    <Dropdown.Item href={`/chat?name=${this.state.name}&room=Life`} eventKey="Life" onSelect={this.handleSelect}>#life</Dropdown.Item>
                </DropdownButton>

                {/* Dropup Search - pass submission to db (not written)  */}
                {/* <DropdownButton
                    alignRight
                    className="navbarLogo"
                    title={
                        <i className="fas fa-search" aria-hidden="true"></i>
                    } drop="up">
                    <Form onSubmit={handleSearch}>
                        <FormControl
                            autoFocus
                            type="search"
                            className="mx-3 my-2 w-auto"
                            placeholder="Search for Users"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </Form>
                </DropdownButton> */}

                {/* <Button href="/Profile/:id" className="navbarLogo">
                    <i className="far fa-user-circle" aria-hidden="true"></i>
                </Button> */}

                { isAuthenticated ? authLinks : null}
            </div>
        )
    }
};

// this is just copy & paste for a moment, idk what this does
const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile,
    user: state.user,
    isAuthenticated: state.auth.isAuthenticated,
})

// also c&p kinda
// export default connect(mapStateToProps)(withRouter(NavBar));
export default connect(mapStateToProps)(NavBar);