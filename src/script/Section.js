export class Section {
  constructor({ renderer, items }, containerSelector) {
    this._renderer = renderer;
    this._items = items;
    this._containerSelector = containerSelector;
  }

  renderItems() {
    this._items.forEach(item => {
      this._renderer(item);
    })
  }

  addItem(element) {
    this._containerSelector.prepend(element);
  }
}