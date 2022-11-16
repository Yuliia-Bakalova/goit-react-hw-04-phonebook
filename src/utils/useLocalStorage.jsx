export const localStorageGetItem = item => {
  JSON.parse(localStorage.getItem(item));
};

export const localStorageSetItem = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item));
};