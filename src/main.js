import FilmModel from './model/film-model.js';
import HeaderPresenter from './presenter/header-presenter';
import FilmListPresenter from './presenter/film-list-presenter';
import FilterModel from './model/filter-model';
import FilterPresenter from './presenter/filter-presenter.js';
import FilmApiService from './film-api-service';
import FooterPresenter from './presenter/footer-presenter';

const AUTHORIZATION = 'Basic kcCefnkZYprbyR8Q7TSQ';
const END_POINT = 'https://17.ecmascript.pages.academy/cinemaddict';

const appMainElement = document.querySelector('.main');
const appHeaderElement = document.querySelector('.header');
const appFooterStatisticsElement = document.querySelector('.footer__statistics');
const filmModel = new FilmModel(new FilmApiService(END_POINT, AUTHORIZATION));
filmModel.init();
const filterModel = new FilterModel();
const headerPresenter = new HeaderPresenter(appHeaderElement, filmModel);
const filterPresenter = new FilterPresenter(appMainElement, filterModel, filmModel);
const filmListPresenter = new FilmListPresenter(appMainElement, filmModel, filterModel, filterPresenter);
const footerPresenter = new FooterPresenter(appFooterStatisticsElement, filmModel);

headerPresenter.init();
filterPresenter.init();
filmListPresenter.init(appMainElement, filmModel);
footerPresenter.init();
