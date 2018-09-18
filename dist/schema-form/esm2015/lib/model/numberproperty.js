/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { AtomicProperty } from './atomicproperty';
export class NumberProperty extends AtomicProperty {
    /**
     * @return {?}
     */
    fallbackValue() {
        return null;
    }
    /**
     * @param {?} value
     * @param {?=} onlySelf
     * @return {?}
     */
    setValue(value, onlySelf = false) {
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
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVycHJvcGVydHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vIiwic291cmNlcyI6WyJsaWIvbW9kZWwvbnVtYmVycHJvcGVydHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUVoRCxNQUFNLHFCQUFzQixTQUFRLGNBQWM7Ozs7SUFFaEQsYUFBYTtRQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUM7S0FDYjs7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQUssRUFBRSxRQUFRLEdBQUcsS0FBSztRQUM5QixFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzlCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQzNFO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sS0FBSyxHQUFHLElBQUksQ0FBQzthQUNkO1NBQ0Y7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQzdDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0F0b21pY1Byb3BlcnR5fSBmcm9tICcuL2F0b21pY3Byb3BlcnR5JztcblxuZXhwb3J0IGNsYXNzIE51bWJlclByb3BlcnR5IGV4dGVuZHMgQXRvbWljUHJvcGVydHkge1xuXG4gIGZhbGxiYWNrVmFsdWUoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZSwgb25seVNlbGYgPSBmYWxzZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAodmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuaW5kZXhPZignLicpID4gLTEgPyBwYXJzZUZsb2F0KHZhbHVlKSA6IHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmLCB0cnVlKTtcbiAgfVxufVxuIl19