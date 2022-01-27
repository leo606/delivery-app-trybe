const fs = require('fs');
const jwt = require('jsonwebtoken');

const secret = fs.readFileSync(`${__dirname}/../../../../jwt.evaluation.key`, 'utf-8')
.trim();

module.exports = async (req, _res, next) => {
  try {
    const token = req.headers.authorization;

    const decoded = jwt.verify(token, secret);

    req.user = { ...decoded.data };
    next();
  } catch (e) {
    next({ code: 'unauthorized', message: e.message });
  }
};