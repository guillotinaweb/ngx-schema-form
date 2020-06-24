import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import {FormElementComponent} from './formelement.component';
import {FormComponent} from './form.component';
import {WidgetChooserComponent} from './widgetchooser.component';
import {ArrayWidget} from './defaultwidgets/array/array.widget';
import {ButtonWidget} from './defaultwidgets/button/button.widget';
import {ObjectWidget} from './defaultwidgets/object/object.widget';
import {CheckboxWidget} from './defaultwidgets/checkbox/checkbox.widget';
import {FileWidget} from './defaultwidgets/file/file.widget';
import {IntegerWidget} from './defaultwidgets/integer/integer.widget';
import {TextAreaWidget} from './defaultwidgets/textarea/textarea.widget';
import {RadioWidget} from './defaultwidgets/radio/radio.widget';
import {RangeWidget} from './defaultwidgets/range/range.widget';
import {SelectWidget} from './defaultwidgets/select/select.widget';
import {StringWidget} from './defaultwidgets/string/string.widget';
import {DefaultWidgetRegistry} from './defaultwidgets/defaultwidgetregistry';
import {DisableControlDirective} from './defaultwidgets/_directives/disableControl.directive';

import {
  DefaultWidget
} from './default.widget';

import {WidgetRegistry} from './widgetregistry';
import {SchemaValidatorFactory, ZSchemaValidatorFactory} from './schemavalidatorfactory';
import {FormElementComponentAction} from './formelement.action.component';
import {ExpressionCompilerFactory, JEXLExpressionCompilerFactory} from './expression-compiler-factory';

import { LOG_LEVEL, LogLevel, LogService, DefaultLogService } from './log.service';

const moduleProviders = [
  {
    provide: WidgetRegistry,
    useClass: DefaultWidgetRegistry
  },
  {
    provide: SchemaValidatorFactory,
    useClass: ZSchemaValidatorFactory
  },
  {
    provide: ExpressionCompilerFactory,
    useClass: JEXLExpressionCompilerFactory
  },
  {
    provide: LOG_LEVEL,
    useValue: LogLevel.off
  },
  {
    provide: LogService,
    useClass: DefaultLogService
  }
];

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [
    FormElementComponent,
    FormElementComponentAction,
    FormComponent,
    WidgetChooserComponent,
    DefaultWidget,
    ArrayWidget,
    ButtonWidget,
    ObjectWidget,
    CheckboxWidget,
    FileWidget,
    IntegerWidget,
    TextAreaWidget,
    RadioWidget,
    RangeWidget,
    SelectWidget,
    StringWidget,
    DisableControlDirective
  ],
  entryComponents: [
    FormElementComponent,
    FormElementComponentAction,
    FormComponent,
    WidgetChooserComponent,
    ArrayWidget,
    ButtonWidget,
    ObjectWidget,
    CheckboxWidget,
    FileWidget,
    IntegerWidget,
    TextAreaWidget,
    RadioWidget,
    RangeWidget,
    SelectWidget,
    StringWidget
  ],
  exports: [
    FormComponent,
    FormElementComponent,
    FormElementComponentAction,
    WidgetChooserComponent,
    ArrayWidget,
    ButtonWidget,
    ObjectWidget,
    CheckboxWidget,
    FileWidget,
    IntegerWidget,
    TextAreaWidget,
    RadioWidget,
    RangeWidget,
    SelectWidget,
    StringWidget,
    DisableControlDirective
  ]
})
export class SchemaFormModule {

  static forRoot(): ModuleWithProviders<SchemaFormModule> {
    return {
      ngModule: SchemaFormModule,
      providers: [...moduleProviders]
    };
  }

}
