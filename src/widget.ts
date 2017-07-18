import { AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ArrayProperty, FormProperty, ObjectProperty } from './model';

export abstract class Widget<T extends FormProperty> {
  formProperty: T;
  control: FormControl;

  id: string = '';
  name: string = '';
  schema: any = {};
}

export class ControlWidget extends Widget<FormProperty> implements AfterViewInit {

  ngAfterViewInit() {
    let control = this.control;
    this.formProperty.valueChanges.subscribe((newValue) => {
      if (control.value !== newValue) {
        control.setValue(newValue, {emitEvent: false});
      }
    });
    this.formProperty.errorsChanges.subscribe((errors) => {
      control.setErrors(errors, {emitEvent: true});
    });
    control.valueChanges.subscribe((newValue) => { this.formProperty.setValue(newValue, false); });
  }

}

export class ArrayLayoutWidget extends Widget<ArrayProperty> {}

export class ObjectLayoutWidget extends Widget<ObjectProperty> {}
