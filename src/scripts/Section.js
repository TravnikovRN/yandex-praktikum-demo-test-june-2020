class Section {
    constructor({items, renderer}, containerSelector) {
        this.items = items;
        this.renderer = renderer;
        this.containerSelector = containerSelector;
    }

    draw = () => {
        this.items.map(elm => renderer(elm))
    }

    addItem = (element) => {
        this.items.push(element);    
    }
    
}

export default Section;