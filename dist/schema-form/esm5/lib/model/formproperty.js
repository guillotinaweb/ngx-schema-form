/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';
/**
 * @abstract
 */
var /**
 * @abstract
 */
FormProperty = /** @class */ (function () {
    function FormProperty(schemaValidatorFactory, validatorRegistry, schema, parent, path) {
        this.validatorRegistry = validatorRegistry;
        this.schema = schema;
        this._value = null;
        this._errors = null;
        this._valueChanges = new BehaviorSubject(null);
        this._errorsChanges = new BehaviorSubject(null);
        this._visible = true;
        this._visibilityChanges = new BehaviorSubject(true);
        this.schemaValidator = schemaValidatorFactory.createValidatorFn(this.schema);
        this._parent = parent;
        if (parent) {
            this._root = parent.root;
        }
        else if (this instanceof PropertyGroup) {
            this._root = /** @type {?} */ (/** @type {?} */ (this));
        }
        this._path = path;
    }
    Object.defineProperty(FormProperty.prototype, "valueChanges", {
        get: /**
         * @return {?}
         */
        function () {
            return this._valueChanges;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormProperty.prototype, "errorsChanges", {
        get: /**
         * @return {?}
         */
        function () {
            return this._errorsChanges;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormProperty.prototype, "type", {
        get: /**
         * @return {?}
         */
        function () {
            return this.schema.type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormProperty.prototype, "parent", {
        get: /**
         * @return {?}
         */
        function () {
            return this._parent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormProperty.prototype, "root", {
        get: /**
         * @return {?}
         */
        function () {
            return this._root || /** @type {?} */ (/** @type {?} */ (this));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormProperty.prototype, "path", {
        get: /**
         * @return {?}
         */
        function () {
            return this._path;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormProperty.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormProperty.prototype, "visible", {
        get: /**
         * @return {?}
         */
        function () {
            return this._visible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormProperty.prototype, "valid", {
        get: /**
         * @return {?}
         */
        function () {
            return this._errors === null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} onlySelf
     * @param {?=} emitEvent
     * @return {?}
     */
    FormProperty.prototype.updateValueAndValidity = /**
     * @param {?=} onlySelf
     * @param {?=} emitEvent
     * @return {?}
     */
    function (onlySelf, emitEvent) {
        if (onlySelf === void 0) { onlySelf = false; }
        if (emitEvent === void 0) { emitEvent = true; }
        this._updateValue();
        if (emitEvent) {
            this.valueChanges.next(this.value);
        }
        this._runValidation();
        if (this.parent && !onlySelf) {
            this.parent.updateValueAndValidity(onlySelf, emitEvent);
        }
    };
    /**
     * \@internal
     * @return {?}
     */
    FormProperty.prototype._runValidation = /**
     * \@internal
     * @return {?}
     */
    function () {
        var /** @type {?} */ errors = this.schemaValidator(this._value) || [];
        var /** @type {?} */ customValidator = this.validatorRegistry.get(this.path);
        if (customValidator) {
            var /** @type {?} */ customErrors = customValidator(this.value, this, this.findRoot());
            errors = this.mergeErrors(errors, customErrors);
        }
        if (errors.length === 0) {
            errors = null;
        }
        this._errors = errors;
        this.setErrors(this._errors);
    };
    /**
     * @param {?} errors
     * @param {?} newErrors
     * @return {?}
     */
    FormProperty.prototype.mergeErrors = /**
     * @param {?} errors
     * @param {?} newErrors
     * @return {?}
     */
    function (errors, newErrors) {
        if (newErrors) {
            if (Array.isArray(newErrors)) {
                errors = errors.concat.apply(errors, tslib_1.__spread(newErrors));
            }
            else {
                errors.push(newErrors);
            }
        }
        return errors;
    };
    /**
     * @param {?} errors
     * @return {?}
     */
    FormProperty.prototype.setErrors = /**
     * @param {?} errors
     * @return {?}
     */
    function (errors) {
        this._errors = errors;
        this._errorsChanges.next(errors);
    };
    /**
     * @param {?} errors
     * @return {?}
     */
    FormProperty.prototype.extendErrors = /**
     * @param {?} errors
     * @return {?}
     */
    function (errors) {
        errors = this.mergeErrors(this._errors || [], errors);
        this.setErrors(errors);
    };
    /**
     * @param {?} path
     * @return {?}
     */
    FormProperty.prototype.searchProperty = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        var /** @type {?} */ prop = this;
        var /** @type {?} */ base = null;
        var /** @type {?} */ result = null;
        if (path[0] === '/') {
            base = this.findRoot();
            result = base.getProperty(path.substr(1));
        }
        else {
            while (result === null && prop.parent !== null) {
                prop = base = prop.parent;
                result = base.getProperty(path);
            }
        }
        return result;
    };
    /**
     * @return {?}
     */
    FormProperty.prototype.findRoot = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ property = this;
        while (property.parent !== null) {
            property = property.parent;
        }
        return /** @type {?} */ (property);
    };
    /**
     * @param {?} visible
     * @return {?}
     */
    FormProperty.prototype.setVisible = /**
     * @param {?} visible
     * @return {?}
     */
    function (visible) {
        this._visible = visible;
        this._visibilityChanges.next(visible);
        this.updateValueAndValidity();
        if (this.parent) {
            this.parent.updateValueAndValidity(false, true);
        }
    };
    /**
     * @return {?}
     */
    FormProperty.prototype._bindVisibility = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ visibleIf = this.schema.visibleIf;
        if (typeof visibleIf === 'object' && Object.keys(visibleIf).length === 0) {
            this.setVisible(false);
        }
        else if (visibleIf !== undefined) {
            var /** @type {?} */ propertiesBinding = [];
            var _loop_1 = function (dependencyPath) {
                if (visibleIf.hasOwnProperty(dependencyPath)) {
                    var /** @type {?} */ property = this_1.searchProperty(dependencyPath);
                    if (property) {
                        var /** @type {?} */ valueCheck = property.valueChanges.pipe(map(function (value) {
                            if (visibleIf[dependencyPath].indexOf('$ANY$') !== -1) {
                                return value.length > 0;
                            }
                            else {
                                return visibleIf[dependencyPath].indexOf(value) !== -1;
                            }
                        }));
                        var /** @type {?} */ visibilityCheck = property._visibilityChanges;
                        var /** @type {?} */ and = combineLatest([valueCheck, visibilityCheck], function (v1, v2) { return v1 && v2; });
                        propertiesBinding.push(and);
                    }
                    else {
                        console.warn('Can\'t find property ' + dependencyPath + ' for visibility check of ' + this_1.path);
                    }
                }
            };
            var this_1 = this;
            for (var /** @type {?} */ dependencyPath in visibleIf) {
                _loop_1(dependencyPath);
            }
            combineLatest(propertiesBinding, function () {
                var values = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    values[_i] = arguments[_i];
                }
                return values.indexOf(true) !== -1;
            }).pipe(distinctUntilChanged()).subscribe(function (visible) {
                _this.setVisible(visible);
            });
        }
    };
    return FormProperty;
}());
/**
 * @abstract
 */
export { FormProperty };
function FormProperty_tsickle_Closure_declarations() {
    /** @type {?} */
    FormProperty.prototype.schemaValidator;
    /** @type {?} */
    FormProperty.prototype._value;
    /** @type {?} */
    FormProperty.prototype._errors;
    /** @type {?} */
    FormProperty.prototype._valueChanges;
    /** @type {?} */
    FormProperty.prototype._errorsChanges;
    /** @type {?} */
    FormProperty.prototype._visible;
    /** @type {?} */
    FormProperty.prototype._visibilityChanges;
    /** @type {?} */
    FormProperty.prototype._root;
    /** @type {?} */
    FormProperty.prototype._parent;
    /** @type {?} */
    FormProperty.prototype._path;
    /** @type {?} */
    FormProperty.prototype.validatorRegistry;
    /** @type {?} */
    FormProperty.prototype.schema;
    /**
     * @abstract
     * @param {?} value
     * @param {?} onlySelf
     * @return {?}
     */
    FormProperty.prototype.setValue = function (value, onlySelf) { };
    /**
     * @abstract
     * @param {?} value
     * @param {?} onlySelf
     * @return {?}
     */
    FormProperty.prototype.reset = function (value, onlySelf) { };
    /**
     * \@internal
     * @abstract
     * @return {?}
     */
    FormProperty.prototype._hasValue = function () { };
    /**
     *  \@internal
     * @abstract
     * @return {?}
     */
    FormProperty.prototype._updateValue = function () { };
}
/**
 * @abstract
 */
var /**
 * @abstract
 */
PropertyGroup = /** @class */ (function (_super) {
    tslib_1.__extends(PropertyGroup, _super);
    function PropertyGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = null;
        return _this;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    PropertyGroup.prototype.getProperty = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        var /** @type {?} */ subPathIdx = path.indexOf('/');
        var /** @type {?} */ propertyId = subPathIdx !== -1 ? path.substr(0, subPathIdx) : path;
        var /** @type {?} */ property = this.properties[propertyId];
        if (property !== null && subPathIdx !== -1 && property instanceof PropertyGroup) {
            var /** @type {?} */ subPath = path.substr(subPathIdx + 1);
            property = (/** @type {?} */ (property)).getProperty(subPath);
        }
        return property;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    PropertyGroup.prototype.forEachChild = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        for (var /** @type {?} */ propertyId in this.properties) {
            if (this.properties.hasOwnProperty(propertyId)) {
                var /** @type {?} */ property = this.properties[propertyId];
                fn(property, propertyId);
            }
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    PropertyGroup.prototype.forEachChildRecursive = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.forEachChild(function (child) {
            fn(child);
            if (child instanceof PropertyGroup) {
                (/** @type {?} */ (child)).forEachChildRecursive(fn);
            }
        });
    };
    /**
     * @return {?}
     */
    PropertyGroup.prototype._bindVisibility = /**
     * @return {?}
     */
    function () {
        _super.prototype._bindVisibility.call(this);
        this._bindVisibilityRecursive();
    };
    /**
     * @return {?}
     */
    PropertyGroup.prototype._bindVisibilityRecursive = /**
     * @return {?}
     */
    function () {
        this.forEachChildRecursive(function (property) {
            property._bindVisibility();
        });
    };
    /**
     * @return {?}
     */
    PropertyGroup.prototype.isRoot = /**
     * @return {?}
     */
    function () {
        return this === this.root;
    };
    return PropertyGroup;
}(FormProperty));
/**
 * @abstract
 */
export { PropertyGroup };
function PropertyGroup_tsickle_Closure_declarations() {
    /** @type {?} */
    PropertyGroup.prototype.properties;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXByb3BlcnR5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNjaGVtYS1mb3JtLyIsInNvdXJjZXMiOlsibGliL21vZGVsL2Zvcm1wcm9wZXJ0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBYSxlQUFlLEVBQUUsYUFBYSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxHQUFHLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUszRDs7O0FBQUE7SUFhRSxzQkFBWSxzQkFBOEMsRUFDdEMsbUJBQ0QsUUFDUCxNQUFxQixFQUNyQixJQUFZO1FBSEosc0JBQWlCLEdBQWpCLGlCQUFpQjtRQUNsQixXQUFNLEdBQU4sTUFBTTtzQkFaWCxJQUFJO3VCQUNILElBQUk7NkJBQ0ssSUFBSSxlQUFlLENBQU0sSUFBSSxDQUFDOzhCQUM3QixJQUFJLGVBQWUsQ0FBTSxJQUFJLENBQUM7d0JBQ3BDLElBQUk7a0NBQ00sSUFBSSxlQUFlLENBQVUsSUFBSSxDQUFDO1FBVTdELElBQUksQ0FBQyxlQUFlLEdBQUcsc0JBQXNCLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTdFLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDWCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDMUI7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxZQUFZLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLEtBQUsscUJBQUcsa0JBQW9CLElBQUksQ0FBQSxDQUFBLENBQUM7U0FDdkM7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztLQUNuQjswQkFFVSxzQ0FBWTs7Ozs7WUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFh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Qy9DLHFCQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUMzQyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2FBQzFCO1NBQ0Y7Ozs7OztJQUdJLDZDQUFxQjs7OztjQUFDLEVBQXdDO1FBQ25FLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBQyxLQUFLO1lBQ3RCLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNWLEVBQUUsQ0FBQyxDQUFDLEtBQUssWUFBWSxhQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxtQkFBZ0IsS0FBSyxFQUFDLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDbEQ7U0FDRixDQUFDLENBQUM7Ozs7O0lBR0UsdUNBQWU7Ozs7UUFDcEIsaUJBQU0sZUFBZSxXQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7Ozs7O0lBRzFCLGdEQUF3Qjs7OztRQUM5QixJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBQyxRQUFRO1lBQ2xDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUM1QixDQUFDLENBQUM7Ozs7O0lBR0UsOEJBQU07Ozs7UUFDWCxNQUFNLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUM7O3dCQWxROUI7RUFvTjRDLFlBQVksRUFnRHZELENBQUE7Ozs7QUFoREQseUJBZ0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QsIGNvbWJpbmVMYXRlc3R9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtTY2hlbWFWYWxpZGF0b3JGYWN0b3J5fSBmcm9tICcuLi9zY2hlbWF2YWxpZGF0b3JmYWN0b3J5JztcbmltcG9ydCB7VmFsaWRhdG9yUmVnaXN0cnl9IGZyb20gJy4vdmFsaWRhdG9ycmVnaXN0cnknO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRm9ybVByb3BlcnR5IHtcbiAgcHVibGljIHNjaGVtYVZhbGlkYXRvcjogRnVuY3Rpb247XG5cbiAgX3ZhbHVlOiBhbnkgPSBudWxsO1xuICBfZXJyb3JzOiBhbnkgPSBudWxsO1xuICBwcml2YXRlIF92YWx1ZUNoYW5nZXMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4obnVsbCk7XG4gIHByaXZhdGUgX2Vycm9yc0NoYW5nZXMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4obnVsbCk7XG4gIHByaXZhdGUgX3Zpc2libGUgPSB0cnVlO1xuICBwcml2YXRlIF92aXNpYmlsaXR5Q2hhbmdlcyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4odHJ1ZSk7XG4gIHByaXZhdGUgX3Jvb3Q6IFByb3BlcnR5R3JvdXA7XG4gIHByaXZhdGUgX3BhcmVudDogUHJvcGVydHlHcm91cDtcbiAgcHJpdmF0ZSBfcGF0aDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHNjaGVtYVZhbGlkYXRvckZhY3Rvcnk6IFNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gICAgICAgICAgICAgIHByaXZhdGUgdmFsaWRhdG9yUmVnaXN0cnk6IFZhbGlkYXRvclJlZ2lzdHJ5LFxuICAgICAgICAgICAgICBwdWJsaWMgc2NoZW1hOiBhbnksXG4gICAgICAgICAgICAgIHBhcmVudDogUHJvcGVydHlHcm91cCxcbiAgICAgICAgICAgICAgcGF0aDogc3RyaW5nKSB7XG4gICAgdGhpcy5zY2hlbWFWYWxpZGF0b3IgPSBzY2hlbWFWYWxpZGF0b3JGYWN0b3J5LmNyZWF0ZVZhbGlkYXRvckZuKHRoaXMuc2NoZW1hKTtcblxuICAgIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcbiAgICBpZiAocGFyZW50KSB7XG4gICAgICB0aGlzLl9yb290ID0gcGFyZW50LnJvb3Q7XG4gICAgfSBlbHNlIGlmICh0aGlzIGluc3RhbmNlb2YgUHJvcGVydHlHcm91cCkge1xuICAgICAgdGhpcy5fcm9vdCA9IDxQcm9wZXJ0eUdyb3VwPjxhbnk+dGhpcztcbiAgICB9XG4gICAgdGhpcy5fcGF0aCA9IHBhdGg7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHZhbHVlQ2hhbmdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWVDaGFuZ2VzO1xuICB9XG5cbiAgcHVibGljIGdldCBlcnJvcnNDaGFuZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLl9lcnJvcnNDaGFuZ2VzO1xuICB9XG5cbiAgcHVibGljIGdldCB0eXBlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLnR5cGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHBhcmVudCgpOiBQcm9wZXJ0eUdyb3VwIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICB9XG5cbiAgcHVibGljIGdldCByb290KCk6IFByb3BlcnR5R3JvdXAge1xuICAgIHJldHVybiB0aGlzLl9yb290IHx8IDxQcm9wZXJ0eUdyb3VwPjxhbnk+dGhpcztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9wYXRoO1xuICB9XG5cbiAgcHVibGljIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHZpc2libGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Zpc2libGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHZhbGlkKCkge1xuICAgIHJldHVybiB0aGlzLl9lcnJvcnMgPT09IG51bGw7XG4gIH1cblxuICBwdWJsaWMgYWJzdHJhY3Qgc2V0VmFsdWUodmFsdWU6IGFueSwgb25seVNlbGY6IGJvb2xlYW4pO1xuXG4gIHB1YmxpYyBhYnN0cmFjdCByZXNldCh2YWx1ZTogYW55LCBvbmx5U2VsZjogYm9vbGVhbik7XG5cbiAgcHVibGljIHVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob25seVNlbGYgPSBmYWxzZSwgZW1pdEV2ZW50ID0gdHJ1ZSkge1xuICAgIHRoaXMuX3VwZGF0ZVZhbHVlKCk7XG5cbiAgICBpZiAoZW1pdEV2ZW50KSB7XG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlcy5uZXh0KHRoaXMudmFsdWUpO1xuICAgIH1cblxuICAgIHRoaXMuX3J1blZhbGlkYXRpb24oKTtcblxuICAgIGlmICh0aGlzLnBhcmVudCAmJiAhb25seVNlbGYpIHtcbiAgICAgIHRoaXMucGFyZW50LnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob25seVNlbGYsIGVtaXRFdmVudCk7XG4gICAgfVxuXG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3QgX2hhc1ZhbHVlKCk6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqICBAaW50ZXJuYWxcbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCBfdXBkYXRlVmFsdWUoKTtcblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBwdWJsaWMgX3J1blZhbGlkYXRpb24oKTogYW55IHtcbiAgICBsZXQgZXJyb3JzID0gdGhpcy5zY2hlbWFWYWxpZGF0b3IodGhpcy5fdmFsdWUpIHx8IFtdO1xuICAgIGxldCBjdXN0b21WYWxpZGF0b3IgPSB0aGlzLnZhbGlkYXRvclJlZ2lzdHJ5LmdldCh0aGlzLnBhdGgpO1xuICAgIGlmIChjdXN0b21WYWxpZGF0b3IpIHtcbiAgICAgIGxldCBjdXN0b21FcnJvcnMgPSBjdXN0b21WYWxpZGF0b3IodGhpcy52YWx1ZSwgdGhpcywgdGhpcy5maW5kUm9vdCgpKTtcbiAgICAgIGVycm9ycyA9IHRoaXMubWVyZ2VFcnJvcnMoZXJyb3JzLCBjdXN0b21FcnJvcnMpO1xuICAgIH1cbiAgICBpZiAoZXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZXJyb3JzID0gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLl9lcnJvcnMgPSBlcnJvcnM7XG4gICAgdGhpcy5zZXRFcnJvcnModGhpcy5fZXJyb3JzKTtcbiAgfVxuXG4gIHByaXZhdGUgbWVyZ2VFcnJvcnMoZXJyb3JzLCBuZXdFcnJvcnMpIHtcbiAgICBpZiAobmV3RXJyb3JzKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShuZXdFcnJvcnMpKSB7XG4gICAgICAgIGVycm9ycyA9IGVycm9ycy5jb25jYXQoLi4ubmV3RXJyb3JzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9ycy5wdXNoKG5ld0Vycm9ycyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlcnJvcnM7XG4gIH1cblxuICBwcml2YXRlIHNldEVycm9ycyhlcnJvcnMpIHtcbiAgICB0aGlzLl9lcnJvcnMgPSBlcnJvcnM7XG4gICAgdGhpcy5fZXJyb3JzQ2hhbmdlcy5uZXh0KGVycm9ycyk7XG4gIH1cblxuICBwdWJsaWMgZXh0ZW5kRXJyb3JzKGVycm9ycykge1xuICAgIGVycm9ycyA9IHRoaXMubWVyZ2VFcnJvcnModGhpcy5fZXJyb3JzIHx8IFtdLCBlcnJvcnMpO1xuICAgIHRoaXMuc2V0RXJyb3JzKGVycm9ycyk7XG4gIH1cblxuICBzZWFyY2hQcm9wZXJ0eShwYXRoOiBzdHJpbmcpOiBGb3JtUHJvcGVydHkge1xuICAgIGxldCBwcm9wOiBGb3JtUHJvcGVydHkgPSB0aGlzO1xuICAgIGxldCBiYXNlOiBQcm9wZXJ0eUdyb3VwID0gbnVsbDtcblxuICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgIGlmIChwYXRoWzBdID09PSAnLycpIHtcbiAgICAgIGJhc2UgPSB0aGlzLmZpbmRSb290KCk7XG4gICAgICByZXN1bHQgPSBiYXNlLmdldFByb3BlcnR5KHBhdGguc3Vic3RyKDEpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2hpbGUgKHJlc3VsdCA9PT0gbnVsbCAmJiBwcm9wLnBhcmVudCAhPT0gbnVsbCkge1xuICAgICAgICBwcm9wID0gYmFzZSA9IHByb3AucGFyZW50O1xuICAgICAgICByZXN1bHQgPSBiYXNlLmdldFByb3BlcnR5KHBhdGgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHVibGljIGZpbmRSb290KCk6IFByb3BlcnR5R3JvdXAge1xuICAgIGxldCBwcm9wZXJ0eTogRm9ybVByb3BlcnR5ID0gdGhpcztcbiAgICB3aGlsZSAocHJvcGVydHkucGFyZW50ICE9PSBudWxsKSB7XG4gICAgICBwcm9wZXJ0eSA9IHByb3BlcnR5LnBhcmVudDtcbiAgICB9XG4gICAgcmV0dXJuIDxQcm9wZXJ0eUdyb3VwPnByb3BlcnR5O1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl92aXNpYmxlID0gdmlzaWJsZTtcbiAgICB0aGlzLl92aXNpYmlsaXR5Q2hhbmdlcy5uZXh0KHZpc2libGUpO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgdGhpcy5wYXJlbnQudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShmYWxzZSwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gQSBmaWVsZCBpcyB2aXNpYmxlIGlmIEFUIExFQVNUIE9ORSBvZiB0aGUgcHJvcGVydGllcyBpdCBkZXBlbmRzIG9uIGlzIHZpc2libGUgQU5EIGhhcyBhIHZhbHVlIGluIHRoZSBsaXN0XG4gIHB1YmxpYyBfYmluZFZpc2liaWxpdHkoKSB7XG4gICAgbGV0IHZpc2libGVJZiA9IHRoaXMuc2NoZW1hLnZpc2libGVJZjtcbiAgICBpZiAodHlwZW9mIHZpc2libGVJZiA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXModmlzaWJsZUlmKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHZpc2libGVJZiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBsZXQgcHJvcGVydGllc0JpbmRpbmcgPSBbXTtcbiAgICAgIGZvciAobGV0IGRlcGVuZGVuY3lQYXRoIGluIHZpc2libGVJZikge1xuICAgICAgICBpZiAodmlzaWJsZUlmLmhhc093blByb3BlcnR5KGRlcGVuZGVuY3lQYXRoKSkge1xuICAgICAgICAgIGxldCBwcm9wZXJ0eSA9IHRoaXMuc2VhcmNoUHJvcGVydHkoZGVwZW5kZW5jeVBhdGgpO1xuICAgICAgICAgIGlmIChwcm9wZXJ0eSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWVDaGVjayA9IHByb3BlcnR5LnZhbHVlQ2hhbmdlcy5waXBlKG1hcChcbiAgICAgICAgICAgICAgdmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh2aXNpYmxlSWZbZGVwZW5kZW5jeVBhdGhdLmluZGV4T2YoJyRBTlkkJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID4gMDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHZpc2libGVJZltkZXBlbmRlbmN5UGF0aF0uaW5kZXhPZih2YWx1ZSkgIT09IC0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKSk7XG4gICAgICAgICAgICBjb25zdCB2aXNpYmlsaXR5Q2hlY2sgPSBwcm9wZXJ0eS5fdmlzaWJpbGl0eUNoYW5nZXM7XG4gICAgICAgICAgICBjb25zdCBhbmQgPSBjb21iaW5lTGF0ZXN0KFt2YWx1ZUNoZWNrLCB2aXNpYmlsaXR5Q2hlY2tdLCAodjEsIHYyKSA9PiB2MSAmJiB2Mik7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzQmluZGluZy5wdXNoKGFuZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignQ2FuXFwndCBmaW5kIHByb3BlcnR5ICcgKyBkZXBlbmRlbmN5UGF0aCArICcgZm9yIHZpc2liaWxpdHkgY2hlY2sgb2YgJyArIHRoaXMucGF0aCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbWJpbmVMYXRlc3QocHJvcGVydGllc0JpbmRpbmcsICguLi52YWx1ZXM6IGJvb2xlYW5bXSkgPT4ge1xuICAgICAgICByZXR1cm4gdmFsdWVzLmluZGV4T2YodHJ1ZSkgIT09IC0xO1xuICAgICAgfSkucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKS5zdWJzY3JpYmUoKHZpc2libGUpID0+IHtcbiAgICAgICAgdGhpcy5zZXRWaXNpYmxlKHZpc2libGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQcm9wZXJ0eUdyb3VwIGV4dGVuZHMgRm9ybVByb3BlcnR5IHtcblxuICBwcm9wZXJ0aWVzOiBGb3JtUHJvcGVydHlbXSB8IHsgW2tleTogc3RyaW5nXTogRm9ybVByb3BlcnR5IH0gPSBudWxsO1xuXG4gIGdldFByb3BlcnR5KHBhdGg6IHN0cmluZykge1xuICAgIGxldCBzdWJQYXRoSWR4ID0gcGF0aC5pbmRleE9mKCcvJyk7XG4gICAgbGV0IHByb3BlcnR5SWQgPSBzdWJQYXRoSWR4ICE9PSAtMSA/IHBhdGguc3Vic3RyKDAsIHN1YlBhdGhJZHgpIDogcGF0aDtcblxuICAgIGxldCBwcm9wZXJ0eSA9IHRoaXMucHJvcGVydGllc1twcm9wZXJ0eUlkXTtcbiAgICBpZiAocHJvcGVydHkgIT09IG51bGwgJiYgc3ViUGF0aElkeCAhPT0gLTEgJiYgcHJvcGVydHkgaW5zdGFuY2VvZiBQcm9wZXJ0eUdyb3VwKSB7XG4gICAgICBsZXQgc3ViUGF0aCA9IHBhdGguc3Vic3RyKHN1YlBhdGhJZHggKyAxKTtcbiAgICAgIHByb3BlcnR5ID0gKDxQcm9wZXJ0eUdyb3VwPnByb3BlcnR5KS5nZXRQcm9wZXJ0eShzdWJQYXRoKTtcbiAgICB9XG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9XG5cbiAgcHVibGljIGZvckVhY2hDaGlsZChmbjogKGZvcm1Qcm9wZXJ0eTogRm9ybVByb3BlcnR5LCBzdHI6IFN0cmluZykgPT4gdm9pZCkge1xuICAgIGZvciAobGV0IHByb3BlcnR5SWQgaW4gdGhpcy5wcm9wZXJ0aWVzKSB7XG4gICAgICBpZiAodGhpcy5wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KHByb3BlcnR5SWQpKSB7XG4gICAgICAgIGxldCBwcm9wZXJ0eSA9IHRoaXMucHJvcGVydGllc1twcm9wZXJ0eUlkXTtcbiAgICAgICAgZm4ocHJvcGVydHksIHByb3BlcnR5SWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBmb3JFYWNoQ2hpbGRSZWN1cnNpdmUoZm46IChmb3JtUHJvcGVydHk6IEZvcm1Qcm9wZXJ0eSkgPT4gdm9pZCkge1xuICAgIHRoaXMuZm9yRWFjaENoaWxkKChjaGlsZCkgPT4ge1xuICAgICAgZm4oY2hpbGQpO1xuICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgUHJvcGVydHlHcm91cCkge1xuICAgICAgICAoPFByb3BlcnR5R3JvdXA+Y2hpbGQpLmZvckVhY2hDaGlsZFJlY3Vyc2l2ZShmbik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgX2JpbmRWaXNpYmlsaXR5KCkge1xuICAgIHN1cGVyLl9iaW5kVmlzaWJpbGl0eSgpO1xuICAgIHRoaXMuX2JpbmRWaXNpYmlsaXR5UmVjdXJzaXZlKCk7XG4gIH1cblxuICBwcml2YXRlIF9iaW5kVmlzaWJpbGl0eVJlY3Vyc2l2ZSgpIHtcbiAgICB0aGlzLmZvckVhY2hDaGlsZFJlY3Vyc2l2ZSgocHJvcGVydHkpID0+IHtcbiAgICAgIHByb3BlcnR5Ll9iaW5kVmlzaWJpbGl0eSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGlzUm9vdCgpIHtcbiAgICByZXR1cm4gdGhpcyA9PT0gdGhpcy5yb290O1xuICB9XG59XG5cblxuIl19