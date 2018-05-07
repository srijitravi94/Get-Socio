import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth.service.client";
import { User } from "../../../models/user.model.client";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../../../services/user.service.client";

@Component({
  selector: 'app-pending-requests',
  templateUrl: './pending-requests.component.html',
  styleUrls: ['./pending-requests.component.css']
})
export class PendingRequestsComponent implements OnInit {

  username          : String;
  loggedInUser      : User;

  pendingRequests = [];

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
          this.checkPendingRequests(this.loggedInUser.username);
        } else {
          this.router.navigate(['/profile', this.loggedInUser.username]);
        }
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

  acceptFriendRequest(userId) {
    this.userService
      .acceptFriendRequest(this.loggedInUser._id, userId)
      .subscribe(
        (user : User) => {
          window.location.reload();
        });
  }

  deleteFriendRequest(userId) {
    this.userService
      .deleteFriendRequest(this.loggedInUser._id, userId)
      .subscribe(
        (user : User) => {
          window.location.reload();
        });
  }
}
