/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ValidatorRegistry = /** @class */ (function () {
    function ValidatorRegistry() {
        this.validators = [];
    }
    /**
     * @param {?} path
     * @param {?} validator
     * @return {?}
     */
    ValidatorRegistry.prototype.register = /**
     * @param {?} path
     * @param {?} validator
     * @return {?}
     */
    function (path, validator) {
        this.validators[path] = validator;
    };
    /**
     * @param {?} path
     * @return {?}
     */
    ValidatorRegistry.prototype.get = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        return this.validators[path];
    };
    /**
     * @return {?}
     */
    ValidatorRegistry.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.validators = [];
    };
    return ValidatorRegistry;
}());
export { ValidatorRegistry };
function ValidatorRegistry_tsickle_Closure_declarations() {
    /** @type {?} */
    ValidatorRegistry.prototype.validators;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycmVnaXN0cnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vIiwic291cmNlcyI6WyJsaWIvbW9kZWwvdmFsaWRhdG9ycmVnaXN0cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLElBQUE7OzBCQUNvQyxFQUFFOzs7Ozs7O0lBRXBDLG9DQUFROzs7OztJQUFSLFVBQVMsSUFBWSxFQUFFLFNBQW9CO1FBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDO0tBQ25DOzs7OztJQUVELCtCQUFHOzs7O0lBQUgsVUFBSSxJQUFZO1FBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDOUI7Ozs7SUFFRCxpQ0FBSzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztLQUN0Qjs0QkFmSDtJQWdCQyxDQUFBO0FBZEQsNkJBY0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tICcuL3ZhbGlkYXRvcic7XG5cbmV4cG9ydCBjbGFzcyBWYWxpZGF0b3JSZWdpc3RyeSB7XG4gIHByaXZhdGUgdmFsaWRhdG9yczogVmFsaWRhdG9yW10gPSBbXTtcblxuICByZWdpc3RlcihwYXRoOiBzdHJpbmcsIHZhbGlkYXRvcjogVmFsaWRhdG9yKSB7XG4gICAgdGhpcy52YWxpZGF0b3JzW3BhdGhdID0gdmFsaWRhdG9yO1xuICB9XG5cbiAgZ2V0KHBhdGg6IHN0cmluZyk6IFZhbGlkYXRvciB7XG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yc1twYXRoXTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMudmFsaWRhdG9ycyA9IFtdO1xuICB9XG59XG4iXX0=