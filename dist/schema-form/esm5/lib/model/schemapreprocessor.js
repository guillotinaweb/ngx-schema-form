/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { isBlank } from './utils';
/**
 * @param {?} message
 * @param {?} path
 * @return {?}
 */
function formatMessage(message, path) {
    return "Parsing error on " + path + ": " + message;
}
/**
 * @param {?} message
 * @param {?} path
 * @return {?}
 */
function schemaError(message, path) {
    var /** @type {?} */ mesg = formatMessage(message, path);
    throw new Error(mesg);
}
/**
 * @param {?} message
 * @param {?} path
 * @return {?}
 */
function schemaWarning(message, path) {
    var /** @type {?} */ mesg = formatMessage(message, path);
    throw new Error(mesg);
}
var SchemaPreprocessor = /** @class */ (function () {
    function SchemaPreprocessor() {
    }
    /**
     * @param {?} jsonSchema
     * @param {?=} path
     * @return {?}
     */
    SchemaPreprocessor.preprocess = /**
     * @param {?} jsonSchema
     * @param {?=} path
     * @return {?}
     */
    function (jsonSchema, path) {
        if (path === void 0) { path = '/'; }
        jsonSchema = jsonSchema || {};
        SchemaPreprocessor.normalizeExtensions(jsonSchema);
        if (jsonSchema.type === 'object') {
            SchemaPreprocessor.checkProperties(jsonSchema, path);
            SchemaPreprocessor.checkAndCreateFieldsets(jsonSchema, path);
        }
        else if (jsonSchema.type === 'array') {
            SchemaPreprocessor.checkItems(jsonSchema, path);
        }
        SchemaPreprocessor.normalizeWidget(jsonSchema);
        SchemaPreprocessor.recursiveCheck(jsonSchema, path);
    };
    /**
     * @param {?} jsonSchema
     * @param {?} path
     * @return {?}
     */
    SchemaPreprocessor.checkProperties = /**
     * @param {?} jsonSchema
     * @param {?} path
     * @return {?}
     */
    function (jsonSchema, path) {
        if (isBlank(jsonSchema.properties)) {
            jsonSchema.properties = {};
            schemaWarning('Provided json schema does not contain a \'properties\' entry. Output schema will be empty', path);
        }
    };
    /**
     * @param {?} jsonSchema
     * @param {?} path
     * @return {?}
     */
    SchemaPreprocessor.checkAndCreateFieldsets = /**
     * @param {?} jsonSchema
     * @param {?} path
     * @return {?}
     */
    function (jsonSchema, path) {
        if (jsonSchema.fieldsets === undefined) {
            if (jsonSchema.order !== undefined) {
                SchemaPreprocessor.replaceOrderByFieldsets(jsonSchema);
            }
            else {
                SchemaPreprocessor.createFieldsets(jsonSchema);
            }
        }
        SchemaPreprocessor.checkFieldsUsage(jsonSchema, path);
    };
    /**
     * @param {?} jsonSchema
     * @param {?} path
     * @return {?}
     */
    SchemaPreprocessor.checkFieldsUsage = /**
     * @param {?} jsonSchema
     * @param {?} path
     * @return {?}
     */
    function (jsonSchema, path) {
        var /** @type {?} */ fieldsId = Object.keys(jsonSchema.properties);
        var /** @type {?} */ usedFields = {};
        try {
            for (var _a = tslib_1.__values(jsonSchema.fieldsets), _b = _a.next(); !_b.done; _b = _a.next()) {
                var fieldset = _b.value;
                try {
                    for (var _c = tslib_1.__values(fieldset.fields), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var fieldId = _d.value;
                        if (usedFields[fieldId] === undefined) {
                            usedFields[fieldId] = [];
                        }
                        usedFields[fieldId].push(fieldset.id);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_e = _c.return)) _e.call(_c);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_f = _a.return)) _f.call(_a);
            }
            finally { if (e_2) throw e_2.error; }
        }
        try {
            for (var fieldsId_1 = tslib_1.__values(fieldsId), fieldsId_1_1 = fieldsId_1.next(); !fieldsId_1_1.done; fieldsId_1_1 = fieldsId_1.next()) {
                var fieldId = fieldsId_1_1.value;
                if (usedFields.hasOwnProperty(fieldId)) {
                    if (usedFields[fieldId].length > 1) {
                        schemaError(fieldId + " is referenced by more than one fieldset: " + usedFields[fieldId], path);
                    }
                    delete usedFields[fieldId];
                }
                else if (jsonSchema.required.indexOf(fieldId) > -1) {
                    schemaError(fieldId + " is a required field but it is not referenced as part of a 'order' or a 'fieldset' property", path);
                }
                else {
                    delete jsonSchema[fieldId];
                    schemaWarning("Removing unreferenced field " + fieldId, path);
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (fieldsId_1_1 && !fieldsId_1_1.done && (_g = fieldsId_1.return)) _g.call(fieldsId_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        for (var /** @type {?} */ remainingfieldsId in usedFields) {
            if (usedFields.hasOwnProperty(remainingfieldsId)) {
                schemaWarning("Referencing non-existent field " + remainingfieldsId + " in one or more fieldsets", path);
            }
        }
        var e_2, _f, e_1, _e, e_3, _g;
    };
    /**
     * @param {?} jsonSchema
     * @return {?}
     */
    SchemaPreprocessor.createFieldsets = /**
     * @param {?} jsonSchema
     * @return {?}
     */
    function (jsonSchema) {
        jsonSchema.order = Object.keys(jsonSchema.properties);
        SchemaPreprocessor.replaceOrderByFieldsets(jsonSchema);
    };
    /**
     * @param {?} jsonSchema
     * @return {?}
     */
    SchemaPreprocessor.replaceOrderByFieldsets = /**
     * @param {?} jsonSchema
     * @return {?}
     */
    function (jsonSchema) {
        jsonSchema.fieldsets = [{
                id: 'fieldset-default',
                title: jsonSchema.title || '',
                description: jsonSchema.description || '',
                name: jsonSchema.name || '',
                fields: jsonSchema.order
            }];
        delete jsonSchema.order;
    };
    /**
     * @param {?} fieldSchema
     * @return {?}
     */
    SchemaPreprocessor.normalizeWidget = /**
     * @param {?} fieldSchema
     * @return {?}
     */
    function (fieldSchema) {
        var /** @type {?} */ widget = fieldSchema.widget;
        if (widget === undefined) {
            widget = { 'id': fieldSchema.type };
        }
        else if (typeof widget === 'string') {
            widget = { 'id': widget };
        }
        fieldSchema.widget = widget;
    };
    /**
     * @param {?} jsonSchema
     * @param {?} path
     * @return {?}
     */
    SchemaPreprocessor.checkItems = /**
     * @param {?} jsonSchema
     * @param {?} path
     * @return {?}
     */
    function (jsonSchema, path) {
        if (jsonSchema.items === undefined) {
            schemaError('No \'items\' property in array', path);
        }
    };
    /**
     * @param {?} jsonSchema
     * @param {?} path
     * @return {?}
     */
    SchemaPreprocessor.recursiveCheck = /**
     * @param {?} jsonSchema
     * @param {?} path
     * @return {?}
     */
    function (jsonSchema, path) {
        if (jsonSchema.type === 'object') {
            for (var /** @type {?} */ fieldId in jsonSchema.properties) {
                if (jsonSchema.properties.hasOwnProperty(fieldId)) {
                    var /** @type {?} */ fieldSchema = jsonSchema.properties[fieldId];
                    SchemaPreprocessor.preprocess(fieldSchema, path + fieldId + '/');
                }
            }
            if (jsonSchema.hasOwnProperty('definitions')) {
                for (var /** @type {?} */ fieldId in jsonSchema.definitions) {
                    if (jsonSchema.definitions.hasOwnProperty(fieldId)) {
                        var /** @type {?} */ fieldSchema = jsonSchema.definitions[fieldId];
                        SchemaPreprocessor.removeRecursiveRefProperties(fieldSchema, "#/definitions/" + fieldId);
                        SchemaPreprocessor.preprocess(fieldSchema, path + fieldId + '/');
                    }
                }
            }
        }
        else if (jsonSchema.type === 'array') {
            SchemaPreprocessor.preprocess(jsonSchema.items, path + '*/');
        }
    };
    /**
     * @param {?} jsonSchema
     * @param {?} definitionPath
     * @return {?}
     */
    SchemaPreprocessor.removeRecursiveRefProperties = /**
     * @param {?} jsonSchema
     * @param {?} definitionPath
     * @return {?}
     */
    function (jsonSchema, definitionPath) {
        // to avoid infinite loop
        if (jsonSchema.type === 'object') {
            for (var /** @type {?} */ fieldId in jsonSchema.properties) {
                if (jsonSchema.properties.hasOwnProperty(fieldId)) {
                    if (jsonSchema.properties[fieldId].$ref
                        && jsonSchema.properties[fieldId].$ref === definitionPath) {
                        delete jsonSchema.properties[fieldId];
                    }
                    else if (jsonSchema.properties[fieldId].type === 'object') {
                        SchemaPreprocessor.removeRecursiveRefProperties(jsonSchema.properties[fieldId], definitionPath);
                    }
                }
            }
        }
    };
    /**
     * Enables alias names for JSON schema extensions.
     *
     * Copies the value of each alias JSON schema property
     * to the JSON schema property of ngx-schema-form.
     *
     * @param {?} schema JSON schema to enable alias names.
     * @return {?}
     */
    SchemaPreprocessor.normalizeExtensions = /**
     * Enables alias names for JSON schema extensions.
     *
     * Copies the value of each alias JSON schema property
     * to the JSON schema property of ngx-schema-form.
     *
     * @param {?} schema JSON schema to enable alias names.
     * @return {?}
     */
    function (schema) {
        var /** @type {?} */ extensions = [
            { name: "fieldsets", regex: /^x-?field-?sets$/i },
            { name: "widget", regex: /^x-?widget$/i },
            { name: "visibleIf", regex: /^x-?visible-?if$/i }
        ];
        var /** @type {?} */ keys = Object.keys(schema);
        var _loop_1 = function (i) {
            var /** @type {?} */ k = keys[i];
            var /** @type {?} */ e = extensions.find(function (e) { return !!k.match(e.regex); });
            if (e) {
                var /** @type {?} */ v = schema[k];
                var /** @type {?} */ copy = JSON.parse(JSON.stringify(v));
                schema[e.name] = copy;
            }
        };
        for (var /** @type {?} */ i = 0; i < keys.length; ++i) {
            _loop_1(i);
        }
    };
    return SchemaPreprocessor;
}());
export { SchemaPreprocessor };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hcHJlcHJvY2Vzc29yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNjaGVtYS1mb3JtLyIsInNvdXJjZXMiOlsibGliL21vZGVsL3NjaGVtYXByZXByb2Nlc3Nvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxTQUFTLENBQUM7Ozs7OztBQUVoQyx1QkFBdUIsT0FBTyxFQUFFLElBQUk7SUFDbEMsTUFBTSxDQUFDLHNCQUFvQixJQUFJLFVBQUssT0FBUyxDQUFDO0NBQy9DOzs7Ozs7QUFFRCxxQkFBcUIsT0FBTyxFQUFFLElBQUk7SUFDaEMscUJBQUksSUFBSSxHQUFHLGFBQWEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztDQUN2Qjs7Ozs7O0FBRUQsdUJBQXVCLE9BQU8sRUFBRSxJQUFJO0lBQ2xDLHFCQUFJLElBQUksR0FBRyxhQUFhLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hDLE1BQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Q0FDdkI7QUFFRCxJQUFBOzs7Ozs7OztJQUVTLDZCQUFVOzs7OztJQUFqQixVQUFrQixVQUFlLEVBQUUsSUFBVTtRQUFWLHFCQUFBLEVBQUEsVUFBVTtRQUMzQyxVQUFVLEdBQUcsVUFBVSxJQUFJLEVBQUUsQ0FBQztRQUM5QixrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuRCxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDakMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNyRCxrQkFBa0IsQ0FBQyx1QkFBdUIsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDOUQ7UUFBQyxJQUFJLENBQUMs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RSxFQUFFLENBQUM7b0JBQTNCLENBQUM7U0FRVDs7NkJBL0tMO0lBaUxDLENBQUE7QUFqS0QsOEJBaUtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpc0JsYW5rfSBmcm9tICcuL3V0aWxzJztcblxuZnVuY3Rpb24gZm9ybWF0TWVzc2FnZShtZXNzYWdlLCBwYXRoKSB7XG4gIHJldHVybiBgUGFyc2luZyBlcnJvciBvbiAke3BhdGh9OiAke21lc3NhZ2V9YDtcbn1cblxuZnVuY3Rpb24gc2NoZW1hRXJyb3IobWVzc2FnZSwgcGF0aCk6IHZvaWQge1xuICBsZXQgbWVzZyA9IGZvcm1hdE1lc3NhZ2UobWVzc2FnZSwgcGF0aCk7XG4gIHRocm93IG5ldyBFcnJvcihtZXNnKTtcbn1cblxuZnVuY3Rpb24gc2NoZW1hV2FybmluZyhtZXNzYWdlLCBwYXRoKTogdm9pZCB7XG4gIGxldCBtZXNnID0gZm9ybWF0TWVzc2FnZShtZXNzYWdlLCBwYXRoKTtcbiAgdGhyb3cgbmV3IEVycm9yKG1lc2cpO1xufVxuXG5leHBvcnQgY2xhc3MgU2NoZW1hUHJlcHJvY2Vzc29yIHtcblxuICBzdGF0aWMgcHJlcHJvY2Vzcyhqc29uU2NoZW1hOiBhbnksIHBhdGggPSAnLycpOiBhbnkge1xuICAgIGpzb25TY2hlbWEgPSBqc29uU2NoZW1hIHx8IHt9O1xuICAgIFNjaGVtYVByZXByb2Nlc3Nvci5ub3JtYWxpemVFeHRlbnNpb25zKGpzb25TY2hlbWEpO1xuICAgIGlmIChqc29uU2NoZW1hLnR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBTY2hlbWFQcmVwcm9jZXNzb3IuY2hlY2tQcm9wZXJ0aWVzKGpzb25TY2hlbWEsIHBhdGgpO1xuICAgICAgU2NoZW1hUHJlcHJvY2Vzc29yLmNoZWNrQW5kQ3JlYXRlRmllbGRzZXRzKGpzb25TY2hlbWEsIHBhdGgpO1xuICAgIH0gZWxzZSBpZiAoanNvblNjaGVtYS50eXBlID09PSAnYXJyYXknKSB7XG4gICAgICBTY2hlbWFQcmVwcm9jZXNzb3IuY2hlY2tJdGVtcyhqc29uU2NoZW1hLCBwYXRoKTtcbiAgICB9XG4gICAgU2NoZW1hUHJlcHJvY2Vzc29yLm5vcm1hbGl6ZVdpZGdldChqc29uU2NoZW1hKTtcbiAgICBTY2hlbWFQcmVwcm9jZXNzb3IucmVjdXJzaXZlQ2hlY2soanNvblNjaGVtYSwgcGF0aCk7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBjaGVja1Byb3BlcnRpZXMoanNvblNjaGVtYSwgcGF0aDogc3RyaW5nKSB7XG4gICAgaWYgKGlzQmxhbmsoanNvblNjaGVtYS5wcm9wZXJ0aWVzKSkge1xuICAgICAganNvblNjaGVtYS5wcm9wZXJ0aWVzID0ge307XG4gICAgICBzY2hlbWFXYXJuaW5nKCdQcm92aWRlZCBqc29uIHNjaGVtYSBkb2VzIG5vdCBjb250YWluIGEgXFwncHJvcGVydGllc1xcJyBlbnRyeS4gT3V0cHV0IHNjaGVtYSB3aWxsIGJlIGVtcHR5JywgcGF0aCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgY2hlY2tBbmRDcmVhdGVGaWVsZHNldHMoanNvblNjaGVtYTogYW55LCBwYXRoOiBzdHJpbmcpIHtcbiAgICBpZiAoanNvblNjaGVtYS5maWVsZHNldHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGpzb25TY2hlbWEub3JkZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBTY2hlbWFQcmVwcm9jZXNzb3IucmVwbGFjZU9yZGVyQnlGaWVsZHNldHMoanNvblNjaGVtYSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBTY2hlbWFQcmVwcm9jZXNzb3IuY3JlYXRlRmllbGRzZXRzKGpzb25TY2hlbWEpO1xuICAgICAgfVxuICAgIH1cbiAgICBTY2hlbWFQcmVwcm9jZXNzb3IuY2hlY2tGaWVsZHNVc2FnZShqc29uU2NoZW1hLCBwYXRoKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGNoZWNrRmllbGRzVXNhZ2UoanNvblNjaGVtYSwgcGF0aDogc3RyaW5nKSB7XG4gICAgbGV0IGZpZWxkc0lkOiBzdHJpbmdbXSA9IE9iamVjdC5rZXlzKGpzb25TY2hlbWEucHJvcGVydGllcyk7XG4gICAgbGV0IHVzZWRGaWVsZHMgPSB7fTtcbiAgICBmb3IgKGxldCBmaWVsZHNldCBvZiBqc29uU2NoZW1hLmZpZWxkc2V0cykge1xuICAgICAgZm9yIChsZXQgZmllbGRJZCBvZiBmaWVsZHNldC5maWVsZHMpIHtcbiAgICAgICAgaWYgKHVzZWRGaWVsZHNbZmllbGRJZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHVzZWRGaWVsZHNbZmllbGRJZF0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB1c2VkRmllbGRzW2ZpZWxkSWRdLnB1c2goZmllbGRzZXQuaWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGZpZWxkSWQgb2YgZmllbGRzSWQpIHtcbiAgICAgIGlmICh1c2VkRmllbGRzLmhhc093blByb3BlcnR5KGZpZWxkSWQpKSB7XG4gICAgICAgIGlmICh1c2VkRmllbGRzW2ZpZWxkSWRdLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBzY2hlbWFFcnJvcihgJHtmaWVsZElkfSBpcyByZWZlcmVuY2VkIGJ5IG1vcmUgdGhhbiBvbmUgZmllbGRzZXQ6ICR7dXNlZEZpZWxkc1tmaWVsZElkXX1gLCBwYXRoKTtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgdXNlZEZpZWxkc1tmaWVsZElkXTtcbiAgICAgIH0gZWxzZSBpZiAoanNvblNjaGVtYS5yZXF1aXJlZC5pbmRleE9mKGZpZWxkSWQpID4gLTEpIHtcbiAgICAgICAgc2NoZW1hRXJyb3IoYCR7ZmllbGRJZH0gaXMgYSByZXF1aXJlZCBmaWVsZCBidXQgaXQgaXMgbm90IHJlZmVyZW5jZWQgYXMgcGFydCBvZiBhICdvcmRlcicgb3IgYSAnZmllbGRzZXQnIHByb3BlcnR5YCwgcGF0aCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWxldGUganNvblNjaGVtYVtmaWVsZElkXTtcbiAgICAgICAgc2NoZW1hV2FybmluZyhgUmVtb3ZpbmcgdW5yZWZlcmVuY2VkIGZpZWxkICR7ZmllbGRJZH1gLCBwYXRoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCByZW1haW5pbmdmaWVsZHNJZCBpbiB1c2VkRmllbGRzKSB7XG4gICAgICBpZiAodXNlZEZpZWxkcy5oYXNPd25Qcm9wZXJ0eShyZW1haW5pbmdmaWVsZHNJZCkpIHtcbiAgICAgICAgc2NoZW1hV2FybmluZyhgUmVmZXJlbmNpbmcgbm9uLWV4aXN0ZW50IGZpZWxkICR7cmVtYWluaW5nZmllbGRzSWR9IGluIG9uZSBvciBtb3JlIGZpZWxkc2V0c2AsIHBhdGgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGNyZWF0ZUZpZWxkc2V0cyhqc29uU2NoZW1hKSB7XG4gICAganNvblNjaGVtYS5vcmRlciA9IE9iamVjdC5rZXlzKGpzb25TY2hlbWEucHJvcGVydGllcyk7XG4gICAgU2NoZW1hUHJlcHJvY2Vzc29yLnJlcGxhY2VPcmRlckJ5RmllbGRzZXRzKGpzb25TY2hlbWEpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgcmVwbGFjZU9yZGVyQnlGaWVsZHNldHMoanNvblNjaGVtYSkge1xuICAgIGpzb25TY2hlbWEuZmllbGRzZXRzID0gW3tcbiAgICAgIGlkOiAnZmllbGRzZXQtZGVmYXVsdCcsXG4gICAgICB0aXRsZToganNvblNjaGVtYS50aXRsZSB8fCAnJyxcbiAgICAgIGRlc2NyaXB0aW9uOiBqc29uU2NoZW1hLmRlc2NyaXB0aW9uIHx8ICcnLFxuICAgICAgbmFtZToganNvblNjaGVtYS5uYW1lIHx8ICcnLFxuICAgICAgZmllbGRzOiBqc29uU2NoZW1hLm9yZGVyXG4gICAgfV07XG4gICAgZGVsZXRlIGpzb25TY2hlbWEub3JkZXI7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBub3JtYWxpemVXaWRnZXQoZmllbGRTY2hlbWE6IGFueSkge1xuICAgIGxldCB3aWRnZXQgPSBmaWVsZFNjaGVtYS53aWRnZXQ7XG4gICAgaWYgKHdpZGdldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB3aWRnZXQgPSB7J2lkJzogZmllbGRTY2hlbWEudHlwZX07XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygd2lkZ2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgd2lkZ2V0ID0geydpZCc6IHdpZGdldH07XG4gICAgfVxuICAgIGZpZWxkU2NoZW1hLndpZGdldCA9IHdpZGdldDtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGNoZWNrSXRlbXMoanNvblNjaGVtYSwgcGF0aCkge1xuICAgIGlmIChqc29uU2NoZW1hLml0ZW1zID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNjaGVtYUVycm9yKCdObyBcXCdpdGVtc1xcJyBwcm9wZXJ0eSBpbiBhcnJheScsIHBhdGgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIHJlY3Vyc2l2ZUNoZWNrKGpzb25TY2hlbWEsIHBhdGg6IHN0cmluZykge1xuICAgIGlmIChqc29uU2NoZW1hLnR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBmb3IgKGxldCBmaWVsZElkIGluIGpzb25TY2hlbWEucHJvcGVydGllcykge1xuICAgICAgICBpZiAoanNvblNjaGVtYS5wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KGZpZWxkSWQpKSB7XG4gICAgICAgICAgbGV0IGZpZWxkU2NoZW1hID0ganNvblNjaGVtYS5wcm9wZXJ0aWVzW2ZpZWxkSWRdO1xuICAgICAgICAgIFNjaGVtYVByZXByb2Nlc3Nvci5wcmVwcm9jZXNzKGZpZWxkU2NoZW1hLCBwYXRoICsgZmllbGRJZCArICcvJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChqc29uU2NoZW1hLmhhc093blByb3BlcnR5KCdkZWZpbml0aW9ucycpKSB7XG4gICAgICAgIGZvciAobGV0IGZpZWxkSWQgaW4ganNvblNjaGVtYS5kZWZpbml0aW9ucykge1xuICAgICAgICAgIGlmIChqc29uU2NoZW1hLmRlZmluaXRpb25zLmhhc093blByb3BlcnR5KGZpZWxkSWQpKSB7XG4gICAgICAgICAgICBsZXQgZmllbGRTY2hlbWEgPSBqc29uU2NoZW1hLmRlZmluaXRpb25zW2ZpZWxkSWRdO1xuICAgICAgICAgICAgU2NoZW1hUHJlcHJvY2Vzc29yLnJlbW92ZVJlY3Vyc2l2ZVJlZlByb3BlcnRpZXMoZmllbGRTY2hlbWEsIGAjL2RlZmluaXRpb25zLyR7ZmllbGRJZH1gKTtcbiAgICAgICAgICAgIFNjaGVtYVByZXByb2Nlc3Nvci5wcmVwcm9jZXNzKGZpZWxkU2NoZW1hLCBwYXRoICsgZmllbGRJZCArICcvJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChqc29uU2NoZW1hLnR5cGUgPT09ICdhcnJheScpIHtcbiAgICAgIFNjaGVtYVByZXByb2Nlc3Nvci5wcmVwcm9jZXNzKGpzb25TY2hlbWEuaXRlbXMsIHBhdGggKyAnKi8nKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyByZW1vdmVSZWN1cnNpdmVSZWZQcm9wZXJ0aWVzKGpzb25TY2hlbWEsIGRlZmluaXRpb25QYXRoKSB7XG4gICAgLy8gdG8gYXZvaWQgaW5maW5pdGUgbG9vcFxuICAgIGlmIChqc29uU2NoZW1hLnR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBmb3IgKGxldCBmaWVsZElkIGluIGpzb25TY2hlbWEucHJvcGVydGllcykge1xuICAgICAgICBpZiAoanNvblNjaGVtYS5wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KGZpZWxkSWQpKSB7XG4gICAgICAgICAgaWYgKGpzb25TY2hlbWEucHJvcGVydGllc1tmaWVsZElkXS4kcmVmXG4gICAgICAgICAgICAmJiBqc29uU2NoZW1hLnByb3BlcnRpZXNbZmllbGRJZF0uJHJlZiA9PT0gZGVmaW5pdGlvblBhdGgpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBqc29uU2NoZW1hLnByb3BlcnRpZXNbZmllbGRJZF07XG4gICAgICAgICAgfSBlbHNlIGlmIChqc29uU2NoZW1hLnByb3BlcnRpZXNbZmllbGRJZF0udHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIFNjaGVtYVByZXByb2Nlc3Nvci5yZW1vdmVSZWN1cnNpdmVSZWZQcm9wZXJ0aWVzKGpzb25TY2hlbWEucHJvcGVydGllc1tmaWVsZElkXSwgZGVmaW5pdGlvblBhdGgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLyoqXG4gICAqIEVuYWJsZXMgYWxpYXMgbmFtZXMgZm9yIEpTT04gc2NoZW1hIGV4dGVuc2lvbnMuXG4gICAqXG4gICAqIENvcGllcyB0aGUgdmFsdWUgb2YgZWFjaCBhbGlhcyBKU09OIHNjaGVtYSBwcm9wZXJ0eVxuICAgKiB0byB0aGUgSlNPTiBzY2hlbWEgcHJvcGVydHkgb2Ygbmd4LXNjaGVtYS1mb3JtLlxuICAgKlxuICAgKiBAcGFyYW0gc2NoZW1hIEpTT04gc2NoZW1hIHRvIGVuYWJsZSBhbGlhcyBuYW1lcy5cbiAgICovXG4gIHByaXZhdGUgc3RhdGljIG5vcm1hbGl6ZUV4dGVuc2lvbnMoc2NoZW1hOiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCBleHRlbnNpb25zID0gW1xuICAgICAgICB7IG5hbWU6IFwiZmllbGRzZXRzXCIsIHJlZ2V4OiAvXngtP2ZpZWxkLT9zZXRzJC9pIH0sXG4gICAgICAgIHsgbmFtZTogXCJ3aWRnZXRcIiwgICAgcmVnZXg6IC9eeC0/d2lkZ2V0JC9pIH0sXG4gICAgICAgIHsgbmFtZTogXCJ2aXNpYmxlSWZcIiwgcmVnZXg6IC9eeC0/dmlzaWJsZS0/aWYkL2kgfVxuICAgIF07XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHNjaGVtYSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICBsZXQgayA9IGtleXNbaV07XG4gICAgICBsZXQgZSA9IGV4dGVuc2lvbnMuZmluZChlID0+ICEhay5tYXRjaChlLnJlZ2V4KSk7XG4gICAgICBpZiAoZSkge1xuICAgICAgICBsZXQgdiA9IHNjaGVtYVtrXTtcbiAgICAgICAgbGV0IGNvcHkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHYpKTtcbiAgICAgICAgc2NoZW1hW2UubmFtZV0gPSBjb3B5O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4iXX0=