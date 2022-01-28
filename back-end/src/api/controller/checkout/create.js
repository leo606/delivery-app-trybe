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

module.exports = async (req, res, next) => {
  const userId = req.user.id;
  try {
    const newSaleId = await create({ ...serializeBody(req.body), userId });

    if (newSaleId.err) {
      next({ ...newSaleId.err });
    }

    res.status(statusCodes.created).json({ id: newSaleId });
  } catch (e) {
    console.log(e);
  }
};
