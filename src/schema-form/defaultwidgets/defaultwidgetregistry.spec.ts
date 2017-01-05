import {
  IntegerWidget,
  TextAreaWidget,
  StringWidget
} from './';

import { DefaultWidgetRegistry } from './defaultwidgetregistry';

describe('DefaultWidgetRegistry', () => {

  let STRING_TYPE = 'string';
  let INT_TYPE = 'integer';
  let TEXTAREA_TYPE = 'textarea';

  let A_NOT_REGISTERED_TYPE = 'FOOBARSTRING';
  let THE_DEFAULT_FIELD_TYPE = class { };
  let THE_TYPE = 'date';
  let THE_FIELD_TYPE = class { };

  let registry: DefaultWidgetRegistry;

  beforeEach(() => {
    registry = new DefaultWidgetRegistry();
  });

  it('should be initialized with primitives widgets', () => {
    let stringWidget = registry.getWidgetType(STRING_TYPE);
    let integerWidget = registry.getWidgetType(INT_TYPE);
    let textareaWidget = registry.getWidgetType(TEXTAREA_TYPE);

    expect(stringWidget).toBe(StringWidget);
    expect(integerWidget).toBe(IntegerWidget);
    expect(textareaWidget).toBe(TextAreaWidget);
  });

  it('should return a default widget if there is no matching string in widgets', () => {
    let widget = registry.getWidgetType(A_NOT_REGISTERED_TYPE);

    expect(widget).not.toBe(null);
  });

  it('should return the widget type set when there is no matching type registered', () => {
    registry.setDefaultWidget(THE_DEFAULT_FIELD_TYPE);

    let widget = registry.getWidgetType(A_NOT_REGISTERED_TYPE);

    expect(widget).toBe(THE_DEFAULT_FIELD_TYPE);
  });

  it('should register a widget type', () => {
    registry.register(THE_TYPE, THE_FIELD_TYPE);

    let widget = registry.getWidgetType(THE_TYPE);

    expect(widget).toBe(THE_FIELD_TYPE);
  });

});
