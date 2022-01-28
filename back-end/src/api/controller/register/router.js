const express = require('express');
const { validateRegister, validateUniqueEmail } = require('../../middlewares/validations');
// const authRegister = require('../../middlewares/validations/authRegister');

const router = express.Router({ mergeParams: true });

router.post('/', validateRegister, validateUniqueEmail, require('./create'));

module.exports = router;