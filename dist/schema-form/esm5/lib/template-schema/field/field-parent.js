/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { TemplateSchemaElement } from '../template-schema-element';
import { FieldType } from './field';
/**
 * @abstract
 */
var /**
 * @abstract
 */
FieldParent = /** @class */ (function (_super) {
    tslib_1.__extends(FieldParent, _super);
    function FieldParent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = '';
        return _this;
    }
    Object.defineProperty(FieldParent.prototype, "path", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.name) {
                return '';
            }
            return '/' + this.name;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FieldParent.prototype.getButtons = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.childButtons.map(function (button, index) {
            if (!button.id) {
                var /** @type {?} */ randomString = Math.random().toString(16).substr(2, 8);
                // generate id for button
                button.id = _this.name + randomString + '_' + (index + 1);
            }
            // register as button action the EventEmitter click
            // register as button action the EventEmitter click
            _this.actionRegistry.register(button.id, button.click.emit.bind(button.click));
            var /** @type {?} */ _button = /** @type {?} */ ({
                id: button.id,
                label: button.label,
            });
            if (button.widget) {
                _button.widget = button.widget;
            }
            return _button;
        });
    };
    /**
     * @param {?} fields
     * @return {?}
     */
    FieldParent.prototype.getFieldsValidators = /**
     * @param {?} fields
     * @return {?}
     */
    function (fields) {
        return fields.reduce(function (validators, field) {
            return validators.concat(field.getValidators());
        }, []);
    };
    /**
     * @param {?} fields
     * @return {?}
     */
    FieldParent.prototype.getFieldsSchema = /**
     * @param {?} fields
     * @return {?}
     */
    function (fields) {
        var _this = this;
        return fields.reduce(function (schema, field) {
            switch (_this.type) {
                case FieldType.Array:
                    schema.items = field.getSchema();
                    break;
                default:
                    if (!schema.properties) {
                        schema.properties = {};
                    }
                    schema.properties[field.name] = field.getSchema();
                    break;
            }
            var /** @type {?} */ buttons = field.getButtons();
            if (buttons.length > 0) {
                schema.buttons = buttons;
            }
            if (!field.required) {
                return schema;
            }
            if (!schema.required) {
                schema.required = [];
            }
            schema.required.push(field.name);
            return schema;
        }, {});
    };
    return FieldParent;
}(TemplateSchemaElement));
/**
 * @abstract
 */
export { FieldParent };
function FieldParent_tsickle_Closure_declarations() {
    /** @type {?} */
    FieldParent.prototype.name;
    /** @type {?} */
    FieldParent.prototype.type;
    /** @type {?} */
    FieldParent.prototype.actionRegistry;
    /** @type {?} */
    FieldParent.prototype.childButtons;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtcGFyZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNjaGVtYS1mb3JtLyIsInNvdXJjZXMiOlsibGliL3RlbXBsYXRlLXNjaGVtYS9maWVsZC9maWVsZC1wYXJlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVuRSxPQUFPLEVBQVMsU0FBUyxFQUFFLE1BQU0sU0FBUyxDQUFDOzs7O0FBRTNDOzs7QUFBQTtJQUEwQyx1Q0FBcUI7OztxQkFFdEQsRUFBRTs7O0lBR1Qsc0JBQUksNkJBQUk7Ozs7UUFBUjtZQUNFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsTUFBTSxDQUFDLEVBQUUsQ0FBQzthQUNYO1lBRUQsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3hCOzs7T0FBQTs7OztJQU1ELGdDQUFVOzs7SUFBVjtRQUFBLGlCQTRCQztRQTFCQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBQyxNQUFNLEVBQUUsS0FBSztZQUV6QyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNmLHFCQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7O2dCQUU3RCxNQUFNLENBQUMsRUFBRSxHQUFHLEtBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxHQUFHLEdBQUcsR0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQzthQUMzRDs7WUFHRCxBQURBLG1EQUFtRDtZQUNuRCxLQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FDMUIsTUFBTSxDQUFDLEVBQUUsRUFDVCxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUNyQyxDQUFDO1lBRUYscUJBQU0sT0FBTyxxQkFBUTtnQkFDbkIsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFO2dCQUNiLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSzthQUNwQixDQUFBLENBQUM7WUFFRixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDbEIsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO2FBQ2hDO1lBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUVoQixDQUFDLENBQUM7S0FDSjs7Ozs7SUFFUyx5Q0FBbUI7Ozs7SUFBN0IsVUFDRSxNQUFlO1FBR2YsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQyxVQUFVLEVBQUUsS0FBSztZQUNyQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztTQUNqRCxFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBRVI7Ozs7O0lBRVMscUNBQWU7Ozs7SUFBekIsVUFBMEIsTUFBZTtRQUF6QyxpQkFnQ0M7UUEvQkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQyxNQUFXLEVBQUUsS0FBSztZQUV0QyxNQUFNLENBQUMsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDbEIsS0FBSyxTQUFTLENBQUMsS0FBSztvQkFDbEIsTUFBTSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ2pDLEtBQUssQ0FBQztnQkFFUjtvQkFDRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUN2QixNQUFNLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztxQkFDeEI7b0JBRUQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUNsRCxLQUFLLENBQUM7YUFDVDtZQUVELHFCQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbkMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzthQUMxQjtZQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDZjtZQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO2FBQ3RCO1lBQ0QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pDLE1BQU0sQ0FBQyxNQUFNLENBQUM7U0FDZixFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBQ1I7c0JBbEdIO0VBUzBDLHFCQUFxQixFQTJGOUQsQ0FBQTs7OztBQTNGRCx1QkEyRkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVmFsaWRhdG9yIH0gZnJvbSAnLi4vLi4vbW9kZWwvdmFsaWRhdG9yJztcbmltcG9ydCB7IEFjdGlvblJlZ2lzdHJ5IH0gZnJvbSAnLi4vLi4vbW9kZWwvYWN0aW9ucmVnaXN0cnknO1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi4vYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGVtcGxhdGVTY2hlbWFFbGVtZW50IH0gZnJvbSAnLi4vdGVtcGxhdGUtc2NoZW1hLWVsZW1lbnQnO1xuXG5pbXBvcnQgeyBGaWVsZCwgRmllbGRUeXBlIH0gZnJvbSAnLi9maWVsZCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGaWVsZFBhcmVudCBleHRlbmRzIFRlbXBsYXRlU2NoZW1hRWxlbWVudCB7XG5cbiAgbmFtZSA9ICcnO1xuICB0eXBlOiBGaWVsZFR5cGU7XG5cbiAgZ2V0IHBhdGgoKTogc3RyaW5nIHtcbiAgICBpZiAoIXRoaXMubmFtZSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHJldHVybiAnLycgKyB0aGlzLm5hbWU7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgYWN0aW9uUmVnaXN0cnk6IEFjdGlvblJlZ2lzdHJ5O1xuICBwcm90ZWN0ZWQgYWJzdHJhY3QgY2hpbGRCdXR0b25zOiBRdWVyeUxpc3Q8QnV0dG9uQ29tcG9uZW50PjtcblxuXG4gIGdldEJ1dHRvbnMoKTogeyBpZDogc3RyaW5nLCBsYWJlbDogc3RyaW5nLCB3aWRnZXQ/OiBzdHJpbmcgfCBvYmplY3QgfVtdIHtcblxuICAgIHJldHVybiB0aGlzLmNoaWxkQnV0dG9ucy5tYXAoKGJ1dHRvbiwgaW5kZXgpID0+IHtcblxuICAgICAgaWYgKCFidXR0b24uaWQpIHtcbiAgICAgICAgY29uc3QgcmFuZG9tU3RyaW5nID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygxNikuc3Vic3RyKDIsIDgpO1xuICAgICAgICAvLyBnZW5lcmF0ZSBpZCBmb3IgYnV0dG9uXG4gICAgICAgIGJ1dHRvbi5pZCA9IHRoaXMubmFtZSArIHJhbmRvbVN0cmluZyArICdfJyAgKyAoaW5kZXggKyAxKTtcbiAgICAgIH1cblxuICAgICAgLy8gcmVnaXN0ZXIgYXMgYnV0dG9uIGFjdGlvbiB0aGUgRXZlbnRFbWl0dGVyIGNsaWNrXG4gICAgICB0aGlzLmFjdGlvblJlZ2lzdHJ5LnJlZ2lzdGVyKFxuICAgICAgICBidXR0b24uaWQsXG4gICAgICAgIGJ1dHRvbi5jbGljay5lbWl0LmJpbmQoYnV0dG9uLmNsaWNrKVxuICAgICAgKTtcblxuICAgICAgY29uc3QgX2J1dHRvbiA9IDxhbnk+e1xuICAgICAgICBpZDogYnV0dG9uLmlkLFxuICAgICAgICBsYWJlbDogYnV0dG9uLmxhYmVsLFxuICAgICAgfTtcblxuICAgICAgaWYgKGJ1dHRvbi53aWRnZXQpIHtcbiAgICAgICAgX2J1dHRvbi53aWRnZXQgPSBidXR0b24ud2lkZ2V0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX2J1dHRvbjtcblxuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldEZpZWxkc1ZhbGlkYXRvcnMoXG4gICAgZmllbGRzOiBGaWVsZFtdXG4gICk6IHsgcGF0aDogc3RyaW5nLCB2YWxpZGF0b3I6IFZhbGlkYXRvciB9W10ge1xuXG4gICAgcmV0dXJuIGZpZWxkcy5yZWR1Y2UoKHZhbGlkYXRvcnMsIGZpZWxkKSA9PiB7XG4gICAgICByZXR1cm4gdmFsaWRhdG9ycy5jb25jYXQoZmllbGQuZ2V0VmFsaWRhdG9ycygpKTtcbiAgICB9LCBbXSk7XG5cbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRGaWVsZHNTY2hlbWEoZmllbGRzOiBGaWVsZFtdKSB7XG4gICAgcmV0dXJuIGZpZWxkcy5yZWR1Y2UoKHNjaGVtYTogYW55LCBmaWVsZCkgPT4ge1xuXG4gICAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xuICAgICAgICBjYXNlIEZpZWxkVHlwZS5BcnJheTpcbiAgICAgICAgICBzY2hlbWEuaXRlbXMgPSBmaWVsZC5nZXRTY2hlbWEoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGlmICghc2NoZW1hLnByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIHNjaGVtYS5wcm9wZXJ0aWVzID0ge307XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2NoZW1hLnByb3BlcnRpZXNbZmllbGQubmFtZV0gPSBmaWVsZC5nZXRTY2hlbWEoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY29uc3QgYnV0dG9ucyA9IGZpZWxkLmdldEJ1dHRvbnMoKTtcbiAgICAgIGlmIChidXR0b25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgc2NoZW1hLmJ1dHRvbnMgPSBidXR0b25zO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWZpZWxkLnJlcXVpcmVkKSB7XG4gICAgICAgIHJldHVybiBzY2hlbWE7XG4gICAgICB9XG5cbiAgICAgIGlmICghc2NoZW1hLnJlcXVpcmVkKSB7XG4gICAgICAgIHNjaGVtYS5yZXF1aXJlZCA9IFtdO1xuICAgICAgfVxuICAgICAgc2NoZW1hLnJlcXVpcmVkLnB1c2goZmllbGQubmFtZSk7XG4gICAgICByZXR1cm4gc2NoZW1hO1xuICAgIH0sIHt9KTtcbiAgfVxuXG59XG4iXX0=