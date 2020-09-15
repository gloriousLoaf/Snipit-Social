const express = require("express");
const app = express();
const passport = require("passport");
const router = require("express").Router();
const GitInfo = require("../models/Github");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

const userRegisterValidation = require("../validation/register");

//https://www.npmjs.com/package/bcryptjs

router.route("/register").post((req, res) => {
  const { isValid, errors } = userRegisterValidation(req.body);
  if (!isValid) {
    return res.status(404).json(errors);
  }

  User.findOne({
    email: req.body.email
  }).then(user => {

    if (user) {
      errors.email = "Email was used!";
      return res.status(404).json(errors)
    }

    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(req.body.password, salt, function(err, hash) {
        const newUser = new User({
          email: req.body.email,
          login: req.body.login,
          password: hash
        });

        newUser
          .save()
          .then(newUser => res.json(newUser))
          .catch(err => console.log(err));
      });
    });
  });
});

router.route("/:id").get((req, res) => {
  // if we want more than just gitinfo,
  // we need to make a membership table
  GitInfo.findOne({
    id: req.params.id
  })
    .then(user => {
      if (user) {
        return res.json({
          id: user._id,
          name: user.name,
          avatarURL: user.avatarURL,
          bio: user.bio,
          blog: user.blog,
          company: user.company,
          hireable: user.hireable
        });
      } else {
        return res.status(404).json({ msg: "user not found" });
      }
    })
    .catch(err => console.log(err));
});

module.exports = router;
