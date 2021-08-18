const CommentsBL = require('../models/Comments/commentsBL')
const express = require('express')
const router = express.Router()

router.route('/').get(async (req, resp)=>{
    let comments = await CommentsBL.getAllComments()
    return resp.json(comments)
})
router.route('/:id').get(async (req, resp)=>{
    let comment = await CommentsBL.getCommentById(req.params.id)
    return resp.json(comment)
})
router.route('/').post(async (req, resp)=>{
    let comment = await CommentsBL.createNewComment(req.body)
    return resp.json(comment)
})
router.route('/:id').put(async (req, resp)=>{
    let respons = await CommentsBL.updateComment(req.params.id, req.body)
    return resp.json(respons)
})
router.route('/:id').delete(async (req, resp)=>{
    let respons = await CommentsBL.deleteCommentById(req.params.id)
    return resp.json(respons)
})
module.exports = router
