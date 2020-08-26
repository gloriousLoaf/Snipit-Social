"use strict";

var express = require("express");

var app = express();

var cors = require("cors");

var bodyParser = require("body-parser");

var passport = require("passport");

var cookieSession = require("cookie-session");

require("./passport-setup"); // Serve static assets if in production


if (process.env.NODE_ENV === "production") {
  // Set static folder
  // All the javascript and css files will be read and served from this folder
  app.use(express["static"]("client/build")); // index.html for all page routes    html or routing and naviagtion

  app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
} // middleware


app.use(cors());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(cookieSession({
  name: "Coding-society-session",
  keys: ["key1", "key2"]
}));

var isLoggedIn = function isLoggedIn(req, res, next) {
  if (req.user) {
    next();
  } else {
    // change unauthorized page here
    res.sendStatus(401);
  }
}; //intialize with passport,


app.use(passport.initialize()); // use sessions, if using sessions need cookie session lib

app.use(passport.session()); // api calls

app.get("/", function (req, res) {
  return res.send("hello, please go to /google");
});
app.get("/failed", function (req, res) {
  return res.send("failure to log in");
}); // just req.user to see the whole json

app.get("/good", isLoggedIn, function (req, res) {
  return res.send("welcome ".concat(req.user));
});
app.get("/google", passport.authenticate("google", {
  scope: ["profile", "email"]
}));
app.get("/google/callback", passport.authenticate("google", {
  failureRedirect: "/failed"
}), function (req, res) {
  // Successful authentication, redirect home.
  res.redirect("/good");
});
app.get("/logout", function (req, res) {
  // ending the session
  req.session = null; // passports requires you to do this

  req.logout();
  res.redirect("/");
});
var port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log("Server Listening on ".concat(port));
});