const mongoose = require('mongoose')


const usersSchema = new mongoose.Schema({
    userName: String,
    password: String
})

module.exports = mongoose.model('users', usersSchema)