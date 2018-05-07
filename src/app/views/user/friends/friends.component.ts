import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth.service.client";
import { User } from "../../../models/user.model.client";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../../../services/user.service.client";

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
              private authService : AuthService) { }

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
            for(let f in this.loggedInUser.myFriends) {
              if(this.loggedInUser.myFriends[f].status === "FRIENDS") {
                this.userService
                  .findUserById(this.loggedInUser.myFriends[f].userId)
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
          window.location.reload();
        });
  }

}
