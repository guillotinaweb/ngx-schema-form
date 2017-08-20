import {
  ArrayWidget,
  ObjectWidget,
  CheckboxWidget,
  FileWidget,
  IntegerWidget,
  TextAreaWidget,
  RadioWidget,
  RangeWidget,
  SelectWidget,
  StringWidget,
  ButtonWidget
} from './';

import { WidgetRegistry } from '../widgetregistry';

export class DefaultWidgetRegistry extends WidgetRegistry {
  constructor() {
    super();

    this.register('array',  ArrayWidget);
    this.register('object',  ObjectWidget);

    this.register('string', StringWidget);
    this.register('search', StringWidget);
    this.register('tel', StringWidget);
    this.register('url', StringWidget);
    this.register('email', StringWidget);
    this.register('password', StringWidget);
    this.register('color', StringWidget);
    this.register('date', StringWidget);
    this.register('date-time', StringWidget);
    this.register('time', StringWidget);

    this.register('integer', IntegerWidget);
    this.register('number', IntegerWidget);
    this.register('range', RangeWidget);

    this.register('textarea', TextAreaWidget);

    this.register('file', FileWidget);
    this.register('select', SelectWidget);
    this.register('radio', RadioWidget);
    this.register('boolean', CheckboxWidget);
    this.register('checkbox', CheckboxWidget);

    this.register('button', ButtonWidget);

    this.setDefaultWidget(StringWidget);
  }
}
