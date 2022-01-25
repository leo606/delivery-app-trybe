module.exports = async (req, res, _next) => {
  try {
    const { role, token } = req.user;
    res.status(200).json({ role, token });
  } catch (e) {
    console.log(e);
  }
};