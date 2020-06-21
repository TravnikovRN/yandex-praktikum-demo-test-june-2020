class Section {
  constructor({ items, renderer }, containerSelector) {
    this.items = items;
    this.renderer = renderer;
    this.containerSelector = containerSelector;
  }

  draw() {
    this.items.map((elm) => this.renderer(elm, this.containerSelector));
  }

  addItem(element) {
    this.containerSelector.append(element);
  }
}

export default Section;

// Отлично реализован функционал данного класса
