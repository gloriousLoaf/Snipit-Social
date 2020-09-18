const GitHubStrategy = require("passport-github").Strategy;
const express = require("express");
const app = express();
const passport = require("passport")
const session = require("express-session")

require("dotenv").config();

// ***
// github config set up
// *****

GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
SECRET = process.env.SECRET

module.exports = passport => {
  passport.use(
    new GitHubStrategy(
      {
        clientID: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_CLIENT_SECRET,
        callbackURL: "http://localhost:5000/auth/github/callback"
      },
      function(accessToken, refreshToken, profile, done) {
        console.log(profile)
        return done(null, profile);
      }
    )
  );

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

  app.use(session({
      secret: SECRET,
      proxy: true,
      resave: true,
      saveUninitialized: true,
  }))

};
