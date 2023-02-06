const User = require('../models/user-model')


//login user
const loginUser = async(req,res)=>{
    res.json({mssg:'loginuser'})
}


//signup user
const signupUser = async(req, res) =>{
    const {fname, lname, email, password} = req.body
    try{
        const user = await User.signup(fname, lname, email, password)
        res.status(200).json({user})
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {signupUser, loginUser}