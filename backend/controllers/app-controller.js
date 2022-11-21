const mongooose = require('mongoose')

const Post = require('../models/post-model')


//res.json({mssg: 'GET all workouts'})

const getallPosts = async(req, res) =>{
    
    // const posts = await Post.find({}).sort({createdAt: -1})
    // res.status(200).json(workouts)
}

const getPost = async(req,res) =>{
    res.json({mssg: 'GET posts'})
}

const createPost = async(req, res) =>{
    res.json({mssg: 'POST a new post'})
}

const updatePost = async(req, res) =>{
    res.json({mssg: 'Update a post'})
}

const deletePost = async(req, res) =>{
    res.json({mssg: 'DELETE a post'})
}



module.exports = {
    getallPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
}