const express = require("express");
const app = express();
const passport = require("passport");
const router = require('express').Router()

// utility functions
const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    // change unauthorized page here
    res.sendStatus(401);
  }
};

// api calls
app.route("/", (req, res) => res.send("hello, please go to /google"));

app.get("/failed", (req, res) => res.send("failure to log in"));
// just req.user to see the whole json
app.get("/good", isLoggedIn, (req, res) => res.send(`welcome ${req.user}`));

app.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/failed" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/good");
  }
);

app.get("/logout", (req, res) => {
  // ending the session
  req.session = null;
  // passports requires you to do this
  req.logout();
  res.redirect("/");
});

//// CHAT ////
router.get("/chat", (req, res) => {
  res.header('Access-Control-Allow-Credentials', false);
  res.send({ response: "Server is running" }).status(200);
});

module.exports = router

