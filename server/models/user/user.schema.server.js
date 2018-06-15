var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  firstName    : String,
  lastName     : String,
  username     : {type : String, unique : true},
  email        : {type : String, default: ""},
  phone        : {type : String, default: ""},
  password     : String,
  image        : {type : String, default: "/assets/default.png"},
  myFriends    : [{
    userId      : String,
    status      : {type: String, default : 'NOTAFRIEND', enum : ['NOTAFRIEND', 'PENDING','FRIENDS']},
    sentRequest : {type: Boolean, default : false}
  }],

  posts        : [{type: mongoose.Schema.Types.ObjectId, ref: "postModel"}],
  dateCreated  : {type : Date, default: Date.now},
}, {collection : "users"});

module.exports = userSchema;
