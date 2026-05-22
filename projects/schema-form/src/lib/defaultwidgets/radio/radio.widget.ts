import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ControlWidget } from '../../widget';
import { DisableControlDirective } from '../_directives/disableControl.directive';

@Component({
    selector: 'sf-radio-widget',
    template: `<div class="widget form-group">
	  @if (schema.title) {
	    <label>{{schema.title}}</label>
	  }
	  @if (schema.description) {
	    <span class="formHelp">{{schema.description}}</span>
	  }
	  @for (option of schema.oneOf; track option) {
	    <div class="radio">
	      <label class="horizontal control-label">
	        <input [formControl]="control" [attr.name]="name" [attr.id]="id + '.' + option.enum[0]" value="{{option.enum[0]}}" type="radio"  [disableControl]="schema.readOnly||option.readOnly">
	        {{option.description}}
	      </label>
	    </div>
	  }
	  @if (schema.readOnly) {
	    <input [attr.name]="name" type="hidden" [formControl]="control">
	  }
	</div>`,
    imports: [ReactiveFormsModule, DisableControlDirective]
})
export class RadioWidget extends ControlWidget {}
