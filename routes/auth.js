const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        "status": "done",
        "message": "auth successfull"
    })
})

router.get('/:id', (req, res, next) => {

    const input_id = req.params.id

    res.status(200).json({
        status: 'Auth',
        message: input_id
    })
})

router.get('/login', (req, res, next) => {
    res.status(200).json({
        "status": "done",
        "message": "login successfull"
    })
})

router.get('/signup', (req, res, next) => {
    res.status(200).json({
        "status": "done",
        "message": "signup successfull"
    })
})

router.get('/forget_password', (req, res, next) => {
    res.status(200).json({
        'status': 'done',
        'message': 'Forget password?'
    })

})
router.get('/logout', (req, res, next) => {
    res.status(200).json({
        'status': 'done',
        'message': 'logout_successfull'
    })
})

module.exports = router;