const mongoose = require('mongoose')

const Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;


const usersSchema = new mongoose.Schema({
    userName: String,
    password: String,
    name: String,
    desctption: String,
    userImage: String,
    userCoverImage: String,
    createdDate: Date,
    following: Number,
    followers: Number,
    follow: [ObjectId],
    likes: Number
})

module.exports = mongoose.model('users', usersSchema)