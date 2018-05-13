var mongoose   = require('mongoose');
var userSchema = require('./user.schema.server');
var userModel  = mongoose.model('userModel', userSchema);

userModel.register = register;
userModel.findUserByCredentials = findUserByCredentials;
userModel.findUserByUsername = findUserByUsername;
userModel.findUserById = findUserById;
userModel.updateProfile = updateProfile;
userModel.updatePassword = updatePassword;
userModel.addPostsForUser = addPostsForUser;
userModel.deletePostsForUser = deletePostsForUser;
userModel.sendRequest = sendRequest;
userModel.checkFriendRequestStatus = checkFriendRequestStatus;
userModel.acceptFriendRequest = acceptFriendRequest;
userModel.deleteFriendRequest = deleteFriendRequest;
userModel.searchUser = searchUser;
userModel.findUserByTwitterId = findUserByTwitterId;

module.exports = userModel;

function register(user) {
  return userModel
    .create(user);
}

function findUserByCredentials(username, password) {
  return userModel
    .findOne({username : username, password : password});
}

function findUserByUsername(username) {
  return userModel
    .findOne({username : username});
}

function findUserById(userId) {
  return userModel
    .findOne({_id : userId});
}

function updateProfile(user, username) {
  return userModel
    .update({username: username}, {$set: user});
}

function updatePassword(username, newPassword) {
  return userModel
    .update({username : username}, {$set: {password : newPassword}});
}

function addPostsForUser(userId, postId) {
  return userModel
    .findById(userId)
    .then(function (user) {
      user.posts.push(postId);
      return user.save();
    });
}

function deletePostsForUser(userId, postId) {
  return userModel
    .findById(userId)
    .then(function (user) {
      var index = user.posts.indexOf(postId);
      user.posts.splice(index, 1);
      return user.save();
    });
}

function sendRequest(currentUserId, requestUserId) {
  return userModel
    .update({_id: currentUserId}, {$addToSet: {myFriends : {userId : requestUserId, status : "PENDING", sentRequest : true}}})
    .then(function (user) {
      return userModel
        .update({_id: requestUserId}, {$addToSet: {myFriends : {userId : currentUserId, status : "PENDING", sentRequest : false}}});
    });
}

function checkFriendRequestStatus(currentUserId, requestUserId) {
  return userModel
    .findOne({_id: currentUserId, "myFriends.userId" : {$in: [requestUserId]}});
}

function acceptFriendRequest(currentUserId, requestUserId) {
  return userModel
    .update({_id: currentUserId, "myFriends.userId" : requestUserId}, { $set : {"myFriends.$.status" : "FRIENDS"}})
    .then(function () {
      return userModel
        .update({_id: requestUserId, "myFriends.userId" : currentUserId}, { $set : {"myFriends.$.status" : "FRIENDS"}})
    });
}

function deleteFriendRequest(currentUserId, requestUserId) {
  return userModel
    .update({_id: currentUserId }, {$pull : {myFriends : {userId : requestUserId}}})
    .then(function () {
      return userModel
        .update({_id: requestUserId }, {$pull : {myFriends : {userId : currentUserId}}})
    });
}

function searchUser(user) {
  return userModel
    .find({$or :
      [
        {"username" : {$regex : ".*" + user.toLowerCase() + ".*"}},
        {"firstName" : {$regex : ".*" + user.toLowerCase() + ".*"}},
        {"lastName" : {$regex : ".*" + user.toLowerCase() + ".*"}},
        {"username" : {$regex : ".*" + user.toUpperCase() + ".*"}},
        {"firstName" : {$regex : ".*" + user.toUpperCase() + ".*"}},
        {"lastName" : {$regex : ".*" + user.toUpperCase() + ".*"}}
      ]
    });
}

function findUserByTwitterId(twitterId) {
  return userModel
    .findOne({'twitter.id': twitterId});
}
