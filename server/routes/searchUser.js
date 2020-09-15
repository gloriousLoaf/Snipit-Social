/* DEPENDING ON how many different auth methods we have,
    and which db models are available, we might handle searches 
    by user with models/User for the NavBar Search dropup */

const express = require("express");
const router = express.Router();
const GitInfo = require("../models/Github");
// const User = require("../models/User");

router.route("/searchUserName/:name").get((res, req) => {
    GitInfo.findOne(
        {
            name: req.body.name
        }
    )
        .then(name => res.json(name))
        .catch(err => console.log(err));
});

module.exports = router;