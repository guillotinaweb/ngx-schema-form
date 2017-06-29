import {
  ChangeDetectorRef,
  Component,
  OnInit,
  OnChanges,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import {
  Action,
  ActionRegistry,
  FormPropertyFactory,
  FormProperty,
  SchemaPreprocessor,
  ValidatorRegistry,
  Validator
} from './model';

import { errorGenerator } from './errorGenerator';

import { SchemaValidatorFactory, ZSchemaValidatorFactory } from './schemavalidatorfactory';
import { WidgetFactory } from './widgetfactory';
import { TerminatorService } from './terminator.service';

export function useFactory(schemaValidatorFactory, validatorRegistry) {
  return new FormPropertyFactory(schemaValidatorFactory, validatorRegistry);
};

@Component({
  selector: 'sf-form',
  template: `<form #form="ngForm"><sf-form-element
  *ngIf="rootProperty" [formProperty]="rootProperty"></sf-form-element></form>`,
  providers: [
    ActionRegistry,
    ValidatorRegistry,
    SchemaPreprocessor,
    WidgetFactory,
    {
      provide: SchemaValidatorFactory,
      useClass: ZSchemaValidatorFactory
    }, {
      provide: FormPropertyFactory,
      useFactory: useFactory,
      deps: [SchemaValidatorFactory, ValidatorRegistry]
    },
    TerminatorService,
  ]
})
export class FormComponent implements OnChanges {
  @Input() schema: any = null;

  @Input() model: any;

  @Input() errors: any;

  @Input() actions: {[actionId: string]: Action} = {};

  @Input() validators: {[path: string]: Validator} = {};

  @Output() onChange = new EventEmitter<{value: any}>();

  rootProperty: FormProperty = null;

  constructor(
    private formPropertyFactory: FormPropertyFactory,
    private actionRegistry: ActionRegistry,
    private validatorRegistry: ValidatorRegistry,
    private cdr: ChangeDetectorRef,
    private terminator: TerminatorService,
  ) {
  }

  ngOnChanges(changes: any) {
    if (changes.validators) {
      this.setValidators();
    }

    if(changes.errors) {
      this.setErrors();
    }

    if (changes.actions) {
      this.setActions();
    }
    console.info('scheme1', this.schema)

    if (this.schema && !this.schema.type) {
      this.schema.type = 'object';
    }

    if (this.schema && changes.schema) {
      if (!changes.schema.firstChange) {
        this.terminator.destroy();
      }
      SchemaPreprocessor.preprocess(this.schema);
      this.rootProperty = this.formPropertyFactory.createProperty(this.schema);
      this.rootProperty.valueChanges.subscribe(value => { this.onChange.emit({value: value}); });
    }

    if (this.schema && (changes.model || changes.schema )) {
      this.rootProperty.reset(this.model, false);
      this.cdr.detectChanges();
    }

    console.info('scheme2', this.schema)
  }

  private setValidators() {
    this.validatorRegistry.clear();
    if (this.validators) {
      for (let validatorId in this.validators) {
        if (this.validators.hasOwnProperty(validatorId)) {
          this.validatorRegistry.register(validatorId, this.validators[validatorId]);
        }
      }
    }
  }

  private setActions() {
    this.actionRegistry.clear();
    if (this.actions) {
      for (let actionId in this.actions) {
        if (this.actions.hasOwnProperty(actionId)) {
          this.actionRegistry.register(actionId, this.actions[actionId]);
        }
      }
    }
  }

  private setErrors() {
    if(!this.errors) return ;

    const errors = errorGenerator(this.errors);

    for (let errorKey in errors) {
      this.validatorRegistry.register(errorKey, errors[errorKey]);
    }
  }

  public reset() {
    this.rootProperty.reset(null, true);
  }
}
