import React, { createContext, useReducer } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import GitHubLogin from "./components/GitHubLogin";
// Chat
import Chat from "./components/chatrooms/Chat/index.js";
import Join from "./components/chatrooms/Chat/index";
//import js libraries

// Reducer store for AuthContext (Logins)
import { initialState, reducer } from "./store/reducer";
import { logoutUser, getCurrentUser } from "./actions/authActions/authActions";

import jwt_decode from "jwt-decode";

import breakroom from './components/breakroom';

import setHeaderAuth from "./utils/setAuthHeader";

//refactoring into redux (combining reducers)
import store from "./store";

// cant find how to separate it, might end up with huge reducer index.js
// import { profileState, profileReducer } from "./store/reducer/profileReducer";

// NEW Refactored Profilepage branch to React
import Profile from "./components/Profile";

// redux profile testing - eric
import reduxProfile from "./components/reduxProfile/Profile"

// Timeline stuff, coming soon
import ListPost from "./components/posts/ListPost";

// utility components 
import notFound from "./components/UtilityComponents/notFound"

// Eventually we'll have a logo
// import logo from "./logo.svg";
import "./App.css";

export const AuthContext = createContext();

// if theres a token in the storage, check how long its been up, log them out if its past expiration date that we set in the passport strategy
if (localStorage.getItem("jwToken")) {
  const currentTime = Date.now() / 1000;
  const decode = jwt_decode(localStorage.getItem("jwToken"));

  if (currentTime > decode.exp) {
    store.dispatch(logoutUser());
  } else {
    setHeaderAuth(localStorage.getItem("jwToken"));
    store.dispatch(getCurrentUser());
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <Provider store={store}>
        <AuthContext.Provider
          value={{
            state,
            dispatch
          }}
        >
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={LandingPage} />

              <Route path="/githublogin" exact component={GitHubLogin} />

              {/* Soon */}
              {/* <Route path="/googlelogin" exact component={GoogleLogin} /> */}

              {/* NEW Profile Page */}

              <Route path="/profile/:id" exact component={Profile} />
              <Route path="/reduxProfile/:userId" component={reduxProfile} />

              {/* no content yet */}
              <Route path="/Posts" component={ListPost} />

              <Route path="/breakroom" component={breakroom} />



              {/* Join goes to Chat. Join is temporary until DMs exist */}
              <Route path="/join" exact component={Join} />
              <Route path="/chat" exact component={Chat} />

              <Route component={notFound} />
            </Switch>
          </BrowserRouter>
        </AuthContext.Provider>
      </Provider>
    </div>
  );
};

export default App;
