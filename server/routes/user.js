const express = require("express");
const app = express();
const passport = require("passport");
const router = require("express").Router();
const GitInfo = require("../models/Github");
const User = require("../models/User");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const userRegisterValidation = require("../validation/register");

const userLoginValidation = require("../validation/login");

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
      return res.status(404).json(errors);
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

router.route("/login").post((req, res) => {
  const { isValid, errors } = userLoginValidation(req.body);

  if (!isValid) {
    return res.status(404).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      bcrypt.compare(req.body.password, user.password)
      .then(isMatch => {
        if (isMatch) {
          const token = jwt.sign(
            { id: user._id },
            process.env.SECRET,
            { expiresIn: "1d" },
            function(err, token) {
              return res.json({
                success: true,
                token: token
              });
            }
          );
        } else {
          // good practice to not tell them whats wrong, just its wrong.
          errors.password = "Invalid pw";
          return res.status(404).json(errors);
        }
      });
    } else {
      errors.email = "invalid email";
      return res.status(404).json(errors);
    }
  });
});


// passport . authenticate basically checks your header for the jwt, if the header does nost match, do not pass. 
router.route("/")
  .get( passport.authenticate("jwt", { session: false}), (req, res) => {
      // res.send(req.user)

    res.json({
      _id: req.user._id,
      email: req.user.email,
      followers: req.user.followers,
      following: req.user.following
    })
  })

module.exports = router;
