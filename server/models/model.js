var mongoose = require('mongoose');
mongoose.Promise = require('q').Promise;
var connectionString = "mongodb://localhost/GetSocio";

if(process.env.MONGODB_URI) {
  connectionString = process.env.MONGODB_URI;
}

var db = mongoose.connect(connectionString);

module.exports = db;

