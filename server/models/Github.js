const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// we're already showing repos, followers, and following

const gitSchema = new Schema({
    id: {
        type: Number,
        required: false,
        unique: 1,
    },
    snipitId: {
        type: String,
        required: false,
    },
    name: {
        type: String,
        required: false,
    },
    avatarUrl: {
        type: String,
        required: false,
    },
    bio: {
        type: String,
        required: false,
    },
    blog: {
        type: String,
        required: false,
    },
    company: {
        type: String,
        required: false,
    },
    hireable: {
        type: String,
        required: false,
    },
    publicRepos: {
        type: Number,
        required: false
    },
    followers: {
        type: Number,
        required: false
    },
    following: {
        type: Number,
        required: false
    },
    htmlUrl: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('GitInfo', gitSchema);