import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service.client';
import { AuthService } from '../../services/auth.service.client';
import { User } from "../../models/user.model.client";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user         : User;
  errorMessage : String;

  constructor (private userService : UserService,
               private authService : AuthService,
               private toastrService : ToastrService,
               private router : Router) { }

  ngOnInit() {
  }

  login(username, password) {
    this.userService
      .login(username, password)
      .subscribe(
        (user : User) => {
          this.authService.loggedInUser = user;
          this.router.navigate(['/profile', user.username]);
          this.toastrService.success("Successfully Logged In" , "", {
            closeButton : true
          });
      },
        (err) => {
          this.errorMessage = "Username and password doesn't match. Try again";
        });
  }

}
