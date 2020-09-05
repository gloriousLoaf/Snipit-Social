const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");
const cookieSession = require("cookie-session");
require("./passport-setup");

//// CHAT ADDITIONAL REQUIREMENTS////
const http = require('http');
const socketio = require('socket.io');
// const router = require('./router');    THIS IS TEMPORARILY IN AUTH.JS
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
app.use(authentication);
// Chat header helpers, prevent CORS err during dev
app.use((req, res) => {
  res.header('Access-Control-Allow-Origin', "localhost:3000");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
});
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
const server = http.createServer(app)
const io = socketio(server);
io.origins("*:*");

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

// IDEALLY, WE WANT TO MOVE ALL OF THIS, TO THIS
// app.use('/', authentication);

app.get("/", (req, res) => res.send("hello, please go to /google"));

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

//  

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

const port = process.env.PORT || 3001;

/* This server using http & express app should still implement
  all aspects needed for express, see line 64 */
server.listen(port, () => {
  console.log(`Server Listening on ${port}`);
});
