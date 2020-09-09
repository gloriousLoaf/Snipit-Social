import React, { useState, useEffect } from "react";
import AddPost from "./AddPost";
import Post from "./Post";
import API from "../../utils/API";
import { List, ListItem } from "../posts/List";
import DeleteButton from "./DeleteButton";

// react can't directly just list out object children
// we have to send it to the state of this file,
// then list out the state

// lets make list function 

// children ==== prop 
// in react, inner text / inner whatever goes as children in react cause you have to specify po

// lets make this list item

function ListPost() {

  // your .map or .key function is completely dependent on this part.
  const [posts, setPosts] = useState([]);

// have to set useEffect to an empty array to ensure only executed once.

  useEffect(() => {
    API.getPosts()
      .then(response => {
        // console.log(response.data);
        setPosts(response.data);
      })
      // this is intialized with empty array
  }, []);


  // should make this (if id matches poster id == delete.)
  function deletePost(id) {
    console.log(id)
    API.deletePosts(id)
        .then(res => API.getPosts())
        .catch(err => console.log(err));
}
  
console.log(posts)

  
  return (
    <div>
      <AddPost />
      ~~~LIST POST PAGE~~~
      <br>
      </br>
      change key to mongo id w/ context
      <List>
        {posts.map(tweets => (
          <ListItem key={tweets._id}>
            {tweets.text}
            <DeleteButton onClick={() => deletePost(tweets._id)} />
          </ListItem>
        ))}
      </List>
      <br />
      ~~~ END OF LIST POST PAGE ~~~ 
      <Post />
    </div>
  );
}


export default ListPost;
