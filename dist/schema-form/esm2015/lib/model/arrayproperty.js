/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { PropertyGroup } from './formproperty';
export class ArrayProperty extends PropertyGroup {
    /**
     * @param {?} formPropertyFactory
     * @param {?} schemaValidatorFactory
     * @param {?} validatorRegistry
     * @param {?} schema
     * @param {?} parent
     * @param {?} path
     */
    constructor(formPropertyFactory, schemaValidatorFactory, validatorRegistry, schema, parent, path) {
        super(schemaValidatorFactory, validatorRegistry, schema, parent, path);
        this.formPropertyFactory = formPropertyFactory;
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    addItem(value = null) {
        let /** @type {?} */ newProperty = this.addProperty();
        newProperty.reset(value, false);
        return newProperty;
    }
    /**
     * @return {?}
     */
    addProperty() {
        let /** @type {?} */ newProperty = this.formPropertyFactory.createProperty(this.schema.items, this);
        (/** @type {?} */ (this.properties)).push(newProperty);
        return newProperty;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    removeItem(index) {
        (/** @type {?} */ (this.properties)).splice(index, 1);
        this.updateValueAndValidity(false, true);
    }
    /**
     * @param {?} value
     * @param {?} onlySelf
     * @return {?}
     */
    setValue(value, onlySelf) {
        this.createProperties();
        this.resetProperties(value);
        this.updateValueAndValidity(onlySelf, true);
    }
    /**
     * @return {?}
     */
    _hasValue() {
        return true;
    }
    /**
     * @return {?}
     */
    _updateValue() {
        this.reduceValue();
    }
    /**
     * @return {?}
     */
    reduceValue() {
        const /** @type {?} */ value = [];
        this.forEachChild((property, _) => {
            if (property.visible && property._hasValue()) {
                value.push(property.value);
            }
        });
        this._value = value;
    }
    /**
     * @param {?} value
     * @param {?=} onlySelf
     * @return {?}
     */
    reset(value, onlySelf = true) {
        value = value || this.schema.default || [];
        this.properties = [];
        this.resetProperties(value);
        this.updateValueAndValidity(onlySelf, true);
    }
    /**
     * @return {?}
     */
    createProperties() {
        this.properties = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    resetProperties(value) {
        for (let /** @type {?} */ idx in value) {
            if (value.hasOwnProperty(idx)) {
                let /** @type {?} */ property = this.addProperty();
                property.reset(value[idx], true);
            }
        }
    }
}
function ArrayProperty_tsickle_Closure_declarations() {
    /** @type {?} */
    ArrayProperty.prototype.formPropertyFactory;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXlwcm9wZXJ0eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zY2hlbWEtZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbC9hcnJheXByb3BlcnR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWUsYUFBYSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFLM0QsTUFBTSxvQkFBcUIsU0FBUSxhQUFhOzs7Ozs7Ozs7SUFFOUMsWUFBb0IsbUJBQXdDLEVBQ2hELHNCQUE4QyxFQUM5QyxpQkFBb0MsRUFDcEMsTUFBVyxFQUNYLE1BQXFCLEVBQ3JCLElBQVk7UUFDdEIsS0FBSyxDQUFDLHNCQUFzQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFOckQsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtLQU8zRDs7Ozs7SUFFRCxPQUFPLENBQUMsUUFBYSxJQUFJO1FBQ3ZCLHFCQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckMsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDaEMsTUFBTSxDQUFDLFdBQVcsQ0FBQztLQUNwQjs7OztJQUVPLFdBQVc7UUFDakIscUJBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkYsbUJBQWlCLElBQUksQ0FBQyxVQUFVLEVBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDcEQsTUFBTSxDQUFDLFdBQVcsQ0FBQzs7Ozs7O0lBR3JCLFVBQVUsQ0FBQyxLQUFhO1FBQ3RCLG1CQUFpQixJQUFJLENBQUMsVUFBVSxFQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQzFDOzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBVSxFQUFFLFFBQWlCO1FBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUM3Qzs7OztJQUVNLFNBQVM7UUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDOzs7OztJQUdQLFlBQVk7UUFDakIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDOzs7OztJQUdiLFdBQVc7UUFDakIsdUJBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2hDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDN0MsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDNUI7U0FDRixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzs7Ozs7OztJQUd0QixLQUFLLENBQUMsS0FBVSxFQUFFLFFBQVEsR0FBRyxJQUFJO1FBQy9CLEtBQUssR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUM3Qzs7OztJQUVPLGdCQUFnQjtRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQzs7Ozs7O0lBSWYsZUFBZSxDQUFDLEtBQVU7UUFDaEMsR0FBRyxDQUFDLENBQUMscUJBQUksR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdEIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlCLHFCQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ2xDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ2xDO1NBQ0Y7O0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Zvcm1Qcm9wZXJ0eSwgUHJvcGVydHlHcm91cH0gZnJvbSAnLi9mb3JtcHJvcGVydHknO1xuaW1wb3J0IHtGb3JtUHJvcGVydHlGYWN0b3J5fSBmcm9tICcuL2Zvcm1wcm9wZXJ0eWZhY3RvcnknO1xuaW1wb3J0IHtTY2hlbWFWYWxpZGF0b3JGYWN0b3J5fSBmcm9tICcuLi9zY2hlbWF2YWxpZGF0b3JmYWN0b3J5JztcbmltcG9ydCB7VmFsaWRhdG9yUmVnaXN0cnl9IGZyb20gJy4vdmFsaWRhdG9ycmVnaXN0cnknO1xuXG5leHBvcnQgY2xhc3MgQXJyYXlQcm9wZXJ0eSBleHRlbmRzIFByb3BlcnR5R3JvdXAge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybVByb3BlcnR5RmFjdG9yeTogRm9ybVByb3BlcnR5RmFjdG9yeSxcbiAgICAgICAgICAgICAgc2NoZW1hVmFsaWRhdG9yRmFjdG9yeTogU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgICAgICAgICAgICAgdmFsaWRhdG9yUmVnaXN0cnk6IFZhbGlkYXRvclJlZ2lzdHJ5LFxuICAgICAgICAgICAgICBzY2hlbWE6IGFueSxcbiAgICAgICAgICAgICAgcGFyZW50OiBQcm9wZXJ0eUdyb3VwLFxuICAgICAgICAgICAgICBwYXRoOiBzdHJpbmcpIHtcbiAgICBzdXBlcihzY2hlbWFWYWxpZGF0b3JGYWN0b3J5LCB2YWxpZGF0b3JSZWdpc3RyeSwgc2NoZW1hLCBwYXJlbnQsIHBhdGgpO1xuICB9XG5cbiAgYWRkSXRlbSh2YWx1ZTogYW55ID0gbnVsbCk6IEZvcm1Qcm9wZXJ0eSB7XG4gICAgbGV0IG5ld1Byb3BlcnR5ID0gdGhpcy5hZGRQcm9wZXJ0eSgpO1xuICAgIG5ld1Byb3BlcnR5LnJlc2V0KHZhbHVlLCBmYWxzZSk7XG4gICAgcmV0dXJuIG5ld1Byb3BlcnR5O1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRQcm9wZXJ0eSgpIHtcbiAgICBsZXQgbmV3UHJvcGVydHkgPSB0aGlzLmZvcm1Qcm9wZXJ0eUZhY3RvcnkuY3JlYXRlUHJvcGVydHkodGhpcy5zY2hlbWEuaXRlbXMsIHRoaXMpO1xuICAgICg8Rm9ybVByb3BlcnR5W10+dGhpcy5wcm9wZXJ0aWVzKS5wdXNoKG5ld1Byb3BlcnR5KTtcbiAgICByZXR1cm4gbmV3UHJvcGVydHk7XG4gIH1cblxuICByZW1vdmVJdGVtKGluZGV4OiBudW1iZXIpIHtcbiAgICAoPEZvcm1Qcm9wZXJ0eVtdPnRoaXMucHJvcGVydGllcykuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoZmFsc2UsIHRydWUpO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IGFueSwgb25seVNlbGY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNyZWF0ZVByb3BlcnRpZXMoKTtcbiAgICB0aGlzLnJlc2V0UHJvcGVydGllcyh2YWx1ZSk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmLCB0cnVlKTtcbiAgfVxuXG4gIHB1YmxpYyBfaGFzVmFsdWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwdWJsaWMgX3VwZGF0ZVZhbHVlKCkge1xuICAgIHRoaXMucmVkdWNlVmFsdWUoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVkdWNlVmFsdWUoKTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWUgPSBbXTtcbiAgICB0aGlzLmZvckVhY2hDaGlsZCgocHJvcGVydHksIF8pID0+IHtcbiAgICAgIGlmIChwcm9wZXJ0eS52aXNpYmxlICYmIHByb3BlcnR5Ll9oYXNWYWx1ZSgpKSB7XG4gICAgICAgIHZhbHVlLnB1c2gocHJvcGVydHkudmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cblxuICByZXNldCh2YWx1ZTogYW55LCBvbmx5U2VsZiA9IHRydWUpIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHRoaXMuc2NoZW1hLmRlZmF1bHQgfHwgW107XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gW107XG4gICAgdGhpcy5yZXNldFByb3BlcnRpZXModmFsdWUpO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvbmx5U2VsZiwgdHJ1ZSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVByb3BlcnRpZXMoKSB7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gW107XG4gIH1cblxuXG4gIHByaXZhdGUgcmVzZXRQcm9wZXJ0aWVzKHZhbHVlOiBhbnkpIHtcbiAgICBmb3IgKGxldCBpZHggaW4gdmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShpZHgpKSB7XG4gICAgICAgIGxldCBwcm9wZXJ0eSA9IHRoaXMuYWRkUHJvcGVydHkoKTtcbiAgICAgICAgcHJvcGVydHkucmVzZXQodmFsdWVbaWR4XSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=