const fs = require('fs');
const jwt = require('jsonwebtoken');
const { get } = require('../../../services/login');

const secret = fs.readFileSync(`${__dirname}/jwt.evaluation.key`, 'utf8');

module.exports = async () => {
  try {
    
  } catch (e) {
    console.log(e);
  }
};