/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export class BindingRegistry {
    constructor() {
        this.bindings = [];
    }
    /**
     * @return {?}
     */
    clear() {
        this.bindings = [];
    }
    /**
     * @param {?} path
     * @param {?} binding
     * @return {?}
     */
    register(path, binding) {
        this.bindings[path] = [].concat(binding);
    }
    /**
     * @param {?} path
     * @return {?}
     */
    get(path) {
        return this.bindings[path];
    }
}
function BindingRegistry_tsickle_Closure_declarations() {
    /** @type {?} */
    BindingRegistry.prototype.bindings;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluZGluZ3JlZ2lzdHJ5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNjaGVtYS1mb3JtLyIsInNvdXJjZXMiOlsibGliL21vZGVsL2JpbmRpbmdyZWdpc3RyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsTUFBTTs7d0JBQ2tCLEVBQUU7Ozs7O0lBRXhCLEtBQUs7UUFDSCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztLQUNwQjs7Ozs7O0lBRUQsUUFBUSxDQUFDLElBQVksRUFBRSxPQUE0QjtRQUNqRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDMUM7Ozs7O0lBRUQsR0FBRyxDQUFDLElBQVk7UUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM1QjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCaW5kaW5nfSBmcm9tICcuL2JpbmRpbmcnO1xuXG5leHBvcnQgY2xhc3MgQmluZGluZ1JlZ2lzdHJ5IHtcbiAgYmluZGluZ3M6IEJpbmRpbmdbXSA9IFtdO1xuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuYmluZGluZ3MgPSBbXTtcbiAgfVxuXG4gIHJlZ2lzdGVyKHBhdGg6IHN0cmluZywgYmluZGluZzogQmluZGluZyB8IEJpbmRpbmdbXSkge1xuICAgIHRoaXMuYmluZGluZ3NbcGF0aF0gPSBbXS5jb25jYXQoYmluZGluZyk7XG4gIH1cblxuICBnZXQocGF0aDogc3RyaW5nKTogQmluZGluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5iaW5kaW5nc1twYXRoXTtcbiAgfVxufVxuIl19