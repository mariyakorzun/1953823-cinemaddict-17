import FilmModel from './model/film-model.js';
import HeaderPresenter from './presenter/header-presenter';
import FilmListPresenter from './presenter/film-list-presenter';
import FooterStatisticsView from './view/footer-statistics-view.js';
import { render } from './framework/render.js';

const appMainElement = document.querySelector('.main');
const appHeaderElement = document.querySelector('.header');
const appFooterStatisticsElement = document.querySelector('.footer .footer__statistics');
const filmModel = new FilmModel();
const headerPresenter = new HeaderPresenter();
const filmListPresenter = new FilmListPresenter(appMainElement, filmModel);

headerPresenter.init(appHeaderElement);
filmListPresenter.init(appMainElement, filmModel);
render(new FooterStatisticsView(filmModel.films.length), appFooterStatisticsElement);
