const express = require('express');
const { auth, validateLogin } = require('../../middlewares/validations');

const router = express.Router({ mergeParams: true });

// localhost:3001/login/
router.post('/', validateLogin, auth, require('./create'));

module.exports = router;