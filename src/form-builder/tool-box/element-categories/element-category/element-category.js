import {bindable} from 'aurelia-framework';

export class ElementCategoryCustomElement {
    static inject = [Element];
    @bindable category;

    constructor(element) {
        this._element = element;

        this.elements = [];
        this._collapsedCategories = [];
        this._draggable;
    }

    bind() {
        this.elements = this.category.elements;
    }

    attached() {

    }

    collapseCategory(category) {
        let catIndex = this._collapsedCategories.indexOf(category);
        if (catIndex) {
            this._collapsedCategories.splice(catIndex, 1);
        } else {
            this._collapsedCategories.push(category);
        }
    }

}
