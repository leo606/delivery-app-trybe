const { getBySellerId } = require('../../../services/sales');
const status = require('../../../helpers/statusCodes.json');

module.exports = async (req, res, _next) => {
  const { user: { id } } = req;
  const result = await getBySellerId(id);

  res.status(status.ok).json(result);
};
