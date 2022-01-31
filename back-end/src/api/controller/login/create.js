const statusCodes = require('../../../helpers/statusCodes.json');

module.exports = async (req, res, _next) => {
  try {
    const { id, name, email, role, token } = req.user;
    res.status(statusCodes.ok).json({ id, name, email, role, token });
  } catch (e) {
    console.log(e);
  }
};