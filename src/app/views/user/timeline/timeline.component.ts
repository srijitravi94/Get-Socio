import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { PostService } from '../../../services/post.service.client';
import { AuthService } from "../../../services/auth.service.client";
import { ToastrService } from 'ngx-toastr';
import { User } from "../../../models/user.model.client";
import { Post } from "../../../models/post.model.client";


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  username             : String;
  user                 : User;
  loggedInUser         : User;
  postCaption          : String;
  postContent          : String;
  posts                : Post;
  friends              : Boolean;
  filename             : String;
  fileToShare          : File;
  imageCaption         : String;


  enableCommentSection = [];
  newComment = [];
  selectedPost = "";
  selectedImage = "";
  likedBy = [];

  constructor (
    private route : ActivatedRoute,
    private userService : UserService,
    private postService : PostService,
    private authService : AuthService,
    private toastrService : ToastrService,
  ) { }

  ngOnInit() {
    this.loggedInUser = this.authService.getLoggedInUser();
    this.route.params
      .subscribe(params => {
        this.username = params['username'];
        this.findUserByUsername(this.username);
        this.areFriends(this.username);
        this.getPostsForUser(this.username);
      });
  }

  findUserByUsername(username) {
    this.userService
      .findUserByUsername(username)
      .subscribe(
        (user : User) => {
        this.user = user;
      });
  }

  getPostsForUser(username) {
    this.userService
      .findUserByUsername(username)
      .subscribe(
        (user : User) => {
          this.postService
            .findPostByUserId(user._id)
            .subscribe(
              (posts : Post) => {
                this.posts = posts;
              });
        });
  }

  areFriends(username) {
    this.userService
      .findUserByUsername(username)
      .subscribe(
        (user : User) => {
          this.userService
            .checkFriendRequestStatus(this.loggedInUser._id, user._id)
            .subscribe(
              (newUser: User) => {
                if (newUser) {
                  for(let f in newUser.myFriends) {
                    if(newUser.myFriends[f].userId === user._id && newUser.myFriends[f].status === "FRIENDS") {
                      this.friends = true;
                    }
                  }
                }
              });
        });
  }

  createPost(postCaption, postContent) {
    const newPost = {
      username    : this.loggedInUser.username,
      userId      : this.loggedInUser._id,
      firstName   : this.loggedInUser.firstName,
      lastName    : this.loggedInUser.lastName,
      image       : this.loggedInUser.image,
      postCaption : postCaption,
      postContent : postContent
    };

    this.postService
      .createPost(newPost)
      .subscribe(
        (post : Post) => {
          this.getPostsForUser(this.username);
          this.toastrService.info("You shared a new post","AWESOME", {
            closeButton : true
          });
        });
  }

  selectPost(post) {
    this.selectedPost = JSON.parse(JSON.stringify(post));
  }

  updatePost(post) {
    post.image = post.image.split('/')[post.image.length-1];
    this.postService
      .updatePost(post)
      .subscribe(
        (post : Post) => {
          this.getPostsForUser(this.username);
          this.toastrService.info("You have updated the post" , "", {
            closeButton : true
          });
        });
  }

  deletePost(post) {
    this.postService
      .deletePost(post._id, this.loggedInUser._id)
      .subscribe(
        (post : Post) => {
          this.getPostsForUser(this.username);
          this.toastrService.warning("You have deleted a post" , "", {
            closeButton : true
          });
        });
  }

  likePost(postId, userId) {
    this.postService
      .likePost(postId, userId)
      .subscribe(
        (post : Post) => {
          this.getPostsForUser(this.username);
        });
  }

  unlikePost(postId, userId) {
    this.postService
      .unlikePost(postId, userId)
      .subscribe(
        (post : Post) => {
          this.getPostsForUser(this.username);
        });
  }

  enableComment(postId) {
    this.newComment = [];
    this.enableCommentSection = [];
    this.newComment.push(postId);
    this.enableCommentSection.push(postId);
  }

  disableComment(postId) {
    const index = this.enableCommentSection.indexOf(postId);
    this.enableCommentSection.splice(index, 1);
  }

  submitComment(postId, username, firstName, lastName, comment) {
    const comments = {
      comment : comment,
      commentator : firstName + " " + lastName,
      username : username,
      image  : this.loggedInUser.image
    };
    this.postService
      .submitComment(postId, comments)
      .subscribe(
        (post : Post) => {
          this.getPostsForUser(this.username);
        });
  }

  sharePost(postCaption, postContent, type) {
    const sharedPost = {
      username    : this.loggedInUser.username,
      userId      : this.loggedInUser._id,
      firstName   : this.loggedInUser.firstName,
      lastName    : this.loggedInUser.lastName,
      image       : this.loggedInUser.image,
      postCaption : postCaption,
      postContent : postContent,
      isShared    : true,
      sharedFrom  : this.user.username,
      type        : type
    };

    this.postService
      .createPost(sharedPost)
      .subscribe(
        (post : Post) => {
          this.getPostsForUser(this.username);
          this.toastrService.info("You shared a post from " + this.user.username , "AWESOME", {
            closeButton : true
          });
        });
  }

  selectImage(file) {
    this.fileToShare = file[0];
    this.filename = file[0].name;

    var reader = new FileReader();
    reader.onload = (event : any) => {
      this.selectedImage = event.target.result;
    };

    reader.readAsDataURL(this.fileToShare);
  }

  postImage(imageCaption) {
    const formData = new FormData();
    formData.append('username', this.loggedInUser.username);
    formData.append('firstName', this.loggedInUser.firstName);
    formData.append('lastName', this.loggedInUser.lastName);
    formData.append('image', this.loggedInUser.image);
    formData.append('userId', this.loggedInUser._id);
    formData.append('postCaption', imageCaption);
    formData.append('postContent', this.fileToShare);
    formData.append('type', "IMAGE");

    this.postService
      .createImagePost(formData)
      .subscribe(
        (post : Post) => {
          this.getPostsForUser(this.username);
          this.selectedImage = '';
          this.imageCaption = '';
          this.toastrService.info("You shared an image post", "AWESOME", {
            closeButton : true
          });
        });
  }

  peopleWhoLikedThePost(userIds) {
    let users= [];
    for(let u in userIds) {
      this.userService
        .findUserById(userIds[u])
        .subscribe(
          (user : User) => {
            users.push(user);
          });
    }
    this.likedBy = users;
  }
}
