var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { ArrayWidget, ObjectWidget, CheckboxWidget, FileWidget, IntegerWidget, TextAreaWidget, RadioWidget, RangeWidget, SelectWidget, StringWidget, } from './';
import { WidgetRegistry } from '../widgetregistry';
var DefaultWidgetRegistry = (function (_super) {
    __extends(DefaultWidgetRegistry, _super);
    function DefaultWidgetRegistry() {
        var _this = _super.call(this) || this;
        _this.register('array', ArrayWidget);
        _this.register('object', ObjectWidget);
        _this.register('string', StringWidget);
        _this.register('search', StringWidget);
        _this.register('tel', StringWidget);
        _this.register('url', StringWidget);
        _this.register('email', StringWidget);
        _this.register('password', StringWidget);
        _this.register('color', StringWidget);
        _this.register('date', StringWidget);
        _this.register('time', StringWidget);
        _this.register('integer', IntegerWidget);
        _this.register('number', IntegerWidget);
        _this.register('range', RangeWidget);
        _this.register('textarea', TextAreaWidget);
        _this.register('file', FileWidget);
        _this.register('select', SelectWidget);
        _this.register('radio', RadioWidget);
        _this.register('boolean', CheckboxWidget);
        _this.register('checkbox', CheckboxWidget);
        _this.setDefaultWidget(StringWidget);
        return _this;
    }
    return DefaultWidgetRegistry;
}(WidgetRegistry));
export { DefaultWidgetRegistry };
