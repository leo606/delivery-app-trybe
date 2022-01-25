const statusCodes = require('../../../helpers/statusCodes.json');

const error = (err, _req, res, _next) => 
   res.status(statusCodes[err.code]).json({ message: err.message });
module.exports = error;