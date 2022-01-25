module.exports = async (req, res, _next) => {
  try {
    res.status(200).json(req.user);
  } catch (e) {
    console.log(e);
  }
};