import { Component, OnInit } from '@angular/core';
import { User } from "../../models/user.model.client";
import { AuthService } from "../../services/auth.service.client";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loggedInUser      : User;

  constructor(
    private authService : AuthService
  ) { }

  ngOnInit() {
    this.loggedInUser = this.authService.getLoggedInUser();
  }

}
