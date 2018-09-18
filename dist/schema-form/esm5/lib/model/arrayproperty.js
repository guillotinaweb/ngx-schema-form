/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { PropertyGroup } from './formproperty';
var ArrayProperty = /** @class */ (function (_super) {
    tslib_1.__extends(ArrayProperty, _super);
    function ArrayProperty(formPropertyFactory, schemaValidatorFactory, validatorRegistry, schema, parent, path) {
        var _this = _super.call(this, schemaValidatorFactory, validatorRegistry, schema, parent, path) || this;
        _this.formPropertyFactory = formPropertyFactory;
        return _this;
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    ArrayProperty.prototype.addItem = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = null; }
        var /** @type {?} */ newProperty = this.addProperty();
        newProperty.reset(value, false);
        return newProperty;
    };
    /**
     * @return {?}
     */
    ArrayProperty.prototype.addProperty = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ newProperty = this.formPropertyFactory.createProperty(this.schema.items, this);
        (/** @type {?} */ (this.properties)).push(newProperty);
        return newProperty;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    ArrayProperty.prototype.removeItem = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        (/** @type {?} */ (this.properties)).splice(index, 1);
        this.updateValueAndValidity(false, true);
    };
    /**
     * @param {?} value
     * @param {?} onlySelf
     * @return {?}
     */
    ArrayProperty.prototype.setValue = /**
     * @param {?} value
     * @param {?} onlySelf
     * @return {?}
     */
    function (value, onlySelf) {
        this.createProperties();
        this.resetProperties(value);
        this.updateValueAndValidity(onlySelf, true);
    };
    /**
     * @return {?}
     */
    ArrayProperty.prototype._hasValue = /**
     * @return {?}
     */
    function () {
        return true;
    };
    /**
     * @return {?}
     */
    ArrayProperty.prototype._updateValue = /**
     * @return {?}
     */
    function () {
        this.reduceValue();
    };
    /**
     * @return {?}
     */
    ArrayProperty.prototype.reduceValue = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ value = [];
        this.forEachChild(function (property, _) {
            if (property.visible && property._hasValue()) {
                value.push(property.value);
            }
        });
        this._value = value;
    };
    /**
     * @param {?} value
     * @param {?=} onlySelf
     * @return {?}
     */
    ArrayProperty.prototype.reset = /**
     * @param {?} value
     * @param {?=} onlySelf
     * @return {?}
     */
    function (value, onlySelf) {
        if (onlySelf === void 0) { onlySelf = true; }
        value = value || this.schema.default || [];
        this.properties = [];
        this.resetProperties(value);
        this.updateValueAndValidity(onlySelf, true);
    };
    /**
     * @return {?}
     */
    ArrayProperty.prototype.createProperties = /**
     * @return {?}
     */
    function () {
        this.properties = [];
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ArrayProperty.prototype.resetProperties = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        for (var /** @type {?} */ idx in value) {
            if (value.hasOwnProperty(idx)) {
                var /** @type {?} */ property = this.addProperty();
                property.reset(value[idx], true);
            }
        }
    };
    return ArrayProperty;
}(PropertyGroup));
export { ArrayProperty };
function ArrayProperty_tsickle_Closure_declarations() {
    /** @type {?} */
    ArrayProperty.prototype.formPropertyFactory;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXlwcm9wZXJ0eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zY2hlbWEtZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbC9hcnJheXByb3BlcnR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFlLGFBQWEsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBSzNELElBQUE7SUFBbUMseUNBQWE7SUFFOUMsdUJBQW9CLG1CQUF3QyxFQUNoRCxzQkFBOEMsRUFDOUMsaUJBQW9DLEVBQ3BDLE1BQVcsRUFDWCxNQUFxQixFQUNyQixJQUFZO1FBTHhCLFlBTUUsa0JBQU0sc0JBQXNCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FDdkU7UUFQbUIseUJBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjs7S0FPM0Q7Ozs7O0lBRUQsK0JBQU87Ozs7SUFBUCxVQUFRLEtBQWlCO1FBQWpCLHNCQUFBLEVBQUEsWUFBaUI7UUFDdkIscUJBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQyxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNoQyxNQUFNLENBQUMsV0FBVyxDQUFDO0tBQ3BCOzs7O0lBRU8sbUNBQVc7Ozs7UUFDakIscUJBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkYsbUJBQWlCLElBQUksQ0FBQyxVQUFVLEVBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDcEQsTUFBTSxDQUFDLFdBQVcsQ0FBQzs7Ozs7O0lBR3JCLGtDQUFVOzs7O0lBQVYsVUFBVyxLQUFhO1FBQ3RCLG1CQUFpQixJQUFJLENBQUMsVUFBVSxFQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQzFDOzs7Ozs7SUFFRCxnQ0FBUTs7Ozs7SUFBUixVQUFTLEtBQVUsRUFBRSxRQUFpQjtRQUNwQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDN0M7Ozs7SUFFTSxpQ0FBUzs7OztRQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUM7Ozs7O0lBR1Asb0NBQVk7Ozs7UUFDakIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDOzs7OztJQUdiLG1DQUFXOzs7O1FBQ2pCLHFCQUFNLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzVCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDN0MsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDNUI7U0FDRixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzs7Ozs7OztJQUd0Qiw2QkFBSzs7Ozs7SUFBTCxVQUFNLEtBQVUsRUFBRSxRQUFlO1FBQWYseUJBQUEsRUFBQSxlQUFlO1FBQy9CLEtBQUssR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUM3Qzs7OztJQUVPLHdDQUFnQjs7OztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQzs7Ozs7O0lBSWYsdUNBQWU7Ozs7Y0FBQyxLQUFVO1FBQ2hDLEdBQUcsQ0FBQyxDQUFDLHFCQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixxQkFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNsQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUNsQztTQUNGOzt3QkEzRUw7RUFLbUMsYUFBYSxFQXdFL0MsQ0FBQTtBQXhFRCx5QkF3RUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Zvcm1Qcm9wZXJ0eSwgUHJvcGVydHlHcm91cH0gZnJvbSAnLi9mb3JtcHJvcGVydHknO1xuaW1wb3J0IHtGb3JtUHJvcGVydHlGYWN0b3J5fSBmcm9tICcuL2Zvcm1wcm9wZXJ0eWZhY3RvcnknO1xuaW1wb3J0IHtTY2hlbWFWYWxpZGF0b3JGYWN0b3J5fSBmcm9tICcuLi9zY2hlbWF2YWxpZGF0b3JmYWN0b3J5JztcbmltcG9ydCB7VmFsaWRhdG9yUmVnaXN0cnl9IGZyb20gJy4vdmFsaWRhdG9ycmVnaXN0cnknO1xuXG5leHBvcnQgY2xhc3MgQXJyYXlQcm9wZXJ0eSBleHRlbmRzIFByb3BlcnR5R3JvdXAge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybVByb3BlcnR5RmFjdG9yeTogRm9ybVByb3BlcnR5RmFjdG9yeSxcbiAgICAgICAgICAgICAgc2NoZW1hVmFsaWRhdG9yRmFjdG9yeTogU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgICAgICAgICAgICAgdmFsaWRhdG9yUmVnaXN0cnk6IFZhbGlkYXRvclJlZ2lzdHJ5LFxuICAgICAgICAgICAgICBzY2hlbWE6IGFueSxcbiAgICAgICAgICAgICAgcGFyZW50OiBQcm9wZXJ0eUdyb3VwLFxuICAgICAgICAgICAgICBwYXRoOiBzdHJpbmcpIHtcbiAgICBzdXBlcihzY2hlbWFWYWxpZGF0b3JGYWN0b3J5LCB2YWxpZGF0b3JSZWdpc3RyeSwgc2NoZW1hLCBwYXJlbnQsIHBhdGgpO1xuICB9XG5cbiAgYWRkSXRlbSh2YWx1ZTogYW55ID0gbnVsbCk6IEZvcm1Qcm9wZXJ0eSB7XG4gICAgbGV0IG5ld1Byb3BlcnR5ID0gdGhpcy5hZGRQcm9wZXJ0eSgpO1xuICAgIG5ld1Byb3BlcnR5LnJlc2V0KHZhbHVlLCBmYWxzZSk7XG4gICAgcmV0dXJuIG5ld1Byb3BlcnR5O1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRQcm9wZXJ0eSgpIHtcbiAgICBsZXQgbmV3UHJvcGVydHkgPSB0aGlzLmZvcm1Qcm9wZXJ0eUZhY3RvcnkuY3JlYXRlUHJvcGVydHkodGhpcy5zY2hlbWEuaXRlbXMsIHRoaXMpO1xuICAgICg8Rm9ybVByb3BlcnR5W10+dGhpcy5wcm9wZXJ0aWVzKS5wdXNoKG5ld1Byb3BlcnR5KTtcbiAgICByZXR1cm4gbmV3UHJvcGVydHk7XG4gIH1cblxuICByZW1vdmVJdGVtKGluZGV4OiBudW1iZXIpIHtcbiAgICAoPEZvcm1Qcm9wZXJ0eVtdPnRoaXMucHJvcGVydGllcykuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoZmFsc2UsIHRydWUpO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IGFueSwgb25seVNlbGY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNyZWF0ZVByb3BlcnRpZXMoKTtcbiAgICB0aGlzLnJlc2V0UHJvcGVydGllcyh2YWx1ZSk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmLCB0cnVlKTtcbiAgfVxuXG4gIHB1YmxpYyBfaGFzVmFsdWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwdWJsaWMgX3VwZGF0ZVZhbHVlKCkge1xuICAgIHRoaXMucmVkdWNlVmFsdWUoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVkdWNlVmFsdWUoKTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWUgPSBbXTtcbiAgICB0aGlzLmZvckVhY2hDaGlsZCgocHJvcGVydHksIF8pID0+IHtcbiAgICAgIGlmIChwcm9wZXJ0eS52aXNpYmxlICYmIHByb3BlcnR5Ll9oYXNWYWx1ZSgpKSB7XG4gICAgICAgIHZhbHVlLnB1c2gocHJvcGVydHkudmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cblxuICByZXNldCh2YWx1ZTogYW55LCBvbmx5U2VsZiA9IHRydWUpIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHRoaXMuc2NoZW1hLmRlZmF1bHQgfHwgW107XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gW107XG4gICAgdGhpcy5yZXNldFByb3BlcnRpZXModmFsdWUpO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvbmx5U2VsZiwgdHJ1ZSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVByb3BlcnRpZXMoKSB7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gW107XG4gIH1cblxuXG4gIHByaXZhdGUgcmVzZXRQcm9wZXJ0aWVzKHZhbHVlOiBhbnkpIHtcbiAgICBmb3IgKGxldCBpZHggaW4gdmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShpZHgpKSB7XG4gICAgICAgIGxldCBwcm9wZXJ0eSA9IHRoaXMuYWRkUHJvcGVydHkoKTtcbiAgICAgICAgcHJvcGVydHkucmVzZXQodmFsdWVbaWR4XSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=