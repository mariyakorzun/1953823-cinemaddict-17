import FilmModel from './model/film-model.js';
import HeaderPresenter from './presenter/header-presenter';
import FilmsPresenter from './presenter/films-presenter.js';

const appMainElement = document.querySelector('.main');
const appHeaderElement = document.querySelector('.header');
const headerPresenter = new HeaderPresenter();
const filmPresenter = new FilmsPresenter();
const filmModel = new FilmModel();

headerPresenter.init(appHeaderElement);
filmPresenter.init(appMainElement, filmModel);
