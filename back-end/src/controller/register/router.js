const express = require('express');
const { validateRegister, validateUniqueEmail } = require('../../api/middlewares/validations');

const router = express.Router({ mergeParams: true });

router.post('/', validateRegister, validateUniqueEmail, require('./create'));

module.exports = router;