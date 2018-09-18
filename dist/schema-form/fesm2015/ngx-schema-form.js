import { BehaviorSubject, combineLatest, Subject, merge } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';
import * as ZSchema from 'z-schema';
import { ComponentFactoryResolver, Injectable, ChangeDetectorRef, Component, EventEmitter, Input, Output, ElementRef, Renderer2, ViewChild, ViewContainerRef, NgModule, forwardRef, ContentChildren, Directive, SimpleChange } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ActionRegistry {
    constructor() {
        this.actions = {};
    }
    /**
     * @return {?}
     */
    clear() {
        this.actions = {};
    }
    /**
     * @param {?} actionId
     * @param {?} action
     * @return {?}
     */
    register(actionId, action) {
        this.actions[actionId] = action;
    }
    /**
     * @param {?} actionId
     * @return {?}
     */
    get(actionId) {
        return this.actions[actionId];
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
class FormProperty {
    /**
     * @param {?} schemaValidatorFactory
     * @param {?} validatorRegistry
     * @param {?} schema
     * @param {?} parent
     * @param {?} path
     */
    constructor(schemaValidatorFactory, validatorRegistry, schema, parent, path) {
        this.validatorRegistry = validatorRegistry;
        this.schema = schema;
        this._value = null;
        this._errors = null;
        this._valueChanges = new BehaviorSubject(null);
        this._errorsChanges = new BehaviorSubject(null);
        this._visible = true;
        this._visibilityChanges = new BehaviorSubject(true);
        this.schemaValidator = schemaValidatorFactory.createValidatorFn(this.schema);
        this._parent = parent;
        if (parent) {
            this._root = parent.root;
        }
        else if (this instanceof PropertyGroup) {
            this._root = /** @type {?} */ (/** @type {?} */ (this));
        }
        this._path = path;
    }
    /**
     * @return {?}
     */
    get valueChanges() {
        return this._valueChanges;
    }
    /**
     * @return {?}
     */
    get errorsChanges() {
        return this._errorsChanges;
    }
    /**
     * @return {?}
     */
    get type() {
        return this.schema.type;
    }
    /**
     * @return {?}
     */
    get parent() {
        return this._parent;
    }
    /**
     * @return {?}
     */
    get root() {
        return this._root || /** @type {?} */ (/** @type {?} */ (this));
    }
    /**
     * @return {?}
     */
    get path() {
        return this._path;
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @return {?}
     */
    get visible() {
        return this._visible;
    }
    /**
     * @return {?}
     */
    get valid() {
        return this._errors === null;
    }
    /**
     * @param {?=} onlySelf
     * @param {?=} emitEvent
     * @return {?}
     */
    updateValueAndValidity(onlySelf = false, emitEvent = true) {
        this._updateValue();
        if (emitEvent) {
            this.valueChanges.next(this.value);
        }
        this._runValidation();
        if (this.parent && !onlySelf) {
            this.parent.updateValueAndValidity(onlySelf, emitEvent);
        }
    }
    /**
     * \@internal
     * @return {?}
     */
    _runValidation() {
        let /** @type {?} */ errors = this.schemaValidator(this._value) || [];
        let /** @type {?} */ customValidator = this.validatorRegistry.get(this.path);
        if (customValidator) {
            let /** @type {?} */ customErrors = customValidator(this.value, this, this.findRoot());
            errors = this.mergeErrors(errors, customErrors);
        }
        if (errors.length === 0) {
            errors = null;
        }
        this._errors = errors;
        this.setErrors(this._errors);
    }
    /**
     * @param {?} errors
     * @param {?} newErrors
     * @return {?}
     */
    mergeErrors(errors, newErrors) {
        if (newErrors) {
            if (Array.isArray(newErrors)) {
                errors = errors.concat(...newErrors);
            }
            else {
                errors.push(newErrors);
            }
        }
        return errors;
    }
    /**
     * @param {?} errors
     * @return {?}
     */
    setErrors(errors) {
        this._errors = errors;
        this._errorsChanges.next(errors);
    }
    /**
     * @param {?} errors
     * @return {?}
     */
    extendErrors(errors) {
        errors = this.mergeErrors(this._errors || [], errors);
        this.setErrors(errors);
    }
    /**
     * @param {?} path
     * @return {?}
     */
    searchProperty(path) {
        let /** @type {?} */ prop = this;
        let /** @type {?} */ base = null;
        let /** @type {?} */ result = null;
        if (path[0] === '/') {
            base = this.findRoot();
            result = base.getProperty(path.substr(1));
        }
        else {
            while (result === null && prop.parent !== null) {
                prop = base = prop.parent;
                result = base.getProperty(path);
            }
        }
        return result;
    }
    /**
     * @return {?}
     */
    findRoot() {
        let /** @type {?} */ property = this;
        while (property.parent !== null) {
            property = property.parent;
        }
        return /** @type {?} */ (property);
    }
    /**
     * @param {?} visible
     * @return {?}
     */
    setVisible(visible) {
        this._visible = visible;
        this._visibilityChanges.next(visible);
        this.updateValueAndValidity();
        if (this.parent) {
            this.parent.updateValueAndValidity(false, true);
        }
    }
    /**
     * @return {?}
     */
    _bindVisibility() {
        let /** @type {?} */ visibleIf = this.schema.visibleIf;
        if (typeof visibleIf === 'object' && Object.keys(visibleIf).length === 0) {
            this.setVisible(false);
        }
        else if (visibleIf !== undefined) {
            let /** @type {?} */ propertiesBinding = [];
            for (let /** @type {?} */ dependencyPath in visibleIf) {
                if (visibleIf.hasOwnProperty(dependencyPath)) {
                    let /** @type {?} */ property = this.searchProperty(dependencyPath);
                    if (property) {
                        const /** @type {?} */ valueCheck = property.valueChanges.pipe(map(value => {
                            if (visibleIf[dependencyPath].indexOf('$ANY$') !== -1) {
                                return value.length > 0;
                            }
                            else {
                                return visibleIf[dependencyPath].indexOf(value) !== -1;
                            }
                        }));
                        const /** @type {?} */ visibilityCheck = property._visibilityChanges;
                        const /** @type {?} */ and = combineLatest([valueCheck, visibilityCheck], (v1, v2) => v1 && v2);
                        propertiesBinding.push(and);
                    }
                    else {
                        console.warn('Can\'t find property ' + dependencyPath + ' for visibility check of ' + this.path);
                    }
                }
            }
            combineLatest(propertiesBinding, (...values) => {
                return values.indexOf(true) !== -1;
            }).pipe(distinctUntilChanged()).subscribe((visible) => {
                this.setVisible(visible);
            });
        }
    }
}
/**
 * @abstract
 */
class PropertyGroup extends FormProperty {
    constructor() {
        super(...arguments);
        this.properties = null;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    getProperty(path) {
        let /** @type {?} */ subPathIdx = path.indexOf('/');
        let /** @type {?} */ propertyId = subPathIdx !== -1 ? path.substr(0, subPathIdx) : path;
        let /** @type {?} */ property = this.properties[propertyId];
        if (property !== null && subPathIdx !== -1 && property instanceof PropertyGroup) {
            let /** @type {?} */ subPath = path.substr(subPathIdx + 1);
            property = (/** @type {?} */ (property)).getProperty(subPath);
        }
        return property;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    forEachChild(fn) {
        for (let /** @type {?} */ propertyId in this.properties) {
            if (this.properties.hasOwnProperty(propertyId)) {
                let /** @type {?} */ property = this.properties[propertyId];
                fn(property, propertyId);
            }
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    forEachChildRecursive(fn) {
        this.forEachChild((child) => {
            fn(child);
            if (child instanceof PropertyGroup) {
                (/** @type {?} */ (child)).forEachChildRecursive(fn);
            }
        });
    }
    /**
     * @return {?}
     */
    _bindVisibility() {
        super._bindVisibility();
        this._bindVisibilityRecursive();
    }
    /**
     * @return {?}
     */
    _bindVisibilityRecursive() {
        this.forEachChildRecursive((property) => {
            property._bindVisibility();
        });
    }
    /**
     * @return {?}
     */
    isRoot() {
        return this === this.root;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
class AtomicProperty extends FormProperty {
    /**
     * @param {?} value
     * @param {?=} onlySelf
     * @return {?}
     */
    setValue(value, onlySelf = false) {
        this._value = value;
        this.updateValueAndValidity(onlySelf, true);
    }
    /**
     * @param {?=} value
     * @param {?=} onlySelf
     * @return {?}
     */
    reset(value = null, onlySelf = true) {
        this.resetValue(value);
        this.updateValueAndValidity(onlySelf, true);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    resetValue(value) {
        if (value === null) {
            if (this.schema.default !== undefined) {
                value = this.schema.default;
            }
            else {
                value = this.fallbackValue();
            }
        }
        this._value = value;
    }
    /**
     * @return {?}
     */
    _hasValue() {
        return this.fallbackValue() !== this.value;
    }
    /**
     * @return {?}
     */
    _updateValue() {
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NumberProperty extends AtomicProperty {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class StringProperty extends AtomicProperty {
    /**
     * @return {?}
     */
    fallbackValue() {
        return '';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BooleanProperty extends AtomicProperty {
    /**
     * @return {?}
     */
    fallbackValue() {
        return null;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ObjectProperty extends PropertyGroup {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ArrayProperty extends PropertyGroup {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FormPropertyFactory {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} o
 * @return {?}
 */
function isBlank(o) {
    return o === null || o === undefined;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} message
 * @param {?} path
 * @return {?}
 */
function formatMessage(message, path) {
    return `Parsing error on ${path}: ${message}`;
}
/**
 * @param {?} message
 * @param {?} path
 * @return {?}
 */
function schemaError(message, path) {
    let /** @type {?} */ mesg = formatMessage(message, path);
    throw new Error(mesg);
}
/**
 * @param {?} message
 * @param {?} path
 * @return {?}
 */
function schemaWarning(message, path) {
    let /** @type {?} */ mesg = formatMessage(message, path);
    throw new Error(mesg);
}
class SchemaPreprocessor {
    /**
     * @param {?} jsonSchema
     * @param {?=} path
     * @return {?}
     */
    static preprocess(jsonSchema, path = '/') {
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
    }
    /**
     * @param {?} jsonSchema
     * @param {?} path
     * @return {?}
     */
    static checkProperties(jsonSchema, path) {
        if (isBlank(jsonSchema.properties)) {
            jsonSchema.properties = {};
            schemaWarning('Provided json schema does not contain a \'properties\' entry. Output schema will be empty', path);
        }
    }
    /**
     * @param {?} jsonSchema
     * @param {?} path
     * @return {?}
     */
    static checkAndCreateFieldsets(jsonSchema, path) {
        if (jsonSchema.fieldsets === undefined) {
            if (jsonSchema.order !== undefined) {
                SchemaPreprocessor.replaceOrderByFieldsets(jsonSchema);
            }
            else {
                SchemaPreprocessor.createFieldsets(jsonSchema);
            }
        }
        SchemaPreprocessor.checkFieldsUsage(jsonSchema, path);
    }
    /**
     * @param {?} jsonSchema
     * @param {?} path
     * @return {?}
     */
    static checkFieldsUsage(jsonSchema, path) {
        let /** @type {?} */ fieldsId = Object.keys(jsonSchema.properties);
        let /** @type {?} */ usedFields = {};
        for (let /** @type {?} */ fieldset of jsonSchema.fieldsets) {
            for (let /** @type {?} */ fieldId of fieldset.fields) {
                if (usedFields[fieldId] === undefined) {
                    usedFields[fieldId] = [];
                }
                usedFields[fieldId].push(fieldset.id);
            }
        }
        for (let /** @type {?} */ fieldId of fieldsId) {
            if (usedFields.hasOwnProperty(fieldId)) {
                if (usedFields[fieldId].length > 1) {
                    schemaError(`${fieldId} is referenced by more than one fieldset: ${usedFields[fieldId]}`, path);
                }
                delete usedFields[fieldId];
            }
            else if (jsonSchema.required.indexOf(fieldId) > -1) {
                schemaError(`${fieldId} is a required field but it is not referenced as part of a 'order' or a 'fieldset' property`, path);
            }
            else {
                delete jsonSchema[fieldId];
                schemaWarning(`Removing unreferenced field ${fieldId}`, path);
            }
        }
        for (let /** @type {?} */ remainingfieldsId in usedFields) {
            if (usedFields.hasOwnProperty(remainingfieldsId)) {
                schemaWarning(`Referencing non-existent field ${remainingfieldsId} in one or more fieldsets`, path);
            }
        }
    }
    /**
     * @param {?} jsonSchema
     * @return {?}
     */
    static createFieldsets(jsonSchema) {
        jsonSchema.order = Object.keys(jsonSchema.properties);
        SchemaPreprocessor.replaceOrderByFieldsets(jsonSchema);
    }
    /**
     * @param {?} jsonSchema
     * @return {?}
     */
    static replaceOrderByFieldsets(jsonSchema) {
        jsonSchema.fieldsets = [{
                id: 'fieldset-default',
                title: jsonSchema.title || '',
                description: jsonSchema.description || '',
                name: jsonSchema.name || '',
                fields: jsonSchema.order
            }];
        delete jsonSchema.order;
    }
    /**
     * @param {?} fieldSchema
     * @return {?}
     */
    static normalizeWidget(fieldSchema) {
        let /** @type {?} */ widget = fieldSchema.widget;
        if (widget === undefined) {
            widget = { 'id': fieldSchema.type };
        }
        else if (typeof widget === 'string') {
            widget = { 'id': widget };
        }
        fieldSchema.widget = widget;
    }
    /**
     * @param {?} jsonSchema
     * @param {?} path
     * @return {?}
     */
    static checkItems(jsonSchema, path) {
        if (jsonSchema.items === undefined) {
            schemaError('No \'items\' property in array', path);
        }
    }
    /**
     * @param {?} jsonSchema
     * @param {?} path
     * @return {?}
     */
    static recursiveCheck(jsonSchema, path) {
        if (jsonSchema.type === 'object') {
            for (let /** @type {?} */ fieldId in jsonSchema.properties) {
                if (jsonSchema.properties.hasOwnProperty(fieldId)) {
                    let /** @type {?} */ fieldSchema = jsonSchema.properties[fieldId];
                    SchemaPreprocessor.preprocess(fieldSchema, path + fieldId + '/');
                }
            }
            if (jsonSchema.hasOwnProperty('definitions')) {
                for (let /** @type {?} */ fieldId in jsonSchema.definitions) {
                    if (jsonSchema.definitions.hasOwnProperty(fieldId)) {
                        let /** @type {?} */ fieldSchema = jsonSchema.definitions[fieldId];
                        SchemaPreprocessor.removeRecursiveRefProperties(fieldSchema, `#/definitions/${fieldId}`);
                        SchemaPreprocessor.preprocess(fieldSchema, path + fieldId + '/');
                    }
                }
            }
        }
        else if (jsonSchema.type === 'array') {
            SchemaPreprocessor.preprocess(jsonSchema.items, path + '*/');
        }
    }
    /**
     * @param {?} jsonSchema
     * @param {?} definitionPath
     * @return {?}
     */
    static removeRecursiveRefProperties(jsonSchema, definitionPath) {
        // to avoid infinite loop
        if (jsonSchema.type === 'object') {
            for (let /** @type {?} */ fieldId in jsonSchema.properties) {
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
    }
    /**
     * Enables alias names for JSON schema extensions.
     *
     * Copies the value of each alias JSON schema property
     * to the JSON schema property of ngx-schema-form.
     *
     * @param {?} schema JSON schema to enable alias names.
     * @return {?}
     */
    static normalizeExtensions(schema) {
        const /** @type {?} */ extensions = [
            { name: "fieldsets", regex: /^x-?field-?sets$/i },
            { name: "widget", regex: /^x-?widget$/i },
            { name: "visibleIf", regex: /^x-?visible-?if$/i }
        ];
        const /** @type {?} */ keys = Object.keys(schema);
        for (let /** @type {?} */ i = 0; i < keys.length; ++i) {
            let /** @type {?} */ k = keys[i];
            let /** @type {?} */ e = extensions.find(e => !!k.match(e.regex));
            if (e) {
                let /** @type {?} */ v = schema[k];
                let /** @type {?} */ copy = JSON.parse(JSON.stringify(v));
                schema[e.name] = copy;
            }
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ValidatorRegistry {
    constructor() {
        this.validators = [];
    }
    /**
     * @param {?} path
     * @param {?} validator
     * @return {?}
     */
    register(path, validator) {
        this.validators[path] = validator;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    get(path) {
        return this.validators[path];
    }
    /**
     * @return {?}
     */
    clear() {
        this.validators = [];
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BindingRegistry {
    constructor() {
        this.bindings = [];
    }
    /**
     * @return {?}
     */
    clear() {
        this.bindings = [];
    }
    /**
     * @param {?} path
     * @param {?} binding
     * @return {?}
     */
    register(path, binding) {
        this.bindings[path] = [].concat(binding);
    }
    /**
     * @param {?} path
     * @return {?}
     */
    get(path) {
        return this.bindings[path];
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
class SchemaValidatorFactory {
}
class ZSchemaValidatorFactory extends SchemaValidatorFactory {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class WidgetRegistry {
    constructor() {
        this.widgets = {};
    }
    /**
     * @param {?} widget
     * @return {?}
     */
    setDefaultWidget(widget) {
        this.defaultWidget = widget;
    }
    /**
     * @return {?}
     */
    getDefaultWidget() {
        return this.defaultWidget;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    hasWidget(type) {
        return this.widgets.hasOwnProperty(type);
    }
    /**
     * @param {?} type
     * @param {?} widget
     * @return {?}
     */
    register(type, widget) {
        this.widgets[type] = widget;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    getWidgetType(type) {
        if (this.hasWidget(type)) {
            return this.widgets[type];
        }
        return this.defaultWidget;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class WidgetFactory {
    /**
     * @param {?} registry
     * @param {?} resolver
     */
    constructor(registry, resolver) {
        this.registry = registry;
        this.resolver = resolver;
    }
    /**
     * @param {?} container
     * @param {?} type
     * @return {?}
     */
    createWidget(container, type) {
        let /** @type {?} */ componentClass = this.registry.getWidgetType(type);
        let /** @type {?} */ componentFactory = this.resolver.resolveComponentFactory(componentClass);
        return container.createComponent(componentFactory);
    }
}
WidgetFactory.decorators = [
    { type: Injectable },
];
/** @nocollapse */
WidgetFactory.ctorParameters = () => [
    { type: WidgetRegistry, },
    { type: ComponentFactoryResolver, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TerminatorService {
    constructor() {
        this.onDestroy = new Subject();
    }
    /**
     * @return {?}
     */
    destroy() {
        this.onDestroy.next(true);
    }
}
TerminatorService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
TerminatorService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} schemaValidatorFactory
 * @param {?} validatorRegistry
 * @return {?}
 */
function useFactory(schemaValidatorFactory, validatorRegistry) {
    return new FormPropertyFactory(schemaValidatorFactory, validatorRegistry);
}
class FormComponent {
    /**
     * @param {?} formPropertyFactory
     * @param {?} actionRegistry
     * @param {?} validatorRegistry
     * @param {?} bindingRegistry
     * @param {?} cdr
     * @param {?} terminator
     */
    constructor(formPropertyFactory, actionRegistry, validatorRegistry, bindingRegistry, cdr, terminator) {
        this.formPropertyFactory = formPropertyFactory;
        this.actionRegistry = actionRegistry;
        this.validatorRegistry = validatorRegistry;
        this.bindingRegistry = bindingRegistry;
        this.cdr = cdr;
        this.terminator = terminator;
        this.schema = null;
        this.actions = {};
        this.validators = {};
        this.bindings = {};
        this.onChange = new EventEmitter();
        this.modelChange = new EventEmitter();
        this.isValid = new EventEmitter();
        this.onErrorChange = new EventEmitter();
        this.onErrorsChange = new EventEmitter();
        this.rootProperty = null;
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        if (this.rootProperty) {
            this.rootProperty.reset(obj, false);
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeCallback = fn;
        if (this.rootProperty) {
            this.rootProperty.valueChanges.subscribe(this.onValueChanges.bind(this));
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["validators"]) {
            this.setValidators();
        }
        if (changes["actions"]) {
            this.setActions();
        }
        if (changes["bindings"]) {
            this.setBindings();
        }
        if (this.schema && !this.schema.type) {
            this.schema.type = 'object';
        }
        if (this.schema && changes["schema"]) {
            if (!changes["schema"].firstChange) {
                this.terminator.destroy();
            }
            SchemaPreprocessor.preprocess(this.schema);
            this.rootProperty = this.formPropertyFactory.createProperty(this.schema);
            if (this.model) ;
            this.rootProperty.valueChanges.subscribe(this.onValueChanges.bind(this));
            this.rootProperty.errorsChanges.subscribe(value => {
                this.onErrorChange.emit({ value: value });
                this.isValid.emit(!(value && value.length));
            });
        }
        if (this.schema && (changes["model"] || changes["schema"])) {
            this.rootProperty.reset(this.model, false);
            this.cdr.detectChanges();
        }
    }
    /**
     * @return {?}
     */
    setValidators() {
        this.validatorRegistry.clear();
        if (this.validators) {
            for (const /** @type {?} */ validatorId in this.validators) {
                if (this.validators.hasOwnProperty(validatorId)) {
                    this.validatorRegistry.register(validatorId, this.validators[validatorId]);
                }
            }
        }
    }
    /**
     * @return {?}
     */
    setActions() {
        this.actionRegistry.clear();
        if (this.actions) {
            for (const /** @type {?} */ actionId in this.actions) {
                if (this.actions.hasOwnProperty(actionId)) {
                    this.actionRegistry.register(actionId, this.actions[actionId]);
                }
            }
        }
    }
    /**
     * @return {?}
     */
    setBindings() {
        this.bindingRegistry.clear();
        if (this.bindings) {
            for (const /** @type {?} */ bindingPath in this.bindings) {
                if (this.bindings.hasOwnProperty(bindingPath)) {
                    this.bindingRegistry.register(bindingPath, this.bindings[bindingPath]);
                }
            }
        }
    }
    /**
     * @return {?}
     */
    reset() {
        this.rootProperty.reset(null, true);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setModel(value) {
        if (this.model) {
            Object.assign(this.model, value);
        }
        else {
            this.model = value;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onValueChanges(value) {
        if (this.onChangeCallback) {
            this.setModel(value);
            this.onChangeCallback(value);
        }
        // two way binding is used
        if (this.modelChange.observers.length > 0) {
            if (!this.onChangeCallback) {
                this.setModel(value);
            }
            this.modelChange.emit(value);
        }
        this.onChange.emit({ value: value });
    }
}
FormComponent.decorators = [
    { type: Component, args: [{
                selector: 'sf-form',
                template: `
    <form>
      <sf-form-element
        *ngIf="rootProperty" [formProperty]="rootProperty"></sf-form-element>
    </form>`,
                providers: [
                    ActionRegistry,
                    ValidatorRegistry,
                    BindingRegistry,
                    SchemaPreprocessor,
                    WidgetFactory,
                    {
                        provide: FormPropertyFactory,
                        useFactory: useFactory,
                        deps: [SchemaValidatorFactory, ValidatorRegistry]
                    },
                    TerminatorService,
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: FormComponent,
                        multi: true
                    }
                ]
            },] },
];
/** @nocollapse */
FormComponent.ctorParameters = () => [
    { type: FormPropertyFactory, },
    { type: ActionRegistry, },
    { type: ValidatorRegistry, },
    { type: BindingRegistry, },
    { type: ChangeDetectorRef, },
    { type: TerminatorService, },
];
FormComponent.propDecorators = {
    "schema": [{ type: Input },],
    "model": [{ type: Input },],
    "actions": [{ type: Input },],
    "validators": [{ type: Input },],
    "bindings": [{ type: Input },],
    "onChange": [{ type: Output },],
    "modelChange": [{ type: Output },],
    "isValid": [{ type: Output },],
    "onErrorChange": [{ type: Output },],
    "onErrorsChange": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FormElementComponent {
    /**
     * @param {?} actionRegistry
     * @param {?} bindingRegistry
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(actionRegistry, bindingRegistry, renderer, elementRef) {
        this.actionRegistry = actionRegistry;
        this.bindingRegistry = bindingRegistry;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.control = new FormControl('', () => null);
        this.widget = null;
        this.buttons = [];
        this.unlisten = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.parseButtons();
        this.setupBindings();
    }
    /**
     * @return {?}
     */
    setupBindings() {
        const /** @type {?} */ bindings = this.bindingRegistry.get(this.formProperty.path);
        if ((bindings || []).length) {
            bindings.forEach((binding) => {
                for (const /** @type {?} */ eventId in binding) {
                    this.createBinding(eventId, binding[eventId]);
                }
            });
        }
    }
    /**
     * @param {?} eventId
     * @param {?} listener
     * @return {?}
     */
    createBinding(eventId, listener) {
        this.unlisten.push(this.renderer.listen(this.elementRef.nativeElement, eventId, (event) => {
            if (listener instanceof Function) {
                listener(event, this.formProperty);
            }
            else {
                console.warn('Calling non function handler for eventId ' + eventId + ' for path ' + this.formProperty.path);
            }
        }));
    }
    /**
     * @return {?}
     */
    parseButtons() {
        if (this.formProperty.schema.buttons !== undefined) {
            this.buttons = this.formProperty.schema.buttons;
            for (let /** @type {?} */ button of this.buttons) {
                this.createButtonCallback(button);
            }
        }
    }
    /**
     * @param {?} button
     * @return {?}
     */
    createButtonCallback(button) {
        button.action = (e) => {
            let /** @type {?} */ action;
            if (button.id && (action = this.actionRegistry.get(button.id))) {
                if (action) {
                    action(this.formProperty, button.parameters);
                }
            }
            e.preventDefault();
        };
    }
    /**
     * @param {?} widget
     * @return {?}
     */
    onWidgetInstanciated(widget) {
        this.widget = widget;
        let /** @type {?} */ id = 'field' + (FormElementComponent.counter++);
        this.widget.formProperty = this.formProperty;
        this.widget.schema = this.formProperty.schema;
        this.widget.name = id;
        this.widget.id = id;
        this.widget.control = this.control;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.unlisten) {
            this.unlisten.forEach((item) => {
                item();
            });
        }
    }
}
FormElementComponent.counter = 0;
FormElementComponent.decorators = [
    { type: Component, args: [{
                selector: 'sf-form-element',
                template: `
    <div *ngIf="formProperty.visible"
         [class.has-error]="!control.valid"
         [class.has-success]="control.valid">
      <sf-widget-chooser
        (widgetInstanciated)="onWidgetInstanciated($event)"
        [widgetInfo]="formProperty.schema.widget">
      </sf-widget-chooser>
      <sf-form-element-action *ngFor="let button of buttons" [button]="button" [formProperty]="formProperty"></sf-form-element-action>
    </div>`
            },] },
];
/** @nocollapse */
FormElementComponent.ctorParameters = () => [
    { type: ActionRegistry, },
    { type: BindingRegistry, },
    { type: Renderer2, },
    { type: ElementRef, },
];
FormElementComponent.propDecorators = {
    "formProperty": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FormElementComponentAction {
    /**
     * @param {?=} widgetFactory
     * @param {?=} terminator
     */
    constructor(widgetFactory = null, terminator) {
        this.widgetFactory = widgetFactory;
        this.terminator = terminator;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.subs = this.terminator.onDestroy.subscribe(destroy => {
            if (destroy) {
                this.ref.destroy();
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.ref = this.widgetFactory.createWidget(this.container, this.button.widget || 'button');
        this.ref.instance.button = this.button;
        this.ref.instance.formProperty = this.formProperty;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
FormElementComponentAction.decorators = [
    { type: Component, args: [{
                selector: 'sf-form-element-action',
                template: '<ng-template #target></ng-template>'
            },] },
];
/** @nocollapse */
FormElementComponentAction.ctorParameters = () => [
    { type: WidgetFactory, },
    { type: TerminatorService, },
];
FormElementComponentAction.propDecorators = {
    "button": [{ type: Input },],
    "formProperty": [{ type: Input },],
    "container": [{ type: ViewChild, args: ['target', { read: ViewContainerRef },] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class WidgetChooserComponent {
    /**
     * @param {?=} widgetFactory
     * @param {?=} cdr
     * @param {?=} terminator
     */
    constructor(widgetFactory = null, cdr, terminator) {
        this.widgetFactory = widgetFactory;
        this.cdr = cdr;
        this.terminator = terminator;
        this.widgetInstanciated = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.subs = this.terminator.onDestroy.subscribe(destroy => {
            if (destroy) {
                this.ref.destroy();
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.ref = this.widgetFactory.createWidget(this.container, this.widgetInfo.id);
        this.widgetInstanciated.emit(this.ref.instance);
        this.widgetInstance = this.ref.instance;
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
WidgetChooserComponent.decorators = [
    { type: Component, args: [{
                selector: 'sf-widget-chooser',
                template: `<div #target></div>`,
            },] },
];
/** @nocollapse */
WidgetChooserComponent.ctorParameters = () => [
    { type: WidgetFactory, },
    { type: ChangeDetectorRef, },
    { type: TerminatorService, },
];
WidgetChooserComponent.propDecorators = {
    "widgetInfo": [{ type: Input },],
    "widgetInstanciated": [{ type: Output },],
    "container": [{ type: ViewChild, args: ['target', { read: ViewContainerRef },] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// unsupported: template constraints.
/**
 * @abstract
 * @template T
 */
class Widget {
    constructor() {
        this.id = '';
        this.name = '';
        this.schema = {};
    }
}
class ControlWidget extends Widget {
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        const /** @type {?} */ control = this.control;
        this.formProperty.valueChanges.subscribe((newValue) => {
            if (control.value !== newValue) {
                control.setValue(newValue, { emitEvent: false });
            }
        });
        this.formProperty.errorsChanges.subscribe((errors) => {
            control.setErrors(errors, { emitEvent: true });
            const /** @type {?} */ messages = (errors || [])
                .filter(e => {
                return e.path && e.path.slice(1) === this.formProperty.path;
            })
                .map(e => e.message);
            this.errorMessages = messages.filter((m, i) => messages.indexOf(m) === i);
        });
        control.valueChanges.subscribe((newValue) => {
            this.formProperty.setValue(newValue, false);
        });
    }
}
class ArrayLayoutWidget extends Widget {
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        const /** @type {?} */ control = this.control;
        this.formProperty.errorsChanges.subscribe((errors) => {
            control.setErrors(errors, { emitEvent: true });
        });
    }
}
class ObjectLayoutWidget extends Widget {
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        const /** @type {?} */ control = this.control;
        this.formProperty.errorsChanges.subscribe((errors) => {
            control.setErrors(errors, { emitEvent: true });
        });
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ArrayWidget extends ArrayLayoutWidget {
    /**
     * @return {?}
     */
    addItem() {
        this.formProperty.addItem();
    }
    /**
     * @param {?} index
     * @return {?}
     */
    removeItem(index) {
        this.formProperty.removeItem(index);
    }
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    trackByIndex(index, item) {
        return index;
    }
}
ArrayWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-array-widget',
                template: `<div class="widget form-group">
	<label [attr.for]="id" class="horizontal control-label">
		{{ schema.title }}
	</label>
	<span *ngIf="schema.description" class="formHelp">{{schema.description}}</span>
	<div *ngFor="let itemProperty of formProperty.properties; let i=index; trackBy:trackByIndex">
		<sf-form-element [formProperty]="itemProperty"></sf-form-element>
		<button (click)="removeItem(i)" class="btn btn-default array-remove-button">
			<span class="glyphicon glyphicon-minus" aria-hidden="true"></span> Remove
		</button>
	</div>
	<button (click)="addItem()" class="btn btn-default array-add-button">
		<span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Add
	</button>
</div>`
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ButtonWidget {
}
ButtonWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-button-widget',
                template: '<button (click)="button.action($event)">{{button.label}}</button>'
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ObjectWidget extends ObjectLayoutWidget {
}
ObjectWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-form-object',
                template: `<fieldset *ngFor="let fieldset of formProperty.schema.fieldsets">
	<legend *ngIf="fieldset.title">{{fieldset.title}}</legend>
	<div *ngIf="fieldset.description">{{fieldset.description}}</div>
	<div *ngFor="let fieldId of fieldset.fields">
		<sf-form-element [formProperty]="formProperty.getProperty(fieldId)"></sf-form-element>
	</div>
</fieldset>`
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CheckboxWidget extends ControlWidget {
    constructor() {
        super(...arguments);
        this.checked = {};
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        const /** @type {?} */ control = this.control;
        this.formProperty.valueChanges.subscribe((newValue) => {
            if (control.value !== newValue) {
                control.setValue(newValue, { emitEvent: false });
                if (newValue && Array.isArray(newValue)) {
                    newValue.map(v => this.checked[v] = true);
                }
            }
        });
        this.formProperty.errorsChanges.subscribe((errors) => {
            control.setErrors(errors, { emitEvent: true });
        });
        control.valueChanges.subscribe((newValue) => {
            this.formProperty.setValue(newValue, false);
        });
    }
    /**
     * @param {?} el
     * @return {?}
     */
    onCheck(el) {
        if (el.checked) {
            this.checked[el.value] = true;
        }
        else {
            delete this.checked[el.value];
        }
        this.formProperty.setValue(Object.keys(this.checked), false);
    }
}
CheckboxWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-checkbox-widget',
                template: `<div class="widget form-group">
    <label [attr.for]="id" class="horizontal control-label">
        {{ schema.title }}
    </label>
	<div *ngIf="schema.type!='array'" class="checkbox">
		<label class="horizontal control-label">
			<input [formControl]="control" [attr.name]="name" [indeterminate]="control.value !== false && control.value !== true ? true :null" type="checkbox" [attr.disabled]="schema.readOnly">
			<input *ngIf="schema.readOnly" [attr.name]="name" type="hidden" [formControl]="control">
			{{schema.description}}
		</label>
	</div>
	<ng-container *ngIf="schema.type==='array'">
		<div *ngFor="let option of schema.items.oneOf" class="checkbox">
			<label class="horizontal control-label">
				<input [attr.name]="name"
					value="{{option.enum[0]}}" type="checkbox" 
					[attr.disabled]="schema.readOnly"
					(change)="onCheck($event.target)"
					[attr.checked]="checked[option.enum[0]] ? true : null">
				{{option.description}}
			</label>
		</div>
	</ng-container>
</div>`
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FileWidget extends ControlWidget {
    constructor() {
        super();
        this.reader = new FileReader();
        this.filedata = {};
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // OVERRIDE ControlWidget ngAfterViewInit() as ReactiveForms do not handle
        // file inputs
        const /** @type {?} */ control = this.control;
        this.formProperty.errorsChanges.subscribe((errors) => {
            control.setErrors(errors, { emitEvent: true });
        });
        this.reader.onloadend = () => {
            this.filedata.data = btoa(this.reader.result);
            this.formProperty.setValue(this.filedata, false);
        };
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onFileChange($event) {
        const /** @type {?} */ file = $event.target.files[0];
        this.filedata.filename = file.name;
        this.filedata.size = file.size;
        this.filedata['content-type'] = file.type;
        this.filedata.encoding = 'base64';
        this.reader.readAsBinaryString(file);
    }
}
FileWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-file-widget',
                template: `<div class="widget form-group">
	<label [attr.for]="id" class="horizontal control-label">
		{{ schema.title }}
	</label>
    <span *ngIf="schema.description" class="formHelp">{{schema.description}}</span>
  <input [name]="name" class="text-widget file-widget" [attr.id]="id"
    [formControl]="control" type="file" [attr.disabled]="schema.readOnly?true:null"
    (change)="onFileChange($event)">
	<input *ngIf="schema.readOnly" [attr.name]="name" type="hidden" [formControl]="control">
</div>`
            },] },
];
/** @nocollapse */
FileWidget.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class IntegerWidget extends ControlWidget {
}
IntegerWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-integer-widget',
                template: `<div class="widget form-group">
	<label [attr.for]="id" class="horizontal control-label">
		{{ schema.title }}
	</label>
  <span *ngIf="schema.description" class="formHelp">{{schema.description}}</span>
	<input [attr.readonly]="schema.readOnly?true:null" [name]="name"
	class="text-widget integer-widget form-control" [formControl]="control"
	[attr.type]="'number'" [attr.min]="schema.minimum" [attr.max]="schema.maximum"
	[attr.placeholder]="schema.placeholder"
	[attr.maxLength]="schema.maxLength || null"
  [attr.minLength]="schema.minLength || null">
</div>`
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TextAreaWidget extends ControlWidget {
}
TextAreaWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-textarea-widget',
                template: `<div class="widget form-group">
	<label [attr.for]="id" class="horizontal control-label">
		{{ schema.title }}
	</label>
    <span *ngIf="schema.description" class="formHelp">{{schema.description}}</span>
	<textarea [attr.readonly]="schema.readOnly" [name]="name"
		class="text-widget textarea-widget form-control"
		[attr.placeholder]="schema.placeholder"
		[attr.maxLength]="schema.maxLength || null"
    [attr.minLength]="schema.minLength || null"
		[formControl]="control"></textarea>
</div>`
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class RadioWidget extends ControlWidget {
}
RadioWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-radio-widget',
                template: `<div class="widget form-group">
	<label>{{schema.title}}</label>
    <span *ngIf="schema.description" class="formHelp">{{schema.description}}</span>
	<div *ngFor="let option of schema.oneOf" class="radio">
		<label class="horizontal control-label">
			<input [formControl]="control" [attr.name]="name" value="{{option.enum[0]}}" type="radio"  [attr.disabled]="schema.readOnly">
			{{option.description}}
		</label>
	</div>
	<input *ngIf="schema.readOnly" [attr.name]="name" type="hidden" [formControl]="control">
</div>`
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class RangeWidget extends ControlWidget {
}
RangeWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-range-widget',
                template: `<div class="widget form-group">
	<label [attr.for]="id" class="horizontal control-label">
		{{ schema.title }}
	</label>
    <span *ngIf="schema.description" class="formHelp">{{schema.description}}</span>	
	<input [name]="name" class="text-widget range-widget" [attr.id]="id"
	[formControl]="control" [attr.type]="'range'" [attr.min]="schema.minimum" [attr.max]="schema.maximum" [attr.disabled]="schema.readOnly?true:null" >
	<input *ngIf="schema.readOnly" [attr.name]="name" type="hidden">
</div>`
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SelectWidget extends ControlWidget {
}
SelectWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-select-widget',
                template: `<div class="widget form-group">
	<label [attr.for]="id" class="horizontal control-label">
		{{ schema.title }}
	</label>

	<span *ngIf="schema.description" class="formHelp">
		{{schema.description}}
	</span>

	<select *ngIf="schema.type!='array'" [formControl]="control" [attr.name]="name" [attr.disabled]="schema.readOnly" class="form-control">
		<option *ngFor="let option of schema.oneOf" [ngValue]="option.enum[0]" >{{option.description}}</option>
	</select>

	<select *ngIf="schema.type==='array'" multiple [formControl]="control" [attr.name]="name" [attr.disabled]="schema.readOnly" class="form-control">
		<option *ngFor="let option of schema.items.oneOf" [ngValue]="option.enum[0]" >{{option.description}}</option>
	</select>

	<input *ngIf="schema.readOnly" [attr.name]="name" type="hidden" [formControl]="control">
</div>`
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class StringWidget extends ControlWidget {
    /**
     * @return {?}
     */
    getInputType() {
        if (!this.schema.widget.id || this.schema.widget.id === 'string') {
            return 'text';
        }
        else {
            return this.schema.widget.id;
        }
    }
}
StringWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-string-widget',
                template: `<input *ngIf="this.getInputType()==='hidden'; else notHiddenFieldBlock"
  [attr.name]="name" type="hidden" [formControl]="control">
<ng-template #notHiddenFieldBlock>
<div class="widget form-group">
    <label [attr.for]="id" class="horizontal control-label">
    	{{ schema.title }}
    </label>
    <span *ngIf="schema.description" class="formHelp">{{schema.description}}</span>
    <input [name]="name" [attr.readonly]="(schema.widget.id!=='color') && schema.readOnly?true:null"
    class="text-widget.id textline-widget form-control" [attr.type]="this.getInputType()"
    [attr.id]="id"  [formControl]="control" [attr.placeholder]="schema.placeholder"
    [attr.maxLength]="schema.maxLength || null"
    [attr.minLength]="schema.minLength || null"
    [attr.disabled]="(schema.widget.id=='color' && schema.readOnly)?true:null">
    <input *ngIf="(schema.widget.id==='color' && schema.readOnly)" [attr.name]="name" type="hidden" [formControl]="control">
</div>
</ng-template>`
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DefaultWidgetRegistry extends WidgetRegistry {
    constructor() {
        super();
        this.register('array', ArrayWidget);
        this.register('object', ObjectWidget);
        this.register('string', StringWidget);
        this.register('search', StringWidget);
        this.register('tel', StringWidget);
        this.register('url', StringWidget);
        this.register('email', StringWidget);
        this.register('password', StringWidget);
        this.register('color', StringWidget);
        this.register('date', StringWidget);
        this.register('date-time', StringWidget);
        this.register('time', StringWidget);
        this.register('integer', IntegerWidget);
        this.register('number', IntegerWidget);
        this.register('range', RangeWidget);
        this.register('textarea', TextAreaWidget);
        this.register('file', FileWidget);
        this.register('select', SelectWidget);
        this.register('radio', RadioWidget);
        this.register('boolean', CheckboxWidget);
        this.register('checkbox', CheckboxWidget);
        this.register('button', ButtonWidget);
        this.setDefaultWidget(StringWidget);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DefaultWidget {
}
DefaultWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-default-field',
                template: `<p>Unknow type</p>`
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ moduleProviders = [
    {
        provide: WidgetRegistry,
        useClass: DefaultWidgetRegistry
    },
    {
        provide: SchemaValidatorFactory,
        useClass: ZSchemaValidatorFactory
    }
];
class SchemaFormModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: SchemaFormModule,
            providers: [...moduleProviders]
        };
    }
}
SchemaFormModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, ReactiveFormsModule],
                declarations: [
                    FormElementComponent,
                    FormElementComponentAction,
                    FormComponent,
                    WidgetChooserComponent,
                    DefaultWidget,
                    ArrayWidget,
                    ButtonWidget,
                    ObjectWidget,
                    CheckboxWidget,
                    FileWidget,
                    IntegerWidget,
                    TextAreaWidget,
                    RadioWidget,
                    RangeWidget,
                    SelectWidget,
                    StringWidget,
                ],
                entryComponents: [
                    FormElementComponent,
                    FormElementComponentAction,
                    FormComponent,
                    WidgetChooserComponent,
                    ArrayWidget,
                    ButtonWidget,
                    ObjectWidget,
                    CheckboxWidget,
                    FileWidget,
                    IntegerWidget,
                    TextAreaWidget,
                    RadioWidget,
                    RangeWidget,
                    SelectWidget,
                    StringWidget,
                ],
                exports: [
                    FormComponent,
                    FormElementComponent,
                    FormElementComponentAction,
                    WidgetChooserComponent,
                    ArrayWidget,
                    ButtonWidget,
                    ObjectWidget,
                    CheckboxWidget,
                    FileWidget,
                    IntegerWidget,
                    TextAreaWidget,
                    RadioWidget,
                    RangeWidget,
                    SelectWidget,
                    StringWidget
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TemplateSchemaService {
    constructor() {
        this.changes = new EventEmitter();
    }
    /**
     * @return {?}
     */
    changed() {
        this.changes.emit();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TemplateSchemaElement {
    /**
     * @param {?} elementRef
     * @return {?}
     */
    getTextContent(elementRef) {
        const /** @type {?} */ nodes = Array.from(elementRef.nativeElement.childNodes);
        const /** @type {?} */ node = /** @type {?} */ (nodes.filter((el) => {
            return el.nodeType === el.TEXT_NODE;
        }).pop());
        if (!node || !node.nodeValue) {
            return '';
        }
        return node.nodeValue.trim();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ButtonComponent extends TemplateSchemaElement {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        super();
        this.elementRef = elementRef;
        this.label = '';
        this.click = new EventEmitter();
    }
    /**
     * @return {?}
     */
    setLabelFromContent() {
        const /** @type {?} */ textContent = this.getTextContent(this.elementRef);
        // label as @Input takes priority over content text
        if (textContent && !this.label) {
            this.label = textContent;
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.setLabelFromContent();
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'sf-button',
                template: `<ng-content></ng-content>
`,
                providers: [
                    {
                        provide: TemplateSchemaElement,
                        useExisting: forwardRef(() => ButtonComponent),
                    }
                ]
            },] },
];
/** @nocollapse */
ButtonComponent.ctorParameters = () => [
    { type: ElementRef, },
];
ButtonComponent.propDecorators = {
    "id": [{ type: Input },],
    "label": [{ type: Input },],
    "widget": [{ type: Input },],
    "click": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const FieldType = {
    String: 'string',
    Object: 'object',
    Array: 'array',
    Boolean: 'boolean',
    Integer: 'integer',
    Number: 'number',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
class FieldParent extends TemplateSchemaElement {
    constructor() {
        super(...arguments);
        this.name = '';
    }
    /**
     * @return {?}
     */
    get path() {
        if (!this.name) {
            return '';
        }
        return '/' + this.name;
    }
    /**
     * @return {?}
     */
    getButtons() {
        return this.childButtons.map((button, index) => {
            if (!button.id) {
                const /** @type {?} */ randomString = Math.random().toString(16).substr(2, 8);
                // generate id for button
                button.id = this.name + randomString + '_' + (index + 1);
            }
            // register as button action the EventEmitter click
            this.actionRegistry.register(button.id, button.click.emit.bind(button.click));
            const /** @type {?} */ _button = /** @type {?} */ ({
                id: button.id,
                label: button.label,
            });
            if (button.widget) {
                _button.widget = button.widget;
            }
            return _button;
        });
    }
    /**
     * @param {?} fields
     * @return {?}
     */
    getFieldsValidators(fields) {
        return fields.reduce((validators, field) => {
            return validators.concat(field.getValidators());
        }, []);
    }
    /**
     * @param {?} fields
     * @return {?}
     */
    getFieldsSchema(fields) {
        return fields.reduce((schema, field) => {
            switch (this.type) {
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
            const /** @type {?} */ buttons = field.getButtons();
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
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ItemComponent extends TemplateSchemaElement {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        super();
        this.elementRef = elementRef;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.description = this.getTextContent(this.elementRef);
    }
}
ItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'sf-item',
                template: `<ng-content></ng-content>
`
            },] },
];
/** @nocollapse */
ItemComponent.ctorParameters = () => [
    { type: ElementRef, },
];
ItemComponent.propDecorators = {
    "value": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FieldComponent extends FieldParent {
    /**
     * @param {?} elementRef
     * @param {?} templateSchemaService
     * @param {?} actionRegistry
     */
    constructor(elementRef, templateSchemaService, actionRegistry) {
        super();
        this.elementRef = elementRef;
        this.templateSchemaService = templateSchemaService;
        this.actionRegistry = actionRegistry;
        this.type = FieldType.String;
        this.schema = {};
    }
    /**
     * @return {?}
     */
    getSchema() {
        const { properties, items, required } = this.getFieldsSchema(this.childFields.filter(field => field !== this));
        const /** @type {?} */ oneOf = this.getOneOf();
        const /** @type {?} */ schema = /** @type {?} */ ({
            type: this.type
        });
        if (this.title !== undefined) {
            schema.title = this.title;
        }
        if (properties !== undefined) {
            schema.properties = properties;
        }
        if (items !== undefined) {
            schema.items = items;
        }
        // requried child fields
        if (required !== undefined) {
            schema.required = required;
        }
        if (oneOf !== undefined) {
            schema.oneOf = oneOf;
        }
        if (this.description !== undefined) {
            schema.description = this.description;
        }
        if (this.placeholder !== undefined) {
            schema.placeholder = this.placeholder;
        }
        if (this.format !== undefined) {
            schema.format = this.format;
        }
        if (this.widget !== undefined) {
            schema.widget = this.widget;
        }
        if (this.readOnly !== undefined) {
            schema.readOnly = this.readOnly;
        }
        const /** @type {?} */ buttons = this.getButtons();
        if (buttons.length > 0) {
            schema.buttons = buttons;
        }
        // @Input schema takes precedence
        return Object.assign(schema, this.schema);
    }
    /**
     * @return {?}
     */
    getValidators() {
        // registering validator here is not possible since prop full path is needed
        const /** @type {?} */ childValidators = this.getFieldsValidators(this.childFields.filter(field => field !== this));
        const /** @type {?} */ validators = childValidators.map(({ path, validator }) => {
            return {
                path: this.path + path,
                validator
            };
        });
        if (!this.validator) {
            return validators;
        }
        validators.push({ path: this.path, validator: this.validator });
        return validators;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const /** @type {?} */ keys = Object.keys(changes);
        if (keys.length > 0) {
            for (const /** @type {?} */ key of keys) {
                if (!changes[key].isFirstChange()) {
                    // on any input change, force schema change generation
                    this.templateSchemaService.changed();
                    break;
                }
            }
        }
    }
    /**
     * @return {?}
     */
    getOneOf() {
        if (this.childItems.length === 0) {
            return;
        }
        const /** @type {?} */ items = this.childItems.map(({ value, description }) => {
            if (!Array.isArray(value)) {
                return { enum: [value], description };
            }
            return { enum: value, description };
        });
        if (items.length === 0) {
            return;
        }
        return items;
    }
    /**
     * @return {?}
     */
    setTitleFromContent() {
        const /** @type {?} */ textContent = this.getTextContent(this.elementRef);
        //  title as @Input takes priority over content text
        if (textContent && !this.title) {
            this.title = textContent;
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        // cache it
        this.setTitleFromContent();
        merge(this.childFields.changes, this.childItems.changes, this.childButtons.changes)
            .subscribe(() => this.templateSchemaService.changed());
    }
}
FieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'sf-field',
                template: `<ng-content ></ng-content>
`
            },] },
];
/** @nocollapse */
FieldComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: TemplateSchemaService, },
    { type: ActionRegistry, },
];
FieldComponent.propDecorators = {
    "childFields": [{ type: ContentChildren, args: [FieldComponent,] },],
    "childItems": [{ type: ContentChildren, args: [ItemComponent,] },],
    "childButtons": [{ type: ContentChildren, args: [ButtonComponent,] },],
    "name": [{ type: Input },],
    "type": [{ type: Input },],
    "format": [{ type: Input },],
    "required": [{ type: Input },],
    "readOnly": [{ type: Input },],
    "title": [{ type: Input },],
    "description": [{ type: Input },],
    "placeholder": [{ type: Input },],
    "widget": [{ type: Input },],
    "validator": [{ type: Input },],
    "schema": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TemplateSchemaDirective extends FieldParent {
    /**
     * @param {?} actionRegistry
     * @param {?} validatorRegistry
     * @param {?} formComponent
     * @param {?} terminatorService
     * @param {?} templateSchemaService
     */
    constructor(actionRegistry, validatorRegistry, formComponent, terminatorService, templateSchemaService) {
        super();
        this.actionRegistry = actionRegistry;
        this.validatorRegistry = validatorRegistry;
        this.formComponent = formComponent;
        this.terminatorService = terminatorService;
        this.templateSchemaService = templateSchemaService;
    }
    /**
     * @param {?} fields
     * @return {?}
     */
    setFormDocumentSchema(fields) {
        this.actionRegistry.clear();
        this.validatorRegistry.clear();
        const /** @type {?} */ schema = this.getFieldsSchema(fields);
        const /** @type {?} */ validators = this.getFieldsValidators(fields);
        validators.forEach(({ path, validator }) => {
            this.validatorRegistry.register(path, validator);
        });
        const /** @type {?} */ previousSchema = this.formComponent.schema;
        this.formComponent.schema = {
            type: FieldType.Object,
            properties: schema.properties
        };
        if (schema.required && schema.required.length > 0) {
            this.formComponent.schema.requred = schema.required;
        }
        const /** @type {?} */ buttons = this.getButtons();
        if (buttons.length > 0) {
            this.formComponent.schema.buttons = buttons;
        }
        this.formComponent.ngOnChanges({
            schema: new SimpleChange(previousSchema, this.formComponent.schema, Boolean(previousSchema))
        });
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.childFields.length > 0) {
            this.setFormDocumentSchema(this.childFields.toArray());
        }
        merge(this.childFields.changes, this.templateSchemaService.changes)
            .subscribe(() => {
            this.terminatorService.destroy();
            this.setFormDocumentSchema(this.childFields.toArray());
        });
    }
}
TemplateSchemaDirective.decorators = [
    { type: Directive, args: [{
                selector: 'sf-form[templateSchema]',
                providers: [
                    TemplateSchemaService
                ]
            },] },
];
/** @nocollapse */
TemplateSchemaDirective.ctorParameters = () => [
    { type: ActionRegistry, },
    { type: ValidatorRegistry, },
    { type: FormComponent, },
    { type: TerminatorService, },
    { type: TemplateSchemaService, },
];
TemplateSchemaDirective.propDecorators = {
    "childFields": [{ type: ContentChildren, args: [FieldComponent,] },],
    "childButtons": [{ type: ContentChildren, args: [ButtonComponent,] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TemplateSchemaModule {
}
TemplateSchemaModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    TemplateSchemaDirective,
                    FieldComponent,
                    ButtonComponent,
                    ItemComponent
                ],
                exports: [
                    TemplateSchemaDirective,
                    FieldComponent,
                    ButtonComponent,
                    ItemComponent
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { FormComponent, FormElementComponent, FormElementComponentAction, WidgetChooserComponent, WidgetRegistry, ValidatorRegistry, ActionRegistry, BindingRegistry, SchemaValidatorFactory, ZSchemaValidatorFactory, Widget, ControlWidget, ArrayLayoutWidget, ObjectLayoutWidget, ArrayWidget, ButtonWidget, ObjectWidget, CheckboxWidget, FileWidget, IntegerWidget, TextAreaWidget, RadioWidget, RangeWidget, SelectWidget, StringWidget, DefaultWidgetRegistry, SchemaFormModule, TemplateSchemaModule, DefaultWidget as ɵf, useFactory as ɵa, FormPropertyFactory as ɵd, SchemaPreprocessor as ɵb, ButtonComponent as ɵm, FieldParent as ɵh, FieldComponent as ɵk, ItemComponent as ɵl, TemplateSchemaElement as ɵi, TemplateSchemaDirective as ɵg, TemplateSchemaService as ɵj, TerminatorService as ɵe, WidgetFactory as ɵc };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNjaGVtYS1mb3JtLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vbGliL21vZGVsL2FjdGlvbnJlZ2lzdHJ5LnRzIiwibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vbGliL21vZGVsL2Zvcm1wcm9wZXJ0eS50cyIsIm5nOi8vbmd4LXNjaGVtYS1mb3JtL2xpYi9tb2RlbC9hdG9taWNwcm9wZXJ0eS50cyIsIm5nOi8vbmd4LXNjaGVtYS1mb3JtL2xpYi9tb2RlbC9udW1iZXJwcm9wZXJ0eS50cyIsIm5nOi8vbmd4LXNjaGVtYS1mb3JtL2xpYi9tb2RlbC9zdHJpbmdwcm9wZXJ0eS50cyIsIm5nOi8vbmd4LXNjaGVtYS1mb3JtL2xpYi9tb2RlbC9ib29sZWFucHJvcGVydHkudHMiLCJuZzovL25neC1zY2hlbWEtZm9ybS9saWIvbW9kZWwvb2JqZWN0cHJvcGVydHkudHMiLCJuZzovL25neC1zY2hlbWEtZm9ybS9saWIvbW9kZWwvYXJyYXlwcm9wZXJ0eS50cyIsIm5nOi8vbmd4LXNjaGVtYS1mb3JtL2xpYi9tb2RlbC9mb3JtcHJvcGVydHlmYWN0b3J5LnRzIiwibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vbGliL21vZGVsL3V0aWxzLnRzIiwibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vbGliL21vZGVsL3NjaGVtYXByZXByb2Nlc3Nvci50cyIsIm5nOi8vbmd4LXNjaGVtYS1mb3JtL2xpYi9tb2RlbC92YWxpZGF0b3JyZWdpc3RyeS50cyIsIm5nOi8vbmd4LXNjaGVtYS1mb3JtL2xpYi9tb2RlbC9iaW5kaW5ncmVnaXN0cnkudHMiLCJuZzovL25neC1zY2hlbWEtZm9ybS9saWIvc2NoZW1hdmFsaWRhdG9yZmFjdG9yeS50cyIsIm5nOi8vbmd4LXNjaGVtYS1mb3JtL2xpYi93aWRnZXRyZWdpc3RyeS50cyIsIm5nOi8vbmd4LXNjaGVtYS1mb3JtL2xpYi93aWRnZXRmYWN0b3J5LnRzIiwibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vbGliL3Rlcm1pbmF0b3Iuc2VydmljZS50cyIsIm5nOi8vbmd4LXNjaGVtYS1mb3JtL2xpYi9mb3JtLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LXNjaGVtYS1mb3JtL2xpYi9mb3JtZWxlbWVudC5jb21wb25lbnQudHMiLCJuZzovL25neC1zY2hlbWEtZm9ybS9saWIvZm9ybWVsZW1lbnQuYWN0aW9uLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LXNjaGVtYS1mb3JtL2xpYi93aWRnZXRjaG9vc2VyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LXNjaGVtYS1mb3JtL2xpYi93aWRnZXQudHMiLCJuZzovL25neC1zY2hlbWEtZm9ybS9saWIvZGVmYXVsdHdpZGdldHMvYXJyYXkvYXJyYXkud2lkZ2V0LnRzIiwibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vbGliL2RlZmF1bHR3aWRnZXRzL2J1dHRvbi9idXR0b24ud2lkZ2V0LnRzIiwibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vbGliL2RlZmF1bHR3aWRnZXRzL29iamVjdC9vYmplY3Qud2lkZ2V0LnRzIiwibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vbGliL2RlZmF1bHR3aWRnZXRzL2NoZWNrYm94L2NoZWNrYm94LndpZGdldC50cyIsIm5nOi8vbmd4LXNjaGVtYS1mb3JtL2xpYi9kZWZhdWx0d2lkZ2V0cy9maWxlL2ZpbGUud2lkZ2V0LnRzIiwibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vbGliL2RlZmF1bHR3aWRnZXRzL2ludGVnZXIvaW50ZWdlci53aWRnZXQudHMiLCJuZzovL25neC1zY2hlbWEtZm9ybS9saWIvZGVmYXVsdHdpZGdldHMvdGV4dGFyZWEvdGV4dGFyZWEud2lkZ2V0LnRzIiwibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vbGliL2RlZmF1bHR3aWRnZXRzL3JhZGlvL3JhZGlvLndpZGdldC50cyIsIm5nOi8vbmd4LXNjaGVtYS1mb3JtL2xpYi9kZWZhdWx0d2lkZ2V0cy9yYW5nZS9yYW5nZS53aWRnZXQudHMiLCJuZzovL25neC1zY2hlbWEtZm9ybS9saWIvZGVmYXVsdHdpZGdldHMvc2VsZWN0L3NlbGVjdC53aWRnZXQudHMiLCJuZzovL25neC1zY2hlbWEtZm9ybS9saWIvZGVmYXVsdHdpZGdldHMvc3RyaW5nL3N0cmluZy53aWRnZXQudHMiLCJuZzovL25neC1zY2hlbWEtZm9ybS9saWIvZGVmYXVsdHdpZGdldHMvZGVmYXVsdHdpZGdldHJlZ2lzdHJ5LnRzIiwibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vbGliL2RlZmF1bHQud2lkZ2V0LnRzIiwibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vbGliL3NjaGVtYS1mb3JtLm1vZHVsZS50cyIsIm5nOi8vbmd4LXNjaGVtYS1mb3JtL2xpYi90ZW1wbGF0ZS1zY2hlbWEvdGVtcGxhdGUtc2NoZW1hLnNlcnZpY2UudHMiLCJuZzovL25neC1zY2hlbWEtZm9ybS9saWIvdGVtcGxhdGUtc2NoZW1hL3RlbXBsYXRlLXNjaGVtYS1lbGVtZW50LnRzIiwibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vbGliL3RlbXBsYXRlLXNjaGVtYS9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LXNjaGVtYS1mb3JtL2xpYi90ZW1wbGF0ZS1zY2hlbWEvZmllbGQvZmllbGQudHMiLCJuZzovL25neC1zY2hlbWEtZm9ybS9saWIvdGVtcGxhdGUtc2NoZW1hL2ZpZWxkL2ZpZWxkLXBhcmVudC50cyIsIm5nOi8vbmd4LXNjaGVtYS1mb3JtL2xpYi90ZW1wbGF0ZS1zY2hlbWEvZmllbGQvaXRlbS9pdGVtLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LXNjaGVtYS1mb3JtL2xpYi90ZW1wbGF0ZS1zY2hlbWEvZmllbGQvZmllbGQuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vbGliL3RlbXBsYXRlLXNjaGVtYS90ZW1wbGF0ZS1zY2hlbWEuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vbGliL3RlbXBsYXRlLXNjaGVtYS90ZW1wbGF0ZS1zY2hlbWEubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJy4vYWN0aW9uJztcblxuZXhwb3J0IGNsYXNzIEFjdGlvblJlZ2lzdHJ5IHtcbiAgYWN0aW9uczoge1trZXk6IHN0cmluZ106IEFjdGlvbn0gPSB7fTtcblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmFjdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHJlZ2lzdGVyKGFjdGlvbklkOiBzdHJpbmcsIGFjdGlvbjogQWN0aW9uKSB7XG4gICAgdGhpcy5hY3Rpb25zW2FjdGlvbklkXSA9IGFjdGlvbjtcbiAgfVxuXG4gIGdldChhY3Rpb25JZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aW9uc1thY3Rpb25JZF07XG4gIH1cbn1cbiIsImltcG9ydCB7T2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0LCBjb21iaW5lTGF0ZXN0fSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7U2NoZW1hVmFsaWRhdG9yRmFjdG9yeX0gZnJvbSAnLi4vc2NoZW1hdmFsaWRhdG9yZmFjdG9yeSc7XG5pbXBvcnQge1ZhbGlkYXRvclJlZ2lzdHJ5fSBmcm9tICcuL3ZhbGlkYXRvcnJlZ2lzdHJ5JztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZvcm1Qcm9wZXJ0eSB7XG4gIHB1YmxpYyBzY2hlbWFWYWxpZGF0b3I6IEZ1bmN0aW9uO1xuXG4gIF92YWx1ZTogYW55ID0gbnVsbDtcbiAgX2Vycm9yczogYW55ID0gbnVsbDtcbiAgcHJpdmF0ZSBfdmFsdWVDaGFuZ2VzID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KG51bGwpO1xuICBwcml2YXRlIF9lcnJvcnNDaGFuZ2VzID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KG51bGwpO1xuICBwcml2YXRlIF92aXNpYmxlID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfdmlzaWJpbGl0eUNoYW5nZXMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KHRydWUpO1xuICBwcml2YXRlIF9yb290OiBQcm9wZXJ0eUdyb3VwO1xuICBwcml2YXRlIF9wYXJlbnQ6IFByb3BlcnR5R3JvdXA7XG4gIHByaXZhdGUgX3BhdGg6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihzY2hlbWFWYWxpZGF0b3JGYWN0b3J5OiBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxuICAgICAgICAgICAgICBwcml2YXRlIHZhbGlkYXRvclJlZ2lzdHJ5OiBWYWxpZGF0b3JSZWdpc3RyeSxcbiAgICAgICAgICAgICAgcHVibGljIHNjaGVtYTogYW55LFxuICAgICAgICAgICAgICBwYXJlbnQ6IFByb3BlcnR5R3JvdXAsXG4gICAgICAgICAgICAgIHBhdGg6IHN0cmluZykge1xuICAgIHRoaXMuc2NoZW1hVmFsaWRhdG9yID0gc2NoZW1hVmFsaWRhdG9yRmFjdG9yeS5jcmVhdGVWYWxpZGF0b3JGbih0aGlzLnNjaGVtYSk7XG5cbiAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgdGhpcy5fcm9vdCA9IHBhcmVudC5yb290O1xuICAgIH0gZWxzZSBpZiAodGhpcyBpbnN0YW5jZW9mIFByb3BlcnR5R3JvdXApIHtcbiAgICAgIHRoaXMuX3Jvb3QgPSA8UHJvcGVydHlHcm91cD48YW55PnRoaXM7XG4gICAgfVxuICAgIHRoaXMuX3BhdGggPSBwYXRoO1xuICB9XG5cbiAgcHVibGljIGdldCB2YWx1ZUNoYW5nZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlQ2hhbmdlcztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZXJyb3JzQ2hhbmdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fZXJyb3JzQ2hhbmdlcztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS50eXBlO1xuICB9XG5cbiAgcHVibGljIGdldCBwYXJlbnQoKTogUHJvcGVydHlHcm91cCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcm9vdCgpOiBQcm9wZXJ0eUdyb3VwIHtcbiAgICByZXR1cm4gdGhpcy5fcm9vdCB8fCA8UHJvcGVydHlHcm91cD48YW55PnRoaXM7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHBhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcGF0aDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgcHVibGljIGdldCB2aXNpYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl92aXNpYmxlO1xuICB9XG5cbiAgcHVibGljIGdldCB2YWxpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXJyb3JzID09PSBudWxsO1xuICB9XG5cbiAgcHVibGljIGFic3RyYWN0IHNldFZhbHVlKHZhbHVlOiBhbnksIG9ubHlTZWxmOiBib29sZWFuKTtcblxuICBwdWJsaWMgYWJzdHJhY3QgcmVzZXQodmFsdWU6IGFueSwgb25seVNlbGY6IGJvb2xlYW4pO1xuXG4gIHB1YmxpYyB1cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmID0gZmFsc2UsIGVtaXRFdmVudCA9IHRydWUpIHtcbiAgICB0aGlzLl91cGRhdGVWYWx1ZSgpO1xuXG4gICAgaWYgKGVtaXRFdmVudCkge1xuICAgICAgdGhpcy52YWx1ZUNoYW5nZXMubmV4dCh0aGlzLnZhbHVlKTtcbiAgICB9XG5cbiAgICB0aGlzLl9ydW5WYWxpZGF0aW9uKCk7XG5cbiAgICBpZiAodGhpcy5wYXJlbnQgJiYgIW9ubHlTZWxmKSB7XG4gICAgICB0aGlzLnBhcmVudC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmLCBlbWl0RXZlbnQpO1xuICAgIH1cblxuICB9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IF9oYXNWYWx1ZSgpOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiAgQGludGVybmFsXG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3QgX3VwZGF0ZVZhbHVlKCk7XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcHVibGljIF9ydW5WYWxpZGF0aW9uKCk6IGFueSB7XG4gICAgbGV0IGVycm9ycyA9IHRoaXMuc2NoZW1hVmFsaWRhdG9yKHRoaXMuX3ZhbHVlKSB8fCBbXTtcbiAgICBsZXQgY3VzdG9tVmFsaWRhdG9yID0gdGhpcy52YWxpZGF0b3JSZWdpc3RyeS5nZXQodGhpcy5wYXRoKTtcbiAgICBpZiAoY3VzdG9tVmFsaWRhdG9yKSB7XG4gICAgICBsZXQgY3VzdG9tRXJyb3JzID0gY3VzdG9tVmFsaWRhdG9yKHRoaXMudmFsdWUsIHRoaXMsIHRoaXMuZmluZFJvb3QoKSk7XG4gICAgICBlcnJvcnMgPSB0aGlzLm1lcmdlRXJyb3JzKGVycm9ycywgY3VzdG9tRXJyb3JzKTtcbiAgICB9XG4gICAgaWYgKGVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgIGVycm9ycyA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5fZXJyb3JzID0gZXJyb3JzO1xuICAgIHRoaXMuc2V0RXJyb3JzKHRoaXMuX2Vycm9ycyk7XG4gIH1cblxuICBwcml2YXRlIG1lcmdlRXJyb3JzKGVycm9ycywgbmV3RXJyb3JzKSB7XG4gICAgaWYgKG5ld0Vycm9ycykge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkobmV3RXJyb3JzKSkge1xuICAgICAgICBlcnJvcnMgPSBlcnJvcnMuY29uY2F0KC4uLm5ld0Vycm9ycyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvcnMucHVzaChuZXdFcnJvcnMpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZXJyb3JzO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRFcnJvcnMoZXJyb3JzKSB7XG4gICAgdGhpcy5fZXJyb3JzID0gZXJyb3JzO1xuICAgIHRoaXMuX2Vycm9yc0NoYW5nZXMubmV4dChlcnJvcnMpO1xuICB9XG5cbiAgcHVibGljIGV4dGVuZEVycm9ycyhlcnJvcnMpIHtcbiAgICBlcnJvcnMgPSB0aGlzLm1lcmdlRXJyb3JzKHRoaXMuX2Vycm9ycyB8fCBbXSwgZXJyb3JzKTtcbiAgICB0aGlzLnNldEVycm9ycyhlcnJvcnMpO1xuICB9XG5cbiAgc2VhcmNoUHJvcGVydHkocGF0aDogc3RyaW5nKTogRm9ybVByb3BlcnR5IHtcbiAgICBsZXQgcHJvcDogRm9ybVByb3BlcnR5ID0gdGhpcztcbiAgICBsZXQgYmFzZTogUHJvcGVydHlHcm91cCA9IG51bGw7XG5cbiAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICBpZiAocGF0aFswXSA9PT0gJy8nKSB7XG4gICAgICBiYXNlID0gdGhpcy5maW5kUm9vdCgpO1xuICAgICAgcmVzdWx0ID0gYmFzZS5nZXRQcm9wZXJ0eShwYXRoLnN1YnN0cigxKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlIChyZXN1bHQgPT09IG51bGwgJiYgcHJvcC5wYXJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgcHJvcCA9IGJhc2UgPSBwcm9wLnBhcmVudDtcbiAgICAgICAgcmVzdWx0ID0gYmFzZS5nZXRQcm9wZXJ0eShwYXRoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHB1YmxpYyBmaW5kUm9vdCgpOiBQcm9wZXJ0eUdyb3VwIHtcbiAgICBsZXQgcHJvcGVydHk6IEZvcm1Qcm9wZXJ0eSA9IHRoaXM7XG4gICAgd2hpbGUgKHByb3BlcnR5LnBhcmVudCAhPT0gbnVsbCkge1xuICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eS5wYXJlbnQ7XG4gICAgfVxuICAgIHJldHVybiA8UHJvcGVydHlHcm91cD5wcm9wZXJ0eTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0VmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fdmlzaWJsZSA9IHZpc2libGU7XG4gICAgdGhpcy5fdmlzaWJpbGl0eUNoYW5nZXMubmV4dCh2aXNpYmxlKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgIHRoaXMucGFyZW50LnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoZmFsc2UsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEEgZmllbGQgaXMgdmlzaWJsZSBpZiBBVCBMRUFTVCBPTkUgb2YgdGhlIHByb3BlcnRpZXMgaXQgZGVwZW5kcyBvbiBpcyB2aXNpYmxlIEFORCBoYXMgYSB2YWx1ZSBpbiB0aGUgbGlzdFxuICBwdWJsaWMgX2JpbmRWaXNpYmlsaXR5KCkge1xuICAgIGxldCB2aXNpYmxlSWYgPSB0aGlzLnNjaGVtYS52aXNpYmxlSWY7XG4gICAgaWYgKHR5cGVvZiB2aXNpYmxlSWYgPT09ICdvYmplY3QnICYmIE9iamVjdC5rZXlzKHZpc2libGVJZikubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLnNldFZpc2libGUoZmFsc2UpO1xuICAgIH1cbiAgICBlbHNlIGlmICh2aXNpYmxlSWYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbGV0IHByb3BlcnRpZXNCaW5kaW5nID0gW107XG4gICAgICBmb3IgKGxldCBkZXBlbmRlbmN5UGF0aCBpbiB2aXNpYmxlSWYpIHtcbiAgICAgICAgaWYgKHZpc2libGVJZi5oYXNPd25Qcm9wZXJ0eShkZXBlbmRlbmN5UGF0aCkpIHtcbiAgICAgICAgICBsZXQgcHJvcGVydHkgPSB0aGlzLnNlYXJjaFByb3BlcnR5KGRlcGVuZGVuY3lQYXRoKTtcbiAgICAgICAgICBpZiAocHJvcGVydHkpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlQ2hlY2sgPSBwcm9wZXJ0eS52YWx1ZUNoYW5nZXMucGlwZShtYXAoXG4gICAgICAgICAgICAgIHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodmlzaWJsZUlmW2RlcGVuZGVuY3lQYXRoXS5pbmRleE9mKCckQU5ZJCcpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB2aXNpYmxlSWZbZGVwZW5kZW5jeVBhdGhdLmluZGV4T2YodmFsdWUpICE9PSAtMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICkpO1xuICAgICAgICAgICAgY29uc3QgdmlzaWJpbGl0eUNoZWNrID0gcHJvcGVydHkuX3Zpc2liaWxpdHlDaGFuZ2VzO1xuICAgICAgICAgICAgY29uc3QgYW5kID0gY29tYmluZUxhdGVzdChbdmFsdWVDaGVjaywgdmlzaWJpbGl0eUNoZWNrXSwgKHYxLCB2MikgPT4gdjEgJiYgdjIpO1xuICAgICAgICAgICAgcHJvcGVydGllc0JpbmRpbmcucHVzaChhbmQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0NhblxcJ3QgZmluZCBwcm9wZXJ0eSAnICsgZGVwZW5kZW5jeVBhdGggKyAnIGZvciB2aXNpYmlsaXR5IGNoZWNrIG9mICcgKyB0aGlzLnBhdGgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb21iaW5lTGF0ZXN0KHByb3BlcnRpZXNCaW5kaW5nLCAoLi4udmFsdWVzOiBib29sZWFuW10pID0+IHtcbiAgICAgICAgcmV0dXJuIHZhbHVlcy5pbmRleE9mKHRydWUpICE9PSAtMTtcbiAgICAgIH0pLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSkuc3Vic2NyaWJlKCh2aXNpYmxlKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0VmlzaWJsZSh2aXNpYmxlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUHJvcGVydHlHcm91cCBleHRlbmRzIEZvcm1Qcm9wZXJ0eSB7XG5cbiAgcHJvcGVydGllczogRm9ybVByb3BlcnR5W10gfCB7IFtrZXk6IHN0cmluZ106IEZvcm1Qcm9wZXJ0eSB9ID0gbnVsbDtcblxuICBnZXRQcm9wZXJ0eShwYXRoOiBzdHJpbmcpIHtcbiAgICBsZXQgc3ViUGF0aElkeCA9IHBhdGguaW5kZXhPZignLycpO1xuICAgIGxldCBwcm9wZXJ0eUlkID0gc3ViUGF0aElkeCAhPT0gLTEgPyBwYXRoLnN1YnN0cigwLCBzdWJQYXRoSWR4KSA6IHBhdGg7XG5cbiAgICBsZXQgcHJvcGVydHkgPSB0aGlzLnByb3BlcnRpZXNbcHJvcGVydHlJZF07XG4gICAgaWYgKHByb3BlcnR5ICE9PSBudWxsICYmIHN1YlBhdGhJZHggIT09IC0xICYmIHByb3BlcnR5IGluc3RhbmNlb2YgUHJvcGVydHlHcm91cCkge1xuICAgICAgbGV0IHN1YlBhdGggPSBwYXRoLnN1YnN0cihzdWJQYXRoSWR4ICsgMSk7XG4gICAgICBwcm9wZXJ0eSA9ICg8UHJvcGVydHlHcm91cD5wcm9wZXJ0eSkuZ2V0UHJvcGVydHkoc3ViUGF0aCk7XG4gICAgfVxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfVxuXG4gIHB1YmxpYyBmb3JFYWNoQ2hpbGQoZm46IChmb3JtUHJvcGVydHk6IEZvcm1Qcm9wZXJ0eSwgc3RyOiBTdHJpbmcpID0+IHZvaWQpIHtcbiAgICBmb3IgKGxldCBwcm9wZXJ0eUlkIGluIHRoaXMucHJvcGVydGllcykge1xuICAgICAgaWYgKHRoaXMucHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eUlkKSkge1xuICAgICAgICBsZXQgcHJvcGVydHkgPSB0aGlzLnByb3BlcnRpZXNbcHJvcGVydHlJZF07XG4gICAgICAgIGZuKHByb3BlcnR5LCBwcm9wZXJ0eUlkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZm9yRWFjaENoaWxkUmVjdXJzaXZlKGZuOiAoZm9ybVByb3BlcnR5OiBGb3JtUHJvcGVydHkpID0+IHZvaWQpIHtcbiAgICB0aGlzLmZvckVhY2hDaGlsZCgoY2hpbGQpID0+IHtcbiAgICAgIGZuKGNoaWxkKTtcbiAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIFByb3BlcnR5R3JvdXApIHtcbiAgICAgICAgKDxQcm9wZXJ0eUdyb3VwPmNoaWxkKS5mb3JFYWNoQ2hpbGRSZWN1cnNpdmUoZm4pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIF9iaW5kVmlzaWJpbGl0eSgpIHtcbiAgICBzdXBlci5fYmluZFZpc2liaWxpdHkoKTtcbiAgICB0aGlzLl9iaW5kVmlzaWJpbGl0eVJlY3Vyc2l2ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYmluZFZpc2liaWxpdHlSZWN1cnNpdmUoKSB7XG4gICAgdGhpcy5mb3JFYWNoQ2hpbGRSZWN1cnNpdmUoKHByb3BlcnR5KSA9PiB7XG4gICAgICBwcm9wZXJ0eS5fYmluZFZpc2liaWxpdHkoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBpc1Jvb3QoKSB7XG4gICAgcmV0dXJuIHRoaXMgPT09IHRoaXMucm9vdDtcbiAgfVxufVxuXG5cbiIsImltcG9ydCB7Rm9ybVByb3BlcnR5fSBmcm9tICcuL2Zvcm1wcm9wZXJ0eSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBdG9taWNQcm9wZXJ0eSBleHRlbmRzIEZvcm1Qcm9wZXJ0eSB7XG5cbiAgc2V0VmFsdWUodmFsdWUsIG9ubHlTZWxmID0gZmFsc2UpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvbmx5U2VsZiwgdHJ1ZSk7XG4gIH1cblxuICByZXNldCh2YWx1ZTogYW55ID0gbnVsbCwgb25seVNlbGYgPSB0cnVlKSB7XG4gICAgdGhpcy5yZXNldFZhbHVlKHZhbHVlKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob25seVNlbGYsIHRydWUpO1xuICB9XG5cbiAgcmVzZXRWYWx1ZSh2YWx1ZTogYW55KTogYW55IHtcbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLnNjaGVtYS5kZWZhdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLnNjaGVtYS5kZWZhdWx0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLmZhbGxiYWNrVmFsdWUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBfaGFzVmFsdWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZmFsbGJhY2tWYWx1ZSgpICE9PSB0aGlzLnZhbHVlO1xuICB9XG5cbiAgYWJzdHJhY3QgZmFsbGJhY2tWYWx1ZSgpOiBhbnk7XG5cbiAgcHVibGljIF91cGRhdGVWYWx1ZSgpIHtcbiAgfVxufVxuIiwiaW1wb3J0IHtBdG9taWNQcm9wZXJ0eX0gZnJvbSAnLi9hdG9taWNwcm9wZXJ0eSc7XG5cbmV4cG9ydCBjbGFzcyBOdW1iZXJQcm9wZXJ0eSBleHRlbmRzIEF0b21pY1Byb3BlcnR5IHtcblxuICBmYWxsYmFja1ZhbHVlKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUsIG9ubHlTZWxmID0gZmFsc2UpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKHZhbHVlLmxlbmd0aCkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLmluZGV4T2YoJy4nKSA+IC0xID8gcGFyc2VGbG9hdCh2YWx1ZSkgOiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvbmx5U2VsZiwgdHJ1ZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEF0b21pY1Byb3BlcnR5IH0gZnJvbSAnLi9hdG9taWNwcm9wZXJ0eSc7XG5cbmV4cG9ydCBjbGFzcyBTdHJpbmdQcm9wZXJ0eSBleHRlbmRzIEF0b21pY1Byb3BlcnR5IHtcblxuICBmYWxsYmFja1ZhbHVlKCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBBdG9taWNQcm9wZXJ0eSB9IGZyb20gJy4vYXRvbWljcHJvcGVydHknO1xuXG5leHBvcnQgY2xhc3MgQm9vbGVhblByb3BlcnR5IGV4dGVuZHMgQXRvbWljUHJvcGVydHkge1xuXG4gIGZhbGxiYWNrVmFsdWUoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiIsImltcG9ydCB7UHJvcGVydHlHcm91cH0gZnJvbSAnLi9mb3JtcHJvcGVydHknO1xuaW1wb3J0IHtGb3JtUHJvcGVydHlGYWN0b3J5fSBmcm9tICcuL2Zvcm1wcm9wZXJ0eWZhY3RvcnknO1xuaW1wb3J0IHtTY2hlbWFWYWxpZGF0b3JGYWN0b3J5fSBmcm9tICcuLi9zY2hlbWF2YWxpZGF0b3JmYWN0b3J5JztcbmltcG9ydCB7VmFsaWRhdG9yUmVnaXN0cnl9IGZyb20gJy4vdmFsaWRhdG9ycmVnaXN0cnknO1xuXG5leHBvcnQgY2xhc3MgT2JqZWN0UHJvcGVydHkgZXh0ZW5kcyBQcm9wZXJ0eUdyb3VwIHtcblxuICBwcml2YXRlIHByb3BlcnRpZXNJZDogc3RyaW5nW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1Qcm9wZXJ0eUZhY3Rvcnk6IEZvcm1Qcm9wZXJ0eUZhY3RvcnksXG4gICAgICAgICAgICAgIHNjaGVtYVZhbGlkYXRvckZhY3Rvcnk6IFNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gICAgICAgICAgICAgIHZhbGlkYXRvclJlZ2lzdHJ5OiBWYWxpZGF0b3JSZWdpc3RyeSxcbiAgICAgICAgICAgICAgc2NoZW1hOiBhbnksXG4gICAgICAgICAgICAgIHBhcmVudDogUHJvcGVydHlHcm91cCxcbiAgICAgICAgICAgICAgcGF0aDogc3RyaW5nKSB7XG4gICAgc3VwZXIoc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSwgdmFsaWRhdG9yUmVnaXN0cnksIHNjaGVtYSwgcGFyZW50LCBwYXRoKTtcbiAgICB0aGlzLmNyZWF0ZVByb3BlcnRpZXMoKTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiBhbnksIG9ubHlTZWxmOiBib29sZWFuKSB7XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eUlkIGluIHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkocHJvcGVydHlJZCkpIHtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzW3Byb3BlcnR5SWRdLnNldFZhbHVlKHZhbHVlW3Byb3BlcnR5SWRdLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmLCB0cnVlKTtcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBhbnksIG9ubHlTZWxmID0gdHJ1ZSkge1xuICAgIHZhbHVlID0gdmFsdWUgfHwgdGhpcy5zY2hlbWEuZGVmYXVsdCB8fCB7fTtcbiAgICB0aGlzLnJlc2V0UHJvcGVydGllcyh2YWx1ZSk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmLCB0cnVlKTtcbiAgfVxuXG4gIHJlc2V0UHJvcGVydGllcyh2YWx1ZTogYW55KSB7XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eUlkIGluIHRoaXMuc2NoZW1hLnByb3BlcnRpZXMpIHtcbiAgICAgIGlmICh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KHByb3BlcnR5SWQpKSB7XG4gICAgICAgIHRoaXMucHJvcGVydGllc1twcm9wZXJ0eUlkXS5yZXNldCh2YWx1ZVtwcm9wZXJ0eUlkXSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlUHJvcGVydGllcygpIHtcbiAgICB0aGlzLnByb3BlcnRpZXMgPSB7fTtcbiAgICB0aGlzLnByb3BlcnRpZXNJZCA9IFtdO1xuICAgIGZvciAoY29uc3QgcHJvcGVydHlJZCBpbiB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKSB7XG4gICAgICBpZiAodGhpcy5zY2hlbWEucHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eUlkKSkge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eVNjaGVtYSA9IHRoaXMuc2NoZW1hLnByb3BlcnRpZXNbcHJvcGVydHlJZF07XG4gICAgICAgIHRoaXMucHJvcGVydGllc1twcm9wZXJ0eUlkXSA9IHRoaXMuZm9ybVByb3BlcnR5RmFjdG9yeS5jcmVhdGVQcm9wZXJ0eShwcm9wZXJ0eVNjaGVtYSwgdGhpcywgcHJvcGVydHlJZCk7XG4gICAgICAgIHRoaXMucHJvcGVydGllc0lkLnB1c2gocHJvcGVydHlJZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIF9oYXNWYWx1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISFPYmplY3Qua2V5cyh0aGlzLnZhbHVlKS5sZW5ndGg7XG4gIH1cblxuICBwdWJsaWMgX3VwZGF0ZVZhbHVlKCkge1xuICAgIHRoaXMucmVkdWNlVmFsdWUoKTtcbiAgfVxuXG4gIHB1YmxpYyBfcnVuVmFsaWRhdGlvbigpIHtcbiAgICBzdXBlci5fcnVuVmFsaWRhdGlvbigpO1xuXG4gICAgaWYgKHRoaXMuX2Vycm9ycykge1xuICAgICAgdGhpcy5fZXJyb3JzLmZvckVhY2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zdCBwcm9wID0gdGhpcy5zZWFyY2hQcm9wZXJ0eShlcnJvci5wYXRoLnNsaWNlKDEpKTtcbiAgICAgICAgaWYgKHByb3ApIHtcbiAgICAgICAgICBwcm9wLmV4dGVuZEVycm9ycyhlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVkdWNlVmFsdWUoKTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWUgPSB7fTtcbiAgICB0aGlzLmZvckVhY2hDaGlsZCgocHJvcGVydHksIHByb3BlcnR5SWQ6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb3BlcnR5LnZpc2libGUgJiYgcHJvcGVydHkuX2hhc1ZhbHVlKCkpIHtcbiAgICAgICAgdmFsdWVbcHJvcGVydHlJZF0gPSBwcm9wZXJ0eS52YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG59XG4iLCJpbXBvcnQge0Zvcm1Qcm9wZXJ0eSwgUHJvcGVydHlHcm91cH0gZnJvbSAnLi9mb3JtcHJvcGVydHknO1xuaW1wb3J0IHtGb3JtUHJvcGVydHlGYWN0b3J5fSBmcm9tICcuL2Zvcm1wcm9wZXJ0eWZhY3RvcnknO1xuaW1wb3J0IHtTY2hlbWFWYWxpZGF0b3JGYWN0b3J5fSBmcm9tICcuLi9zY2hlbWF2YWxpZGF0b3JmYWN0b3J5JztcbmltcG9ydCB7VmFsaWRhdG9yUmVnaXN0cnl9IGZyb20gJy4vdmFsaWRhdG9ycmVnaXN0cnknO1xuXG5leHBvcnQgY2xhc3MgQXJyYXlQcm9wZXJ0eSBleHRlbmRzIFByb3BlcnR5R3JvdXAge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybVByb3BlcnR5RmFjdG9yeTogRm9ybVByb3BlcnR5RmFjdG9yeSxcbiAgICAgICAgICAgICAgc2NoZW1hVmFsaWRhdG9yRmFjdG9yeTogU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgICAgICAgICAgICAgdmFsaWRhdG9yUmVnaXN0cnk6IFZhbGlkYXRvclJlZ2lzdHJ5LFxuICAgICAgICAgICAgICBzY2hlbWE6IGFueSxcbiAgICAgICAgICAgICAgcGFyZW50OiBQcm9wZXJ0eUdyb3VwLFxuICAgICAgICAgICAgICBwYXRoOiBzdHJpbmcpIHtcbiAgICBzdXBlcihzY2hlbWFWYWxpZGF0b3JGYWN0b3J5LCB2YWxpZGF0b3JSZWdpc3RyeSwgc2NoZW1hLCBwYXJlbnQsIHBhdGgpO1xuICB9XG5cbiAgYWRkSXRlbSh2YWx1ZTogYW55ID0gbnVsbCk6IEZvcm1Qcm9wZXJ0eSB7XG4gICAgbGV0IG5ld1Byb3BlcnR5ID0gdGhpcy5hZGRQcm9wZXJ0eSgpO1xuICAgIG5ld1Byb3BlcnR5LnJlc2V0KHZhbHVlLCBmYWxzZSk7XG4gICAgcmV0dXJuIG5ld1Byb3BlcnR5O1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRQcm9wZXJ0eSgpIHtcbiAgICBsZXQgbmV3UHJvcGVydHkgPSB0aGlzLmZvcm1Qcm9wZXJ0eUZhY3RvcnkuY3JlYXRlUHJvcGVydHkodGhpcy5zY2hlbWEuaXRlbXMsIHRoaXMpO1xuICAgICg8Rm9ybVByb3BlcnR5W10+dGhpcy5wcm9wZXJ0aWVzKS5wdXNoKG5ld1Byb3BlcnR5KTtcbiAgICByZXR1cm4gbmV3UHJvcGVydHk7XG4gIH1cblxuICByZW1vdmVJdGVtKGluZGV4OiBudW1iZXIpIHtcbiAgICAoPEZvcm1Qcm9wZXJ0eVtdPnRoaXMucHJvcGVydGllcykuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoZmFsc2UsIHRydWUpO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IGFueSwgb25seVNlbGY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNyZWF0ZVByb3BlcnRpZXMoKTtcbiAgICB0aGlzLnJlc2V0UHJvcGVydGllcyh2YWx1ZSk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmLCB0cnVlKTtcbiAgfVxuXG4gIHB1YmxpYyBfaGFzVmFsdWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwdWJsaWMgX3VwZGF0ZVZhbHVlKCkge1xuICAgIHRoaXMucmVkdWNlVmFsdWUoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVkdWNlVmFsdWUoKTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWUgPSBbXTtcbiAgICB0aGlzLmZvckVhY2hDaGlsZCgocHJvcGVydHksIF8pID0+IHtcbiAgICAgIGlmIChwcm9wZXJ0eS52aXNpYmxlICYmIHByb3BlcnR5Ll9oYXNWYWx1ZSgpKSB7XG4gICAgICAgIHZhbHVlLnB1c2gocHJvcGVydHkudmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cblxuICByZXNldCh2YWx1ZTogYW55LCBvbmx5U2VsZiA9IHRydWUpIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHRoaXMuc2NoZW1hLmRlZmF1bHQgfHwgW107XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gW107XG4gICAgdGhpcy5yZXNldFByb3BlcnRpZXModmFsdWUpO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvbmx5U2VsZiwgdHJ1ZSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVByb3BlcnRpZXMoKSB7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gW107XG4gIH1cblxuXG4gIHByaXZhdGUgcmVzZXRQcm9wZXJ0aWVzKHZhbHVlOiBhbnkpIHtcbiAgICBmb3IgKGxldCBpZHggaW4gdmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShpZHgpKSB7XG4gICAgICAgIGxldCBwcm9wZXJ0eSA9IHRoaXMuYWRkUHJvcGVydHkoKTtcbiAgICAgICAgcHJvcGVydHkucmVzZXQodmFsdWVbaWR4XSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge0Zvcm1Qcm9wZXJ0eSwgUHJvcGVydHlHcm91cH0gZnJvbSAnLi9mb3JtcHJvcGVydHknO1xuaW1wb3J0IHtOdW1iZXJQcm9wZXJ0eX0gZnJvbSAnLi9udW1iZXJwcm9wZXJ0eSc7XG5pbXBvcnQge1N0cmluZ1Byb3BlcnR5fSBmcm9tICcuL3N0cmluZ3Byb3BlcnR5JztcbmltcG9ydCB7Qm9vbGVhblByb3BlcnR5fSBmcm9tICcuL2Jvb2xlYW5wcm9wZXJ0eSc7XG5pbXBvcnQge09iamVjdFByb3BlcnR5fSBmcm9tICcuL29iamVjdHByb3BlcnR5JztcbmltcG9ydCB7QXJyYXlQcm9wZXJ0eX0gZnJvbSAnLi9hcnJheXByb3BlcnR5JztcbmltcG9ydCB7U2NoZW1hVmFsaWRhdG9yRmFjdG9yeX0gZnJvbSAnLi4vc2NoZW1hdmFsaWRhdG9yZmFjdG9yeSc7XG5pbXBvcnQge1ZhbGlkYXRvclJlZ2lzdHJ5fSBmcm9tICcuL3ZhbGlkYXRvcnJlZ2lzdHJ5JztcblxuZXhwb3J0IGNsYXNzIEZvcm1Qcm9wZXJ0eUZhY3Rvcnkge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNjaGVtYVZhbGlkYXRvckZhY3Rvcnk6IFNjaGVtYVZhbGlkYXRvckZhY3RvcnksIHByaXZhdGUgdmFsaWRhdG9yUmVnaXN0cnk6IFZhbGlkYXRvclJlZ2lzdHJ5KSB7XG4gIH1cblxuICBjcmVhdGVQcm9wZXJ0eShzY2hlbWE6IGFueSwgcGFyZW50OiBQcm9wZXJ0eUdyb3VwID0gbnVsbCwgcHJvcGVydHlJZD86IHN0cmluZyk6IEZvcm1Qcm9wZXJ0eSB7XG4gICAgbGV0IG5ld1Byb3BlcnR5ID0gbnVsbDtcbiAgICBsZXQgcGF0aCA9ICcnO1xuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIHBhdGggKz0gcGFyZW50LnBhdGg7XG4gICAgICBpZiAocGFyZW50LnBhcmVudCAhPT0gbnVsbCkge1xuICAgICAgICBwYXRoICs9ICcvJztcbiAgICAgIH1cbiAgICAgIGlmIChwYXJlbnQudHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcGF0aCArPSBwcm9wZXJ0eUlkO1xuICAgICAgfSBlbHNlIGlmIChwYXJlbnQudHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgICBwYXRoICs9ICcqJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93ICdJbnN0YW5jaWF0aW9uIG9mIGEgRm9ybVByb3BlcnR5IHdpdGggYW4gdW5rbm93biBwYXJlbnQgdHlwZTogJyArIHBhcmVudC50eXBlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXRoID0gJy8nO1xuICAgIH1cblxuICAgIGlmIChzY2hlbWEuJHJlZikge1xuICAgICAgY29uc3QgcmVmU2NoZW1hID0gdGhpcy5zY2hlbWFWYWxpZGF0b3JGYWN0b3J5LmdldFNjaGVtYShwYXJlbnQucm9vdC5zY2hlbWEsIHNjaGVtYS4kcmVmKTtcbiAgICAgIG5ld1Byb3BlcnR5ID0gdGhpcy5jcmVhdGVQcm9wZXJ0eShyZWZTY2hlbWEsIHBhcmVudCwgcGF0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXRjaCAoc2NoZW1hLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnaW50ZWdlcic6XG4gICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgbmV3UHJvcGVydHkgPSBuZXcgTnVtYmVyUHJvcGVydHkodGhpcy5zY2hlbWFWYWxpZGF0b3JGYWN0b3J5LCB0aGlzLnZhbGlkYXRvclJlZ2lzdHJ5LCBzY2hlbWEsIHBhcmVudCwgcGF0aCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgbmV3UHJvcGVydHkgPSBuZXcgU3RyaW5nUHJvcGVydHkodGhpcy5zY2hlbWFWYWxpZGF0b3JGYWN0b3J5LCB0aGlzLnZhbGlkYXRvclJlZ2lzdHJ5LCBzY2hlbWEsIHBhcmVudCwgcGF0aCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICAgIG5ld1Byb3BlcnR5ID0gbmV3IEJvb2xlYW5Qcm9wZXJ0eSh0aGlzLnNjaGVtYVZhbGlkYXRvckZhY3RvcnksIHRoaXMudmFsaWRhdG9yUmVnaXN0cnksIHNjaGVtYSwgcGFyZW50LCBwYXRoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICBuZXdQcm9wZXJ0eSA9IG5ldyBPYmplY3RQcm9wZXJ0eSh0aGlzLCB0aGlzLnNjaGVtYVZhbGlkYXRvckZhY3RvcnksIHRoaXMudmFsaWRhdG9yUmVnaXN0cnksIHNjaGVtYSwgcGFyZW50LCBwYXRoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgIG5ld1Byb3BlcnR5ID0gbmV3IEFycmF5UHJvcGVydHkodGhpcywgdGhpcy5zY2hlbWFWYWxpZGF0b3JGYWN0b3J5LCB0aGlzLnZhbGlkYXRvclJlZ2lzdHJ5LCBzY2hlbWEsIHBhcmVudCwgcGF0aCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgVW5kZWZpbmVkIHR5cGUgJHtzY2hlbWEudHlwZX1gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmV3UHJvcGVydHkgaW5zdGFuY2VvZiBQcm9wZXJ0eUdyb3VwKSB7XG4gICAgICB0aGlzLmluaXRpYWxpemVSb290KG5ld1Byb3BlcnR5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3UHJvcGVydHk7XG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxpemVSb290KHJvb3RQcm9wZXJ0eTogUHJvcGVydHlHcm91cCkge1xuICAgIHJvb3RQcm9wZXJ0eS5yZXNldChudWxsLCB0cnVlKTtcbiAgICByb290UHJvcGVydHkuX2JpbmRWaXNpYmlsaXR5KCk7XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBpc1ByZXNlbnQobykge1xuICByZXR1cm4gbyAhPT0gbnVsbCAmJiBvICE9PSB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0JsYW5rKG8pIHtcbiAgcmV0dXJuIG8gPT09IG51bGwgfHwgbyA9PT0gdW5kZWZpbmVkO1xufVxuIiwiaW1wb3J0IHtpc0JsYW5rfSBmcm9tICcuL3V0aWxzJztcblxuZnVuY3Rpb24gZm9ybWF0TWVzc2FnZShtZXNzYWdlLCBwYXRoKSB7XG4gIHJldHVybiBgUGFyc2luZyBlcnJvciBvbiAke3BhdGh9OiAke21lc3NhZ2V9YDtcbn1cblxuZnVuY3Rpb24gc2NoZW1hRXJyb3IobWVzc2FnZSwgcGF0aCk6IHZvaWQge1xuICBsZXQgbWVzZyA9IGZvcm1hdE1lc3NhZ2UobWVzc2FnZSwgcGF0aCk7XG4gIHRocm93IG5ldyBFcnJvcihtZXNnKTtcbn1cblxuZnVuY3Rpb24gc2NoZW1hV2FybmluZyhtZXNzYWdlLCBwYXRoKTogdm9pZCB7XG4gIGxldCBtZXNnID0gZm9ybWF0TWVzc2FnZShtZXNzYWdlLCBwYXRoKTtcbiAgdGhyb3cgbmV3IEVycm9yKG1lc2cpO1xufVxuXG5leHBvcnQgY2xhc3MgU2NoZW1hUHJlcHJvY2Vzc29yIHtcblxuICBzdGF0aWMgcHJlcHJvY2Vzcyhqc29uU2NoZW1hOiBhbnksIHBhdGggPSAnLycpOiBhbnkge1xuICAgIGpzb25TY2hlbWEgPSBqc29uU2NoZW1hIHx8IHt9O1xuICAgIFNjaGVtYVByZXByb2Nlc3Nvci5ub3JtYWxpemVFeHRlbnNpb25zKGpzb25TY2hlbWEpO1xuICAgIGlmIChqc29uU2NoZW1hLnR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBTY2hlbWFQcmVwcm9jZXNzb3IuY2hlY2tQcm9wZXJ0aWVzKGpzb25TY2hlbWEsIHBhdGgpO1xuICAgICAgU2NoZW1hUHJlcHJvY2Vzc29yLmNoZWNrQW5kQ3JlYXRlRmllbGRzZXRzKGpzb25TY2hlbWEsIHBhdGgpO1xuICAgIH0gZWxzZSBpZiAoanNvblNjaGVtYS50eXBlID09PSAnYXJyYXknKSB7XG4gICAgICBTY2hlbWFQcmVwcm9jZXNzb3IuY2hlY2tJdGVtcyhqc29uU2NoZW1hLCBwYXRoKTtcbiAgICB9XG4gICAgU2NoZW1hUHJlcHJvY2Vzc29yLm5vcm1hbGl6ZVdpZGdldChqc29uU2NoZW1hKTtcbiAgICBTY2hlbWFQcmVwcm9jZXNzb3IucmVjdXJzaXZlQ2hlY2soanNvblNjaGVtYSwgcGF0aCk7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBjaGVja1Byb3BlcnRpZXMoanNvblNjaGVtYSwgcGF0aDogc3RyaW5nKSB7XG4gICAgaWYgKGlzQmxhbmsoanNvblNjaGVtYS5wcm9wZXJ0aWVzKSkge1xuICAgICAganNvblNjaGVtYS5wcm9wZXJ0aWVzID0ge307XG4gICAgICBzY2hlbWFXYXJuaW5nKCdQcm92aWRlZCBqc29uIHNjaGVtYSBkb2VzIG5vdCBjb250YWluIGEgXFwncHJvcGVydGllc1xcJyBlbnRyeS4gT3V0cHV0IHNjaGVtYSB3aWxsIGJlIGVtcHR5JywgcGF0aCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgY2hlY2tBbmRDcmVhdGVGaWVsZHNldHMoanNvblNjaGVtYTogYW55LCBwYXRoOiBzdHJpbmcpIHtcbiAgICBpZiAoanNvblNjaGVtYS5maWVsZHNldHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGpzb25TY2hlbWEub3JkZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBTY2hlbWFQcmVwcm9jZXNzb3IucmVwbGFjZU9yZGVyQnlGaWVsZHNldHMoanNvblNjaGVtYSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBTY2hlbWFQcmVwcm9jZXNzb3IuY3JlYXRlRmllbGRzZXRzKGpzb25TY2hlbWEpO1xuICAgICAgfVxuICAgIH1cbiAgICBTY2hlbWFQcmVwcm9jZXNzb3IuY2hlY2tGaWVsZHNVc2FnZShqc29uU2NoZW1hLCBwYXRoKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGNoZWNrRmllbGRzVXNhZ2UoanNvblNjaGVtYSwgcGF0aDogc3RyaW5nKSB7XG4gICAgbGV0IGZpZWxkc0lkOiBzdHJpbmdbXSA9IE9iamVjdC5rZXlzKGpzb25TY2hlbWEucHJvcGVydGllcyk7XG4gICAgbGV0IHVzZWRGaWVsZHMgPSB7fTtcbiAgICBmb3IgKGxldCBmaWVsZHNldCBvZiBqc29uU2NoZW1hLmZpZWxkc2V0cykge1xuICAgICAgZm9yIChsZXQgZmllbGRJZCBvZiBmaWVsZHNldC5maWVsZHMpIHtcbiAgICAgICAgaWYgKHVzZWRGaWVsZHNbZmllbGRJZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHVzZWRGaWVsZHNbZmllbGRJZF0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB1c2VkRmllbGRzW2ZpZWxkSWRdLnB1c2goZmllbGRzZXQuaWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGZpZWxkSWQgb2YgZmllbGRzSWQpIHtcbiAgICAgIGlmICh1c2VkRmllbGRzLmhhc093blByb3BlcnR5KGZpZWxkSWQpKSB7XG4gICAgICAgIGlmICh1c2VkRmllbGRzW2ZpZWxkSWRdLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBzY2hlbWFFcnJvcihgJHtmaWVsZElkfSBpcyByZWZlcmVuY2VkIGJ5IG1vcmUgdGhhbiBvbmUgZmllbGRzZXQ6ICR7dXNlZEZpZWxkc1tmaWVsZElkXX1gLCBwYXRoKTtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgdXNlZEZpZWxkc1tmaWVsZElkXTtcbiAgICAgIH0gZWxzZSBpZiAoanNvblNjaGVtYS5yZXF1aXJlZC5pbmRleE9mKGZpZWxkSWQpID4gLTEpIHtcbiAgICAgICAgc2NoZW1hRXJyb3IoYCR7ZmllbGRJZH0gaXMgYSByZXF1aXJlZCBmaWVsZCBidXQgaXQgaXMgbm90IHJlZmVyZW5jZWQgYXMgcGFydCBvZiBhICdvcmRlcicgb3IgYSAnZmllbGRzZXQnIHByb3BlcnR5YCwgcGF0aCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWxldGUganNvblNjaGVtYVtmaWVsZElkXTtcbiAgICAgICAgc2NoZW1hV2FybmluZyhgUmVtb3ZpbmcgdW5yZWZlcmVuY2VkIGZpZWxkICR7ZmllbGRJZH1gLCBwYXRoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCByZW1haW5pbmdmaWVsZHNJZCBpbiB1c2VkRmllbGRzKSB7XG4gICAgICBpZiAodXNlZEZpZWxkcy5oYXNPd25Qcm9wZXJ0eShyZW1haW5pbmdmaWVsZHNJZCkpIHtcbiAgICAgICAgc2NoZW1hV2FybmluZyhgUmVmZXJlbmNpbmcgbm9uLWV4aXN0ZW50IGZpZWxkICR7cmVtYWluaW5nZmllbGRzSWR9IGluIG9uZSBvciBtb3JlIGZpZWxkc2V0c2AsIHBhdGgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGNyZWF0ZUZpZWxkc2V0cyhqc29uU2NoZW1hKSB7XG4gICAganNvblNjaGVtYS5vcmRlciA9IE9iamVjdC5rZXlzKGpzb25TY2hlbWEucHJvcGVydGllcyk7XG4gICAgU2NoZW1hUHJlcHJvY2Vzc29yLnJlcGxhY2VPcmRlckJ5RmllbGRzZXRzKGpzb25TY2hlbWEpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgcmVwbGFjZU9yZGVyQnlGaWVsZHNldHMoanNvblNjaGVtYSkge1xuICAgIGpzb25TY2hlbWEuZmllbGRzZXRzID0gW3tcbiAgICAgIGlkOiAnZmllbGRzZXQtZGVmYXVsdCcsXG4gICAgICB0aXRsZToganNvblNjaGVtYS50aXRsZSB8fCAnJyxcbiAgICAgIGRlc2NyaXB0aW9uOiBqc29uU2NoZW1hLmRlc2NyaXB0aW9uIHx8ICcnLFxuICAgICAgbmFtZToganNvblNjaGVtYS5uYW1lIHx8ICcnLFxuICAgICAgZmllbGRzOiBqc29uU2NoZW1hLm9yZGVyXG4gICAgfV07XG4gICAgZGVsZXRlIGpzb25TY2hlbWEub3JkZXI7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBub3JtYWxpemVXaWRnZXQoZmllbGRTY2hlbWE6IGFueSkge1xuICAgIGxldCB3aWRnZXQgPSBmaWVsZFNjaGVtYS53aWRnZXQ7XG4gICAgaWYgKHdpZGdldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB3aWRnZXQgPSB7J2lkJzogZmllbGRTY2hlbWEudHlwZX07XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygd2lkZ2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgd2lkZ2V0ID0geydpZCc6IHdpZGdldH07XG4gICAgfVxuICAgIGZpZWxkU2NoZW1hLndpZGdldCA9IHdpZGdldDtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGNoZWNrSXRlbXMoanNvblNjaGVtYSwgcGF0aCkge1xuICAgIGlmIChqc29uU2NoZW1hLml0ZW1zID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNjaGVtYUVycm9yKCdObyBcXCdpdGVtc1xcJyBwcm9wZXJ0eSBpbiBhcnJheScsIHBhdGgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIHJlY3Vyc2l2ZUNoZWNrKGpzb25TY2hlbWEsIHBhdGg6IHN0cmluZykge1xuICAgIGlmIChqc29uU2NoZW1hLnR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBmb3IgKGxldCBmaWVsZElkIGluIGpzb25TY2hlbWEucHJvcGVydGllcykge1xuICAgICAgICBpZiAoanNvblNjaGVtYS5wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KGZpZWxkSWQpKSB7XG4gICAgICAgICAgbGV0IGZpZWxkU2NoZW1hID0ganNvblNjaGVtYS5wcm9wZXJ0aWVzW2ZpZWxkSWRdO1xuICAgICAgICAgIFNjaGVtYVByZXByb2Nlc3Nvci5wcmVwcm9jZXNzKGZpZWxkU2NoZW1hLCBwYXRoICsgZmllbGRJZCArICcvJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChqc29uU2NoZW1hLmhhc093blByb3BlcnR5KCdkZWZpbml0aW9ucycpKSB7XG4gICAgICAgIGZvciAobGV0IGZpZWxkSWQgaW4ganNvblNjaGVtYS5kZWZpbml0aW9ucykge1xuICAgICAgICAgIGlmIChqc29uU2NoZW1hLmRlZmluaXRpb25zLmhhc093blByb3BlcnR5KGZpZWxkSWQpKSB7XG4gICAgICAgICAgICBsZXQgZmllbGRTY2hlbWEgPSBqc29uU2NoZW1hLmRlZmluaXRpb25zW2ZpZWxkSWRdO1xuICAgICAgICAgICAgU2NoZW1hUHJlcHJvY2Vzc29yLnJlbW92ZVJlY3Vyc2l2ZVJlZlByb3BlcnRpZXMoZmllbGRTY2hlbWEsIGAjL2RlZmluaXRpb25zLyR7ZmllbGRJZH1gKTtcbiAgICAgICAgICAgIFNjaGVtYVByZXByb2Nlc3Nvci5wcmVwcm9jZXNzKGZpZWxkU2NoZW1hLCBwYXRoICsgZmllbGRJZCArICcvJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChqc29uU2NoZW1hLnR5cGUgPT09ICdhcnJheScpIHtcbiAgICAgIFNjaGVtYVByZXByb2Nlc3Nvci5wcmVwcm9jZXNzKGpzb25TY2hlbWEuaXRlbXMsIHBhdGggKyAnKi8nKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyByZW1vdmVSZWN1cnNpdmVSZWZQcm9wZXJ0aWVzKGpzb25TY2hlbWEsIGRlZmluaXRpb25QYXRoKSB7XG4gICAgLy8gdG8gYXZvaWQgaW5maW5pdGUgbG9vcFxuICAgIGlmIChqc29uU2NoZW1hLnR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBmb3IgKGxldCBmaWVsZElkIGluIGpzb25TY2hlbWEucHJvcGVydGllcykge1xuICAgICAgICBpZiAoanNvblNjaGVtYS5wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KGZpZWxkSWQpKSB7XG4gICAgICAgICAgaWYgKGpzb25TY2hlbWEucHJvcGVydGllc1tmaWVsZElkXS4kcmVmXG4gICAgICAgICAgICAmJiBqc29uU2NoZW1hLnByb3BlcnRpZXNbZmllbGRJZF0uJHJlZiA9PT0gZGVmaW5pdGlvblBhdGgpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBqc29uU2NoZW1hLnByb3BlcnRpZXNbZmllbGRJZF07XG4gICAgICAgICAgfSBlbHNlIGlmIChqc29uU2NoZW1hLnByb3BlcnRpZXNbZmllbGRJZF0udHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIFNjaGVtYVByZXByb2Nlc3Nvci5yZW1vdmVSZWN1cnNpdmVSZWZQcm9wZXJ0aWVzKGpzb25TY2hlbWEucHJvcGVydGllc1tmaWVsZElkXSwgZGVmaW5pdGlvblBhdGgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLyoqXG4gICAqIEVuYWJsZXMgYWxpYXMgbmFtZXMgZm9yIEpTT04gc2NoZW1hIGV4dGVuc2lvbnMuXG4gICAqXG4gICAqIENvcGllcyB0aGUgdmFsdWUgb2YgZWFjaCBhbGlhcyBKU09OIHNjaGVtYSBwcm9wZXJ0eVxuICAgKiB0byB0aGUgSlNPTiBzY2hlbWEgcHJvcGVydHkgb2Ygbmd4LXNjaGVtYS1mb3JtLlxuICAgKlxuICAgKiBAcGFyYW0gc2NoZW1hIEpTT04gc2NoZW1hIHRvIGVuYWJsZSBhbGlhcyBuYW1lcy5cbiAgICovXG4gIHByaXZhdGUgc3RhdGljIG5vcm1hbGl6ZUV4dGVuc2lvbnMoc2NoZW1hOiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCBleHRlbnNpb25zID0gW1xuICAgICAgICB7IG5hbWU6IFwiZmllbGRzZXRzXCIsIHJlZ2V4OiAvXngtP2ZpZWxkLT9zZXRzJC9pIH0sXG4gICAgICAgIHsgbmFtZTogXCJ3aWRnZXRcIiwgICAgcmVnZXg6IC9eeC0/d2lkZ2V0JC9pIH0sXG4gICAgICAgIHsgbmFtZTogXCJ2aXNpYmxlSWZcIiwgcmVnZXg6IC9eeC0/dmlzaWJsZS0/aWYkL2kgfVxuICAgIF07XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHNjaGVtYSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICBsZXQgayA9IGtleXNbaV07XG4gICAgICBsZXQgZSA9IGV4dGVuc2lvbnMuZmluZChlID0+ICEhay5tYXRjaChlLnJlZ2V4KSk7XG4gICAgICBpZiAoZSkge1xuICAgICAgICBsZXQgdiA9IHNjaGVtYVtrXTtcbiAgICAgICAgbGV0IGNvcHkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHYpKTtcbiAgICAgICAgc2NoZW1hW2UubmFtZV0gPSBjb3B5O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4iLCJpbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tICcuL3ZhbGlkYXRvcic7XG5cbmV4cG9ydCBjbGFzcyBWYWxpZGF0b3JSZWdpc3RyeSB7XG4gIHByaXZhdGUgdmFsaWRhdG9yczogVmFsaWRhdG9yW10gPSBbXTtcblxuICByZWdpc3RlcihwYXRoOiBzdHJpbmcsIHZhbGlkYXRvcjogVmFsaWRhdG9yKSB7XG4gICAgdGhpcy52YWxpZGF0b3JzW3BhdGhdID0gdmFsaWRhdG9yO1xuICB9XG5cbiAgZ2V0KHBhdGg6IHN0cmluZyk6IFZhbGlkYXRvciB7XG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yc1twYXRoXTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMudmFsaWRhdG9ycyA9IFtdO1xuICB9XG59XG4iLCJpbXBvcnQge0JpbmRpbmd9IGZyb20gJy4vYmluZGluZyc7XG5cbmV4cG9ydCBjbGFzcyBCaW5kaW5nUmVnaXN0cnkge1xuICBiaW5kaW5nczogQmluZGluZ1tdID0gW107XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5iaW5kaW5ncyA9IFtdO1xuICB9XG5cbiAgcmVnaXN0ZXIocGF0aDogc3RyaW5nLCBiaW5kaW5nOiBCaW5kaW5nIHwgQmluZGluZ1tdKSB7XG4gICAgdGhpcy5iaW5kaW5nc1twYXRoXSA9IFtdLmNvbmNhdChiaW5kaW5nKTtcbiAgfVxuXG4gIGdldChwYXRoOiBzdHJpbmcpOiBCaW5kaW5nW10ge1xuICAgIHJldHVybiB0aGlzLmJpbmRpbmdzW3BhdGhdO1xuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBaU2NoZW1hIGZyb20gJ3otc2NoZW1hJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNjaGVtYVZhbGlkYXRvckZhY3Rvcnkge1xuICBhYnN0cmFjdCBjcmVhdGVWYWxpZGF0b3JGbihzY2hlbWEpOiAodmFsdWU6IGFueSkgPT4gYW55O1xuXG4gIGFic3RyYWN0IGdldFNjaGVtYShzY2hlbWEsIHJlZik6IGFueTtcbn1cblxuZXhwb3J0IGNsYXNzIFpTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IGV4dGVuZHMgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB7XG5cbiAgcHJvdGVjdGVkIHpzY2hlbWE7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnpzY2hlbWEgPSBuZXcgWlNjaGVtYSh7XG4gICAgICAgIGJyZWFrT25GaXJzdEVycm9yOiBmYWxzZVxuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlVmFsaWRhdG9yRm4oc2NoZW1hOiBhbnkpIHtcbiAgICByZXR1cm4gKHZhbHVlKTogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0gPT4ge1xuXG4gICAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdudW1iZXInIHx8IHNjaGVtYS50eXBlID09PSAnaW50ZWdlcicpIHtcbiAgICAgICAgdmFsdWUgPSArdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuenNjaGVtYS52YWxpZGF0ZSh2YWx1ZSwgc2NoZW1hKTtcbiAgICAgIGxldCBlcnIgPSB0aGlzLnpzY2hlbWEuZ2V0TGFzdEVycm9ycygpO1xuXG4gICAgICB0aGlzLmRlbm9ybWFsaXplUmVxdWlyZWRQcm9wZXJ0eVBhdGhzKGVycik7XG5cbiAgICAgIHJldHVybiBlcnIgfHwgbnVsbDtcbiAgICB9O1xuICB9XG5cbiAgZ2V0U2NoZW1hKHNjaGVtYTogYW55LCByZWY6IHN0cmluZykge1xuICAgIC8vIGNoZWNrIGRlZmluaXRpb25zIGFyZSB2YWxpZFxuICAgIGNvbnN0IGlzVmFsaWQgPSB0aGlzLnpzY2hlbWEuY29tcGlsZVNjaGVtYShzY2hlbWEpO1xuICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXREZWZpbml0aW9uKHNjaGVtYSwgcmVmKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgdGhpcy56c2NoZW1hLmdldExhc3RFcnJvcigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZGVub3JtYWxpemVSZXF1aXJlZFByb3BlcnR5UGF0aHMoZXJyOiBhbnlbXSkge1xuICAgIGlmIChlcnIgJiYgZXJyLmxlbmd0aCkge1xuICAgICAgZXJyID0gZXJyLm1hcChlcnJvciA9PiB7XG4gICAgICAgIGlmIChlcnJvci5wYXRoID09PSAnIy8nICYmIGVycm9yLmNvZGUgPT09ICdPQkpFQ1RfTUlTU0lOR19SRVFVSVJFRF9QUk9QRVJUWScpIHtcbiAgICAgICAgICBlcnJvci5wYXRoID0gYCR7ZXJyb3IucGF0aH0ke2Vycm9yLnBhcmFtc1swXX1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGVmaW5pdGlvbihzY2hlbWE6IGFueSwgcmVmOiBzdHJpbmcpIHtcbiAgICBsZXQgZm91bmRTY2hlbWEgPSBzY2hlbWE7XG4gICAgcmVmLnNwbGl0KCcvJykuc2xpY2UoMSkuZm9yRWFjaChwdHIgPT4ge1xuICAgICAgaWYgKHB0cikge1xuICAgICAgICBmb3VuZFNjaGVtYSA9IGZvdW5kU2NoZW1hW3B0cl07XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZvdW5kU2NoZW1hO1xuICB9XG59XG5cbiIsImV4cG9ydCBjbGFzcyBXaWRnZXRSZWdpc3RyeSB7XG5cbiAgcHJpdmF0ZSB3aWRnZXRzOiB7IFt0eXBlOiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuXG4gIHByaXZhdGUgZGVmYXVsdFdpZGdldDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgc2V0RGVmYXVsdFdpZGdldCh3aWRnZXQ6IGFueSkge1xuICAgIHRoaXMuZGVmYXVsdFdpZGdldCA9IHdpZGdldDtcbiAgfVxuXG4gIGdldERlZmF1bHRXaWRnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdFdpZGdldDtcbiAgfVxuXG4gIGhhc1dpZGdldCh0eXBlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy53aWRnZXRzLmhhc093blByb3BlcnR5KHR5cGUpO1xuICB9XG5cbiAgcmVnaXN0ZXIodHlwZTogc3RyaW5nLCB3aWRnZXQ6IGFueSkge1xuICAgIHRoaXMud2lkZ2V0c1t0eXBlXSA9IHdpZGdldDtcbiAgfVxuXG4gIGdldFdpZGdldFR5cGUodHlwZTogc3RyaW5nKTogYW55IHtcbiAgICBpZiAodGhpcy5oYXNXaWRnZXQodHlwZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLndpZGdldHNbdHlwZV07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmRlZmF1bHRXaWRnZXQ7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIFZpZXdDb250YWluZXJSZWYsXG4gIENvbXBvbmVudFJlZixcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBJbmplY3RhYmxlXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBXaWRnZXRSZWdpc3RyeSB9IGZyb20gJy4vd2lkZ2V0cmVnaXN0cnknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2lkZ2V0RmFjdG9yeSB7XG5cbiAgcHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyO1xuICBwcml2YXRlIHJlZ2lzdHJ5OiBXaWRnZXRSZWdpc3RyeTtcblxuICBjb25zdHJ1Y3RvcihyZWdpc3RyeTogV2lkZ2V0UmVnaXN0cnksIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHtcbiAgICB0aGlzLnJlZ2lzdHJ5ID0gcmVnaXN0cnk7XG4gICAgdGhpcy5yZXNvbHZlciA9IHJlc29sdmVyO1xuICB9XG5cbiAgY3JlYXRlV2lkZ2V0KGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiwgdHlwZTogc3RyaW5nKTogQ29tcG9uZW50UmVmPGFueT4ge1xuICAgIGxldCBjb21wb25lbnRDbGFzcyA9IHRoaXMucmVnaXN0cnkuZ2V0V2lkZ2V0VHlwZSh0eXBlKTtcblxuICAgIGxldCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnRDbGFzcyk7XG4gICAgcmV0dXJuIGNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRlcm1pbmF0b3JTZXJ2aWNlIHtcbiAgcHVibGljIG9uRGVzdHJveTogU3ViamVjdDxib29sZWFuPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm9uRGVzdHJveSA9IG5ldyBTdWJqZWN0KCk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMub25EZXN0cm95Lm5leHQodHJ1ZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIE9uQ2hhbmdlcyxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQge0FjdGlvbn0gZnJvbSAnLi9tb2RlbC9hY3Rpb24nO1xuaW1wb3J0IHtBY3Rpb25SZWdpc3RyeX0gZnJvbSAnLi9tb2RlbC9hY3Rpb25yZWdpc3RyeSc7XG5pbXBvcnQge0Zvcm1Qcm9wZXJ0eX0gZnJvbSAnLi9tb2RlbC9mb3JtcHJvcGVydHknO1xuaW1wb3J0IHtGb3JtUHJvcGVydHlGYWN0b3J5fSBmcm9tICcuL21vZGVsL2Zvcm1wcm9wZXJ0eWZhY3RvcnknO1xuaW1wb3J0IHtTY2hlbWFQcmVwcm9jZXNzb3J9IGZyb20gJy4vbW9kZWwvc2NoZW1hcHJlcHJvY2Vzc29yJztcbmltcG9ydCB7VmFsaWRhdG9yUmVnaXN0cnl9IGZyb20gJy4vbW9kZWwvdmFsaWRhdG9ycmVnaXN0cnknO1xuaW1wb3J0IHtWYWxpZGF0b3J9IGZyb20gJy4vbW9kZWwvdmFsaWRhdG9yJztcbmltcG9ydCB7QmluZGluZ30gZnJvbSAnLi9tb2RlbC9iaW5kaW5nJztcbmltcG9ydCB7QmluZGluZ1JlZ2lzdHJ5fSBmcm9tICcuL21vZGVsL2JpbmRpbmdyZWdpc3RyeSc7XG5cbmltcG9ydCB7U2NoZW1hVmFsaWRhdG9yRmFjdG9yeX0gZnJvbSAnLi9zY2hlbWF2YWxpZGF0b3JmYWN0b3J5JztcbmltcG9ydCB7V2lkZ2V0RmFjdG9yeX0gZnJvbSAnLi93aWRnZXRmYWN0b3J5JztcbmltcG9ydCB7VGVybWluYXRvclNlcnZpY2V9IGZyb20gJy4vdGVybWluYXRvci5zZXJ2aWNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZhY3Rvcnkoc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSwgdmFsaWRhdG9yUmVnaXN0cnkpIHtcbiAgcmV0dXJuIG5ldyBGb3JtUHJvcGVydHlGYWN0b3J5KHNjaGVtYVZhbGlkYXRvckZhY3RvcnksIHZhbGlkYXRvclJlZ2lzdHJ5KTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtZm9ybScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGZvcm0+XG4gICAgICA8c2YtZm9ybS1lbGVtZW50XG4gICAgICAgICpuZ0lmPVwicm9vdFByb3BlcnR5XCIgW2Zvcm1Qcm9wZXJ0eV09XCJyb290UHJvcGVydHlcIj48L3NmLWZvcm0tZWxlbWVudD5cbiAgICA8L2Zvcm0+YCxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQWN0aW9uUmVnaXN0cnksXG4gICAgVmFsaWRhdG9yUmVnaXN0cnksXG4gICAgQmluZGluZ1JlZ2lzdHJ5LFxuICAgIFNjaGVtYVByZXByb2Nlc3NvcixcbiAgICBXaWRnZXRGYWN0b3J5LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEZvcm1Qcm9wZXJ0eUZhY3RvcnksXG4gICAgICB1c2VGYWN0b3J5OiB1c2VGYWN0b3J5LFxuICAgICAgZGVwczogW1NjaGVtYVZhbGlkYXRvckZhY3RvcnksIFZhbGlkYXRvclJlZ2lzdHJ5XVxuICAgIH0sXG4gICAgVGVybWluYXRvclNlcnZpY2UsXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogRm9ybUNvbXBvbmVudCxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuICBASW5wdXQoKSBzY2hlbWE6IGFueSA9IG51bGw7XG5cbiAgQElucHV0KCkgbW9kZWw6IGFueTtcblxuICBASW5wdXQoKSBhY3Rpb25zOiB7IFthY3Rpb25JZDogc3RyaW5nXTogQWN0aW9uIH0gPSB7fTtcblxuICBASW5wdXQoKSB2YWxpZGF0b3JzOiB7IFtwYXRoOiBzdHJpbmddOiBWYWxpZGF0b3IgfSA9IHt9O1xuXG4gIEBJbnB1dCgpIGJpbmRpbmdzOiB7IFtwYXRoOiBzdHJpbmddOiBCaW5kaW5nIH0gPSB7fTtcblxuICBAT3V0cHV0KCkgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHsgdmFsdWU6IGFueSB9PigpO1xuXG4gIEBPdXRwdXQoKSBtb2RlbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBPdXRwdXQoKSBpc1ZhbGlkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIEBPdXRwdXQoKSBvbkVycm9yQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx7IHZhbHVlOiBhbnlbXSB9PigpO1xuXG4gIEBPdXRwdXQoKSBvbkVycm9yc0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8e3ZhbHVlOiBhbnl9PigpO1xuXG4gIHJvb3RQcm9wZXJ0eTogRm9ybVByb3BlcnR5ID0gbnVsbDtcblxuICBwcml2YXRlIG9uQ2hhbmdlQ2FsbGJhY2s6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZvcm1Qcm9wZXJ0eUZhY3Rvcnk6IEZvcm1Qcm9wZXJ0eUZhY3RvcnksXG4gICAgcHJpdmF0ZSBhY3Rpb25SZWdpc3RyeTogQWN0aW9uUmVnaXN0cnksXG4gICAgcHJpdmF0ZSB2YWxpZGF0b3JSZWdpc3RyeTogVmFsaWRhdG9yUmVnaXN0cnksXG4gICAgcHJpdmF0ZSBiaW5kaW5nUmVnaXN0cnk6IEJpbmRpbmdSZWdpc3RyeSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSB0ZXJtaW5hdG9yOiBUZXJtaW5hdG9yU2VydmljZVxuICApIHsgfVxuXG4gIHdyaXRlVmFsdWUob2JqOiBhbnkpIHtcbiAgICBpZiAodGhpcy5yb290UHJvcGVydHkpIHtcbiAgICAgIHRoaXMucm9vdFByb3BlcnR5LnJlc2V0KG9iaiwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuICAgIGlmICh0aGlzLnJvb3RQcm9wZXJ0eSkge1xuICAgICAgdGhpcy5yb290UHJvcGVydHkudmFsdWVDaGFuZ2VzLnN1YnNjcmliZShcbiAgICAgICAgdGhpcy5vblZhbHVlQ2hhbmdlcy5iaW5kKHRoaXMpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8vIFRPRE8gaW1wbGVtZW50XG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcbiAgfVxuXG4gIC8vIFRPRE8gaW1wbGVtZW50XG4gIC8vIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik/OiB2b2lkXG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLnZhbGlkYXRvcnMpIHtcbiAgICAgIHRoaXMuc2V0VmFsaWRhdG9ycygpO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLmFjdGlvbnMpIHtcbiAgICAgIHRoaXMuc2V0QWN0aW9ucygpO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLmJpbmRpbmdzKSB7XG4gICAgICB0aGlzLnNldEJpbmRpbmdzKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2NoZW1hICYmICF0aGlzLnNjaGVtYS50eXBlKSB7XG4gICAgICB0aGlzLnNjaGVtYS50eXBlID0gJ29iamVjdCc7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2NoZW1hICYmIGNoYW5nZXMuc2NoZW1hKSB7XG4gICAgICBpZiAoIWNoYW5nZXMuc2NoZW1hLmZpcnN0Q2hhbmdlKSB7XG4gICAgICAgIHRoaXMudGVybWluYXRvci5kZXN0cm95KCk7XG4gICAgICB9XG5cbiAgICAgIFNjaGVtYVByZXByb2Nlc3Nvci5wcmVwcm9jZXNzKHRoaXMuc2NoZW1hKTtcbiAgICAgIHRoaXMucm9vdFByb3BlcnR5ID0gdGhpcy5mb3JtUHJvcGVydHlGYWN0b3J5LmNyZWF0ZVByb3BlcnR5KHRoaXMuc2NoZW1hKTtcbiAgICAgIGlmICh0aGlzLm1vZGVsKSB7XG4gICAgICAgIC8vIHRoaXMucm9vdFByb3BlcnR5LnJlc2V0KHRoaXMubW9kZWwsIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5yb290UHJvcGVydHkudmFsdWVDaGFuZ2VzLnN1YnNjcmliZShcbiAgICAgICAgdGhpcy5vblZhbHVlQ2hhbmdlcy5iaW5kKHRoaXMpXG4gICAgICApO1xuXG4gICAgICB0aGlzLnJvb3RQcm9wZXJ0eS5lcnJvcnNDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICAgIHRoaXMub25FcnJvckNoYW5nZS5lbWl0KHt2YWx1ZTogdmFsdWV9KTtcbiAgICAgICAgdGhpcy5pc1ZhbGlkLmVtaXQoISh2YWx1ZSAmJiB2YWx1ZS5sZW5ndGgpKTtcbiAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2NoZW1hICYmIChjaGFuZ2VzLm1vZGVsIHx8IGNoYW5nZXMuc2NoZW1hICkpIHtcbiAgICAgIHRoaXMucm9vdFByb3BlcnR5LnJlc2V0KHRoaXMubW9kZWwsIGZhbHNlKTtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgfVxuXG4gIHByaXZhdGUgc2V0VmFsaWRhdG9ycygpIHtcbiAgICB0aGlzLnZhbGlkYXRvclJlZ2lzdHJ5LmNsZWFyKCk7XG4gICAgaWYgKHRoaXMudmFsaWRhdG9ycykge1xuICAgICAgZm9yIChjb25zdCB2YWxpZGF0b3JJZCBpbiB0aGlzLnZhbGlkYXRvcnMpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9ycy5oYXNPd25Qcm9wZXJ0eSh2YWxpZGF0b3JJZCkpIHtcbiAgICAgICAgICB0aGlzLnZhbGlkYXRvclJlZ2lzdHJ5LnJlZ2lzdGVyKHZhbGlkYXRvcklkLCB0aGlzLnZhbGlkYXRvcnNbdmFsaWRhdG9ySWRdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0QWN0aW9ucygpIHtcbiAgICB0aGlzLmFjdGlvblJlZ2lzdHJ5LmNsZWFyKCk7XG4gICAgaWYgKHRoaXMuYWN0aW9ucykge1xuICAgICAgZm9yIChjb25zdCBhY3Rpb25JZCBpbiB0aGlzLmFjdGlvbnMpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShhY3Rpb25JZCkpIHtcbiAgICAgICAgICB0aGlzLmFjdGlvblJlZ2lzdHJ5LnJlZ2lzdGVyKGFjdGlvbklkLCB0aGlzLmFjdGlvbnNbYWN0aW9uSWRdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0QmluZGluZ3MoKSB7XG4gICAgdGhpcy5iaW5kaW5nUmVnaXN0cnkuY2xlYXIoKTtcbiAgICBpZiAodGhpcy5iaW5kaW5ncykge1xuICAgICAgZm9yIChjb25zdCBiaW5kaW5nUGF0aCBpbiB0aGlzLmJpbmRpbmdzKSB7XG4gICAgICAgIGlmICh0aGlzLmJpbmRpbmdzLmhhc093blByb3BlcnR5KGJpbmRpbmdQYXRoKSkge1xuICAgICAgICAgIHRoaXMuYmluZGluZ1JlZ2lzdHJ5LnJlZ2lzdGVyKGJpbmRpbmdQYXRoLCB0aGlzLmJpbmRpbmdzW2JpbmRpbmdQYXRoXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgdGhpcy5yb290UHJvcGVydHkucmVzZXQobnVsbCwgdHJ1ZSk7XG4gIH1cblxuICBwcml2YXRlIHNldE1vZGVsKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy5tb2RlbCkge1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm1vZGVsLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW9kZWwgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uVmFsdWVDaGFuZ2VzKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMub25DaGFuZ2VDYWxsYmFjaykge1xuICAgICAgdGhpcy5zZXRNb2RlbCh2YWx1ZSk7XG4gICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodmFsdWUpO1xuICAgIH1cblxuICAgIC8vIHR3byB3YXkgYmluZGluZyBpcyB1c2VkXG4gICAgaWYgKHRoaXMubW9kZWxDaGFuZ2Uub2JzZXJ2ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmICghdGhpcy5vbkNoYW5nZUNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuc2V0TW9kZWwodmFsdWUpO1xuICAgICAgfVxuICAgICAgdGhpcy5tb2RlbENoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICB9XG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KHt2YWx1ZTogdmFsdWV9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBFbGVtZW50UmVmLFxuICBJbnB1dCwgT25EZXN0cm95LFxuICBPbkluaXQsIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgRm9ybUNvbnRyb2xcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQge1dpZGdldH0gZnJvbSAnLi93aWRnZXQnO1xuXG5pbXBvcnQge0FjdGlvblJlZ2lzdHJ5fSBmcm9tICcuL21vZGVsL2FjdGlvbnJlZ2lzdHJ5JztcbmltcG9ydCB7Rm9ybVByb3BlcnR5fSBmcm9tICcuL21vZGVsL2Zvcm1wcm9wZXJ0eSc7XG5pbXBvcnQge0JpbmRpbmdSZWdpc3RyeX0gZnJvbSAnLi9tb2RlbC9iaW5kaW5ncmVnaXN0cnknO1xuaW1wb3J0IHtCaW5kaW5nfSBmcm9tICcuL21vZGVsL2JpbmRpbmcnO1xuaW1wb3J0IHtGdW5jdGlvbn0gZnJvbSAnZXN0cmVlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtZm9ybS1lbGVtZW50JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2ICpuZ0lmPVwiZm9ybVByb3BlcnR5LnZpc2libGVcIlxuICAgICAgICAgW2NsYXNzLmhhcy1lcnJvcl09XCIhY29udHJvbC52YWxpZFwiXG4gICAgICAgICBbY2xhc3MuaGFzLXN1Y2Nlc3NdPVwiY29udHJvbC52YWxpZFwiPlxuICAgICAgPHNmLXdpZGdldC1jaG9vc2VyXG4gICAgICAgICh3aWRnZXRJbnN0YW5jaWF0ZWQpPVwib25XaWRnZXRJbnN0YW5jaWF0ZWQoJGV2ZW50KVwiXG4gICAgICAgIFt3aWRnZXRJbmZvXT1cImZvcm1Qcm9wZXJ0eS5zY2hlbWEud2lkZ2V0XCI+XG4gICAgICA8L3NmLXdpZGdldC1jaG9vc2VyPlxuICAgICAgPHNmLWZvcm0tZWxlbWVudC1hY3Rpb24gKm5nRm9yPVwibGV0IGJ1dHRvbiBvZiBidXR0b25zXCIgW2J1dHRvbl09XCJidXR0b25cIiBbZm9ybVByb3BlcnR5XT1cImZvcm1Qcm9wZXJ0eVwiPjwvc2YtZm9ybS1lbGVtZW50LWFjdGlvbj5cbiAgICA8L2Rpdj5gXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1FbGVtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgc3RhdGljIGNvdW50ZXIgPSAwO1xuXG4gIEBJbnB1dCgpIGZvcm1Qcm9wZXJ0eTogRm9ybVByb3BlcnR5O1xuICBjb250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJywgKCkgPT4gbnVsbCk7XG5cbiAgd2lkZ2V0OiBXaWRnZXQ8YW55PiA9IG51bGw7XG5cbiAgYnV0dG9ucyA9IFtdO1xuXG4gIHVubGlzdGVuID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25SZWdpc3RyeTogQWN0aW9uUmVnaXN0cnksXG4gICAgICAgICAgICAgIHByaXZhdGUgYmluZGluZ1JlZ2lzdHJ5OiBCaW5kaW5nUmVnaXN0cnksXG4gICAgICAgICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnBhcnNlQnV0dG9ucygpO1xuICAgIHRoaXMuc2V0dXBCaW5kaW5ncygpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXR1cEJpbmRpbmdzKCkge1xuICAgIGNvbnN0IGJpbmRpbmdzOiBCaW5kaW5nW10gPSB0aGlzLmJpbmRpbmdSZWdpc3RyeS5nZXQodGhpcy5mb3JtUHJvcGVydHkucGF0aCk7XG4gICAgaWYgKChiaW5kaW5ncyB8fCBbXSkubGVuZ3RoKSB7XG4gICAgICBiaW5kaW5ncy5mb3JFYWNoKChiaW5kaW5nKSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgZXZlbnRJZCBpbiBiaW5kaW5nKSB7XG4gICAgICAgICAgdGhpcy5jcmVhdGVCaW5kaW5nKGV2ZW50SWQsIGJpbmRpbmdbZXZlbnRJZF0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUJpbmRpbmcoZXZlbnRJZCwgbGlzdGVuZXIpIHtcbiAgICB0aGlzLnVubGlzdGVuLnB1c2godGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBldmVudElkLFxuICAgICAgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChsaXN0ZW5lciBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICAgICAgbGlzdGVuZXIoZXZlbnQsIHRoaXMuZm9ybVByb3BlcnR5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ0NhbGxpbmcgbm9uIGZ1bmN0aW9uIGhhbmRsZXIgZm9yIGV2ZW50SWQgJyArIGV2ZW50SWQgKyAnIGZvciBwYXRoICcgKyB0aGlzLmZvcm1Qcm9wZXJ0eS5wYXRoKTtcbiAgICAgICAgfVxuICAgICAgfSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBwYXJzZUJ1dHRvbnMoKSB7XG4gICAgaWYgKHRoaXMuZm9ybVByb3BlcnR5LnNjaGVtYS5idXR0b25zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuYnV0dG9ucyA9IHRoaXMuZm9ybVByb3BlcnR5LnNjaGVtYS5idXR0b25zO1xuXG4gICAgICBmb3IgKGxldCBidXR0b24gb2YgdGhpcy5idXR0b25zKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlQnV0dG9uQ2FsbGJhY2soYnV0dG9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUJ1dHRvbkNhbGxiYWNrKGJ1dHRvbikge1xuICAgIGJ1dHRvbi5hY3Rpb24gPSAoZSkgPT4ge1xuICAgICAgbGV0IGFjdGlvbjtcbiAgICAgIGlmIChidXR0b24uaWQgJiYgKGFjdGlvbiA9IHRoaXMuYWN0aW9uUmVnaXN0cnkuZ2V0KGJ1dHRvbi5pZCkpKSB7XG4gICAgICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICAgICBhY3Rpb24odGhpcy5mb3JtUHJvcGVydHksIGJ1dHRvbi5wYXJhbWV0ZXJzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH07XG4gIH1cblxuICBvbldpZGdldEluc3RhbmNpYXRlZCh3aWRnZXQ6IFdpZGdldDxhbnk+KSB7XG4gICAgdGhpcy53aWRnZXQgPSB3aWRnZXQ7XG4gICAgbGV0IGlkID0gJ2ZpZWxkJyArIChGb3JtRWxlbWVudENvbXBvbmVudC5jb3VudGVyKyspO1xuXG4gICAgdGhpcy53aWRnZXQuZm9ybVByb3BlcnR5ID0gdGhpcy5mb3JtUHJvcGVydHk7XG4gICAgdGhpcy53aWRnZXQuc2NoZW1hID0gdGhpcy5mb3JtUHJvcGVydHkuc2NoZW1hO1xuICAgIHRoaXMud2lkZ2V0Lm5hbWUgPSBpZDtcbiAgICB0aGlzLndpZGdldC5pZCA9IGlkO1xuICAgIHRoaXMud2lkZ2V0LmNvbnRyb2wgPSB0aGlzLmNvbnRyb2w7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51bmxpc3Rlbikge1xuICAgICAgdGhpcy51bmxpc3Rlbi5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGl0ZW0oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENvbXBvbmVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveVxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtXaWRnZXRGYWN0b3J5fSBmcm9tIFwiLi93aWRnZXRmYWN0b3J5XCI7XG5pbXBvcnQge1Rlcm1pbmF0b3JTZXJ2aWNlfSBmcm9tIFwiLi90ZXJtaW5hdG9yLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtZm9ybS1lbGVtZW50LWFjdGlvbicsXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlICN0YXJnZXQ+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1FbGVtZW50Q29tcG9uZW50QWN0aW9uIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cbiAgQElucHV0KClcbiAgYnV0dG9uOiBhbnk7XG5cbiAgQElucHV0KClcbiAgZm9ybVByb3BlcnR5OiBhbnk7XG5cbiAgQFZpZXdDaGlsZCgndGFyZ2V0Jywge3JlYWQ6IFZpZXdDb250YWluZXJSZWZ9KSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgcHJpdmF0ZSByZWY6IENvbXBvbmVudFJlZjxhbnk+O1xuICBwcml2YXRlIHN1YnM6IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHdpZGdldEZhY3Rvcnk6IFdpZGdldEZhY3RvcnkgPSBudWxsLFxuICAgICAgICAgICAgICBwcml2YXRlIHRlcm1pbmF0b3I6IFRlcm1pbmF0b3JTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN1YnMgPSB0aGlzLnRlcm1pbmF0b3Iub25EZXN0cm95LnN1YnNjcmliZShkZXN0cm95ID0+IHtcbiAgICAgIGlmIChkZXN0cm95KSB7XG4gICAgICAgIHRoaXMucmVmLmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMucmVmID0gdGhpcy53aWRnZXRGYWN0b3J5LmNyZWF0ZVdpZGdldCh0aGlzLmNvbnRhaW5lciwgdGhpcy5idXR0b24ud2lkZ2V0IHx8ICdidXR0b24nKTtcbiAgICB0aGlzLnJlZi5pbnN0YW5jZS5idXR0b24gPSB0aGlzLmJ1dHRvbjtcbiAgICB0aGlzLnJlZi5pbnN0YW5jZS5mb3JtUHJvcGVydHkgPSB0aGlzLmZvcm1Qcm9wZXJ0eTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vicy51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENvbXBvbmVudFJlZixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGVybWluYXRvclNlcnZpY2UgfSBmcm9tICcuL3Rlcm1pbmF0b3Iuc2VydmljZSc7XG5pbXBvcnQgeyBXaWRnZXRGYWN0b3J5IH0gZnJvbSAnLi93aWRnZXRmYWN0b3J5JztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXdpZGdldC1jaG9vc2VyJyxcbiAgdGVtcGxhdGU6IGA8ZGl2ICN0YXJnZXQ+PC9kaXY+YCxcbn0pXG5leHBvcnQgY2xhc3MgV2lkZ2V0Q2hvb3NlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXG4gIEBJbnB1dCgpIHdpZGdldEluZm86IGFueTtcblxuICBAT3V0cHV0KCkgd2lkZ2V0SW5zdGFuY2lhdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQFZpZXdDaGlsZCgndGFyZ2V0Jywge3JlYWQ6IFZpZXdDb250YWluZXJSZWZ9KSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgcHJpdmF0ZSB3aWRnZXRJbnN0YW5jZTogYW55O1xuICBwcml2YXRlIHJlZjogQ29tcG9uZW50UmVmPGFueT47XG4gIHByaXZhdGUgc3ViczogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgd2lkZ2V0RmFjdG9yeTogV2lkZ2V0RmFjdG9yeSA9IG51bGwsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgdGVybWluYXRvcjogVGVybWluYXRvclNlcnZpY2UsXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdWJzID0gdGhpcy50ZXJtaW5hdG9yLm9uRGVzdHJveS5zdWJzY3JpYmUoZGVzdHJveSA9PiB7XG4gICAgICBpZiAoZGVzdHJveSkge1xuICAgICAgICB0aGlzLnJlZi5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLnJlZiA9IHRoaXMud2lkZ2V0RmFjdG9yeS5jcmVhdGVXaWRnZXQodGhpcy5jb250YWluZXIsIHRoaXMud2lkZ2V0SW5mby5pZCk7XG4gICAgdGhpcy53aWRnZXRJbnN0YW5jaWF0ZWQuZW1pdCh0aGlzLnJlZi5pbnN0YW5jZSk7XG4gICAgdGhpcy53aWRnZXRJbnN0YW5jZSA9IHRoaXMucmVmLmluc3RhbmNlO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vicy51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iLCJpbXBvcnQge0FmdGVyVmlld0luaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQge0FycmF5UHJvcGVydHl9IGZyb20gJy4vbW9kZWwvYXJyYXlwcm9wZXJ0eSc7XG5pbXBvcnQge0Zvcm1Qcm9wZXJ0eX0gZnJvbSAnLi9tb2RlbC9mb3JtcHJvcGVydHknO1xuaW1wb3J0IHtPYmplY3RQcm9wZXJ0eX0gZnJvbSAnLi9tb2RlbC9vYmplY3Rwcm9wZXJ0eSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBXaWRnZXQ8VCBleHRlbmRzIEZvcm1Qcm9wZXJ0eT4ge1xuICBmb3JtUHJvcGVydHk6IFQ7XG4gIGNvbnRyb2w6IEZvcm1Db250cm9sO1xuICBlcnJvck1lc3NhZ2VzOiBzdHJpbmdbXTtcblxuICBpZDogc3RyaW5nID0gJyc7XG4gIG5hbWU6IHN0cmluZyA9ICcnO1xuICBzY2hlbWE6IGFueSA9IHt9O1xufVxuXG5leHBvcnQgY2xhc3MgQ29udHJvbFdpZGdldCBleHRlbmRzIFdpZGdldDxGb3JtUHJvcGVydHk+IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmNvbnRyb2w7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgobmV3VmFsdWUpID0+IHtcbiAgICAgIGlmIChjb250cm9sLnZhbHVlICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICBjb250cm9sLnNldFZhbHVlKG5ld1ZhbHVlLCB7ZW1pdEV2ZW50OiBmYWxzZX0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LmVycm9yc0NoYW5nZXMuc3Vic2NyaWJlKChlcnJvcnMpID0+IHtcbiAgICAgIGNvbnRyb2wuc2V0RXJyb3JzKGVycm9ycywgeyBlbWl0RXZlbnQ6IHRydWUgfSk7XG4gICAgICBjb25zdCBtZXNzYWdlcyA9IChlcnJvcnMgfHwgW10pXG4gICAgICAgIC5maWx0ZXIoZSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGUucGF0aCAmJiBlLnBhdGguc2xpY2UoMSkgPT09IHRoaXMuZm9ybVByb3BlcnR5LnBhdGg7XG4gICAgICAgIH0pXG4gICAgICAgIC5tYXAoZSA9PiBlLm1lc3NhZ2UpO1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2VzID0gbWVzc2FnZXMuZmlsdGVyKChtLCBpKSA9PiBtZXNzYWdlcy5pbmRleE9mKG0pID09PSBpKTtcbiAgICB9KTtcbiAgICBjb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKG5ld1ZhbHVlKSA9PiB7XG4gICAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5zZXRWYWx1ZShuZXdWYWx1ZSwgZmFsc2UpO1xuICAgIH0pO1xuICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIEFycmF5TGF5b3V0V2lkZ2V0IGV4dGVuZHMgV2lkZ2V0PEFycmF5UHJvcGVydHk+IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmNvbnRyb2w7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkuZXJyb3JzQ2hhbmdlcy5zdWJzY3JpYmUoKGVycm9ycykgPT4ge1xuICAgICAgY29udHJvbC5zZXRFcnJvcnMoZXJyb3JzLCB7ZW1pdEV2ZW50OiB0cnVlfSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9iamVjdExheW91dFdpZGdldCBleHRlbmRzIFdpZGdldDxPYmplY3RQcm9wZXJ0eT4gaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuY29udHJvbDtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5lcnJvcnNDaGFuZ2VzLnN1YnNjcmliZSgoZXJyb3JzKSA9PiB7XG4gICAgICBjb250cm9sLnNldEVycm9ycyhlcnJvcnMsIHtlbWl0RXZlbnQ6IHRydWV9KTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFycmF5TGF5b3V0V2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtYXJyYXktd2lkZ2V0JyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwid2lkZ2V0IGZvcm0tZ3JvdXBcIj5cblx0PGxhYmVsIFthdHRyLmZvcl09XCJpZFwiIGNsYXNzPVwiaG9yaXpvbnRhbCBjb250cm9sLWxhYmVsXCI+XG5cdFx0e3sgc2NoZW1hLnRpdGxlIH19XG5cdDwvbGFiZWw+XG5cdDxzcGFuICpuZ0lmPVwic2NoZW1hLmRlc2NyaXB0aW9uXCIgY2xhc3M9XCJmb3JtSGVscFwiPnt7c2NoZW1hLmRlc2NyaXB0aW9ufX08L3NwYW4+XG5cdDxkaXYgKm5nRm9yPVwibGV0IGl0ZW1Qcm9wZXJ0eSBvZiBmb3JtUHJvcGVydHkucHJvcGVydGllczsgbGV0IGk9aW5kZXg7IHRyYWNrQnk6dHJhY2tCeUluZGV4XCI+XG5cdFx0PHNmLWZvcm0tZWxlbWVudCBbZm9ybVByb3BlcnR5XT1cIml0ZW1Qcm9wZXJ0eVwiPjwvc2YtZm9ybS1lbGVtZW50PlxuXHRcdDxidXR0b24gKGNsaWNrKT1cInJlbW92ZUl0ZW0oaSlcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBhcnJheS1yZW1vdmUtYnV0dG9uXCI+XG5cdFx0XHQ8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tbWludXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+IFJlbW92ZVxuXHRcdDwvYnV0dG9uPlxuXHQ8L2Rpdj5cblx0PGJ1dHRvbiAoY2xpY2spPVwiYWRkSXRlbSgpXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYXJyYXktYWRkLWJ1dHRvblwiPlxuXHRcdDxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPiBBZGRcblx0PC9idXR0b24+XG48L2Rpdj5gXG59KVxuZXhwb3J0IGNsYXNzIEFycmF5V2lkZ2V0IGV4dGVuZHMgQXJyYXlMYXlvdXRXaWRnZXQge1xuXG4gIGFkZEl0ZW0oKSB7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkuYWRkSXRlbSgpO1xuICB9XG5cbiAgcmVtb3ZlSXRlbShpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkucmVtb3ZlSXRlbShpbmRleCk7XG4gIH1cblxuICB0cmFja0J5SW5kZXgoaW5kZXg6IG51bWJlciwgaXRlbTogYW55KSB7XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG59XG4iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtYnV0dG9uLXdpZGdldCcsXG4gIHRlbXBsYXRlOiAnPGJ1dHRvbiAoY2xpY2spPVwiYnV0dG9uLmFjdGlvbigkZXZlbnQpXCI+e3tidXR0b24ubGFiZWx9fTwvYnV0dG9uPidcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uV2lkZ2V0IHtcbiAgcHVibGljIGJ1dHRvblxuICBwdWJsaWMgZm9ybVByb3BlcnR5XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT2JqZWN0TGF5b3V0V2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtZm9ybS1vYmplY3QnLFxuICB0ZW1wbGF0ZTogYDxmaWVsZHNldCAqbmdGb3I9XCJsZXQgZmllbGRzZXQgb2YgZm9ybVByb3BlcnR5LnNjaGVtYS5maWVsZHNldHNcIj5cblx0PGxlZ2VuZCAqbmdJZj1cImZpZWxkc2V0LnRpdGxlXCI+e3tmaWVsZHNldC50aXRsZX19PC9sZWdlbmQ+XG5cdDxkaXYgKm5nSWY9XCJmaWVsZHNldC5kZXNjcmlwdGlvblwiPnt7ZmllbGRzZXQuZGVzY3JpcHRpb259fTwvZGl2PlxuXHQ8ZGl2ICpuZ0Zvcj1cImxldCBmaWVsZElkIG9mIGZpZWxkc2V0LmZpZWxkc1wiPlxuXHRcdDxzZi1mb3JtLWVsZW1lbnQgW2Zvcm1Qcm9wZXJ0eV09XCJmb3JtUHJvcGVydHkuZ2V0UHJvcGVydHkoZmllbGRJZClcIj48L3NmLWZvcm0tZWxlbWVudD5cblx0PC9kaXY+XG48L2ZpZWxkc2V0PmBcbn0pXG5leHBvcnQgY2xhc3MgT2JqZWN0V2lkZ2V0IGV4dGVuZHMgT2JqZWN0TGF5b3V0V2lkZ2V0IHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1jaGVja2JveC13aWRnZXQnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJ3aWRnZXQgZm9ybS1ncm91cFwiPlxuICAgIDxsYWJlbCBbYXR0ci5mb3JdPVwiaWRcIiBjbGFzcz1cImhvcml6b250YWwgY29udHJvbC1sYWJlbFwiPlxuICAgICAgICB7eyBzY2hlbWEudGl0bGUgfX1cbiAgICA8L2xhYmVsPlxuXHQ8ZGl2ICpuZ0lmPVwic2NoZW1hLnR5cGUhPSdhcnJheSdcIiBjbGFzcz1cImNoZWNrYm94XCI+XG5cdFx0PGxhYmVsIGNsYXNzPVwiaG9yaXpvbnRhbCBjb250cm9sLWxhYmVsXCI+XG5cdFx0XHQ8aW5wdXQgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIiBbYXR0ci5uYW1lXT1cIm5hbWVcIiBbaW5kZXRlcm1pbmF0ZV09XCJjb250cm9sLnZhbHVlICE9PSBmYWxzZSAmJiBjb250cm9sLnZhbHVlICE9PSB0cnVlID8gdHJ1ZSA6bnVsbFwiIHR5cGU9XCJjaGVja2JveFwiIFthdHRyLmRpc2FibGVkXT1cInNjaGVtYS5yZWFkT25seVwiPlxuXHRcdFx0PGlucHV0ICpuZ0lmPVwic2NoZW1hLnJlYWRPbmx5XCIgW2F0dHIubmFtZV09XCJuYW1lXCIgdHlwZT1cImhpZGRlblwiIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCI+XG5cdFx0XHR7e3NjaGVtYS5kZXNjcmlwdGlvbn19XG5cdFx0PC9sYWJlbD5cblx0PC9kaXY+XG5cdDxuZy1jb250YWluZXIgKm5nSWY9XCJzY2hlbWEudHlwZT09PSdhcnJheSdcIj5cblx0XHQ8ZGl2ICpuZ0Zvcj1cImxldCBvcHRpb24gb2Ygc2NoZW1hLml0ZW1zLm9uZU9mXCIgY2xhc3M9XCJjaGVja2JveFwiPlxuXHRcdFx0PGxhYmVsIGNsYXNzPVwiaG9yaXpvbnRhbCBjb250cm9sLWxhYmVsXCI+XG5cdFx0XHRcdDxpbnB1dCBbYXR0ci5uYW1lXT1cIm5hbWVcIlxuXHRcdFx0XHRcdHZhbHVlPVwie3tvcHRpb24uZW51bVswXX19XCIgdHlwZT1cImNoZWNrYm94XCIgXG5cdFx0XHRcdFx0W2F0dHIuZGlzYWJsZWRdPVwic2NoZW1hLnJlYWRPbmx5XCJcblx0XHRcdFx0XHQoY2hhbmdlKT1cIm9uQ2hlY2soJGV2ZW50LnRhcmdldClcIlxuXHRcdFx0XHRcdFthdHRyLmNoZWNrZWRdPVwiY2hlY2tlZFtvcHRpb24uZW51bVswXV0gPyB0cnVlIDogbnVsbFwiPlxuXHRcdFx0XHR7e29wdGlvbi5kZXNjcmlwdGlvbn19XG5cdFx0XHQ8L2xhYmVsPlxuXHRcdDwvZGl2PlxuXHQ8L25nLWNvbnRhaW5lcj5cbjwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cblx0Y2hlY2tlZDogYW55ID0ge307XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdGNvbnN0IGNvbnRyb2wgPSB0aGlzLmNvbnRyb2w7XG5cdFx0dGhpcy5mb3JtUHJvcGVydHkudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgobmV3VmFsdWUpID0+IHtcblx0XHRcdGlmIChjb250cm9sLnZhbHVlICE9PSBuZXdWYWx1ZSkge1xuXHRcdFx0XHRjb250cm9sLnNldFZhbHVlKG5ld1ZhbHVlLCB7IGVtaXRFdmVudDogZmFsc2UgfSk7XG5cdFx0XHRcdGlmIChuZXdWYWx1ZSAmJiBBcnJheS5pc0FycmF5KG5ld1ZhbHVlKSkge1xuXHRcdFx0XHRcdG5ld1ZhbHVlLm1hcCh2ID0+IHRoaXMuY2hlY2tlZFt2XSA9IHRydWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0dGhpcy5mb3JtUHJvcGVydHkuZXJyb3JzQ2hhbmdlcy5zdWJzY3JpYmUoKGVycm9ycykgPT4ge1xuXHRcdFx0Y29udHJvbC5zZXRFcnJvcnMoZXJyb3JzLCB7IGVtaXRFdmVudDogdHJ1ZSB9KTtcblx0XHR9KTtcblx0XHRjb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKG5ld1ZhbHVlKSA9PiB7XG5cdFx0XHR0aGlzLmZvcm1Qcm9wZXJ0eS5zZXRWYWx1ZShuZXdWYWx1ZSwgZmFsc2UpO1xuXHRcdH0pO1xuXHR9XG5cblx0b25DaGVjayhlbCkge1xuXHRcdGlmIChlbC5jaGVja2VkKSB7XG5cdFx0XHR0aGlzLmNoZWNrZWRbZWwudmFsdWVdID0gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGVsZXRlIHRoaXMuY2hlY2tlZFtlbC52YWx1ZV07XG5cdFx0fVxuXHRcdHRoaXMuZm9ybVByb3BlcnR5LnNldFZhbHVlKE9iamVjdC5rZXlzKHRoaXMuY2hlY2tlZCksIGZhbHNlKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1maWxlLXdpZGdldCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIndpZGdldCBmb3JtLWdyb3VwXCI+XG5cdDxsYWJlbCBbYXR0ci5mb3JdPVwiaWRcIiBjbGFzcz1cImhvcml6b250YWwgY29udHJvbC1sYWJlbFwiPlxuXHRcdHt7IHNjaGVtYS50aXRsZSB9fVxuXHQ8L2xhYmVsPlxuICAgIDxzcGFuICpuZ0lmPVwic2NoZW1hLmRlc2NyaXB0aW9uXCIgY2xhc3M9XCJmb3JtSGVscFwiPnt7c2NoZW1hLmRlc2NyaXB0aW9ufX08L3NwYW4+XG4gIDxpbnB1dCBbbmFtZV09XCJuYW1lXCIgY2xhc3M9XCJ0ZXh0LXdpZGdldCBmaWxlLXdpZGdldFwiIFthdHRyLmlkXT1cImlkXCJcbiAgICBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiIHR5cGU9XCJmaWxlXCIgW2F0dHIuZGlzYWJsZWRdPVwic2NoZW1hLnJlYWRPbmx5P3RydWU6bnVsbFwiXG4gICAgKGNoYW5nZSk9XCJvbkZpbGVDaGFuZ2UoJGV2ZW50KVwiPlxuXHQ8aW5wdXQgKm5nSWY9XCJzY2hlbWEucmVhZE9ubHlcIiBbYXR0ci5uYW1lXT1cIm5hbWVcIiB0eXBlPVwiaGlkZGVuXCIgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIj5cbjwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgRmlsZVdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICBwcm90ZWN0ZWQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgcHJvdGVjdGVkIGZpbGVkYXRhOiBhbnkgPSB7fTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIC8vIE9WRVJSSURFIENvbnRyb2xXaWRnZXQgbmdBZnRlclZpZXdJbml0KCkgYXMgUmVhY3RpdmVGb3JtcyBkbyBub3QgaGFuZGxlXG4gICAgLy8gZmlsZSBpbnB1dHNcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5jb250cm9sO1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LmVycm9yc0NoYW5nZXMuc3Vic2NyaWJlKChlcnJvcnMpID0+IHtcbiAgICAgIGNvbnRyb2wuc2V0RXJyb3JzKGVycm9ycywgeyBlbWl0RXZlbnQ6IHRydWUgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgICB0aGlzLmZpbGVkYXRhLmRhdGEgPSBidG9hKHRoaXMucmVhZGVyLnJlc3VsdCk7XG4gICAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5zZXRWYWx1ZSh0aGlzLmZpbGVkYXRhLCBmYWxzZSk7XG4gICAgfTtcbiAgfVxuXG4gIG9uRmlsZUNoYW5nZSgkZXZlbnQpIHtcbiAgICBjb25zdCBmaWxlID0gJGV2ZW50LnRhcmdldC5maWxlc1swXTtcbiAgICB0aGlzLmZpbGVkYXRhLmZpbGVuYW1lID0gZmlsZS5uYW1lO1xuICAgIHRoaXMuZmlsZWRhdGEuc2l6ZSA9IGZpbGUuc2l6ZTtcbiAgICB0aGlzLmZpbGVkYXRhWydjb250ZW50LXR5cGUnXSA9IGZpbGUudHlwZTtcbiAgICB0aGlzLmZpbGVkYXRhLmVuY29kaW5nID0gJ2Jhc2U2NCc7XG4gICAgdGhpcy5yZWFkZXIucmVhZEFzQmluYXJ5U3RyaW5nKGZpbGUpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtaW50ZWdlci13aWRnZXQnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJ3aWRnZXQgZm9ybS1ncm91cFwiPlxuXHQ8bGFiZWwgW2F0dHIuZm9yXT1cImlkXCIgY2xhc3M9XCJob3Jpem9udGFsIGNvbnRyb2wtbGFiZWxcIj5cblx0XHR7eyBzY2hlbWEudGl0bGUgfX1cblx0PC9sYWJlbD5cbiAgPHNwYW4gKm5nSWY9XCJzY2hlbWEuZGVzY3JpcHRpb25cIiBjbGFzcz1cImZvcm1IZWxwXCI+e3tzY2hlbWEuZGVzY3JpcHRpb259fTwvc3Bhbj5cblx0PGlucHV0IFthdHRyLnJlYWRvbmx5XT1cInNjaGVtYS5yZWFkT25seT90cnVlOm51bGxcIiBbbmFtZV09XCJuYW1lXCJcblx0Y2xhc3M9XCJ0ZXh0LXdpZGdldCBpbnRlZ2VyLXdpZGdldCBmb3JtLWNvbnRyb2xcIiBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiXG5cdFthdHRyLnR5cGVdPVwiJ251bWJlcidcIiBbYXR0ci5taW5dPVwic2NoZW1hLm1pbmltdW1cIiBbYXR0ci5tYXhdPVwic2NoZW1hLm1heGltdW1cIlxuXHRbYXR0ci5wbGFjZWhvbGRlcl09XCJzY2hlbWEucGxhY2Vob2xkZXJcIlxuXHRbYXR0ci5tYXhMZW5ndGhdPVwic2NoZW1hLm1heExlbmd0aCB8fCBudWxsXCJcbiAgW2F0dHIubWluTGVuZ3RoXT1cInNjaGVtYS5taW5MZW5ndGggfHwgbnVsbFwiPlxuPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBJbnRlZ2VyV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCB7fVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi10ZXh0YXJlYS13aWRnZXQnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJ3aWRnZXQgZm9ybS1ncm91cFwiPlxuXHQ8bGFiZWwgW2F0dHIuZm9yXT1cImlkXCIgY2xhc3M9XCJob3Jpem9udGFsIGNvbnRyb2wtbGFiZWxcIj5cblx0XHR7eyBzY2hlbWEudGl0bGUgfX1cblx0PC9sYWJlbD5cbiAgICA8c3BhbiAqbmdJZj1cInNjaGVtYS5kZXNjcmlwdGlvblwiIGNsYXNzPVwiZm9ybUhlbHBcIj57e3NjaGVtYS5kZXNjcmlwdGlvbn19PC9zcGFuPlxuXHQ8dGV4dGFyZWEgW2F0dHIucmVhZG9ubHldPVwic2NoZW1hLnJlYWRPbmx5XCIgW25hbWVdPVwibmFtZVwiXG5cdFx0Y2xhc3M9XCJ0ZXh0LXdpZGdldCB0ZXh0YXJlYS13aWRnZXQgZm9ybS1jb250cm9sXCJcblx0XHRbYXR0ci5wbGFjZWhvbGRlcl09XCJzY2hlbWEucGxhY2Vob2xkZXJcIlxuXHRcdFthdHRyLm1heExlbmd0aF09XCJzY2hlbWEubWF4TGVuZ3RoIHx8IG51bGxcIlxuICAgIFthdHRyLm1pbkxlbmd0aF09XCJzY2hlbWEubWluTGVuZ3RoIHx8IG51bGxcIlxuXHRcdFtmb3JtQ29udHJvbF09XCJjb250cm9sXCI+PC90ZXh0YXJlYT5cbjwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgVGV4dEFyZWFXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IHt9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXJhZGlvLXdpZGdldCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIndpZGdldCBmb3JtLWdyb3VwXCI+XG5cdDxsYWJlbD57e3NjaGVtYS50aXRsZX19PC9sYWJlbD5cbiAgICA8c3BhbiAqbmdJZj1cInNjaGVtYS5kZXNjcmlwdGlvblwiIGNsYXNzPVwiZm9ybUhlbHBcIj57e3NjaGVtYS5kZXNjcmlwdGlvbn19PC9zcGFuPlxuXHQ8ZGl2ICpuZ0Zvcj1cImxldCBvcHRpb24gb2Ygc2NoZW1hLm9uZU9mXCIgY2xhc3M9XCJyYWRpb1wiPlxuXHRcdDxsYWJlbCBjbGFzcz1cImhvcml6b250YWwgY29udHJvbC1sYWJlbFwiPlxuXHRcdFx0PGlucHV0IFtmb3JtQ29udHJvbF09XCJjb250cm9sXCIgW2F0dHIubmFtZV09XCJuYW1lXCIgdmFsdWU9XCJ7e29wdGlvbi5lbnVtWzBdfX1cIiB0eXBlPVwicmFkaW9cIiAgW2F0dHIuZGlzYWJsZWRdPVwic2NoZW1hLnJlYWRPbmx5XCI+XG5cdFx0XHR7e29wdGlvbi5kZXNjcmlwdGlvbn19XG5cdFx0PC9sYWJlbD5cblx0PC9kaXY+XG5cdDxpbnB1dCAqbmdJZj1cInNjaGVtYS5yZWFkT25seVwiIFthdHRyLm5hbWVdPVwibmFtZVwiIHR5cGU9XCJoaWRkZW5cIiBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiPlxuPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBSYWRpb1dpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQge31cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtcmFuZ2Utd2lkZ2V0JyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwid2lkZ2V0IGZvcm0tZ3JvdXBcIj5cblx0PGxhYmVsIFthdHRyLmZvcl09XCJpZFwiIGNsYXNzPVwiaG9yaXpvbnRhbCBjb250cm9sLWxhYmVsXCI+XG5cdFx0e3sgc2NoZW1hLnRpdGxlIH19XG5cdDwvbGFiZWw+XG4gICAgPHNwYW4gKm5nSWY9XCJzY2hlbWEuZGVzY3JpcHRpb25cIiBjbGFzcz1cImZvcm1IZWxwXCI+e3tzY2hlbWEuZGVzY3JpcHRpb259fTwvc3Bhbj5cdFxuXHQ8aW5wdXQgW25hbWVdPVwibmFtZVwiIGNsYXNzPVwidGV4dC13aWRnZXQgcmFuZ2Utd2lkZ2V0XCIgW2F0dHIuaWRdPVwiaWRcIlxuXHRbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiIFthdHRyLnR5cGVdPVwiJ3JhbmdlJ1wiIFthdHRyLm1pbl09XCJzY2hlbWEubWluaW11bVwiIFthdHRyLm1heF09XCJzY2hlbWEubWF4aW11bVwiIFthdHRyLmRpc2FibGVkXT1cInNjaGVtYS5yZWFkT25seT90cnVlOm51bGxcIiA+XG5cdDxpbnB1dCAqbmdJZj1cInNjaGVtYS5yZWFkT25seVwiIFthdHRyLm5hbWVdPVwibmFtZVwiIHR5cGU9XCJoaWRkZW5cIj5cbjwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgUmFuZ2VXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IHt9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3NmLXNlbGVjdC13aWRnZXQnLFxuXHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJ3aWRnZXQgZm9ybS1ncm91cFwiPlxuXHQ8bGFiZWwgW2F0dHIuZm9yXT1cImlkXCIgY2xhc3M9XCJob3Jpem9udGFsIGNvbnRyb2wtbGFiZWxcIj5cblx0XHR7eyBzY2hlbWEudGl0bGUgfX1cblx0PC9sYWJlbD5cblxuXHQ8c3BhbiAqbmdJZj1cInNjaGVtYS5kZXNjcmlwdGlvblwiIGNsYXNzPVwiZm9ybUhlbHBcIj5cblx0XHR7e3NjaGVtYS5kZXNjcmlwdGlvbn19XG5cdDwvc3Bhbj5cblxuXHQ8c2VsZWN0ICpuZ0lmPVwic2NoZW1hLnR5cGUhPSdhcnJheSdcIiBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiIFthdHRyLm5hbWVdPVwibmFtZVwiIFthdHRyLmRpc2FibGVkXT1cInNjaGVtYS5yZWFkT25seVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG5cdFx0PG9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIHNjaGVtYS5vbmVPZlwiIFtuZ1ZhbHVlXT1cIm9wdGlvbi5lbnVtWzBdXCIgPnt7b3B0aW9uLmRlc2NyaXB0aW9ufX08L29wdGlvbj5cblx0PC9zZWxlY3Q+XG5cblx0PHNlbGVjdCAqbmdJZj1cInNjaGVtYS50eXBlPT09J2FycmF5J1wiIG11bHRpcGxlIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCIgW2F0dHIubmFtZV09XCJuYW1lXCIgW2F0dHIuZGlzYWJsZWRdPVwic2NoZW1hLnJlYWRPbmx5XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cblx0XHQ8b3B0aW9uICpuZ0Zvcj1cImxldCBvcHRpb24gb2Ygc2NoZW1hLml0ZW1zLm9uZU9mXCIgW25nVmFsdWVdPVwib3B0aW9uLmVudW1bMF1cIiA+e3tvcHRpb24uZGVzY3JpcHRpb259fTwvb3B0aW9uPlxuXHQ8L3NlbGVjdD5cblxuXHQ8aW5wdXQgKm5nSWY9XCJzY2hlbWEucmVhZE9ubHlcIiBbYXR0ci5uYW1lXT1cIm5hbWVcIiB0eXBlPVwiaGlkZGVuXCIgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIj5cbjwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0V2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCB7fVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1zdHJpbmctd2lkZ2V0JyxcbiAgdGVtcGxhdGU6IGA8aW5wdXQgKm5nSWY9XCJ0aGlzLmdldElucHV0VHlwZSgpPT09J2hpZGRlbic7IGVsc2Ugbm90SGlkZGVuRmllbGRCbG9ja1wiXG4gIFthdHRyLm5hbWVdPVwibmFtZVwiIHR5cGU9XCJoaWRkZW5cIiBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiPlxuPG5nLXRlbXBsYXRlICNub3RIaWRkZW5GaWVsZEJsb2NrPlxuPGRpdiBjbGFzcz1cIndpZGdldCBmb3JtLWdyb3VwXCI+XG4gICAgPGxhYmVsIFthdHRyLmZvcl09XCJpZFwiIGNsYXNzPVwiaG9yaXpvbnRhbCBjb250cm9sLWxhYmVsXCI+XG4gICAgXHR7eyBzY2hlbWEudGl0bGUgfX1cbiAgICA8L2xhYmVsPlxuICAgIDxzcGFuICpuZ0lmPVwic2NoZW1hLmRlc2NyaXB0aW9uXCIgY2xhc3M9XCJmb3JtSGVscFwiPnt7c2NoZW1hLmRlc2NyaXB0aW9ufX08L3NwYW4+XG4gICAgPGlucHV0IFtuYW1lXT1cIm5hbWVcIiBbYXR0ci5yZWFkb25seV09XCIoc2NoZW1hLndpZGdldC5pZCE9PSdjb2xvcicpICYmIHNjaGVtYS5yZWFkT25seT90cnVlOm51bGxcIlxuICAgIGNsYXNzPVwidGV4dC13aWRnZXQuaWQgdGV4dGxpbmUtd2lkZ2V0IGZvcm0tY29udHJvbFwiIFthdHRyLnR5cGVdPVwidGhpcy5nZXRJbnB1dFR5cGUoKVwiXG4gICAgW2F0dHIuaWRdPVwiaWRcIiAgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIiBbYXR0ci5wbGFjZWhvbGRlcl09XCJzY2hlbWEucGxhY2Vob2xkZXJcIlxuICAgIFthdHRyLm1heExlbmd0aF09XCJzY2hlbWEubWF4TGVuZ3RoIHx8IG51bGxcIlxuICAgIFthdHRyLm1pbkxlbmd0aF09XCJzY2hlbWEubWluTGVuZ3RoIHx8IG51bGxcIlxuICAgIFthdHRyLmRpc2FibGVkXT1cIihzY2hlbWEud2lkZ2V0LmlkPT0nY29sb3InICYmIHNjaGVtYS5yZWFkT25seSk/dHJ1ZTpudWxsXCI+XG4gICAgPGlucHV0ICpuZ0lmPVwiKHNjaGVtYS53aWRnZXQuaWQ9PT0nY29sb3InICYmIHNjaGVtYS5yZWFkT25seSlcIiBbYXR0ci5uYW1lXT1cIm5hbWVcIiB0eXBlPVwiaGlkZGVuXCIgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIj5cbjwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5gXG59KVxuZXhwb3J0IGNsYXNzIFN0cmluZ1dpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQge1xuXG4gICAgZ2V0SW5wdXRUeXBlKCkge1xuICAgICAgICBpZiAoIXRoaXMuc2NoZW1hLndpZGdldC5pZCB8fCB0aGlzLnNjaGVtYS53aWRnZXQuaWQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3RleHQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLndpZGdldC5pZDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IEFycmF5V2lkZ2V0IH0gZnJvbSAnLi9hcnJheS9hcnJheS53aWRnZXQnO1xuaW1wb3J0IHsgQnV0dG9uV2lkZ2V0IH0gZnJvbSAnLi9idXR0b24vYnV0dG9uLndpZGdldCc7XG5pbXBvcnQgeyBDaGVja2JveFdpZGdldCB9IGZyb20gJy4vY2hlY2tib3gvY2hlY2tib3gud2lkZ2V0JztcbmltcG9ydCB7IEZpbGVXaWRnZXQgfSBmcm9tICcuL2ZpbGUvZmlsZS53aWRnZXQnO1xuaW1wb3J0IHsgSW50ZWdlcldpZGdldCB9IGZyb20gJy4vaW50ZWdlci9pbnRlZ2VyLndpZGdldCc7XG5pbXBvcnQgeyBPYmplY3RXaWRnZXQgfSBmcm9tICcuL29iamVjdC9vYmplY3Qud2lkZ2V0JztcbmltcG9ydCB7IFJhZGlvV2lkZ2V0IH0gZnJvbSAnLi9yYWRpby9yYWRpby53aWRnZXQnO1xuaW1wb3J0IHsgUmFuZ2VXaWRnZXQgfSBmcm9tICcuL3JhbmdlL3JhbmdlLndpZGdldCc7XG5pbXBvcnQgeyBTZWxlY3RXaWRnZXQgfSBmcm9tICcuL3NlbGVjdC9zZWxlY3Qud2lkZ2V0JztcbmltcG9ydCB7IFN0cmluZ1dpZGdldCB9IGZyb20gJy4vc3RyaW5nL3N0cmluZy53aWRnZXQnO1xuaW1wb3J0IHsgVGV4dEFyZWFXaWRnZXQgfSBmcm9tICcuL3RleHRhcmVhL3RleHRhcmVhLndpZGdldCc7XG5cbmltcG9ydCB7IFdpZGdldFJlZ2lzdHJ5IH0gZnJvbSAnLi4vd2lkZ2V0cmVnaXN0cnknO1xuXG5leHBvcnQgY2xhc3MgRGVmYXVsdFdpZGdldFJlZ2lzdHJ5IGV4dGVuZHMgV2lkZ2V0UmVnaXN0cnkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5yZWdpc3RlcignYXJyYXknLCAgQXJyYXlXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ29iamVjdCcsICBPYmplY3RXaWRnZXQpO1xuXG4gICAgdGhpcy5yZWdpc3Rlcignc3RyaW5nJywgU3RyaW5nV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdzZWFyY2gnLCBTdHJpbmdXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ3RlbCcsIFN0cmluZ1dpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcigndXJsJywgU3RyaW5nV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdlbWFpbCcsIFN0cmluZ1dpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcigncGFzc3dvcmQnLCBTdHJpbmdXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ2NvbG9yJywgU3RyaW5nV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdkYXRlJywgU3RyaW5nV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdkYXRlLXRpbWUnLCBTdHJpbmdXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ3RpbWUnLCBTdHJpbmdXaWRnZXQpO1xuXG4gICAgdGhpcy5yZWdpc3RlcignaW50ZWdlcicsIEludGVnZXJXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ251bWJlcicsIEludGVnZXJXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ3JhbmdlJywgUmFuZ2VXaWRnZXQpO1xuXG4gICAgdGhpcy5yZWdpc3RlcigndGV4dGFyZWEnLCBUZXh0QXJlYVdpZGdldCk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyKCdmaWxlJywgRmlsZVdpZGdldCk7XG4gICAgdGhpcy5yZWdpc3Rlcignc2VsZWN0JywgU2VsZWN0V2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdyYWRpbycsIFJhZGlvV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdib29sZWFuJywgQ2hlY2tib3hXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ2NoZWNrYm94JywgQ2hlY2tib3hXaWRnZXQpO1xuXG4gICAgdGhpcy5yZWdpc3RlcignYnV0dG9uJywgQnV0dG9uV2lkZ2V0KTtcblxuICAgIHRoaXMuc2V0RGVmYXVsdFdpZGdldChTdHJpbmdXaWRnZXQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtZGVmYXVsdC1maWVsZCcsXG4gIHRlbXBsYXRlOiBgPHA+VW5rbm93IHR5cGU8L3A+YFxufSlcbmV4cG9ydCBjbGFzcyBEZWZhdWx0V2lkZ2V0IHt9XG4iLCJpbXBvcnQge05nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgRm9ybXNNb2R1bGUsXG4gIFJlYWN0aXZlRm9ybXNNb2R1bGVcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQge0Zvcm1FbGVtZW50Q29tcG9uZW50fSBmcm9tICcuL2Zvcm1lbGVtZW50LmNvbXBvbmVudCc7XG5pbXBvcnQge0Zvcm1Db21wb25lbnR9IGZyb20gJy4vZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHtXaWRnZXRDaG9vc2VyQ29tcG9uZW50fSBmcm9tICcuL3dpZGdldGNob29zZXIuY29tcG9uZW50JztcbmltcG9ydCB7QXJyYXlXaWRnZXR9IGZyb20gJy4vZGVmYXVsdHdpZGdldHMvYXJyYXkvYXJyYXkud2lkZ2V0JztcbmltcG9ydCB7QnV0dG9uV2lkZ2V0fSBmcm9tICcuL2RlZmF1bHR3aWRnZXRzL2J1dHRvbi9idXR0b24ud2lkZ2V0JztcbmltcG9ydCB7T2JqZWN0V2lkZ2V0fSBmcm9tICcuL2RlZmF1bHR3aWRnZXRzL29iamVjdC9vYmplY3Qud2lkZ2V0JztcbmltcG9ydCB7Q2hlY2tib3hXaWRnZXR9IGZyb20gJy4vZGVmYXVsdHdpZGdldHMvY2hlY2tib3gvY2hlY2tib3gud2lkZ2V0JztcbmltcG9ydCB7RmlsZVdpZGdldH0gZnJvbSAnLi9kZWZhdWx0d2lkZ2V0cy9maWxlL2ZpbGUud2lkZ2V0JztcbmltcG9ydCB7SW50ZWdlcldpZGdldH0gZnJvbSAnLi9kZWZhdWx0d2lkZ2V0cy9pbnRlZ2VyL2ludGVnZXIud2lkZ2V0JztcbmltcG9ydCB7VGV4dEFyZWFXaWRnZXR9IGZyb20gJy4vZGVmYXVsdHdpZGdldHMvdGV4dGFyZWEvdGV4dGFyZWEud2lkZ2V0JztcbmltcG9ydCB7UmFkaW9XaWRnZXR9IGZyb20gJy4vZGVmYXVsdHdpZGdldHMvcmFkaW8vcmFkaW8ud2lkZ2V0JztcbmltcG9ydCB7UmFuZ2VXaWRnZXR9IGZyb20gJy4vZGVmYXVsdHdpZGdldHMvcmFuZ2UvcmFuZ2Uud2lkZ2V0JztcbmltcG9ydCB7U2VsZWN0V2lkZ2V0fSBmcm9tICcuL2RlZmF1bHR3aWRnZXRzL3NlbGVjdC9zZWxlY3Qud2lkZ2V0JztcbmltcG9ydCB7U3RyaW5nV2lkZ2V0fSBmcm9tICcuL2RlZmF1bHR3aWRnZXRzL3N0cmluZy9zdHJpbmcud2lkZ2V0JztcbmltcG9ydCB7RGVmYXVsdFdpZGdldFJlZ2lzdHJ5fSBmcm9tICcuL2RlZmF1bHR3aWRnZXRzL2RlZmF1bHR3aWRnZXRyZWdpc3RyeSc7XG5pbXBvcnQge1xuICBEZWZhdWx0V2lkZ2V0XG59IGZyb20gJy4vZGVmYXVsdC53aWRnZXQnO1xuXG5pbXBvcnQge1dpZGdldFJlZ2lzdHJ5fSBmcm9tICcuL3dpZGdldHJlZ2lzdHJ5JztcbmltcG9ydCB7U2NoZW1hVmFsaWRhdG9yRmFjdG9yeSwgWlNjaGVtYVZhbGlkYXRvckZhY3Rvcnl9IGZyb20gJy4vc2NoZW1hdmFsaWRhdG9yZmFjdG9yeSc7XG5pbXBvcnQge0Zvcm1FbGVtZW50Q29tcG9uZW50QWN0aW9ufSBmcm9tICcuL2Zvcm1lbGVtZW50LmFjdGlvbi5jb21wb25lbnQnO1xuXG5jb25zdCBtb2R1bGVQcm92aWRlcnMgPSBbXG4gIHtcbiAgICBwcm92aWRlOiBXaWRnZXRSZWdpc3RyeSxcbiAgICB1c2VDbGFzczogRGVmYXVsdFdpZGdldFJlZ2lzdHJ5XG4gIH0sXG4gIHtcbiAgICBwcm92aWRlOiBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxuICAgIHVzZUNsYXNzOiBaU2NoZW1hVmFsaWRhdG9yRmFjdG9yeVxuICB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEZvcm1FbGVtZW50Q29tcG9uZW50LFxuICAgIEZvcm1FbGVtZW50Q29tcG9uZW50QWN0aW9uLFxuICAgIEZvcm1Db21wb25lbnQsXG4gICAgV2lkZ2V0Q2hvb3NlckNvbXBvbmVudCxcbiAgICBEZWZhdWx0V2lkZ2V0LFxuICAgIEFycmF5V2lkZ2V0LFxuICAgIEJ1dHRvbldpZGdldCxcbiAgICBPYmplY3RXaWRnZXQsXG4gICAgQ2hlY2tib3hXaWRnZXQsXG4gICAgRmlsZVdpZGdldCxcbiAgICBJbnRlZ2VyV2lkZ2V0LFxuICAgIFRleHRBcmVhV2lkZ2V0LFxuICAgIFJhZGlvV2lkZ2V0LFxuICAgIFJhbmdlV2lkZ2V0LFxuICAgIFNlbGVjdFdpZGdldCxcbiAgICBTdHJpbmdXaWRnZXQsXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIEZvcm1FbGVtZW50Q29tcG9uZW50LFxuICAgIEZvcm1FbGVtZW50Q29tcG9uZW50QWN0aW9uLFxuICAgIEZvcm1Db21wb25lbnQsXG4gICAgV2lkZ2V0Q2hvb3NlckNvbXBvbmVudCxcbiAgICBBcnJheVdpZGdldCxcbiAgICBCdXR0b25XaWRnZXQsXG4gICAgT2JqZWN0V2lkZ2V0LFxuICAgIENoZWNrYm94V2lkZ2V0LFxuICAgIEZpbGVXaWRnZXQsXG4gICAgSW50ZWdlcldpZGdldCxcbiAgICBUZXh0QXJlYVdpZGdldCxcbiAgICBSYWRpb1dpZGdldCxcbiAgICBSYW5nZVdpZGdldCxcbiAgICBTZWxlY3RXaWRnZXQsXG4gICAgU3RyaW5nV2lkZ2V0LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgRm9ybUNvbXBvbmVudCxcbiAgICBGb3JtRWxlbWVudENvbXBvbmVudCxcbiAgICBGb3JtRWxlbWVudENvbXBvbmVudEFjdGlvbixcbiAgICBXaWRnZXRDaG9vc2VyQ29tcG9uZW50LFxuICAgIEFycmF5V2lkZ2V0LFxuICAgIEJ1dHRvbldpZGdldCxcbiAgICBPYmplY3RXaWRnZXQsXG4gICAgQ2hlY2tib3hXaWRnZXQsXG4gICAgRmlsZVdpZGdldCxcbiAgICBJbnRlZ2VyV2lkZ2V0LFxuICAgIFRleHRBcmVhV2lkZ2V0LFxuICAgIFJhZGlvV2lkZ2V0LFxuICAgIFJhbmdlV2lkZ2V0LFxuICAgIFNlbGVjdFdpZGdldCxcbiAgICBTdHJpbmdXaWRnZXRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTY2hlbWFGb3JtTW9kdWxlIHtcblxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFNjaGVtYUZvcm1Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFsuLi5tb2R1bGVQcm92aWRlcnNdXG4gICAgfTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlU2NoZW1hU2VydmljZSB7XG5cbiAgY2hhbmdlcyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIGNoYW5nZWQoKSB7XG4gICAgdGhpcy5jaGFuZ2VzLmVtaXQoKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZVNjaGVtYUVsZW1lbnQge1xuXG4gIGdldFRleHRDb250ZW50KGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpOiBzdHJpbmcge1xuICAgIGNvbnN0IG5vZGVzID0gQXJyYXkuZnJvbShlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGROb2Rlcyk7XG4gICAgY29uc3Qgbm9kZSA9IDxIVE1MRWxlbWVudD5ub2Rlcy5maWx0ZXIoKGVsOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIGVsLm5vZGVUeXBlID09PSBlbC5URVhUX05PREU7XG4gICAgfSkucG9wKCk7XG5cbiAgICBpZiAoIW5vZGUgfHwgIW5vZGUubm9kZVZhbHVlKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGUubm9kZVZhbHVlLnRyaW0oKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgVGVtcGxhdGVTY2hlbWFFbGVtZW50IH0gZnJvbSAnLi4vdGVtcGxhdGUtc2NoZW1hLWVsZW1lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLWJ1dHRvbicsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuYCxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogVGVtcGxhdGVTY2hlbWFFbGVtZW50LFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQnV0dG9uQ29tcG9uZW50KSxcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgVGVtcGxhdGVTY2hlbWFFbGVtZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgQElucHV0KClcbiAgaWQ6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBsYWJlbCA9ICcnO1xuXG4gIEBJbnB1dCgpXG4gIHdpZGdldDogc3RyaW5nIHwgb2JqZWN0O1xuXG4gIEBPdXRwdXQoKVxuICBjbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwcml2YXRlIHNldExhYmVsRnJvbUNvbnRlbnQoKSB7XG4gICAgY29uc3QgdGV4dENvbnRlbnQgPSB0aGlzLmdldFRleHRDb250ZW50KHRoaXMuZWxlbWVudFJlZik7XG5cbiAgICAvLyBsYWJlbCBhcyBASW5wdXQgdGFrZXMgcHJpb3JpdHkgb3ZlciBjb250ZW50IHRleHRcbiAgICBpZiAodGV4dENvbnRlbnQgJiYgIXRoaXMubGFiZWwpIHtcbiAgICAgIHRoaXMubGFiZWwgPSB0ZXh0Q29udGVudDtcbiAgICB9XG5cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLnNldExhYmVsRnJvbUNvbnRlbnQoKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tICcuLi8uLi9tb2RlbC92YWxpZGF0b3InO1xuXG5leHBvcnQgZW51bSBGaWVsZFR5cGUge1xuICBTdHJpbmcgPSAnc3RyaW5nJyxcbiAgT2JqZWN0ID0gJ29iamVjdCcsXG4gIEFycmF5ID0gJ2FycmF5JyxcbiAgQm9vbGVhbiA9ICdib29sZWFuJyxcbiAgSW50ZWdlciA9ICAnaW50ZWdlcicsXG4gIE51bWJlciA9ICdudW1iZXInLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpZWxkIHtcbiAgbmFtZTogc3RyaW5nO1xuICByZXF1aXJlZDogYm9vbGVhbjtcbiAgZ2V0U2NoZW1hKCk6IGFueTtcbiAgZ2V0QnV0dG9ucygpOiBhbnk7XG4gIGdldFZhbGlkYXRvcnMoKTogeyBwYXRoOiBzdHJpbmcsIHZhbGlkYXRvcjogVmFsaWRhdG9yIH1bXTtcbn1cblxuXG4iLCJpbXBvcnQgeyBFbGVtZW50UmVmLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVmFsaWRhdG9yIH0gZnJvbSAnLi4vLi4vbW9kZWwvdmFsaWRhdG9yJztcbmltcG9ydCB7IEFjdGlvblJlZ2lzdHJ5IH0gZnJvbSAnLi4vLi4vbW9kZWwvYWN0aW9ucmVnaXN0cnknO1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi4vYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGVtcGxhdGVTY2hlbWFFbGVtZW50IH0gZnJvbSAnLi4vdGVtcGxhdGUtc2NoZW1hLWVsZW1lbnQnO1xuXG5pbXBvcnQgeyBGaWVsZCwgRmllbGRUeXBlIH0gZnJvbSAnLi9maWVsZCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGaWVsZFBhcmVudCBleHRlbmRzIFRlbXBsYXRlU2NoZW1hRWxlbWVudCB7XG5cbiAgbmFtZSA9ICcnO1xuICB0eXBlOiBGaWVsZFR5cGU7XG5cbiAgZ2V0IHBhdGgoKTogc3RyaW5nIHtcbiAgICBpZiAoIXRoaXMubmFtZSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHJldHVybiAnLycgKyB0aGlzLm5hbWU7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgYWN0aW9uUmVnaXN0cnk6IEFjdGlvblJlZ2lzdHJ5O1xuICBwcm90ZWN0ZWQgYWJzdHJhY3QgY2hpbGRCdXR0b25zOiBRdWVyeUxpc3Q8QnV0dG9uQ29tcG9uZW50PjtcblxuXG4gIGdldEJ1dHRvbnMoKTogeyBpZDogc3RyaW5nLCBsYWJlbDogc3RyaW5nLCB3aWRnZXQ/OiBzdHJpbmcgfCBvYmplY3QgfVtdIHtcblxuICAgIHJldHVybiB0aGlzLmNoaWxkQnV0dG9ucy5tYXAoKGJ1dHRvbiwgaW5kZXgpID0+IHtcblxuICAgICAgaWYgKCFidXR0b24uaWQpIHtcbiAgICAgICAgY29uc3QgcmFuZG9tU3RyaW5nID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygxNikuc3Vic3RyKDIsIDgpO1xuICAgICAgICAvLyBnZW5lcmF0ZSBpZCBmb3IgYnV0dG9uXG4gICAgICAgIGJ1dHRvbi5pZCA9IHRoaXMubmFtZSArIHJhbmRvbVN0cmluZyArICdfJyAgKyAoaW5kZXggKyAxKTtcbiAgICAgIH1cblxuICAgICAgLy8gcmVnaXN0ZXIgYXMgYnV0dG9uIGFjdGlvbiB0aGUgRXZlbnRFbWl0dGVyIGNsaWNrXG4gICAgICB0aGlzLmFjdGlvblJlZ2lzdHJ5LnJlZ2lzdGVyKFxuICAgICAgICBidXR0b24uaWQsXG4gICAgICAgIGJ1dHRvbi5jbGljay5lbWl0LmJpbmQoYnV0dG9uLmNsaWNrKVxuICAgICAgKTtcblxuICAgICAgY29uc3QgX2J1dHRvbiA9IDxhbnk+e1xuICAgICAgICBpZDogYnV0dG9uLmlkLFxuICAgICAgICBsYWJlbDogYnV0dG9uLmxhYmVsLFxuICAgICAgfTtcblxuICAgICAgaWYgKGJ1dHRvbi53aWRnZXQpIHtcbiAgICAgICAgX2J1dHRvbi53aWRnZXQgPSBidXR0b24ud2lkZ2V0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX2J1dHRvbjtcblxuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldEZpZWxkc1ZhbGlkYXRvcnMoXG4gICAgZmllbGRzOiBGaWVsZFtdXG4gICk6IHsgcGF0aDogc3RyaW5nLCB2YWxpZGF0b3I6IFZhbGlkYXRvciB9W10ge1xuXG4gICAgcmV0dXJuIGZpZWxkcy5yZWR1Y2UoKHZhbGlkYXRvcnMsIGZpZWxkKSA9PiB7XG4gICAgICByZXR1cm4gdmFsaWRhdG9ycy5jb25jYXQoZmllbGQuZ2V0VmFsaWRhdG9ycygpKTtcbiAgICB9LCBbXSk7XG5cbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRGaWVsZHNTY2hlbWEoZmllbGRzOiBGaWVsZFtdKSB7XG4gICAgcmV0dXJuIGZpZWxkcy5yZWR1Y2UoKHNjaGVtYTogYW55LCBmaWVsZCkgPT4ge1xuXG4gICAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xuICAgICAgICBjYXNlIEZpZWxkVHlwZS5BcnJheTpcbiAgICAgICAgICBzY2hlbWEuaXRlbXMgPSBmaWVsZC5nZXRTY2hlbWEoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGlmICghc2NoZW1hLnByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIHNjaGVtYS5wcm9wZXJ0aWVzID0ge307XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2NoZW1hLnByb3BlcnRpZXNbZmllbGQubmFtZV0gPSBmaWVsZC5nZXRTY2hlbWEoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY29uc3QgYnV0dG9ucyA9IGZpZWxkLmdldEJ1dHRvbnMoKTtcbiAgICAgIGlmIChidXR0b25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgc2NoZW1hLmJ1dHRvbnMgPSBidXR0b25zO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWZpZWxkLnJlcXVpcmVkKSB7XG4gICAgICAgIHJldHVybiBzY2hlbWE7XG4gICAgICB9XG5cbiAgICAgIGlmICghc2NoZW1hLnJlcXVpcmVkKSB7XG4gICAgICAgIHNjaGVtYS5yZXF1aXJlZCA9IFtdO1xuICAgICAgfVxuICAgICAgc2NoZW1hLnJlcXVpcmVkLnB1c2goZmllbGQubmFtZSk7XG4gICAgICByZXR1cm4gc2NoZW1hO1xuICAgIH0sIHt9KTtcbiAgfVxuXG59XG4iLCJpbXBvcnQge1xuIENvbXBvbmVudCxcbiBFbGVtZW50UmVmLFxuIElucHV0LFxuIE9uSW5pdCxcbiBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUZW1wbGF0ZVNjaGVtYUVsZW1lbnQgfSBmcm9tICcuLi8uLi90ZW1wbGF0ZS1zY2hlbWEtZWxlbWVudCc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtaXRlbScsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuYFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtQ29tcG9uZW50IGV4dGVuZHMgVGVtcGxhdGVTY2hlbWFFbGVtZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKVxuICB2YWx1ZTogYW55O1xuXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB0aGlzLmdldFRleHRDb250ZW50KHRoaXMuZWxlbWVudFJlZik7XG4gIH1cblxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgVmlld0NoaWxkLFxuICBRdWVyeUxpc3QsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZSxcbiAgT25DaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgbWVyZ2UgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnLi4vLi4vbW9kZWwvYWN0aW9uJztcbmltcG9ydCB7IEFjdGlvblJlZ2lzdHJ5IH0gZnJvbSAnLi4vLi4vbW9kZWwvYWN0aW9ucmVnaXN0cnknO1xuaW1wb3J0IHsgVmFsaWRhdG9yIH0gZnJvbSAnLi4vLi4vbW9kZWwvdmFsaWRhdG9yJztcblxuaW1wb3J0IHsgVGVtcGxhdGVTY2hlbWFFbGVtZW50IH0gZnJvbSAnLi4vdGVtcGxhdGUtc2NoZW1hLWVsZW1lbnQnO1xuaW1wb3J0IHsgVGVtcGxhdGVTY2hlbWFTZXJ2aWNlIH0gZnJvbSAnLi4vdGVtcGxhdGUtc2NoZW1hLnNlcnZpY2UnO1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi4vYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBGaWVsZFBhcmVudCB9IGZyb20gJy4vZmllbGQtcGFyZW50JztcbmltcG9ydCB7IEZpZWxkVHlwZSwgRmllbGQgfSBmcm9tICcuL2ZpZWxkJztcbmltcG9ydCB7IEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2l0ZW0vaXRlbS5jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLWZpZWxkJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudCA+PC9uZy1jb250ZW50PlxuYFxufSlcbmV4cG9ydCBjbGFzcyBGaWVsZENvbXBvbmVudCBleHRlbmRzIEZpZWxkUGFyZW50IGltcGxlbWVudHNcbkZpZWxkLCBPbkNoYW5nZXMsIEFmdGVyQ29udGVudEluaXQge1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oRmllbGRDb21wb25lbnQpXG4gIGNoaWxkRmllbGRzOiBRdWVyeUxpc3Q8RmllbGRDb21wb25lbnQ+O1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oSXRlbUNvbXBvbmVudClcbiAgY2hpbGRJdGVtczogUXVlcnlMaXN0PEl0ZW1Db21wb25lbnQ+O1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oQnV0dG9uQ29tcG9uZW50KVxuICBjaGlsZEJ1dHRvbnM6IFF1ZXJ5TGlzdDxCdXR0b25Db21wb25lbnQ+O1xuXG4gIEBJbnB1dCgpXG4gIG5hbWU6IHN0cmluZztcblxuICBASW5wdXQoKVxuICB0eXBlID0gRmllbGRUeXBlLlN0cmluZztcblxuICBASW5wdXQoKVxuICBmb3JtYXQ6IHN0cmluZztcblxuICBASW5wdXQoKVxuICByZXF1aXJlZDogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICByZWFkT25seTogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICB0aXRsZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgcGxhY2Vob2xkZXI6IHN0cmluZztcblxuICBASW5wdXQoKVxuICB3aWRnZXQ6IHN0cmluZyB8IG9iamVjdDtcblxuICBASW5wdXQoKVxuICB2YWxpZGF0b3I6IFZhbGlkYXRvcjtcblxuICBASW5wdXQoKVxuICBzY2hlbWE6IGFueSA9IHsgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVNjaGVtYVNlcnZpY2U6IFRlbXBsYXRlU2NoZW1hU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYWN0aW9uUmVnaXN0cnk6IEFjdGlvblJlZ2lzdHJ5XG4gICkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBnZXRTY2hlbWEoKTogYW55IHtcblxuICAgIGNvbnN0IHsgcHJvcGVydGllcywgaXRlbXMsIHJlcXVpcmVkIH0gPSB0aGlzLmdldEZpZWxkc1NjaGVtYShcbiAgICAgIHRoaXMuY2hpbGRGaWVsZHMuZmlsdGVyKGZpZWxkID0+IGZpZWxkICE9PSB0aGlzKVxuICAgICk7XG5cbiAgICBjb25zdCBvbmVPZiA9IHRoaXMuZ2V0T25lT2YoKTtcblxuICAgIGNvbnN0IHNjaGVtYSA9IDxhbnk+e1xuICAgICAgdHlwZTogdGhpcy50eXBlXG4gICAgfTtcblxuICAgIGlmICh0aGlzLnRpdGxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNjaGVtYS50aXRsZSA9IHRoaXMudGl0bGU7XG4gICAgfVxuXG4gICAgaWYgKHByb3BlcnRpZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2NoZW1hLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuICAgIH1cblxuICAgIGlmIChpdGVtcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzY2hlbWEuaXRlbXMgPSBpdGVtcztcbiAgICB9XG5cbiAgICAvLyByZXF1cmllZCBjaGlsZCBmaWVsZHNcbiAgICBpZiAocmVxdWlyZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2NoZW1hLnJlcXVpcmVkID0gcmVxdWlyZWQ7XG4gICAgfVxuXG4gICAgaWYgKG9uZU9mICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNjaGVtYS5vbmVPZiA9IG9uZU9mO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNjaGVtYS5kZXNjcmlwdGlvbiA9IHRoaXMuZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGxhY2Vob2xkZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2NoZW1hLnBsYWNlaG9sZGVyID0gdGhpcy5wbGFjZWhvbGRlcjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5mb3JtYXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2NoZW1hLmZvcm1hdCA9IHRoaXMuZm9ybWF0O1xuICAgIH1cblxuICAgIGlmICh0aGlzLndpZGdldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzY2hlbWEud2lkZ2V0ID0gdGhpcy53aWRnZXQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucmVhZE9ubHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2NoZW1hLnJlYWRPbmx5ID0gdGhpcy5yZWFkT25seTtcbiAgICB9XG5cbiAgICBjb25zdCBidXR0b25zID0gdGhpcy5nZXRCdXR0b25zKCk7XG4gICAgaWYgKGJ1dHRvbnMubGVuZ3RoID4gMCkge1xuICAgICAgc2NoZW1hLmJ1dHRvbnMgPSBidXR0b25zO1xuICAgIH1cblxuICAgIC8vIEBJbnB1dCBzY2hlbWEgdGFrZXMgcHJlY2VkZW5jZVxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHNjaGVtYSwgdGhpcy5zY2hlbWEpO1xuXG4gIH1cblxuICBnZXRWYWxpZGF0b3JzKCk6IHsgcGF0aDogc3RyaW5nLCB2YWxpZGF0b3I6IFZhbGlkYXRvciB9W10ge1xuXG4gICAgLy8gcmVnaXN0ZXJpbmcgdmFsaWRhdG9yIGhlcmUgaXMgbm90IHBvc3NpYmxlIHNpbmNlIHByb3AgZnVsbCBwYXRoIGlzIG5lZWRlZFxuICAgIGNvbnN0IGNoaWxkVmFsaWRhdG9ycyA9IHRoaXMuZ2V0RmllbGRzVmFsaWRhdG9ycyhcbiAgICAgIHRoaXMuY2hpbGRGaWVsZHMuZmlsdGVyKGZpZWxkID0+IGZpZWxkICE9PSB0aGlzKVxuICAgICk7XG4gICAgY29uc3QgdmFsaWRhdG9ycyA9IGNoaWxkVmFsaWRhdG9ycy5tYXAoKHsgcGF0aCwgdmFsaWRhdG9yIH0pID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhdGg6IHRoaXMucGF0aCArIHBhdGgsXG4gICAgICAgIHZhbGlkYXRvclxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGlmICghdGhpcy52YWxpZGF0b3IpIHtcbiAgICAgIHJldHVybiB2YWxpZGF0b3JzO1xuICAgIH1cblxuICAgIHZhbGlkYXRvcnMucHVzaCh7IHBhdGg6IHRoaXMucGF0aCwgdmFsaWRhdG9yOiB0aGlzLnZhbGlkYXRvciB9KTtcbiAgICByZXR1cm4gdmFsaWRhdG9ycztcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjaGFuZ2VzKTtcbiAgICBpZiAoa2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgIGlmICghY2hhbmdlc1trZXldLmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgICAgIC8vIG9uIGFueSBpbnB1dCBjaGFuZ2UsIGZvcmNlIHNjaGVtYSBjaGFuZ2UgZ2VuZXJhdGlvblxuICAgICAgICAgIHRoaXMudGVtcGxhdGVTY2hlbWFTZXJ2aWNlLmNoYW5nZWQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICB9XG5cblxuICBwcml2YXRlIGdldE9uZU9mKCkge1xuXG4gICAgaWYgKHRoaXMuY2hpbGRJdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpdGVtcyA9IHRoaXMuY2hpbGRJdGVtcy5tYXAoKHsgdmFsdWUsIGRlc2NyaXB0aW9uIH0pID0+IHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHsgZW51bTogW3ZhbHVlXSwgZGVzY3JpcHRpb24gfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgZW51bTogdmFsdWUsIGRlc2NyaXB0aW9uIH07XG4gICAgfSk7XG5cbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZW1zO1xuICB9XG5cblxuICBwcml2YXRlIHNldFRpdGxlRnJvbUNvbnRlbnQoKSB7XG4gICAgY29uc3QgdGV4dENvbnRlbnQgPSB0aGlzLmdldFRleHRDb250ZW50KHRoaXMuZWxlbWVudFJlZik7XG5cbiAgICAvLyAgdGl0bGUgYXMgQElucHV0IHRha2VzIHByaW9yaXR5IG92ZXIgY29udGVudCB0ZXh0XG4gICAgaWYgKHRleHRDb250ZW50ICYmICF0aGlzLnRpdGxlKSB7XG4gICAgICB0aGlzLnRpdGxlID0gdGV4dENvbnRlbnQ7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuXG4gICAgLy8gY2FjaGUgaXRcbiAgICB0aGlzLnNldFRpdGxlRnJvbUNvbnRlbnQoKTtcblxuICAgIG1lcmdlKFxuICAgICAgdGhpcy5jaGlsZEZpZWxkcy5jaGFuZ2VzLFxuICAgICAgdGhpcy5jaGlsZEl0ZW1zLmNoYW5nZXMsXG4gICAgICB0aGlzLmNoaWxkQnV0dG9ucy5jaGFuZ2VzXG4gICAgKVxuICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy50ZW1wbGF0ZVNjaGVtYVNlcnZpY2UuY2hhbmdlZCgpKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBIb3N0QmluZGluZyxcbiAgU2ltcGxlQ2hhbmdlLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRm9ybUNvbXBvbmVudCB9IGZyb20gJy4uL2Zvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IEFjdGlvblJlZ2lzdHJ5IH0gZnJvbSAnLi4vbW9kZWwvYWN0aW9ucmVnaXN0cnknO1xuaW1wb3J0IHsgVmFsaWRhdG9yUmVnaXN0cnkgfSBmcm9tICcuLi9tb2RlbC92YWxpZGF0b3JyZWdpc3RyeSc7XG5pbXBvcnQgeyBUZXJtaW5hdG9yU2VydmljZSB9IGZyb20gJy4uL3Rlcm1pbmF0b3Iuc2VydmljZSc7XG5cbmltcG9ydCB7IFRlbXBsYXRlU2NoZW1hU2VydmljZSB9IGZyb20gJy4vdGVtcGxhdGUtc2NoZW1hLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2ZpZWxkL2ZpZWxkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWVsZFR5cGUsIEZpZWxkIH0gZnJvbSAnLi9maWVsZC9maWVsZCc7XG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2J1dHRvbi9idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IEZpZWxkUGFyZW50IH0gZnJvbSAnLi9maWVsZC9maWVsZC1wYXJlbnQnO1xuXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ3NmLWZvcm1bdGVtcGxhdGVTY2hlbWFdJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgVGVtcGxhdGVTY2hlbWFTZXJ2aWNlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVTY2hlbWFEaXJlY3RpdmUgZXh0ZW5kcyBGaWVsZFBhcmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oRmllbGRDb21wb25lbnQpXG4gIGNoaWxkRmllbGRzOiBRdWVyeUxpc3Q8RmllbGRDb21wb25lbnQ+O1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oQnV0dG9uQ29tcG9uZW50KVxuICBjaGlsZEJ1dHRvbnM6IFF1ZXJ5TGlzdDxCdXR0b25Db21wb25lbnQ+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBhY3Rpb25SZWdpc3RyeTogQWN0aW9uUmVnaXN0cnksXG4gICAgcHJvdGVjdGVkIHZhbGlkYXRvclJlZ2lzdHJ5OiBWYWxpZGF0b3JSZWdpc3RyeSxcbiAgICBwcml2YXRlIGZvcm1Db21wb25lbnQ6IEZvcm1Db21wb25lbnQsXG4gICAgcHJpdmF0ZSB0ZXJtaW5hdG9yU2VydmljZTogVGVybWluYXRvclNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVNjaGVtYVNlcnZpY2U6IFRlbXBsYXRlU2NoZW1hU2VydmljZVxuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgc2V0Rm9ybURvY3VtZW50U2NoZW1hKGZpZWxkczogRmllbGRDb21wb25lbnRbXSkge1xuICAgICAgdGhpcy5hY3Rpb25SZWdpc3RyeS5jbGVhcigpO1xuICAgICAgdGhpcy52YWxpZGF0b3JSZWdpc3RyeS5jbGVhcigpO1xuXG4gICAgICBjb25zdCBzY2hlbWEgPSB0aGlzLmdldEZpZWxkc1NjaGVtYShmaWVsZHMpO1xuXG4gICAgICBjb25zdCB2YWxpZGF0b3JzID0gdGhpcy5nZXRGaWVsZHNWYWxpZGF0b3JzKGZpZWxkcyk7XG4gICAgICB2YWxpZGF0b3JzLmZvckVhY2goKHsgcGF0aCwgdmFsaWRhdG9yIH0pID0+IHtcbiAgICAgICAgdGhpcy52YWxpZGF0b3JSZWdpc3RyeS5yZWdpc3RlcihwYXRoLCB2YWxpZGF0b3IpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHByZXZpb3VzU2NoZW1hID0gdGhpcy5mb3JtQ29tcG9uZW50LnNjaGVtYTtcbiAgICAgIHRoaXMuZm9ybUNvbXBvbmVudC5zY2hlbWEgPSB7XG4gICAgICAgIHR5cGU6IEZpZWxkVHlwZS5PYmplY3QsXG4gICAgICAgIHByb3BlcnRpZXM6IHNjaGVtYS5wcm9wZXJ0aWVzXG4gICAgICB9O1xuXG4gICAgICBpZiAoc2NoZW1hLnJlcXVpcmVkICYmIHNjaGVtYS5yZXF1aXJlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuZm9ybUNvbXBvbmVudC5zY2hlbWEucmVxdXJlZCA9IHNjaGVtYS5yZXF1aXJlZDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYnV0dG9ucyA9IHRoaXMuZ2V0QnV0dG9ucygpO1xuICAgICAgaWYgKGJ1dHRvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLmZvcm1Db21wb25lbnQuc2NoZW1hLmJ1dHRvbnMgPSBidXR0b25zO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmZvcm1Db21wb25lbnQubmdPbkNoYW5nZXMoe1xuICAgICAgICBzY2hlbWE6IG5ldyBTaW1wbGVDaGFuZ2UoXG4gICAgICAgICAgcHJldmlvdXNTY2hlbWEsXG4gICAgICAgICAgdGhpcy5mb3JtQ29tcG9uZW50LnNjaGVtYSxcbiAgICAgICAgICBCb29sZWFuKHByZXZpb3VzU2NoZW1hKVxuICAgICAgICApXG4gICAgICB9KTtcblxuICB9XG5cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG5cbiAgICBpZiAodGhpcy5jaGlsZEZpZWxkcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnNldEZvcm1Eb2N1bWVudFNjaGVtYSh0aGlzLmNoaWxkRmllbGRzLnRvQXJyYXkoKSk7XG4gICAgfVxuXG4gICAgbWVyZ2UoXG4gICAgICB0aGlzLmNoaWxkRmllbGRzLmNoYW5nZXMsXG4gICAgICB0aGlzLnRlbXBsYXRlU2NoZW1hU2VydmljZS5jaGFuZ2VzXG4gICAgKVxuICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnRlcm1pbmF0b3JTZXJ2aWNlLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuc2V0Rm9ybURvY3VtZW50U2NoZW1hKHRoaXMuY2hpbGRGaWVsZHMudG9BcnJheSgpKTtcbiAgICB9KTtcblxuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vZmllbGQvZmllbGQuY29tcG9uZW50JztcbmltcG9ydCB7IFRlbXBsYXRlU2NoZW1hRGlyZWN0aXZlIH0gZnJvbSAnLi90ZW1wbGF0ZS1zY2hlbWEuZGlyZWN0aXZlJztcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vZmllbGQvaXRlbS9pdGVtLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVGVtcGxhdGVTY2hlbWFEaXJlY3RpdmUsXG4gICAgRmllbGRDb21wb25lbnQsXG4gICAgQnV0dG9uQ29tcG9uZW50LFxuICAgIEl0ZW1Db21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFRlbXBsYXRlU2NoZW1hRGlyZWN0aXZlLFxuICAgIEZpZWxkQ29tcG9uZW50LFxuICAgIEJ1dHRvbkNvbXBvbmVudCxcbiAgICBJdGVtQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVTY2hlbWFNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQTs7dUJBQ3FDLEVBQUU7Ozs7O0lBRXJDLEtBQUs7UUFDSCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztLQUNuQjs7Ozs7O0lBRUQsUUFBUSxDQUFDLFFBQWdCLEVBQUUsTUFBYztRQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQztLQUNqQzs7Ozs7SUFFRCxHQUFHLENBQUMsUUFBZ0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsT0FBTyxD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QUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFFcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFFcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFFMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFFMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFFdEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQ3JDO0NBQ0Y7Ozs7OztB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