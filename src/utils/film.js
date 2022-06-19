import dayjs from 'dayjs';

const humanizeFilmRuntime = (runtimeDate) => dayjs(runtimeDate).
  format('H[h] m[m]');
const humanizeFilmReleaseDate = (releaseDate) => dayjs(releaseDate).
  format('D MMMM YYYY');
const humanizeFilmCommentDate = (commentDate) => dayjs(commentDate).
  format('YYYY/MM/DD HH:MM');

const sortByDate = (film1, film2) => (
  dayjs(film2.releaseDate).diff(dayjs(film1.releaseDate))
);

const sortByRating = (film1, film2) => (
  film2.rating - film1.rating
);

export {
  humanizeFilmRuntime,
  humanizeFilmReleaseDate,
  humanizeFilmCommentDate,
  sortByDate,
  sortByRating,
};
