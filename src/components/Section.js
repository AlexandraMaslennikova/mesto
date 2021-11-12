export class Section {
    constructor({ data, renderer }, containerSelector) {
        this._renderedItems = data;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    //принимает DOM-элемент и добавляет его в контейнер
    addItem(element) {
        evt.preventDefault(); 
        this._container.append(element); //помещаем элемент в контейнер
    }

    //метод, который отвечает за отрисовку всех элементов
    renderItems() {
        this._renderedItems.forEach(item => {
            this._renderer(item);
          });  
        //С помощью renderer помещаем в верстку все элементы из items
    }
}