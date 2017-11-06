import {EventAggregator} from 'aurelia-event-aggregator';

export class App {
    static inject = [EventAggregator];

    constructor(eventAggregator) {
        this._eventAggregator = eventAggregator;

        this._eventAggregator.subscribe('FormBuilder:drag:start', () => {
            console.log(arguments);
        });
    }

    attached() {
    }
}
