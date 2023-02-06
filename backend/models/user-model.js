const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const userSchema = new Schema({
    fname: {
    type: String,
    required: true,
    },
    lname : {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    posts : {
        type: Array,
        default: []
    }
}, {timestamps: true})


userSchema.statics.signup = async function(fname, lname, email, password){
    const exists = await this.findOne({email})
    if (exists){
        throw Error('Email already in use')
    }
    
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({fname, lname, email, password:hash})

    return user

}

module.exports = mongoose.model("User", userSchema)

