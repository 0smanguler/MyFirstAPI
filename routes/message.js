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

router.get('/:name', (req, res, next) => {

    const name = req.params.name

    if (name == 'osman') {
        res.status(200).json({
            status: 'Message',
            message: 'siktiret o salağı'
        })
    }
    if (name == 'suleyman') {
        res.status(200).json({
            status: 'Message',
            message: 'kral geliyor kraalll'
        })
    }
    else {
        res.status(200).json({
            status: 'Blog',
            message: name
        })
    }
})

router.delete('/delete', (req, res, next) => {
    res.status(200).json({
        status: 'delete succesfull'
    })
})

module.exports = router;