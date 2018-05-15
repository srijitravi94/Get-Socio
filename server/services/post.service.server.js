module.exports = function (app) {

  var postModel = require("../models/post/post.model.server");
  var multer    = require('multer');
  var storage   = multer.diskStorage({
    destination : function (req, file, cb) {
      cb(null, __dirname +'/../../src/assets');
    },
    filename : function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    }
  });

  var postImage = multer({ storage : storage });

  app.post("/api/getSocio/post/createPost", createPost);
  app.get("/api/getSocio/post/getPosts/:postId", findPostById);
  app.get("/api/getSocio/post/getAllPosts", getAllPosts);
  app.get("/api/getSocio/post/getPosts/userId/:userId", findPostsByUserId);
  app.put("/api/getSocio/post/updatePost", updatePost);
  app.delete("/api/getSocio/:userId/post/deletePost/:postId", deletePost);
  app.put("/api/getSocio/:userId/post/likePost/:postId", likePost);
  app.put("/api/getSocio/:userId/post/unlikePost/:postId", unlikePost);
  app.put("/api/getSocio/post/comment/:postId", submitComment);
  app.post("/api/getSocio/post/createPost/imagePost", postImage.single('postContent'), imagePost);

  function createPost(req, res) {
    var post = req.body;

    postModel
      .createPost(post)
      .then(function (post) {
        res.json(post);
      }, function (err) {
        res.sendStatus(404);
      });
  }

  function findPostById(req, res) {
    var postId = req.params.postId;

    postModel
      .findPostById(postId)
      .then(function (post) {
        res.json(post);
      }, function (err) {
        res.sendStatus(404);
      });
  }

  function getAllPosts(req, res) {
    postModel
      .getAllPosts()
      .then(function (post) {
        res.json(post);
      }, function (err) {
        res.sendStatus(404);
      });
  }

  function findPostsByUserId(req, res) {
    var userId = req.params.userId;

    postModel
      .findPostsByUserId(userId)
      .then(function (post) {
        res.json(post);
      }, function (err) {
        res.sendStatus(404);
      });
  }

  function updatePost(req, res) {
    var post = req.body;

    postModel
      .updatePost(post)
      .then(function (post) {
        res.json(post);
      }, function (err) {
        res.sendStatus(404);
      });
  }

  function deletePost(req, res) {
    var userId = req.params.userId;
    var postId = req.params.postId;

    postModel
      .deletePost(userId, postId)
      .then(function (post) {
        res.json(post);
      }, function (err) {
        res.sendStatus(404);
      });
  }

  function likePost(req, res) {
    var userId = req.params.userId;
    var postId = req.params.postId;


    postModel
      .likePost(userId, postId)
      .then(function (post) {
        res.json(post);
      }, function (err) {
        res.sendStatus(404);
      });
  }

  function unlikePost(req, res) {
    var userId = req.params.userId;
    var postId = req.params.postId;


    postModel
      .unlikePost(userId, postId)
      .then(function (post) {
        res.json(post);
      }, function (err) {
        res.sendStatus(404);
      });
  }

  function submitComment(req, res) {
    var postId = req.params.postId;
    var comments = req.body;

    postModel
      .submitComment(postId, comments)
      .then(function (post) {
        res.json(post);
      },function (err) {
        res.sendStatus(404);
      });
  }

  function imagePost(req, res) {
    var image = req.file;
    var post = req.body;
    post.postContent = "/assets/" + image.filename;

    postModel
      .createPost(post)
      .then(function (post) {
        res.json(post);
      }, function (err) {
        res.sendStatus(404);
      });
  }
};
