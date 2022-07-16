export class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._containerSelector = containerSelector;
  }

  renderItems(cardItems) { 
    cardItems.cards.forEach(item => { 
    const items = {card: item, userId: cardItems.userId};
    this._renderer(items); 
    }) 
  } 

  addItem(element) { 
    this._containerSelector.prepend(element); 
  } 
}
