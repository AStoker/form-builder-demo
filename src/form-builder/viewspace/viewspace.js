import { FormTemplateManager } from 'form-builder/FormTemplateManager';

export class ViewspaceCustomElement {
    static inject = ['FormBuilderEventAggregator', FormTemplateManager];

    constructor(eventAggregator, formTemplateManager) {
        this._eventAggregator = eventAggregator;
        this._formTemplateManager = formTemplateManager;

        this.rows = [];
    }

    attached() {
        if (this._formTemplateManager.needsNewRow) {
            this.rows.push('empty-row');
        }
    }

}
