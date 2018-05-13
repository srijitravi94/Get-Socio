import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model.client';
import { AppConstants } from '../app.constants';

@Injectable()
export class UserService {

  api = {
    'register'                  : this.register,
    'login'                     : this.login,
    'logout'                    : this.logout,
    'loggedIn'                  : this.loggedIn,
    'findUserByUsername'        : this.findUserByUsername,
    'findUserById'              : this.findUserById,
    'updateProfile'             : this.updateProfile,
    'updatePassword'            : this.updatePassword,
    'uploadProfilePicture'      : this.uploadProfilePicture,
    'sendRequest'               : this.sendRequest,
    'checkFriendRequestStatus'  : this.checkFriendRequestStatus,
    'acceptFriendRequest'       : this.acceptFriendRequest,
    'deleteFriendRequest'       : this.deleteFriendRequest,
    'searchUser'                : this.searchUser
  };

  apiEndPoint = {
    'register'                  : AppConstants.ApiEndPoint.baseUrl + 'register',
    'login'                     : AppConstants.ApiEndPoint.baseUrl + 'login',
    'logout'                    : AppConstants.ApiEndPoint.baseUrl + 'logout',
    'loggedIn'                  : AppConstants.ApiEndPoint.baseUrl + 'loggedIn',
    'findUserByUsername'        : AppConstants.ApiEndPoint.baseUrl + 'user/{username}',
    'findUserById'              : AppConstants.ApiEndPoint.baseUrl + 'user/userId/{userId}',
    'updateProfile'             : AppConstants.ApiEndPoint.baseUrl + 'user/updateProfile/{username}',
    'updatePassword'            : AppConstants.ApiEndPoint.baseUrl + 'user/updatePassword/{username}',
    'uploadProfilePicture'      : AppConstants.ApiEndPoint.baseUrl + 'user/upload/{userId}',
    'sendRequest'               : AppConstants.ApiEndPoint.baseUrl + 'user/{currentUserId}/sendRequest/{requestUserId}',
    'acceptFriendRequest'       : AppConstants.ApiEndPoint.baseUrl + 'user/{currentUserId}/acceptFriendRequest/{requestUserId}',
    'deleteFriendrequest'       : AppConstants.ApiEndPoint.baseUrl + 'user/{currentUserId}/deleteFriendRequest/{requestUserId}',
    'searchUser'                : AppConstants.ApiEndPoint.baseUrl + 'searchUser/{user}'
  };

  constructor(private http : HttpClient) { }

  register(newUser) {
    const url = this.apiEndPoint.register;
    return this.http.post<User>(url, newUser, { withCredentials : true }) ;
  }

  login(username, password) {
    const url = this.apiEndPoint.login;
    const credentials = {
      username : username,
      password : password
    };
    return this.http.post<User>(url, credentials, { withCredentials: true });
  }

  logout() {
    const url = this.apiEndPoint.logout;
    return this.http.post<User>(url, '', { withCredentials: true });
  }

  loggedIn() {
    const url = this.apiEndPoint.loggedIn;
    return this.http.post<User>(url, '', { withCredentials: true });

  }

  findUserByUsername(username) {
    const url = this.apiEndPoint.findUserByUsername.replace('{username}',username);
    return this.http.get<User>(url);
  }

  findUserById(userId) {
    const url = this.apiEndPoint.findUserById
      .replace('{userId}', userId);
    return this.http.get<User>(url);
  }

  updateProfile(user, username) {
    const url = this.apiEndPoint.updateProfile
      .replace('{username}', username);
    return this.http.put<User>(url, user);
  }

  updatePassword(passwordField, username) {
    const url = this.apiEndPoint.updatePassword
      .replace('{username}', username);
    return this.http.put<User>(url, passwordField);
  }

  uploadProfilePicture(file, userId) {
    const url = this.apiEndPoint.uploadProfilePicture
      .replace('{userId}', userId);
    const formData = new FormData();
    formData.append('myFile', file);
    return this.http.post<User>(url, formData);
  }

  sendRequest(currentUserId, requestUserId) {
    const url = this.apiEndPoint.sendRequest
      .replace('{currentUserId}', currentUserId)
      .replace('{requestUserId}',requestUserId);
    return this.http.put<User>(url, "");
  }

  checkFriendRequestStatus(currentUserId, requestUserId) {
    const url = this.apiEndPoint.sendRequest
      .replace('{currentUserId}', currentUserId)
      .replace('{requestUserId}',requestUserId);
    return this.http.get<User>(url);
  }

  acceptFriendRequest(currentUserId, requestUserId) {
    const url = this.apiEndPoint.acceptFriendRequest
      .replace('{currentUserId}', currentUserId)
      .replace('{requestUserId}',requestUserId);
    return this.http.put<User>(url, "");
  }

  deleteFriendRequest(currentUserId, requestUserId) {
    const url = this.apiEndPoint.deleteFriendrequest
      .replace('{currentUserId}', currentUserId)
      .replace('{requestUserId}',requestUserId);
    return this.http.put<User>(url, "");
  }

  searchUser(user){
    const url = this.apiEndPoint.searchUser
      .replace('{user}', user);
    return this.http.get<User>(url);
  }

}
