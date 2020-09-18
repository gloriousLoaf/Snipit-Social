/* DEPENDING ON how many different auth methods we have,
    and which db models are available, we might handle searches
    by user with models/User for the NavBar Search dropup */

const express = require("express");
const router = express.Router();
const User = require("../models/User");

// 404 but close maybe?
router.route("/searchUser/:email").get((res, req) => {
    User.findOne(
        {
            email: req.body.email
        }
    )
        .then(email => res.json(email))
        .catch(err => console.log(err));
});

module.exports = router;