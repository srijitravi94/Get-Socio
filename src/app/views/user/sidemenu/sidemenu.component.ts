import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { ToastrService } from 'ngx-toastr';
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
  pendingRequests   : String[];
  pendingRequest    : Boolean;
  friends           : Boolean;
  fileToUpload      : File;

  message:string;

  @Output() changeCallback : EventEmitter<() => void > = new EventEmitter();

  passwordField = {
    newPassword       : "",
    verifyNewPassword : "",
  };
  selectedUser = "";

  friendsList = [];

  constructor (
    private route : ActivatedRoute,
    private router : Router,
    private userService : UserService,
    private authService : AuthService,
    private toastrService : ToastrService
  ) { }

  ngOnInit() {
    this.loggedInUser = this.authService.getLoggedInUser();
    this.findUserByUsername();
    this.checkFriendRequestStatus();
    this.checkPendingRequests(this.loggedInUser.username);

    if(this.changeCallback) {
      this.changeCallback.emit(()=> {
        this.checkPendingRequests(this.loggedInUser.username);
      });
    }
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

  selectUser() {
    this.selectedUser = JSON.parse(JSON.stringify(this.user));
  }

  updateProfile(user) {
    user.image = user.image.split('/')[user.image.length-1];
    this.userService
      .updateProfile(user, user.username)
      .subscribe(
        (user : User) => {
          this.findUserByUsername();
          this.toastrService.success("Profile updated successfully", "SUCCESS", {
            closeButton : true
          });
          setTimeout(function () {
            window.location.reload();
          }, 2000);
        },
        (err) => {
          this.toastrService.error("Unable to update your profile. Please try again !", "ERROR", {
            closeButton : true
          });
        });
  }

  updatePassword(passwordField) {
    this.userService
      .updatePassword(passwordField, this.user.username)
      .subscribe(
        (user : User) => {
          this.toastrService.success("Password updated successfully", "SUCCESS", {
            closeButton : true
          });
        },
        (err) => {
          this.toastrService.error("Unable to update password. Please try again !", "ERROR", {
            closeButton : true
          });
        });
  }

  logout() {
    this.userService
      .logout(this.loggedInUser)
      .subscribe(
        (res) => {
          localStorage.removeItem('loggedInUser');
          this.router.navigate(['/login']);
          this.toastrService.warning("User Successfully Logged Out", "", {
            closeButton : true
          });
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
            for(let f in user.myFriends) {
              if(!user.myFriends[f].sentRequest && user.myFriends[f].status === "PENDING") {
                this.userService
                  .findUserById(user.myFriends[f].userId)
                  .subscribe(
                    (pendingUser : User) => {
                      pendingRequests.push(pendingUser);
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
            this.toastrService.success("Profile picture updated successfully", "SUCCESS", {
              closeButton : true
            });
            setTimeout(function () {
              window.location.reload();
            }, 2000);
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
