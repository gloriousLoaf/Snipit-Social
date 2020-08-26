"use strict";

var passport = require("passport");

var GoogleStrategy = require("passport-google-oauth20").Strategy; // what its suppose to be
// passport.serializeUser(function(user, done) {
//     done(null, user.id);
//   });
//   passport.deserializeUser(function(id, done) {
//     User.findById(id, function(err, user) {
//       done(err, user);
//     });
//   });
// just doing test for now


passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser(function (user, done) {
  //User.findById(id, function(err, user) {
  done(null, user); //});
});
passport.use(new GoogleStrategy({
  clientID: "181653248061-0ti3rhavi86kjku87mlbi8f0afv1osfp.apps.googleusercontent.com",
  clientSecret: "9cBpZMlSe9l9DzIWfS-VpRr1",
  callbackURL: "http://localhost:3001/google/callback"
}, //renamed cb to done
function (accessToken, refreshToken, profile, done) {
  // use profile info (mainly profile ID) to check if user is registered in our db
  //if user is not in db, create user, then pass into the `done` function
  // default settings for real MERN
  // User.findOrCreate({ googleId: profile.id }, function(err, user) {
  // for testing, doing done(null, profile)
  // but is normally done(err, user)
  return done(null, profile); //});
}));