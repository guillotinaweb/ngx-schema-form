/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { FormProperty } from './formproperty';
/**
 * @abstract
 */
export class AtomicProperty extends FormProperty {
    /**
     * @param {?} value
     * @param {?=} onlySelf
     * @return {?}
     */
    setValue(value, onlySelf = false) {
        this._value = value;
        this.updateValueAndValidity(onlySelf, true);
    }
    /**
     * @param {?=} value
     * @param {?=} onlySelf
     * @return {?}
     */
    reset(value = null, onlySelf = true) {
        this.resetValue(value);
        this.updateValueAndValidity(onlySelf, true);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    resetValue(value) {
        if (value === null) {
            if (this.schema.default !== undefined) {
                value = this.schema.default;
            }
            else {
                value = this.fallbackValue();
            }
        }
        this._value = value;
    }
    /**
     * @return {?}
     */
    _hasValue() {
        return this.fallbackValue() !== this.value;
    }
    /**
     * @return {?}
     */
    _updateValue() {
    }
}
function AtomicProperty_tsickle_Closure_declarations() {
    /**
     * @abstract
     * @return {?}
     */
    AtomicProperty.prototype.fallbackValue = function () { };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXRvbWljcHJvcGVydHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vIiwic291cmNlcyI6WyJsaWIvbW9kZWwvYXRvbWljcHJvcGVydHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUU1QyxNQUFNLHFCQUErQixTQUFRLFlBQVk7Ozs7OztJQUV2RCxRQUFRLENBQUMsS0FBSyxFQUFFLFFBQVEsR0FBRyxLQUFLO1FBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDN0M7Ozs7OztJQUVELEtBQUssQ0FBQyxRQUFhLElBQUksRUFBRSxRQUFRLEdBQUcsSUFBSTtRQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDN0M7Ozs7O0lBRUQsVUFBVSxDQUFDLEtBQVU7UUFDbkIsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDdEMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO2FBQzdCO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUM5QjtTQUNGO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7S0FDckI7Ozs7SUFFTSxTQUFTO1FBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDOzs7OztJQUt0QyxZQUFZOztDQUVwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Rm9ybVByb3BlcnR5fSBmcm9tICcuL2Zvcm1wcm9wZXJ0eSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBdG9taWNQcm9wZXJ0eSBleHRlbmRzIEZvcm1Qcm9wZXJ0eSB7XG5cbiAgc2V0VmFsdWUodmFsdWUsIG9ubHlTZWxmID0gZmFsc2UpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvbmx5U2VsZiwgdHJ1ZSk7XG4gIH1cblxuICByZXNldCh2YWx1ZTogYW55ID0gbnVsbCwgb25seVNlbGYgPSB0cnVlKSB7XG4gICAgdGhpcy5yZXNldFZhbHVlKHZhbHVlKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob25seVNlbGYsIHRydWUpO1xuICB9XG5cbiAgcmVzZXRWYWx1ZSh2YWx1ZTogYW55KTogYW55IHtcbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLnNjaGVtYS5kZWZhdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLnNjaGVtYS5kZWZhdWx0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLmZhbGxiYWNrVmFsdWUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBfaGFzVmFsdWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZmFsbGJhY2tWYWx1ZSgpICE9PSB0aGlzLnZhbHVlO1xuICB9XG5cbiAgYWJzdHJhY3QgZmFsbGJhY2tWYWx1ZSgpOiBhbnk7XG5cbiAgcHVibGljIF91cGRhdGVWYWx1ZSgpIHtcbiAgfVxufVxuIl19