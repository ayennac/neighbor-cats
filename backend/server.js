require('dotenv').config()

const express = require('express')

const mongoose = require('mongoose')



const app = express()


//Middleware
app.use(express.json([]))
app.use(express.urlencoded({ extended: true}));
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


// routes
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app'})
})
  
// listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})