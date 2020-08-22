"use strict";

var express = require('express');

var app = express(); // Serve static assets if in production

if (process.env.NODE_ENV === "production") {
  // Set static folder   
  // All the javascript and css files will be read and served from this folder
  app.use(express["static"]("client/build")); // index.html for all page routes    html or routing and naviagtion

  app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log("Server Listening on ".concat(port));
});