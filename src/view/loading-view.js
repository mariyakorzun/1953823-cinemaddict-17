import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';

const createNoFilmsTemplate = () => (`
   <section class="films">
     <section class="films-list">
       <h2 class="films-list__title">Loading...</h2>
       <div class="films-list__container">
       </div>
     </section>
   </section>
 `);

export default class LoadingView extends AbstractStatefulView {

  get template() {
    return createNoFilmsTemplate();
  }
}
