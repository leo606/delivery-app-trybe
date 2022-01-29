const model = require('../../database/models');

module.exports = async ({ name, email, password, role }) => {
  try {
    const user = await model.users.create(
      { name, email, password, role },
    );
    return { id: user.id, name: user.name, email: user.email };
  } catch (e) {
    console.log(e);
  }
};