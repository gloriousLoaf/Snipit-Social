const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// ideally we want more 

// we want 

// userID can be duplicate and they can sqli inject
// need ID / key that is exclusive to that account 

//since we're just using user, there can be dupe of user


const postSchema = new Schema({
    user: {
        type: Schema.Types.Object,
        // required: true,
        required: false,
    },
    text: {
        type: String,
        // required: true
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Post', postSchema);