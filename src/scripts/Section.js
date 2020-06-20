class Section {
  constructor(data, containerSelector) {
    this.items = data.items;
    this.renderer = data.renderer;
    this.containerSelector = containerSelector;
  }

  draw() {
    this.items.map((elm) => this.renderer(elm, this.containerSelector));
  }

  addItem(element) {
    this.containerSelector.prepend(element);
  }
}

export default Section;
