var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
  username    : String,
  userId      : String,
  firstName   : String,
  lastName    : String,
  image       : String,
  postCaption : String,
  postContent : String,
  likes       : {type : Number, default: 0},
  likedBy     : [{type: mongoose.Schema.Types.ObjectId, ref: "userModel"}],

  type        : { type: String,
                  default : 'POST',
                  enum : ['POST', 'IMAGE']},

  comments     : [{ comment    : String,
                    commentator: String,
                    username   : String,
                    image      : String}],

  isShared     : {type : Boolean, default: false},
  sharedFrom   : String,
  dateCreated  : {type : Date, default: Date.now}
}, {collection : "posts"});

module.exports = postSchema;
