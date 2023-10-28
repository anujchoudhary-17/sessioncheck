const setUserSession = (req, userId) => {
  const userData = { userId: userId };
  req.session.user = userData;
};

const getUserSession = (req) => {
  console.log("GET : " + req.session.user["userId"]);
  return req.session.user;
};

module.exports = { setUserSession, getUserSession };
