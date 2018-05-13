import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth.service.client";
import { User } from "../../../models/user.model.client";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../../../services/user.service.client";
import { ToastrService } from  'ngx-toastr';


@Component({
  selector: 'app-pending-requests',
  templateUrl: './pending-requests.component.html',
  styleUrls: ['./pending-requests.component.css']
})
export class PendingRequestsComponent implements OnInit {

  username          : String;
  loggedInUser      : User;
  sidebarChangeCallback: () => void;

  pendingRequests = [];

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

  acceptFriendRequest(userId) {
    this.userService
      .acceptFriendRequest(this.loggedInUser._id, userId)
      .subscribe(
        (user : User) => {
          this.checkPendingRequests(this.loggedInUser.username);
          if(this.sidebarChangeCallback) {
            this.sidebarChangeCallback();
          }
          this.userService
            .findUserById(userId)
            .subscribe(
              (friendUser : User) => {
                this.toastrService.info("You are now friends with " + friendUser.firstName, "AWESOME", {
                  closeButton : true
                });
              });
        });
  }

  deleteFriendRequest(userId) {
    this.userService
      .deleteFriendRequest(this.loggedInUser._id, userId)
      .subscribe(
        (user : User) => {
          this.checkPendingRequests(this.loggedInUser.username);
          if(this.sidebarChangeCallback) {
            this.sidebarChangeCallback();
          }
        });
  }

  sidebarChange(event) {
    this.sidebarChangeCallback = event;
  }
}
