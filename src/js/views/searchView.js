import View from './view';
class searchView extends View {
  _parentElement = document.querySelector('.search');

  _clearInput() {
    document.querySelector('.search__field').value = '';
  }

  getQuery() {
    const query = document.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new searchView();
