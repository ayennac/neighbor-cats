const jwt = require('jsonwebtoken')
const User = require('../models/user-model')


const requireAuth = async (req, res, next) =>{
    //verify authentication
    const {authorization} = req.headers

    if (!authorization) {
        return res.status(401).json({error: 'Authorization token required'})
    }

    //get token from authorization header
    const token = authorization.split(' ')[1]

    //try to get the token from the header
    try {
    const { _id } = jwt.verify(token, process.env.SECRET)
    
    //get the id and store it in the user object
    req.user = await User.findOne({ _id }).select('_id')
    next()

    } catch(error){
        console.log(error)
        res.status(401).json({error: 'Request is not authorized'})
    }

}

module.exports = {requireAuth}