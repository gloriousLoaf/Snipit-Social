import axios from 'axios';

export default {
    // save post to db

    savePost: function(postText) {
        return axios.post("/api/posts/add", postText)
    }
};