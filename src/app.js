import { Droppable, Draggable } from 'Draggable';


export class App {
    constructor() {
        this.message = 'Hello World!';
    }

    attached() {
        // this._draggable = new Draggable(document.querySelector('ul'), {
        //     draggable: 'li'
        // });
        // this._droppable = new Droppable(document.querySelector('ul'), {
        //     draggable: 'li',
        //     droppable: '#drop-zone'
        // });
    }
}
