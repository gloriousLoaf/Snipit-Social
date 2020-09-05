import React, { createContext, useReducer } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import logo from "./logo.svg";
// import "./App.css";
import listPost from "./components/posts/ListPost";
// import Main from "./components/Main";
// NEW GitHub Auth Login. MERGE with Google Auth page!
import Login from "./components/Login";
// NEW This should MERGE with Profile page!
import UserHome from "./components/UserHome";
// NEW reducer for AuthContext
import { initialState, reducer } from "./store/reducer";
// Chat
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
          <Switch>
            {/* <Link to="/Posts" /> */}
            <Route path="/login" component={Login} />
            <Route path="/userhome" component={UserHome} />
            <Route path="/Posts" component={listPost}></Route>
            <Route path="/join" exact component={Join} />
            <Route path="/chat" component={Chat}></Route>
          </Switch>
        </BrowserRouter>
      </AuthContext.Provider>
    </div >
  );
}

export default App;
