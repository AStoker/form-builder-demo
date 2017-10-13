import {Draggable} from 'draggable';

export class ElementTypeCustomElement {
    static inject = [Element];

    constructor(element) {
        this._element = element;
        this._draggable;
    }
    attached() {
        this._draggable = new Draggable(this._element)
            .on('drag:start', () => console.log('drag:start'))
            .on('drag:move',  () => console.log('drag:move'))
            .on('drag:stop',  () => console.log('drag:stop'));
    }
}
