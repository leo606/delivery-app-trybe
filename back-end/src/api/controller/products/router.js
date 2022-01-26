const express = require('express');
const { decode } = require('../../middlewares/validations');

const router = express.Router({ mergeParams: true });

router.get('/', decode, require('./getAll'));

module.exports = router;