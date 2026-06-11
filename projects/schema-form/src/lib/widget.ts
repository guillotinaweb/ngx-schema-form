import { AfterViewInit, ChangeDetectorRef, DestroyRef, Directive, inject } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { UntypedFormControl } from "@angular/forms";

import { ArrayProperty } from "./model/arrayproperty";
import { FormProperty, PropertyGroup } from "./model/formproperty";
import { ObjectProperty } from "./model/objectproperty";
import { ISchema } from "./model/ISchema";
import { jsonSchemaInstanceMatches } from "./model/json-schema-instance-matches";

export abstract class Widget<T extends FormProperty> {
  formProperty: T;
  control: UntypedFormControl;
  errorMessages: string[];

  id: string = "";
  name: string = "";
  schema: ISchema = {};
}

@Directive()
export class ControlWidget
  extends Widget<FormProperty>
  implements AfterViewInit {
  /**
   * Unconditionally required, or via {@code dependentRequiredWhen} (draft 2019-09+ {@code dependentRequired} /
   * {@code dependentSchemas}), or via {@code conditionalRequiredRules} (root or {@code allOf} {@code if}/
   * {@code then}/{@code else}; {@code if} is normalized in {@link SchemaPreprocessor} so it is not vacuously true
   * when keys are missing).
   */
  effectiveIsRequired = false;

  /**
   * Single object schema describing array items for multi-enum widgets (checkbox/select with {@code type: 'array'}).
   * Since draft 2020-12 widened {@code items} to {@code ISchema | ISchema[]}, coalesce a tuple {@code items} to its
   * first entry so templates can read {@code .oneOf} without a union type.
   */
  get arrayItemsSchema(): ISchema | undefined {
    const items = this.schema.items;
    return Array.isArray(items) ? items[0] : items;
  }

  private readonly cdr = inject(ChangeDetectorRef);
  private readonly destroyRef = inject(DestroyRef);

  ngAfterViewInit() {
    const control = this.control;
    this.formProperty.valueChanges.subscribe((newValue) => {
      if (control.value !== newValue) {
        control.setValue(newValue, { emitEvent: false });
      }
    });
    this.formProperty.errorsChanges.subscribe((errors) => {
      control.setErrors(errors, { emitEvent: true });
      const messages = (errors || [])
        .filter((e) => {
          return e.path && e.path.slice(1) === this.formProperty.path;
        })
        .map((e) => e.message);
      this.errorMessages = messages.filter((m, i) => messages.indexOf(m) === i);
    });
    control.valueChanges.subscribe((newValue) => {
      this.formProperty.setValue(newValue, false);
    });

    const parent = this.formProperty?.parent as PropertyGroup | undefined;
    const needsParentSync =
      (Array.isArray(this.schema.dependentRequiredWhen) && this.schema.dependentRequiredWhen.length > 0)
      || (Array.isArray(this.schema.conditionalRequiredRules) && this.schema.conditionalRequiredRules.length > 0);
    if (parent?.valueChanges && needsParentSync) {
      parent.valueChanges
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(() => {
          this.syncEffectiveRequired();
          this.cdr.markForCheck();
        });
    }
    this.syncEffectiveRequired();
  }

  private syncEffectiveRequired(): void {
    if (this.schema.isRequired) {
      this.effectiveIsRequired = true;
      return;
    }
    const parent = this.formProperty?.parent as PropertyGroup | undefined;
    if (!parent) {
      this.effectiveIsRequired = false;
      return;
    }
    const when = this.schema.dependentRequiredWhen;
    if (when?.length) {
      for (const trigger of when) {
        const triggerProp = parent.getProperty(trigger);
        if (triggerProp && triggerProp._hasValue()) {
          this.effectiveIsRequired = true;
          return;
        }
      }
    }
    const rules = this.schema.conditionalRequiredRules;
    if (rules?.length) {
      const instance = parent.value ?? {};
      const document$schema = this.formProperty.findRoot()?.schema?.$schema;
      for (const rule of rules) {
        const ifOk = jsonSchemaInstanceMatches(rule.if, instance, document$schema);
        if ((rule.when === "ifMatches" && ifOk) || (rule.when === "ifFails" && !ifOk)) {
          this.effectiveIsRequired = true;
          return;
        }
      }
    }
    this.effectiveIsRequired = false;
  }
}

@Directive()
export class ArrayLayoutWidget
  extends Widget<ArrayProperty>
  implements AfterViewInit {
  ngAfterViewInit() {
    const control = this.control;
    this.formProperty.errorsChanges.subscribe((errors) => {
      control.setErrors(errors, { emitEvent: true });
    });
  }
}

@Directive()
export class ObjectLayoutWidget
  extends Widget<ObjectProperty>
  implements AfterViewInit {
  ngAfterViewInit() {
    const control = this.control;
    this.formProperty.errorsChanges.subscribe((errors) => {
      control.setErrors(errors, { emitEvent: true });
    });
  }
}
