const express = require('express');
const router = express.Router();

router.get('/:id', (req, res, next) => {

    const input_id = req.params.id

    res.status(200).json({
        status: 'Blog',
        message: input_id
    })
})


router.get('/blog', (req, res, next) => {

    res.status(200).json({
        "status": "done",
        "message": "auth successfull"
    })
})

// todo

router.get('/blog', (req, res, next) => {
    res.status(200).json({
        "status": "done",
        "message": "auth successfull"
    })
})

// todo
// blog silinecek çünkü blog endpointine delete metodunda bir request 

router.delete('/', (req, res, next) => {
    res.status(200).json({
        "status": "done",
        "message": "auth successfull"
    })
})

// todo
// blog güncelllenecek çünkü blog endpointine patch metodunda bir request 

router.patch('/blog', (req, res, next) => {
    res.status(204).json({
        "status": "done",
        "message": "auth successfull"
    })
})
module.exports = router;