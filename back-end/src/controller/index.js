const express = require('express');

const router = express.Router();

// localhost:3001/
router.use('/login', require('./login/router'));
router.use('/register', require('./register/router'));
router.use('/customer', require('./customer/router'));
router.use('/admin', require('./admin/router'));

module.exports = router;