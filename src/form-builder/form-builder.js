import {Container} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

import {Droppable} from 'Draggable';

export class FormBuilderCustomElement {
    static inject = [Container];

    constructor(container) {
        this._eventAggregator = new EventAggregator();
        container.registerInstance('FormBuilderEventAggregator', this._eventAggregator);
    }

    attached() {
        this.configureDraggable();
    }

    configureDraggable() {
        this._droppable = new Droppable(this.container, {
            draggable: '.element-container',
            droppable: '.droppable'
        })
        .on('drag:start', (ev) => {
            this._eventAggregator.publish(`FormBuilder:${ev.type}`, ev);
        })
        .on('drag:stop',  (ev) => {
            if (ev.source.parentElement !== ev.originalSource.parentElement) { //Only do magic if we've dropped on something valid
                let sourceType = ev.originalSource.parentElement.au.controller.viewModel.elementType;
                let container = ev.source.parentElement;
                let containerVM = container.au.controller.viewModel;

                containerVM.elementType = sourceType;
                this._eventAggregator.publish(`FormBuilder:${ev.type}`, ev);
            }
        })
        .on('droppable:over',   (ev) => {
            this._eventAggregator.publish(`FormBuilder:${ev.type}`, ev);
        })
        .on('droppable:out',    (ev) => {
            this._eventAggregator.publish(`FormBuilder:${ev.type}`, ev);
        });
    }
}
