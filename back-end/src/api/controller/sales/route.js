const express = require('express');
const { decode } = require('../../middlewares/validations');

const router = express.Router({ mergeParams: true });

// localhost:3001/sale/
router.get('/:id', decode, require('./get'));

module.exports = router;