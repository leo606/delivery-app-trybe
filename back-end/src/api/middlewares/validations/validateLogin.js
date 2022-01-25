const { loginSchema } = require('../../../helpers/joiSchemas');

module.exports = (req, _res, next) => {
  try {
    const { email, password } = req.body;

    const isValid = loginSchema.validate({ email, password });
    if (isValid.error) {
      return next({ code: 400, message: isValid.error.message });
    }
    
    req.user = { email, password };
    next();
  } catch (e) {
    console.log(e);
  }
};