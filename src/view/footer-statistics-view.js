import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';

const getFooterStatisticsTemplate = (filmsCount) => `<p>${filmsCount} movies inside</p>`;

export default class FooterStatisticsView extends AbstractStatefulView {

  #filmsCount = null;
  #template = null;

  constructor(filmsCount) {
    super();
    this.#filmsCount = filmsCount;
    this.#template = getFooterStatisticsTemplate(filmsCount);
  }

  get template() {
    return this.#template;
  }
}
