import {Container} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

import uuid from 'node-uuid';
import {Draggable} from 'Draggable';


export class FormTemplateManager {
    static inject = [Container];

    constructor(container) {
        this._eventAggregator = new EventAggregator();
        container.registerInstance('FormBuilderEventAggregator', this._eventAggregator);
    }

    set(formElement) {
        this._formElement = formElement;
    }

    configureDraggable(container) {
        this._droppableTarget = null;
        // this._draggingElement = null;
        this._droppable = new ElementDraggable(container, {
            draggable: '.element-container',
            droppable: '.droppable'
        })
        .on('drag:start', (ev) => {
            this._eventAggregator.publish(`FormBuilder:${ev.type}`, ev);

            //let type = ev.source.parentElement.dataset.elementCode;
            if (ev.source.closest('tool-box')) {
                //Dragging from toolbox
            } else {
                //Dragging from workspace
                //We should be able to get an element ID off this and deal with the data directly
            }
        })
        .on('drag:stop',  ({source}) => {
            let sourceRoot = source.parentElement;
            let elementContainer = sourceRoot.au.controller.viewModel;
            if (this._droppableTarget) { //Dropping onto a container
                let targetContainer = this._droppableTarget.parentElement.au.controller.viewModel;
                targetContainer.elementType = elementContainer.elementType;

                //If we move an element, set new location to type of old, then clear out old
                if (sourceRoot && sourceRoot.classList.contains('droppable')) {
                    //If previous container was a element container, then set previous container to be empty
                    elementContainer.elementType = null;
                }
            } else { //Dropping away from a container
                if (sourceRoot && sourceRoot.classList.contains('droppable')) { //TODO: find use case where we don't have parent element
                    //If previous container was a element container, then set previous container to be empty
                    elementContainer.elementType = null;
                }
            }
        })
        .on('drag:over',   (ev) => {
            this._eventAggregator.publish(`FormBuilder:${ev.type}`, ev);
            console.log(ev);

            let source = ev.source;
            let over = ev.over;

            const isOutsideContainer = (source.parentNode !== over.parentNode);
            if (isOutsideContainer && over.parentNode.classList.contains('droppable')) {
                this._droppableTarget = over;
            }
        })
        .on('drag:out',    (ev) => {
            this._eventAggregator.publish(`FormBuilder:${ev.type}`, ev);
            console.log(ev);

            this._droppableTarget = null;
        });
    }

    getFormRows() {
        return this._formElement.querySelectorAll('form-row');
    }

    get needsNewRow() {
        return this.getFormRows().length === 0;
    }

}


class ElementDraggable extends Draggable {

    constructor(...args) {
        super(...args);

        this.on('drag:over', this.onDragOver.bind(this));
        this.on('drag:stop', this.onDragStop.bind(this));
        this.on('drag:out', this.onDragOut.bind(this));

        this._droppableTarget;
    }

    onDragOver({source, over}) {
        // const isOutsideContainer = (source.parentNode !== over.parentNode);
        // if (isOutsideContainer) {
        //     // clones and inserts into new container
        //     // this.clonedSource = source.cloneNode(true);
        //     // over.insertBefore(this.clonedSource);
        //     this._droppableTarget = over;
        //     //this._droppableTarget.classList.add('')
        // }
        // console.log(this._droppableTarget);
    }

    onDragStop({source}) {
        // if (this._droppableTarget) {
        //     // clones and inserts into new container
        //     // this.clonedSource = source.cloneNode(true);
        //     // over.insertBefore(this.clonedSource);
        //     this._droppableTarget.parentNode.au.controller.viewModel.elementType = source.parentElement.au.controller.viewModel.elementType;
        //     this._droppableTarget = null;
        // }
    }

    onDragOut({source, over}) {
    }

}
