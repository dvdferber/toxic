const mongoose = require('mongoose')


const Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;


const usersSchema = new mongoose.Schema({
    userId: ObjectId,
    post: String,
    image: [],
    createdDate: Date,
    updatedDate: Date,
    likes: Number,
    shares: Number,
    comments: Number,
})

module.exports = mongoose.model('toxics', usersSchema)