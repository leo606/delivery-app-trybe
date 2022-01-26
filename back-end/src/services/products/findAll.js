const model = require('../../database/models');

module.exports = async () => {
  try {
    const products = await model.products.findAll();
    return products;
  } catch (e) {
    console.log(e);
  }
};