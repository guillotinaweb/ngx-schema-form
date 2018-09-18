/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export class ValidatorRegistry {
    constructor() {
        this.validators = [];
    }
    /**
     * @param {?} path
     * @param {?} validator
     * @return {?}
     */
    register(path, validator) {
        this.validators[path] = validator;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    get(path) {
        return this.validators[path];
    }
    /**
     * @return {?}
     */
    clear() {
        this.validators = [];
    }
}
function ValidatorRegistry_tsickle_Closure_declarations() {
    /** @type {?} */
    ValidatorRegistry.prototype.validators;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycmVnaXN0cnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vIiwic291cmNlcyI6WyJsaWIvbW9kZWwvdmFsaWRhdG9ycmVnaXN0cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE1BQU07OzBCQUM4QixFQUFFOzs7Ozs7O0lBRXBDLFFBQVEsQ0FBQyxJQUFZLEVBQUUsU0FBb0I7UUFDekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUM7S0FDbkM7Ozs7O0lBRUQsR0FBRyxDQUFDLElBQVk7UUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM5Qjs7OztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztLQUN0QjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdG9yIH0gZnJvbSAnLi92YWxpZGF0b3InO1xuXG5leHBvcnQgY2xhc3MgVmFsaWRhdG9yUmVnaXN0cnkge1xuICBwcml2YXRlIHZhbGlkYXRvcnM6IFZhbGlkYXRvcltdID0gW107XG5cbiAgcmVnaXN0ZXIocGF0aDogc3RyaW5nLCB2YWxpZGF0b3I6IFZhbGlkYXRvcikge1xuICAgIHRoaXMudmFsaWRhdG9yc1twYXRoXSA9IHZhbGlkYXRvcjtcbiAgfVxuXG4gIGdldChwYXRoOiBzdHJpbmcpOiBWYWxpZGF0b3Ige1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRvcnNbcGF0aF07XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnZhbGlkYXRvcnMgPSBbXTtcbiAgfVxufVxuIl19