
var mongoose = require('mongoose');

let postSchema = new mongoose.Schema({
    text: String,
    count: Number
});


let Post = mongoose.model('post', postSchema)

module.exports = Post
