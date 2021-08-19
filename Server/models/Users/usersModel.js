const mongoose = require('mongoose');
const { StringDecoder } = require('string_decoder');

const Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;


const usersSchema = new mongoose.Schema({
    userName: String,
    password: String,
    email: String,
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