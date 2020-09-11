const express = require("express");
const app = express();
const passport = require("passport");
const router = require("express").Router();
const GitInfo = require("../models/Github");


router.route("/addGitInfo")
.post((req, res) => {
    // always returns in req.body apparently?
    console.log(req.body)
  const id = req.body.id

  const name = req.body.name

  const htmlUrl = req.body.htmlURL

  const avatarUrl = req.body.avatarUrl

  const bio = req.body.bio

  const blog = req.body.blog

  const company = req.body.company

  const hireable = req.body.hireable

  const newInfo = new GitInfo({
    id,
    name,
    htmlUrl,
    avatarUrl,
    bio,
    blog,
    company,
    hireable,
  });

  newInfo 
    .save()
    .then(post => res.json(post))
    .catch(err => console.log(err));
});


module.exports = router;