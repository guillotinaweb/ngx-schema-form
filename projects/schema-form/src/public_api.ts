/*
 * Public API Surface of schema-form
 */

// export * from './lib/index';
export { FormComponent } from './lib/form.component';
export { FormElementComponent } from './lib/formelement.component';
export { FormElementComponentAction } from './lib/formelement.action.component';
export { WidgetChooserComponent } from './lib/widgetchooser.component';
export { WidgetRegistry } from './lib/widgetregistry';
export {
  Action,
  ActionRegistry,
  Binding,
  BindingRegistry,
  FormPropertyFactory,
  FormProperty,
  AtomicProperty,
  ObjectProperty,  
  ArrayProperty,
  StringProperty,
  BooleanProperty,
  NumberProperty,  
  Validator,
  ValidatorRegistry,
  SchemaPreprocessor,
  // <schema def>
  IButton,
  IFieldSet,
  IOneOf,
  IProperties,
  ISchema,
  IWidget
  // </schema def>
} from './lib/model';
export {
  SchemaValidatorFactory,
  ZSchemaValidatorFactory
} from './lib/schemavalidatorfactory';
export { 
  ExpressionCompilerFactory, 
  ExpressionCompiler, 
  ExpressionCompilerVisibilityIf, 
  ExpressionContextVisibilitIf,
  JEXLExpressionCompilerFactory,
  JEXLExpressionCompiler,
  JEXLExpressionCompilerVisibiltyIf
} from './lib/expression-compiler-factory';
export { WidgetFactory } from './lib/widgetfactory';
export { TerminatorService } from './lib/terminator.service';
export {
  Widget,
  ControlWidget,
  ArrayLayoutWidget,
  ObjectLayoutWidget
} from './lib/widget';

export { ArrayWidget } from './lib/defaultwidgets/array/array.widget';
export { ButtonWidget } from './lib/defaultwidgets/button/button.widget';
export { ObjectWidget } from './lib/defaultwidgets/object/object.widget';
export { CheckboxWidget } from './lib/defaultwidgets/checkbox/checkbox.widget';
export { FileWidget } from './lib/defaultwidgets/file/file.widget';
export { IntegerWidget } from './lib/defaultwidgets/integer/integer.widget';
export { TextAreaWidget } from './lib/defaultwidgets/textarea/textarea.widget';
export { RadioWidget } from './lib/defaultwidgets/radio/radio.widget';
export { RangeWidget } from './lib/defaultwidgets/range/range.widget';
export { SelectWidget } from './lib/defaultwidgets/select/select.widget';
export { StringWidget } from './lib/defaultwidgets/string/string.widget';
export {
  DefaultWidgetRegistry
} from './lib/defaultwidgets/defaultwidgetregistry';
export { DisableControlDirective } from './lib/defaultwidgets/_directives/disableControl.directive'

export { SchemaFormModule } from './lib/schema-form.module';
export {
  TemplateSchemaModule
} from './lib/template-schema/template-schema.module';
