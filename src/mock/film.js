import {getRandomInteger, getRandomDate, humanizeFilmRuntime} from '../utils.js';
import {faker} from '@faker-js/faker';

const POSTERS = new Map([
  ['Made for each other', 'made-for-each-other.png'],
  ['Popeye meets sinbad', 'popeye-meets-sinbad.png'],
  ['Sagebrush trail', 'sagebrush-trail.jpg'],
  ['Santa claus conquers the martians', 'santa-claus-conquers-the-martians.jpg'],
  ['The dance of life', 'the-dance-of-life.jpg'],
  ['The great flamarion', 'the-great-flamarion.jpg'],
  ['The man with the golden arm', 'the-man-with-the-golden-arm.jpg']
]);

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
  '18+',
  'NaN+'
];

const COUNTRIES = [
  'Russia',
  'Spain',
  'China',
  'Australia',
  'USA'
];

const NAMES = [
  'Anthony Mann',
  'Anne Wigton',
  'Heinz Herald',
  'Richard Weil',
  'Erich von Stroheim',
  'Mary Beth Hughes',
  'Dan Duryea',
  'John Wayne'
];

const getRandomName = () => {
  const keys = Array.from(POSTERS.keys());
  return keys[getRandomInteger(0, keys.length - 1)];
};

const getRandomDescription = () => (
  Array.from({ length: getRandomInteger(1, 5) }, faker.lorem.sentence).join(' ')
);

const getRandomPeopleList = () => {
  const people = [];
  for (let i = 0; i < getRandomInteger(1, 3); i++) {
    people.push(NAMES[getRandomInteger(0, NAMES.length - 1)]);
  }
  return people;
};

const getRandomRuntime = () => {
  const date = new Date();
  date.setHours(getRandomInteger(1, 3), getRandomInteger(0, 59));
  return humanizeFilmRuntime(date);
};

const getRandomGenres = () => {
  const genres = [];
  for (let i = 0; i < 3; i++) {
    genres.push(GENRES[getRandomInteger(0, GENRES.length - 1)]);
  }
  return genres;
};

export const generateFilm = (id) => {
  const filmTitle = getRandomName();
  return (
    {
      id: id,
      title: filmTitle,
      originalTitle: filmTitle,
      poster: POSTERS.get(filmTitle),
      rating: `${getRandomInteger(1, 9)}.${getRandomInteger(1, 9)}`,
      releaseDate: getRandomDate(1940, 2022),
      runtime: getRandomRuntime(),
      genres: new Set(getRandomGenres()),
      description: getRandomDescription(),
      commentsCount: getRandomInteger(0, 20),
      director: NAMES[getRandomInteger(0, NAMES.length - 1)],
      writers: new Set(getRandomPeopleList()),
      actors: new Set(getRandomPeopleList()),
      country: COUNTRIES[getRandomInteger(0, COUNTRIES.length - 1)],
      ageRestriction: AGE_RESTRICTIONS[getRandomInteger(0, AGE_RESTRICTIONS.length -1)]
    }
  );
};
