//// CHAT ROUTES ////
const express = require("express");
const router = express.Router();

router.get("/chat", (req, res) => {
    res.header('Access-Control-Allow-Credentials', false);
    res.send({ response: "Server is running" }).status(200);
});

module.exports = router;