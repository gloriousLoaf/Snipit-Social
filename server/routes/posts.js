const router = require("express").Router();
const passport = require("passport");
const Post = require("../models/Post");

router.route("/add/").post(
  // passport.authenticate("google", { failureRedirect: "/failed" }),
  (req, res) => {
    const text = req.body.text;
    // return res.send("Test ok!")

    const newPost = new Post({
      // user: {
      //   id: req.user.id,
      //   login: req.user.login
      // },
      text
    });

    newPost
      .save()
      .then(post => res.json(post))
      .catch(err => console.log(err));
  }
);

router.route("/find").get((req, res) => {
  Post.find()
    .sort({ createdAt: -1 })
    .then(posts => res.json(posts))
    .catch(err => console.log(err));
});

router.route("/delete/:id").delete((req, res) => {
  Post.findById(req.params.id)
    .then(console.log(req.params.id))
    .then(Tweets => {
      Tweets.remove();
      return res.json(Tweets)
    })
      .catch(err => res.status(422).json(err));
  
    // .then(Posts => res.json(Posts))
    // res.redirect('/posts')
});

module.exports = router;
