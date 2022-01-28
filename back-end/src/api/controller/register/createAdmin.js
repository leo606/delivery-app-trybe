const statusCodes = require('../../../helpers/statusCodes.json');
const { create } = require('../../../services/users');

module.exports = async (req, res, _next) => {
  const { user, body } = req;
  const { name, email, password, role } = body;
  if (user.role !== 'administrator') {
    return res.status(statusCodes.unauthorized).json({ message: 'unauthorized' });
  }

  const { id } = await create({ name, email, password, role });
  return res.status(statusCodes.created).json({ id, name, email, role });
};
