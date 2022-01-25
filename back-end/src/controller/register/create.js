const crypto = require('crypto');
const userServices = require('../../services/user/createUser')

module.exports = async (req, res, _next) => {
  try {
    const { password, name, email } = req.body;
    const encryptedPassword = crypto.createHash('md5').update(password).digest("hex");
    const data = {
      name,
      email,
      encryptedPassword,
    }
    console.log(data)
    await userServices.create(data)
    res.status(501).end();
  } catch (e) {
    console.log(e);
  }
};