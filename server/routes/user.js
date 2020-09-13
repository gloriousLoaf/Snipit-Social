const express = require("express");
const app = express();
const passport = require("passport");
const router = require("express").Router();
const GitInfo = require("../models/Github");

router.route("/:id")
    .get((req, res) => {
        // if we want more than just gitinfo,
        // we need to make a membership table
        GitInfo.findOne({
            id: req.params.id
            }
        )
            .then(user => {
                if (user) {
                    return res.json({
                        id: user.id,
                        name: user.name,
                        avatarURL: user.avatarURL,
                        bio: user.bio,
                        blog: user.blog,
                        company: user.company,
                        hireable: user.hireable,
                    })
                } else {
                    return res.status(404).json({ msg: "user not found"})
                }
            })
            .catch(err => console.log(err))
    }
)


    
module.exports = router;