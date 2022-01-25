const express = require('express');

const validateRegister = require('../../api/middlewares/validations/validateRegister');
const validateUniqueEmail = require('../../api/middlewares/validations/validateUniqueEmail');

const router = express.Router({ mergeParams: true });

router.post('/', validateRegister, validateUniqueEmail, require('./create'));

module.exports = router;