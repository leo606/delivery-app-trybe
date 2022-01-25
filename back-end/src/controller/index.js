const express = require('express');

const router = express.router();

// localhost:3001/
router.use('/login', require('./login/router'));
router.use('/customer', require('./customer/router'));
router.use('/user', require('./users/router'));

module.exports = router;