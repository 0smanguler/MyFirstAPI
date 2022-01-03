const express = require('express');
const app = express();
const bodyParser=require('body-parser')

const AuthRoutes = require('./routes/auth')
const BlogRoutes = require('./routes/blog')
const MessageRoutes = require('./routes/message')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/auth', AuthRoutes)
app.use('/blog', BlogRoutes)
app.use('/message', MessageRoutes)



module.exports = app;