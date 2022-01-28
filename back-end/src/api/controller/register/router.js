const express = require('express');
const {
  validateRegister,
  validateUniqueEmail,
  validateAdminRegister,
} = require('../../middlewares/validations');
const decode = require('../../middlewares/validations/decode');

const router = express.Router({ mergeParams: true });

router.post('/', validateRegister, validateUniqueEmail, require('./create'));
router.post('/admin', validateAdminRegister, validateUniqueEmail, decode, require('./createAdmin'));

module.exports = router;