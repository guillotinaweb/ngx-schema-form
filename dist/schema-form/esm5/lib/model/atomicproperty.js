/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FormProperty } from './formproperty';
/**
 * @abstract
 */
var /**
 * @abstract
 */
AtomicProperty = /** @class */ (function (_super) {
    tslib_1.__extends(AtomicProperty, _super);
    function AtomicProperty() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} value
     * @param {?=} onlySelf
     * @return {?}
     */
    AtomicProperty.prototype.setValue = /**
     * @param {?} value
     * @param {?=} onlySelf
     * @return {?}
     */
    function (value, onlySelf) {
        if (onlySelf === void 0) { onlySelf = false; }
        this._value = value;
        this.updateValueAndValidity(onlySelf, true);
    };
    /**
     * @param {?=} value
     * @param {?=} onlySelf
     * @return {?}
     */
    AtomicProperty.prototype.reset = /**
     * @param {?=} value
     * @param {?=} onlySelf
     * @return {?}
     */
    function (value, onlySelf) {
        if (value === void 0) { value = null; }
        if (onlySelf === void 0) { onlySelf = true; }
        this.resetValue(value);
        this.updateValueAndValidity(onlySelf, true);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AtomicProperty.prototype.resetValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value === null) {
            if (this.schema.default !== undefined) {
                value = this.schema.default;
            }
            else {
                value = this.fallbackValue();
            }
        }
        this._value = value;
    };
    /**
     * @return {?}
     */
    AtomicProperty.prototype._hasValue = /**
     * @return {?}
     */
    function () {
        return this.fallbackValue() !== this.value;
    };
    /**
     * @return {?}
     */
    AtomicProperty.prototype._updateValue = /**
     * @return {?}
     */
    function () {
    };
    return AtomicProperty;
}(FormProperty));
/**
 * @abstract
 */
export { AtomicProperty };
function AtomicProperty_tsickle_Closure_declarations() {
    /**
     * @abstract
     * @return {?}
     */
    AtomicProperty.prototype.fallbackValue = function () { };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXRvbWljcHJvcGVydHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vIiwic291cmNlcyI6WyJsaWIvbW9kZWwvYXRvbWljcHJvcGVydHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFFNUM7OztBQUFBO0lBQTZDLDBDQUFZOzs7Ozs7Ozs7SUFFdkQsaUNBQVE7Ozs7O0lBQVIsVUFBUyxLQUFLLEVBQUUsUUFBZ0I7UUFBaEIseUJBQUEsRUFBQSxnQkFBZ0I7UUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUM3Qzs7Ozs7O0lBRUQsOEJBQUs7Ozs7O0lBQUwsVUFBTSxLQUFpQixFQUFFLFFBQWU7UUFBbEMsc0JBQUEsRUFBQSxZQUFpQjtRQUFFLHlCQUFBLEVBQUEsZUFBZTtRQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDN0M7Ozs7O0lBRUQsbUNBQVU7Ozs7SUFBVixVQUFXLEtBQVU7UUFDbkIsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDdEMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO2FBQzdCO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUM5QjtTQUNGO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7S0FDckI7Ozs7SUFFTSxrQ0FBUzs7OztRQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQzs7Ozs7SUFLdEMscUNBQVk7Ozs7O3lCQS9CckI7RUFFNkMsWUFBWSxFQStCeEQsQ0FBQTs7OztBQS9CRCwwQkErQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Zvcm1Qcm9wZXJ0eX0gZnJvbSAnLi9mb3JtcHJvcGVydHknO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQXRvbWljUHJvcGVydHkgZXh0ZW5kcyBGb3JtUHJvcGVydHkge1xuXG4gIHNldFZhbHVlKHZhbHVlLCBvbmx5U2VsZiA9IGZhbHNlKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob25seVNlbGYsIHRydWUpO1xuICB9XG5cbiAgcmVzZXQodmFsdWU6IGFueSA9IG51bGwsIG9ubHlTZWxmID0gdHJ1ZSkge1xuICAgIHRoaXMucmVzZXRWYWx1ZSh2YWx1ZSk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmLCB0cnVlKTtcbiAgfVxuXG4gIHJlc2V0VmFsdWUodmFsdWU6IGFueSk6IGFueSB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICBpZiAodGhpcy5zY2hlbWEuZGVmYXVsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhbHVlID0gdGhpcy5zY2hlbWEuZGVmYXVsdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gdGhpcy5mYWxsYmFja1ZhbHVlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgX2hhc1ZhbHVlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZhbGxiYWNrVmFsdWUoKSAhPT0gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIGFic3RyYWN0IGZhbGxiYWNrVmFsdWUoKTogYW55O1xuXG4gIHB1YmxpYyBfdXBkYXRlVmFsdWUoKSB7XG4gIH1cbn1cbiJdfQ==