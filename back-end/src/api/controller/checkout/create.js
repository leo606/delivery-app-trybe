const statusCodes = require('../../../helpers/statusCodes.json');
const { create } = require('../../../services/checkout');

function serializeBody(body) {
  const {
    sellerId,
    deliveryAddress,
    deliveryNumber,
    products: productsList,
    total: totalPrice,
  } = body;
  return {
    sellerId,
    deliveryAddress,
    deliveryNumber,
    productsList,
    totalPrice,
  };
}

module.exports = async (req, res, _next) => {
  const userId = req.user.id;
  console.log(req.user.id);
  try {
    const newSale = await create({ ...serializeBody(req.body), userId });
    res.status(statusCodes.created).json(newSale);
  } catch (e) {
    console.log(e);
  }
};
