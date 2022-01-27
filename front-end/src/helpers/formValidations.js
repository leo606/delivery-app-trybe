export const emailValidate = (email) => {
  const emailRegex = /\w+@\w+.com(.br)?/;
  if (!email) return false;
  if (emailRegex.test(email)) return true;
  return false;
};

export const passwordValidate = (password) => {
  const passwordLength = 6;
  if (!password) return false;
  if (password.length < passwordLength) return false;
  return true;
};

export const nameValidate = (name) => {
  const nameLength = 12;
  if (!name) return false;
  if (name.length < nameLength) return false;
  return true;
};

export const loginValidate = (email, password) => {
  if (emailValidate(email) && passwordValidate(password)) return true;
  return false;
};

export const registerValidate = (email, password, name) => {
  if (emailValidate(email) && passwordValidate(password) && nameValidate(name)) {
    return true;
  }
  return false;
};
