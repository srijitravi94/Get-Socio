import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service.client';
import { AuthService } from "../../services/auth.service.client";
import { User } from "../../models/user.model.client";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errorMessage    : String;

  constructor(private userService : UserService,
              private authService : AuthService,
              private toastrService : ToastrService,
              private router : Router) { }

  ngOnInit() {
  }

  register(firstName, lastName, username, password) {
    this.userService
      .findUserByUsername(username)
      .subscribe(
        (user : User) => {
          this.errorMessage = "Username already exists. Try a different Username";
        },
        (err) => {
          const newUser = {
            firstName : firstName,
            lastName  : lastName,
            username  : username,
            password  : password,
            email     : "",
            phone     : ""
          };

          this.userService
            .register(newUser)
            .subscribe(
              (user : User) => {
                this.authService.loggedInUser = user;
                this.router.navigate(['/profile', user.username]);
                this.toastrService.success("Registration successful" , "", {
                  closeButton : true
                });
              });
        });
  }

}
