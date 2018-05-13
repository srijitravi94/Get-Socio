import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth.service.client";
import { User } from "../../../models/user.model.client";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../../../services/user.service.client";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  username          : String;
  loggedInUser      : User;

  friendsList = [];

  constructor(private route : ActivatedRoute,
              private router : Router,
              private userService : UserService,
              private authService : AuthService,
              private toastrService : ToastrService) { }

  ngOnInit() {
    this.loggedInUser = this.authService.getLoggedInUser();
    this.findUsername();
  }

  findUsername() {
    this.route.params
      .subscribe(params => {
        this.username = params['username'];
        if(this.loggedInUser.username === this.username) {
          this.friendList(this.loggedInUser.username);
        } else {
          this.router.navigate(['/profile', this.loggedInUser.username]);
        }
      });
  }

  friendList(username) {
    this.userService
      .findUserByUsername(username)
      .subscribe(
        (user : User) => {
          let friendsList = [];
          if(user.username === this.loggedInUser.username) {
            for(let f in user.myFriends) {
              if(user.myFriends[f].status === "FRIENDS") {
                this.userService
                  .findUserById(user.myFriends[f].userId)
                  .subscribe(
                    (friends : User) => {
                      friendsList.push(friends);
                    });
              }
            }
          }
          this.friendsList = friendsList;
        });
  }

  removeFriend(userId) {
    this.userService
      .deleteFriendRequest(this.loggedInUser._id, userId)
      .subscribe(
        (user : User) => {
          this.friendList(this.loggedInUser.username);
          this.userService
            .findUserById(userId)
            .subscribe(
              (friendUser : User) => {
                this.toastrService.info("You have unfriended " + friendUser.firstName, "", {
                  closeButton : true
                });
              });
        });
  }

}
