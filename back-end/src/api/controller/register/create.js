const statusCodes = require('../../../helpers/statusCodes.json');
const { create } = require('../../../services/users');
const signJwt = require('../../../helpers/signJwt');

module.exports = async (req, res, _next) => {
  try {
    const { password, name, email } = req.body;
    const role = 'customer';
    const data = {
      name,
      email,
      password,
      role,
    };
    await create(data);
    const token = signJwt(data);
    res.status(statusCodes.created).json({ name, email, role, token });
  } catch (e) {
    console.log(e);
  }
};
