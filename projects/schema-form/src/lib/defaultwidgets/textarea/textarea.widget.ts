import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ControlWidget } from '../../widget';

@Component({
    selector: 'sf-textarea-widget',
    template: `<div class="widget form-group">
	  @if (schema.title) {
	    <label [attr.for]="id" class="horizontal control-label">
	      {{ schema.title }}
	    </label>
	  }
	  @if (schema.description) {
	    <span class="formHelp">{{schema.description}}</span>
	  }
	  <textarea [readonly]="schema.readOnly" [name]="name"
	    [attr.id]="id"
	    class="text-widget textarea-widget form-control"
	    [attr.placeholder]="schema.placeholder"
	    [attr.required]="effectiveIsRequired || null"
	    [attr.maxLength]="schema.maxLength || null"
	    [attr.minLength]="schema.minLength || null"
	  [formControl]="control"></textarea>
	</div>`,
    imports: [ReactiveFormsModule]
})
export class TextAreaWidget extends ControlWidget {}
