import {Component} from '@angular/core';

import {ControlWidget} from '../../widget';

@Component({
  selector: 'sf-select-widget',
  template: `
    <div class="widget form-group">
      @if (schema.title) {
        <label [attr.for]="id" class="horizontal control-label">
          {{ schema.title }}
        </label>
      }

      @if (schema.description) {
        <span class="formHelp">
	      {{ schema.description }}
	    </span>
      }

      @if (schema.type != 'array') {
        <select [formControl]="control" [attr.name]="name" [attr.id]="id" [disableControl]="schema.readOnly"
                class="form-control">
          @if (schema.oneOf) {
            @for (option of schema.oneOf; track option) {
              <option [ngValue]="option.enum[0]">{{ option.description }}</option>
            }
          } @else {
            @for (option of schema.enum; track option) {
              <option [ngValue]="option">{{ option }}</option>
            }
          }
        </select>
      }

      @if (schema.type === 'array') {
        <select multiple [formControl]="control" [attr.name]="name" [attr.id]="id" [disableControl]="schema.readOnly"
                class="form-control">
          @for (option of schema.items.oneOf; track option) {
            <option [ngValue]="option.enum[0]" [disabled]="option.readOnly">{{ option.description }}</option>
          }
        </select>
      }

      @if (schema.readOnly) {
        <input [attr.name]="name" type="hidden" [formControl]="control">
      }
    </div>`,
  standalone: false
})
export class SelectWidget extends ControlWidget {
}
