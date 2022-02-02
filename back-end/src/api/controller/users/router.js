const express = require('express');
const { decode } = require('../../middlewares/validations');

const router = express.Router({ mergeParams: true });

router.get('/sellers', decode, require('./getSellers'));
router.get('/all', decode, require('./getAllUsers'));

module.exports = router;