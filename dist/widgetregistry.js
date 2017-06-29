var WidgetRegistry = (function () {
    function WidgetRegistry() {
        this.widgets = {};
    }
    WidgetRegistry.prototype.setDefaultWidget = function (widget) {
        this.defaultWidget = widget;
    };
    WidgetRegistry.prototype.getDefaultWidget = function () {
        return this.defaultWidget;
    };
    WidgetRegistry.prototype.hasWidget = function (type) {
        return this.widgets.hasOwnProperty(type);
    };
    WidgetRegistry.prototype.register = function (type, widget) {
        this.widgets[type] = widget;
    };
    WidgetRegistry.prototype.getWidgetType = function (type) {
        if (this.hasWidget(type)) {
            return this.widgets[type];
        }
        return this.defaultWidget;
    };
    return WidgetRegistry;
}());
export { WidgetRegistry };
