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
          hireable: req.body.hireable,
          publicRepos: req.body.publicRepos,
          followers: req.body.followers,
          following: req.body.following,
          htmlUrl: req.body.htmlUrl
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
router.route("/getGitInfo/:id").get((req, res) => {
  GitInfo.findOne({
    snipitId: req.params.id,
  })
    .then((data) => {
      // res.json({
      //   id: req.body.id,
      //   snipitId: req.body.snipitId,
      //   name: req.body.name,
      //   htmlUrl: req.body.htmlURL,
      //   avatarUrl: req.body.avatarUrl,
      //   bio: req.body.bio,
      //   blog: req.body.blog,
      //   company: req.body.company,
      //   hireable: req.body.hireable
      // })
      // .then(() => { return res.json({ data }) })

      // return res.json({ data }, console.log(res))
      return res.json(data)
      // return console.log(res)

      // .catch(err => console.log(err));
    });
});

/////////////////////// Eric's new routes
// router.route("/snipit/:id").get((req, res) => {
//   GitInfo.findOne({
//     _id: req.params.id,
//   })
//     .then(gitData => {
//       if (gitData) {
//         // send this into state. 
//         console.log(res.json)
//         return res.json({
//           _id: gitData._id,
//           id: gitData.id,
//           snipitId: gitData.snipitId,
//           name: gitData.name,
//           avatarUrl: gitData.avatar_url,
//           bio: gitData.bio,
//           blog: gitData.blog,
//           company: gitData.company,
//           hireable: gitData.hireable,
//         });
//       } else {
//         return res.status(404).json({ msg: "User not found" });
//       }
//     })
//     .catch(err => console.log(err));
// });

// router.route("/snipit/:snipitId").get((req, res) => {
//   GitInfo.findOne({
//     snipitId: req.params.snipitId,
//   })
//     .then(gitData => {
//       if (gitData) {
//         // send this into state. 
//         console.log(res.json)
//         return res.json({
//           _id: gitData._id,
//           id: gitData.id,
//           snipitId: gitData.snipitId,
//           name: gitData.name,
//           avatarUrl: gitData.avatarUrl,
//           bio: gitData.bio,
//           blog: gitData.blog,
//           company: gitData.company,
//           hireable: gitData.hireable,
//         });
//       } else {
//         return res.status(404).json({ msg: "User not found" });
//       }
//     })
//     .catch(err => console.log(err));
// });

/////////////////////// CODE GRAVEYARD

// router.route("getGitInfo/:id").get((req, res) => {
//   GitInfo.findOne({ snipitId: req.body.id })
//     .then(user => {
//       console.log(res)
//       if (user) {
//         return res.json({
//           _id: user._id,
//           email: user.email,
//           fullname: user.fullname,
//           followers: user.followers,
//           following: user.following
//         });
//       } else {
//         return res.status(404).json({ msg: "User not found" });
//       }
//     })
//     .catch(err => console.log(err));
// });

// WORKS to query the wrong collection, if you change GitHubAPIS.js to:
// return axios.get("/api/users/" + id)
// router.route("getGitInfo/:id").get((req, res) => {
//   User.findOne(req.params.id)
//     .then(user => {
//       if (user) {
//         return res.json({
//           _id: user._id,
//           email: user.email,
//           fullname: user.fullname,
//           followers: user.followers,
//           following: user.following
//         });
//       } else {
//         return res.status(404).json({ msg: "User not found" });
//       }
//     })
//     .catch(err => console.log(err));
// });

module.exports = router;