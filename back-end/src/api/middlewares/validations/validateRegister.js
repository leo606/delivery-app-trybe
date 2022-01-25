const { registerSchema } = require('../../../helpers/joiSchemas');

module.exports = (req, _res, next) => {
  try {
    const { body } = req;
    const { error } = registerSchema.validate(body);
    if (error) {
      return next({ code: 'badRequest', message: error.message });
    }
    next();
  } catch (e) {
    console.log(e);
  }
};
