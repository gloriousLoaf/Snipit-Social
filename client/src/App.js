import React, { createContext, useReducer } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Main from "./components/Main";

// NEW Landing Page, from Chase's home-page branch
import LandingPage from './components/LandingPage';

// GitHub Auth Login. MERGE with Google Auth page!
import Login from "./components/Login";

// This should MERGE with Profile page!
import UserHome from "./components/UserHome";

// Timeline stuff, coming soon
// import listPost from "./components/posts/ListPost";

// NEW reducer store for AuthContext,
// may be how all logins are handled
import { initialState, reducer } from "./store/reducer";

// Chat
import Chat from "./components/chatrooms/Chat/index.js";
import Join from './components/chatrooms/Join/index.js';

// Eventually we'll have a logo and basic App-wide styles
// import logo from "./logo.svg";
// import "./App.css";

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

            {/* NEW - LandingPage - merge in all Auth's */}
            <Route path="/" exact component={LandingPage} />

            {/* Login is going to merge into LandingPage */}
            <Route path="/login" exact component={Login} />

            {/* UserHome is where GH auth directs to,
            eventually this is the user's profile page */}
            <Route path="/userhome" exact component={UserHome} />

            {/* no content yet */}
            {/* <Route path="/Posts" component={listPost} /> */}

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
