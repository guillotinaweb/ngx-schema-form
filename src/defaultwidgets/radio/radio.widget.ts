import { Component } from '@angular/core';

import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-radio-widget',
  template: `<div>
	<label>{{schema.title}}</label>
    <span *ngIf="schema.description" class="formHelp">{{schema.description}}</span>
	<div *ngFor="let option of schema.oneOf" class="radio">
		<label class="horizontal control-label">
			<input [formControl]="control" [attr.name]="name" value="{{option.enum[0]}}" type="radio"  [attr.disabled]="schema.readOnly">
			{{option.description}}
		</label>
	</div>
	<input *ngIf="schema.readOnly" [attr.name]="name" type="hidden" [formControl]="control">
</div>`
})
export class RadioWidget extends ControlWidget {}
