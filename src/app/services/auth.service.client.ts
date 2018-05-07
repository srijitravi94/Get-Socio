import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { User } from "../models/user.model.client";
import { UserService } from "./user.service.client";


@Injectable()
export class AuthService implements CanActivate {

  loggedInUser : User;

  constructor(private userService : UserService,
              private router : Router) {}

  canActivate() {
    return this.checkLoggedIn();
  }

  setLoggedInUser(user : User) {
    this.loggedInUser = user;
    localStorage.setItem('loggedInUser', JSON.stringify(this.loggedInUser));
  }

  getLoggedInUser() {

    this.loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (this.loggedInUser) {
      return Object.assign({}, this.loggedInUser);
    }
  }

  checkLoggedIn() {

    const obs = new Observable<boolean>((observer) => {

      this.userService
        .loggedIn()
        .subscribe((user) => {
          if (user) {
            this.setLoggedInUser(user);
            observer.next(true);
            observer.complete();
          } else {
            localStorage.removeItem('loggedInUser');
            this.router.navigate(['/login']);
            observer.next(false);
            observer.complete();
          }
        }, (err) => {
          observer.next(false);
          observer.complete();
        });

    });

    return obs;
  }

}
