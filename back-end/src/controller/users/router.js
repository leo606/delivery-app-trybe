const express = require('express');

const userRouter = express.Router({ mergeParams: true });

userRouter.get('/new');

module.exports = userRouter;