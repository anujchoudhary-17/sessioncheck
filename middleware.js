const SESSIONS = require("./sessions");
let authMiddleWare = {};

authMiddleWare.isLoggedIn = async function (req, res, next) {
  const userId = req.body.userId;
  if (!userId || userId !== SESSIONS.getUserSession(req).userId) {
    console.log("THIS IS I AM GETTING : " + SESSIONS.getUserSession(req));
    res.send("UnAuth");
  } else {
    // SESSIONS.setUserSession(req, req.body.userId);
    res.send("hello -> " + SESSIONS.getUserSession(req).userId);
  }
};

module.exports = authMiddleWare;
