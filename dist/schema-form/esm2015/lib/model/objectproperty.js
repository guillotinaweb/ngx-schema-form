/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { PropertyGroup } from './formproperty';
export class ObjectProperty extends PropertyGroup {
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
        this.propertiesId = [];
        this.createProperties();
    }
    /**
     * @param {?} value
     * @param {?} onlySelf
     * @return {?}
     */
    setValue(value, onlySelf) {
        for (const /** @type {?} */ propertyId in value) {
            if (value.hasOwnProperty(propertyId)) {
                this.properties[propertyId].setValue(value[propertyId], true);
            }
        }
        this.updateValueAndValidity(onlySelf, true);
    }
    /**
     * @param {?} value
     * @param {?=} onlySelf
     * @return {?}
     */
    reset(value, onlySelf = true) {
        value = value || this.schema.default || {};
        this.resetProperties(value);
        this.updateValueAndValidity(onlySelf, true);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    resetProperties(value) {
        for (const /** @type {?} */ propertyId in this.schema.properties) {
            if (this.schema.properties.hasOwnProperty(propertyId)) {
                this.properties[propertyId].reset(value[propertyId], true);
            }
        }
    }
    /**
     * @return {?}
     */
    createProperties() {
        this.properties = {};
        this.propertiesId = [];
        for (const /** @type {?} */ propertyId in this.schema.properties) {
            if (this.schema.properties.hasOwnProperty(propertyId)) {
                const /** @type {?} */ propertySchema = this.schema.properties[propertyId];
                this.properties[propertyId] = this.formPropertyFactory.createProperty(propertySchema, this, propertyId);
                this.propertiesId.push(propertyId);
            }
        }
    }
    /**
     * @return {?}
     */
    _hasValue() {
        return !!Object.keys(this.value).length;
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
    _runValidation() {
        super._runValidation();
        if (this._errors) {
            this._errors.forEach(error => {
                const /** @type {?} */ prop = this.searchProperty(error.path.slice(1));
                if (prop) {
                    prop.extendErrors(error);
                }
            });
        }
    }
    /**
     * @return {?}
     */
    reduceValue() {
        const /** @type {?} */ value = {};
        this.forEachChild((property, propertyId) => {
            if (property.visible && property._hasValue()) {
                value[propertyId] = property.value;
            }
        });
        this._value = value;
    }
}
function ObjectProperty_tsickle_Closure_declarations() {
    /** @type {?} */
    ObjectProperty.prototype.propertiesId;
    /** @type {?} */
    ObjectProperty.prototype.formPropertyFactory;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0cHJvcGVydHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vIiwic291cmNlcyI6WyJsaWIvbW9kZWwvb2JqZWN0cHJvcGVydHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUs3QyxNQUFNLHFCQUFzQixTQUFRLGFBQWE7Ozs7Ozs7OztJQUkvQyxZQUFvQixtQkFBd0MsRUFDaEQsc0JBQThDLEVBQzlDLGlCQUFvQyxFQUNwQyxNQUFXLEVBQ1gsTUFBcUIsRUFDckIsSUFBWTtRQUN0QixLQUFLLENBQUMsc0JBQXNCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQU5yRCx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCOzRCQUYzQixFQUFFO1FBU2pDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0tBQ3pCOzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBVSxFQUFFLFFBQWlCO1FBQ3BDLEdBQUcsQ0FBQyxDQUFDLHVCQUFNLFVBQVUsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQy9CLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDL0Q7U0FDRjtRQUNELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDN0M7Ozs7OztJQUVELEtBQUssQ0FBQyxLQUFVLEVBQUUsUUFBUSxHQUFHLElBQUk7UUFDL0IsS0FBSyxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQzdDOzs7OztJQUVELGVBQWUsQ0FBQyxLQUFVO1FBQ3hCLEdBQUcsQ0FBQyxDQUFDLHVCQUFNLFVBQVUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDaEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQzVEO1NBQ0Y7S0FDRjs7OztJQUVELGdCQUFnQjtRQUNkLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLEdBQUcsQ0FBQyxDQUFDLHVCQUFNLFVBQVUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDaEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEQsdUJBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUMxRCxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztnQkFDeEcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDcEM7U0FDRjtLQUNGOzs7O0lBRU0sU0FBUztRQUNkLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDOzs7OztJQUduQyxZQUFZO1FBQ2pCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7Ozs7SUFHZCxjQUFjO1FBQ25CLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV2QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDM0IsdUJBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUMxQjthQUNGLENBQUMsQ0FBQztTQUNKOzs7OztJQUdLLFdBQVc7UUFDakIsdUJBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsUUFBUSxFQUFFLFVBQWtCLEVBQUUsRUFBRTtZQUNqRCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO2FBQ3BDO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7O0NBRXZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQcm9wZXJ0eUdyb3VwfSBmcm9tICcuL2Zvcm1wcm9wZXJ0eSc7XG5pbXBvcnQge0Zvcm1Qcm9wZXJ0eUZhY3Rvcnl9IGZyb20gJy4vZm9ybXByb3BlcnR5ZmFjdG9yeSc7XG5pbXBvcnQge1NjaGVtYVZhbGlkYXRvckZhY3Rvcnl9IGZyb20gJy4uL3NjaGVtYXZhbGlkYXRvcmZhY3RvcnknO1xuaW1wb3J0IHtWYWxpZGF0b3JSZWdpc3RyeX0gZnJvbSAnLi92YWxpZGF0b3JyZWdpc3RyeSc7XG5cbmV4cG9ydCBjbGFzcyBPYmplY3RQcm9wZXJ0eSBleHRlbmRzIFByb3BlcnR5R3JvdXAge1xuXG4gIHByaXZhdGUgcHJvcGVydGllc0lkOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybVByb3BlcnR5RmFjdG9yeTogRm9ybVByb3BlcnR5RmFjdG9yeSxcbiAgICAgICAgICAgICAgc2NoZW1hVmFsaWRhdG9yRmFjdG9yeTogU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgICAgICAgICAgICAgdmFsaWRhdG9yUmVnaXN0cnk6IFZhbGlkYXRvclJlZ2lzdHJ5LFxuICAgICAgICAgICAgICBzY2hlbWE6IGFueSxcbiAgICAgICAgICAgICAgcGFyZW50OiBQcm9wZXJ0eUdyb3VwLFxuICAgICAgICAgICAgICBwYXRoOiBzdHJpbmcpIHtcbiAgICBzdXBlcihzY2hlbWFWYWxpZGF0b3JGYWN0b3J5LCB2YWxpZGF0b3JSZWdpc3RyeSwgc2NoZW1hLCBwYXJlbnQsIHBhdGgpO1xuICAgIHRoaXMuY3JlYXRlUHJvcGVydGllcygpO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IGFueSwgb25seVNlbGY6IGJvb2xlYW4pIHtcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5SWQgaW4gdmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eUlkKSkge1xuICAgICAgICB0aGlzLnByb3BlcnRpZXNbcHJvcGVydHlJZF0uc2V0VmFsdWUodmFsdWVbcHJvcGVydHlJZF0sIHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob25seVNlbGYsIHRydWUpO1xuICB9XG5cbiAgcmVzZXQodmFsdWU6IGFueSwgb25seVNlbGYgPSB0cnVlKSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB0aGlzLnNjaGVtYS5kZWZhdWx0IHx8IHt9O1xuICAgIHRoaXMucmVzZXRQcm9wZXJ0aWVzKHZhbHVlKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob25seVNlbGYsIHRydWUpO1xuICB9XG5cbiAgcmVzZXRQcm9wZXJ0aWVzKHZhbHVlOiBhbnkpIHtcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5SWQgaW4gdGhpcy5zY2hlbWEucHJvcGVydGllcykge1xuICAgICAgaWYgKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkocHJvcGVydHlJZCkpIHtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzW3Byb3BlcnR5SWRdLnJlc2V0KHZhbHVlW3Byb3BlcnR5SWRdLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjcmVhdGVQcm9wZXJ0aWVzKCkge1xuICAgIHRoaXMucHJvcGVydGllcyA9IHt9O1xuICAgIHRoaXMucHJvcGVydGllc0lkID0gW107XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eUlkIGluIHRoaXMuc2NoZW1hLnByb3BlcnRpZXMpIHtcbiAgICAgIGlmICh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KHByb3BlcnR5SWQpKSB7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5U2NoZW1hID0gdGhpcy5zY2hlbWEucHJvcGVydGllc1twcm9wZXJ0eUlkXTtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzW3Byb3BlcnR5SWRdID0gdGhpcy5mb3JtUHJvcGVydHlGYWN0b3J5LmNyZWF0ZVByb3BlcnR5KHByb3BlcnR5U2NoZW1hLCB0aGlzLCBwcm9wZXJ0eUlkKTtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzSWQucHVzaChwcm9wZXJ0eUlkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgX2hhc1ZhbHVlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIU9iamVjdC5rZXlzKHRoaXMudmFsdWUpLmxlbmd0aDtcbiAgfVxuXG4gIHB1YmxpYyBfdXBkYXRlVmFsdWUoKSB7XG4gICAgdGhpcy5yZWR1Y2VWYWx1ZSgpO1xuICB9XG5cbiAgcHVibGljIF9ydW5WYWxpZGF0aW9uKCkge1xuICAgIHN1cGVyLl9ydW5WYWxpZGF0aW9uKCk7XG5cbiAgICBpZiAodGhpcy5fZXJyb3JzKSB7XG4gICAgICB0aGlzLl9lcnJvcnMuZm9yRWFjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnN0IHByb3AgPSB0aGlzLnNlYXJjaFByb3BlcnR5KGVycm9yLnBhdGguc2xpY2UoMSkpO1xuICAgICAgICBpZiAocHJvcCkge1xuICAgICAgICAgIHByb3AuZXh0ZW5kRXJyb3JzKGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZWR1Y2VWYWx1ZSgpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IHt9O1xuICAgIHRoaXMuZm9yRWFjaENoaWxkKChwcm9wZXJ0eSwgcHJvcGVydHlJZDogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvcGVydHkudmlzaWJsZSAmJiBwcm9wZXJ0eS5faGFzVmFsdWUoKSkge1xuICAgICAgICB2YWx1ZVtwcm9wZXJ0eUlkXSA9IHByb3BlcnR5LnZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cbn1cbiJdfQ==