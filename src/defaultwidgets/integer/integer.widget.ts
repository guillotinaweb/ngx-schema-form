import {
  Component,
} from '@angular/core';

import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-integer-widget',
  template: `<div>
	<label [attr.for]="id" class="horizontal control-label">
		{{ schema.title }}
	</label>
	<div>
    <span *ngIf="schema.description" class="formHelp">{{schema.description}}</span>
	<input [attr.readonly]="schema.readOnly?true:null" [name]="name" class="text-widget integer-widget form-control" [formControl]="control" [attr.type]="'number'" [attr.min]="schema.minimum" [attr.max]="schema.maximum" [attr.placeholder]="schema.placeholder" >
</div>`
})
export class IntegerWidget extends ControlWidget {}
