const response = (code, message) => ({ code, message });

const emailValid = (email) => {
  if (typeof email === 'string' && email.length === 0) {
    return response(400, 'message');
  }

  if (!email) {
    return response(400, 'message');
  }
  if (!email.match(/^[a-z0-9_.-]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/)) {
    return response(400, 'message');
  }
};

module.exports = {
emailValid,
};