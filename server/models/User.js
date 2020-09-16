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
    role : {
        type: Number,
        default: 0
    },
    followers: [],
    following: []
});

module.exports = mongoose.model("User", userSchema);
