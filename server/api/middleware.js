const User = require("../db/models/user");

const checkAdmin = async (req, res, next) => {
  if (!req.session.passport) {
    res.sendStatus(403);
  } else {
    const user = await User.findByPk(req.session.passport.user);
    if (user.isAdmin) {
      next();
    } else {
      res.sendStatus(403);
    }
  }
};

module.exports = checkAdmin;
