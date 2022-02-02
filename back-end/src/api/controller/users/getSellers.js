const { listSellers } = require('../../../services/users');
const statusCodes = require('../../../helpers/statusCodes.json');

module.exports = async (_req, res, next) => {
  try {
    const sellers = await listSellers();

    if (sellers.err) {
      next(sellers.err);
    }

    res.status(statusCodes.ok).json([...sellers]);
  } catch (e) {
    console.log(e);
  }
};