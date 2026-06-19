import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ControlWidget } from '../../widget';
import { DisableControlDirective } from '../_directives/disableControl.directive';

@Component({
    selector: 'sf-range-widget',
    template: `<div class="widget form-group">
	  @if (schema.title) {
	    <label [attr.for]="id" class="horizontal control-label">
	      {{ schema.title }}
	    </label>
	  }
	  @if (schema.description) {
	    <span class="formHelp">{{schema.description}}</span>
	  }
	  <input [name]="name" class="text-widget range-widget" [attr.id]="id"
	    [formControl]="control" [attr.type]="'range'" [attr.min]="schema.minimum" [attr.max]="schema.maximum" [attr.required]="effectiveIsRequired || null" [disableControl]="schema.readOnly?true:null" >
	  @if (schema.readOnly) {
	    <input [attr.name]="name" type="hidden">
	  }
	</div>`,
    imports: [ReactiveFormsModule, DisableControlDirective]
})
export class RangeWidget extends ControlWidget {}
