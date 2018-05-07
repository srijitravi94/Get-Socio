import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { User } from "../../../models/user.model.client";
import { AuthService } from "../../../services/auth.service.client";

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {
  username          : String;
  user              : User;
  loggedInUser      : User;
  successMessage    : String;
  errorMessage      : String;
  pendingRequests   : String[];
  pendingRequest    : Boolean;
  friends           : Boolean;
  fileToUpload      : File;

  passwordField = {
    newPassword       : "",
    verifyNewPassword : "",
  };

  friendsList = [];

  constructor (
    private route : ActivatedRoute,
    private router : Router,
    private userService : UserService,
    private authService : AuthService
  ) { }

  ngOnInit() {
    this.loggedInUser = this.authService.getLoggedInUser();
    this.findUserByUsername();
    this.checkFriendRequestStatus();
    this.checkPendingRequests(this.username);
  }

  findUserByUsername() {
    this.route.params
      .subscribe(params => {
        this.username = params['username'];
        this.userService
          .findUserByUsername(this.username)
          .subscribe((user : User) => {
            this.user = user;
          });
      });
  }

  getProfileForUser() {
    this.findUserByUsername();
  }

  updateProfile(user) {
    user.image = user.image.split('/')[user.image.length-1];
    this.userService
      .updateProfile(user, user.username)
      .subscribe(
        (user : User) => {
          this.successMessage = "Profile updated successfully";
          window.location.reload();
          console.log(this.successMessage);
        },
        (err) => {
          this.errorMessage = "Unable to update profile. Please try again !";
          console.log(this.errorMessage);
        });
  }

  updatePassword(passwordField) {
    this.userService
      .updatePassword(passwordField, this.user.username)
      .subscribe(
        (user : User) => {
          this.successMessage = "Password updated successfully";
          console.log(this.successMessage);
        },
        (err) => {
          this.errorMessage = "Unable to update password. Please try again !";
          console.log(this.errorMessage);
        });
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

  sendRequest(userId) {
    this.userService
      .sendRequest(this.loggedInUser._id, userId)
      .subscribe(
        (user : User) => {
          this.checkFriendRequestStatus();
        });
  }

  cancelRequest(userId) {
    this.userService
      .deleteFriendRequest(this.loggedInUser._id, userId)
      .subscribe(
        (user : User) => {
          this.checkFriendRequestStatus();
        });
  }

  checkFriendRequestStatus() {
    this.userService
      .findUserByUsername(this.username)
      .subscribe(
        (user : User) => {
          this.userService
            .checkFriendRequestStatus(this.loggedInUser._id, user._id)
            .subscribe(
              (newUser: User) => {
                if (newUser) {
                  for(let f in newUser.myFriends) {
                    if(newUser.myFriends[f].userId === user._id) {
                      if(newUser.myFriends[f].status === "FRIENDS") {
                        this.friends = true;
                        this.pendingRequest = false;
                      } else {
                        this.friends = false;
                        this.pendingRequest = true;
                      }
                    }
                  }
                } else {
                  this.friends = false;
                  this.pendingRequest = false;
                }
              });
        });
  }

  checkPendingRequests(username) {
    this.userService
      .findUserByUsername(username)
      .subscribe(
        (user : User) => {
          let pendingRequests = [];
          if(user.username === this.loggedInUser.username) {
            for(let f in this.loggedInUser.myFriends) {
              if(!this.loggedInUser.myFriends[f].sentRequest && this.loggedInUser.myFriends[f].status === "PENDING") {
                this.userService
                  .findUserById(this.loggedInUser.myFriends[f].userId)
                  .subscribe(
                    (pendingUser : User) => {
                      pendingRequests.unshift(pendingUser);
                    });
              }
            }
          }
          this.pendingRequests = pendingRequests;
        });
  }

  uploadProfilePicture(file, userId) {
    this.fileToUpload = file[0];
      this.userService
        .uploadProfilePicture(this.fileToUpload, userId)
        .subscribe(
          (user : User) => {
            this.findUserByUsername();
            window.location.reload();
          });
  }

  friendsOfUser(friendsList) {
    let friends = [];
    for(let f in friendsList) {
      if(friendsList[f].status === "FRIENDS") {
        this.userService
          .findUserById(friendsList[f].userId)
          .subscribe(
            (user : User) => {
              friends.push(user);
            });
      }
    }
    this.friendsList = friends;
  }

}
