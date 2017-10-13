
import {Droppable} from 'draggable';

export class DropZoneCustomElement {
    static inject = [Element];

    constructor(element) {
        this._element = element;
        this._droppable;
    }
    attached() {
        this._droppable = new Droppable([this._element], {
            draggable: 'li',
            droppable: '#dropzone'
        });

        droppable.on('droppable:over', () => console.log('droppable:over'))
        droppable.on('droppable:out', () => console.log('droppable:out'));
    }
}
