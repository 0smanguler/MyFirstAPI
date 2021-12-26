const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
    res.status(200).json({
        "status" : "done",
        "message" : "auth successfull" 
    })
})

router.get('/login', (req,res,next) => {
    res.status(200).json({
        "status" : "done",
        "message" : "login successfull" 
    })
})

router.get('/signup', (req,res,next) => {
    res.status(200).json({
        "status" : "done",
        "message" : "signup successfull" 
    })
})

router.get('/forget_password', (req,res,next) => {
    res.status(200).json({
        'status' : 'done',
        'message' : 'Forget password?'
    })
    
})
router.get('/signout', (req,res,next) => {
    res.status(200).json({
        'status' : 'done',
        'message' : 'signout_successfull'
    })
})
router.get('/profile', (req,res,next) => {
    res.status(200).json({
        'status' : 'done',
        'message' : 'kökteki profil'
    })
})
module.exports= router;