import FilmModel from './model/film-model.js';
import HeaderPresenter from './presenter/header-presenter';
import FilmListPresenter from './presenter/film-list-presenter';
import FooterStatisticsView from './view/footer-statistics-view.js';
import FilterModel from './model/filter-model';
import FilterPresenter from './presenter/filter-presenter.js';
import { render } from './framework/render.js';

const appMainElement = document.querySelector('.main');
const appHeaderElement = document.querySelector('.header');
const appFooterStatisticsElement = document.querySelector('.footer__statistics');
const filmModel = new FilmModel();
const filterModel = new FilterModel();
const headerPresenter = new HeaderPresenter(appHeaderElement, filmModel);
const filterPresenter = new FilterPresenter(appMainElement, filterModel, filmModel);
const filmListPresenter = new FilmListPresenter(appMainElement, filmModel, filterModel, filterPresenter);

headerPresenter.init();
filterPresenter.init();
filmListPresenter.init(appMainElement, filmModel);
render(new FooterStatisticsView(filmModel.films.length), appFooterStatisticsElement);
