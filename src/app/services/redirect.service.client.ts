import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { User } from "../models/user.model.client";

@Injectable()
export class RedirectService implements CanActivate {

  loggedInUser : User;

  constructor(private router : Router) {}

  canActivate() {
    return this.checkLoggedIn();
  }

  checkLoggedIn() {

    const obs = new Observable<boolean>((observer) => {

      this.loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
      if (this.loggedInUser === null) {
        observer.next(true);
        observer.complete();
      } else {
        this.router.navigate(['/profile', this.loggedInUser.username]);
        observer.next(false);
        observer.complete();
      }
    });

    return obs;
  }

}
