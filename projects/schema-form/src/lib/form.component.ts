import {
  ChangeDetectorRef,
  Component,
  OnChanges,
  EventEmitter,
  Input,
  Output,
  SimpleChanges
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import {Action} from './model/action';
import {ActionRegistry} from './model/actionregistry';
import {FormProperty} from './model/formproperty';
import {FormPropertyFactory} from './model/formpropertyfactory';
import {SchemaPreprocessor} from './model/schemapreprocessor';
import {ValidatorRegistry} from './model/validatorregistry';
import {Validator} from './model/validator';
import {Binding} from './model/binding';
import {BindingRegistry} from './model/bindingregistry';

import {SchemaValidatorFactory} from './schemavalidatorfactory';
import {WidgetFactory} from './widgetfactory';
import {TerminatorService} from './terminator.service';
import {PropertyBindingRegistry} from './property-binding-registry';
import { ExpressionCompilerFactory } from './expression-compiler-factory';
import {ISchema} from './model/ISchema';
import { LogService } from './log.service';

export function useFactory(schemaValidatorFactory, validatorRegistry, propertyBindingRegistry, expressionCompilerFactory, logService) {
  return new FormPropertyFactory(schemaValidatorFactory, validatorRegistry, propertyBindingRegistry, expressionCompilerFactory, logService);
}

@Component({
  selector: 'sf-form',
  template: `
    <form *ngIf="rootProperty" [attr.name]="rootProperty.rootName" [attr.id]="rootProperty.rootName">
      <sf-form-element [formProperty]="rootProperty"></sf-form-element>
    </form>`,
  providers: [
    ActionRegistry,
    ValidatorRegistry,
    PropertyBindingRegistry,
    BindingRegistry,
    SchemaPreprocessor,
    WidgetFactory,
    {
      provide: FormPropertyFactory,
      useFactory: useFactory,
      deps: [SchemaValidatorFactory, ValidatorRegistry, PropertyBindingRegistry, ExpressionCompilerFactory, LogService]
    },
    TerminatorService,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FormComponent,
      multi: true
    }
  ]
})
export class FormComponent implements OnChanges, ControlValueAccessor {

  @Input() schema: ISchema | null = null;

  @Input() model: any;

  @Input() actions: { [actionId: string]: Action } = {};

  @Input() validators: { [path: string]: Validator } = {};

  @Input() bindings: { [path: string]: Binding } = {};

  @Output() onChange = new EventEmitter<{ value: any }>();

  @Output() modelChange = new EventEmitter<any>();

  @Output() isValid = new EventEmitter<boolean>();

  @Output() onErrorChange = new EventEmitter<{ value: any[] }>();

  @Output() onErrorsChange = new EventEmitter<{value: any}>();

  rootProperty: FormProperty = null;

  private onChangeCallback: any;

  constructor(
    private formPropertyFactory: FormPropertyFactory,
    private actionRegistry: ActionRegistry,
    private validatorRegistry: ValidatorRegistry,
    private bindingRegistry: BindingRegistry,
    private cdr: ChangeDetectorRef,
    private terminator: TerminatorService
  ) { }

  writeValue(obj: any) {
    if (this.rootProperty) {
      this.rootProperty.reset(obj, false);
    }
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
    if (this.rootProperty) {
      this.rootProperty.valueChanges.subscribe(
        this.onValueChanges.bind(this)
      );
    }
  }

  // TODO implement
  registerOnTouched(fn: any) {
  }

  // TODO implement
  // setDisabledState(isDisabled: boolean)?: void

  ngOnChanges(changes: SimpleChanges) {
    if (changes.validators) {
      this.setValidators();
    }

    if (changes.actions) {
      this.setActions();
    }

    if (changes.bindings) {
      this.setBindings();
    }

    if (this.schema && !this.schema.type) {
      this.schema.type = 'object';
    }

    if (this.schema && changes.schema) {
      if (!changes.schema.firstChange) {
        this.terminator.destroy();
      }

      SchemaPreprocessor.preprocess(this.schema);
      this.rootProperty = this.formPropertyFactory.createProperty(this.schema);
      if (this.model) {
        // this.rootProperty.reset(this.model, false);
      }

      this.rootProperty.valueChanges.subscribe(
        this.onValueChanges.bind(this)
      );

      this.rootProperty.errorsChanges.subscribe(value => {
        this.onErrorChange.emit({value: value});
        this.isValid.emit(!(value && value.length));
      });

    }

    if (this.schema && (changes.model || changes.schema )) {
      this.rootProperty.reset(this.model, false);
      this.cdr.detectChanges();
    }

  }

  private setValidators() {
    this.validatorRegistry.clear();
    if (this.validators) {
      for (const validatorId in this.validators) {
        if (this.validators.hasOwnProperty(validatorId)) {
          this.validatorRegistry.register(validatorId, this.validators[validatorId]);
        }
      }
    }
  }

  private setActions() {
    this.actionRegistry.clear();
    if (this.actions) {
      for (const actionId in this.actions) {
        if (this.actions.hasOwnProperty(actionId)) {
          this.actionRegistry.register(actionId, this.actions[actionId]);
        }
      }
    }
  }

  private setBindings() {
    this.bindingRegistry.clear();
    if (this.bindings) {
      for (const bindingPath in this.bindings) {
        if (this.bindings.hasOwnProperty(bindingPath)) {
          this.bindingRegistry.register(bindingPath, this.bindings[bindingPath]);
        }
      }
    }
  }

  public reset() {
    this.rootProperty.reset(null, true);
  }

  private setModel(value: any) {
    if (this.model) {
      Object.assign(this.model, value);
    } else {
      this.model = value;
    }
  }

  private onValueChanges(value) {
    if (this.onChangeCallback) {
      this.setModel(value);
      this.onChangeCallback(value);
    }

    // two way binding is used
    if (this.modelChange.observers.length > 0) {
      if (!this.onChangeCallback) {
        this.setModel(value);
      }
    }
    this.onChange.emit({value: value});
  }
}
