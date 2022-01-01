const express = require('express');
const app = express();

const AuthRoutes = require('./routes/auth')
const BlogRoutes = require('./routes/blog')
const MessageRoutes = require('./routes/message')

app.use('/auth', AuthRoutes)
app.use('/blog', BlogRoutes)
app.use('/message', MessageRoutes)


module.exports = app;