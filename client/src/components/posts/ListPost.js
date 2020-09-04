import React, { useState, useEffect } from "react";
import AddPost from "./AddPost";
import Post from "./Post";
import API from "../../utils/API";

// react can't directly just list out object children
// we have to send it to the state of this file,
// then list out the state

function listPost() {
  const [posts, setPosts] = useState();


//   useEffect(() => {
//     setPosts(API.getPosts);
//   });

  return (
    <div>
      <AddPost />
      ~~~LIST POST PAGE~~~
      <Post />
    </div>
  );
}

const mapStateToProps = (state) => ({

})



export default listPost;
