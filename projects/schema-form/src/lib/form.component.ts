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

import {SchemaValidatorFactory} from './schemavalidatorfactory';
import {WidgetFactory} from './widgetfactory';
import {TerminatorService} from './terminator.service';

export function useFactory(schemaValidatorFactory, validatorRegistry) {
  return new FormPropertyFactory(schemaValidatorFactory, validatorRegistry);
}

@Component({
  selector: 'sf-form',
  template: `
    <form>
      <sf-form-element
        *ngIf="rootProperty" [formProperty]="rootProperty"></sf-form-element>
    </form>`,
  providers: [
    ActionRegistry,
    ValidatorRegistry,
    SchemaPreprocessor,
    WidgetFactory,
    {
      provide: FormPropertyFactory,
      useFactory: useFactory,
      deps: [SchemaValidatorFactory, ValidatorRegistry]
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

  @Input() schema: any = null;

  @Input() model: any;

  @Input() actions: { [actionId: string]: Action } = {};

  @Input() validators: { [path: string]: Validator } = {};

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
      this.modelChange.emit(value);
    }
    this.onChange.emit({value: value});
  }
}
