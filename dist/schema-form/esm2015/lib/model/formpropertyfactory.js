/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { PropertyGroup } from './formproperty';
import { NumberProperty } from './numberproperty';
import { StringProperty } from './stringproperty';
import { BooleanProperty } from './booleanproperty';
import { ObjectProperty } from './objectproperty';
import { ArrayProperty } from './arrayproperty';
export class FormPropertyFactory {
    /**
     * @param {?} schemaValidatorFactory
     * @param {?} validatorRegistry
     */
    constructor(schemaValidatorFactory, validatorRegistry) {
        this.schemaValidatorFactory = schemaValidatorFactory;
        this.validatorRegistry = validatorRegistry;
    }
    /**
     * @param {?} schema
     * @param {?=} parent
     * @param {?=} propertyId
     * @return {?}
     */
    createProperty(schema, parent = null, propertyId) {
        let /** @type {?} */ newProperty = null;
        let /** @type {?} */ path = '';
        if (parent) {
            path += parent.path;
            if (parent.parent !== null) {
                path += '/';
            }
            if (parent.type === 'object') {
                path += propertyId;
            }
            else if (parent.type === 'array') {
                path += '*';
            }
            else {
                throw 'Instanciation of a FormProperty with an unknown parent type: ' + parent.type;
            }
        }
        else {
            path = '/';
        }
        if (schema.$ref) {
            const /** @type {?} */ refSchema = this.schemaValidatorFactory.getSchema(parent.root.schema, schema.$ref);
            newProperty = this.createProperty(refSchema, parent, path);
        }
        else {
            switch (schema.type) {
                case 'integer':
                case 'number':
                    newProperty = new NumberProperty(this.schemaValidatorFactory, this.validatorRegistry, schema, parent, path);
                    break;
                case 'string':
                    newProperty = new StringProperty(this.schemaValidatorFactory, this.validatorRegistry, schema, parent, path);
                    break;
                case 'boolean':
                    newProperty = new BooleanProperty(this.schemaValidatorFactory, this.validatorRegistry, schema, parent, path);
                    break;
                case 'object':
                    newProperty = new ObjectProperty(this, this.schemaValidatorFactory, this.validatorRegistry, schema, parent, path);
                    break;
                case 'array':
                    newProperty = new ArrayProperty(this, this.schemaValidatorFactory, this.validatorRegistry, schema, parent, path);
                    break;
                default:
                    throw new TypeError(`Undefined type ${schema.type}`);
            }
        }
        if (newProperty instanceof PropertyGroup) {
            this.initializeRoot(newProperty);
        }
        return newProperty;
    }
    /**
     * @param {?} rootProperty
     * @return {?}
     */
    initializeRoot(rootProperty) {
        rootProperty.reset(null, true);
        rootProperty._bindVisibility();
    }
}
function FormPropertyFactory_tsickle_Closure_declarations() {
    /** @type {?} */
    FormPropertyFactory.prototype.schemaValidatorFactory;
    /** @type {?} */
    FormPropertyFactory.prototype.validatorRegistry;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXByb3BlcnR5ZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zY2hlbWEtZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbC9mb3JtcHJvcGVydHlmYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWUsYUFBYSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0QsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUk5QyxNQUFNOzs7OztJQUNKLFlBQW9CLHNCQUE4QyxFQUFVLGlCQUFvQztRQUE1RiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtLQUMvRzs7Ozs7OztJQUVELGNBQWMsQ0FBQyxNQUFXLEVBQUUsU0FBd0IsSUFBSSxFQUFFLFVBQW1CO1FBQzNFLHFCQUFJLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDdkIscUJBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNkLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDWCxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQztZQUNwQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLElBQUksSUFBSSxHQUFHLENBQUM7YUFDYjtZQUNELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxJQUFJLFVBQVUsQ0FBQzthQUNwQjtZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLElBQUksSUFBSSxHQUFHLENBQUM7YUFDYjtZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE1BQU0sK0RBQStELEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQzthQUNyRjtTQUNGO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLEdBQUcsR0FBRyxDQUFDO1NBQ1o7UUFFRCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNoQix1QkFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekYsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM1RDtRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLEtBQUssU0FBUyxDQUFDO2dCQUNmLEtBQUssUUFBUTtvQkFDWCxXQUFXLEdBQUcsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUM1RyxLQUFLLENBQUM7Z0JBQ1IsS0FBSyxRQUFRO29CQUNYLFdBQVcsR0FBRyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQzVHLEtBQUssQ0FBQztnQkFDUixLQUFLLFNBQVM7b0JBQ1osV0FBVyxHQUFHLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDN0csS0FBSyxDQUFDO2dCQUNSLEtBQUssUUFBUTtvQkFDWCxXQUFXLEdBQUcsSUFBSSxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDbEgsS0FBSyxDQUFDO2dCQUNSLEtBQUssT0FBTztvQkFDVixXQUFXLEdBQUcsSUFBSSxhQUFhLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDakgsS0FBSyxDQUFDO2dCQUNSO29CQUNFLE1BQU0sSUFBSSxTQUFTLENBQUMsa0JBQWtCLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2FBQ3hEO1NBQ0Y7UUFFRCxFQUFFLENBQUMsQ0FBQyxXQUFXLFlBQVksYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2xDO1FBRUQsTUFBTSxDQUFDLFdBQVcsQ0FBQztLQUNwQjs7Ozs7SUFFTyxjQUFjLENBQUMsWUFBMkI7UUFDaEQsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0IsWUFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDOztDQUVsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Rm9ybVByb3BlcnR5LCBQcm9wZXJ0eUdyb3VwfSBmcm9tICcuL2Zvcm1wcm9wZXJ0eSc7XG5pbXBvcnQge051bWJlclByb3BlcnR5fSBmcm9tICcuL251bWJlcnByb3BlcnR5JztcbmltcG9ydCB7U3RyaW5nUHJvcGVydHl9IGZyb20gJy4vc3RyaW5ncHJvcGVydHknO1xuaW1wb3J0IHtCb29sZWFuUHJvcGVydHl9IGZyb20gJy4vYm9vbGVhbnByb3BlcnR5JztcbmltcG9ydCB7T2JqZWN0UHJvcGVydHl9IGZyb20gJy4vb2JqZWN0cHJvcGVydHknO1xuaW1wb3J0IHtBcnJheVByb3BlcnR5fSBmcm9tICcuL2FycmF5cHJvcGVydHknO1xuaW1wb3J0IHtTY2hlbWFWYWxpZGF0b3JGYWN0b3J5fSBmcm9tICcuLi9zY2hlbWF2YWxpZGF0b3JmYWN0b3J5JztcbmltcG9ydCB7VmFsaWRhdG9yUmVnaXN0cnl9IGZyb20gJy4vdmFsaWRhdG9ycmVnaXN0cnknO1xuXG5leHBvcnQgY2xhc3MgRm9ybVByb3BlcnR5RmFjdG9yeSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2NoZW1hVmFsaWRhdG9yRmFjdG9yeTogU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSwgcHJpdmF0ZSB2YWxpZGF0b3JSZWdpc3RyeTogVmFsaWRhdG9yUmVnaXN0cnkpIHtcbiAgfVxuXG4gIGNyZWF0ZVByb3BlcnR5KHNjaGVtYTogYW55LCBwYXJlbnQ6IFByb3BlcnR5R3JvdXAgPSBudWxsLCBwcm9wZXJ0eUlkPzogc3RyaW5nKTogRm9ybVByb3BlcnR5IHtcbiAgICBsZXQgbmV3UHJvcGVydHkgPSBudWxsO1xuICAgIGxldCBwYXRoID0gJyc7XG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgcGF0aCArPSBwYXJlbnQucGF0aDtcbiAgICAgIGlmIChwYXJlbnQucGFyZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHBhdGggKz0gJy8nO1xuICAgICAgfVxuICAgICAgaWYgKHBhcmVudC50eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICBwYXRoICs9IHByb3BlcnR5SWQ7XG4gICAgICB9IGVsc2UgaWYgKHBhcmVudC50eXBlID09PSAnYXJyYXknKSB7XG4gICAgICAgIHBhdGggKz0gJyonO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgJ0luc3RhbmNpYXRpb24gb2YgYSBGb3JtUHJvcGVydHkgd2l0aCBhbiB1bmtub3duIHBhcmVudCB0eXBlOiAnICsgcGFyZW50LnR5cGU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhdGggPSAnLyc7XG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS4kcmVmKSB7XG4gICAgICBjb25zdCByZWZTY2hlbWEgPSB0aGlzLnNjaGVtYVZhbGlkYXRvckZhY3RvcnkuZ2V0U2NoZW1hKHBhcmVudC5yb290LnNjaGVtYSwgc2NoZW1hLiRyZWYpO1xuICAgICAgbmV3UHJvcGVydHkgPSB0aGlzLmNyZWF0ZVByb3BlcnR5KHJlZlNjaGVtYSwgcGFyZW50LCBwYXRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpdGNoIChzY2hlbWEudHlwZSkge1xuICAgICAgICBjYXNlICdpbnRlZ2VyJzpcbiAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICBuZXdQcm9wZXJ0eSA9IG5ldyBOdW1iZXJQcm9wZXJ0eSh0aGlzLnNjaGVtYVZhbGlkYXRvckZhY3RvcnksIHRoaXMudmFsaWRhdG9yUmVnaXN0cnksIHNjaGVtYSwgcGFyZW50LCBwYXRoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICBuZXdQcm9wZXJ0eSA9IG5ldyBTdHJpbmdQcm9wZXJ0eSh0aGlzLnNjaGVtYVZhbGlkYXRvckZhY3RvcnksIHRoaXMudmFsaWRhdG9yUmVnaXN0cnksIHNjaGVtYSwgcGFyZW50LCBwYXRoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgICAgbmV3UHJvcGVydHkgPSBuZXcgQm9vbGVhblByb3BlcnR5KHRoaXMuc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSwgdGhpcy52YWxpZGF0b3JSZWdpc3RyeSwgc2NoZW1hLCBwYXJlbnQsIHBhdGgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgIG5ld1Byb3BlcnR5ID0gbmV3IE9iamVjdFByb3BlcnR5KHRoaXMsIHRoaXMuc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSwgdGhpcy52YWxpZGF0b3JSZWdpc3RyeSwgc2NoZW1hLCBwYXJlbnQsIHBhdGgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgbmV3UHJvcGVydHkgPSBuZXcgQXJyYXlQcm9wZXJ0eSh0aGlzLCB0aGlzLnNjaGVtYVZhbGlkYXRvckZhY3RvcnksIHRoaXMudmFsaWRhdG9yUmVnaXN0cnksIHNjaGVtYSwgcGFyZW50LCBwYXRoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBVbmRlZmluZWQgdHlwZSAke3NjaGVtYS50eXBlfWApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXdQcm9wZXJ0eSBpbnN0YW5jZW9mIFByb3BlcnR5R3JvdXApIHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZVJvb3QobmV3UHJvcGVydHkpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXdQcm9wZXJ0eTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdGlhbGl6ZVJvb3Qocm9vdFByb3BlcnR5OiBQcm9wZXJ0eUdyb3VwKSB7XG4gICAgcm9vdFByb3BlcnR5LnJlc2V0KG51bGwsIHRydWUpO1xuICAgIHJvb3RQcm9wZXJ0eS5fYmluZFZpc2liaWxpdHkoKTtcbiAgfVxufVxuIl19