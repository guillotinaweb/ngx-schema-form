/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BindingRegistry = /** @class */ (function () {
    function BindingRegistry() {
        this.bindings = [];
    }
    /**
     * @return {?}
     */
    BindingRegistry.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.bindings = [];
    };
    /**
     * @param {?} path
     * @param {?} binding
     * @return {?}
     */
    BindingRegistry.prototype.register = /**
     * @param {?} path
     * @param {?} binding
     * @return {?}
     */
    function (path, binding) {
        this.bindings[path] = [].concat(binding);
    };
    /**
     * @param {?} path
     * @return {?}
     */
    BindingRegistry.prototype.get = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        return this.bindings[path];
    };
    return BindingRegistry;
}());
export { BindingRegistry };
function BindingRegistry_tsickle_Closure_declarations() {
    /** @type {?} */
    BindingRegistry.prototype.bindings;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluZGluZ3JlZ2lzdHJ5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNjaGVtYS1mb3JtLyIsInNvdXJjZXMiOlsibGliL21vZGVsL2JpbmRpbmdyZWdpc3RyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsSUFBQTs7d0JBQ3dCLEVBQUU7Ozs7O0lBRXhCLCtCQUFLOzs7SUFBTDtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0tBQ3BCOzs7Ozs7SUFFRCxrQ0FBUTs7Ozs7SUFBUixVQUFTLElBQVksRUFBRSxPQUE0QjtRQUNqRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDMUM7Ozs7O0lBRUQsNkJBQUc7Ozs7SUFBSCxVQUFJLElBQVk7UUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM1QjswQkFmSDtJQWdCQyxDQUFBO0FBZEQsMkJBY0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0JpbmRpbmd9IGZyb20gJy4vYmluZGluZyc7XG5cbmV4cG9ydCBjbGFzcyBCaW5kaW5nUmVnaXN0cnkge1xuICBiaW5kaW5nczogQmluZGluZ1tdID0gW107XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5iaW5kaW5ncyA9IFtdO1xuICB9XG5cbiAgcmVnaXN0ZXIocGF0aDogc3RyaW5nLCBiaW5kaW5nOiBCaW5kaW5nIHwgQmluZGluZ1tdKSB7XG4gICAgdGhpcy5iaW5kaW5nc1twYXRoXSA9IFtdLmNvbmNhdChiaW5kaW5nKTtcbiAgfVxuXG4gIGdldChwYXRoOiBzdHJpbmcpOiBCaW5kaW5nW10ge1xuICAgIHJldHVybiB0aGlzLmJpbmRpbmdzW3BhdGhdO1xuICB9XG59XG4iXX0=