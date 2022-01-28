const statusCodes = require('../../../helpers/statusCodes.json');
const { create } = require('../../../services/checkout');

module.exports = async (req, res, _next) => {
  const userId = req.user.id;
  const { sellerId, products: productsList, total } = req.body;

  try {
    const newSale = await create({ userId, sellerId, productsList, total });
    res.status(statusCodes.created).json(newSale);
  } catch (e) {
    console.log(e);
  }
};

// sale from front:
// {
//   sellerId,
//   products: [{ id, quantity }, ...],
//   total,
// }

// sale:
// {
//   user_id: 2,
//   seller_id: 1,
//   total_price: 99.9,
//   delivery_address: "address",
//   delivery_number: "23",
//   sale_date: new Date(Date.now()),
//   status: "ordered",
// },