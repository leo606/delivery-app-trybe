const fs = require('fs');
const jwt = require('jsonwebtoken');
const { get } = require('../../../services/login');

const secret = fs.readFileSync(`${__dirname}/../../../../jwt.evaluation.key`, 'utf-8')
.trim();

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

module.exports = async (req, res, next) => {
  try {
    const user = await get(req.user);
    if (user.err) {
      next({ ...user.err });
    }

    const token = jwt.sign({ data: user }, secret, jwtConfig);
    req.user = { ...user, token };
    next();
  } catch (e) {
    console.log(e);
  }
};