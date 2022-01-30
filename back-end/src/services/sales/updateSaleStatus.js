const { sales } = require('../../database/models');

module.exports = async (id, status) => {
  try {
    const update = await sales.update(
      { status },
      { where: { id } },
    );
    return update;
  } catch (e) {
    console.log(e);
  }
};