module.exports = function (app) {
  var db = require("./models/model");
  require("./services/user.service.server")(app);
  require("./services/post.service.server")(app);
  require("./services/helper.service.server")(app);
};
