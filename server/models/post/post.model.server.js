var mongoose   = require('mongoose');
var postSchema = require('./post.schema.server');
var postModel  = mongoose.model('postModel', postSchema);
var userModel  = require('../user/user.model.server');

postModel.createPost = createPost;
postModel.findPostById = findPostById;
postModel.getAllPosts = getAllPosts;
postModel.findPostsByUserId = findPostsByUserId;
postModel.updatePost = updatePost;
postModel.deletePost = deletePost;
postModel.likePost = likePost;
postModel.unlikePost = unlikePost;
postModel.submitComment = submitComment;
postModel.updatePostByUsername = updatePostByUsername;
postModel.updatePostWithImage = updatePostWithImage;

module.exports = postModel;

function createPost(newPost) {
  return postModel
    .create(newPost)
    .then(function (post) {
      return userModel
        .addPostsForUser(newPost.userId, post._id)
    });
}

function findPostById(postId) {
  return postModel
    .findOne({_id : postId});
}

function getAllPosts() {
  return postModel
    .find().sort({'_id' : -1});
}

function findPostsByUserId(userId) {
  return postModel
    .find({userId : userId}).sort({ '_id': -1 });
}

function updatePost(post) {
  return postModel
    .update({_id: post._id}, {$set: post});
}

function updatePostByUsername(username, user) {
  return postModel
    .update({username: username}, {$set: {firstName : user.firstName , lastName : user.lastName}}, {multi : true});
}

function updatePostWithImage(username, image) {
  return postModel
    .update({username: username}, {$set: {image : image}}, {multi : true});
}

function deletePost(userId, postId) {
  return postModel
    .remove({_id : postId})
    .then(function () {
      return userModel
        .deletePostsForUser(userId, postId);
    });
}

function likePost(userId, postId) {
  return postModel
    .update({_id : postId}, {$addToSet: {"likedBy" : userId}})
    .then(function () {
      return postModel
        .update({_id: postId}, {$inc: {likes : +1}});
    });
}

function unlikePost(userId, postId) {
  return postModel
    .update({_id : postId}, {$pullAll: {"likedBy" : [userId]}})
    .then(function () {
      return postModel
        .update({_id: postId}, {$inc: {likes : -1}});
    });
}

function submitComment(postId, comments) {
  return postModel
    .update({_id : postId}, {$addToSet: {"comments" : comments}});
}

