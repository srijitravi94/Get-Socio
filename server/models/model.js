var mongoose = require('mongoose');
mongoose.Promise = require('q').Promise;
var connectionString = "mongodb://localhost/GetSocio";
var db = mongoose.connect(connectionString);

module.exports = db;

