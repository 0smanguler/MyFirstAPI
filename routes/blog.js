const express = require('express');
const router = express.Router();

// CHALLENGE: blog auth ve message için id isminde bir request parametresi alan 
// ve bunu response da bulunduran
// endpointler açılacak

router.get('/', (req, res, next) => {
    res.status(200).json({
        status: 'Blog'
    })
})


// site.com/blog                        =====>> Bütün blog yazolarını getirsin.
// site.com/blog/askjdahsdaksjdh123     =====>> sadece 'askjdahsdaksjdh123' id li blog yazısı gelsin.


router.get('/:id', (req, res, next) => {

    const input_id = req.params.id

    res.status(200).json({
        status: 'Blog',
        message: input_id
    })
})


router.get('/blog', (req, res, next) => {

    const input_id = req.params.id
    res.status(200).json({
        "status": "done",
        "message": "auth successfull"
    })
})

// todo
// blog getirilicek çünkü blog endpointine get metodunda bir request 

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
    res.status(200).json({
        "status": "HURRRAAA",
        "message": "SORUN OKEY"
    })
})
module.exports = router;