const express = require('express');
const { decode } = require('../../middlewares/validations');

const router = express.Router({ mergeParams: true });

router.get('/orders', decode, require('./listClientOrders'));

module.exports = router;