// PROFILE PAGE
import React, { createContext, useReducer} from "react";
import NavBar from "../NavBar";
import UserCard from "./UserCard";
import SocialCard from "./SocialCard";
import AboutCard from "./AboutCard";
import UserActions from "./UserActions";
import PostsCard from "./PostsCard";
import "./style.css";


const Profile = () => {
  return (
      <div className="profContainer">
        <NavBar />
        <div className="cardContainer">
          <UserCard />
          <SocialCard />
          {/* To Do <PostsCard /> */}
          <AboutCard />
          <UserActions />
        </div>
      </div>
  );
};

export default Profile;
