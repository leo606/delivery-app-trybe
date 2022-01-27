const fs = require('fs');
const jwt = require('jsonwebtoken');

const secret = fs.readFileSync(`${__dirname}/../../../../jwt.evaluation.key`, 'utf-8')
.trim();

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

module.exports = async (req, res, next) => {
  try {
    const user = req.body;
    const token = jwt.sign({ data: user }, secret, jwtConfig);
    req.token = { token };
    next();
  } catch (e) {
    console.log(e);
  }
};