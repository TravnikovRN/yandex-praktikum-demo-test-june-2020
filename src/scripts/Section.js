class Section {
  constructor(data, containerSelector) {
    console.info(data, containerSelector);
    this.items = data.items;
    this.renderer = data.renderer;
    this.containerSelector = containerSelector;
  }

  draw() {
    console.info(this);
    this.items.map((elm) => this.renderer(elm, this.containerSelector));
  }

  addItem(element) {
    this.containerSelector.prepend(element);
  }
}

export default Section;
