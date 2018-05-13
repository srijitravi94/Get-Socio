import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';
import { ToastrModule } from 'ngx-toastr';


// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { HomeComponent } from './views/home/home.component';
import { SidemenuComponent } from './views/user/sidemenu/sidemenu.component';
import { TimelineComponent } from './views/user/timeline/timeline.component';
import { PendingRequestsComponent } from './views/user/pending-requests/pending-requests.component';
import { HeaderComponent } from './views/header/header.component';
import { FriendsComponent } from './views/user/friends/friends.component';
import { FeedComponent } from './views/feed/feed.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';


// Services
import { UserService } from "./services/user.service.client";
import { PostService } from "./services/post.service.client";
import { AuthService } from "./services/auth.service.client";
import { RedirectService } from "./services/redirect.service.client";


import { routing } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    SidemenuComponent,
    TimelineComponent,
    PendingRequestsComponent,
    HeaderComponent,
    FriendsComponent,
    FeedComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    UserService,
    PostService,
    AuthService,
    RedirectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
