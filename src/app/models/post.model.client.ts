export class Post {
  _id         : String;
  username    : String;
  userId      : String;
  image       : String;
  firstName   : String;
  lastName    : String;
  postCaption : String;
  postContent : String;
  likes       : Number;
  likedBy     : String[];
  type        : String;
  comments    : [{comment    : String,
                  commentator: String,
                  image      : String}];
  isShared    : Boolean;
  sharedFrom  : String;
}
