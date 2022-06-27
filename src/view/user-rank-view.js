import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import { UserRank } from '../const.js';

const MIN_FILMS_AMOUNT_WATCHED_BY_NOVISE = 1;
const MAX_FILMS_AMOUNT_WATCHED_BY_NOVISE = 10;
const MIN_FILMS_AMOUNT_WATCHED_BY_FAN = 11;
const MAX_FILMS_AMOUNT_WATCHED_BY_FAN = 20;
const MIN_FILMS_AMOUNT_WATCHED_BY_BUFF = 11;

const getUserRank = (watchedFilmsCount) => {
  if (watchedFilmsCount >= MIN_FILMS_AMOUNT_WATCHED_BY_NOVISE && watchedFilmsCount <= MAX_FILMS_AMOUNT_WATCHED_BY_NOVISE) {
    return UserRank.NOVICE;
  }
  if (watchedFilmsCount >= MIN_FILMS_AMOUNT_WATCHED_BY_FAN && watchedFilmsCount <= MAX_FILMS_AMOUNT_WATCHED_BY_FAN) {
    return UserRank.FAN;
  }
  if (watchedFilmsCount >= MIN_FILMS_AMOUNT_WATCHED_BY_BUFF) {
    return UserRank.MOVIE_BUFF;
  }
  return UserRank.NONE;
};

const getUserRankTemplate = (watchedFilmsCount, isLoaded) => (`
   <section class="header__profile profile">
     <p class="profile__rating">${getUserRank(watchedFilmsCount)}</p>
     <img class="profile__avatar ${!isLoaded ? 'visually-hidden' : ''}" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
   </section>
 `);

export default class UserRankView extends AbstractStatefulView {

  #isModelLoaded = false;
  #watchedFilmsCount = null;

  constructor(watchedFilmsCount, isModelLoaded) {
    super();
    this.#watchedFilmsCount = watchedFilmsCount;
    this.#isModelLoaded = isModelLoaded;
  }

  get template() {
    return getUserRankTemplate(this.#watchedFilmsCount, this.#isModelLoaded);
  }
}
