/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AtomicProperty } from './atomicproperty';
var NumberProperty = /** @class */ (function (_super) {
    tslib_1.__extends(NumberProperty, _super);
    function NumberProperty() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    NumberProperty.prototype.fallbackValue = /**
     * @return {?}
     */
    function () {
        return null;
    };
    /**
     * @param {?} value
     * @param {?=} onlySelf
     * @return {?}
     */
    NumberProperty.prototype.setValue = /**
     * @param {?} value
     * @param {?=} onlySelf
     * @return {?}
     */
    function (value, onlySelf) {
        if (onlySelf === void 0) { onlySelf = false; }
        if (typeof value === 'string') {
            if (value.length) {
                value = value.indexOf('.') > -1 ? parseFloat(value) : parseInt(value, 10);
            }
            else {
                value = null;
            }
        }
        this._value = value;
        this.updateValueAndValidity(onlySelf, true);
    };
    return NumberProperty;
}(AtomicProperty));
export { NumberProperty };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVycHJvcGVydHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vIiwic291cmNlcyI6WyJsaWIvbW9kZWwvbnVtYmVycHJvcGVydHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFFaEQsSUFBQTtJQUFvQywwQ0FBYzs7Ozs7OztJQUVoRCxzQ0FBYTs7O0lBQWI7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDO0tBQ2I7Ozs7OztJQUVELGlDQUFROzs7OztJQUFSLFVBQVMsS0FBSyxFQUFFLFFBQWdCO1FBQWhCLHlCQUFBLEVBQUEsZ0JBQWdCO1FBQzlCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDOUIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDM0U7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixLQUFLLEdBQUcsSUFBSSxDQUFDO2FBQ2Q7U0FDRjtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDN0M7eUJBbEJIO0VBRW9DLGNBQWMsRUFpQmpELENBQUE7QUFqQkQsMEJBaUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBdG9taWNQcm9wZXJ0eX0gZnJvbSAnLi9hdG9taWNwcm9wZXJ0eSc7XG5cbmV4cG9ydCBjbGFzcyBOdW1iZXJQcm9wZXJ0eSBleHRlbmRzIEF0b21pY1Byb3BlcnR5IHtcblxuICBmYWxsYmFja1ZhbHVlKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUsIG9ubHlTZWxmID0gZmFsc2UpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKHZhbHVlLmxlbmd0aCkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLmluZGV4T2YoJy4nKSA+IC0xID8gcGFyc2VGbG9hdCh2YWx1ZSkgOiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvbmx5U2VsZiwgdHJ1ZSk7XG4gIH1cbn1cbiJdfQ==