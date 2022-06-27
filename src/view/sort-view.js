import { SortType } from '../const.js';
import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';

const activeElementClass = 'sort__button--active';

const getSortTemplate = () => (`
   <ul class="sort">
    <li><a href="#" data-sort-type="${SortType.DEFAULT}" class="sort__button ${activeElementClass}">Sort by default</a></li>
    <li><a href="#" data-sort-type="${SortType.DATE}" class="sort__button">Sort by date</a></li>
    <li><a href="#" data-sort-type="${SortType.RATING}" class="sort__button">Sort by rating</a></li>
   </ul>
 `);

export default class SortView extends AbstractStatefulView {

  get template() {
    return getSortTemplate();
  }

  setSortTypeChangeHandler = (cb) => {
    this._callback.sortTypeChange = cb;
    this.element.addEventListener('click', this.#sortTypeChangeHandler);
  };

  #sortTypeChangeHandler = (evt) => {
    if (evt.target.tagName !== 'A') {
      return;
    }
    const currentActiveElement = this.element.querySelector(`.${activeElementClass}`);
    if (currentActiveElement) {
      currentActiveElement.classList.remove(activeElementClass);
    }
    evt.target.classList.add(activeElementClass);
    evt.preventDefault();
    this._callback.sortTypeChange(evt.target.dataset.sortType);
  };
}
