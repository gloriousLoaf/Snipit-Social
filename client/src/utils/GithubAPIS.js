import axios from 'axios';

// THIS FILE IS THE BRIDGE BETWEEN REACT AND OUR EXPRESS ROUTES TO MONGO

export default {

    // save post to db

    saveGitInfo: function (gitInfo) {
        return axios.post("/api/gitinfo/addGitInfo", gitInfo)
    },

    // get gitInfo from db

    getGitInfo: function (id) {
        return axios.get("/api/gitinfo/getGitInfo/" + id)
    }

};