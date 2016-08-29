import {
	ArrayListWidget,
	ObjectWidget,
	BaseWidget,
	CheckboxWidget,
	FileWidget,
	IntegerWidget,
	TextAreaWidget,
	RadioWidget,
	RangeWidget,
	RichTextWidget,
	SelectWidget,
	StringWidget
} from "./widgets";

export class WidgetRegistry {
	private widgets: { [type: string]: any } = {};
	private defaultWidget = StringWidget;

	constructor() {
		this.registerWidgetType("array",  ArrayListWidget);
		this.registerWidgetType("object",  ObjectWidget);

		this.registerWidgetType("string", StringWidget);
		this.registerWidgetType("search", StringWidget);
		this.registerWidgetType("tel", StringWidget);
		this.registerWidgetType("url", StringWidget);
		this.registerWidgetType("email", StringWidget);
		this.registerWidgetType("password", StringWidget);
		this.registerWidgetType("color", StringWidget);
		this.registerWidgetType("date", StringWidget);
		this.registerWidgetType("date-time", StringWidget);
		this.registerWidgetType("time", StringWidget);

		this.registerWidgetType("integer", IntegerWidget);
		this.registerWidgetType("number", IntegerWidget);
		this.registerWidgetType("range", RangeWidget);

		this.registerWidgetType("textarea", TextAreaWidget);

		this.registerWidgetType("file", FileWidget);
		this.registerWidgetType("select", SelectWidget);
		this.registerWidgetType("radio", RadioWidget);
		this.registerWidgetType("boolean", CheckboxWidget);
		this.registerWidgetType("checkbox", CheckboxWidget);

		this.registerWidgetType("richtext", RichTextWidget);
	}

	setDefaultWidget(widget: any) {
		this.defaultWidget = widget;
	}

	getDefaultWidget() {
		return this.defaultWidget;
	}

	hasWidget(type: string) {
		return this.widgets.hasOwnProperty(type);
	}

	registerWidgetType(type: string, widget: any) {
		this.widgets[type] = widget;
	}

	getWidgetType(type: string): any {
		if (this.hasWidget(type)) {
			return this.widgets[type];
		}
		return this.defaultWidget;
	}
}
