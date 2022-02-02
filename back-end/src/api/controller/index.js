const express = require('express');

const router = express.Router();

// localhost:3001/
router.use('/login', require('./login/router'));
router.use('/register', require('./register/router'));
router.use('/checkout', require('./checkout/router'));
router.use('/products', require('./products/router'));
router.use('/sale', require('./sales/route'));
router.use('/customer', require('./customer/router'));
router.use('/users', require('./users/router'));

module.exports = router;