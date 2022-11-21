const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CatSchema = new Schema({
    catid: {
        type: Number,
        required: true
    },
    full_name: {
        type: String,
        required: true
    },
    feral: {
        type: Boolean,
        required: true,
    },
    friends: {
        type: Array
    },
    posts: {
        type: Array,
    },
    owners:{
        type: string
    }
}, {timestamps: true})

const Cat = mongoose.model("Cat", CatSchema)

export default Cat