const fs = require('fs');
const jwt = require('jsonwebtoken');

const secret = fs.readFileSync(`${__dirname}/../../jwt.evaluation.key`, 'utf-8').trim();

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

module.exports = (data) => {
  const token = jwt.sign({ data }, secret, jwtConfig);
  return token;
};