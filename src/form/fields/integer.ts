import {Component, Input} from '@angular/core';
import {BaseField} from './base';


@Component({
    selector: 'integer-field',
    template: require('./integerfield.component.html')
})
export class IntegerField extends BaseField {
	@Input('value') value: number;

    constructor() {
        super();
    }

    ngOnInit() {
    }
}
