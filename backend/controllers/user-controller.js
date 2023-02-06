const User = require('../models/user-model')
const jwt = require('jsonwebtoken')

const createToken = (_id) =>{
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}


//login user
const loginUser = async(req,res)=>{
    res.json({mssg:'loginuser'})
}


//signup user
const signupUser = async(req, res) =>{
    const {fname, lname, email, password} = req.body
    try{
        const user = await User.signup(fname, lname, email, password)

        //create Token

        const token = createToken(user._id)

        res.status(200).json({user, token})
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {signupUser, loginUser}