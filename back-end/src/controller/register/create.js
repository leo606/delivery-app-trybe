const crypto = require('crypto');
const statusCodes = require('../../helpers/statusCodes.json');
const { createUser } = require('../../services/register');

module.exports = async (req, res, _next) => {
  try {
    const { password, name, email } = req.body;
    const encryptedPassword = crypto
      .createHash('md5')
      .update(password)
      .digest('hex');
    const role = 'customer';
    const data = {
      name,
      email,
      encryptedPassword,
      role,
    };
    await createUser(data);
    res.status(statusCodes.created).end();
  } catch (e) {
    console.log(e);
  }
};
