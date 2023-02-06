const User = require('../models/user-model')


//login user
const loginUser = async(req,res)=>{
    res.json({mssg:'loginuser'})
}


//signup user
const signupUser = async(req, res) =>{
    res.json({mssg: 'signup user'})
}

module.exports = {signupUser, loginUser}