const getLocalStorage = (key) => {
  const obj = localStorage.getItem(key);
  return JSON.parse(obj);
};

export default getLocalStorage;
