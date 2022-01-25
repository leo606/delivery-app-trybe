const statusCodes = require('../../helpers/statusCodes.json');

module.exports = async (req, res, _next) => {
  try {
    const { role, token } = req.user;
    res.status(statusCodes.ok).json({ role, token });
  } catch (e) {
    console.log(e);
  }
};