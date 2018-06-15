webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConstants; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");

var AppConstants = /** @class */ (function () {
    function AppConstants() {
    }
    AppConstants.ApiEndPoint = {
        baseUrl: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].baseUrl + 'api/getSocio/',
        socketUrl: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].baseUrl
    };
    return AppConstants;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_login_login_component__ = __webpack_require__("../../../../../src/app/views/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_register_register_component__ = __webpack_require__("../../../../../src/app/views/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_home_home_component__ = __webpack_require__("../../../../../src/app/views/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__views_user_sidemenu_sidemenu_component__ = __webpack_require__("../../../../../src/app/views/user/sidemenu/sidemenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__views_user_timeline_timeline_component__ = __webpack_require__("../../../../../src/app/views/user/timeline/timeline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__views_user_pending_requests_pending_requests_component__ = __webpack_require__("../../../../../src/app/views/user/pending-requests/pending-requests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__views_header_header_component__ = __webpack_require__("../../../../../src/app/views/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__views_user_friends_friends_component__ = __webpack_require__("../../../../../src/app/views/user/friends/friends.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__views_feed_feed_component__ = __webpack_require__("../../../../../src/app/views/feed/feed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__views_landing_page_landing_page_component__ = __webpack_require__("../../../../../src/app/views/landing-page/landing-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_post_service_client__ = __webpack_require__("../../../../../src/app/services/post.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_auth_service_client__ = __webpack_require__("../../../../../src/app/services/auth.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_redirect_service_client__ = __webpack_require__("../../../../../src/app/services/redirect.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// Components











// Services





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__views_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__views_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__views_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__views_user_sidemenu_sidemenu_component__["a" /* SidemenuComponent */],
                __WEBPACK_IMPORTED_MODULE_12__views_user_timeline_timeline_component__["a" /* TimelineComponent */],
                __WEBPACK_IMPORTED_MODULE_13__views_user_pending_requests_pending_requests_component__["a" /* PendingRequestsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__views_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_15__views_user_friends_friends_component__["a" /* FriendsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__views_feed_feed_component__["a" /* FeedComponent */],
                __WEBPACK_IMPORTED_MODULE_17__views_landing_page_landing_page_component__["a" /* LandingPageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_22__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__["a" /* ToastrModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__services_user_service_client__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_19__services_post_service_client__["a" /* PostService */],
                __WEBPACK_IMPORTED_MODULE_20__services_auth_service_client__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_21__services_redirect_service_client__["a" /* RedirectService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_login_login_component__ = __webpack_require__("../../../../../src/app/views/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_register_register_component__ = __webpack_require__("../../../../../src/app/views/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_home_home_component__ = __webpack_require__("../../../../../src/app/views/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_user_timeline_timeline_component__ = __webpack_require__("../../../../../src/app/views/user/timeline/timeline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_user_pending_requests_pending_requests_component__ = __webpack_require__("../../../../../src/app/views/user/pending-requests/pending-requests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_user_friends_friends_component__ = __webpack_require__("../../../../../src/app/views/user/friends/friends.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service_client__ = __webpack_require__("../../../../../src/app/services/auth.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_redirect_service_client__ = __webpack_require__("../../../../../src/app/services/redirect.service.client.ts");









var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__views_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__views_login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_redirect_service_client__["a" /* RedirectService */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__views_register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_redirect_service_client__["a" /* RedirectService */]] },
    { path: 'profile/:username', component: __WEBPACK_IMPORTED_MODULE_4__views_user_timeline_timeline_component__["a" /* TimelineComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__services_auth_service_client__["a" /* AuthService */]] },
    { path: 'profile/:username/pending-requests', component: __WEBPACK_IMPORTED_MODULE_5__views_user_pending_requests_pending_requests_component__["a" /* PendingRequestsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__services_auth_service_client__["a" /* AuthService */]] },
    { path: 'profile/:username/friends', component: __WEBPACK_IMPORTED_MODULE_6__views_user_friends_friends_component__["a" /* FriendsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__services_auth_service_client__["a" /* AuthService */]] },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/services/auth.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthService.prototype.canActivate = function () {
        return this.checkLoggedIn();
    };
    AuthService.prototype.setLoggedInUser = function (user) {
        this.loggedInUser = user;
        localStorage.setItem('loggedInUser', JSON.stringify(this.loggedInUser));
    };
    AuthService.prototype.getLoggedInUser = function () {
        this.loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        if (this.loggedInUser) {
            return Object.assign({}, this.loggedInUser);
        }
    };
    AuthService.prototype.checkLoggedIn = function () {
        var _this = this;
        var obs = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */](function (observer) {
            _this.userService
                .loggedIn()
                .subscribe(function (user) {
                if (user) {
                    _this.setLoggedInUser(user);
                    observer.next(true);
                    observer.complete();
                }
                else {
                    localStorage.removeItem('loggedInUser');
                    _this.router.navigate(['/login']);
                    observer.next(false);
                    observer.complete();
                }
            }, function (err) {
                observer.next(false);
                observer.complete();
            });
        });
        return obs;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/post.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constants__ = __webpack_require__("../../../../../src/app/app.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
        this.api = {
            'createPost': this.createPost,
            'findPostById': this.findPostById,
            'getAllPosts': this.getAllPosts,
            'findPostByUserId': this.findPostByUserId,
            'updatePost': this.updatePost,
            'deletePost': this.deletePost,
            'likePost': this.likePost,
            'unlikePost': this.unlikePost,
            'submitComment': this.submitComment,
            'createImagePost': this.createImagePost
        };
        this.apiEndPoint = {
            'createPost': __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* AppConstants */].ApiEndPoint.baseUrl + 'post/createPost',
            'findPostById': __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* AppConstants */].ApiEndPoint.baseUrl + 'post/getPosts/{postId}',
            'getAllPosts': __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* AppConstants */].ApiEndPoint.baseUrl + 'post/getAllPosts',
            'findPostByUserId': __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* AppConstants */].ApiEndPoint.baseUrl + 'post/getPosts/userId/{userId}',
            'updatePost': __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* AppConstants */].ApiEndPoint.baseUrl + 'post/updatePost',
            'deletePost': __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* AppConstants */].ApiEndPoint.baseUrl + '{userId}/post/deletePost/{postId}',
            'likePost': __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* AppConstants */].ApiEndPoint.baseUrl + '{userId}/post/likePost/{postId}',
            'unlikePost': __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* AppConstants */].ApiEndPoint.baseUrl + '{userId}/post/unlikePost/{postId}',
            'submitComment': __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* AppConstants */].ApiEndPoint.baseUrl + 'post/comment/{postId}',
            'createImagePost': __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* AppConstants */].ApiEndPoint.baseUrl + 'post/createPost/imagePost'
        };
    }
    PostService.prototype.createPost = function (newPost) {
        var url = this.apiEndPoint.createPost;
        return this.http.post(url, newPost);
    };
    PostService.prototype.findPostById = function (postId) {
        var url = this.apiEndPoint.findPostById
            .replace('{postId}', postId);
        return this.http.get(url);
    };
    PostService.prototype.getAllPosts = function () {
        var url = this.apiEndPoint.getAllPosts;
        return this.http.get(url);
    };
    PostService.prototype.findPostByUserId = function (userId) {
        var url = this.apiEndPoint.findPostByUserId
            .replace('{userId}', userId);
        return this.http.get(url);
    };
    PostService.prototype.updatePost = function (post) {
        var url = this.apiEndPoint.updatePost;
        return this.http.put(url, post);
    };
    PostService.prototype.deletePost = function (postId, userId) {
        var url = this.apiEndPoint.deletePost
            .replace('{userId}', userId)
            .replace('{postId}', postId);
        return this.http.delete(url);
    };
    PostService.prototype.likePost = function (postId, userId) {
        var url = this.apiEndPoint.likePost
            .replace('{userId}', userId)
            .replace('{postId}', postId);
        return this.http.put(url, "");
    };
    PostService.prototype.unlikePost = function (postId, userId) {
        var url = this.apiEndPoint.unlikePost
            .replace('{userId}', userId)
            .replace('{postId}', postId);
        return this.http.put(url, "");
    };
    PostService.prototype.submitComment = function (postId, comments) {
        var url = this.apiEndPoint.submitComment
            .replace('{postId}', postId);
        return this.http.put(url, comments);
    };
    PostService.prototype.createImagePost = function (newPost) {
        var url = this.apiEndPoint.createImagePost;
        return this.http.post(url, newPost);
    };
    PostService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "../../../../../src/app/services/redirect.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedirectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RedirectService = /** @class */ (function () {
    function RedirectService(router) {
        this.router = router;
    }
    RedirectService.prototype.canActivate = function () {
        return this.checkLoggedIn();
    };
    RedirectService.prototype.checkLoggedIn = function () {
        var _this = this;
        var obs = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */](function (observer) {
            _this.loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
            if (_this.loggedInUser === null) {
                observer.next(true);
                observer.complete();
            }
            else {
                _this.router.navigate(['/profile', _this.loggedInUser.username]);
                observer.next(false);
                observer.complete();
            }
        });
        return obs;
    };
    RedirectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], RedirectService);
    return RedirectService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constants__ = __webpack_require__("../../../../../src/app/app.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.api = {
            'register': this.register,
            'login': this.login,
            'logout': this.logout,
            'loggedIn': this.loggedIn,
            'findUserByUsername': this.findUserByUsername,
            'findUserById': this.findUserById,
            'updateProfile': this.updateProfile,
            'updatePassword': this.updatePassword,
            'uploadProfilePicture': this.uploadProfilePicture,
            'sendRequest': this.sendRequest,
            'checkFriendRequestStatus': this.checkFriendRequestStatus,
            'acceptFriendRequest': this.acceptFriendRequest,
            'deleteFriendRequest': this.deleteFriendRequest,
            'searchUser': this.searchUser
        };
        this.apiEndPoint = {
            'register': __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* AppConstants */].ApiEndPoint.baseUrl + 'register',
            'login': __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* AppConstants */].ApiEndPoint.baseUrl + 'login',
            'logout': __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* AppConstants */].ApiEndPoint.baseUrl + 'logout',
            'loggedIn': __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* AppConstants */].ApiEndPoint.baseUrl + 'loggedIn',
            'findUserByUsername': __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* AppConstants */].ApiEndPoint.baseUrl + 'user/{username}',
            'findUserById': __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* AppConstants */].ApiEndPoint.baseUrl + 'user/userId/{userId}',
            'updateProfile': __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* AppConstants */].ApiEndPoint.baseUrl + 'user/updateProfile/{username}',
            'updatePassword': __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* AppConstants */].ApiEndPoint.baseUrl + 'user/updatePassword/{username}',
            'uploadProfilePicture': __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* AppConstants */].ApiEndPoint.baseUrl + 'user/upload/{userId}',
            'sendRequest': __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* AppConstants */].ApiEndPoint.baseUrl + 'user/{currentUserId}/sendRequest/{requestUserId}',
            'acceptFriendRequest': __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* AppConstants */].ApiEndPoint.baseUrl + 'user/{currentUserId}/acceptFriendRequest/{requestUserId}',
            'deleteFriendrequest': __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* AppConstants */].ApiEndPoint.baseUrl + 'user/{currentUserId}/deleteFriendRequest/{requestUserId}',
            'searchUser': __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* AppConstants */].ApiEndPoint.baseUrl + 'searchUser/{user}'
        };
    }
    UserService.prototype.register = function (newUser) {
        var url = this.apiEndPoint.register;
        return this.http.post(url, newUser, { withCredentials: true });
    };
    UserService.prototype.login = function (username, password) {
        var url = this.apiEndPoint.login;
        var credentials = {
            username: username,
            password: password
        };
        return this.http.post(url, credentials, { withCredentials: true });
    };
    UserService.prototype.logout = function (user) {
        var url = this.apiEndPoint.logout;
        return this.http.post(url, user, { withCredentials: true });
    };
    UserService.prototype.loggedIn = function () {
        var url = this.apiEndPoint.loggedIn;
        return this.http.post(url, '', { withCredentials: true });
    };
    UserService.prototype.findUserByUsername = function (username) {
        var url = this.apiEndPoint.findUserByUsername.replace('{username}', username);
        return this.http.get(url);
    };
    UserService.prototype.findUserById = function (userId) {
        var url = this.apiEndPoint.findUserById
            .replace('{userId}', userId);
        return this.http.get(url);
    };
    UserService.prototype.updateProfile = function (user, username) {
        var url = this.apiEndPoint.updateProfile
            .replace('{username}', username);
        return this.http.put(url, user);
    };
    UserService.prototype.updatePassword = function (passwordField, username) {
        var url = this.apiEndPoint.updatePassword
            .replace('{username}', username);
        return this.http.put(url, passwordField);
    };
    UserService.prototype.uploadProfilePicture = function (file, userId) {
        var url = this.apiEndPoint.uploadProfilePicture
            .replace('{userId}', userId);
        var formData = new FormData();
        formData.append('myFile', file);
        return this.http.post(url, formData);
    };
    UserService.prototype.sendRequest = function (currentUserId, requestUserId) {
        var url = this.apiEndPoint.sendRequest
            .replace('{currentUserId}', currentUserId)
            .replace('{requestUserId}', requestUserId);
        return this.http.put(url, "");
    };
    UserService.prototype.checkFriendRequestStatus = function (currentUserId, requestUserId) {
        var url = this.apiEndPoint.sendRequest
            .replace('{currentUserId}', currentUserId)
            .replace('{requestUserId}', requestUserId);
        return this.http.get(url);
    };
    UserService.prototype.acceptFriendRequest = function (currentUserId, requestUserId) {
        var url = this.apiEndPoint.acceptFriendRequest
            .replace('{currentUserId}', currentUserId)
            .replace('{requestUserId}', requestUserId);
        return this.http.put(url, "");
    };
    UserService.prototype.deleteFriendRequest = function (currentUserId, requestUserId) {
        var url = this.apiEndPoint.deleteFriendrequest
            .replace('{currentUserId}', currentUserId)
            .replace('{requestUserId}', requestUserId);
        return this.http.put(url, "");
    };
    UserService.prototype.searchUser = function (user) {
        var url = this.apiEndPoint.searchUser
            .replace('{user}', user);
        return this.http.get(url);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/views/feed/feed.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profile-pic {\n  margin-top: 80px;\n  text-align: center;\n  color: black;\n}\n\n@media (min-width: 576px){\n  .fixed {\n    width: 70%;\n    height : 100%;\n    position: fixed;\n    overflow: auto;\n  }\n}\n\n.img-fluid {\n  width: 100%;\n  height: 250px !important;\n}\n\n.text-center {\n  text-align : center;\n  margin: auto;\n}\n\n.post-form, .card {\n  margin-top: 30px;\n  margin-left: 10%;\n  margin-right: 10%;\n  margin-bottom: 30px;\n}\n\n#caption {\n  margin-bottom: 20px;\n}\n\n.card-header, .card-body {\n  color: black;\n}\n\n.card-text {\n  white-space: pre-wrap;\n}\n\n.btn {\n  border-radius: 5px;\n}\n\n.update-btn, .delete-btn {\n  margin-right: 10px;\n}\n\n.fa {\n  font-size: large;\n}\n\n.btn-center {\n  text-align: center;\n  margin: 0 auto;\n}\n\n@media (min-width: 576px) {\n  .d-sm-block {\n    display: inline !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .d-md-block {\n    display: inline !important;\n  }\n}\n\n.submit-comment {\n  border: 1px solid black;\n}\n\n.comment-box {\n  word-break: break-all;\n}\n\n.comment-box img {\n  width: 50px;\n  height: 50px;\n}\n\n.comment-box .media-left {\n  padding-right: 10px;\n  width: 65px;\n}\n\n.comment-box .media-body p {\n  border: 1px solid #ddd;\n  padding: 10px;\n}\n\n.comment-box .media-body .media p {\n  margin-bottom: 0;\n}\n\n.comment-box .media-heading {\n  background-color: #ddd;\n  border: 1px solid #ddd;\n  padding: 7px 10px;\n  position: relative;\n  margin-bottom: -1px;\n}\n\n.comment-box .media-heading:before {\n  content: \"\";\n  width: 12px;\n  height: 12px;\n  background-color: #ddd;\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  position: absolute;\n  top: 10px;\n  left: -6px;\n}\n\n.list-group-item-dark {\n  background-color: rgba(0,0,0,0.03) !important;\n}\n\n.private-user {\n  margin-top: 100px;\n}\n\n.no-user {\n  margin-top: 100px;\n}\n\n.fa-circle {\n  color: #2c3e50;\n}\n\n.shared-image {\n  width: 100% !important;\n  height: 100% !important;\n}\n\n.people-like {\n  color: #2c3e50;\n}\n\n.small-image {\n  height: 50px;\n  width: 50px;\n}\n\n.media-body {\n  margin-left: 20px;\n  margin-top: 10px;\n}\n\n.timeline {\n  margin-top: 60px;\n}\n\n.section {\n  margin-top: 20px;\n}\n\n.people {\n  margin-top: 20px;\n}\n\n.like-modal{\n  height: 350px;\n  overflow-y: auto;\n}\n\n.list-group-item {\n  border-color: black;\n  color: black;\n}\n\n.list-group-item:hover {\n  background-color: #ced4da;\n}\n\n.small-menu {\n  margin-top: 20px;\n}\n\n.user-form {\n  margin-top: 100px;\n  margin-left: 25%;\n  margin-right: 25%;\n}\n\n.small-image-suggestions {\n  margin-top: 20px;\n  height: 30px;\n  width: 30px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/feed/feed.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"user-form\">\n  <input type=\"text\" class=\"form-control\" placeholder=\"Search for people\" aria-label=\"Number\" matInput [formControl]=\"searchUser\" [matAutocomplete]=\"auto\">\n  <mat-autocomplete #auto=\"matAutocomplete\">\n    <mat-option *ngFor=\"let user of searchResult\" routerLink=\"/profile/{{user.username}}\">\n      <div class=\"media\">\n        <img class=\"small-image-suggestions img-responsive rounded-circle\" src=\"{{user.image}}\">\n        <div class=\"media-body\">\n          {{user.firstName}} {{user.lastName}}\n        </div>\n      </div>\n    </mat-option>\n  </mat-autocomplete>\n</form>\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-3\">\n      <div class=\"col-sm-3 fixed text-center\">\n        <div class=\"profile-pic\">\n          <img src={{user?.image}}\n               class=\"img-fluid\">\n        </div>\n        <div class=\"small-menu\">\n          <a class=\"list-group-item d-flex justify-content-between align-items-center\"\n             routerLink=\"/profile/{{user?.username}}\">\n            Profile\n          </a>\n          <a class=\"list-group-item d-flex justify-content-between align-items-center\"\n             data-toggle=\"modal\" href=\"#logoutModal\">\n            Logout\n          </a>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-sm-9 timeline\">\n      <div class=\"card border-primary\" *ngFor=\"let post of postsOfFriends\">\n        <h6 class=\"card-header\">\n          <div>\n            <div class=\"media\">\n              <a routerLink=\"/profile/{{user?.username}}\" target=\"_blank\">\n                <img class=\"small-image img-responsive rounded-circle\" src=\"{{post.image}}\">\n              </a>\n              <div class=\"media-body\">\n                  <span *ngIf=\"!post.isShared\">\n                    <a routerLink=\"/profile/{{post.username}}\" target=\"_blank\">{{post.firstName}} {{post.lastName}}</a>\n                  </span>\n                <span *ngIf=\"post.isShared\">\n                    <a routerLink=\"/profile/{{post.username}}\">{{post.firstName}} {{post.lastName}}</a> shared <a routerLink=\"/profile/{{post.sharedFrom}}\" target=\"_blank\">{{post.sharedFrom}}'s</a> post\n                </span>\n              </div>\n            </div>\n          </div>\n        </h6>\n        <div class=\"card-body comment-box\">\n          <h5 class=\"card-title\">{{post.postCaption}}</h5>\n          <hr>\n          <p class=\"card-text\" *ngIf=\"post.type !== 'IMAGE'\">{{post.postContent}}</p>\n\n          <div class=\"card-text\"\n               *ngIf=\"post.type === 'IMAGE'\">\n            <img [src]=post.postContent\n                 class=\"img-fluid shared-image\">\n          </div>\n\n        </div>\n        <div class=\"card-header\">\n          <div class=\"row\">\n            <div class=\"col-4 form-group text-center\">\n              <button class=\"btn btn-success btn-sm\"\n                      (click)=\"likePost(post._id, loggedInUser._id)\"\n                      *ngIf=\"post.likedBy.indexOf(loggedInUser._id) < 0\">\n                <span class=\"fas fa-thumbs-up\"></span>\n                <span class=\"d-none d-sm-block\">Like</span>\n              </button>\n              <button class=\"btn btn-danger btn-sm\"\n                      (click)=\"unlikePost(post._id, loggedInUser._id)\"\n                      *ngIf=\"post.likedBy.indexOf(loggedInUser._id) > -1\">\n                <span class=\"fas fa-thumbs-down\"></span>\n                <span class=\"d-none d-sm-block\">Unlike</span>\n              </button>\n            </div>\n\n            <div class=\"col-4 form-group text-center\">\n              <button class=\"btn btn-info btn-sm\"\n                      (click)=\"enableComment(post._id); comment='';\"\n                      *ngIf=\"enableCommentSection.indexOf(post._id) < 0\">\n                <span class=\"fas fa-comment\"></span>\n                <span class=\"d-none d-sm-block\">Comment</span>\n              </button>\n\n              <button class=\"btn btn-info btn-sm\"\n                      (click)=\"disableComment(post._id); comment='';\"\n                      *ngIf=\"enableCommentSection.indexOf(post._id) > -1\">\n                <span class=\"fas fa-comment\"></span>\n                <span class=\"d-none d-sm-block\">Comment</span>\n              </button>\n            </div>\n\n            <div class=\"col-4 form-group text-center\">\n              <button class=\"btn btn-warning btn-sm\"\n                      data-toggle=\"modal\"\n                      href=\"#sharePostModal\"\n                      (click)=\"selectPost(post)\">\n                <span class=\"fas fa-share\"></span>\n                <span class=\"d-none d-sm-block\">Share</span>\n              </button>\n            </div>\n          </div>\n\n          <div class=\"section\">\n            <div *ngIf=\"post.likedBy.indexOf(loggedInUser._id) > -1 && post.likes === 1\">\n              <a href=\"#likedThisPost\"\n                 (click)=\"peopleWhoLikedThePost(post.likedBy)\"\n                 data-toggle=\"modal\"\n                 class=\"people-like\">You like this\n              </a><hr>\n            </div>\n            <div *ngIf=\"post.likedBy.indexOf(loggedInUser._id) > -1 && post.likes > 1\">\n              <a href=\"#likedThisPost\"\n                 (click)=\"peopleWhoLikedThePost(post.likedBy)\"\n                 data-toggle=\"modal\"\n                 class=\"people-like\">You and {{post.likes - 1}} other like this\n              </a><hr>\n            </div>\n            <div *ngIf=\"post.likedBy.indexOf(loggedInUser._id) < 0 && post.likes > 0\">\n              <a href=\"#likedThisPost\"\n                 (click)=\"peopleWhoLikedThePost(post.likedBy)\"\n                 data-toggle=\"modal\"\n                 class=\"people-like\">{{post.likes}} like this\n              </a><hr></div>\n\n            <div *ngIf=\"enableCommentSection.indexOf(post._id) < 0 && post.comments.length > 0\"\n                 role=\"button\">\n                  <span (click)=\"enableComment(post._id)\">\n                    Show comments&nbsp;\n                    <div class=\"fas fa-comments\"></div>\n                  </span>\n            </div>\n\n            <div *ngIf=\"enableCommentSection.indexOf(post._id) > -1 && post.comments.length > 0\"\n                 role=\"button\">\n                  <span (click)=\"disableComment(post._id)\">\n                    Hide Comments&nbsp;\n                    <div class=\"fas fa-comments\"></div>\n                    <br><br>\n                  </span>\n            </div>\n          </div>\n\n          <form class=\"form-horizontal\"\n                name=\"submitCommentForm\"\n                role=\"form\"\n                novalidate\n                #submitCommentForm=\"ngForm\">\n            <div class=\"form-group\">\n              <div class=\"row\"\n                   *ngIf=\"enableCommentSection.indexOf(post._id) > -1 && newComment.indexOf(post._id) > -1\">\n                <div class=\"col-9 form-group\">\n                      <textarea name=\"comment\"\n                                rows=\"1\"\n                                class=\"form-control submit-comment\"\n                                [(ngModel)] =\"comment\"\n                                #submitCommentField = \"ngModel\"\n                                required>\n                      </textarea>\n                </div>\n                <div class=\"col-3 form-group\">\n                  <button class=\"btn btn-info btn-sm\"\n                          [disabled]=\"submitCommentForm.invalid\"\n                          (click)=\"submitComment(post._id, loggedInUser.username, loggedInUser.firstName, loggedInUser.lastName, comment); comment='';\">\n                    <span class=\"fas fa-paper-plane\"></span>\n                    <span class=\"d-none d-md-block\">Submit</span>\n                  </button>\n                </div>\n              </div>\n            </div>\n\n            <div *ngIf=\"enableCommentSection.indexOf(post._id) > -1\">\n              <div *ngFor=\"let comment of post.comments\">\n                <div class=\"media comment-box\">\n                  <div class=\"media-left\">\n                    <a routerLink=\"/profile/{{comment.username}}\" target=\"_blank\">\n                      <img class=\"img-responsive user-photo rounded-circle\" src={{comment.image}}>\n                    </a>\n                  </div>\n                  <div class=\"media-body\">\n                    <h4 class=\"media-heading\"><a routerLink=\"/profile/{{comment.username}}\" target=\"_blank\" >{{comment.commentator}}</a></h4>\n                    <p>{{comment.comment}}</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"sharePostModal\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Share this on your timeline ?</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n\n      <form class=\"form-horizontal modal-form\"\n            name=\"sharePostForm\"\n            role=\"form\"\n            novalidate\n            #sharePostForm=\"ngForm\">\n\n        <div class=\"form-group\">\n\n          <div class=\"modal-body\">\n\n            <input class=\"form-control\"\n                   placeholder=\"Caption...\"\n                   name = \"shareCaption\"\n                   [(ngModel)] =\"selectedPost.postCaption\"\n                   #sharedCaptionField = \"ngModel\"\n                   disabled\n                   required/><br>\n\n            <textarea *ngIf=\"selectedPost.type !== 'IMAGE'\"\n                      rows=\"15\"\n                      placeholder=\"Content...\"\n                      name = \"shareContent\"\n                      [(ngModel)] =\"selectedPost.postContent\"\n                      #sharedContentField = \"ngModel\"\n                      class=\"form-control\"\n                      disabled\n                      required></textarea>\n\n            <div *ngIf=\"selectedPost.type === 'IMAGE'\">\n              <img [src]=selectedPost.postContent\n                   class=\"img-fluid shared-image\">\n            </div>\n\n          </div>\n\n          <div class=\"modal-footer\">\n            <button type=\"submit\"\n                    class=\"btn btn-default btn-warning\"\n                    data-dismiss=\"modal\"\n                    (click)=\"sharePost(selectedPost.postCaption, selectedPost.postContent, selectedPost.username, selectedPost.type)\"\n                    [disabled]=\"sharePostForm.invalid\">\n              Share\n            </button>\n            <button type=\"button\"\n                    class=\"btn btn-default btn-danger\"\n                    data-dismiss=\"modal\">\n              Cancel\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" id=\"likedThisPost\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n      <div class=\"modal-header\">\n        <div class=\"modal-title\">People who like this post</div>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n\n      <div class=\"modal-body like-modal\" >\n        <div class=\"people\" *ngFor=\"let user of likedBy\">\n          <div class=\"media\">\n            <a routerLink=\"/profile/{{user.username}}\" target=\"_blank\">\n              <img class=\"small-image img-responsive rounded-circle\" src=\"{{user.image}}\">\n            </a>\n            <div class=\"media-body\">\n              <a routerLink=\"/profile/{{user.username}}\" target=\"_blank\">\n                {{user.firstName}} {{user.lastName}}\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"logoutModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n      <div class=\"modal-header\">\n        <div class=\"modal-title\">Are you sure wanna logout ?</div>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n\n      <div class=\"modal-footer\">\n        <button type=\"submit\"\n                class=\"btn btn-success\"\n                data-dismiss=\"modal\"\n                (click)=\"logout()\">\n          Yes\n        </button>\n\n        <button type=\"button\"\n                class=\"btn btn-danger\"\n                data-dismiss=\"modal\">\n          No\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/feed/feed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_post_service_client__ = __webpack_require__("../../../../../src/app/services/post.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service_client__ = __webpack_require__("../../../../../src/app/services/auth.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FeedComponent = /** @class */ (function () {
    function FeedComponent(router, userService, postService, authService, toastrService) {
        var _this = this;
        this.router = router;
        this.userService = userService;
        this.postService = postService;
        this.authService = authService;
        this.toastrService = toastrService;
        this.searchUser = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]();
        this.postsOfFriends = [];
        this.enableCommentSection = [];
        this.newComment = [];
        this.selectedPost = "";
        this.selectedImage = "";
        this.likedBy = [];
        this.searchUser
            .valueChanges
            .debounceTime(400)
            .subscribe(function (data) {
            if (data) {
                _this.userService
                    .searchUser(data)
                    .subscribe(function (users) {
                    _this.searchResult = users;
                });
            }
        });
    }
    FeedComponent.prototype.ngOnInit = function () {
        this.loggedInUser = this.authService.getLoggedInUser();
        this.findUserByUsername();
        this.getAllPosts();
    };
    FeedComponent.prototype.findUserByUsername = function () {
        var _this = this;
        this.username = this.loggedInUser.username;
        this.userService
            .findUserByUsername(this.username)
            .subscribe(function (user) {
            _this.user = user;
        });
    };
    FeedComponent.prototype.getAllPosts = function () {
        var _this = this;
        this.postService
            .getAllPosts()
            .subscribe(function (posts) {
            var postsOfFriends = [];
            var myFriends = _this.loggedInUser.myFriends;
            for (var post in posts) {
                if (_this.loggedInUser._id === posts[post].userId) {
                    postsOfFriends.push(posts[post]);
                }
                for (var f in myFriends) {
                    if ((myFriends[f].userId === posts[post].userId && myFriends[f].status === "FRIENDS")) {
                        postsOfFriends.push(posts[post]);
                    }
                }
            }
            _this.postsOfFriends = postsOfFriends;
        });
    };
    FeedComponent.prototype.selectPost = function (post) {
        this.selectedPost = JSON.parse(JSON.stringify(post));
    };
    FeedComponent.prototype.likePost = function (postId, userId) {
        var _this = this;
        this.postService
            .likePost(postId, userId)
            .subscribe(function (post) {
            _this.getAllPosts();
        });
    };
    FeedComponent.prototype.unlikePost = function (postId, userId) {
        var _this = this;
        this.postService
            .unlikePost(postId, userId)
            .subscribe(function (post) {
            _this.getAllPosts();
        });
    };
    FeedComponent.prototype.enableComment = function (postId) {
        this.newComment = [];
        this.enableCommentSection = [];
        this.newComment.push(postId);
        this.enableCommentSection.push(postId);
    };
    FeedComponent.prototype.disableComment = function (postId) {
        var index = this.enableCommentSection.indexOf(postId);
        this.enableCommentSection.splice(index, 1);
    };
    FeedComponent.prototype.submitComment = function (postId, username, firstName, lastName, comment) {
        var _this = this;
        var comments = {
            comment: comment,
            commentator: firstName + " " + lastName,
            username: username,
            image: this.loggedInUser.image
        };
        this.postService
            .submitComment(postId, comments)
            .subscribe(function (post) {
            _this.getAllPosts();
        });
    };
    FeedComponent.prototype.sharePost = function (postCaption, postContent, username, type) {
        var _this = this;
        var sharedPost = {
            username: this.loggedInUser.username,
            userId: this.loggedInUser._id,
            firstName: this.loggedInUser.firstName,
            lastName: this.loggedInUser.lastName,
            image: this.loggedInUser.image,
            postCaption: postCaption,
            postContent: postContent,
            isShared: true,
            sharedFrom: username,
            type: type
        };
        this.postService
            .createPost(sharedPost)
            .subscribe(function (post) {
            _this.getAllPosts();
            _this.toastrService.success("You shared a post from " + username, "AWESOME", {
                closeButton: true
            });
        });
    };
    FeedComponent.prototype.selectImage = function (file) {
        var _this = this;
        this.fileToShare = file[0];
        this.filename = file[0].name;
        var reader = new FileReader();
        reader.onload = function (event) {
            _this.selectedImage = event.target.result;
        };
        reader.readAsDataURL(this.fileToShare);
    };
    FeedComponent.prototype.peopleWhoLikedThePost = function (userIds) {
        var users = [];
        for (var u in userIds) {
            this.userService
                .findUserById(userIds[u])
                .subscribe(function (user) {
                users.push(user);
            });
        }
        this.likedBy = users;
    };
    FeedComponent.prototype.logout = function () {
        var _this = this;
        this.userService
            .logout(this.loggedInUser)
            .subscribe(function (res) {
            localStorage.removeItem('loggedInUser');
            _this.router.navigate(['/login']);
            _this.toastrService.warning("User Successfully Logged Out", "", {
                closeButton: true
            });
        });
    };
    FeedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-feed',
            template: __webpack_require__("../../../../../src/app/views/feed/feed.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/feed/feed.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_post_service_client__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service_client__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */]])
    ], FeedComponent);
    return FeedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-toggler {\n  border-color: white;\n}\n\n.navbar-brand {\n  color: #fff !important;\n}\n\n.small-image {\n  height: 40px;\n  width: 40px;\n  margin-left: 15px;\n  margin-right: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm fixed-top navbar-dark bg-primary\">\n  <div class=\"mr-auto\">\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <a class=\"navbar-brand\" routerLink=\"/\">Get Socio</a>\n  </div>\n  <div class=\"collapse navbar-collapse mr-auto\" id=\"navbarColor01\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\" *ngIf=\"!showLoggedInIcons\">\n        <a class=\"nav-link\"\n           routerLink=\"/login\">Login</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!showLoggedInIcons\">\n        <a class=\"nav-link\"\n           routerLink=\"/register\">Register</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"showLoggedInIcons\">\n        <div class=\"row\">\n          <img class=\"small-image img-responsive rounded-circle\" src=\"{{loggedInUser.image}}\">\n          <a class=\"nav-link\"\n             routerLink=\"/profile/{{loggedInUser.username}}\">Welcome, {{loggedInUser.firstName}} {{loggedInUser.lastName}}\n          </a>\n        </div>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/views/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service_client__ = __webpack_require__("../../../../../src/app/services/auth.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.setHeaderIcons();
    };
    HeaderComponent.prototype.setHeaderIcons = function () {
        this.loggedInUser = this.authService.getLoggedInUser();
        if (this.loggedInUser) {
            this.showLoggedInIcons = true;
        }
        else {
            this.showLoggedInIcons = false;
        }
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/views/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service_client__["a" /* AuthService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div *ngIf=\"loggedInUser\">\n  <app-feed></app-feed>\n</div>\n<div *ngIf=\"!loggedInUser\">\n  <app-landing-page></app-landing-page>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service_client__ = __webpack_require__("../../../../../src/app/services/auth.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService) {
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.loggedInUser = this.authService.getLoggedInUser();
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/views/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service_client__["a" /* AuthService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/landing-page/landing-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: 'PT Sans Narrow', sans-serif;\n  font-weight: 200 !important;\n}\n\n.btn-xl {\n  text-transform: uppercase;\n  padding: 1.5rem 3rem;\n  font-size: 0.9rem;\n  font-weight: 700;\n  letter-spacing: 0.1rem;\n}\n\n.rounded-pill {\n  border-radius: 5rem;\n}\n\nheader.masthead {\n  position: relative;\n  overflow: hidden;\n  padding-top: calc(7rem + 72px);\n  padding-bottom: 7rem;\n  background: -webkit-gradient(linear, left bottom, left top, from(#ff6a00), to(#2c3e50));\n  background: linear-gradient(0deg, #ff6a00 0%, #2c3e50 100%);\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-attachment: scroll;\n  background-size: cover;\n}\n\nheader.masthead .masthead-content {\n  z-index: 1;\n  position: relative;\n}\n\nheader.masthead .masthead-content .masthead-heading {\n  font-size: 4rem;\n}\n\nheader.masthead .bg-circle {\n  z-index: 0;\n  position: absolute;\n  border-radius: 100%;\n  background: -webkit-gradient(linear, left bottom, left top, from(#ff6a00), to(#2c3e50));\n  background: linear-gradient(0deg, #ff6a00 0%, #2c3e50 100%);\n}\n\nheader.masthead .bg-circle-1 {\n  height: 90rem;\n  width: 90rem;\n  bottom: -55rem;\n  left: -55rem;\n}\n\nheader.masthead .bg-circle-2 {\n  height: 50rem;\n  width: 50rem;\n  top: -25rem;\n  right: -25rem;\n}\n\nheader.masthead .bg-circle-3 {\n  height: 20rem;\n  width: 20rem;\n  bottom: -10rem;\n  right: 5%;\n}\n\nheader.masthead .bg-circle-4 {\n  height: 30rem;\n  width: 30rem;\n  top: -5rem;\n  right: 35%;\n}\n\n@media (min-width: 992px) {\n  header.masthead {\n    padding-top: calc(10rem + 55px);\n    padding-bottom: 10rem;\n  }\n  header.masthead .masthead-content .masthead-heading {\n    font-size: 6rem;\n  }\n}\n\n.btn-secondary {\n  background-color: #ff6a00;\n  border-color: #ff6a00;\n}\n\n.btn-secondary:active, .btn-secondary:focus, .btn-secondary:hover {\n  background-color: #cc5500 !important;\n  border-color: #cc5500 !important;\n}\n\n.btn-secondary:focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(255, 106, 0, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(255, 106, 0, 0.5);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/landing-page/landing-page.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"masthead text-center text-white\">\n  <div class=\"masthead-content\">\n    <div class=\"container\">\n      <h1 class=\"masthead-heading mb-0\">GET SOCIO</h1>\n      <h4 class=\"masthead-subheading mb-0\">Connect with your friends across the world</h4>\n      <a routerLink=\"/register\" class=\"btn btn-warning btn-xl rounded-pill mt-5\">Get Started</a>\n    </div>\n  </div>\n  <div class=\"bg-circle-1 bg-circle\"></div>\n  <div class=\"bg-circle-2 bg-circle\"></div>\n  <div class=\"bg-circle-3 bg-circle\"></div>\n  <div class=\"bg-circle-4 bg-circle\"></div>\n</header>\n\n<section>\n  <div class=\"container\">\n    <div class=\"row align-items-center\">\n      <div class=\"col-lg-6 order-lg-2\">\n        <div class=\"p-5\">\n          <img class=\"img-fluid rounded-circle\" src=\"http://www.cctvwhzg.com/u/cms/www/201610/04183355mkc1.jpg\" alt=\"\">\n        </div>\n      </div>\n      <div class=\"col-lg-6 order-lg-1\">\n        <div class=\"p-5\">\n          <h2 class=\"display-4\">Make friends...</h2>\n          <p>There are many \"friends\" who are more akin to connections than buddies; Stay connected with them and check for their updates...</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section>\n  <div class=\"container\">\n    <div class=\"row align-items-center\">\n      <div class=\"col-lg-6\">\n        <div class=\"p-5\">\n          <img class=\"img-fluid rounded-circle\" src=\"https://i.pinimg.com/originals/b5/bd/0b/b5bd0bb64864be6985b573c0d2d8668a.jpg\" alt=\"\">\n        </div>\n      </div>\n      <div class=\"col-lg-6\">\n        <div class=\"p-5\">\n          <h2 class=\"display-4\">Share your moments...</h2>\n          <p>Friendship is all about sharing. Express your thoughts by writing blogs or post an image to share what's on your mind.... </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section>\n  <div class=\"container\">\n    <div class=\"row align-items-center\">\n      <div class=\"col-lg-6 order-lg-2\">\n        <div class=\"p-5\">\n          <img class=\"img-fluid rounded-circle\" src=\"https://thumbs.dreamstime.com/b/facebook-like-button-johor-malaysia-july-icon-voting-system-used-to-rate-user-comments-low-shu-ching-hand-holding-32860742.jpg\" alt=\"\">\n        </div>\n      </div>\n      <div class=\"col-lg-6 order-lg-1\">\n        <div class=\"p-5\">\n          <h2 class=\"display-4\">Show Love...</h2>\n          <p>Share your feelings by liking and commenting on posts, sharing blogs, etc..</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/views/landing-page/landing-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent() {
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-landing-page',
            template: __webpack_require__("../../../../../src/app/views/landing-page/landing-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/landing-page/landing-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login {\n  margin-left: 25%;\n  margin-right: 25%;\n  margin-top: 200px;\n  margin-bottom: 100px;\n}\n\n.fa {\n  font-size: 20px;\n}\n\n.pull-right {\n  margin-right: 0px;\n}\n\n.form-control:focus {\n  border-color: #2c3e50 !important;\n  -webkit-box-shadow: none;\n          box-shadow: none\n}\n\n.facebook,\n.facebook:hover,\n.facebook:active,\n.facebook:focus,\n.facebook:active:focus {\n  border-color: #3B5998 !important;\n  background-color: #3B5998 !important;\n}\n\n.twitter,\n.twitter:hover,\n.twitter:active,\n.twitter:focus,\n.twitter:active:focus {\n  border-color: #00aced !important;\n  background-color: #00aced !important;\n}\n\na.facebook, a.twitter, a.google {\n  color: white !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"login text-center\">\n  <h3>Sign in</h3>\n  <form class=\"form-horizontal\"\n        role=\"form\"\n        name=\"loginForm\"\n        novalidate\n        #loginForm=\"ngForm\">\n\n    <br>\n    <div *ngIf=\"errorMessage\"\n         class=\"text-center text-danger\">{{errorMessage}}</div>\n    <br>\n\n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\">\n          <i class=\"fa fa-user\"></i>\n        </span>\n        <input type=\"text\"\n               id=\"username\"\n               class=\"form-control\"\n               [ngClass]=\"{'is-invalid': usernameField.touched && usernameField.invalid}\"\n               placeholder=\"Username\"\n               name = \"username\"\n               [(ngModel)] =\"username\"\n               #usernameField = \"ngModel\"\n               required />\n        <div *ngIf=\"usernameField.touched && usernameField.invalid\"\n             class=\"invalid-feedback\">\n          Username is required\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\">\n            <i class=\"fa fa-lock\"></i>\n        </span>\n        <input type=\"password\"\n               id=\"password\"\n               class=\"form-control\"\n               [ngClass]=\"{'is-invalid': passwordField.touched && passwordField.invalid}\"\n               placeholder=\"Password\"\n               name = \"password\"\n               [(ngModel)] =\"password\"\n               #passwordField = \"ngModel\"\n               required />\n        <div *ngIf=\"passwordField.touched && passwordField.invalid\"\n             class=\"invalid-feedback\">\n          Password is required\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <button type=\"submit\"\n              class=\"btn btn-default btn-primary btn-block\"\n              (click)=\"login(username, password)\"\n              [disabled] = \"loginForm.invalid\">\n        Login\n      </button>\n    </div>\n  </form>\n\n  <div class=\"row pull-right\">\n    <a routerLink=\"/register\">Not a member?</a>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service_client__ = __webpack_require__("../../../../../src/app/services/auth.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, authService, toastrService, router) {
        this.userService = userService;
        this.authService = authService;
        this.toastrService = toastrService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        this.userService
            .login(username, password)
            .subscribe(function (user) {
            _this.authService.loggedInUser = user;
            _this.router.navigate(['/profile', user.username]);
            _this.toastrService.success("Successfully Logged In", "", {
                closeButton: true
            });
        }, function (err) {
            _this.errorMessage = "Username and password doesn't match. Try again";
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/views/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service_client__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".register {\n  margin-left: 25%;\n  margin-right: 25%;\n  margin-top: 200px;\n  margin-bottom: 100px;\n}\n\n.pull-right {\n  margin-right: 0px;\n}\n\n.form-control:focus {\n  border-color: #2c3e50 !important;\n  -webkit-box-shadow: none;\n          box-shadow: none\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"register text-center\">\n  <h3>Register</h3>\n\n  <form class=\"form-horizontal\"\n        role=\"form\"\n        name=\"registerForm\"\n        novalidate\n        #registerForm=\"ngForm\">\n\n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\">\n           <i class=\"fa fa-ellipsis-h\"></i>\n        </span>\n        <input type=\"text\"\n                id=\"firstName\"\n                class=\"form-control\"\n                [ngClass]=\"{'is-invalid': firstNameField.touched && firstNameField.invalid}\"\n                placeholder=\"First name\"\n                name = \"firstName\"\n                [(ngModel)] =\"firstName\"\n                #firstNameField = \"ngModel\"\n                required />\n\n        <div *ngIf=\"firstNameField.touched && firstNameField.invalid\"\n             class=\"invalid-feedback\">\n          First name is required\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\">\n            <i class=\"fa fa-ellipsis-h\"></i>\n        </span>\n        <input type=\"text\"\n               id=\"lastName\"\n               class=\"form-control\"\n               [ngClass]=\"{'is-invalid': lastNameField.touched && lastNameField.invalid}\"\n               placeholder=\"Last name\"\n               name = \"lastName\"\n               [(ngModel)] =\"lastName\"\n               #lastNameField = \"ngModel\"\n               required />\n\n        <div *ngIf=\"lastNameField.touched && lastNameField.invalid\"\n             class=\"invalid-feedback\">\n          Last name is required\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <div class=\"input-group\">\n                <span class=\"input-group-addon\">\n                    <i class=\"fa fa-user\"></i>\n                </span>\n        <input type=\"text\"\n               id=\"username\"\n               class=\"form-control\"\n               [ngClass]=\"{'is-invalid': (usernameField.touched && usernameField.invalid) || errorMessage}\"\n               placeholder=\"Username\"\n               name = \"username\"\n               [(ngModel)] =\"username\"\n               #usernameField = \"ngModel\"\n               required />\n\n        <div *ngIf=\"usernameField.touched && usernameField.invalid\"\n             class=\"invalid-feedback\">\n          User name is required\n        </div>\n        <div *ngIf=\"errorMessage\"\n             class=\"invalid-feedback\">\n          {{errorMessage}}\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\">\n            <i class=\"fa fa-lock\"></i>\n        </span>\n        <input type=\"password\"\n               id=\"password\"\n               class=\"form-control\"\n               [ngClass]=\"{'is-invalid': (passwordField.touched && passwordField.invalid)}\"\n               placeholder=\"Password\"\n               name = \"password\"\n               [(ngModel)] =\"password\"\n               #passwordField = \"ngModel\"\n               required />\n\n        <div *ngIf=\"passwordField.touched && passwordField.invalid\"\n             class=\"invalid-feedback\">\n          Password is required\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\">\n            <i class=\"fa fa-lock\"></i>\n        </span>\n        <input type=\"password\"\n               id=\"verifyPassword\"\n               class=\"form-control\"\n               [ngClass]=\"{'is-invalid': (verifyPasswordField.touched && verifyPasswordField.valid) && (password !== verifyPassword) || (verifyPasswordField.touched &&verifyPasswordField.invalid)}\"\n               placeholder=\"Verify Password\"\n               name = \"verifyPassword\"\n               [(ngModel)] =\"verifyPassword\"\n               #verifyPasswordField = \"ngModel\"\n               required />\n\n        <div *ngIf=\"verifyPasswordField.touched && verifyPasswordField.valid && (password !== verifyPassword) || (verifyPasswordField.touched &&verifyPasswordField.invalid)\"\n             class=\"invalid-feedback\">\n          Sorry, the passwords must match\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <button type=\"submit\"\n              class=\"btn btn-block btn-primary btn-default\"\n              [disabled] = \"(registerForm.invalid) || (password !== verifyPassword)\"\n              (click)=\"register(firstName, lastName, username, password)\">\n        Sign up\n      </button>\n    </div>\n\n    <div class=\"row pull-right\">\n      <a routerLink=\"/login\">Already a member?</a>\n    </div>\n\n  </form>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/views/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service_client__ = __webpack_require__("../../../../../src/app/services/auth.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, authService, toastrService, router) {
        this.userService = userService;
        this.authService = authService;
        this.toastrService = toastrService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function (firstName, lastName, username, password) {
        var _this = this;
        this.userService
            .findUserByUsername(username)
            .subscribe(function (user) {
            _this.errorMessage = "Username already exists. Try a different Username";
        }, function (err) {
            var newUser = {
                firstName: firstName,
                lastName: lastName,
                username: username,
                password: password,
                email: "",
                phone: ""
            };
            _this.userService
                .register(newUser)
                .subscribe(function (user) {
                _this.authService.loggedInUser = user;
                _this.router.navigate(['/profile', user.username]);
                _this.toastrService.success("Registration successful", "", {
                    closeButton: true
                });
            });
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/views/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service_client__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/user/friends/friends.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".friend-list {\n  margin-top: 100px;\n}\n\n.fa-circle {\n  color: #2c3e50;\n}\n\n.friends-list {\n  margin-top: 30px;\n  margin-left: 10%;\n  margin-right: 10%;\n  margin-bottom: 30px;\n}\n\n.small-image {\n  margin-left: -50px;\n  margin-right: 20px;\n  height: 50px;\n  width: 50px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/user/friends/friends.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-3\">\n      <app-sidemenu></app-sidemenu>\n    </div>\n    <div class=\"col-sm-9 friend-list\" *ngIf=\"friendsList.length > 0\">\n      <ul class=\"list-group list-group-flush friends-list\">\n        <li class=\"list-group-item\" *ngFor=\"let user of friendsList\">\n          <div class=\"float-left\">\n            <a routerLink=\"/profile/{{user.username}}\" target=\"_blank\">\n              <img class=\"small-image img-responsive rounded-circle\" src=\"{{user.image}}\">\n            </a>\n            <a routerLink=\"/profile/{{user.username}}\" target=\"_blank\">\n              {{user.firstName}} &nbsp; {{user.lastName}}\n            </a>\n          </div>\n          <div class=\"float-right\">\n            <div class=\"btn-group\" role=\"group\">\n              <button type=\"button\" class=\"btn btn-success\">\n                <span class=\"fas fa-user\"></span>&nbsp;\n                Friends\n              </button>\n              <div class=\"btn-group\" role=\"group\">\n                <button type=\"button\" class=\"btn btn-success dropdown-toggle send-req\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"></button>\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"btnGroupDrop3\" x-placement=\"bottom-start\">\n                  <button class=\"btn dropdown-item\"\n                          (click)=\"removeFriend(user?._id)\">\n                    <span class=\"fas fa-user-times\">&nbsp;</span>\n                    Remove Friend\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-sm-9 friend-list\" *ngIf=\"friendsList.length === 0\">\n      <div class=\"text-center\">\n          <span class=\"fa-stack fa-4x\">\n              <i class=\"fas fa-circle fa-stack-2x\"></i>\n              <i class=\"fas fa-user fa-stack-1x fa-inverse\"></i>\n          </span><br><br>\n        <h4>Add friends to see here</h4>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/user/friends/friends.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service_client__ = __webpack_require__("../../../../../src/app/services/auth.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FriendsComponent = /** @class */ (function () {
    function FriendsComponent(route, router, userService, authService, toastrService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.authService = authService;
        this.toastrService = toastrService;
        this.friendsList = [];
    }
    FriendsComponent.prototype.ngOnInit = function () {
        this.loggedInUser = this.authService.getLoggedInUser();
        this.findUsername();
    };
    FriendsComponent.prototype.findUsername = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.username = params['username'];
            if (_this.loggedInUser.username === _this.username) {
                _this.friendList(_this.loggedInUser.username);
            }
            else {
                _this.router.navigate(['/profile', _this.loggedInUser.username]);
            }
        });
    };
    FriendsComponent.prototype.friendList = function (username) {
        var _this = this;
        this.userService
            .findUserByUsername(username)
            .subscribe(function (user) {
            var friendsList = [];
            if (user.username === _this.loggedInUser.username) {
                for (var f in user.myFriends) {
                    if (user.myFriends[f].status === "FRIENDS") {
                        _this.userService
                            .findUserById(user.myFriends[f].userId)
                            .subscribe(function (friends) {
                            friendsList.push(friends);
                        });
                    }
                }
            }
            _this.friendsList = friendsList;
        });
    };
    FriendsComponent.prototype.removeFriend = function (userId) {
        var _this = this;
        this.userService
            .deleteFriendRequest(this.loggedInUser._id, userId)
            .subscribe(function (user) {
            _this.friendList(_this.loggedInUser.username);
            _this.userService
                .findUserById(userId)
                .subscribe(function (friendUser) {
                _this.toastrService.info("You have unfriended " + friendUser.firstName, "", {
                    closeButton: true
                });
            });
        });
    };
    FriendsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-friends',
            template: __webpack_require__("../../../../../src/app/views/user/friends/friends.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/user/friends/friends.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__services_auth_service_client__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */]])
    ], FriendsComponent);
    return FriendsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/user/pending-requests/pending-requests.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pending-friend-list {\n  margin-top: 30px;\n  margin-left: 10%;\n  margin-right: 10%;\n  margin-bottom: 30px;\n}\n\n.btn {\n  border-radius: 8px;\n}\n\n.pending-req {\n  margin-top: 100px;\n}\n\n.small-image {\n  margin-left: -50px;\n  margin-right: 20px;\n  height: 50px;\n  width: 50px;\n}\n\n.text-align {\n  margin-right: 30%;\n  margin-left: 30%;\n}\n\n.fa-circle {\n  color: #2c3e50;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/user/pending-requests/pending-requests.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-3\">\n      <app-sidemenu (changeCallback)=\"sidebarChange($event)\"></app-sidemenu>\n    </div>\n    <div class=\"col-sm-9 pending-req\" *ngIf=\"pendingRequests.length > 0\">\n      <ul class=\"list-group list-group-flush pending-friend-list\">\n        <li class=\"list-group-item\" *ngFor=\"let user of pendingRequests\">\n          <div class=\"float-left\">\n            <a routerLink=\"/profile/{{user.username}}\" target=\"_blank\">\n              <img class=\"small-image img-responsive rounded-circle\" src=\"{{user.image}}\">\n            </a>\n            <a routerLink=\"/profile/{{user.username}}\" target=\"_blank\">\n            {{user.firstName}} &nbsp; {{user.lastName}}\n            </a>\n          </div>\n          <div class=\"float-right\">\n            <button class=\"btn btn-success\"\n                    (click)=\"acceptFriendRequest(user._id)\">\n              Accept\n            </button>\n            <button class=\"btn btn-danger\"\n                    (click)=\"deleteFriendRequest(user._id)\">\n              Cancel\n            </button>\n          </div>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-sm-9 pending-req\" *ngIf=\"pendingRequests.length === 0\">\n      <div class=\"text-center\">\n          <span class=\"fa-stack fa-4x\">\n              <i class=\"fas fa-circle fa-stack-2x\"></i>\n              <i class=\"fas fa-check fa-stack-1x fa-inverse\"></i>\n          </span><br><br>\n        <h4>All caught up</h4>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/user/pending-requests/pending-requests.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendingRequestsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service_client__ = __webpack_require__("../../../../../src/app/services/auth.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PendingRequestsComponent = /** @class */ (function () {
    function PendingRequestsComponent(route, router, userService, authService, toastrService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.authService = authService;
        this.toastrService = toastrService;
        this.pendingRequests = [];
    }
    PendingRequestsComponent.prototype.ngOnInit = function () {
        this.loggedInUser = this.authService.getLoggedInUser();
        this.findUsername();
    };
    PendingRequestsComponent.prototype.findUsername = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.username = params['username'];
            if (_this.loggedInUser.username === _this.username) {
                _this.checkPendingRequests(_this.loggedInUser.username);
            }
            else {
                _this.router.navigate(['/profile', _this.loggedInUser.username]);
            }
        });
    };
    PendingRequestsComponent.prototype.checkPendingRequests = function (username) {
        var _this = this;
        this.userService
            .findUserByUsername(username)
            .subscribe(function (user) {
            var pendingRequests = [];
            if (user.username === _this.loggedInUser.username) {
                for (var f in user.myFriends) {
                    if (!user.myFriends[f].sentRequest && user.myFriends[f].status === "PENDING") {
                        _this.userService
                            .findUserById(user.myFriends[f].userId)
                            .subscribe(function (pendingUser) {
                            pendingRequests.push(pendingUser);
                        });
                    }
                }
            }
            _this.pendingRequests = pendingRequests;
        });
    };
    PendingRequestsComponent.prototype.acceptFriendRequest = function (userId) {
        var _this = this;
        this.userService
            .acceptFriendRequest(this.loggedInUser._id, userId)
            .subscribe(function (user) {
            _this.checkPendingRequests(_this.loggedInUser.username);
            if (_this.sidebarChangeCallback) {
                _this.sidebarChangeCallback();
            }
            _this.userService
                .findUserById(userId)
                .subscribe(function (friendUser) {
                _this.toastrService.info("You are now friends with " + friendUser.firstName, "AWESOME", {
                    closeButton: true
                });
            });
        });
    };
    PendingRequestsComponent.prototype.deleteFriendRequest = function (userId) {
        var _this = this;
        this.userService
            .deleteFriendRequest(this.loggedInUser._id, userId)
            .subscribe(function (user) {
            _this.checkPendingRequests(_this.loggedInUser.username);
            if (_this.sidebarChangeCallback) {
                _this.sidebarChangeCallback();
            }
        });
    };
    PendingRequestsComponent.prototype.sidebarChange = function (event) {
        this.sidebarChangeCallback = event;
    };
    PendingRequestsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pending-requests',
            template: __webpack_require__("../../../../../src/app/views/user/pending-requests/pending-requests.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/user/pending-requests/pending-requests.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__services_auth_service_client__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */]])
    ], PendingRequestsComponent);
    return PendingRequestsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/user/sidemenu/sidemenu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-btn {\n  margin-top: 20px;\n  margin-left: 30px;\n  padding: 10px 40px;\n}\n\n.modal-form {\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\n.text-center {\n  text-align : center;\n  margin: auto;\n}\n\n.sidemenu {\n  margin-top: 100px;\n}\n\n@media (min-width: 576px){\n  .fixed {\n    width: 100%;\n    height : 100%;\n    position: absolute;\n  }\n\n  .col-sm-3 {\n    max-width: 100%;\n  }\n}\n\n.btn {\n  white-space: normal;\n}\n\n.send-req, .list-group {\n  margin-top: 20px;\n}\n\n.list-group-item {\n  border-color: black;\n  color: black;\n}\n\n.list-group-item:hover {\n  background-color: #ced4da;\n}\n\n.friends-of-friends {\n  margin-left: -40px;\n  margin-top: 20px;\n  color: #2c3e50;\n  position: absolute;\n}\n\n.btn {\n  border-radius: 8px;\n}\n\n#fileUpload{\n  display:none;\n}\n\n.profile-pic .centered {\n  opacity: 0;\n  position: absolute;\n  -webkit-transition: all 0.4s ease-in-out 0s;\n  transition: all 0.4s ease-in-out 0s;\n}\n\n.profile-pic:hover .centered,\n.profile-pic.active .centered {\n  opacity: 1;\n}\n\n.centered {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  text-align: center;\n  text-transform: uppercase;\n  background-color: #000000;\n  color: #ffffff;\n  opacity: 0.8;\n}\n\n.profile-pic {\n  position: relative;\n  text-align: center;\n  color: black;\n}\n\n.img-fluid {\n  width: 100%;\n  height: 250px !important;\n}\n\n.dropdown-item, .dropdown-menu {\n  color : black;\n  background-color : #dddddd;\n}\n\n.small-image {\n  height: 50px;\n  width: 50px;\n}\n\n.media-body {\n  margin-left: 20px;\n  margin-top: 10px;\n}\n\n.profile-name {\n  color: #2c3e50;\n}\n\n.people {\n  margin-top: 20px;\n}\n\n.friends-modal{\n  height: 400px;\n  overflow-y: auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/user/sidemenu/sidemenu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-3 fixed text-center sidemenu\">\n  <div class=\"profile-pic\">\n    <img src={{user?.image}}\n         class=\"img-fluid profile-picture\">\n    <div class=\"centered\" *ngIf=\"user?.username === loggedInUser?.username\">\n      <label for=\"fileUpload\">change picture</label>\n      <input type=\"file\"\n             id=\"fileUpload\"\n             accept=\"image/*\"\n             (change)=\"uploadProfilePicture($event.target.files, user._id)\">\n    </div>\n  </div>\n\n  <div>\n    <a class=\"profile-name text-uppercase\">\n      {{user?.firstName}} {{user?.lastName}}\n    </a>\n  </div>\n\n  <div *ngIf=\"user?.username !== loggedInUser?.username && !pendingRequest && !friends\">\n    <button type=\"submit\"\n            class=\"btn btn-primary send-req\"\n            (click)=\"sendRequest(user?._id)\">\n      <span class=\"fas fa-user-plus\"></span>&nbsp;\n      Send Friend Request\n    </button>\n  </div>\n\n  <div class=\"btn-group\" role=\"group\"\n       *ngIf=\"user?.username !== loggedInUser?.username && pendingRequest\">\n    <button type=\"button\" class=\"btn btn-info send-req\">\n      <span class=\"fas fa-clock\">&nbsp;</span>\n      Friend Request Pending\n    </button>\n    <div class=\"btn-group\" role=\"group\">\n      <button type=\"button\" class=\"btn btn-info dropdown-toggle send-req\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"></button>\n      <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"btnGroupDrop3\" x-placement=\"bottom-start\">\n        <button class=\"btn dropdown-item\"\n                (click)=\"cancelRequest(user?._id)\">\n          <span class=\"fas fa-user-times\">&nbsp;</span>\n          Cancel Friend Request\n        </button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"btn-group\" role=\"group\"\n       *ngIf=\"user?.username !== loggedInUser?.username && friends\">\n    <button type=\"button\" class=\"btn btn-success send-req\">\n      <span class=\"fas fa-user\"></span>&nbsp;\n      Friends\n    </button>\n    <div class=\"btn-group\" role=\"group\">\n      <button type=\"button\" class=\"btn btn-success dropdown-toggle send-req\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"></button>\n      <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"btnGroupDrop3\" x-placement=\"bottom-start\">\n        <button class=\"btn dropdown-item\"\n                (click)=\"cancelRequest(user?._id)\">\n          <span class=\"fas fa-user-times\">&nbsp;</span>\n          Remove Friend\n        </button>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"user?.username !== loggedInUser?.username && friends\">\n    <a href=\"#friendsModal\"\n       data-toggle=\"modal\"\n       class=\"friends-of-friends\"\n       (click)=\"friendsOfUser(user.myFriends)\">\n      <span class=\"fas fa-user\">&nbsp;</span>\n      Friends\n    </a>\n  </div>\n\n  <div *ngIf=\"user?.username === loggedInUser?.username\">\n    <ul class=\"list-group \">\n      <a class=\"list-group-item d-flex justify-content-between align-items-center\"\n         routerLink=\"/\">\n        News Feed\n      </a>\n      <a class=\"list-group-item d-flex justify-content-between align-items-center\"\n         routerLink=\"/profile/{{loggedInUser.username}}/friends\">\n        Friends\n      </a>\n      <a class=\"list-group-item d-flex justify-content-between align-items-center\"\n         target=\"_blank\"\n         routerLink=\"/profile/{{loggedInUser.username}}/pending-requests\">\n        Pending Requests\n        <span class=\"badge badge-primary badge-pill\">{{pendingRequests?.length}}</span>\n      </a>\n      <a class=\"list-group-item d-flex justify-content-between align-items-center\"\n         data-toggle=\"modal\" href=\"#updateProfileModal\"\n         (click)=\"selectUser()\">\n        Update Profile\n      </a>\n      <a class=\"list-group-item d-flex justify-content-between align-items-center\"\n         data-toggle=\"modal\" href=\"#updatePasswordModal\"\n         (click)=\"passwordField = {}\">\n        Update Password\n      </a>\n      <a class=\"list-group-item d-flex justify-content-between align-items-center\"\n         data-toggle=\"modal\" href=\"#logoutModal\">\n        Logout\n      </a>\n    </ul>\n  </div>\n</div>\n\n<div *ngIf=\"user\" class=\"profile\">\n  <div class=\"modal fade\" id=\"updateProfileModal\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Update Profile</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n\n        <form class=\"form-horizontal modal-form\">\n\n          <br>\n\n          <div *ngIf=\"firstNameField.touched && firstNameField.invalid\"\n               class=\"text-center text-danger\">First name is required</div>\n\n          <br>\n\n          <div *ngIf=\"lastNameField.touched && lastNameField.invalid\"\n               class=\"text-center text-danger\">Last name is required</div>\n\n          <div class=\"form-group\">\n            <label for=\"firstName\">First Name</label>\n            <div class=\"input-group\">\n                  <span class=\"input-group-addon\">\n                     <i class=\"fa fa-ellipsis-h\"></i>\n                  </span>\n              <input type=\"text\"\n                     id=\"firstName\"\n                     class=\"form-control\"\n                     placeholder=\"First Name\"\n                     name = \"firstNameField\"\n                     [(ngModel)] =\"selectedUser.firstName\"\n                     #firstNameField = \"ngModel\"\n                     required/>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"lastname\">Last Name</label>\n            <div class=\"input-group\">\n                  <span class=\"input-group-addon\">\n                      <i class=\"fa fa-ellipsis-h\"></i>\n                  </span>\n              <input type=\"text\"\n                     id = \"lastname\"\n                     class=\"form-control\"\n                     placeholder=\"Last Name\"\n                     name = \"lastNameField\"\n                     [(ngModel)]=\"selectedUser.lastName\"\n                     #lastNameField = \"ngModel\"\n                     required/>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <div class=\"input-group\">\n                      <span class=\"input-group-addon\">\n                          <i class=\"fa fa-envelope\"></i>\n                      </span>\n              <input type=\"email\"\n                     id=\"email\"\n                     class=\"form-control\"\n                     name = \"emailField\"\n                     placeholder=\"Email address\"\n                     [(ngModel)]=\"selectedUser.email\">\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"phone\">Phone</label>\n            <div class=\"input-group\">\n                      <span class=\"input-group-addon\">\n                          <i class=\"fa fa-phone\"></i>\n                      </span>\n              <input type=\"tel\"\n                     id=\"phone\"\n                     class=\"form-control\"\n                     name = \"phoneField\"\n                     placeholder=\"Phone number\"\n                     [(ngModel)]=\"selectedUser.phone\">\n            </div>\n          </div>\n\n          <div class=\"modal-footer\">\n            <button type=\"submit\"\n                    class=\"btn btn-success\"\n                    data-dismiss=\"modal\"\n                    [disabled] = \"firstNameField.invalid || lastNameField.invalid\"\n                    (click)=\"updateProfile(selectedUser)\">\n              Update\n            </button>\n\n            <button type=\"button\"\n                    class=\"btn btn-danger\"\n                    data-dismiss=\"modal\">\n              Cancel\n            </button>\n          </div>\n        </form>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"modal fade\" id=\"updatePasswordModal\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Update Password</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n\n        <form class=\"form-horizontal modal-form\"\n              name=\"passwordForm\"\n              novalidate\n              #pwdForm=\"ngForm\">\n\n          <br>\n\n          <div *ngIf=\"verifyNewPasswordField.valid && verifyNewPasswordField.touched && (passwordField.newPassword !== passwordField.verifyNewPassword)\"\n               class=\"text-center text-danger\">Passwords must match</div>\n\n          <div class=\"form-group\">\n            <label for=\"newPassword\">New Password</label>\n            <div class=\"input-group\">\n                  <span class=\"input-group-addon\">\n                     <i class=\"fa fa-lock\"></i>\n                  </span>\n              <input type=\"password\"\n                     id=\"newPassword\"\n                     class=\"form-control\"\n                     placeholder=\"New Password\"\n                     name = \"newPasswordField\"\n                     [(ngModel)] =\"passwordField.newPassword\"\n                     #newPasswordField = \"ngModel\"\n                     required/>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"verifyNewPassword\">Verify New Password</label>\n            <div class=\"input-group\">\n                  <span class=\"input-group-addon\">\n                     <i class=\"fa fa-lock\"></i>\n                  </span>\n              <input type=\"password\"\n                     id=\"verifyNewPassword\"\n                     class=\"form-control\"\n                     placeholder=\"Verify New Password\"\n                     name = \"verifyNewPasswordField\"\n                     [(ngModel)] =\"passwordField.verifyNewPassword\"\n                     #verifyNewPasswordField = \"ngModel\"\n                     required/>\n            </div>\n          </div>\n\n          <div class=\"modal-footer\">\n            <button type=\"submit\"\n                    class=\"btn btn-success\"\n                    [disabled] = \"pwdForm.invalid ||\n                                  passwordField.newPassword !== passwordField.verifyNewPassword\"\n                    data-dismiss=\"modal\"\n                    (click)=\"updatePassword(passwordField)\">\n              Update\n            </button>\n\n            <button type=\"button\"\n                    class=\"btn btn-danger\"\n                    data-dismiss=\"modal\">\n              Cancel\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" id=\"friendsModal\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n\n        <div class=\"modal-header\">\n          <div class=\"modal-title\">Friends of {{user.firstName}} {{user.lastName}}</div>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n\n        <div class=\"modal-body friends-modal\">\n          <div class=\"people\" *ngFor=\"let user of friendsList\">\n            <div class=\"media\">\n              <a routerLink=\"/profile/{{user.username}}\" target=\"_blank\">\n                <img class=\"small-image img-responsive rounded-circle\" src=\"{{user.image}}\">\n              </a>\n              <div class=\"media-body\">\n                <a routerLink=\"/profile/{{user.username}}\" target=\"_blank\">\n                  {{user.firstName}} {{user.lastName}}\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"modal fade\" id=\"logoutModal\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n\n        <div class=\"modal-header\">\n          <div class=\"modal-title\">Are you sure wanna logout ?</div>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n\n        <div class=\"modal-footer\">\n          <button type=\"submit\"\n                  class=\"btn btn-success\"\n                  data-dismiss=\"modal\"\n                  (click)=\"logout()\">\n            Yes\n          </button>\n\n          <button type=\"button\"\n                  class=\"btn btn-danger\"\n                  data-dismiss=\"modal\">\n            No\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/user/sidemenu/sidemenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidemenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service_client__ = __webpack_require__("../../../../../src/app/services/auth.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SidemenuComponent = /** @class */ (function () {
    function SidemenuComponent(route, router, userService, authService, toastrService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.authService = authService;
        this.toastrService = toastrService;
        this.changeCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.passwordField = {
            newPassword: "",
            verifyNewPassword: "",
        };
        this.selectedUser = "";
        this.friendsList = [];
    }
    SidemenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loggedInUser = this.authService.getLoggedInUser();
        this.findUserByUsername();
        this.checkFriendRequestStatus();
        this.checkPendingRequests(this.loggedInUser.username);
        if (this.changeCallback) {
            this.changeCallback.emit(function () {
                _this.checkPendingRequests(_this.loggedInUser.username);
            });
        }
    };
    SidemenuComponent.prototype.findUserByUsername = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.username = params['username'];
            _this.userService
                .findUserByUsername(_this.username)
                .subscribe(function (user) {
                _this.user = user;
            });
        });
    };
    SidemenuComponent.prototype.getProfileForUser = function () {
        this.findUserByUsername();
    };
    SidemenuComponent.prototype.selectUser = function () {
        this.selectedUser = JSON.parse(JSON.stringify(this.user));
    };
    SidemenuComponent.prototype.updateProfile = function (user) {
        var _this = this;
        user.image = user.image.split('/')[user.image.length - 1];
        this.userService
            .updateProfile(user, user.username)
            .subscribe(function (user) {
            _this.findUserByUsername();
            _this.toastrService.success("Profile updated successfully", "SUCCESS", {
                closeButton: true
            });
            setTimeout(function () {
                window.location.reload();
            }, 2000);
        }, function (err) {
            _this.toastrService.error("Unable to update your profile. Please try again !", "ERROR", {
                closeButton: true
            });
        });
    };
    SidemenuComponent.prototype.updatePassword = function (passwordField) {
        var _this = this;
        this.userService
            .updatePassword(passwordField, this.user.username)
            .subscribe(function (user) {
            _this.toastrService.success("Password updated successfully", "SUCCESS", {
                closeButton: true
            });
        }, function (err) {
            _this.toastrService.error("Unable to update password. Please try again !", "ERROR", {
                closeButton: true
            });
        });
    };
    SidemenuComponent.prototype.logout = function () {
        var _this = this;
        this.userService
            .logout(this.loggedInUser)
            .subscribe(function (res) {
            localStorage.removeItem('loggedInUser');
            _this.router.navigate(['/login']);
            _this.toastrService.warning("User Successfully Logged Out", "", {
                closeButton: true
            });
        });
    };
    SidemenuComponent.prototype.sendRequest = function (userId) {
        var _this = this;
        this.userService
            .sendRequest(this.loggedInUser._id, userId)
            .subscribe(function (user) {
            _this.checkFriendRequestStatus();
        });
    };
    SidemenuComponent.prototype.cancelRequest = function (userId) {
        var _this = this;
        this.userService
            .deleteFriendRequest(this.loggedInUser._id, userId)
            .subscribe(function (user) {
            _this.checkFriendRequestStatus();
        });
    };
    SidemenuComponent.prototype.checkFriendRequestStatus = function () {
        var _this = this;
        this.userService
            .findUserByUsername(this.username)
            .subscribe(function (user) {
            _this.userService
                .checkFriendRequestStatus(_this.loggedInUser._id, user._id)
                .subscribe(function (newUser) {
                if (newUser) {
                    for (var f in newUser.myFriends) {
                        if (newUser.myFriends[f].userId === user._id) {
                            if (newUser.myFriends[f].status === "FRIENDS") {
                                _this.friends = true;
                                _this.pendingRequest = false;
                            }
                            else {
                                _this.friends = false;
                                _this.pendingRequest = true;
                            }
                        }
                    }
                }
                else {
                    _this.friends = false;
                    _this.pendingRequest = false;
                }
            });
        });
    };
    SidemenuComponent.prototype.checkPendingRequests = function (username) {
        var _this = this;
        this.userService
            .findUserByUsername(username)
            .subscribe(function (user) {
            var pendingRequests = [];
            if (user.username === _this.loggedInUser.username) {
                for (var f in user.myFriends) {
                    if (!user.myFriends[f].sentRequest && user.myFriends[f].status === "PENDING") {
                        _this.userService
                            .findUserById(user.myFriends[f].userId)
                            .subscribe(function (pendingUser) {
                            pendingRequests.push(pendingUser);
                        });
                    }
                }
            }
            _this.pendingRequests = pendingRequests;
        });
    };
    SidemenuComponent.prototype.uploadProfilePicture = function (file, userId) {
        var _this = this;
        this.fileToUpload = file[0];
        this.userService
            .uploadProfilePicture(this.fileToUpload, userId)
            .subscribe(function (user) {
            _this.findUserByUsername();
            _this.toastrService.success("Profile picture updated successfully", "SUCCESS", {
                closeButton: true
            });
            setTimeout(function () {
                window.location.reload();
            }, 2000);
        });
    };
    SidemenuComponent.prototype.friendsOfUser = function (friendsList) {
        var friends = [];
        for (var f in friendsList) {
            if (friendsList[f].status === "FRIENDS") {
                this.userService
                    .findUserById(friendsList[f].userId)
                    .subscribe(function (user) {
                    friends.push(user);
                });
            }
        }
        this.friendsList = friends;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], SidemenuComponent.prototype, "changeCallback", void 0);
    SidemenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidemenu',
            template: __webpack_require__("../../../../../src/app/views/user/sidemenu/sidemenu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/user/sidemenu/sidemenu.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service_client__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]])
    ], SidemenuComponent);
    return SidemenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/user/timeline/timeline.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".post-form, .card {\n  margin-top: 30px;\n  margin-left: 10%;\n  margin-right: 10%;\n  margin-bottom: 30px;\n}\n\n#caption {\n  margin-bottom: 20px;\n}\n\n.card-header, .card-body {\n  color: black;\n}\n\n.card-text {\n  white-space: pre-wrap;\n}\n\n.btn {\n  border-radius: 5px;\n}\n\n.update-btn, .delete-btn {\n  margin-right: 10px;\n}\n\n.fa {\n  font-size: large;\n}\n\n.btn-center {\n  text-align: center;\n  margin: 0 auto;\n}\n\n@media (min-width: 576px) {\n  .d-sm-block {\n    display: inline !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .d-md-block {\n    display: inline !important;\n  }\n}\n\n.submit-comment {\n  border: 1px solid black;\n}\n\n.comment-box {\n  word-break: break-all;\n}\n\n.comment-box img {\n  width: 50px;\n  height: 50px;\n}\n\n.comment-box .media-left {\n  padding-right: 10px;\n  width: 65px;\n}\n\n.comment-box .media-body p {\n  border: 1px solid #ddd;\n  padding: 10px;\n}\n\n.comment-box .media-body .media p {\n  margin-bottom: 0;\n}\n\n.comment-box .media-heading {\n  background-color: #ddd;\n  border: 1px solid #ddd;\n  padding: 7px 10px;\n  position: relative;\n  margin-bottom: -1px;\n}\n\n.comment-box .media-heading:before {\n  content: \"\";\n  width: 12px;\n  height: 12px;\n  background-color: #ddd;\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  position: absolute;\n  top: 10px;\n  left: -6px;\n}\n\n.list-group-item-dark {\n  background-color: rgba(0,0,0,0.03) !important;\n}\n\n.private-user {\n  margin-top: 100px;\n}\n\n.no-user {\n  margin-top: 100px;\n}\n\n.fa-circle {\n  color: #2c3e50;\n}\n\n.shared-image {\n  width: 100% !important;\n  height: 100% !important;\n}\n\n.people-like {\n  color: #2c3e50;\n}\n\n.small-image {\n  height: 50px;\n  width: 50px;\n}\n\n.media-body {\n  margin-left: 20px;\n  margin-top: 10px;\n}\n\n.timeline {\n  margin-top: 100px;\n}\n\n.people {\n  margin-top: 20px;\n}\n\n.like-modal{\n  height: 350px;\n  overflow-y: auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/user/timeline/timeline.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid\" *ngIf=\"user\">\n  <div class=\"row\">\n    <div class=\"col-sm-3\">\n      <app-sidemenu></app-sidemenu>\n    </div>\n    <div class=\"col-sm-9 timeline\" *ngIf=\"friends || user?.username === loggedInUser?.username\">\n      <div *ngIf=\"user?.username === loggedInUser?.username\" class=\"post-form\">\n        <form class=\"form-horizontal\"\n              role=\"form\"\n              name=\"postForm\"\n              novalidate\n              #postForm=\"ngForm\">\n\n          <div class=\"form-group\">\n\n            <input type=\"text\"\n                   id=\"caption\"\n                   class=\"form-control\"\n                   maxlength=\"50\"\n                   placeholder=\"Caption...\"\n                   name = \"caption\"\n                   [(ngModel)] =\"postCaption\"\n                   #captionField = \"ngModel\"\n                   required />\n\n            <textarea id=\"content\"\n                      name=\"content\"\n                      rows=\"5\"\n                      placeholder=\"What's on your mind {{user.firstName}}...\"\n                      class=\"form-control\"\n                      [(ngModel)] =\"postContent\"\n                      #postField = \"ngModel\"\n                      required></textarea>\n            <hr>\n            <button type=\"submit\"\n                    class=\"submit-btn btn btn-primary pull-right\"\n                    (click)=\"createPost(postCaption, postContent); postContent=''; postCaption='';\"\n                    [disabled] = \"postForm.invalid\">\n              <i class=\"fa fa-pencil\"></i>\n              Post\n            </button>\n            <button class=\"btn btn-success\"\n                    data-toggle=\"modal\"\n                    href=\"#imageUploadModal\">\n              <i class=\"fas fa-image\"></i>\n              Post Image\n            </button>\n          </div>\n        </form>\n        <br><br><br>\n      </div>\n\n      <div class=\"card border-primary\" *ngFor=\"let post of posts\">\n\n        <h6 class=\"card-header\">\n          <div>\n            <div class=\"media\">\n              <a routerLink=\"/profile/{{user.username}}\" target=\"_blank\">\n                <img class=\"small-image img-responsive rounded-circle\" src=\"{{post.image}}\">\n              </a>\n              <div class=\"media-body\">\n                <span *ngIf=\"!post.isShared\">\n                  <a routerLink=\"/profile/{{post.username}}\">{{post.firstName}} {{post.lastName}}</a>\n                </span>\n                <span *ngIf=\"post.isShared\">\n                  <a routerLink=\"/profile/{{post.username}}\">{{post.firstName}} {{post.lastName}}</a> shared <a routerLink=\"/profile/{{post.sharedFrom}}\" target=\"_blank\">{{post.sharedFrom}}'s</a> post\n                </span>\n              </div>\n              <button class=\"btn delete-btn btn-sm btn-danger pull-right\"\n                      *ngIf=\"user?.username === loggedInUser?.username\"\n                      data-toggle=\"modal\"\n                      href=\"#deletePostModal\"\n                      (click)=\"selectPost(post)\">\n                <i class=\"fa fa-trash\"></i>\n              </button>\n              <button class=\"btn update-btn btn-sm btn-warning pull-right\"\n                      *ngIf=\"user?.username === loggedInUser?.username && !post.isShared\"\n                      data-toggle=\"modal\"\n                      href=\"#updatePostModal\"\n                      (click)=\"selectPost(post)\">\n                <i class=\"fa fa-pencil\"></i>\n              </button>\n            </div>\n          </div>\n        </h6>\n        <div class=\"card-body comment-box\">\n          <h5 class=\"card-title\">{{post.postCaption}}</h5>\n          <hr>\n          <p class=\"card-text\" *ngIf=\"post.type !== 'IMAGE'\">{{post.postContent}}</p>\n\n          <div class=\"card-text\"\n             *ngIf=\"post.type === 'IMAGE'\">\n            <img [src]=post.postContent\n                 class=\"img-fluid shared-image\">\n          </div>\n\n        </div>\n        <div class=\"card-header\">\n          <div class=\"row\">\n            <div class=\"col-4 form-group text-center\">\n              <button class=\"btn btn-success btn-sm\"\n                      (click)=\"likePost(post._id, loggedInUser._id)\"\n                      *ngIf=\"post.likedBy.indexOf(loggedInUser._id) < 0\">\n                <span class=\"fas fa-thumbs-up\"></span>\n                <span class=\"d-none d-sm-block\">Like</span>\n              </button>\n              <button class=\"btn btn-danger btn-sm\"\n                      (click)=\"unlikePost(post._id, loggedInUser._id)\"\n                      *ngIf=\"post.likedBy.indexOf(loggedInUser._id) > -1\">\n                <span class=\"fas fa-thumbs-down\"></span>\n                <span class=\"d-none d-sm-block\">Unlike</span>\n              </button>\n            </div>\n\n            <div class=\"col-4 form-group text-center\">\n              <button class=\"btn btn-info btn-sm\"\n                      (click)=\"enableComment(post._id); comment='';\"\n                      *ngIf=\"enableCommentSection.indexOf(post._id) < 0\">\n                <span class=\"fas fa-comment\"></span>\n                <span class=\"d-none d-sm-block\">Comment</span>\n              </button>\n\n              <button class=\"btn btn-info btn-sm\"\n                      (click)=\"disableComment(post._id); comment='';\"\n                      *ngIf=\"enableCommentSection.indexOf(post._id) > -1\">\n                <span class=\"fas fa-comment\"></span>\n                <span class=\"d-none d-sm-block\">Comment</span>\n              </button>\n            </div>\n\n            <div class=\"col-4 form-group text-center\">\n              <button class=\"btn btn-warning btn-sm\"\n                      data-toggle=\"modal\"\n                      href=\"#sharePostModal\"\n                      (click)=\"selectPost(post)\">\n                <span class=\"fas fa-share\"></span>\n                <span class=\"d-none d-sm-block\">Share</span>\n              </button>\n            </div>\n          </div>\n\n\n          <div *ngIf=\"post.likedBy.indexOf(loggedInUser._id) > -1 && post.likes === 1\">\n            <a href=\"#likedThisPost\"\n               (click)=\"peopleWhoLikedThePost(post.likedBy)\"\n               data-toggle=\"modal\"\n               class=\"people-like\">You like this\n            </a><hr>\n          </div>\n          <div *ngIf=\"post.likedBy.indexOf(loggedInUser._id) > -1 && post.likes > 1\">\n            <a href=\"#likedThisPost\"\n               (click)=\"peopleWhoLikedThePost(post.likedBy)\"\n               data-toggle=\"modal\"\n               class=\"people-like\">You and {{post.likes - 1}} other like this\n            </a><hr>\n          </div>\n          <div *ngIf=\"post.likedBy.indexOf(loggedInUser._id) < 0 && post.likes > 0\">\n            <a href=\"#likedThisPost\"\n               (click)=\"peopleWhoLikedThePost(post.likedBy)\"\n               data-toggle=\"modal\"\n               class=\"people-like\">{{post.likes}} like this\n            </a><hr></div>\n\n          <div *ngIf=\"enableCommentSection.indexOf(post._id) < 0 && post.comments.length > 0\"\n               role=\"button\">\n            <span (click)=\"enableComment(post._id)\">\n              Show comments&nbsp;\n              <div class=\"fas fa-comments\"></div>\n            </span>\n          </div>\n\n          <div *ngIf=\"enableCommentSection.indexOf(post._id) > -1 && post.comments.length > 0\"\n               role=\"button\">\n            <span (click)=\"disableComment(post._id)\">\n              Hide Comments&nbsp;\n              <div class=\"fas fa-comments\"></div>\n              <br><br>\n            </span>\n          </div>\n\n          <form class=\"form-horizontal\"\n                name=\"submitCommentForm\"\n                role=\"form\"\n                novalidate\n                #submitCommentForm=\"ngForm\">\n            <div class=\"form-group\">\n              <div class=\"row\"\n                   *ngIf=\"enableCommentSection.indexOf(post._id) > -1 && newComment.indexOf(post._id) > -1\">\n                <div class=\"col-9 form-group\">\n                <textarea name=\"comment\"\n                          rows=\"1\"\n                          class=\"form-control submit-comment\"\n                          [(ngModel)] =\"comment\"\n                          #submitCommentField = \"ngModel\"\n                          required>\n                </textarea>\n                </div>\n                <div class=\"col-3 form-group\">\n                  <button class=\"btn btn-info btn-sm\"\n                          [disabled]=\"submitCommentForm.invalid\"\n                          (click)=\"submitComment(post._id, loggedInUser.username, loggedInUser.firstName, loggedInUser.lastName, comment); comment='';\">\n                    <span class=\"fas fa-paper-plane\"></span>\n                    <span class=\"d-none d-md-block\">Submit</span>\n                  </button>\n                </div>\n              </div>\n            </div>\n\n            <div *ngIf=\"enableCommentSection.indexOf(post._id) > -1\">\n              <div *ngFor=\"let comment of post.comments\">\n                <div class=\"media comment-box\">\n                  <div class=\"media-left\">\n                    <a routerLink=\"/profile/{{comment.username}}\" target=\"_blank\">\n                     <img class=\"img-responsive user-photo rounded-circle\" src={{comment.image}}>\n                    </a>\n                  </div>\n                  <div class=\"media-body\">\n                    <h4 class=\"media-heading\"><a routerLink=\"/profile/{{comment.username}}\" target=\"_blank\" >{{comment.commentator}}</a></h4>\n                    <p>{{comment.comment}}</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-9\" *ngIf=\"!friends && user?.username !== loggedInUser?.username\">\n      <div class=\"text-center private-user\">\n          <span class=\"fa-stack fa-4x\">\n              <i class=\"fas fa-circle fa-stack-2x\"></i>\n              <i class=\"fas fa-lock fa-stack-1x fa-inverse\"></i>\n          </span><br><br>\n        <h4>This user is private</h4>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"text-center no-user\" *ngIf=\"!user\">\n        <span class=\"fa-stack fa-4x\">\n            <i class=\"fas fa-circle fa-stack-2x\"></i>\n            <i class=\"fas fa-user-times fa-stack-1x fa-inverse\"></i>\n        </span><br><br>\n  <h4>No user found</h4>\n</div>\n\n<div class=\"modal fade\" id=\"updatePostModal\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Update Post</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n\n      <form class=\"form-horizontal modal-form\"\n            name=\"updatePostForm\"\n            role=\"form\"\n            novalidate\n            #updatePostForm=\"ngForm\">\n\n        <div class=\"form-group\">\n          <br>\n          <div *ngIf=\"updateCaptionField.touched && updateCaptionField.invalid\"\n               class=\"text-center text-danger\">Caption is required</div>\n          <div *ngIf=\"updateContentField && updateContentField.touched && updateContentField.invalid\"\n               class=\"text-center text-danger\">Content is required</div>\n\n          <div class=\"modal-body\">\n\n            <input class=\"form-control\"\n                   placeholder=\"Caption...\"\n                   name = \"updateCaption\"\n                   [(ngModel)] =\"selectedPost.postCaption\"\n                   #updateCaptionField = \"ngModel\"\n                   required/><br>\n\n            <textarea *ngIf=\"selectedPost.type !== 'IMAGE'\"\n                      rows=\"15\"\n                      placeholder=\"Content...\"\n                      name = \"updateContent\"\n                      [(ngModel)] =\"selectedPost.postContent\"\n                      #updateContentField = \"ngModel\"\n                      class=\"form-control\"\n                      required></textarea>\n\n            <div *ngIf=\"selectedPost.type === 'IMAGE'\">\n              <img [src]=selectedPost.postContent\n                   class=\"img-fluid shared-image\">\n            </div>\n\n          </div>\n\n          <div class=\"modal-footer\">\n            <button type=\"submit\"\n                    class=\"btn btn-default btn-success\"\n                    data-dismiss=\"modal\"\n                    (click)=\"updatePost(selectedPost)\"\n                    [disabled]=\"updatePostForm.invalid\">\n              Update\n            </button>\n            <button type=\"button\"\n                    class=\"btn btn-default btn-danger\"\n                    data-dismiss=\"modal\">\n              Cancel\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"deletePostModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n      <div class=\"modal-header\">\n        <div class=\"modal-title\">Are you sure wanna delete this post ?</div>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n\n      <div class=\"modal-footer\">\n        <button type=\"submit\"\n                class=\"btn btn-success\"\n                data-dismiss=\"modal\"\n                (click)=\"deletePost(selectedPost)\">\n          Yes\n        </button>\n\n        <button type=\"button\"\n                class=\"btn btn-danger\"\n                data-dismiss=\"modal\">\n          No\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"sharePostModal\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Share this on your timeline ?</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n\n      <form class=\"form-horizontal modal-form\"\n            name=\"sharePostForm\"\n            role=\"form\"\n            novalidate\n            #sharePostForm=\"ngForm\">\n\n        <div class=\"form-group\">\n\n          <div class=\"modal-body\">\n\n            <input class=\"form-control\"\n                   placeholder=\"Caption...\"\n                   name = \"shareCaption\"\n                   [(ngModel)] =\"selectedPost.postCaption\"\n                   #sharedCaptionField = \"ngModel\"\n                   disabled\n                   required/><br>\n\n            <textarea *ngIf=\"selectedPost.type !== 'IMAGE'\"\n                      rows=\"15\"\n                      placeholder=\"Content...\"\n                      name = \"shareContent\"\n                      [(ngModel)] =\"selectedPost.postContent\"\n                      #sharedContentField = \"ngModel\"\n                      class=\"form-control\"\n                      disabled\n                      required></textarea>\n\n            <div *ngIf=\"selectedPost.type === 'IMAGE'\">\n              <img [src]=selectedPost.postContent\n                   class=\"img-fluid shared-image\">\n            </div>\n\n          </div>\n\n          <div class=\"modal-footer\">\n            <button type=\"submit\"\n                    class=\"btn btn-default btn-warning\"\n                    data-dismiss=\"modal\"\n                    (click)=\"sharePost(selectedPost.postCaption, selectedPost.postContent, selectedPost.type)\"\n                    [disabled]=\"sharePostForm.invalid\">\n              Share\n            </button>\n            <button type=\"button\"\n                    class=\"btn btn-default btn-danger\"\n                    data-dismiss=\"modal\">\n              Cancel\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"imageUploadModal\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Share your thoughts through an image</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"selectedImage=''; imageCaption='';\">&times;</button>\n      </div>\n\n      <form class=\"form-horizontal modal-form\"\n            name=\"imageUploadForm\"\n            role=\"form\"\n            novalidate\n            #imageUploadForm=\"ngForm\">\n\n        <div class=\"form-group\">\n\n          <div class=\"modal-body\">\n\n            <input class=\"form-control\"\n                   placeholder=\"Say something...\"\n                   name = \"imageCaption\"\n                   [(ngModel)] =\"imageCaption\"\n                   #imageCaptionField = \"ngModel\"\n                   required/><br>\n\n            <label class=\"btn btn-default btn-outline-info\">\n              Choose Image\n              <input type=\"file\"\n                     class=\"form-control\"\n                     id=\"fileUpload\"\n                     accept=\"image/*\"\n                     name=\"imagePost\"\n                     (change)=\"selectImage($event.target.files)\"\n                     required\n                     hidden />\n            </label>\n\n            <div class=\"text-center\"\n                 *ngIf=\"selectedImage\">\n              <button type=\"button\" class=\"close\" (click)=\"selectedImage='';\">&times;</button>\n              <img [src]=\"selectedImage\"\n                   class=\"img-fluid rounded\">\n              <div>\n                {{filename}}\n              </div>\n            </div>\n          </div>\n\n          <div class=\"modal-footer\">\n            <button type=\"submit\"\n                    class=\"btn btn-default btn-warning\"\n                    (click)=\"postImage(imageCaption)\"\n                    [disabled]=\"imageUploadForm.invalid || selectedImage === ''\"\n                    data-dismiss=\"modal\">\n              Share\n            </button>\n            <button type=\"button\"\n                    class=\"btn btn-default btn-danger\"\n                    data-dismiss=\"modal\"\n                    (click)=\"selectedImage=''; imageCaption='';\">\n              Cancel\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" id=\"likedThisPost\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n      <div class=\"modal-header\">\n        <div class=\"modal-title\">People who like this post</div>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n\n      <div class=\"modal-body like-modal\" >\n        <div class=\"people\" *ngFor=\"let user of likedBy\">\n          <div class=\"media\">\n            <a routerLink=\"/profile/{{user.username}}\" target=\"_blank\">\n              <img class=\"small-image img-responsive rounded-circle\" src=\"{{user.image}}\">\n            </a>\n            <div class=\"media-body\">\n              <a routerLink=\"/profile/{{user.username}}\" target=\"_blank\">\n                {{user.firstName}} {{user.lastName}}\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/user/timeline/timeline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_post_service_client__ = __webpack_require__("../../../../../src/app/services/post.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service_client__ = __webpack_require__("../../../../../src/app/services/auth.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TimelineComponent = /** @class */ (function () {
    function TimelineComponent(route, userService, postService, authService, toastrService) {
        this.route = route;
        this.userService = userService;
        this.postService = postService;
        this.authService = authService;
        this.toastrService = toastrService;
        this.enableCommentSection = [];
        this.newComment = [];
        this.selectedPost = "";
        this.selectedImage = "";
        this.likedBy = [];
    }
    TimelineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loggedInUser = this.authService.getLoggedInUser();
        this.route.params
            .subscribe(function (params) {
            _this.username = params['username'];
            _this.findUserByUsername(_this.username);
            _this.areFriends(_this.username);
            _this.getPostsForUser(_this.username);
        });
    };
    TimelineComponent.prototype.findUserByUsername = function (username) {
        var _this = this;
        this.userService
            .findUserByUsername(username)
            .subscribe(function (user) {
            _this.user = user;
        });
    };
    TimelineComponent.prototype.getPostsForUser = function (username) {
        var _this = this;
        this.userService
            .findUserByUsername(username)
            .subscribe(function (user) {
            _this.postService
                .findPostByUserId(user._id)
                .subscribe(function (posts) {
                _this.posts = posts;
            });
        });
    };
    TimelineComponent.prototype.areFriends = function (username) {
        var _this = this;
        this.userService
            .findUserByUsername(username)
            .subscribe(function (user) {
            _this.userService
                .checkFriendRequestStatus(_this.loggedInUser._id, user._id)
                .subscribe(function (newUser) {
                if (newUser) {
                    for (var f in newUser.myFriends) {
                        if (newUser.myFriends[f].userId === user._id && newUser.myFriends[f].status === "FRIENDS") {
                            _this.friends = true;
                        }
                    }
                }
            });
        });
    };
    TimelineComponent.prototype.createPost = function (postCaption, postContent) {
        var _this = this;
        var newPost = {
            username: this.loggedInUser.username,
            userId: this.loggedInUser._id,
            firstName: this.loggedInUser.firstName,
            lastName: this.loggedInUser.lastName,
            image: this.loggedInUser.image,
            postCaption: postCaption,
            postContent: postContent
        };
        this.postService
            .createPost(newPost)
            .subscribe(function (post) {
            _this.getPostsForUser(_this.username);
            _this.toastrService.info("You shared a new post", "AWESOME", {
                closeButton: true
            });
        });
    };
    TimelineComponent.prototype.selectPost = function (post) {
        this.selectedPost = JSON.parse(JSON.stringify(post));
    };
    TimelineComponent.prototype.updatePost = function (post) {
        var _this = this;
        post.image = post.image.split('/')[post.image.length - 1];
        this.postService
            .updatePost(post)
            .subscribe(function (post) {
            _this.getPostsForUser(_this.username);
            _this.toastrService.info("You have updated the post", "", {
                closeButton: true
            });
        });
    };
    TimelineComponent.prototype.deletePost = function (post) {
        var _this = this;
        this.postService
            .deletePost(post._id, this.loggedInUser._id)
            .subscribe(function (post) {
            _this.getPostsForUser(_this.username);
            _this.toastrService.warning("You have deleted a post", "", {
                closeButton: true
            });
        });
    };
    TimelineComponent.prototype.likePost = function (postId, userId) {
        var _this = this;
        this.postService
            .likePost(postId, userId)
            .subscribe(function (post) {
            _this.getPostsForUser(_this.username);
        });
    };
    TimelineComponent.prototype.unlikePost = function (postId, userId) {
        var _this = this;
        this.postService
            .unlikePost(postId, userId)
            .subscribe(function (post) {
            _this.getPostsForUser(_this.username);
        });
    };
    TimelineComponent.prototype.enableComment = function (postId) {
        this.newComment = [];
        this.enableCommentSection = [];
        this.newComment.push(postId);
        this.enableCommentSection.push(postId);
    };
    TimelineComponent.prototype.disableComment = function (postId) {
        var index = this.enableCommentSection.indexOf(postId);
        this.enableCommentSection.splice(index, 1);
    };
    TimelineComponent.prototype.submitComment = function (postId, username, firstName, lastName, comment) {
        var _this = this;
        var comments = {
            comment: comment,
            commentator: firstName + " " + lastName,
            username: username,
            image: this.loggedInUser.image
        };
        this.postService
            .submitComment(postId, comments)
            .subscribe(function (post) {
            _this.getPostsForUser(_this.username);
        });
    };
    TimelineComponent.prototype.sharePost = function (postCaption, postContent, type) {
        var _this = this;
        var sharedPost = {
            username: this.loggedInUser.username,
            userId: this.loggedInUser._id,
            firstName: this.loggedInUser.firstName,
            lastName: this.loggedInUser.lastName,
            image: this.loggedInUser.image,
            postCaption: postCaption,
            postContent: postContent,
            isShared: true,
            sharedFrom: this.user.username,
            type: type
        };
        this.postService
            .createPost(sharedPost)
            .subscribe(function (post) {
            _this.getPostsForUser(_this.username);
            _this.toastrService.info("You shared a post from " + _this.user.username, "AWESOME", {
                closeButton: true
            });
        });
    };
    TimelineComponent.prototype.selectImage = function (file) {
        var _this = this;
        this.fileToShare = file[0];
        this.filename = file[0].name;
        var reader = new FileReader();
        reader.onload = function (event) {
            _this.selectedImage = event.target.result;
        };
        reader.readAsDataURL(this.fileToShare);
    };
    TimelineComponent.prototype.postImage = function (imageCaption) {
        var _this = this;
        var formData = new FormData();
        formData.append('username', this.loggedInUser.username);
        formData.append('firstName', this.loggedInUser.firstName);
        formData.append('lastName', this.loggedInUser.lastName);
        formData.append('image', this.loggedInUser.image);
        formData.append('userId', this.loggedInUser._id);
        formData.append('postCaption', imageCaption);
        formData.append('postContent', this.fileToShare);
        formData.append('type', "IMAGE");
        this.postService
            .createImagePost(formData)
            .subscribe(function (post) {
            _this.getPostsForUser(_this.username);
            _this.selectedImage = '';
            _this.imageCaption = '';
            _this.toastrService.info("You shared an image post", "AWESOME", {
                closeButton: true
            });
        });
    };
    TimelineComponent.prototype.peopleWhoLikedThePost = function (userIds) {
        var users = [];
        for (var u in userIds) {
            this.userService
                .findUserById(userIds[u])
                .subscribe(function (user) {
                users.push(user);
            });
        }
        this.likedBy = users;
    };
    TimelineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-timeline',
            template: __webpack_require__("../../../../../src/app/views/user/timeline/timeline.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/user/timeline/timeline.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_post_service_client__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service_client__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */]])
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: ''
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");



Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map