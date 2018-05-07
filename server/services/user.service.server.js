module.exports = function (app) {

  var userModel      = require("../models/user/user.model.server");
  var passport       = require('passport');
  var LocalStrategy  = require('passport-local').Strategy;


  passport.use(new LocalStrategy(localStrategy));
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);


  app.post("/api/getSocio/register", register);
  app.post("/api/getSocio/login", passport.authenticate('local'), login);
  app.post("/api/getSocio/logout", logout);
  app.post("/api/getSocio/loggedIn", loggedIn);
  app.get("/api/getSocio/user/:username", findUserByUsername);
  app.get("/api/getSocio/user/userId/:userId", findUserById);
  app.put("/api/getSocio/user/updatePassword/:username", updatePassword);
  app.put("/api/getSocio/user/:currentUserId/sendRequest/:requestUserId", sendRequest);
  app.get("/api/getSocio/user/:currentUserId/sendRequest/:requestUserId", checkFriendRequestStatus);
  app.put("/api/getSocio/user/:currentUserId/acceptFriendRequest/:requestUserId", acceptFriendRequest);
  app.put("/api/getSocio/user/:currentUserId/deleteFriendRequest/:requestUserId", deleteFriendRequest);
  app.get("/api/getSocio/searchUser/:user", searchUser);

  function localStrategy(username, password, done) {
    userModel
      .findUserByCredentials(username, password)
      .then(function (user) {
        if(user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
  }

  function serializeUser(user, done) {
    done(null, user);
  }

  function deserializeUser(user, done) {
    userModel
      .findUserByUsername(user.username)
      .then(function(user){
          done(null, user);
        },
        function(err){
          done(err, null);
        });
  }

  function register(req, res) {
    var newUser = req.body;

    userModel
      .register(newUser)
      .then(function (user) {
        req.login(user, function (err) {
          if (err) {
            res.sendStatus(404)
          } else {
            res.json(user);
          }
        });
      });
  }

  function login(req, res) {
    var user = req.user;
    res.json(user);
  }

  function logout(req, res) {
    req.logout();
    res.json({ result: 'logout successful' });
  }

  function loggedIn(req, res) {
    if(req.isAuthenticated()) {
      res.json(req.user);
    } else {
      res.json(false);
    }
  }

  function findUserByUsername(req, res) {
    var username = req.params.username;

    userModel
      .findUserByUsername(username)
      .then(function (user) {
        if(user) {
          res.json(user);
        } else {
          res.sendStatus(404);
        }
      });
  }

  function findUserById(req, res) {
    var userId = req.params.userId;

    userModel
      .findUserById(userId)
      .then(function (user) {
        if(user) {
          res.json(user);
        } else {
          res.sendStatus(404);
        }
      });
  }

  function updatePassword(req, res) {
    var username = req.params.username;
    var passwordField = req.body;

    userModel
      .updatePassword(username, passwordField.newPassword)
      .then(function (user) {
        res.json(user);
      }, function (err) {
        res.sendStatus(404);
      });
  }

  function sendRequest(req, res) {
    var currentUserId = req.params.currentUserId;
    var requestUserId = req.params.requestUserId;

    userModel
      .sendRequest(currentUserId, requestUserId)
      .then(function (user) {
        res.json(user);
      }, function (err) {
        res.sendStatus(404);
      });
  }

  function checkFriendRequestStatus(req, res) {
    var currentUserId = req.params.currentUserId;
    var requestUserId = req.params.requestUserId;

    userModel
      .checkFriendRequestStatus(currentUserId, requestUserId)
      .then(function (user) {
        res.json(user);
      }, function (err) {
        res.sendStatus(404);
      });
  }

  function acceptFriendRequest(req, res) {
    var currentUserId = req.params.currentUserId;
    var requestUserId = req.params.requestUserId;

    userModel
      .acceptFriendRequest(currentUserId, requestUserId)
      .then(function (user) {
        res.json(user);
      }, function (err) {
        res.sendStatus(404);
      });
  }

  function deleteFriendRequest(req, res) {
    var currentUserId = req.params.currentUserId;
    var requestUserId = req.params.requestUserId;

    userModel
      .deleteFriendRequest(currentUserId, requestUserId)
      .then(function (user) {
        res.json(user);
      }, function (err) {
        res.sendStatus(404);
      });
  }

  function searchUser(req, res) {
    var user = req.params.user;

    userModel
      .searchUser(user)
      .then(function (user) {
        res.json(user);
      }, function (err) {
        res.sendStatus(404);
      })
  }

};
