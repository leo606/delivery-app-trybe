const { getByEmail } = require('../../../services/users');

module.exports = async (req, _res, next) => {
  try {
    const { email } = req.body;
    const user = await getByEmail(email);
    if (user.name) {
      return next({ code: 'conflict', message: 'usuario já cadastrado' });
    }
    next();
  } catch (e) {
    console.log(e);
  }
};
