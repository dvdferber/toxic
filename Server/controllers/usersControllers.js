const usersBL = require('../models/usersBL')
const express = require('express')
const router = express.Router()

router.route('/').get(async (req, resp)=>{
    let users = await usersBL.getAllUsers()
    return resp.json(users)
})
router.route('/:id').get(async (req, resp)=>{
    let user = await usersBL.getUserById(req.params.id)
    return resp.json(user)
})
router.route('/').post(async (req, resp)=>{
    let user = await usersBL.createNewUser(req.body)
    return resp.json(user)
})
router.route('/:id').put(async (req, resp)=>{
    let respons = await usersBL.updateUser(req.params.id, req.body)
    return resp.json(respons)
})
router.route('/:id').delete(async (req, resp)=>{
    let respons = await usersBL.deleteUserById(req.params.id)
    return resp.json(respons)
})
module.exports = router
