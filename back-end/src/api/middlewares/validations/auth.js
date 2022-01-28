const signJwt = require('../../../helpers/signJwt');
const { getByEmailAndPass } = require('../../../services/users');

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.user;
    const user = await getByEmailAndPass(email, password);
    console.log(user);
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