const mongoose = require('mongoose')


const Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;


const toxicsSchema = new mongoose.Schema({
    userId: ObjectId,
    post: String,
    image: [],
    createdDate: Date,
    updatedDate: Date,
    likes: Number,
    shares: Number,
    comments: Number,
    usersHowLiked : [ObjectId]
})

module.exports = mongoose.model('toxics', toxicsSchema)