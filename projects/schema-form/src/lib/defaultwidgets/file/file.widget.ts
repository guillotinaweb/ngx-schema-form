import { Component, AfterViewInit } from '@angular/core';

import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-file-widget',
  template: `<div class="widget form-group">
	<label [attr.for]="id" class="horizontal control-label">
		{{ schema.title }}
	</label>
    <span *ngIf="schema.description" class="formHelp">{{schema.description}}</span>
  <input [name]="name" class="text-widget file-widget" [attr.id]="id"
    [formControl]="control" type="file" [attr.disabled]="schema.readOnly?true:null"
    (change)="onFileChange($event)">
	<input *ngIf="schema.readOnly" [attr.name]="name" type="hidden" [formControl]="control">
</div>`
})
export class FileWidget extends ControlWidget implements AfterViewInit {

  protected reader = new FileReader();
  protected filedata: any = {};

  constructor() {
    super();
  }

  ngAfterViewInit() {
    // OVERRIDE ControlWidget ngAfterViewInit() as ReactiveForms do not handle
    // file inputs
    const control = this.control;
    this.formProperty.errorsChanges.subscribe((errors) => {
      control.setErrors(errors, { emitEvent: true });
    });

    this.reader.onloadend = () => {
      this.filedata.data = btoa(this.reader.result);
      this.formProperty.setValue(this.filedata, false);
    };
  }

  onFileChange($event) {
    const file = $event.target.files[0];
    this.filedata.filename = file.name;
    this.filedata.size = file.size;
    this.filedata['content-type'] = file.type;
    this.filedata.encoding = 'base64';
    this.reader.readAsBinaryString(file);
  }
}
