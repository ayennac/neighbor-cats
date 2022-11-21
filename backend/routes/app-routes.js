const express = require('express')
const {getallPosts, getPost, createPost, updatePost, deletePost} = require('../controllers/app-controller.js')

const router = express.Router()

//GET all posts
router.get('/', getallPosts)

//GET a single post
router.get('/:id', getPost)

//POST a new post 
router.post('/', createPost)

//UPDATE a post
router.patch('/:id', updatePost)

//DELETE a post
router.delete('/:id', deletePost)


//GET a cat

//GET all cats

//POST a new cat 

//DELETE a cat 

//UPDATE a cat information

//GET a neighborhood 


//GET all users

//GET a single user

//POST a new user

//UPDATE user information

//DELETE a user 

module.exports = router 

