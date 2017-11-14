import { bindable } from 'aurelia-framework';
import { FormTemplateManager } from 'form-builder/FormTemplateManager';

export class ElementContainerCustomElement {
    static inject = [Element, FormTemplateManager];
    @bindable elementType;

    constructor(element, formTemplateManager) {
        this._element = element;
        this._formTemplateManager = formTemplateManager;

        this.emptyElement = true;

        this.title = 'Element';
    }
    attached() {
    }

    bind(bindingContext, {parentOverrideContext}) {
        let formRowContext = parentOverrideContext.bindingContext;
        this.elementTypeChanged();
    }

    elementTypeChanged(newVal) {
        if (!this.elementType) {
            this.setupDropZone();
            delete this._element.dataset.elementCode;
        } else {
            this.setupElement();
            this._element.dataset.elementCode = this.elementType.code;
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
