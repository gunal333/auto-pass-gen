const exp = require('constants');
const express = require('express');
const path = require('path');
const dirname = require('../util/path')
const router = express.Router();
const items = [];
router.get('/',(req,res,next)=>{
    res.sendFile(path.join(dirname,'views','index.html'));
});
router.post('/',(req,res,next)=>{
    items.length=0;
    items.push({alpha:req.body['alpha'],digits:req.body['digits'],splChar:req.body['splChar'],passLen:Number(req.body['passLen']),passCount:Number(req.body['passCount'])});
    res.redirect('/passwords');
});
exports.routes = router;
exports.items = items;