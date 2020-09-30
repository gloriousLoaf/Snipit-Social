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
})

// NEW route to query db for existing GitHub auth
// used in Profile.js to determine whether to show
// "Connect to GitHub" option, or display GH data from db
// router.route("getGitInfo/:id").get((req, res) => {
//   User.findOne({
//     // snipitId: JSON.stringify(req.body.id),
//     snipitId: req.body.id,

//   })
//     .then(() => {
//       //   console.log(req.body.id);
//       //   res.json(data);
//       res.json({
//         id: req.body.id,
//         snipitId: req.body.snipitId,
//         name: req.body.name,
//         htmlUrl: req.body.htmlURL,
//         avatarUrl: req.body.avatarUrl,
//         bio: req.body.bio,
//         blog: req.body.blog,
//         company: req.body.company,
//         hireable: req.body.hireable
//       })
//         .catch(err => console.log(err));
//     });
// });


/////////////////////// CODE GRAVEYARD

router.route("/:id").get((req, res) => {
  GitInfo.findOne({
      id: req.params.id
  })
    .then(gitData => {
      if (gitData) {

        // send this into state. 
        return res.json({
          _id: gitData._id, 
          id: gitData.id, 
          name: gitData.name,
          avatarUrl: gitData.avatarUrl,
          bio: gitData.bio,
          blog: gitData.blog,
          company: gitData.company,
          hireable: gitData.hireable,
        });
      } else {
        return res.status(404).json({ msg: "User not found" });
      }
    })
    .catch(err => console.log(err));
});

module.exports = router;