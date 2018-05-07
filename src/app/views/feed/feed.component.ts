import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service.client';
import { PostService } from '../../services/post.service.client';
import { User } from "../../models/user.model.client";
import { AuthService } from "../../services/auth.service.client";
import { Post } from "../../models/post.model.client";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  searchUser : FormControl = new FormControl();

  searchResult : any;

  username          : String;
  user              : User;
  loggedInUser      : User;
  filename          : String;
  fileToShare       : File;

  postsOfFriends = [];
  enableCommentSection = [];
  newComment = [];
  selectedPost = "";
  selectedImage = "";
  likedBy = [];

  constructor(private router : Router,
              private userService : UserService,
              private postService : PostService,
              private authService : AuthService) {
    this.searchUser
      .valueChanges
      .debounceTime(400)
      .subscribe(data => {
        if(data) {
          this.userService
            .searchUser(data)
            .subscribe(
              (users : User)=>{
                this.searchResult = users;
              });
        }
      });
  }

  ngOnInit() {
    this.loggedInUser = this.authService.getLoggedInUser();
    this.findUserByUsername();
    this.getAllPosts();
  }

  findUserByUsername() {
    this.username = this.loggedInUser.username;
    this.userService
      .findUserByUsername(this.username)
      .subscribe((user : User) => {
        this.user = user;
      });
  }

  getAllPosts() {
    this.postService
      .getAllPosts()
      .subscribe(
        (posts) => {
          let postsOfFriends = [];
          let myFriends = this.loggedInUser.myFriends;
          for(let post in posts) {
            if(this.loggedInUser._id === posts[post].userId) {
              postsOfFriends.push(posts[post]);
            }
            for(let f in myFriends) {
              if((myFriends[f].userId === posts[post].userId && myFriends[f].status === "FRIENDS")) {
                postsOfFriends.push(posts[post]);
              }
            }
          }
          this.postsOfFriends = postsOfFriends;
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
          this.getAllPosts();
        });
  }

  deletePost(post) {
    this.postService
      .deletePost(post._id, this.loggedInUser._id)
      .subscribe(
        (post : Post) => {
          this.getAllPosts();
        });
  }

  likePost(postId, userId) {
    this.postService
      .likePost(postId, userId)
      .subscribe(
        (post : Post) => {
          this.getAllPosts();
        });
  }

  unlikePost(postId, userId) {
    this.postService
      .unlikePost(postId, userId)
      .subscribe(
        (post : Post) => {
          this.getAllPosts();
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
          this.getAllPosts();
        });
  }

  sharePost(postCaption, postContent, username, type) {
    const sharedPost = {
      username    : this.loggedInUser.username,
      userId      : this.loggedInUser._id,
      firstName   : this.loggedInUser.firstName,
      lastName    : this.loggedInUser.lastName,
      image       : this.loggedInUser.image,
      postCaption : postCaption,
      postContent : postContent,
      isShared    : true,
      sharedFrom  : username,
      type        : type
    };

    this.postService
      .createPost(sharedPost)
      .subscribe(
        (post : Post) => {
          this.getAllPosts();
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

  logout() {
    this.userService
      .logout()
      .subscribe(
        (res) => {
          localStorage.removeItem('loggedInUser');
          this.router.navigate(['/login']);
        });
  }
}
