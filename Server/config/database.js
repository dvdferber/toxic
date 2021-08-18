const mongoose = require('mongoose')
// require('dotenv/config')
// console.log(process.env.CONNECTION_STRING);

const connectionString = 'mongodb://localhost:27017/toxicDB'

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

