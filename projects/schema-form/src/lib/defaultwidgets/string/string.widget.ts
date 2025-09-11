import {Component} from '@angular/core';

import {ControlWidget} from '../../widget';

@Component({
  selector: 'sf-string-widget',
  template: `@if (this.schema.widget.id === 'hidden') {
    <input
      [attr.name]="name" type="hidden" [formControl]="control">
  } @else {
    <div class="widget form-group">
      @if (schema.title) {
        <label [attr.for]="id" class="horizontal control-label">
          {{ schema.title }}
        </label>
      }
      @if (schema.description) {
        <span class="formHelp">{{ schema.description }}</span>
      }
      <input [name]="name" [attr.readonly]="(schema.widget.id!=='color') && schema.readOnly?true:null"
             class="text-widget.id textline-widget form-control"
             [attr.type]="!this.schema.widget.id || this.schema.widget.id === 'string' ? 'text' : this.schema.widget.id"
             [attr.id]="id" [formControl]="control" [attr.placeholder]="schema.placeholder"
             [attr.maxLength]="schema.maxLength || null"
             [attr.minLength]="schema.minLength || null"
             [attr.required]="schema.isRequired || null"
             [disableControl]="(schema.widget.id=='color' && schema.readOnly)?true:null">
      @if ((schema.widget.id === 'color' && schema.readOnly)) {
        <input [attr.name]="name" type="hidden" [formControl]="control">
      }
    </div>
  }
  `,
  standalone: false
})
export class StringWidget extends ControlWidget {

  getInputType() {
    if (!this.schema.widget.id || this.schema.widget.id === 'string') {
      return 'text';
    } else {
      return this.schema.widget.id;
    }
  }
}
