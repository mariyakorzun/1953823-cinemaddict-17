import {generateFilm} from '../mock/film.js';
import {generateRandomComments} from '../mock/comment.js';

export default class FilmModel {

  #films = Array.from({ length: 22 }, (elem, i) => generateFilm(i.toString()));
  #commentsByFilmId = new Map();

  constructor() {
    this.#films.forEach((film) => {
      for (let i = 0; i < film.commentsCount; i++) {
        this.#commentsByFilmId.set(film.id, generateRandomComments(film.commentsCount, film.id));
      }
    });
  }

  get films() {
    return this.#films;
  }

  getCommentsByFilmId(filmId) {
    const comments = this.#commentsByFilmId.get(filmId);
    if (comments) {
      return comments;
    }
    return [];
  }
}
