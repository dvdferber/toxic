const express = require('express')
const cors = require('cors')
const usersController = require('./controllers/usersControllers')
const toxicController = require('./controllers/toxicsControllers')
const commentController = require('./controllers/commentsControllers')
const PORT = 2020

require('./config/database')
const app = express()

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/api/users', usersController)
app.use('/api/toxic', toxicController)
app.use('/api/comments', commentController)
app.listen(PORT, console.log(`server is on in port ${PORT}`))

