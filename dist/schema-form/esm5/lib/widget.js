/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
// unsupported: template constraints.
/**
 * @abstract
 * @template T
 */
var 
// unsupported: template constraints.
/**
 * @abstract
 * @template T
 */
Widget = /** @class */ (function () {
    function Widget() {
        this.id = '';
        this.name = '';
        this.schema = {};
    }
    return Widget;
}());
// unsupported: template constraints.
/**
 * @abstract
 * @template T
 */
export { Widget };
function Widget_tsickle_Closure_declarations() {
    /** @type {?} */
    Widget.prototype.formProperty;
    /** @type {?} */
    Widget.prototype.control;
    /** @type {?} */
    Widget.prototype.errorMessages;
    /** @type {?} */
    Widget.prototype.id;
    /** @type {?} */
    Widget.prototype.name;
    /** @type {?} */
    Widget.prototype.schema;
}
var ControlWidget = /** @class */ (function (_super) {
    tslib_1.__extends(ControlWidget, _super);
    function ControlWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    ControlWidget.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ control = this.control;
        this.formProperty.valueChanges.subscribe(function (newValue) {
            if (control.value !== newValue) {
                control.setValue(newValue, { emitEvent: false });
            }
        });
        this.formProperty.errorsChanges.subscribe(function (errors) {
            control.setErrors(errors, { emitEvent: true });
            var /** @type {?} */ messages = (errors || [])
                .filter(function (e) {
                return e.path && e.path.slice(1) === _this.formProperty.path;
            })
                .map(function (e) { return e.message; });
            _this.errorMessages = messages.filter(function (m, i) { return messages.indexOf(m) === i; });
        });
        control.valueChanges.subscribe(function (newValue) {
            _this.formProperty.setValue(newValue, false);
        });
    };
    return ControlWidget;
}(Widget));
export { ControlWidget };
var ArrayLayoutWidget = /** @class */ (function (_super) {
    tslib_1.__extends(ArrayLayoutWidget, _super);
    function ArrayLayoutWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    ArrayLayoutWidget.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ control = this.control;
        this.formProperty.errorsChanges.subscribe(function (errors) {
            control.setErrors(errors, { emitEvent: true });
        });
    };
    return ArrayLayoutWidget;
}(Widget));
export { ArrayLayoutWidget };
var ObjectLayoutWidget = /** @class */ (function (_super) {
    tslib_1.__extends(ObjectLayoutWidget, _super);
    function ObjectLayoutWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    ObjectLayoutWidget.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ control = this.control;
        this.formProperty.errorsChanges.subscribe(function (errors) {
            control.setErrors(errors, { emitEvent: true });
        });
    };
    return ObjectLayoutWidget;
}(Widget));
export { ObjectLayoutWidget };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNjaGVtYS1mb3JtLyIsInNvdXJjZXMiOlsibGliL3dpZGdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBT0E7Ozs7OztBQUFBOztrQkFLZSxFQUFFO29CQUNBLEVBQUU7c0JBQ0gsRUFBRTs7aUJBZGxCO0lBZUMsQ0FBQTs7Ozs7O0FBUkQsa0JBUUM7Ozs7Ozs7Ozs7Ozs7OztBQUVELElBQUE7SUFBbUMseUNBQW9COzs7Ozs7O0lBRXJELHVDQUFlOzs7SUFBZjtRQUFBLGlCQW1CQztRQWxCQyxxQkFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxRQUFRO1lBQ2hELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDL0IsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQzthQUNoRDtTQUNGLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQU07WUFDL0MsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUMvQyxxQkFBTSxRQUFRLEdBQUcsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDO2lCQUM1QixNQUFNLENBQUMsVUFBQSxDQUFDO2dCQUNQLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO2FBQzdELENBQUM7aUJBQ0QsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLE9BQU8sRUFBVCxDQUFTLENBQUMsQ0FBQztZQUN2QixLQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztTQUMzRSxDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLFFBQVE7WUFDdEMsS0FBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzdDLENBQUMsQ0FBQztLQUNKO3dCQXRDSDtFQWlCbUMsTUFBTSxFQXVCeEMsQ0FBQTtBQXZCRCx5QkF1QkM7QUFFRCxJQUFBO0lBQXVDLDZDQUFxQjs7Ozs7OztJQUUxRCwyQ0FBZTs7O0lBQWY7UUFDRSxxQkFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFNO1lBQy9DLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEVBQUMsU0FBUyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7U0FDOUMsQ0FBQyxDQUFDO0tBQ0o7NEJBakRIO0VBMEN1QyxNQUFNLEVBUTVDLENBQUE7QUFSRCw2QkFRQztBQUVELElBQUE7SUFBd0MsOENBQXNCOzs7Ozs7O0lBRTVELDRDQUFlOzs7SUFBZjtRQUNFLHFCQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQU07WUFDL0MsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztTQUM5QyxDQUFDLENBQUM7S0FDSjs2QkEzREg7RUFvRHdDLE1BQU0sRUFRN0MsQ0FBQTtBQVJELDhCQVFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHtBcnJheVByb3BlcnR5fSBmcm9tICcuL21vZGVsL2FycmF5cHJvcGVydHknO1xuaW1wb3J0IHtGb3JtUHJvcGVydHl9IGZyb20gJy4vbW9kZWwvZm9ybXByb3BlcnR5JztcbmltcG9ydCB7T2JqZWN0UHJvcGVydHl9IGZyb20gJy4vbW9kZWwvb2JqZWN0cHJvcGVydHknO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgV2lkZ2V0PFQgZXh0ZW5kcyBGb3JtUHJvcGVydHk+IHtcbiAgZm9ybVByb3BlcnR5OiBUO1xuICBjb250cm9sOiBGb3JtQ29udHJvbDtcbiAgZXJyb3JNZXNzYWdlczogc3RyaW5nW107XG5cbiAgaWQ6IHN0cmluZyA9ICcnO1xuICBuYW1lOiBzdHJpbmcgPSAnJztcbiAgc2NoZW1hOiBhbnkgPSB7fTtcbn1cblxuZXhwb3J0IGNsYXNzIENvbnRyb2xXaWRnZXQgZXh0ZW5kcyBXaWRnZXQ8Rm9ybVByb3BlcnR5PiBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5jb250cm9sO1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKG5ld1ZhbHVlKSA9PiB7XG4gICAgICBpZiAoY29udHJvbC52YWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgY29udHJvbC5zZXRWYWx1ZShuZXdWYWx1ZSwge2VtaXRFdmVudDogZmFsc2V9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5lcnJvcnNDaGFuZ2VzLnN1YnNjcmliZSgoZXJyb3JzKSA9PiB7XG4gICAgICBjb250cm9sLnNldEVycm9ycyhlcnJvcnMsIHsgZW1pdEV2ZW50OiB0cnVlIH0pO1xuICAgICAgY29uc3QgbWVzc2FnZXMgPSAoZXJyb3JzIHx8IFtdKVxuICAgICAgICAuZmlsdGVyKGUgPT4ge1xuICAgICAgICAgIHJldHVybiBlLnBhdGggJiYgZS5wYXRoLnNsaWNlKDEpID09PSB0aGlzLmZvcm1Qcm9wZXJ0eS5wYXRoO1xuICAgICAgICB9KVxuICAgICAgICAubWFwKGUgPT4gZS5tZXNzYWdlKTtcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlcyA9IG1lc3NhZ2VzLmZpbHRlcigobSwgaSkgPT4gbWVzc2FnZXMuaW5kZXhPZihtKSA9PT0gaSk7XG4gICAgfSk7XG4gICAgY29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKChuZXdWYWx1ZSkgPT4ge1xuICAgICAgdGhpcy5mb3JtUHJvcGVydHkuc2V0VmFsdWUobmV3VmFsdWUsIGZhbHNlKTtcbiAgICB9KTtcbiAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBBcnJheUxheW91dFdpZGdldCBleHRlbmRzIFdpZGdldDxBcnJheVByb3BlcnR5PiBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5jb250cm9sO1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LmVycm9yc0NoYW5nZXMuc3Vic2NyaWJlKChlcnJvcnMpID0+IHtcbiAgICAgIGNvbnRyb2wuc2V0RXJyb3JzKGVycm9ycywge2VtaXRFdmVudDogdHJ1ZX0pO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBPYmplY3RMYXlvdXRXaWRnZXQgZXh0ZW5kcyBXaWRnZXQ8T2JqZWN0UHJvcGVydHk+IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmNvbnRyb2w7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkuZXJyb3JzQ2hhbmdlcy5zdWJzY3JpYmUoKGVycm9ycykgPT4ge1xuICAgICAgY29udHJvbC5zZXRFcnJvcnMoZXJyb3JzLCB7ZW1pdEV2ZW50OiB0cnVlfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==