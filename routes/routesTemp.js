const express = require("express");
const router = express.Router({ mergeParams: true });
const SESSIONS = require("../sessions");
const AuthMiddleware = require("../middleware");

router.get("/test", AuthMiddleware.isLoggedIn, async (req, res) => {
  console.log("In Get call");

  res.send("SUCCESS : ");
});

router.post("/test", async (req, res) => {
  console.log("In Post call");
  res.send("SET : " + SESSIONS.setUserSession(req, req.body.userId));
});

module.exports = router;
