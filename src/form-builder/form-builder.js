
import { FormTemplateManager } from 'form-builder/FormTemplateManager';


export class FormBuilderCustomElement {
    static inject = [FormTemplateManager];

    constructor(formTemplateManager) {
        this._formTemplateManager = formTemplateManager;
    }

    attached() {
        this._formTemplateManager.set(this.formViewspace);
        this._formTemplateManager.configureDraggable(this.container);
    }

}
