const usersBL = require('../models/usersBL')
const express = require('express')
const router = express.Router()

router.route('/').get(async (req, resp)=>{
    let users = await usersBL.getAllUsers()
    return resp.json(users)
})
module.exports = router
