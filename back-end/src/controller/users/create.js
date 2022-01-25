const express = require('express');
const user = require('../../services/user/createUser');
const validateUser = require('../../services/user/userValidate');

const router = express.Router();

router.post('/', validateUser, async (req, res, next) => {
  try {
    // COLOCAMOS as informações em um objeto para manipular em um código mais limpo
    const objUser = req.body;
    // fazemos uma solicitação para o service para criar o usuario
    const created = await user.create(objUser);

    return res.status(201).json({ created });
  } catch (e) {
    console.log(e.message);
    return next(e);
  }
});

module.exports = router;