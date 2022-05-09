import FilmsView from '../view/films-view.js';
import FilterView from '../view/filter-view.js';
import FilmsListView from '../view/films-list-view.js';
import FilmsListContainerView from '../view/films-list-container-view.js';
import FilmCardView from '../view/film-card-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import PopupView from '../view/popup-view.js';
import {render, RenderPosition} from '../render.js';

export default class FilmsPresenter {
  filmListView = new FilmsListView();
  filmListContainerView = new FilmsListContainerView();

  init = (filmsContainer, filmModel) => {
    this.filmModel = filmModel;
    this.films = [...this.filmModel.getFilms()];
    this.currentFilm = this.filmModel.getFilms()[0];
    this.currentFilmComments = [...this.filmModel.getComments().get(this.currentFilm.id)];
    render(new PopupView(this.currentFilm, this.currentFilmComments), filmsContainer, RenderPosition.AFTEREND);

    render(new FilterView(), filmsContainer);
    render(this.filmListView, filmsContainer);
    render(this.filmListContainerView, this.filmListView.getElement());

    for (let i = 0; i < 5; i++) {
      render(new FilmCardView(this.films[i]), this.filmListContainerView.getElement());
    }

    render(new ShowMoreButtonView(), filmsContainer);
  };
}
