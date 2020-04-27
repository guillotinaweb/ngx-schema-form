import {
  Component, ElementRef,
  Input, OnDestroy,
  OnInit, Renderer2
} from '@angular/core';

import {
  FormControl
} from '@angular/forms';

import {Widget} from './widget';

import {ActionRegistry} from './model/actionregistry';
import {FormProperty} from './model/formproperty';
import {BindingRegistry} from './model/bindingregistry';
import {Binding} from './model/binding';

@Component({
  selector: 'sf-form-element',
  template: `
    <div *ngIf="formProperty.visible"
         [class.has-error]="!control.valid"
         [class.has-success]="control.valid">
      <sf-widget-chooser
        (widgetInstanciated)="onWidgetInstanciated($event)"
        [widgetInfo]="formProperty.schema.widget">
      </sf-widget-chooser>
      <sf-form-element-action *ngFor="let button of buttons" [button]="button" [formProperty]="formProperty"></sf-form-element-action>
    </div>`
})
export class FormElementComponent implements OnInit, OnDestroy {

  private static counter = 0;

  @Input() formProperty: FormProperty;
  control: FormControl = new FormControl('', () => null);

  widget: Widget<any> = null;

  buttons = [];

  unlisten = [];

  constructor(private actionRegistry: ActionRegistry,
              private bindingRegistry: BindingRegistry,
              private renderer: Renderer2,
              private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.parseButtons();
    this.setupBindings();
  }

  private setupBindings() {
    const bindings: Binding[] = this.bindingRegistry.get(this.formProperty.path);
    if ((bindings || []).length) {
      bindings.forEach((binding) => {
        for (const eventId in binding) {
          this.createBinding(eventId, binding[eventId]);
        }
      });
    }
  }

  private createBinding(eventId, listener) {
    this.unlisten.push(this.renderer.listen(this.elementRef.nativeElement,
      eventId,
      (event) => {
        if (listener instanceof Function) {
          listener(event, this.formProperty);
        } else {
          console.warn('Calling non function handler for eventId ' + eventId + ' for path ' + this.formProperty.path);
        }
      }));
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
    let id = this.formProperty.canonicalPathNotation || 'field' + (FormElementComponent.counter++);
    if (this.formProperty.root.rootName) {
      id = `${this.formProperty.root.rootName}:${id}`;
    }

    this.widget.formProperty = this.formProperty;
    this.widget.schema = this.formProperty.schema;
    this.widget.name = id;
    this.widget.id = id;
    this.widget.control = this.control;
  }

  ngOnDestroy(): void {
    if (this.unlisten) {
      this.unlisten.forEach((item) => {
        item();
      });
    }
  }

}
