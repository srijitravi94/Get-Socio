module.exports = function (app) {
  var userModel  = require("../models/user/user.model.server");
  var postModel  = require("../models/post/post.model.server");
  var multer     = require('multer');

  var storage   = multer.diskStorage({
    destination : function (req, file, cb) {
      cb(null, __dirname +'/../../src/assets');
    },
    filename : function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    }
  });

  var profilePicture = multer({ storage : storage });

  app.put("/api/getSocio/user/updateProfile/:username", updateProfile);
  app.post("/api/getSocio/user/upload/:userId",  profilePicture.single('myFile'), uploadImage);

  function updateProfile(req, res) {
    var username = req.params.username;
    var user = req.body;

    userModel
      .updateProfile(user, username)
      .then(function () {
        postModel
          .updatePostByUsername(username, user)
          .then(function (status) {
            res.json(status);
          }, function (err) {
            res.sendStatus(404);
          });
      });
  }

  function uploadImage(req, res) {
    var userId = req.params.userId;
    var file = req.file;
    var filename      = file.filename;

    userModel
      .findUserById(userId)
      .then(function (user) {
        user.image = "/assets/" + filename ;
        userModel
          .updateProfile(user, user.username)
          .then(function () {
            postModel
              .updatePostWithImage(user.username, user.image)
              .then(function (status) {
                res.json(status);
              }, function (err) {
                res.sendStatus(404);
              });
          });
      });
  }
};
