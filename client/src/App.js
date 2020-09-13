import React, { createContext, useReducer } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from './components/LandingPage';
import GitHubLogin from "./components/GitHubLogin";
// Chat
import Chat from "./components/chatrooms/Chat/index.js";
import Join from './components/chatrooms/Join/index.js';
// Reducer store for AuthContext (Logins)
import { initialState, reducer } from "./store/reducer";

// NEW Refactored Profilepage branch to React
import Profile from './components/Profile';

// Timeline stuff, coming soon
import listPost from "./components/posts/ListPost";

// Eventually we'll have a logo
// import logo from "./logo.svg";
import "./App.css";

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
          <Switch>

            <Route path="/" exact component={LandingPage} />

            {/* IMPORTANT - for now GH must be at /login,
            hopefully Google can be at a different path */}
            <Route path="/login" exact component={GitHubLogin} />

            {/* Soon */}
            {/* <Route path="/googlelogin" exact component={GoogleLogin} /> */}

            {/* NEW Profile Page */}
            <Route path="/profile/:id" exact component={Profile} />

            {/* no content yet */}
            <Route path="/Posts" component={listPost} />

            {/* Join goes to Chat. Join is temporary until DMs exist */}
            <Route path="/join" exact component={Join} />
            <Route path="/chat" exact component={Chat} />

          </Switch>
        </BrowserRouter>

      </AuthContext.Provider>
    </div >
  );
}

export default App;