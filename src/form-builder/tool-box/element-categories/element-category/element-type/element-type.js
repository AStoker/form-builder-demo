import { bindable } from 'aurelia-framework';


export class ElementTypeCustomElement {
    static inject = [Element];
    @bindable elementType;

    constructor(element) {
        this._element = element;
        this.title = 'Element';
    }
    attached() {
        //TODO: get draggable working in here
    }

    bind() {
        this.title = this.elementType.type;
    }
}
