import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post } from '../models/post.model.client';
import { AppConstants } from '../app.constants';


@Injectable()
export class PostService {

  api = {
    'createPost'        : this.createPost,
    'findPostById'      : this.findPostById,
    'getAllPosts'       : this.getAllPosts,
    'findPostByUserId'  : this.findPostByUserId,
    'updatePost'        : this.updatePost,
    'deletePost'        : this.deletePost,
    'likePost'          : this.likePost,
    'unlikePost'        : this.unlikePost,
    'submitComment'     : this.submitComment,
    'createImagePost'   : this.createImagePost
  };

  apiEndPoint = {
    'createPost'        : AppConstants.ApiEndPoint.baseUrl + 'post/createPost',
    'findPostById'      : AppConstants.ApiEndPoint.baseUrl + 'post/getPosts/{postId}',
    'getAllPosts'       : AppConstants.ApiEndPoint.baseUrl + 'post/getAllPosts',
    'findPostByUserId'  : AppConstants.ApiEndPoint.baseUrl + 'post/getPosts/userId/{userId}',
    'updatePost'        : AppConstants.ApiEndPoint.baseUrl + 'post/updatePost',
    'deletePost'        : AppConstants.ApiEndPoint.baseUrl + '{userId}/post/deletePost/{postId}',
    'likePost'          : AppConstants.ApiEndPoint.baseUrl + '{userId}/post/likePost/{postId}',
    'unlikePost'        : AppConstants.ApiEndPoint.baseUrl + '{userId}/post/unlikePost/{postId}',
    'submitComment'     : AppConstants.ApiEndPoint.baseUrl + 'post/comment/{postId}',
    'createImagePost'   : AppConstants.ApiEndPoint.baseUrl + 'post/createPost/imagePost'
  };

  constructor (private http: HttpClient) {}

  createPost(newPost) {
    const url = this.apiEndPoint.createPost;
    return this.http.post<Post>(url, newPost);
  }

  findPostById(postId) {
    const url = this.apiEndPoint.findPostById
      .replace('{postId}', postId);
    return this.http.get<Post>(url);
  }

  getAllPosts() {
    const url = this.apiEndPoint.getAllPosts;
    return this.http.get<Post>(url);
  }

  findPostByUserId(userId) {
    const url = this.apiEndPoint.findPostByUserId
      .replace('{userId}', userId);
    return this.http.get<Post>(url);
  }

  updatePost(post) {
    const url = this.apiEndPoint.updatePost;
    return this.http.put<Post>(url, post);
  }

  deletePost(postId, userId) {
    const url = this.apiEndPoint.deletePost
      .replace('{userId}', userId)
      .replace('{postId}', postId);
    return this.http.delete<Post>(url);
  }

  likePost(postId, userId) {
    const url = this.apiEndPoint.likePost
      .replace('{userId}', userId)
      .replace('{postId}', postId);
    return this.http.put<Post>(url, "");
  }

  unlikePost(postId, userId) {
    const url = this.apiEndPoint.unlikePost
      .replace('{userId}', userId)
      .replace('{postId}', postId);
    return this.http.put<Post>(url, "");
  }

  submitComment(postId, comments) {
    const url = this.apiEndPoint.submitComment
      .replace('{postId}', postId);
    return this.http.put<Post>(url, comments);
  }

  createImagePost(newPost) {
    const url = this.apiEndPoint.createImagePost;
    return this.http.post<Post>(url, newPost);
  }
}
