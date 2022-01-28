const signJwt = require('../../../helpers/signJwt');
const { get } = require('../../../services/login');

module.exports = async (req, res, next) => {
  try {
    const user = await get(req.user);
    if (user.err) {
      next({ ...user.err });
    }

    const token = signJwt(user);
    req.user = { ...user, token };
    next();
  } catch (e) {
    console.log(e);
  }
};