const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");
const cookieSession = require("cookie-session");
// require("./passport-setup");
// GH Auth
require('dotenv').config();
const FormData = require("form-data");
const fetch = require("node-fetch");

//// CHAT ADDITIONAL REQUIREMENTS////
const http = require('http');
const socketio = require('socket.io');
const router = require('./routes/chatRouter.js');
const { addUser, removeUser, getUser, getUsersInRoom } = require('./usersChat');
//// THE REST is below express & passport ////

const config = require("./config/key");
const authentication = require('./routes/authentication');
const mongoose = require("mongoose");

const connect = mongoose.connect(config.mongoURI,
  {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));


// Middleware
app.use(cors());
app.use(router);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: "text/*" }));
// app.use(authentication);

// app.use(
//   cookieSession({
//     name: "Coding-society-session",
//     keys: ["key1", "key2"],
//   })
// );

//instead of the passport-setup.js, using this one
require("./config/passport")(passport)

// github passport auth
require("./config/passportGithub")(passport)

app.get("/auth/github", passport.authenticate("github"));

app.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);

//intialize with passport,
app.use(passport.initialize());

// use sessions, if using sessions need cookie session lib
app.use(passport.session());

// routes
// utility functions
const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    // change unauthorized page here
    res.sendStatus(401);
  }
};

//// SOCKET.IO CHAT ////
// This line pulls in express app:
const server = http.createServer(app);
const io = socketio(server);
// io.origins("*:*");
// io.origins("*:80*");
io.origins("*:80 https://snipit-social.herokuapp.com/*");

// On Connect, connect client-side socket
io.on('connect', (socket) => {
  socket.on('join', ({ name, room }, cb) => {
    // pass to addUser()
    const { err, user } = addUser({ id: socket.id, name, room });
    if (err) return cb(err);
    // join user into room
    socket.join(user.room);
    // welcome message from admin on signin
    socket.emit('message', { user: 'admin', text: `Hello ${user.name}, welcome to ${user.room}.` });
    // broadcast to room that new user has join
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });
    // who is in the room?
    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
    // final cb no err
    cb();
  });

  // IF HEROKU BUILT starts acting up, comment-in, rebuild, push & deploy
  // setInterval(() => io.emit('time', new Date().toTimeString()), 1000);

  // expecting message
  socket.on('sendMessage', (message, cb) => {
    // get user by id
    const user = getUser(socket.id);
    // emit message to room when user sends
    io.to(user.room).emit('message', { user: user.name, text: message });
    // depending on implementations, might need this instead:
    // io.to(user.room).emit('roomData', { room: user.name, users: getUsersInRoom(user.room) });
    cb();
  });

  // On Disconnect
  socket.on('disconnect', () => {
    // get user by id
    const user = removeUser(socket.id);
    // let the room know user left
    if (user) {
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
    }
  })
});
//// END SOCKET.IO ////

// api calls
const posts = require('./routes/posts');
const gitinfo = require('./routes/gitAuthentication');
const users = require('./routes/user');
const searchUser = require('./routes/searchUser');

app.use('/api/posts', posts);
app.use('/api/gitinfo', gitinfo);
app.use('/api/users', users);
app.use('/api/searchUser', searchUser);

/////// GITHUB AUTH PROXIES ///////
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*");
  next();
});
app.post("/authenticate", (req, res) => {
  const { client_id, redirect_uri, client_secret, code } = req.body;


  const data = new FormData();
  data.append("client_id", client_id);
  data.append("client_secret", client_secret);
  data.append("code", code);
  data.append("redirect_uri", redirect_uri);

  // Request to exchange code for an access token
  fetch(`https://github.com/login/oauth/access_token`, {
    method: "POST",
    body: data
  })
    .then(response => response.text())
    .then(paramsString => {
      let params = new URLSearchParams(paramsString);
      const access_token = params.get("access_token");
      const scope = params.get("scope");
      const token_type = params.get("token_type");

      /* HERE this will need to be updated to have.
      access_token moved to a header param in fetch()
      Request to return data of a user that has been authenticated
      something like this:

      return fetch(
        `https://api.github.com/user?scope=${scope}&token_type=${token_type}`, {
        headers: {
          Authorization: access_token
        }
      }); */

      ///// THIS METHOD Deprecating in a few months
      // Request to return data of a user that has been authenticated
      return fetch(
        `https://api.github.com/user?access_token=${access_token}&scope=${scope}&token_type=${token_type}`
      );
    })
    .then(response => response.json())
    .then(response => {
      return res.status(200).json(response);
    })
    .catch(error => {
      return res.status(400).json(error);
    });
});
/////// END GH PROXY ///////

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  // All the javascript and css files will be read and served from this folder
  app.use(express.static("client/build"));

  // index.html for all page routes html or routing and naviagtion
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

// const port = process.env.PORT || 3001;
const port = process.env.PORT || 5000;

/* This server using http & express app should still implement
  all aspects needed for express, see line 64 */
server.listen(port, () => {
  console.log(`Server Listening on ${port}`);
});
