import {
  Component,
  Input,
  OnInit
} from '@angular/core';

import {
  FormControl
} from '@angular/forms';

import { Widget } from './widget';

import {
  ActionRegistry,
  FormProperty
} from './model';

@Component({
  selector: 'sf-form-element',
  template: `<div *ngIf="formProperty.visible"
    [class.has-error]="!control.valid"
	  [class.has-success]="control.valid">
	<sf-widget-chooser
	(widgetInstanciated)="onWidgetInstanciated($event)"
	[widgetInfo]="formProperty.schema.widget">
	</sf-widget-chooser>
	<sf-form-element-action *ngFor="let button of buttons" [button]="button" [formProperty]="formProperty"></sf-form-element-action>
</div>`
})
export class FormElementComponent implements OnInit {

  private static counter = 0;

  @Input() formProperty: FormProperty;
  control: FormControl = new FormControl('', () => null);

  widget: Widget<any> = null;

  buttons = [];


  constructor(private actionRegistry: ActionRegistry) {}

  ngOnInit() {
    this.parseButtons();
  }

  private parseButtons() {
    if (this.formProperty.schema.buttons !== undefined) {
      this.buttons = this.formProperty.schema.buttons;

      for (let button of this.buttons) {
        this.createButtonCallback(button);
      }
    }
  }

  private createButtonCallback(button) {
    button.action = (e) => {
      let action;
      if (button.id && (action = this.actionRegistry.get(button.id))) {
        if (action) {
          action(this.formProperty, button.parameters);
        }
      }
      e.preventDefault();
    };
  }

  onWidgetInstanciated(widget: Widget<any>) {
    this.widget = widget;
    let id = 'field' + (FormElementComponent.counter++);

    this.widget.formProperty = this.formProperty;
    this.widget.schema = this.formProperty.schema;
    this.widget.name = id;
    this.widget.id = id;
    this.widget.control = this.control;
  }

}
