import {
  getRandomInteger,
  getRandomDateInRange,
  getRandomArrayElement,
  getRandomArrayElements,
} from '../utils/utils.js';

import { humanizeFilmRuntime } from '../utils/film.js';
import { generateRandomComments } from './comments';

const FILM_TITLES = [
  'Made for each other',
  'Popeye meets sinbad',
  'Sagebrush trail',
  'Santa claus conquers the martians',
  'The dance of life',
  'The great flamarion',
  'The man with the golden arm'
];

const FILM_POSTERS = [
  'made-for-each-other.png',
  'popeye-meets-sinbad.png',
  'sagebrush-trail.jpg',
  'santa-claus-conquers-the-martians.jpg',
  'the-dance-of-life.jpg',
  'the-great-flamarion.jpg',
  'the-man-with-the-golden-arm.jpg'
];

const GENRES = [
  'Action',
  'Adventure',
  'Cartoon',
  'Comedy',
  'Crime',
  'Mystery',
  'Fantasy',
  'Historical',
  'Horror',
  'Fiction',
  'Thriller',
  'Western'
];

const AGE_RESTRICTIONS = [
  '0+',
  '3+',
  '18+'
];

const COUNTRIES = [
  'Russia',
  'Spain',
  'China',
  'Australia',
  'USA'
];

const NAMES = [
  'Bethany',
  'Alice',
  'Jessica',
  'Amelia',
  'Poppy',
  'Grace',
  'Ella',
  'Scarlett'
];

const DESCRIPTIONS = [
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

const getRandomRuntime = () => {
  const date = new Date();
  date.setHours(getRandomInteger(1, 3), getRandomInteger(0, 59));
  return humanizeFilmRuntime(date);
};

const getRandomGenres = () => {
  const genres = [];
  for (let i = 0; i < 3; i++) {
    const genre = GENRES[getRandomInteger(0, GENRES.length - 1)];
    if (!genres.includes(genre)) {
      genres.push(genre);
    }
  }
  return genres;
};

export const generateFilm = (id) => {
  const filmTitle = getRandomArrayElement(FILM_TITLES);
  return (
    {
      id: id,
      title: filmTitle,
      originalTitle: filmTitle,
      poster: getRandomArrayElement(FILM_POSTERS),
      rating: `${getRandomInteger(1, 9)}.${getRandomInteger(1, 9)}`,
      releaseDate: getRandomDateInRange(1940, 2022),
      runtime: getRandomRuntime(),
      genres: new Set(getRandomGenres()),
      description: getRandomArrayElement(DESCRIPTIONS),
      director: NAMES[getRandomInteger(0, NAMES.length - 1)],
      writers: new Set(getRandomArrayElements(NAMES, 3)),
      actors: new Set(getRandomArrayElements(NAMES, 3)),
      country: getRandomArrayElement(COUNTRIES),
      ageRestriction: getRandomArrayElement(AGE_RESTRICTIONS),
      userDetails: {
        watchlist: Boolean(getRandomInteger(0, 1)),
        alreadyWatched: Boolean(getRandomInteger(0, 1)),
        watchingDate: getRandomDateInRange(1941, 2022),
        favorite: Boolean(getRandomInteger(0, 1))
      },
      comments: generateRandomComments(getRandomInteger(0, 10), id)
    }
  );
};
