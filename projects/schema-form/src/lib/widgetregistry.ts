export class WidgetRegistry {

  private widgets: { [type: string]: any } = {};

  private defaultWidget: any;

  constructor() { }

  setDefaultWidget(widget: any) {
    this.defaultWidget = widget;
  }

  getDefaultWidget() {
    return this.defaultWidget;
  }

  hasWidget(type: string) {
    return this.widgets.hasOwnProperty(type);
  }

  register(type: string, widget: any) {
    this.widgets[type] = widget;
  }

  getWidgetType(type: string): any {
    if (this.hasWidget(type)) {
      return this.widgets[type];
    }
    return this.defaultWidget;
  }
}
