import axios from 'axios';

// THIS FILE IS THE BRIDGE BETWEEN REACT AND OUR EXPRESS ROUTES TO MONGO

export default {

    // save post to db

    savePost: function(postText) {
        return axios.post("/api/posts/add", postText)
    },

    // getting all posts

    getPosts: function() {
        return axios.get("/api/posts/findAny")
    },

    // deleting posts

    deletePosts: function(id) {
        return axios.delete("/api/posts/delete/" + id)
    },

    // getting specific posts
    getUserPosts: function(id) {
        return axios.get("/api/posts/findUserPosts/" + id)
    }
};