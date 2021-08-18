const express = require('express')
const cors = require('cors')
const usersController = require('./controllers/usersControllers')
const PORT = 2020

require('./config/database')
const app = express()


app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.listen(PORT, console.log(`server is on in port ${PORT}`))

