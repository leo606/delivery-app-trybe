const { getById } = require('../../../services/sales');
const statusCodes = require('../../../helpers/statusCodes.json');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const sale = await getById(id);

    if (sale.err) {
      return next(sale.err);
    }

    res.status(statusCodes.ok).json(sale);
  } catch (e) {
    console.log(e);
  }
};