//////// new attempt to rewrite as Redux, probably bug-filled
// NAVBAR - PROFILE
import React, { Component } from 'react';
import { Button, Dropdown, DropdownButton, Form, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { getCurrentUser } from "../../actions/authActions/authActions";
import './style.css';

class NavBar extends Component {
    constructor() {
        super();
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
            // userObj = something pulled from db or other localstorage
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
        return (
            <div className="navbarContainer">
                <Button href="/Posts" className="navbarLogo">
                    <i className="fas fa-stream" aria-hidden="true" title="profile"></i>
                </Button>

                <Button href="/breakroom" className="navbarLogo breakroom">
                    <i className="fas fa-gamepad" aria-hidden="true" title="profile"></i>
                </Button>

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

                <Button href="/profile/:id" className="navbarLogo">
                    <i className="far fa-user-circle" aria-hidden="true"></i>
                </Button>
            </div>
        )
    }
};

// this is just copy & paste for a moment, idk what this does
const mapStateToProps = (state) => ({
    auth: state.auth,
})

// also c&p kinda
// export default connect(mapStateToProps)(withRouter(NavBar));
export default connect(mapStateToProps)(withRouter(NavBar));



// ///////////////////////// old but almost working

// // NAVBAR - PROFILE
// import React, { useState } from 'react';
// import { Button, Dropdown, DropdownButton, Form, FormControl } from 'react-bootstrap';
// // import { useSelector } from 'react-redux';
// // import { getCurrentUser } from "../../actions/authActions/authActions";
// import searchAPI from '../../utils/searchUserAPI';
// import './style.css';

// const NavBar = () => {

//     // hooks for getting user & chatroom for URL,
//     // and hook for search bar
//     const [name, setName] = useState('');
//     const [room, setRoom] = useState('');
//     const [search, setSearch] = useState('');
//     // const { isLoggedIn } = useSelector(state => state.auth);

//     // handleSelect for chat dropup menu
//     // this works, grabs name & room selected to create URL
//     const userName = JSON.parse(localStorage.getItem("user"));
//     const handleSelect = (e) => {
//         setName(userName.name);
//         setRoom(e);
//     };

//     /////// FAILED ATTEMPTS at getting name of an email user ////////
//     // const userName = JSON.parse(localStorage.getItem("user"));
//     // if (userName === "") {
//     //     localStorage.setItem("currentUser", JSON.stringify(getCurrentUser()));
//     // };
//     // const handleSelect = (e) => {
//     //     setName(userName.name);
//     //     setRoom(e);
//     // };

//     // const userName = JSON.parse(localStorage.getItem("user"));
//     // let userName;
//     // if (isLoggedIn) {
//     //     console.log("yes");
//     //     userName = "word";
//     // } else {
//     //     userName = JSON.parse(localStorage.getItem("user"));
//     // };
//     // const handleSelect = (e) => {
//     //     setName(userName.name);
//     //     setRoom(e);
//     // };
//     ///////// END FAILURE (not really) ///////////

//     ////// HANDLE SEARCH - broken ///////
//     const handleSearch = (e) => {
//         e.preventDefault();
//         // send search to API to DB?
//         // HOW DOES THIS WORK??
//         searchAPI.searchUser(search)
//             .then(res => {
//                 if (res.data.items === "error") {
//                     throw new Error(res.data.items);
//                 } else {
//                     console.log(res.data);
//                 }
//             })
//             .catch(err => console.log(err));
//     };

//     return (
//         <div className="navbarContainer">
//             <Button href="/Posts" className="navbarLogo">
//                 <i className="fas fa-stream" aria-hidden="true" title="profile"></i>
//             </Button>

//             {/* Dropup Chat: pop into any of a few predefined live chatrooms,
//                 we can add as many more as we like, let's keep it under 10 maybe? */}
//             <DropdownButton
//                 className="navbarLogo"
//                 title={
//                     <i className="far fa-comment-alt" aria-hidden="true"></i>
//                 } drop="up">
//                 <Dropdown.Item className="liveChats">Chat Rooms:</Dropdown.Item>
//                 <Dropdown.Item href={`/chat?name=${name}&room=${room}`} eventKey="Frontend" onSelect={handleSelect}>#frontend</Dropdown.Item>
//                 <Dropdown.Item href={`/chat?name=${name}&room=${room}`} eventKey="Backend" onSelect={handleSelect}>#backend</Dropdown.Item>
//                 <Dropdown.Item href={`/chat?name=${name}&room=${room}`} eventKey="Hardware" onSelect={handleSelect}>#hardware</Dropdown.Item>
//                 <Dropdown.Item href={`/chat?name=${name}&room=${room}`} eventKey="Gaming" onSelect={handleSelect}>#gaming</Dropdown.Item>
//                 <Dropdown.Item href={`/chat?name=${name}&room=Life`} eventKey="Life" onSelect={handleSelect}>#life</Dropdown.Item>
//             </DropdownButton>

//             {/* Dropup Search - pass submission to db (not written)  */}
//             <DropdownButton
//                 alignRight
//                 className="navbarLogo"
//                 title={
//                     <i className="fas fa-search" aria-hidden="true"></i>
//                 } drop="up">
//                 <Form onSubmit={handleSearch}>
//                     <FormControl
//                         autoFocus
//                         type="search"
//                         className="mx-3 my-2 w-auto"
//                         placeholder="Search for Users"
//                         onChange={(e) => setSearch(e.target.value)}
//                     />
//                 </Form>
//             </DropdownButton>

//             <Button href="/profile/:id" className="navbarLogo">
//                 <i className="far fa-user-circle" aria-hidden="true"></i>
//             </Button>
//         </div>
//     )
// };

// export default NavBar;