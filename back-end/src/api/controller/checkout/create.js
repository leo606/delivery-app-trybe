module.exports = async (_req, res, _next) => {
  try {
    res.status(501).end();
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