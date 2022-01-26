const express = require('express');
const { decode } = require('../../middlewares/validations');

const router = express.Router({ mergeParams: true });

router.post('/', decode, require('./create'));

module.exports = router;