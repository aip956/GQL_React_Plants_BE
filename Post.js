const mongoose = require('mongoose')
const PostSchema = new mongoose.Schema({
    name: String,
    type: String,
    image: String
})
const Post = mongoose.model('post',PostSchema);
module.exports = Post;