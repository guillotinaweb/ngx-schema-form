import { QueryList } from '@angular/core';

import { Validator } from '../../model/validator';
import { ActionRegistry } from '../../model/actionregistry';
import { ButtonComponent } from '../button/button.component';
import { TemplateSchemaElement } from '../template-schema-element';

import { Field, FieldType } from './field';
import {ISchema} from '../../model/ISchema';

export abstract class FieldParent extends TemplateSchemaElement {

  name = '';
  type: FieldType;

  get path(): string {
    if (!this.name) {
      return '';
    }

    return '/' + this.name;
  }

  protected abstract actionRegistry: ActionRegistry;
  protected abstract childButtons: QueryList<ButtonComponent>;


  getButtons(): { id: string, label: string, widget?: string | object }[] {

    return this.childButtons.map((button, index) => {

      if (!button.id) {
        const randomString = Math.random().toString(16).substr(2, 8);
        // generate id for button
        button.id = this.name + randomString + '_'  + (index + 1);
      }

      // register as button action the EventEmitter click
      this.actionRegistry.register(
        button.id,
        button.click.emit.bind(button.click)
      );

      const _button = <any>{
        id: button.id,
        label: button.label,
      };

      if (button.widget) {
        _button.widget = button.widget;
      }

      return _button;

    });
  }

  protected getFieldsValidators(
    fields: Field[]
  ): { path: string, validator: Validator }[] {

    return fields.reduce((validators, field) => {
      return validators.concat(field.getValidators());
    }, []);

  }

  protected getFieldsSchema(fields: Field[]): ISchema {
    return fields.reduce((schema: ISchema, field: Field) => {

      switch (this.type) {
        case FieldType.Array:
          schema.items = field.getSchema();
          break;

        default:
          if (!schema.properties) {
            schema.properties = {};
          }

          schema.properties[field.name] = field.getSchema();
          break;
      }

      const buttons = field.getButtons();
      if (buttons.length > 0) {
        schema.buttons = buttons;
      }

      if (!field.required) {
        return schema;
      }

      if (!schema.required) {
        schema.required = [];
      }
      schema.required.push(field.name);
      return schema;
    }, {});
  }

}
