import { Component } from '@angular/core';

import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-textarea-widget',
  template: `<div>
	<label [attr.for]="id" class="horizontal control-label">
		{{ schema.title }}
	</label>
    <span *ngIf="schema.description" class="formHelp">{{schema.description}}</span>
	<textarea [attr.readonly]="schema.readOnly" [name]="name" class="text-widget textarea-widget form-control" [formControl]="control"></textarea>
</div>`
})
export class TextAreaWidget extends ControlWidget {}
