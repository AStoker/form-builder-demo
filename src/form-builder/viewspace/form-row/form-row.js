// import { bindable } from 'aurelia-framework';
import { FormTemplateManager } from 'form-builder/FormTemplateManager';

export class FormRowCustomElement {
    static inject = [Element, 'FormBuilderEventAggregator', FormTemplateManager];

    constructor(element, eventAggregator, formTemplateManager) {
        this._element = element;
        this._eventAggregator = eventAggregator;
        this._formTemplateManager = formTemplateManager;

        this.elements = ['empty-element'];
    }

    attached() {

    }

}
