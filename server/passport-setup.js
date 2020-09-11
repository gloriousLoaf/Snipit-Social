const passport = require("passport");
const User = require("../server/models/User");
const mongoose = require("mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const Membership = require("./models/membership");

// this is what we can get out of Google sign in
// https://developers.google.com/identity/protocols/oauth2/scopes#google-sign-in
// const SCOPE = [
//   profile,
//   email
// ]

// what its suppose to be
// passport.serializeUser(function(user, done) {
//     done(null, user.id);
//   });

//   passport.deserializeUser(function(id, done) {
//     User.findById(id, function(err, user) {
//       done(err, user);
//     });
//   });

// just doing test for now
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(user, done) {
  //User.findById(id, function(err, user) {
  done(null, user);
  //});
});

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "181653248061-0ti3rhavi86kjku87mlbi8f0afv1osfp.apps.googleusercontent.com",
      clientSecret: "9cBpZMlSe9l9DzIWfS-VpRr1",
      callbackURL: "http://localhost:5000/google/callback"
    },

    //renamed cb to done
    function(accessToken, refreshToken, profile, done) {
      // use profile info (mainly profile ID) to check if user is registered in our db

      //if user is not in db, create user, then pass into the `done` function

      // default settings for real MERN

      ///////////
      // this is for individual user model, only works with google sso, we need more sign ons
      // User.findOne(
      //   {
      //     providerUserId: profile.id,
      //     email: profile.email
      //   },
      //   function(err, user) {
      //     // for testing, doing done(null, profile)
      //     // but is normally done(err, user)

      //     // return done(null, providerUserId);

      //     if (err) {
      //       return done(err);
      //     }

      //     // if no user was found...
      //     if (!user) {
      //       user = new User({
      //         name: profile.displayName,
      //         email: profile.emails[0].value,
      //         username: profile.username,
      //         provider: "Google",
      //         google: profile._json
      //       });
      //       user.save(function(err) {
      //         if (err) console.log(err);
      //         return done(err, user);
      //       });
      //     } else {
      //       //found user
      //       return done(err, user);
      //     }
      //   }
      // );
      /////////

      // for multiple accounts to sign into
      Membership.findOne(
        {
          providerUserId: profile.id
        },
        function(err, membershipData) {
          if (err) {
            return done(err);
          }
          if (!membershipData) {
            membership = new Membership({
              // change this line to whatever provider (e.g. Github)
              provider: "Google",
              providerUserId: profile.id,
              // accessToken: accessToken,
              userId: profile.userId,
              date: Date
            });
            membership.save(function(err) {
              if (err) console.log(err);
              return done(err, membershipData);
            });
          } else {
            // found user
            return done(err, membershipData);
          }
        }
      );

      //////
    }
  )
);
