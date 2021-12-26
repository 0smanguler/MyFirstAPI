const express = require('express');
const router = express.Router();

// todo
// blog oluşturulacak çünkü blog endpointine post metodunda bir request 
router.post('/blog', (req, res, next) => {
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

router.delete('/blog', (req, res, next) => {
    res.status(200).json({
        "status": "done",
        "message": "auth successfull"
    })
})

// todo
// blog güncelllenecek çünkü blog endpointine patch metodunda bir request 

router.patch('/blog', (req, res, next) => {
    res.status(200).json({
        "status": "done",
        "message": "auth successfull"
    })
})
module.exports = router;