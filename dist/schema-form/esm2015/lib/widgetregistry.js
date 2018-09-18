/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export class WidgetRegistry {
    constructor() {
        this.widgets = {};
    }
    /**
     * @param {?} widget
     * @return {?}
     */
    setDefaultWidget(widget) {
        this.defaultWidget = widget;
    }
    /**
     * @return {?}
     */
    getDefaultWidget() {
        return this.defaultWidget;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    hasWidget(type) {
        return this.widgets.hasOwnProperty(type);
    }
    /**
     * @param {?} type
     * @param {?} widget
     * @return {?}
     */
    register(type, widget) {
        this.widgets[type] = widget;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    getWidgetType(type) {
        if (this.hasWidget(type)) {
            return this.widgets[type];
        }
        return this.defaultWidget;
    }
}
function WidgetRegistry_tsickle_Closure_declarations() {
    /** @type {?} */
    WidgetRegistry.prototype.widgets;
    /** @type {?} */
    WidgetRegistry.prototype.defaultWidget;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cmVnaXN0cnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vIiwic291cmNlcyI6WyJsaWIvd2lkZ2V0cmVnaXN0cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU07SUFNSjt1QkFKMkMsRUFBRTtLQUk1Qjs7Ozs7SUFFakIsZ0JBQWdCLENBQUMsTUFBVztRQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztLQUM3Qjs7OztJQUVELGdCQUFnQjtRQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO0tBQzNCOzs7OztJQUVELFNBQVMsQ0FBQyxJQUFZO1FBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUMxQzs7Ozs7O0lBRUQsUUFBUSxDQUFDLElBQVksRUFBRSxNQUFXO1FBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDO0tBQzdCOzs7OztJQUVELGFBQWEsQ0FBQyxJQUFZO1FBQ3hCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7S0FDM0I7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBXaWRnZXRSZWdpc3RyeSB7XG5cbiAgcHJpdmF0ZSB3aWRnZXRzOiB7IFt0eXBlOiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuXG4gIHByaXZhdGUgZGVmYXVsdFdpZGdldDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgc2V0RGVmYXVsdFdpZGdldCh3aWRnZXQ6IGFueSkge1xuICAgIHRoaXMuZGVmYXVsdFdpZGdldCA9IHdpZGdldDtcbiAgfVxuXG4gIGdldERlZmF1bHRXaWRnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdFdpZGdldDtcbiAgfVxuXG4gIGhhc1dpZGdldCh0eXBlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy53aWRnZXRzLmhhc093blByb3BlcnR5KHR5cGUpO1xuICB9XG5cbiAgcmVnaXN0ZXIodHlwZTogc3RyaW5nLCB3aWRnZXQ6IGFueSkge1xuICAgIHRoaXMud2lkZ2V0c1t0eXBlXSA9IHdpZGdldDtcbiAgfVxuXG4gIGdldFdpZGdldFR5cGUodHlwZTogc3RyaW5nKTogYW55IHtcbiAgICBpZiAodGhpcy5oYXNXaWRnZXQodHlwZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLndpZGdldHNbdHlwZV07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmRlZmF1bHRXaWRnZXQ7XG4gIH1cbn1cbiJdfQ==