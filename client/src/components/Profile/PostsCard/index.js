import React, { useState, useEffect } from "react";

import API from "../../../utils/API";

function PostsCard() {
  // your .map or .key function is completely dependent on this part.
  const [posts, setPosts] = useState([]);

  // have to set useEffect to an empty array to ensure only executed once.

  // change component cycle,
  // currently it only pulls tweets on load bc life cycle
  // can just put this in an event listener?

  // for now this will show all tweets too :()
  // need to change this to userPosts
  // useEffect(() => {
  //   API.getPosts().then(response => {
  //     // console.log(response.data);
  //     setPosts(response.data);
  //   });
  //   // this is intialized with empty array
  // }, []);

  // return (
  //   <div>
  //   </div>
  // );
}

export default PostsCard;
