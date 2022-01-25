const express = require('express');
const validateLogin = require('../../middlewares/validations/validateLogin');

const router = express.Router({ mergeParams: true });

// localhost:3001/login/
router.post('/', validateLogin, auth, require('./create'));

module.exports = router;