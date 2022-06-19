import AbstractView from '../framework/view/abstract-view.js';

const getFilmListTemplate = () => (`
  <section class="films">
    <section class="films-list">
      <h2 class="films-list__title visually-hidden">There are no movies in our database</h2>
      <div class="films-list__container">
      </div>
    </section>
   </section>
 `);

export default class FilmListView extends AbstractView {

  get filmsElement() {
    return document.querySelector('.films');
  }

  get filmListElement() {
    return this.element.querySelector('.films-list');
  }

  get filmListContainer() {
    return this.element.querySelector('.films-list__container');
  }

  get template() {
    return getFilmListTemplate();
  }

  showEmptyFilmListMessage() {
    this.element.querySelector('.films-list__title').classList.remove('visually-hidden');
  }
}
