const statusCodes = require('../../../helpers/statusCodes.json');
const { createUser } = require('../../../services/register');

module.exports = async (req, res, _next) => {
  const { user, body } = req;
  const { name, email, password, role } = body;
  if (user.role !== 'administrator') {
    return res.status(statusCodes.unauthorized).json({ message: 'unauthorized' });
  }

  const { id } = await createUser({ name, email, password, role });
  return res.status(statusCodes.created).json({ id, name, email, role });
};
