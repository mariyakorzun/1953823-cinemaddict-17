import FilmModel from './model/film-model';
import FilmsPresenter from './presenter/films-presenter.js';
import FilterView from './view/filter-view.js';
import UserRankView from './view/user-rank-view.js';
import PopupView from './view/popup-view.js';
import {render} from './render.js';

const appBodyElement = document.querySelector('body');
const appMainElement = document.querySelector('.main');
const appHeaderElement = document.querySelector('.header');
const filmPresenter = new FilmsPresenter();
const filmModel = new FilmModel();

render(new UserRankView(), appHeaderElement);
render(new FilterView(), appMainElement);
render(new PopupView(), appBodyElement);

filmPresenter.init(appMainElement, filmModel);
