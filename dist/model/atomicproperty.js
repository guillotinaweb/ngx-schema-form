var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { FormProperty } from './formproperty';
var AtomicProperty = (function (_super) {
    __extends(AtomicProperty, _super);
    function AtomicProperty() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtomicProperty.prototype.setValue = function (value, onlySelf) {
        if (onlySelf === void 0) { onlySelf = false; }
        this._value = value;
        this.updateValueAndValidity(onlySelf, true);
    };
    AtomicProperty.prototype.reset = function (value, onlySelf) {
        if (value === void 0) { value = null; }
        if (onlySelf === void 0) { onlySelf = true; }
        this.resetValue(value);
        this.updateValueAndValidity(onlySelf, true);
    };
    AtomicProperty.prototype.resetValue = function (value) {
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
    AtomicProperty.prototype._updateValue = function () { };
    ;
    return AtomicProperty;
}(FormProperty));
export { AtomicProperty };
