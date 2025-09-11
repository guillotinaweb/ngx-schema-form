import {AfterContentInit, ContentChildren, Directive, inject, QueryList, SimpleChange} from '@angular/core';
import {merge} from 'rxjs';

import {FormComponent} from '../form.component';
import {ActionRegistry} from '../model/actionregistry';
import {ValidatorRegistry} from '../model/validatorregistry';
import {TerminatorService} from '../terminator.service';

import {TemplateSchemaService} from './template-schema.service';
import {FieldComponent} from './field/field.component';
import {FieldType} from './field/field';
import {ButtonComponent} from './button/button.component';
import {FieldParent} from './field/field-parent';
import {ISchema} from '../model/ISchema';


@Directive({
  selector: 'sf-form[templateSchema]',
  providers: [
    TemplateSchemaService
  ],
  standalone: false
})
export class TemplateSchemaDirective extends FieldParent implements AfterContentInit {
  protected actionRegistry = inject(ActionRegistry);
  protected validatorRegistry = inject(ValidatorRegistry);
  private formComponent = inject(FormComponent);
  private terminatorService = inject(TerminatorService);
  private templateSchemaService = inject(TemplateSchemaService);


  @ContentChildren(FieldComponent)
  childFields: QueryList<FieldComponent>;

  @ContentChildren(ButtonComponent)
  childButtons: QueryList<ButtonComponent>;

  constructor() {
    super();
  }

  setFormDocumentSchema(fields: FieldComponent[]) {
    this.actionRegistry.clear();
    this.validatorRegistry.clear();

    const schema: ISchema = this.getFieldsSchema(fields);

    const validators = this.getFieldsValidators(fields);
    validators.forEach(({path, validator}) => {
      this.validatorRegistry.register(path, validator);
    });

    const previousSchema: ISchema = this.formComponent.schema;
    this.formComponent.schema = {
      type: FieldType.Object,
      properties: schema.properties
    };

    if (schema.required && schema.required.length > 0) {
      this.formComponent.schema.requred = schema.required;
    }

    const buttons = this.getButtons();
    if (buttons.length > 0) {
      this.formComponent.schema.buttons = buttons;
    }

    this.formComponent.ngOnChanges({
      schema: new SimpleChange(
        previousSchema,
        this.formComponent.schema,
        Boolean(previousSchema)
      )
    });

  }


  ngAfterContentInit() {

    if (this.childFields.length > 0) {
      this.setFormDocumentSchema(this.childFields.toArray());
    }

    merge(
      this.childFields.changes,
      this.templateSchemaService.changes
    )
      .subscribe(() => {
        this.terminatorService.destroy();
        this.setFormDocumentSchema(this.childFields.toArray());
      });

  }

}
