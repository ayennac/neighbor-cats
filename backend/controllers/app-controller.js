const mongoose = require('mongoose')

const Post = require('../models/post-model')

const getallPosts = async(req, res) =>{
    const posts = await Post.find({}).sort({createdAt: -1})
    res.status(200).json(posts)
}

const getPost = async(req,res) =>{
    const {id} = req.params
    
    //will return a null if it cannot find the ID
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Post found' })
    }
    const post = await Post.findById(id)
    if(!post){
        return res.status(404).json({error: 'No Post found'})
    }

    res.status(200).json({post})
}

const createPost = async(req, res) =>{
    const { userId, fname, lname, des, pic, userPic, comments} = req.body
    try {
        const post = await Post.create({ userId, fname, lname, des, pic, userPic, comments})
        res.status(200).json(post)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}


const updatePost = async(req, res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Post found' })
    }
    const post = await Post.findOneAndUpdate({_id:id}, {
        ...req.body
    })

    if(!post){
        return res.status(404).json({error: 'No post found'})
    }

    res.status(200).json(post)
}

const deletePost = async(req, res) =>{
    const {id} = req.params

    //will return a null if it cannot find the ID
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No post found' })
    }
    
    const post = await Post.findOneAndDelete({_id:id})

    if(!post){
        return res.status(404).json({error: 'No post found'})
    }

    res.status(200).json(post)
}

module.exports = {
    getallPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
}