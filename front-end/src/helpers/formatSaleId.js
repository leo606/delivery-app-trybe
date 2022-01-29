module.exports = (num) => {
  const { length } = num.toString();
  return `0000${num}`.slice(length);
};
