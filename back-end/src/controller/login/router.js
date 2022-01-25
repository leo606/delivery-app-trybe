const express = require('express');
const validateLogin = require('../../api/middlewares/validations/validateLogin');
const auth = require('../../api/middlewares/validations/auth');

const router = express.Router({ mergeParams: true });

// localhost:3001/login/
router.post('/', validateLogin, auth, require('./create'));

module.exports = router;