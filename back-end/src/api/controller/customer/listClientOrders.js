const { listByClient } = require('../../../services/sales');
const statusCodes = require('../../../helpers/statusCodes.json');

module.exports = async (req, res, _next) => {
  const { id } = req.user;
  try {
    const salesList = await listByClient(id);
    res.status(statusCodes.ok).json(salesList);
  } catch (e) {
    console.log(e);
  }
};