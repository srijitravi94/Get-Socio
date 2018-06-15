export class User {
  _id         : any;
  username    : any;
  password    : String;
  firstName   : any;
  lastName    : any;
  email       : String;
  phone       : String;
  image       : any;
  myFriends   : [{
    userId      : String,
    status      : String,
    sentRequest : Boolean
  }];
  posts       : String[];
  dateCreated : Date;
  online      : Boolean;
  socketId    : String
}
