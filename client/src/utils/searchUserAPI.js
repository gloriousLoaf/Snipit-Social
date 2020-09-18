/* SEARCH USER API - to get mongodb _id for redirect
after email-auth login. Depending on the auth methods and models,
this will need to change and/or gain additional methods */

import axios from 'axios';

export default {
    searchUser: (email) => {
        return axios.get("/searchUser/" + email);
    }
}