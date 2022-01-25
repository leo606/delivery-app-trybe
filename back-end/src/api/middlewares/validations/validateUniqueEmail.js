const findUser = require('../../../services/register/findUser');

module.exports = async (req, _res, next) => {
  try {
    const { email } = req.body;
    const user = await findUser(email);
    if (user.name) {
      return next({ code: 'conflict', message: 'usuario já cadastrado' });
    }
    next();
  } catch (e) {
    console.log(e);
  }
};
