import { Component } from '@angular/core';

import { ControlWidget } from '../../widget';

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
    standalone: false
})
export class RadioWidget extends ControlWidget {}
