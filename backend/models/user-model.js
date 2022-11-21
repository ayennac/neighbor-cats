const mongoose = require('mongoose')

const Schema = mongoose.Schema



const UserSchema = new Schema({
    userID: {
        type: Number,
        required: true
    },
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
    phone: {
        type: String,
        required: true
    }, 
    posts : {
        type: Array,
        default: []
    }
}, {timestamps: true})

const User = mongoose.model("User", UserSchema)

export default User;