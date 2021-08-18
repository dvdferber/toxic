const ToxicBL = require('../models/Toxics/toxicsBL')
const express = require('express')
const router = express.Router()

router.route('/').get(async (req, resp)=>{
    let toxics = await ToxicBL.getAllToxics()
    return resp.json(toxics)
})
router.route('/:id').get(async (req, resp)=>{
    let toxic = await ToxicBL.getToxicById(req.params.id)
    return resp.json(toxic)
})
router.route('/').post(async (req, resp)=>{
    let toxic = await ToxicBL.createNewToxic(req.body)
    return resp.json(toxic)
})
router.route('/:id').put(async (req, resp)=>{
    let respons = await ToxicBL.updateToxic(req.params.id, req.body)
    return resp.json(respons)
})
router.route('/:id').delete(async (req, resp)=>{
    let respons = await ToxicBL.deleteToxicById(req.params.id)
    return resp.json(respons)
})
module.exports = router
