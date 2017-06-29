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
import { AtomicProperty } from './atomicproperty';
var StringProperty = (function (_super) {
    __extends(StringProperty, _super);
    function StringProperty() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StringProperty.prototype.fallbackValue = function () {
        return '';
    };
    return StringProperty;
}(AtomicProperty));
export { StringProperty };
