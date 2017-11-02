

export class DropZoneCustomElement {
    static inject = [Element];

    constructor(element) {
        this._element = element;
    }
    attached() {
    }

    configureDroppable() {
    }
}
