require('dotenv').config()

const express = require('express')

const mongoose = require('mongoose')

const postRoutes = require('./routes/app-routes.js')



const app = express()


//Middleware
app.use(express.json([]))
app.use(express.urlencoded({ extended: true}));
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


// routes
app.use('/api/posts', postRoutes)
  
// listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("connected to database")
        app.listen(process.env.PORT, () => {
            console.log('listening on port', process.env.PORT)
        }) 
    })
    .catch((error) => {
        console.log(error)
    })