import {getRandomInteger, getRandomDate} from '../utils.js';
import {faker} from '@faker-js/faker';

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

const createRandomText = () => (
  faker.lorem.sentence()
);

const generateComment = (filmId) => ({
  text: createRandomText(),
  emoji: EMOJIS[getRandomInteger(0, EMOJIS.length - 1)],
  author: NAMES[getRandomInteger(0, NAMES.length - 1)],
  date: getRandomDate(2000, 2022),
  filmId: filmId
});

const genarateRandomComments = (count, filmId) => (
  Array.from({ length: count }, () => generateComment(filmId))
);

export {genarateRandomComments};
