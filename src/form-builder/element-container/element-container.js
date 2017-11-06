import { bindable } from 'aurelia-framework';

export class ElementContainerCustomElement {
    static inject = [Element];
    @bindable elementType;

    constructor(element) {
        this._element = element;

        this.emptyElement = true;

        this.title = 'Element';
    }
    attached() {
    }

    bind() {
        this.elementTypeChanged();
    }

    elementTypeChanged(newVal) {
        if (!this.elementType) {
            this.setupDropZone();
        } else {
            this.setupElement();
        }
    }

    setupDropZone() {
        this.emptyElement = true;
    }
    setupElement() {
        this.emptyElement = false;
        this.title = this.elementType.type;
    }

}
