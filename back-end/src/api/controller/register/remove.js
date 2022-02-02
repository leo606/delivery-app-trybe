const { removeUser } = require('../../../services/users');
const statusCodes = require('../../../helpers/statusCodes.json');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  try {
    const removed = await removeUser(id);

    if (removed.err) {
      next(removed.err);
    }

    res.status(statusCodes.ok).end();
  } catch (e) {
    console.log(e);
  }
};