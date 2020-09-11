// this is a membership table to track multiple accounts per user ( allow them to authenticate with multiple sources)

const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const User = require("./User");

// think we can just context
const membershipSchema = new Schema({
    provider: {
        type: String,
    },
    providerUserId: {
        type: String,
    },
    accessToken: {
        type: String
    },
    userId: {
        type: ObjectId, 
        ref: User,
    },
    dateAdded: {
        type: Date,
        default: Date.now,
    }
})


module.exports = mongoose.model("Membership", membershipSchema)