import { bindable } from 'aurelia-framework';

import {Droppable} from 'Draggable';

export class ElementContainerCustomElement {
    static inject = [Element];
    @bindable elementType;

    constructor(element) {
        this._element = element;
        this.title = 'Element';
    }
    attached() {
        //this.configureDraggable();
    }

    bind() {
        this.title = this.elementType.type;
    }
}
