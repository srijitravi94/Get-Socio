import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./views/login/login.component";
import { RegisterComponent } from "./views/register/register.component";
import { HomeComponent } from "./views/home/home.component";
import { TimelineComponent } from './views/user/timeline/timeline.component';
import { PendingRequestsComponent } from './views/user/pending-requests/pending-requests.component';
import { FriendsComponent } from './views/user/friends/friends.component';
import { AuthService } from "./services/auth.service.client";
import { RedirectService } from "./services/redirect.service.client";

const appRoutes : Routes = [
  { path : '' , component: HomeComponent},
  { path : 'login' , component: LoginComponent, canActivate : [RedirectService]},
  { path : 'register' , component: RegisterComponent, canActivate : [RedirectService] },
  { path : 'profile/:username' , component: TimelineComponent, canActivate : [AuthService]},
  { path : 'profile/:username/pending-requests' , component: PendingRequestsComponent, canActivate : [AuthService] },
  { path : 'profile/:username/friends' , component: FriendsComponent, canActivate : [AuthService] },
];

export const routing = RouterModule.forRoot(appRoutes);
