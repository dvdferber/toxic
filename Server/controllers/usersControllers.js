const usersBL = require('../models/Users/usersBL')
const express = require('express')
const router = express.Router()

router.route('/').get(async (req, resp)=>{
    let users = await usersBL.getAllUsers()
    return resp.json(users)
})
router.route('/:id').get(async (req, resp)=>{
    let id = req.params.id
    if(id !== undefined){
        let user = await usersBL.getUserById(id)
        return resp.json(user)
    }  
})
router.route('/userpage/:id').get(async (req, resp)=>{
    let id = req.params.id
    if(id !== undefined){
        let data = await usersBL.createUserPage(id)
        return resp.json(data)
    }  
})
router.route('/:userName/:password').get(async (req, resp)=>{
    const userName = req.params.userName.slice(9)
    const password = req.params.password.slice(9)
    let id = await usersBL.isUserAndPasswordValid(userName, password)
    return resp.json(id)
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
