const mongoose = require('mongoose')

const Schema = mongoose.Schema


// Sample response back
// {
//     "userId": "434",
//     "fname": "Anna",
//     "lname": "Bob",
//     "des": "this is a post about the house cat",
//     "pic": "pic path",
//     "userPic": "userprofil pic path",
//     "comments": [
//         "here",
//         "is",
//         "an",
//         "array",
//         "of",
//         "commens"
//     ],
//     "_id": "637c08b4248f2326aefe54d3",
//     "createdAt": "2022-11-21T23:24:36.487Z",
//     "updatedAt": "2022-11-21T23:24:36.487Z",
//     "__v": 0
// }

const postSchema = new Schema({
      fname: {
        type: String,
        required: true,
      },
      lname: {
        type: String,
        required: true,
      },
      des: String,
      pic: String,
      userPic: String,
      comments: {
        type: Array,
        default: [],
      }},
    { timestamps: true }
  );
  
module.exports =  mongoose.model("Post", postSchema);