import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service.client";
import { User } from "../../models/user.model.client";


@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedInUser         : User;
  showLoggedInIcons    : Boolean;

  constructor(
    private authService : AuthService
  ) { }

  ngOnInit() {
    this.setHeaderIcons();
  }

  setHeaderIcons() {
    this.loggedInUser = this.authService.getLoggedInUser();
    if(this.loggedInUser) {
      this.showLoggedInIcons = true;
    } else {
      this.showLoggedInIcons = false;
    }
  }

}
