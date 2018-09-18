/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var WidgetRegistry = /** @class */ (function () {
    function WidgetRegistry() {
        this.widgets = {};
    }
    /**
     * @param {?} widget
     * @return {?}
     */
    WidgetRegistry.prototype.setDefaultWidget = /**
     * @param {?} widget
     * @return {?}
     */
    function (widget) {
        this.defaultWidget = widget;
    };
    /**
     * @return {?}
     */
    WidgetRegistry.prototype.getDefaultWidget = /**
     * @return {?}
     */
    function () {
        return this.defaultWidget;
    };
    /**
     * @param {?} type
     * @return {?}
     */
    WidgetRegistry.prototype.hasWidget = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return this.widgets.hasOwnProperty(type);
    };
    /**
     * @param {?} type
     * @param {?} widget
     * @return {?}
     */
    WidgetRegistry.prototype.register = /**
     * @param {?} type
     * @param {?} widget
     * @return {?}
     */
    function (type, widget) {
        this.widgets[type] = widget;
    };
    /**
     * @param {?} type
     * @return {?}
     */
    WidgetRegistry.prototype.getWidgetType = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        if (this.hasWidget(type)) {
            return this.widgets[type];
        }
        return this.defaultWidget;
    };
    return WidgetRegistry;
}());
export { WidgetRegistry };
function WidgetRegistry_tsickle_Closure_declarations() {
    /** @type {?} */
    WidgetRegistry.prototype.widgets;
    /** @type {?} */
    WidgetRegistry.prototype.defaultWidget;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cmVnaXN0cnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vIiwic291cmNlcyI6WyJsaWIvd2lkZ2V0cmVnaXN0cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLElBQUE7SUFNRTt1QkFKMkMsRUFBRTtLQUk1Qjs7Ozs7SUFFakIseUNBQWdCOzs7O0lBQWhCLFVBQWlCLE1BQVc7UUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7S0FDN0I7Ozs7SUFFRCx5Q0FBZ0I7OztJQUFoQjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO0tBQzNCOzs7OztJQUVELGtDQUFTOzs7O0lBQVQsVUFBVSxJQUFZO1FBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUMxQzs7Ozs7O0lBRUQsaUNBQVE7Ozs7O0lBQVIsVUFBUyxJQUFZLEVBQUUsTUFBVztRQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQztLQUM3Qjs7Ozs7SUFFRCxzQ0FBYTs7OztJQUFiLFVBQWMsSUFBWTtRQUN4QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMzQjtRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO0tBQzNCO3lCQTdCSDtJQThCQyxDQUFBO0FBOUJELDBCQThCQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBXaWRnZXRSZWdpc3RyeSB7XG5cbiAgcHJpdmF0ZSB3aWRnZXRzOiB7IFt0eXBlOiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuXG4gIHByaXZhdGUgZGVmYXVsdFdpZGdldDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgc2V0RGVmYXVsdFdpZGdldCh3aWRnZXQ6IGFueSkge1xuICAgIHRoaXMuZGVmYXVsdFdpZGdldCA9IHdpZGdldDtcbiAgfVxuXG4gIGdldERlZmF1bHRXaWRnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdFdpZGdldDtcbiAgfVxuXG4gIGhhc1dpZGdldCh0eXBlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy53aWRnZXRzLmhhc093blByb3BlcnR5KHR5cGUpO1xuICB9XG5cbiAgcmVnaXN0ZXIodHlwZTogc3RyaW5nLCB3aWRnZXQ6IGFueSkge1xuICAgIHRoaXMud2lkZ2V0c1t0eXBlXSA9IHdpZGdldDtcbiAgfVxuXG4gIGdldFdpZGdldFR5cGUodHlwZTogc3RyaW5nKTogYW55IHtcbiAgICBpZiAodGhpcy5oYXNXaWRnZXQodHlwZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLndpZGdldHNbdHlwZV07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmRlZmF1bHRXaWRnZXQ7XG4gIH1cbn1cbiJdfQ==