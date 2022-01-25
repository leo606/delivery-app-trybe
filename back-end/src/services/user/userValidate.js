const { emailValid } = require("../../api/middlewares/user/userINF");


module.exports = async (req, _res, next) => {
  const { email  } = req.body;

  if (emailValid(email)) return next(emailValid(email));

  return next();
};