/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as ZSchema from 'z-schema';
/**
 * @abstract
 */
var /**
 * @abstract
 */
SchemaValidatorFactory = /** @class */ (function () {
    function SchemaValidatorFactory() {
    }
    return SchemaValidatorFactory;
}());
/**
 * @abstract
 */
export { SchemaValidatorFactory };
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
var ZSchemaValidatorFactory = /** @class */ (function (_super) {
    tslib_1.__extends(ZSchemaValidatorFactory, _super);
    function ZSchemaValidatorFactory() {
        var _this = _super.call(this) || this;
        _this.zschema = new ZSchema({
            breakOnFirstError: false
        });
        return _this;
    }
    /**
     * @param {?} schema
     * @return {?}
     */
    ZSchemaValidatorFactory.prototype.createValidatorFn = /**
     * @param {?} schema
     * @return {?}
     */
    function (schema) {
        var _this = this;
        return function (value) {
            if (schema.type === 'number' || schema.type === 'integer') {
                value = +value;
            }
            _this.zschema.validate(value, schema);
            var /** @type {?} */ err = _this.zschema.getLastErrors();
            _this.denormalizeRequiredPropertyPaths(err);
            return err || null;
        };
    };
    /**
     * @param {?} schema
     * @param {?} ref
     * @return {?}
     */
    ZSchemaValidatorFactory.prototype.getSchema = /**
     * @param {?} schema
     * @param {?} ref
     * @return {?}
     */
    function (schema, ref) {
        // check definitions are valid
        var /** @type {?} */ isValid = this.zschema.compileSchema(schema);
        if (isValid) {
            return this.getDefinition(schema, ref);
        }
        else {
            throw this.zschema.getLastError();
        }
    };
    /**
     * @param {?} err
     * @return {?}
     */
    ZSchemaValidatorFactory.prototype.denormalizeRequiredPropertyPaths = /**
     * @param {?} err
     * @return {?}
     */
    function (err) {
        if (err && err.length) {
            err = err.map(function (error) {
                if (error.path === '#/' && error.code === 'OBJECT_MISSING_REQUIRED_PROPERTY') {
                    error.path = "" + error.path + error.params[0];
                }
                return error;
            });
        }
    };
    /**
     * @param {?} schema
     * @param {?} ref
     * @return {?}
     */
    ZSchemaValidatorFactory.prototype.getDefinition = /**
     * @param {?} schema
     * @param {?} ref
     * @return {?}
     */
    function (schema, ref) {
        var /** @type {?} */ foundSchema = schema;
        ref.split('/').slice(1).forEach(function (ptr) {
            if (ptr) {
                foundSchema = foundSchema[ptr];
            }
        });
        return foundSchema;
    };
    return ZSchemaValidatorFactory;
}(SchemaValidatorFactory));
export { ZSchemaValidatorFactory };
function ZSchemaValidatorFactory_tsickle_Closure_declarations() {
    /** @type {?} */
    ZSchemaValidatorFactory.prototype.zschema;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hdmFsaWRhdG9yZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zY2hlbWEtZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9zY2hlbWF2YWxpZGF0b3JmYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLENBQUM7Ozs7QUFFcEM7OztBQUFBOzs7aUNBRkE7SUFNQyxDQUFBOzs7O0FBSkQsa0NBSUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxJQUFBO0lBQTZDLG1EQUFzQjtJQUlqRTtRQUFBLFlBQ0UsaUJBQU8sU0FJUjtRQUhDLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUM7WUFDdkIsaUJBQWlCLEVBQUUsS0FBSztTQUMzQixDQUFDLENBQUM7O0tBQ0o7Ozs7O0lBRUQsbURBQWlCOzs7O0lBQWpCLFVBQWtCLE1BQVc7UUFBN0IsaUJBY0M7UUFiQyxNQUFNLENBQUMsVUFBQyxLQUFLO1lBRVgsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxRQUFRLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUMxRCxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUM7YUFDaEI7WUFFRCxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDckMscUJBQUksR0FBRyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7WUFFdkMsS0FBSSxDQUFDLGdDQUFnQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRTNDLE1BQU0sQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDO1NBQ3BCLENBQUM7S0FDSDs7Ozs7O0lBRUQsMkNBQVM7Ozs7O0lBQVQsVUFBVSxNQUFXLEVBQUUsR0FBVzs7UUFFaEMscUJBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDeEM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNuQztLQUNGOzs7OztJQUVPLGtFQUFnQzs7OztjQUFDLEdBQVU7UUFDakQsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQUEsS0FBSztnQkFDakIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7b0JBQzdFLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBRyxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFHLENBQUM7aUJBQ2hEO2dCQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7YUFDZCxDQUFDLENBQUM7U0FDSjs7Ozs7OztJQUdLLCtDQUFhOzs7OztjQUFDLE1BQVcsRUFBRSxHQUFXO1FBQzVDLHFCQUFJLFdBQVcsR0FBRyxNQUFNLENBQUM7UUFDekIsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRztZQUNqQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNSLFdBQVcsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDaEM7U0FDRixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsV0FBVyxDQUFDOztrQ0EvRHZCO0VBUTZDLHNCQUFzQixFQXlEbEUsQ0FBQTtBQXpERCxtQ0F5REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBaU2NoZW1hIGZyb20gJ3otc2NoZW1hJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNjaGVtYVZhbGlkYXRvckZhY3Rvcnkge1xuICBhYnN0cmFjdCBjcmVhdGVWYWxpZGF0b3JGbihzY2hlbWEpOiAodmFsdWU6IGFueSkgPT4gYW55O1xuXG4gIGFic3RyYWN0IGdldFNjaGVtYShzY2hlbWEsIHJlZik6IGFueTtcbn1cblxuZXhwb3J0IGNsYXNzIFpTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IGV4dGVuZHMgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB7XG5cbiAgcHJvdGVjdGVkIHpzY2hlbWE7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnpzY2hlbWEgPSBuZXcgWlNjaGVtYSh7XG4gICAgICAgIGJyZWFrT25GaXJzdEVycm9yOiBmYWxzZVxuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlVmFsaWRhdG9yRm4oc2NoZW1hOiBhbnkpIHtcbiAgICByZXR1cm4gKHZhbHVlKTogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0gPT4ge1xuXG4gICAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdudW1iZXInIHx8IHNjaGVtYS50eXBlID09PSAnaW50ZWdlcicpIHtcbiAgICAgICAgdmFsdWUgPSArdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuenNjaGVtYS52YWxpZGF0ZSh2YWx1ZSwgc2NoZW1hKTtcbiAgICAgIGxldCBlcnIgPSB0aGlzLnpzY2hlbWEuZ2V0TGFzdEVycm9ycygpO1xuXG4gICAgICB0aGlzLmRlbm9ybWFsaXplUmVxdWlyZWRQcm9wZXJ0eVBhdGhzKGVycik7XG5cbiAgICAgIHJldHVybiBlcnIgfHwgbnVsbDtcbiAgICB9O1xuICB9XG5cbiAgZ2V0U2NoZW1hKHNjaGVtYTogYW55LCByZWY6IHN0cmluZykge1xuICAgIC8vIGNoZWNrIGRlZmluaXRpb25zIGFyZSB2YWxpZFxuICAgIGNvbnN0IGlzVmFsaWQgPSB0aGlzLnpzY2hlbWEuY29tcGlsZVNjaGVtYShzY2hlbWEpO1xuICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXREZWZpbml0aW9uKHNjaGVtYSwgcmVmKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgdGhpcy56c2NoZW1hLmdldExhc3RFcnJvcigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZGVub3JtYWxpemVSZXF1aXJlZFByb3BlcnR5UGF0aHMoZXJyOiBhbnlbXSkge1xuICAgIGlmIChlcnIgJiYgZXJyLmxlbmd0aCkge1xuICAgICAgZXJyID0gZXJyLm1hcChlcnJvciA9PiB7XG4gICAgICAgIGlmIChlcnJvci5wYXRoID09PSAnIy8nICYmIGVycm9yLmNvZGUgPT09ICdPQkpFQ1RfTUlTU0lOR19SRVFVSVJFRF9QUk9QRVJUWScpIHtcbiAgICAgICAgICBlcnJvci5wYXRoID0gYCR7ZXJyb3IucGF0aH0ke2Vycm9yLnBhcmFtc1swXX1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGVmaW5pdGlvbihzY2hlbWE6IGFueSwgcmVmOiBzdHJpbmcpIHtcbiAgICBsZXQgZm91bmRTY2hlbWEgPSBzY2hlbWE7XG4gICAgcmVmLnNwbGl0KCcvJykuc2xpY2UoMSkuZm9yRWFjaChwdHIgPT4ge1xuICAgICAgaWYgKHB0cikge1xuICAgICAgICBmb3VuZFNjaGVtYSA9IGZvdW5kU2NoZW1hW3B0cl07XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZvdW5kU2NoZW1hO1xuICB9XG59XG5cbiJdfQ==