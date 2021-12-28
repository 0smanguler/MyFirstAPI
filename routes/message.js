const express = require('express');
const router = express.Router();

router.get('/list', (req, res, next) => {
    res.status(200).json({
        status: 'list'
    })
})

router.get('/', (req, res, next) => {
    res.status(200).json({
        status: 'home'
    })
})

router.delete('/delete', (req, res, next) => {
    res.status(200).json({
        status: 'delete succesfull'
    })
})

module.exports = router;