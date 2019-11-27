import {
  IntegerWidget,
  TextAreaWidget,
  StringWidget
} from './';

import { DefaultWidgetRegistry } from './defaultwidgetregistry';

describe('DefaultWidgetRegistry', () => {

  const STRING_TYPE = 'string';
  const INT_TYPE = 'integer';
  const TEXTAREA_TYPE = 'textarea';

  const A_NOT_REGISTERED_TYPE = 'FOOBARSTRING';
  const THE_DEFAULT_FIELD_TYPE = class { };
  const THE_TYPE = 'date';
  const THE_FIELD_TYPE = class { };

  let registry: DefaultWidgetRegistry;

  beforeEach(() => {
    registry = new DefaultWidgetRegistry();
  });

  it('should be initialized with primitives widgets', () => {
    const stringWidget = registry.getWidgetType(STRING_TYPE);
    const integerWidget = registry.getWidgetType(INT_TYPE);
    const textareaWidget = registry.getWidgetType(TEXTAREA_TYPE);

    expect(stringWidget).toBe(StringWidget);
    expect(integerWidget).toBe(IntegerWidget);
    expect(textareaWidget).toBe(TextAreaWidget);
  });

  it('should return a default widget if there is no matching string in widgets', () => {
    const widget = registry.getWidgetType(A_NOT_REGISTERED_TYPE);

    expect(widget).not.toBe(null);
  });

  it('should return the widget type set when there is no matching type registered', () => {
    registry.setDefaultWidget(THE_DEFAULT_FIELD_TYPE);

    const widget = registry.getWidgetType(A_NOT_REGISTERED_TYPE);

    expect(widget).toBe(THE_DEFAULT_FIELD_TYPE);
  });

  it('should register a widget type', () => {
    registry.register(THE_TYPE, THE_FIELD_TYPE);

    const widget = registry.getWidgetType(THE_TYPE);

    expect(widget).toBe(THE_FIELD_TYPE);
  });

});
