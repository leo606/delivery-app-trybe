const fs = require('fs');
const jwt = require('jsonwebtoken');

const secret = fs.readFileSync(`${__dirname}/../../../../jwt.evaluation.key`, 'utf8');

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    const decoded = jwt.verify(token, secret);

    req.user = { ...decoded.data };
    next();
  } catch (e) {
    next({ code: 'unauthorized', message: 'token invalid' });
  }
};