const express = require("express");
const app = express();
const passport = require("passport");
const router = require("express").Router();
const GitInfo = require("../models/Github");

router.route("/addGitInfo").post((req, res) => {
  // always returns in req.body apparently?
  GitInfo.findOne(
    {
      id: req.body.id
    },
    function (err, gitInfo) {
      if (err) {
        return console.log(err);
      }

      if (!gitInfo) {
        const newInfo = new GitInfo({
          id: req.body.id,

          snipitId: req.body.snipitId,

          name: req.body.name,

          htmlUrl: req.body.htmlURL,

          avatarUrl: req.body.avatarUrl,

          bio: req.body.bio,

          blog: req.body.blog,

          company: req.body.company,

          hireable: req.body.hireable
        });

        newInfo
          .save()
          .then(post => res.json(post))
          .catch(err => console.log(err));
      }
      gitInfo
    }
  );
  console.log(req.body);

  // NEW route to query db for existing GitHub auth
  // used in Profile.js to determine whether to show
  // "Connect to GitHub" option, or display GH data from db
  router.route("getGitInfo/:id").get((req, res) => {
    GitInfo.findOne({
      snipitId: req.params.id,
    })
      .then(info => res.json(info))
      .catch(err => console.log(err));

    console.log(req.params.id)

  });

  // const id = req.body.id;

  // const name = req.body.name;

  // const htmlUrl = req.body.htmlURL;

  // const avatarUrl = req.body.avatarUrl;

  // const bio = req.body.bio;

  // const blog = req.body.blog;

  // const company = req.body.company;

  // const hireable = req.body.hireable;

  // const newInfo = new GitInfo({
  //   id,
  //   name,
  //   htmlUrl,
  //   avatarUrl,
  //   bio,
  //   blog,
  //   company,
  //   hireable
  // });

  // newInfo
  //   .save()
  //   .then(post => res.json(post))
  //   .catch(err => console.log(err));
});

module.exports = router;
