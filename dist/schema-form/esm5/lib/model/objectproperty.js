/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { PropertyGroup } from './formproperty';
var ObjectProperty = /** @class */ (function (_super) {
    tslib_1.__extends(ObjectProperty, _super);
    function ObjectProperty(formPropertyFactory, schemaValidatorFactory, validatorRegistry, schema, parent, path) {
        var _this = _super.call(this, schemaValidatorFactory, validatorRegistry, schema, parent, path) || this;
        _this.formPropertyFactory = formPropertyFactory;
        _this.propertiesId = [];
        _this.createProperties();
        return _this;
    }
    /**
     * @param {?} value
     * @param {?} onlySelf
     * @return {?}
     */
    ObjectProperty.prototype.setValue = /**
     * @param {?} value
     * @param {?} onlySelf
     * @return {?}
     */
    function (value, onlySelf) {
        for (var /** @type {?} */ propertyId in value) {
            if (value.hasOwnProperty(propertyId)) {
                this.properties[propertyId].setValue(value[propertyId], true);
            }
        }
        this.updateValueAndValidity(onlySelf, true);
    };
    /**
     * @param {?} value
     * @param {?=} onlySelf
     * @return {?}
     */
    ObjectProperty.prototype.reset = /**
     * @param {?} value
     * @param {?=} onlySelf
     * @return {?}
     */
    function (value, onlySelf) {
        if (onlySelf === void 0) { onlySelf = true; }
        value = value || this.schema.default || {};
        this.resetProperties(value);
        this.updateValueAndValidity(onlySelf, true);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ObjectProperty.prototype.resetProperties = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        for (var /** @type {?} */ propertyId in this.schema.properties) {
            if (this.schema.properties.hasOwnProperty(propertyId)) {
                this.properties[propertyId].reset(value[propertyId], true);
            }
        }
    };
    /**
     * @return {?}
     */
    ObjectProperty.prototype.createProperties = /**
     * @return {?}
     */
    function () {
        this.properties = {};
        this.propertiesId = [];
        for (var /** @type {?} */ propertyId in this.schema.properties) {
            if (this.schema.properties.hasOwnProperty(propertyId)) {
                var /** @type {?} */ propertySchema = this.schema.properties[propertyId];
                this.properties[propertyId] = this.formPropertyFactory.createProperty(propertySchema, this, propertyId);
                this.propertiesId.push(propertyId);
            }
        }
    };
    /**
     * @return {?}
     */
    ObjectProperty.prototype._hasValue = /**
     * @return {?}
     */
    function () {
        return !!Object.keys(this.value).length;
    };
    /**
     * @return {?}
     */
    ObjectProperty.prototype._updateValue = /**
     * @return {?}
     */
    function () {
        this.reduceValue();
    };
    /**
     * @return {?}
     */
    ObjectProperty.prototype._runValidation = /**
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype._runValidation.call(this);
        if (this._errors) {
            this._errors.forEach(function (error) {
                var /** @type {?} */ prop = _this.searchProperty(error.path.slice(1));
                if (prop) {
                    prop.extendErrors(error);
                }
            });
        }
    };
    /**
     * @return {?}
     */
    ObjectProperty.prototype.reduceValue = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ value = {};
        this.forEachChild(function (property, propertyId) {
            if (property.visible && property._hasValue()) {
                value[propertyId] = property.value;
            }
        });
        this._value = value;
    };
    return ObjectProperty;
}(PropertyGroup));
export { ObjectProperty };
function ObjectProperty_tsickle_Closure_declarations() {
    /** @type {?} */
    ObjectProperty.prototype.propertiesId;
    /** @type {?} */
    ObjectProperty.prototype.formPropertyFactory;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0cHJvcGVydHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vIiwic291cmNlcyI6WyJsaWIvbW9kZWwvb2JqZWN0cHJvcGVydHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFLN0MsSUFBQTtJQUFvQywwQ0FBYTtJQUkvQyx3QkFBb0IsbUJBQXdDLEVBQ2hELHNCQUE4QyxFQUM5QyxpQkFBb0MsRUFDcEMsTUFBVyxFQUNYLE1BQXFCLEVBQ3JCLElBQVk7UUFMeEIsWUFNRSxrQkFBTSxzQkFBc0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUV2RTtRQVJtQix5QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCOzZCQUYzQixFQUFFO1FBU2pDLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDOztLQUN6Qjs7Ozs7O0lBRUQsaUNBQVE7Ozs7O0lBQVIsVUFBUyxLQUFVLEVBQUUsUUFBaUI7UUFDcEMsR0FBRyxDQUFDLENBQUMscUJBQU0sVUFBVSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDL0IsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUMvRDtTQUNGO1FBQ0QsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUM3Qzs7Ozs7O0lBRUQsOEJBQUs7Ozs7O0lBQUwsVUFBTSxLQUFVLEVBQUUsUUFBZTtRQUFmLHlCQUFBLEVBQUEsZUFBZTtRQUMvQixLQUFLLEdBQUcsS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJ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cnR5JztcbmltcG9ydCB7Rm9ybVByb3BlcnR5RmFjdG9yeX0gZnJvbSAnLi9mb3JtcHJvcGVydHlmYWN0b3J5JztcbmltcG9ydCB7U2NoZW1hVmFsaWRhdG9yRmFjdG9yeX0gZnJvbSAnLi4vc2NoZW1hdmFsaWRhdG9yZmFjdG9yeSc7XG5pbXBvcnQge1ZhbGlkYXRvclJlZ2lzdHJ5fSBmcm9tICcuL3ZhbGlkYXRvcnJlZ2lzdHJ5JztcblxuZXhwb3J0IGNsYXNzIE9iamVjdFByb3BlcnR5IGV4dGVuZHMgUHJvcGVydHlHcm91cCB7XG5cbiAgcHJpdmF0ZSBwcm9wZXJ0aWVzSWQ6IHN0cmluZ1tdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtUHJvcGVydHlGYWN0b3J5OiBGb3JtUHJvcGVydHlGYWN0b3J5LFxuICAgICAgICAgICAgICBzY2hlbWFWYWxpZGF0b3JGYWN0b3J5OiBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxuICAgICAgICAgICAgICB2YWxpZGF0b3JSZWdpc3RyeTogVmFsaWRhdG9yUmVnaXN0cnksXG4gICAgICAgICAgICAgIHNjaGVtYTogYW55LFxuICAgICAgICAgICAgICBwYXJlbnQ6IFByb3BlcnR5R3JvdXAsXG4gICAgICAgICAgICAgIHBhdGg6IHN0cmluZykge1xuICAgIHN1cGVyKHNjaGVtYVZhbGlkYXRvckZhY3RvcnksIHZhbGlkYXRvclJlZ2lzdHJ5LCBzY2hlbWEsIHBhcmVudCwgcGF0aCk7XG4gICAgdGhpcy5jcmVhdGVQcm9wZXJ0aWVzKCk7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogYW55LCBvbmx5U2VsZjogYm9vbGVhbikge1xuICAgIGZvciAoY29uc3QgcHJvcGVydHlJZCBpbiB2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlLmhhc093blByb3BlcnR5KHByb3BlcnR5SWQpKSB7XG4gICAgICAgIHRoaXMucHJvcGVydGllc1twcm9wZXJ0eUlkXS5zZXRWYWx1ZSh2YWx1ZVtwcm9wZXJ0eUlkXSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvbmx5U2VsZiwgdHJ1ZSk7XG4gIH1cblxuICByZXNldCh2YWx1ZTogYW55LCBvbmx5U2VsZiA9IHRydWUpIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHRoaXMuc2NoZW1hLmRlZmF1bHQgfHwge307XG4gICAgdGhpcy5yZXNldFByb3BlcnRpZXModmFsdWUpO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvbmx5U2VsZiwgdHJ1ZSk7XG4gIH1cblxuICByZXNldFByb3BlcnRpZXModmFsdWU6IGFueSkge1xuICAgIGZvciAoY29uc3QgcHJvcGVydHlJZCBpbiB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKSB7XG4gICAgICBpZiAodGhpcy5zY2hlbWEucHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eUlkKSkge1xuICAgICAgICB0aGlzLnByb3BlcnRpZXNbcHJvcGVydHlJZF0ucmVzZXQodmFsdWVbcHJvcGVydHlJZF0sIHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZVByb3BlcnRpZXMoKSB7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0ge307XG4gICAgdGhpcy5wcm9wZXJ0aWVzSWQgPSBbXTtcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5SWQgaW4gdGhpcy5zY2hlbWEucHJvcGVydGllcykge1xuICAgICAgaWYgKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkocHJvcGVydHlJZCkpIHtcbiAgICAgICAgY29uc3QgcHJvcGVydHlTY2hlbWEgPSB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BlcnR5SWRdO1xuICAgICAgICB0aGlzLnByb3BlcnRpZXNbcHJvcGVydHlJZF0gPSB0aGlzLmZvcm1Qcm9wZXJ0eUZhY3RvcnkuY3JlYXRlUHJvcGVydHkocHJvcGVydHlTY2hlbWEsIHRoaXMsIHByb3BlcnR5SWQpO1xuICAgICAgICB0aGlzLnByb3BlcnRpZXNJZC5wdXNoKHByb3BlcnR5SWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBfaGFzVmFsdWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhT2JqZWN0LmtleXModGhpcy52YWx1ZSkubGVuZ3RoO1xuICB9XG5cbiAgcHVibGljIF91cGRhdGVWYWx1ZSgpIHtcbiAgICB0aGlzLnJlZHVjZVZhbHVlKCk7XG4gIH1cblxuICBwdWJsaWMgX3J1blZhbGlkYXRpb24oKSB7XG4gICAgc3VwZXIuX3J1blZhbGlkYXRpb24oKTtcblxuICAgIGlmICh0aGlzLl9lcnJvcnMpIHtcbiAgICAgIHRoaXMuX2Vycm9ycy5mb3JFYWNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc3QgcHJvcCA9IHRoaXMuc2VhcmNoUHJvcGVydHkoZXJyb3IucGF0aC5zbGljZSgxKSk7XG4gICAgICAgIGlmIChwcm9wKSB7XG4gICAgICAgICAgcHJvcC5leHRlbmRFcnJvcnMoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlZHVjZVZhbHVlKCk6IHZvaWQge1xuICAgIGNvbnN0IHZhbHVlID0ge307XG4gICAgdGhpcy5mb3JFYWNoQ2hpbGQoKHByb3BlcnR5LCBwcm9wZXJ0eUlkOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9wZXJ0eS52aXNpYmxlICYmIHByb3BlcnR5Ll9oYXNWYWx1ZSgpKSB7XG4gICAgICAgIHZhbHVlW3Byb3BlcnR5SWRdID0gcHJvcGVydHkudmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxufVxuIl19