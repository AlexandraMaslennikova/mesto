export class Section {
    constructor({ renderer }, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    //метод, который отвечает за отрисовку всех элементов
    renderItems(data) {
        data.forEach(item => {
          this._renderer(item)
      })
    }

    //принимает DOM-элемент и добавляет его в контейнер
    addItem(element) {
      this._container.prepend(element); //помещаем элемент в контейнер
    }
}