import { Component, Input, ViewChild } from '@angular/core';
import { ControlWidget } from '../../widget';
import { INgxMyDpOptions, NgxMyDatePickerDirective } from 'ngx-mydatepicker';

@Component({
  selector: 'sf-datetime-widget',
  template: `<div class="form-group">
  <label class="horizontal control-label" [attr.for]="id">{{schema.title}}</label>
  
  <input class="form-control" [attr.id]="id" [attr.name]="name"
         [attr.placeholder]="schema.placeholder" [options]="options" #dp="ngx-mydatepicker"
         (click)="onClickInput()"
         [formControl]="control" ngx-mydatepicker/>
</div>
`,
})
export class DatetimeWidget extends ControlWidget {
  options: INgxMyDpOptions = {
    dateFormat: "yyyy-mm-dd"
  };
  @ViewChild("dp") datePicker: NgxMyDatePickerDirective;

  onClickInput() {
    this.datePicker.openCalendar();
  }
}
