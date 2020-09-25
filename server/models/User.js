const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// you should have a unique key instead of just a unique

// in terms of backend, you want a unique ID


const userSchema = new Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    },
    role: {
        type: Number,
        default: 0
    },
    followers: [
        "5f61f0330d3bd37ba93e79f5",
        "5f658ecc15aafb575c8f360b",
        "5f658a78301bfb573c897b9a"

    ],
    following: [
        "5f61f0330d3bd37ba93e79f5",
        "5f658ecc15aafb575c8f360b",
        "5f658a78301bfb573c897b9a",

    ]
});

module.exports = mongoose.model("User", userSchema);
