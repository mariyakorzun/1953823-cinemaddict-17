import FilmsListView from '../view/films-list-view.js';
import SortView from '../view/sort-view.js';
import ShowMoreBtnView from '../view/show-more-button-view.js';
import ExtraFilmListView from '../view/extra-film-list-view.js';
import FilmPresenter from './film-presenter.js';
import FilterPresenter from './filter-presenter.js';
import { SortType } from '../const.js';
import {
  sortByDate,
  sortByRating,
} from '../utils/film.js';
import {
  render,
  RenderPosition,
  remove,
} from '../framework/render.js';
import {
  listToMap,
  mapValuesToList,
  updateItem,
} from '../utils/utils.js';

const MAX_FILMS_COUNT_AT_ONCE = 5;
const MAX_EXTRA_FILM_COUNT = 2;

export default class FilmListPresenter {
  #filmListView = new FilmsListView();
  #showMoreBtnView = new ShowMoreBtnView();
  #sortView = new SortView();
  #renderedFilmsCount = 0;
  #filmModel = null;
  #originalFilmList = null;
  #filmList = null;
  #filmsById = null;
  #container = null;
  #filmPresentersByFilmId = new Map();
  #filterPresenter = null;
  #currentSortType = SortType.DEFAULT;

  constructor(container, filmModel) {
    this.#container = container;
    this.#filmModel = filmModel;
    this.#originalFilmList = [...this.#filmModel.films];
    this.#filmList = [...this.#filmModel.films];
  }

  init = () => {
    this.#filmsById = listToMap(this.#filmModel.films, (object) => object.id);
    this.#filterPresenter = new FilterPresenter(this.#container);
    this.#filterPresenter.init(this.#filmList);
    this.#renderFilmCardList();
  };

  #renderFilmCardList() {
    render(this.#filmListView, this.#container);
    if (this.#filmList.length > MAX_FILMS_COUNT_AT_ONCE) {
      this.#showMoreBtnView.setClickHandler(() => this.#onShowMoreBtnClick(this.#filmList));
      render(this.#showMoreBtnView, this.#filmListView.filmListElement);
    }
    if (this.#filmList.length > 0) {
      this.#onShowMoreBtnClick(this.#filmList);
      this.#renderSort();
      this.#renderExtraFilmList('Top rated', this.#filmModel.topRatedFilms.slice(0, MAX_EXTRA_FILM_COUNT));
      this.#renderExtraFilmList('Most commented', this.#filmModel.mostCommentedFilms.slice(0, MAX_EXTRA_FILM_COUNT));
      return;
    }
    this.#filmListView.showEmptyFilmListMessage();
  }

  #clearFilmCardList = () => {
    remove(this.#filmListView);
    this.#filmPresentersByFilmId.clear();
    this.#renderedFilmsCount = 0;
    remove(this.#showMoreBtnView);
  };

  #renderSort = () => {
    render(this.#sortView, this.#filmListView.filmsElement, RenderPosition.BEFOREBEGIN);
    this.#sortView.setSortTypeChangeHandler(this.#handleSortTypeChange);
  };

  #renderFilm = (film, container) => {
    const filmPresenter = new FilmPresenter(container, this.#handleFilmChange);
    filmPresenter.init(film, this.#filmModel.getCommentsByFilmId(film.id));
    const presenters = this.#filmPresentersByFilmId.get(film.id);
    if (presenters) {
      presenters.push(filmPresenter);
      return;
    }
    this.#filmPresentersByFilmId.set(film.id, [filmPresenter]);
  };

  #renderExtraFilmList(title, films) {
    if (films.length === 0) {
      return;
    }
    const view = new ExtraFilmListView(title);
    render(view, this.#filmListView.filmsElement);
    films.forEach((film) => {
      this.#renderFilm(film, view.filmListContainer);
    });
  }

  #onShowMoreBtnClick = (films) => {
    const maxPossibleCount = Math.min(films.length, this.#renderedFilmsCount + MAX_FILMS_COUNT_AT_ONCE);
    for (let i = this.#renderedFilmsCount; i < maxPossibleCount; i++) {
      this.#renderFilm(films[i], this.#filmListView.filmListContainer);
      this.#renderedFilmsCount++;
    }
    if (this.#renderedFilmsCount === films.length) {
      this.#showMoreBtnView.element.remove();
    }
  };

  #handleFilmChange = (updatedFilm) => {
    const updatedFilms = updateItem(mapValuesToList(this.#filmsById), updatedFilm);
    this.#filmsById = listToMap(updatedFilms, (film) => film.id);
    this.#filmPresentersByFilmId.get(updatedFilm.id).forEach((presenter) => {
      presenter.init(updatedFilm, this.#filmModel.getCommentsByFilmId(updatedFilm.id));
    });
    this.#filterPresenter.init(updatedFilms);
  };

  #sortFilms = (sortType) => {
    if (sortType === SortType.DATE) {
      this.#filmList.sort(sortByDate);
    } else if (sortType === SortType.RATING) {
      this.#filmList.sort(sortByRating);
    } else {
      this.#filmList = [...this.#originalFilmList];
    }
    this.#currentSortType = sortType;
  };

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }
    this.#sortFilms(sortType);
    this.#clearFilmCardList();
    this.#renderFilmCardList();
  };
}
