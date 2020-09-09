const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");


const bodyParser = require("body-parser");
const passport = require("passport");
const cookieSession = require("cookie-session");
require("./passport-setup");

const config = require("./config/key");


const mongoose = require("mongoose");
const connect = mongoose.connect(config.mongoURI,
  {
    useNewUrlParser: true, useUnifiedTopology: true, 
    useCreateIndex: true, useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));
  
  // middleware
  app.use(cors());
  
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  
  
  app.use(
    cookieSession({
      name: "Coding-society-session",
      keys: ["key1", "key2"],
    })
    );
    //intialize with passport,
    app.use(passport.initialize());
    // use sessions, if using sessions need cookie session lib
    app.use(passport.session());
    
    // IDEALLY, WE WANT TO MOVE ALL OF THIS, TO THIS
    const authentication = require('./routes/authentication')
    
    // app.use('/', authentication);

    //// ================================= ////
    // routes for authentication 
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
const posts = require('./routes/posts');

app.use('/api/posts', posts);


app.get("/", (req, res) => res.send("hello, please go to /google"));

app.get("/failed", (req, res) => res.send("failure to log in"));
// just req.user to see the whole json
app.get("/good", isLoggedIn, (req, res) => res.send(`welcome ${req.user}`));

app.get(
"/google",
passport.authenticate("google", { scope: ["profile", "email"] })
);

// might have to change this redirect to "ACCOUNT CREATED",
// currently it sends "login failed" for the first time user signs up. 
app.get(
"/google/callback",
passport.authenticate("google", { failureRedirect: "/failed" }),
function(req, res) {
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

 // to do: move to authentication ================== ///
//  

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  // All the javascript and css files will be read and served from this folder
  app.use(express.static("client/build"));

  // index.html for all page routes    html or routing and naviagtion
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server Listening on ${port}`);
});
