import React, { createContext, useReducer } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
// import logo from "./logo.svg";
// import "./App.css";

import listPost from "./components/posts/ListPost";
// import Main from "./components/Main";
// NEW GitHub Auth Login. MERGE with Google Auth page!
import Login from "./components/Login";
// NEW This should MERGE with Profile page!
import UserHome from "./components/UserHome";
import Chat from "./components/chatrooms/Chat/index.js";
import Join from './components/chatrooms/Join/index.js';

export const AuthContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <AuthContext.Provider
        value={{
          state,
          dispatch
        }}
      >
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
            <Route path="/login" component={Login} />
            <Route path="/userhome" component={UserHome} />
            <Route path="/Posts" component={listPost}></Route>
            <Route path="/join" exact component={Join} />
            <Route path="/chat" component={Chat}></Route>

            <Link to={"/join"} style={{ margin: "0 5rem" }}>Join Chat</Link>

          </Switch>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
