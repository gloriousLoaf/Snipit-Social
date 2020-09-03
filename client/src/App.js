import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import listPost from "./components/posts/ListPost";
// import Main from "./components/Main";
import Chat from "./components/chatrooms/Chat/index.js";
import Join from './components/chatrooms/Join/index.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <a
            className="App-link"
            href="localhost:3001"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here for backend test!
              </a>
          <Switch>
            {/* <Link to="/Posts" /> */}
            <Route path="/Posts" component={listPost}></Route>
            <Route path="/join" exact component={Join} />
            <Route path="/chat" component={Chat}></Route>



          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
