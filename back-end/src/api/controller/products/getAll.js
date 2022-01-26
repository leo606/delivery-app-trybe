const statusCodes = require('../../../helpers/statusCodes.json');
const { findAll } = require('../../../services/products');

module.exports = async (req, res, _next) => {
  try {
const list = await findAll();
    res.status(statusCodes.ok).json(list);
  } catch (e) {
    console.log(e);
  }
};