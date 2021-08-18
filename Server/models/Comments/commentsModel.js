const mongoose = require('mongoose')


const Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;


const commentsSchema = new mongoose.Schema({
    userId: ObjectId,
    toxicId: ObjectId,
    post: String,
    createdDate: Date,
    updatedDate: Date,
    likes: Number,
    shares: Number,
    comments: Number,
    usersHowLiked : [ObjectId]

})

module.exports = mongoose.model('comments', commentsSchema)