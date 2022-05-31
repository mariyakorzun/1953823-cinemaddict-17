import FilmModel from './model/film-model.js';
import FilmsPresenter from './presenter/films-presenter.js';
//import FilterView from './view/filter-view.js';
//import UserRankView from './view/user-rank-view.js';
//import FilmDetailsPopupView from './view/popup-view.js';
//import {render} from './render.js';

//const appBodyElement = document.querySelector('body');
const appMainElement = document.querySelector('.main');
const appHeaderElement = document.querySelector('.header');
const filmPresenter = new FilmsPresenter();
const filmModel = new FilmModel();

//render(new UserRankView(), appHeaderElement);
//render(new FilterView(), appMainElement);
//render(new FilmDetailsPopupView(filmModel), appBodyElement);

filmPresenter.init(appHeaderElement);
filmPresenter.init(appMainElement, filmModel);
