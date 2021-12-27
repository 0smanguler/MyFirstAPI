const express = require('express'); //çağırıyor. express modulu.
const app = express ();

const BlogRoutes = require('./routes/auth')

app.use('/blog', BlogRoutes)


app.get('/profile', (req,res,next) => {
    res.status(200).json({
        'status' : 'done',
        'message' : 'Forget profile?'
    })

})

app.get('/home', (req,res,next) => {
    res.status(200).json({
        status : 'done',
        'message' : 'Buradasınız'
    })
})
app.use((req, res, next)=> {
    res.status(404).json({
        message: '404 Not Found',
        status: 'failed'
    })
})

module.exports = app;




//  /profile
//  /auth/forget_password
//   /auth/signout
