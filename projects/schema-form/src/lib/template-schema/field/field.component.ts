import {
  Component,
  Input,
  AfterContentInit,
  ContentChildren,
  QueryList,
  ElementRef,
  SimpleChanges,
  OnChanges,
} from '@angular/core';

import { ActionRegistry } from '../../model/actionregistry';
import { Validator } from '../../model/validator';

import { TemplateSchemaService } from '../template-schema.service';
import { ButtonComponent } from '../button/button.component';

import { FieldParent } from './field-parent';
import { FieldType, Field } from './field';
import { ItemComponent } from './item/item.component';
import { merge } from 'rxjs';
import {ISchema} from '../../model/ISchema';


@Component({
  selector: 'sf-field',
  templateUrl: './field.component.html'
})
export class FieldComponent extends FieldParent implements
Field, OnChanges, AfterContentInit {

  @ContentChildren(FieldComponent)
  childFields: QueryList<FieldComponent>;

  @ContentChildren(ItemComponent)
  childItems: QueryList<ItemComponent>;

  @ContentChildren(ButtonComponent)
  childButtons: QueryList<ButtonComponent>;

  @Input()
  name: string;

  @Input()
  type = FieldType.String;

  @Input()
  format: string;

  @Input()
  required: boolean;

  @Input()
  readOnly: boolean;

  @Input()
  title: string;

  @Input()
  description: string;

  @Input()
  placeholder: string;

  @Input()
  widget: string | object;

  @Input()
  validator: Validator;

  @Input()
  schema: ISchema = { };

  constructor(
    private elementRef: ElementRef,
    private templateSchemaService: TemplateSchemaService,
    protected actionRegistry: ActionRegistry
  ) {
    super();
  }

  getSchema(): ISchema {

    const { properties, items, required } = this.getFieldsSchema(
      this.childFields.filter(field => field !== this)
    );

    const oneOf = this.getOneOf();

    const schema: ISchema = {
      type: this.type
    };

    if (this.title !== undefined) {
      schema.title = this.title;
    }

    if (properties !== undefined) {
      schema.properties = properties;
    }

    if (items !== undefined) {
      schema.items = items;
    }

    // requried child fields
    if (required !== undefined) {
      schema.required = required;
    }

    if (oneOf !== undefined) {
      schema.oneOf = oneOf;
    }

    if (this.description !== undefined) {
      schema.description = this.description;
    }

    if (this.placeholder !== undefined) {
      schema.placeholder = this.placeholder;
    }

    if (this.format !== undefined) {
      schema.format = this.format;
    }

    if (this.widget !== undefined) {
      schema.widget = this.widget;
    }

    if (this.readOnly !== undefined) {
      schema.readOnly = this.readOnly;
    }

    const buttons = this.getButtons();
    if (buttons.length > 0) {
      schema.buttons = buttons;
    }

    // @Input schema takes precedence
    return Object.assign(schema, this.schema);

  }

  getValidators(): { path: string, validator: Validator }[] {

    // registering validator here is not possible since prop full path is needed
    const childValidators = this.getFieldsValidators(
      this.childFields.filter(field => field !== this)
    );
    const validators = childValidators.map(({ path, validator }) => {
      return {
        path: this.path + path,
        validator
      };
    });

    if (!this.validator) {
      return validators;
    }

    validators.push({ path: this.path, validator: this.validator });
    return validators;
  }

  ngOnChanges(changes: SimpleChanges) {

    const keys = Object.keys(changes);
    if (keys.length > 0) {
      for (const key of keys) {
        if (!changes[key].isFirstChange()) {
          // on any input change, force schema change generation
          this.templateSchemaService.changed();
          break;
        }
      }
    }

  }


  private getOneOf() {

    if (this.childItems.length === 0) {
      return;
    }

    const items = this.childItems.map(({ value, description }) => {
      if (!Array.isArray(value)) {
        return { enum: [value], description };
      }

      return { enum: value, description };
    });

    if (items.length === 0) {
      return;
    }

    return items;
  }


  private setTitleFromContent() {
    const textContent = this.getTextContent(this.elementRef);

    //  title as @Input takes priority over content text
    if (textContent && !this.title) {
      this.title = textContent;
    }
  }

  ngAfterContentInit() {

    // cache it
    this.setTitleFromContent();

    merge(
      this.childFields.changes,
      this.childItems.changes,
      this.childButtons.changes
    )
    .subscribe(() => this.templateSchemaService.changed());
  }

}
