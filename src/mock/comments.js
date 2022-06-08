import {
  getRandomDate,
  getRandomArrayElement,
} from '../utils.js';

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

const generateComment = (filmId) => ({
  text: getRandomArrayElement(COMMENTS),
  emoji: getRandomArrayElement(EMOJIS),
  author: getRandomArrayElement(NAMES),
  date: getRandomDate(2000, 2022),
  filmId
});

const generateRandomComments = (count, filmId) => (
  Array.from({length: count}, () => generateComment(filmId))
);

export { generateRandomComments };
