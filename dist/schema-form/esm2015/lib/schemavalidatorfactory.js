/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as ZSchema from 'z-schema';
/**
 * @abstract
 */
export class SchemaValidatorFactory {
}
function SchemaValidatorFactory_tsickle_Closure_declarations() {
    /**
     * @abstract
     * @param {?} schema
     * @return {?}
     */
    SchemaValidatorFactory.prototype.createValidatorFn = function (schema) { };
    /**
     * @abstract
     * @param {?} schema
     * @param {?} ref
     * @return {?}
     */
    SchemaValidatorFactory.prototype.getSchema = function (schema, ref) { };
}
export class ZSchemaValidatorFactory extends SchemaValidatorFactory {
    constructor() {
        super();
        this.zschema = new ZSchema({
            breakOnFirstError: false
        });
    }
    /**
     * @param {?} schema
     * @return {?}
     */
    createValidatorFn(schema) {
        return (value) => {
            if (schema.type === 'number' || schema.type === 'integer') {
                value = +value;
            }
            this.zschema.validate(value, schema);
            let /** @type {?} */ err = this.zschema.getLastErrors();
            this.denormalizeRequiredPropertyPaths(err);
            return err || null;
        };
    }
    /**
     * @param {?} schema
     * @param {?} ref
     * @return {?}
     */
    getSchema(schema, ref) {
        // check definitions are valid
        const /** @type {?} */ isValid = this.zschema.compileSchema(schema);
        if (isValid) {
            return this.getDefinition(schema, ref);
        }
        else {
            throw this.zschema.getLastError();
        }
    }
    /**
     * @param {?} err
     * @return {?}
     */
    denormalizeRequiredPropertyPaths(err) {
        if (err && err.length) {
            err = err.map(error => {
                if (error.path === '#/' && error.code === 'OBJECT_MISSING_REQUIRED_PROPERTY') {
                    error.path = `${error.path}${error.params[0]}`;
                }
                return error;
            });
        }
    }
    /**
     * @param {?} schema
     * @param {?} ref
     * @return {?}
     */
    getDefinition(schema, ref) {
        let /** @type {?} */ foundSchema = schema;
        ref.split('/').slice(1).forEach(ptr => {
            if (ptr) {
                foundSchema = foundSchema[ptr];
            }
        });
        return foundSchema;
    }
}
function ZSchemaValidatorFactory_tsickle_Closure_declarations() {
    /** @type {?} */
    ZSchemaValidatorFactory.prototype.zschema;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hdmFsaWRhdG9yZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zY2hlbWEtZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9zY2hlbWF2YWxpZGF0b3JmYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssT0FBTyxNQUFNLFVBQVUsQ0FBQzs7OztBQUVwQyxNQUFNO0NBSUw7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxNQUFNLDhCQUErQixTQUFRLHNCQUFzQjtJQUlqRTtRQUNFLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQztZQUN2QixpQkFBaUIsRUFBRSxLQUFLO1NBQzNCLENBQUMsQ0FBQztLQUNKOzs7OztJQUVELGlCQUFpQixDQUFDLE1BQVc7UUFDM0IsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUE4QixFQUFFO1lBRTNDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssUUFBUSxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDMUQsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDO2FBQ2hCO1lBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3JDLHFCQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBRXZDLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUUzQyxNQUFNLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQztTQUNwQixDQUFDO0tBQ0g7Ozs7OztJQUVELFNBQVMsQ0FBQyxNQUFXLEVBQUUsR0FBVzs7UUFFaEMsdUJBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDeEM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNuQztLQUNGOzs7OztJQUVPLGdDQUFnQyxDQUFDLEdBQVU7UUFDakQsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNwQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLGtDQUFrQyxDQUFDLENBQUMsQ0FBQztvQkFDN0UsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2lCQUNoRDtnQkFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO2FBQ2QsQ0FBQyxDQUFDO1NBQ0o7Ozs7Ozs7SUFHSyxhQUFhLENBQUMsTUFBVyxFQUFFLEdBQVc7UUFDNUMscUJBQUksV0FBVyxHQUFHLE1BQU0sQ0FBQztRQUN6QixHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDcEMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDUixXQUFXLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2hDO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLFdBQVcsQ0FBQzs7Q0FFdEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBaU2NoZW1hIGZyb20gJ3otc2NoZW1hJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNjaGVtYVZhbGlkYXRvckZhY3Rvcnkge1xuICBhYnN0cmFjdCBjcmVhdGVWYWxpZGF0b3JGbihzY2hlbWEpOiAodmFsdWU6IGFueSkgPT4gYW55O1xuXG4gIGFic3RyYWN0IGdldFNjaGVtYShzY2hlbWEsIHJlZik6IGFueTtcbn1cblxuZXhwb3J0IGNsYXNzIFpTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IGV4dGVuZHMgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB7XG5cbiAgcHJvdGVjdGVkIHpzY2hlbWE7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnpzY2hlbWEgPSBuZXcgWlNjaGVtYSh7XG4gICAgICAgIGJyZWFrT25GaXJzdEVycm9yOiBmYWxzZVxuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlVmFsaWRhdG9yRm4oc2NoZW1hOiBhbnkpIHtcbiAgICByZXR1cm4gKHZhbHVlKTogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0gPT4ge1xuXG4gICAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdudW1iZXInIHx8IHNjaGVtYS50eXBlID09PSAnaW50ZWdlcicpIHtcbiAgICAgICAgdmFsdWUgPSArdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuenNjaGVtYS52YWxpZGF0ZSh2YWx1ZSwgc2NoZW1hKTtcbiAgICAgIGxldCBlcnIgPSB0aGlzLnpzY2hlbWEuZ2V0TGFzdEVycm9ycygpO1xuXG4gICAgICB0aGlzLmRlbm9ybWFsaXplUmVxdWlyZWRQcm9wZXJ0eVBhdGhzKGVycik7XG5cbiAgICAgIHJldHVybiBlcnIgfHwgbnVsbDtcbiAgICB9O1xuICB9XG5cbiAgZ2V0U2NoZW1hKHNjaGVtYTogYW55LCByZWY6IHN0cmluZykge1xuICAgIC8vIGNoZWNrIGRlZmluaXRpb25zIGFyZSB2YWxpZFxuICAgIGNvbnN0IGlzVmFsaWQgPSB0aGlzLnpzY2hlbWEuY29tcGlsZVNjaGVtYShzY2hlbWEpO1xuICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXREZWZpbml0aW9uKHNjaGVtYSwgcmVmKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgdGhpcy56c2NoZW1hLmdldExhc3RFcnJvcigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZGVub3JtYWxpemVSZXF1aXJlZFByb3BlcnR5UGF0aHMoZXJyOiBhbnlbXSkge1xuICAgIGlmIChlcnIgJiYgZXJyLmxlbmd0aCkge1xuICAgICAgZXJyID0gZXJyLm1hcChlcnJvciA9PiB7XG4gICAgICAgIGlmIChlcnJvci5wYXRoID09PSAnIy8nICYmIGVycm9yLmNvZGUgPT09ICdPQkpFQ1RfTUlTU0lOR19SRVFVSVJFRF9QUk9QRVJUWScpIHtcbiAgICAgICAgICBlcnJvci5wYXRoID0gYCR7ZXJyb3IucGF0aH0ke2Vycm9yLnBhcmFtc1swXX1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGVmaW5pdGlvbihzY2hlbWE6IGFueSwgcmVmOiBzdHJpbmcpIHtcbiAgICBsZXQgZm91bmRTY2hlbWEgPSBzY2hlbWE7XG4gICAgcmVmLnNwbGl0KCcvJykuc2xpY2UoMSkuZm9yRWFjaChwdHIgPT4ge1xuICAgICAgaWYgKHB0cikge1xuICAgICAgICBmb3VuZFNjaGVtYSA9IGZvdW5kU2NoZW1hW3B0cl07XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZvdW5kU2NoZW1hO1xuICB9XG59XG5cbiJdfQ==