const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    username: {
        type: String,
        trim: true,
    },
    role : {
        type: Number,
        default: 0
    },
    provider: {
        type: String,
    },
    followers: [],
    following: []
});

module.exports = mongoose.model("User", userSchema);
