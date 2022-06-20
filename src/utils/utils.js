const ALERT_SHOW_TIME = 5000;

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(
  0, elements.length - 1
)];

function MakeRandomArray () {
  return Math.random() - 0.5;
}

const getRandomArrayElements = (elements, length) => {
  const newArray = elements.slice();
  newArray.sort(MakeRandomArray);
  return newArray.splice(0, length - 1);
};

const listToMap = (list, keyGetter) => {
  const map = new Map();
  list.forEach((item) => {
    map.set(keyGetter(item), item);
  });
  return map;
};

const mapValuesToList = (map) => (
  Array.from(map.values())
);

const isEscapeKey = (evt) => (
  evt.key === 'Escape'
);

const isCtrlEnterKey = (evt) => (
  evt.ctrlKey && evt.key === 'Enter'
);

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.textContent = message;
  document.body.append(alertContainer);
  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {
  getRandomArrayElement,
  getRandomArrayElements,
  listToMap,
  mapValuesToList,
  isEscapeKey,
  isCtrlEnterKey,
  showAlert,
};