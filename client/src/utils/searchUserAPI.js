/* SEARCH USER API - for Search dropup in NavBar.
Writing this to query existing GitHub data as written
by Eric. Depending on the auth methods and models,
this will need to change an/or gain additional methods */

import axios from 'axios';

export default {
    searchUser: (name) => {
        return axios.get("/searchUserName/" + name)
    }
}