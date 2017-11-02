import {bindable} from 'aurelia-framework';

import { Draggable } from 'Draggable';

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
        //this.configureDraggable();
    }

    configureDraggable() {
        //TODO: move draggable to element-type
        this._draggable = new Draggable(this._element, {
            draggable: '.element-type'
        });
        // .on('drag:start', () => {
        //     console.log('drag:start');
        // })
        // .on('drag:move',  () => console.log('drag:move'))
        // .on('drag:stop',  () => console.log('drag:stop'));
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
