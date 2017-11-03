import {Droppable} from 'Draggable';

import CATEGORIES from './categories';


export class ElementCategoriesCustomElement {
    constructor() {
        this.categories = CATEGORIES;
    }

    attached() {
        this.configureDraggable();
    }

    configureDraggable() {
        this._droppable = new Droppable(document.querySelector('.form-builder__container'), {
            draggable: '.element-container',
            droppable: '.drop-zone'
        });
        // .on('drag:start', () => console.log('drag:start'))
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
