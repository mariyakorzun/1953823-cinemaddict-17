import {getRandomInteger, getRandomDate, getRandomArrayElement} from '../utils.js';

const EMOJIS = [
  'smile',
  'sleeping',
  'puke',
  'angry'
];

const NAMES = [
  'Ivan Ivanov',
  'Petr Petrov',
  'Maksim Smirnov',
  'Alexey Alexeev',
  'Roman Romanov',
  'Anton Antonenko',
  'Anna Mihailova',
  'Ksenia Lapenko',
  'Karina Mokshina',
  'Sergey Sergeev',
  'Alexey Kondryshev'
];

const COMMENTS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Aliquam erat volutpat.',
  'Nunc fermentum tortor ac porta dapibus.',
  'In rutrum ac purus sit amet tempus.'
];

const text = getRandomArrayElement(COMMENTS),
  emoji = EMOJIS[getRandomInteger(0, EMOJIS.length - 1)],
  author = NAMES[getRandomInteger(0, NAMES.length - 1)],
  date = getRandomDate(2000, 2022);

const generateComment = (filmId) => ({
  text: text,
  emoji: emoji,
  author: author,
  date: date,
  filmId: filmId
});

const genarateRandomComments = (count, filmId) => (
  Array.from({length: count}, () => generateComment(filmId))
);

export {genarateRandomComments};
