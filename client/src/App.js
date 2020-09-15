import React, { createContext, useReducer } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import GitHubLogin from "./components/GitHubLogin";
// Chat
import Chat from "./components/chatrooms/Chat/index.js";
import Join from "./components/chatrooms/Chat/index";

// Reducer store for AuthContext (Logins)
import { initialState, reducer } from "./store/reducer";

//refactoring into redux (combining reducers)
import store from "./store";

// cant find how to separate it, might end up with huge reducer index.js
// import { profileState, profileReducer } from "./store/reducer/profileReducer";

// NEW Refactored Profilepage branch to React
import Profile from "./components/Profile";

// Timeline stuff, coming soon
import ListPost from "./components/posts/ListPost";

// Eventually we'll have a logo
// import logo from "./logo.svg";
import "./App.css";

export const AuthContext = createContext();
// export const ProfileContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [profileState, profileDispatch] = useReducer(profileReducer, profileState);

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

              {/* IMPORTANT - for now GH must be at /login,
            hopefully Google can be at a different path */}
              <Route path="/login" exact component={GitHubLogin} />

              {/* Soon */}
              {/* <Route path="/googlelogin" exact component={GoogleLogin} /> */}

              {/* NEW Profile Page */}
              {/* <ProfileContext.Provider> */}
              <Route path="/profile/:id" exact component={Profile} />
              {/* </ProfileContext.Provider> */}

              {/* no content yet */}
              <Route path="/Posts" component={ListPost} />

              {/* Join goes to Chat. Join is temporary until DMs exist */}
              <Route path="/join" exact component={Join} />
              <Route path="/chat" exact component={Chat} />
            </Switch>
          </BrowserRouter>
        </AuthContext.Provider>
      </Provider>
    </div>
  );
};

export default App;
