//////////////////////////////////////////////////////
// OLD GITHUB AUTH'D PROFILE PAGE
// Not part of production, might use parts,
// Particularly the OldUserAction in UserAction/old.js
//////////////////////////////////////////////////////

import React from "react";
// import React, { createContext, useReducer} from "react";
import NavBar from "../NavBar";
import UserCard from "./UserCard";
import SocialCard from "./SocialCard";
import AboutCard from "./AboutCard";
import OldUserAction from "./UserAction/old.js";
// import PostsCard from "./PostsCard";
import "./style.css";


const Profile = () => {
  return (
    <div className="profContainer">
      <NavBar />
      <div className="cardContainer">
        <UserCard />
        <SocialCard />
        <AboutCard />
        <OldUserAction />
      </div>
    </div>
  );
};

export default Profile;
