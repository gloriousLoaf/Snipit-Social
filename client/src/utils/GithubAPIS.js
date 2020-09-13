import axios from 'axios';


// this is for posts api

// THIS FILE IS THE BRIDGE BETWEEN REACT AND OUR EXPRESS ROUTES TO MONGO

export default {

    // save post to db

    saveGitInfo: function(gitInfo) {
        return axios.post("/api/gitinfo/addGitInfo", gitInfo)
    },

    // get gitInfo from db

    // getGitId: function(id) { 
    //     return axios.get("/api/gitinfo/getGitId", id)
    // }
    
};