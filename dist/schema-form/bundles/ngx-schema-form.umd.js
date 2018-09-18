(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('rxjs/operators'), require('z-schema'), require('@angular/core'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-schema-form', ['exports', 'rxjs', 'rxjs/operators', 'z-schema', '@angular/core', '@angular/forms', '@angular/common'], factory) :
    (factory((global['ngx-schema-form'] = {}),global.rxjs,global.rxjs.operators,null,global.ng.core,global.ng.forms,global.ng.common));
}(this, (function (exports,rxjs,operators,ZSchema,core,forms,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ActionRegistry = (function () {
        function ActionRegistry() {
            this.actions = {};
        }
        /**
         * @return {?}
         */
        ActionRegistry.prototype.clear = /**
         * @return {?}
         */
            function () {
                this.actions = {};
            };
        /**
         * @param {?} actionId
         * @param {?} action
         * @return {?}
         */
        ActionRegistry.prototype.register = /**
         * @param {?} actionId
         * @param {?} action
         * @return {?}
         */
            function (actionId, action) {
                this.actions[actionId] = action;
            };
        /**
         * @param {?} actionId
         * @return {?}
         */
        ActionRegistry.prototype.get = /**
         * @param {?} actionId
         * @return {?}
         */
            function (actionId) {
                return this.actions[actionId];
            };
        return ActionRegistry;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p]; };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ FormProperty = (function () {
        function FormProperty(schemaValidatorFactory, validatorRegistry, schema, parent, path) {
            this.validatorRegistry = validatorRegistry;
            this.schema = schema;
            this._value = null;
            this._errors = null;
            this._valueChanges = new rxjs.BehaviorSubject(null);
            this._errorsChanges = new rxjs.BehaviorSubject(null);
            this._visible = true;
            this._visibilityChanges = new rxjs.BehaviorSubject(true);
            this.schemaValidator = schemaValidatorFactory.createValidatorFn(this.schema);
            this._parent = parent;
            if (parent) {
                this._root = parent.root;
            }
            else if (this instanceof PropertyGroup) {
                this._root = /** @type {?} */ ((this));
            }
            this._path = path;
        }
        Object.defineProperty(FormProperty.prototype, "valueChanges", {
            get: /**
             * @return {?}
             */ function () {
                return this._valueChanges;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormProperty.prototype, "errorsChanges", {
            get: /**
             * @return {?}
             */ function () {
                return this._errorsChanges;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormProperty.prototype, "type", {
            get: /**
             * @return {?}
             */ function () {
                return this.schema.type;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormProperty.prototype, "parent", {
            get: /**
             * @return {?}
             */ function () {
                return this._parent;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormProperty.prototype, "root", {
            get: /**
             * @return {?}
             */ function () {
                return this._root || /** @type {?} */ ((this));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormProperty.prototype, "path", {
            get: /**
             * @return {?}
             */ function () {
                return this._path;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormProperty.prototype, "value", {
            get: /**
             * @return {?}
             */ function () {
                return this._value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormProperty.prototype, "visible", {
            get: /**
             * @return {?}
             */ function () {
                return this._visible;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormProperty.prototype, "valid", {
            get: /**
             * @return {?}
             */ function () {
                return this._errors === null;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?=} onlySelf
         * @param {?=} emitEvent
         * @return {?}
         */
        FormProperty.prototype.updateValueAndValidity = /**
         * @param {?=} onlySelf
         * @param {?=} emitEvent
         * @return {?}
         */
            function (onlySelf, emitEvent) {
                if (onlySelf === void 0) {
                    onlySelf = false;
                }
                if (emitEvent === void 0) {
                    emitEvent = true;
                }
                this._updateValue();
                if (emitEvent) {
                    this.valueChanges.next(this.value);
                }
                this._runValidation();
                if (this.parent && !onlySelf) {
                    this.parent.updateValueAndValidity(onlySelf, emitEvent);
                }
            };
        /**
         * \@internal
         * @return {?}
         */
        FormProperty.prototype._runValidation = /**
         * \@internal
         * @return {?}
         */
            function () {
                var /** @type {?} */ errors = this.schemaValidator(this._value) || [];
                var /** @type {?} */ customValidator = this.validatorRegistry.get(this.path);
                if (customValidator) {
                    var /** @type {?} */ customErrors = customValidator(this.value, this, this.findRoot());
                    errors = this.mergeErrors(errors, customErrors);
                }
                if (errors.length === 0) {
                    errors = null;
                }
                this._errors = errors;
                this.setErrors(this._errors);
            };
        /**
         * @param {?} errors
         * @param {?} newErrors
         * @return {?}
         */
        FormProperty.prototype.mergeErrors = /**
         * @param {?} errors
         * @param {?} newErrors
         * @return {?}
         */
            function (errors, newErrors) {
                if (newErrors) {
                    if (Array.isArray(newErrors)) {
                        errors = errors.concat.apply(errors, __spread(newErrors));
                    }
                    else {
                        errors.push(newErrors);
                    }
                }
                return errors;
            };
        /**
         * @param {?} errors
         * @return {?}
         */
        FormProperty.prototype.setErrors = /**
         * @param {?} errors
         * @return {?}
         */
            function (errors) {
                this._errors = errors;
                this._errorsChanges.next(errors);
            };
        /**
         * @param {?} errors
         * @return {?}
         */
        FormProperty.prototype.extendErrors = /**
         * @param {?} errors
         * @return {?}
         */
            function (errors) {
                errors = this.mergeErrors(this._errors || [], errors);
                this.setErrors(errors);
            };
        /**
         * @param {?} path
         * @return {?}
         */
        FormProperty.prototype.searchProperty = /**
         * @param {?} path
         * @return {?}
         */
            function (path) {
                var /** @type {?} */ prop = this;
                var /** @type {?} */ base = null;
                var /** @type {?} */ result = null;
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
            };
        /**
         * @return {?}
         */
        FormProperty.prototype.findRoot = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ property = this;
                while (property.parent !== null) {
                    property = property.parent;
                }
                return /** @type {?} */ (property);
            };
        /**
         * @param {?} visible
         * @return {?}
         */
        FormProperty.prototype.setVisible = /**
         * @param {?} visible
         * @return {?}
         */
            function (visible) {
                this._visible = visible;
                this._visibilityChanges.next(visible);
                this.updateValueAndValidity();
                if (this.parent) {
                    this.parent.updateValueAndValidity(false, true);
                }
            };
        /**
         * @return {?}
         */
        FormProperty.prototype._bindVisibility = /**
         * @return {?}
         */
            function () {
                var _this = this;
                var /** @type {?} */ visibleIf = this.schema.visibleIf;
                if (typeof visibleIf === 'object' && Object.keys(visibleIf).length === 0) {
                    this.setVisible(false);
                }
                else if (visibleIf !== undefined) {
                    var /** @type {?} */ propertiesBinding = [];
                    var _loop_1 = function (dependencyPath) {
                        if (visibleIf.hasOwnProperty(dependencyPath)) {
                            var /** @type {?} */ property = this_1.searchProperty(dependencyPath);
                            if (property) {
                                var /** @type {?} */ valueCheck = property.valueChanges.pipe(operators.map(function (value) {
                                    if (visibleIf[dependencyPath].indexOf('$ANY$') !== -1) {
                                        return value.length > 0;
                                    }
                                    else {
                                        return visibleIf[dependencyPath].indexOf(value) !== -1;
                                    }
                                }));
                                var /** @type {?} */ visibilityCheck = property._visibilityChanges;
                                var /** @type {?} */ and = rxjs.combineLatest([valueCheck, visibilityCheck], function (v1, v2) { return v1 && v2; });
                                propertiesBinding.push(and);
                            }
                            else {
                                console.warn('Can\'t find property ' + dependencyPath + ' for visibility check of ' + this_1.path);
                            }
                        }
                    };
                    var this_1 = this;
                    for (var /** @type {?} */ dependencyPath in visibleIf) {
                        _loop_1(dependencyPath);
                    }
                    rxjs.combineLatest(propertiesBinding, function () {
                        var values = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            values[_i] = arguments[_i];
                        }
                        return values.indexOf(true) !== -1;
                    }).pipe(operators.distinctUntilChanged()).subscribe(function (visible) {
                        _this.setVisible(visible);
                    });
                }
            };
        return FormProperty;
    }());
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ PropertyGroup = (function (_super) {
        __extends(PropertyGroup, _super);
        function PropertyGroup() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.properties = null;
            return _this;
        }
        /**
         * @param {?} path
         * @return {?}
         */
        PropertyGroup.prototype.getProperty = /**
         * @param {?} path
         * @return {?}
         */
            function (path) {
                var /** @type {?} */ subPathIdx = path.indexOf('/');
                var /** @type {?} */ propertyId = subPathIdx !== -1 ? path.substr(0, subPathIdx) : path;
                var /** @type {?} */ property = this.properties[propertyId];
                if (property !== null && subPathIdx !== -1 && property instanceof PropertyGroup) {
                    var /** @type {?} */ subPath = path.substr(subPathIdx + 1);
                    property = ((property)).getProperty(subPath);
                }
                return property;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        PropertyGroup.prototype.forEachChild = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                for (var /** @type {?} */ propertyId in this.properties) {
                    if (this.properties.hasOwnProperty(propertyId)) {
                        var /** @type {?} */ property = this.properties[propertyId];
                        fn(property, propertyId);
                    }
                }
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        PropertyGroup.prototype.forEachChildRecursive = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.forEachChild(function (child) {
                    fn(child);
                    if (child instanceof PropertyGroup) {
                        ((child)).forEachChildRecursive(fn);
                    }
                });
            };
        /**
         * @return {?}
         */
        PropertyGroup.prototype._bindVisibility = /**
         * @return {?}
         */
            function () {
                _super.prototype._bindVisibility.call(this);
                this._bindVisibilityRecursive();
            };
        /**
         * @return {?}
         */
        PropertyGroup.prototype._bindVisibilityRecursive = /**
         * @return {?}
         */
            function () {
                this.forEachChildRecursive(function (property) {
                    property._bindVisibility();
                });
            };
        /**
         * @return {?}
         */
        PropertyGroup.prototype.isRoot = /**
         * @return {?}
         */
            function () {
                return this === this.root;
            };
        return PropertyGroup;
    }(FormProperty));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ AtomicProperty = (function (_super) {
        __extends(AtomicProperty, _super);
        function AtomicProperty() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} value
         * @param {?=} onlySelf
         * @return {?}
         */
        AtomicProperty.prototype.setValue = /**
         * @param {?} value
         * @param {?=} onlySelf
         * @return {?}
         */
            function (value, onlySelf) {
                if (onlySelf === void 0) {
                    onlySelf = false;
                }
                this._value = value;
                this.updateValueAndValidity(onlySelf, true);
            };
        /**
         * @param {?=} value
         * @param {?=} onlySelf
         * @return {?}
         */
        AtomicProperty.prototype.reset = /**
         * @param {?=} value
         * @param {?=} onlySelf
         * @return {?}
         */
            function (value, onlySelf) {
                if (value === void 0) {
                    value = null;
                }
                if (onlySelf === void 0) {
                    onlySelf = true;
                }
                this.resetValue(value);
                this.updateValueAndValidity(onlySelf, true);
            };
        /**
         * @param {?} value
         * @return {?}
         */
        AtomicProperty.prototype.resetValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (value === null) {
                    if (this.schema.default !== undefined) {
                        value = this.schema.default;
                    }
                    else {
                        value = this.fallbackValue();
                    }
                }
                this._value = value;
            };
        /**
         * @return {?}
         */
        AtomicProperty.prototype._hasValue = /**
         * @return {?}
         */
            function () {
                return this.fallbackValue() !== this.value;
            };
        /**
         * @return {?}
         */
        AtomicProperty.prototype._updateValue = /**
         * @return {?}
         */
            function () {
            };
        return AtomicProperty;
    }(FormProperty));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NumberProperty = (function (_super) {
        __extends(NumberProperty, _super);
        function NumberProperty() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        NumberProperty.prototype.fallbackValue = /**
         * @return {?}
         */
            function () {
                return null;
            };
        /**
         * @param {?} value
         * @param {?=} onlySelf
         * @return {?}
         */
        NumberProperty.prototype.setValue = /**
         * @param {?} value
         * @param {?=} onlySelf
         * @return {?}
         */
            function (value, onlySelf) {
                if (onlySelf === void 0) {
                    onlySelf = false;
                }
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
            };
        return NumberProperty;
    }(AtomicProperty));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var StringProperty = (function (_super) {
        __extends(StringProperty, _super);
        function StringProperty() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        StringProperty.prototype.fallbackValue = /**
         * @return {?}
         */
            function () {
                return '';
            };
        return StringProperty;
    }(AtomicProperty));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BooleanProperty = (function (_super) {
        __extends(BooleanProperty, _super);
        function BooleanProperty() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        BooleanProperty.prototype.fallbackValue = /**
         * @return {?}
         */
            function () {
                return null;
            };
        return BooleanProperty;
    }(AtomicProperty));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ObjectProperty = (function (_super) {
        __extends(ObjectProperty, _super);
        function ObjectProperty(formPropertyFactory, schemaValidatorFactory, validatorRegistry, schema, parent, path) {
            var _this = _super.call(this, schemaValidatorFactory, validatorRegistry, schema, parent, path) || this;
            _this.formPropertyFactory = formPropertyFactory;
            _this.propertiesId = [];
            _this.createProperties();
            return _this;
        }
        /**
         * @param {?} value
         * @param {?} onlySelf
         * @return {?}
         */
        ObjectProperty.prototype.setValue = /**
         * @param {?} value
         * @param {?} onlySelf
         * @return {?}
         */
            function (value, onlySelf) {
                for (var /** @type {?} */ propertyId in value) {
                    if (value.hasOwnProperty(propertyId)) {
                        this.properties[propertyId].setValue(value[propertyId], true);
                    }
                }
                this.updateValueAndValidity(onlySelf, true);
            };
        /**
         * @param {?} value
         * @param {?=} onlySelf
         * @return {?}
         */
        ObjectProperty.prototype.reset = /**
         * @param {?} value
         * @param {?=} onlySelf
         * @return {?}
         */
            function (value, onlySelf) {
                if (onlySelf === void 0) {
                    onlySelf = true;
                }
                value = value || this.schema.default || {};
                this.resetProperties(value);
                this.updateValueAndValidity(onlySelf, true);
            };
        /**
         * @param {?} value
         * @return {?}
         */
        ObjectProperty.prototype.resetProperties = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                for (var /** @type {?} */ propertyId in this.schema.properties) {
                    if (this.schema.properties.hasOwnProperty(propertyId)) {
                        this.properties[propertyId].reset(value[propertyId], true);
                    }
                }
            };
        /**
         * @return {?}
         */
        ObjectProperty.prototype.createProperties = /**
         * @return {?}
         */
            function () {
                this.properties = {};
                this.propertiesId = [];
                for (var /** @type {?} */ propertyId in this.schema.properties) {
                    if (this.schema.properties.hasOwnProperty(propertyId)) {
                        var /** @type {?} */ propertySchema = this.schema.properties[propertyId];
                        this.properties[propertyId] = this.formPropertyFactory.createProperty(propertySchema, this, propertyId);
                        this.propertiesId.push(propertyId);
                    }
                }
            };
        /**
         * @return {?}
         */
        ObjectProperty.prototype._hasValue = /**
         * @return {?}
         */
            function () {
                return !!Object.keys(this.value).length;
            };
        /**
         * @return {?}
         */
        ObjectProperty.prototype._updateValue = /**
         * @return {?}
         */
            function () {
                this.reduceValue();
            };
        /**
         * @return {?}
         */
        ObjectProperty.prototype._runValidation = /**
         * @return {?}
         */
            function () {
                var _this = this;
                _super.prototype._runValidation.call(this);
                if (this._errors) {
                    this._errors.forEach(function (error) {
                        var /** @type {?} */ prop = _this.searchProperty(error.path.slice(1));
                        if (prop) {
                            prop.extendErrors(error);
                        }
                    });
                }
            };
        /**
         * @return {?}
         */
        ObjectProperty.prototype.reduceValue = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ value = {};
                this.forEachChild(function (property, propertyId) {
                    if (property.visible && property._hasValue()) {
                        value[propertyId] = property.value;
                    }
                });
                this._value = value;
            };
        return ObjectProperty;
    }(PropertyGroup));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ArrayProperty = (function (_super) {
        __extends(ArrayProperty, _super);
        function ArrayProperty(formPropertyFactory, schemaValidatorFactory, validatorRegistry, schema, parent, path) {
            var _this = _super.call(this, schemaValidatorFactory, validatorRegistry, schema, parent, path) || this;
            _this.formPropertyFactory = formPropertyFactory;
            return _this;
        }
        /**
         * @param {?=} value
         * @return {?}
         */
        ArrayProperty.prototype.addItem = /**
         * @param {?=} value
         * @return {?}
         */
            function (value) {
                if (value === void 0) {
                    value = null;
                }
                var /** @type {?} */ newProperty = this.addProperty();
                newProperty.reset(value, false);
                return newProperty;
            };
        /**
         * @return {?}
         */
        ArrayProperty.prototype.addProperty = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ newProperty = this.formPropertyFactory.createProperty(this.schema.items, this);
                ((this.properties)).push(newProperty);
                return newProperty;
            };
        /**
         * @param {?} index
         * @return {?}
         */
        ArrayProperty.prototype.removeItem = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                ((this.properties)).splice(index, 1);
                this.updateValueAndValidity(false, true);
            };
        /**
         * @param {?} value
         * @param {?} onlySelf
         * @return {?}
         */
        ArrayProperty.prototype.setValue = /**
         * @param {?} value
         * @param {?} onlySelf
         * @return {?}
         */
            function (value, onlySelf) {
                this.createProperties();
                this.resetProperties(value);
                this.updateValueAndValidity(onlySelf, true);
            };
        /**
         * @return {?}
         */
        ArrayProperty.prototype._hasValue = /**
         * @return {?}
         */
            function () {
                return true;
            };
        /**
         * @return {?}
         */
        ArrayProperty.prototype._updateValue = /**
         * @return {?}
         */
            function () {
                this.reduceValue();
            };
        /**
         * @return {?}
         */
        ArrayProperty.prototype.reduceValue = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ value = [];
                this.forEachChild(function (property, _) {
                    if (property.visible && property._hasValue()) {
                        value.push(property.value);
                    }
                });
                this._value = value;
            };
        /**
         * @param {?} value
         * @param {?=} onlySelf
         * @return {?}
         */
        ArrayProperty.prototype.reset = /**
         * @param {?} value
         * @param {?=} onlySelf
         * @return {?}
         */
            function (value, onlySelf) {
                if (onlySelf === void 0) {
                    onlySelf = true;
                }
                value = value || this.schema.default || [];
                this.properties = [];
                this.resetProperties(value);
                this.updateValueAndValidity(onlySelf, true);
            };
        /**
         * @return {?}
         */
        ArrayProperty.prototype.createProperties = /**
         * @return {?}
         */
            function () {
                this.properties = [];
            };
        /**
         * @param {?} value
         * @return {?}
         */
        ArrayProperty.prototype.resetProperties = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                for (var /** @type {?} */ idx in value) {
                    if (value.hasOwnProperty(idx)) {
                        var /** @type {?} */ property = this.addProperty();
                        property.reset(value[idx], true);
                    }
                }
            };
        return ArrayProperty;
    }(PropertyGroup));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FormPropertyFactory = (function () {
        function FormPropertyFactory(schemaValidatorFactory, validatorRegistry) {
            this.schemaValidatorFactory = schemaValidatorFactory;
            this.validatorRegistry = validatorRegistry;
        }
        /**
         * @param {?} schema
         * @param {?=} parent
         * @param {?=} propertyId
         * @return {?}
         */
        FormPropertyFactory.prototype.createProperty = /**
         * @param {?} schema
         * @param {?=} parent
         * @param {?=} propertyId
         * @return {?}
         */
            function (schema, parent, propertyId) {
                if (parent === void 0) {
                    parent = null;
                }
                var /** @type {?} */ newProperty = null;
                var /** @type {?} */ path = '';
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
                    var /** @type {?} */ refSchema = this.schemaValidatorFactory.getSchema(parent.root.schema, schema.$ref);
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
                            throw new TypeError("Undefined type " + schema.type);
                    }
                }
                if (newProperty instanceof PropertyGroup) {
                    this.initializeRoot(newProperty);
                }
                return newProperty;
            };
        /**
         * @param {?} rootProperty
         * @return {?}
         */
        FormPropertyFactory.prototype.initializeRoot = /**
         * @param {?} rootProperty
         * @return {?}
         */
            function (rootProperty) {
                rootProperty.reset(null, true);
                rootProperty._bindVisibility();
            };
        return FormPropertyFactory;
    }());

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
    var SchemaPreprocessor = (function () {
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
                if (path === void 0) {
                    path = '/';
                }
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
                    for (var _a = __values(jsonSchema.fieldsets), _b = _a.next(); !_b.done; _b = _a.next()) {
                        var fieldset = _b.value;
                        try {
                            for (var _c = __values(fieldset.fields), _d = _c.next(); !_d.done; _d = _c.next()) {
                                var fieldId = _d.value;
                                if (usedFields[fieldId] === undefined) {
                                    usedFields[fieldId] = [];
                                }
                                usedFields[fieldId].push(fieldset.id);
                            }
                        }
                        catch (e_1_1) {
                            e_1 = { error: e_1_1 };
                        }
                        finally {
                            try {
                                if (_d && !_d.done && (_e = _c.return))
                                    _e.call(_c);
                            }
                            finally {
                                if (e_1)
                                    throw e_1.error;
                            }
                        }
                    }
                }
                catch (e_2_1) {
                    e_2 = { error: e_2_1 };
                }
                finally {
                    try {
                        if (_b && !_b.done && (_f = _a.return))
                            _f.call(_a);
                    }
                    finally {
                        if (e_2)
                            throw e_2.error;
                    }
                }
                try {
                    for (var fieldsId_1 = __values(fieldsId), fieldsId_1_1 = fieldsId_1.next(); !fieldsId_1_1.done; fieldsId_1_1 = fieldsId_1.next()) {
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
                catch (e_3_1) {
                    e_3 = { error: e_3_1 };
                }
                finally {
                    try {
                        if (fieldsId_1_1 && !fieldsId_1_1.done && (_g = fieldsId_1.return))
                            _g.call(fieldsId_1);
                    }
                    finally {
                        if (e_3)
                            throw e_3.error;
                    }
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ValidatorRegistry = (function () {
        function ValidatorRegistry() {
            this.validators = [];
        }
        /**
         * @param {?} path
         * @param {?} validator
         * @return {?}
         */
        ValidatorRegistry.prototype.register = /**
         * @param {?} path
         * @param {?} validator
         * @return {?}
         */
            function (path, validator) {
                this.validators[path] = validator;
            };
        /**
         * @param {?} path
         * @return {?}
         */
        ValidatorRegistry.prototype.get = /**
         * @param {?} path
         * @return {?}
         */
            function (path) {
                return this.validators[path];
            };
        /**
         * @return {?}
         */
        ValidatorRegistry.prototype.clear = /**
         * @return {?}
         */
            function () {
                this.validators = [];
            };
        return ValidatorRegistry;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BindingRegistry = (function () {
        function BindingRegistry() {
            this.bindings = [];
        }
        /**
         * @return {?}
         */
        BindingRegistry.prototype.clear = /**
         * @return {?}
         */
            function () {
                this.bindings = [];
            };
        /**
         * @param {?} path
         * @param {?} binding
         * @return {?}
         */
        BindingRegistry.prototype.register = /**
         * @param {?} path
         * @param {?} binding
         * @return {?}
         */
            function (path, binding) {
                this.bindings[path] = [].concat(binding);
            };
        /**
         * @param {?} path
         * @return {?}
         */
        BindingRegistry.prototype.get = /**
         * @param {?} path
         * @return {?}
         */
            function (path) {
                return this.bindings[path];
            };
        return BindingRegistry;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ SchemaValidatorFactory = (function () {
        function SchemaValidatorFactory() {
        }
        return SchemaValidatorFactory;
    }());
    var ZSchemaValidatorFactory = (function (_super) {
        __extends(ZSchemaValidatorFactory, _super);
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var WidgetRegistry = (function () {
        function WidgetRegistry() {
            this.widgets = {};
        }
        /**
         * @param {?} widget
         * @return {?}
         */
        WidgetRegistry.prototype.setDefaultWidget = /**
         * @param {?} widget
         * @return {?}
         */
            function (widget) {
                this.defaultWidget = widget;
            };
        /**
         * @return {?}
         */
        WidgetRegistry.prototype.getDefaultWidget = /**
         * @return {?}
         */
            function () {
                return this.defaultWidget;
            };
        /**
         * @param {?} type
         * @return {?}
         */
        WidgetRegistry.prototype.hasWidget = /**
         * @param {?} type
         * @return {?}
         */
            function (type) {
                return this.widgets.hasOwnProperty(type);
            };
        /**
         * @param {?} type
         * @param {?} widget
         * @return {?}
         */
        WidgetRegistry.prototype.register = /**
         * @param {?} type
         * @param {?} widget
         * @return {?}
         */
            function (type, widget) {
                this.widgets[type] = widget;
            };
        /**
         * @param {?} type
         * @return {?}
         */
        WidgetRegistry.prototype.getWidgetType = /**
         * @param {?} type
         * @return {?}
         */
            function (type) {
                if (this.hasWidget(type)) {
                    return this.widgets[type];
                }
                return this.defaultWidget;
            };
        return WidgetRegistry;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var WidgetFactory = (function () {
        function WidgetFactory(registry, resolver) {
            this.registry = registry;
            this.resolver = resolver;
        }
        /**
         * @param {?} container
         * @param {?} type
         * @return {?}
         */
        WidgetFactory.prototype.createWidget = /**
         * @param {?} container
         * @param {?} type
         * @return {?}
         */
            function (container, type) {
                var /** @type {?} */ componentClass = this.registry.getWidgetType(type);
                var /** @type {?} */ componentFactory = this.resolver.resolveComponentFactory(componentClass);
                return container.createComponent(componentFactory);
            };
        WidgetFactory.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        WidgetFactory.ctorParameters = function () {
            return [
                { type: WidgetRegistry, },
                { type: core.ComponentFactoryResolver, },
            ];
        };
        return WidgetFactory;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TerminatorService = (function () {
        function TerminatorService() {
            this.onDestroy = new rxjs.Subject();
        }
        /**
         * @return {?}
         */
        TerminatorService.prototype.destroy = /**
         * @return {?}
         */
            function () {
                this.onDestroy.next(true);
            };
        TerminatorService.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        TerminatorService.ctorParameters = function () { return []; };
        return TerminatorService;
    }());

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
    var FormComponent = (function () {
        function FormComponent(formPropertyFactory, actionRegistry, validatorRegistry, bindingRegistry, cdr, terminator) {
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
            this.onChange = new core.EventEmitter();
            this.modelChange = new core.EventEmitter();
            this.isValid = new core.EventEmitter();
            this.onErrorChange = new core.EventEmitter();
            this.onErrorsChange = new core.EventEmitter();
            this.rootProperty = null;
        }
        /**
         * @param {?} obj
         * @return {?}
         */
        FormComponent.prototype.writeValue = /**
         * @param {?} obj
         * @return {?}
         */
            function (obj) {
                if (this.rootProperty) {
                    this.rootProperty.reset(obj, false);
                }
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        FormComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onChangeCallback = fn;
                if (this.rootProperty) {
                    this.rootProperty.valueChanges.subscribe(this.onValueChanges.bind(this));
                }
            };
        // TODO implement
        /**
         * @param {?} fn
         * @return {?}
         */
        FormComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
            };
        // TODO implement
        // setDisabledState(isDisabled: boolean)?: void
        /**
         * @param {?} changes
         * @return {?}
         */
        FormComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                var _this = this;
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
                    this.rootProperty.errorsChanges.subscribe(function (value) {
                        _this.onErrorChange.emit({ value: value });
                        _this.isValid.emit(!(value && value.length));
                    });
                }
                if (this.schema && (changes["model"] || changes["schema"])) {
                    this.rootProperty.reset(this.model, false);
                    this.cdr.detectChanges();
                }
            };
        /**
         * @return {?}
         */
        FormComponent.prototype.setValidators = /**
         * @return {?}
         */
            function () {
                this.validatorRegistry.clear();
                if (this.validators) {
                    for (var /** @type {?} */ validatorId in this.validators) {
                        if (this.validators.hasOwnProperty(validatorId)) {
                            this.validatorRegistry.register(validatorId, this.validators[validatorId]);
                        }
                    }
                }
            };
        /**
         * @return {?}
         */
        FormComponent.prototype.setActions = /**
         * @return {?}
         */
            function () {
                this.actionRegistry.clear();
                if (this.actions) {
                    for (var /** @type {?} */ actionId in this.actions) {
                        if (this.actions.hasOwnProperty(actionId)) {
                            this.actionRegistry.register(actionId, this.actions[actionId]);
                        }
                    }
                }
            };
        /**
         * @return {?}
         */
        FormComponent.prototype.setBindings = /**
         * @return {?}
         */
            function () {
                this.bindingRegistry.clear();
                if (this.bindings) {
                    for (var /** @type {?} */ bindingPath in this.bindings) {
                        if (this.bindings.hasOwnProperty(bindingPath)) {
                            this.bindingRegistry.register(bindingPath, this.bindings[bindingPath]);
                        }
                    }
                }
            };
        /**
         * @return {?}
         */
        FormComponent.prototype.reset = /**
         * @return {?}
         */
            function () {
                this.rootProperty.reset(null, true);
            };
        /**
         * @param {?} value
         * @return {?}
         */
        FormComponent.prototype.setModel = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (this.model) {
                    Object.assign(this.model, value);
                }
                else {
                    this.model = value;
                }
            };
        /**
         * @param {?} value
         * @return {?}
         */
        FormComponent.prototype.onValueChanges = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
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
            };
        FormComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-form',
                        template: "\n    <form>\n      <sf-form-element\n        *ngIf=\"rootProperty\" [formProperty]=\"rootProperty\"></sf-form-element>\n    </form>",
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
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: FormComponent,
                                multi: true
                            }
                        ]
                    },] },
        ];
        /** @nocollapse */
        FormComponent.ctorParameters = function () {
            return [
                { type: FormPropertyFactory, },
                { type: ActionRegistry, },
                { type: ValidatorRegistry, },
                { type: BindingRegistry, },
                { type: core.ChangeDetectorRef, },
                { type: TerminatorService, },
            ];
        };
        FormComponent.propDecorators = {
            "schema": [{ type: core.Input },],
            "model": [{ type: core.Input },],
            "actions": [{ type: core.Input },],
            "validators": [{ type: core.Input },],
            "bindings": [{ type: core.Input },],
            "onChange": [{ type: core.Output },],
            "modelChange": [{ type: core.Output },],
            "isValid": [{ type: core.Output },],
            "onErrorChange": [{ type: core.Output },],
            "onErrorsChange": [{ type: core.Output },],
        };
        return FormComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FormElementComponent = (function () {
        function FormElementComponent(actionRegistry, bindingRegistry, renderer, elementRef) {
            this.actionRegistry = actionRegistry;
            this.bindingRegistry = bindingRegistry;
            this.renderer = renderer;
            this.elementRef = elementRef;
            this.control = new forms.FormControl('', function () { return null; });
            this.widget = null;
            this.buttons = [];
            this.unlisten = [];
        }
        /**
         * @return {?}
         */
        FormElementComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.parseButtons();
                this.setupBindings();
            };
        /**
         * @return {?}
         */
        FormElementComponent.prototype.setupBindings = /**
         * @return {?}
         */
            function () {
                var _this = this;
                var /** @type {?} */ bindings = this.bindingRegistry.get(this.formProperty.path);
                if ((bindings || []).length) {
                    bindings.forEach(function (binding) {
                        for (var /** @type {?} */ eventId in binding) {
                            _this.createBinding(eventId, binding[eventId]);
                        }
                    });
                }
            };
        /**
         * @param {?} eventId
         * @param {?} listener
         * @return {?}
         */
        FormElementComponent.prototype.createBinding = /**
         * @param {?} eventId
         * @param {?} listener
         * @return {?}
         */
            function (eventId, listener) {
                var _this = this;
                this.unlisten.push(this.renderer.listen(this.elementRef.nativeElement, eventId, function (event) {
                    if (listener instanceof Function) {
                        listener(event, _this.formProperty);
                    }
                    else {
                        console.warn('Calling non function handler for eventId ' + eventId + ' for path ' + _this.formProperty.path);
                    }
                }));
            };
        /**
         * @return {?}
         */
        FormElementComponent.prototype.parseButtons = /**
         * @return {?}
         */
            function () {
                if (this.formProperty.schema.buttons !== undefined) {
                    this.buttons = this.formProperty.schema.buttons;
                    try {
                        for (var _a = __values(this.buttons), _b = _a.next(); !_b.done; _b = _a.next()) {
                            var button = _b.value;
                            this.createButtonCallback(button);
                        }
                    }
                    catch (e_1_1) {
                        e_1 = { error: e_1_1 };
                    }
                    finally {
                        try {
                            if (_b && !_b.done && (_c = _a.return))
                                _c.call(_a);
                        }
                        finally {
                            if (e_1)
                                throw e_1.error;
                        }
                    }
                }
                var e_1, _c;
            };
        /**
         * @param {?} button
         * @return {?}
         */
        FormElementComponent.prototype.createButtonCallback = /**
         * @param {?} button
         * @return {?}
         */
            function (button) {
                var _this = this;
                button.action = function (e) {
                    var /** @type {?} */ action;
                    if (button.id && (action = _this.actionRegistry.get(button.id))) {
                        if (action) {
                            action(_this.formProperty, button.parameters);
                        }
                    }
                    e.preventDefault();
                };
            };
        /**
         * @param {?} widget
         * @return {?}
         */
        FormElementComponent.prototype.onWidgetInstanciated = /**
         * @param {?} widget
         * @return {?}
         */
            function (widget) {
                this.widget = widget;
                var /** @type {?} */ id = 'field' + (FormElementComponent.counter++);
                this.widget.formProperty = this.formProperty;
                this.widget.schema = this.formProperty.schema;
                this.widget.name = id;
                this.widget.id = id;
                this.widget.control = this.control;
            };
        /**
         * @return {?}
         */
        FormElementComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.unlisten) {
                    this.unlisten.forEach(function (item) {
                        item();
                    });
                }
            };
        FormElementComponent.counter = 0;
        FormElementComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-form-element',
                        template: "\n    <div *ngIf=\"formProperty.visible\"\n         [class.has-error]=\"!control.valid\"\n         [class.has-success]=\"control.valid\">\n      <sf-widget-chooser\n        (widgetInstanciated)=\"onWidgetInstanciated($event)\"\n        [widgetInfo]=\"formProperty.schema.widget\">\n      </sf-widget-chooser>\n      <sf-form-element-action *ngFor=\"let button of buttons\" [button]=\"button\" [formProperty]=\"formProperty\"></sf-form-element-action>\n    </div>"
                    },] },
        ];
        /** @nocollapse */
        FormElementComponent.ctorParameters = function () {
            return [
                { type: ActionRegistry, },
                { type: BindingRegistry, },
                { type: core.Renderer2, },
                { type: core.ElementRef, },
            ];
        };
        FormElementComponent.propDecorators = {
            "formProperty": [{ type: core.Input },],
        };
        return FormElementComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FormElementComponentAction = (function () {
        function FormElementComponentAction(widgetFactory, terminator) {
            if (widgetFactory === void 0) {
                widgetFactory = null;
            }
            this.widgetFactory = widgetFactory;
            this.terminator = terminator;
        }
        /**
         * @return {?}
         */
        FormElementComponentAction.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.subs = this.terminator.onDestroy.subscribe(function (destroy) {
                    if (destroy) {
                        _this.ref.destroy();
                    }
                });
            };
        /**
         * @return {?}
         */
        FormElementComponentAction.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                this.ref = this.widgetFactory.createWidget(this.container, this.button.widget || 'button');
                this.ref.instance.button = this.button;
                this.ref.instance.formProperty = this.formProperty;
            };
        /**
         * @return {?}
         */
        FormElementComponentAction.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.subs.unsubscribe();
            };
        FormElementComponentAction.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-form-element-action',
                        template: '<ng-template #target></ng-template>'
                    },] },
        ];
        /** @nocollapse */
        FormElementComponentAction.ctorParameters = function () {
            return [
                { type: WidgetFactory, },
                { type: TerminatorService, },
            ];
        };
        FormElementComponentAction.propDecorators = {
            "button": [{ type: core.Input },],
            "formProperty": [{ type: core.Input },],
            "container": [{ type: core.ViewChild, args: ['target', { read: core.ViewContainerRef },] },],
        };
        return FormElementComponentAction;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var WidgetChooserComponent = (function () {
        function WidgetChooserComponent(widgetFactory, cdr, terminator) {
            if (widgetFactory === void 0) {
                widgetFactory = null;
            }
            this.widgetFactory = widgetFactory;
            this.cdr = cdr;
            this.terminator = terminator;
            this.widgetInstanciated = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        WidgetChooserComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.subs = this.terminator.onDestroy.subscribe(function (destroy) {
                    if (destroy) {
                        _this.ref.destroy();
                    }
                });
            };
        /**
         * @return {?}
         */
        WidgetChooserComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                this.ref = this.widgetFactory.createWidget(this.container, this.widgetInfo.id);
                this.widgetInstanciated.emit(this.ref.instance);
                this.widgetInstance = this.ref.instance;
                this.cdr.detectChanges();
            };
        /**
         * @return {?}
         */
        WidgetChooserComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.subs.unsubscribe();
            };
        WidgetChooserComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-widget-chooser',
                        template: "<div #target></div>",
                    },] },
        ];
        /** @nocollapse */
        WidgetChooserComponent.ctorParameters = function () {
            return [
                { type: WidgetFactory, },
                { type: core.ChangeDetectorRef, },
                { type: TerminatorService, },
            ];
        };
        WidgetChooserComponent.propDecorators = {
            "widgetInfo": [{ type: core.Input },],
            "widgetInstanciated": [{ type: core.Output },],
            "container": [{ type: core.ViewChild, args: ['target', { read: core.ViewContainerRef },] },],
        };
        return WidgetChooserComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // unsupported: template constraints.
    /**
     * @abstract
     * @template T
     */
    var  
    // unsupported: template constraints.
    /**
     * @abstract
     * @template T
     */
    Widget = (function () {
        function Widget() {
            this.id = '';
            this.name = '';
            this.schema = {};
        }
        return Widget;
    }());
    var ControlWidget = (function (_super) {
        __extends(ControlWidget, _super);
        function ControlWidget() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        ControlWidget.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                var /** @type {?} */ control = this.control;
                this.formProperty.valueChanges.subscribe(function (newValue) {
                    if (control.value !== newValue) {
                        control.setValue(newValue, { emitEvent: false });
                    }
                });
                this.formProperty.errorsChanges.subscribe(function (errors) {
                    control.setErrors(errors, { emitEvent: true });
                    var /** @type {?} */ messages = (errors || [])
                        .filter(function (e) {
                        return e.path && e.path.slice(1) === _this.formProperty.path;
                    })
                        .map(function (e) { return e.message; });
                    _this.errorMessages = messages.filter(function (m, i) { return messages.indexOf(m) === i; });
                });
                control.valueChanges.subscribe(function (newValue) {
                    _this.formProperty.setValue(newValue, false);
                });
            };
        return ControlWidget;
    }(Widget));
    var ArrayLayoutWidget = (function (_super) {
        __extends(ArrayLayoutWidget, _super);
        function ArrayLayoutWidget() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        ArrayLayoutWidget.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ control = this.control;
                this.formProperty.errorsChanges.subscribe(function (errors) {
                    control.setErrors(errors, { emitEvent: true });
                });
            };
        return ArrayLayoutWidget;
    }(Widget));
    var ObjectLayoutWidget = (function (_super) {
        __extends(ObjectLayoutWidget, _super);
        function ObjectLayoutWidget() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        ObjectLayoutWidget.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ control = this.control;
                this.formProperty.errorsChanges.subscribe(function (errors) {
                    control.setErrors(errors, { emitEvent: true });
                });
            };
        return ObjectLayoutWidget;
    }(Widget));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ArrayWidget = (function (_super) {
        __extends(ArrayWidget, _super);
        function ArrayWidget() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        ArrayWidget.prototype.addItem = /**
         * @return {?}
         */
            function () {
                this.formProperty.addItem();
            };
        /**
         * @param {?} index
         * @return {?}
         */
        ArrayWidget.prototype.removeItem = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                this.formProperty.removeItem(index);
            };
        /**
         * @param {?} index
         * @param {?} item
         * @return {?}
         */
        ArrayWidget.prototype.trackByIndex = /**
         * @param {?} index
         * @param {?} item
         * @return {?}
         */
            function (index, item) {
                return index;
            };
        ArrayWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-array-widget',
                        template: "<div class=\"widget form-group\">\n\t<label [attr.for]=\"id\" class=\"horizontal control-label\">\n\t\t{{ schema.title }}\n\t</label>\n\t<span *ngIf=\"schema.description\" class=\"formHelp\">{{schema.description}}</span>\n\t<div *ngFor=\"let itemProperty of formProperty.properties; let i=index; trackBy:trackByIndex\">\n\t\t<sf-form-element [formProperty]=\"itemProperty\"></sf-form-element>\n\t\t<button (click)=\"removeItem(i)\" class=\"btn btn-default array-remove-button\">\n\t\t\t<span class=\"glyphicon glyphicon-minus\" aria-hidden=\"true\"></span> Remove\n\t\t</button>\n\t</div>\n\t<button (click)=\"addItem()\" class=\"btn btn-default array-add-button\">\n\t\t<span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span> Add\n\t</button>\n</div>"
                    },] },
        ];
        return ArrayWidget;
    }(ArrayLayoutWidget));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ButtonWidget = (function () {
        function ButtonWidget() {
        }
        ButtonWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-button-widget',
                        template: '<button (click)="button.action($event)">{{button.label}}</button>'
                    },] },
        ];
        return ButtonWidget;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ObjectWidget = (function (_super) {
        __extends(ObjectWidget, _super);
        function ObjectWidget() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ObjectWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-form-object',
                        template: "<fieldset *ngFor=\"let fieldset of formProperty.schema.fieldsets\">\n\t<legend *ngIf=\"fieldset.title\">{{fieldset.title}}</legend>\n\t<div *ngIf=\"fieldset.description\">{{fieldset.description}}</div>\n\t<div *ngFor=\"let fieldId of fieldset.fields\">\n\t\t<sf-form-element [formProperty]=\"formProperty.getProperty(fieldId)\"></sf-form-element>\n\t</div>\n</fieldset>"
                    },] },
        ];
        return ObjectWidget;
    }(ObjectLayoutWidget));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var CheckboxWidget = (function (_super) {
        __extends(CheckboxWidget, _super);
        function CheckboxWidget() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.checked = {};
            return _this;
        }
        /**
         * @return {?}
         */
        CheckboxWidget.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                var /** @type {?} */ control = this.control;
                this.formProperty.valueChanges.subscribe(function (newValue) {
                    if (control.value !== newValue) {
                        control.setValue(newValue, { emitEvent: false });
                        if (newValue && Array.isArray(newValue)) {
                            newValue.map(function (v) { return _this.checked[v] = true; });
                        }
                    }
                });
                this.formProperty.errorsChanges.subscribe(function (errors) {
                    control.setErrors(errors, { emitEvent: true });
                });
                control.valueChanges.subscribe(function (newValue) {
                    _this.formProperty.setValue(newValue, false);
                });
            };
        /**
         * @param {?} el
         * @return {?}
         */
        CheckboxWidget.prototype.onCheck = /**
         * @param {?} el
         * @return {?}
         */
            function (el) {
                if (el.checked) {
                    this.checked[el.value] = true;
                }
                else {
                    delete this.checked[el.value];
                }
                this.formProperty.setValue(Object.keys(this.checked), false);
            };
        CheckboxWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-checkbox-widget',
                        template: "<div class=\"widget form-group\">\n    <label [attr.for]=\"id\" class=\"horizontal control-label\">\n        {{ schema.title }}\n    </label>\n\t<div *ngIf=\"schema.type!='array'\" class=\"checkbox\">\n\t\t<label class=\"horizontal control-label\">\n\t\t\t<input [formControl]=\"control\" [attr.name]=\"name\" [indeterminate]=\"control.value !== false && control.value !== true ? true :null\" type=\"checkbox\" [attr.disabled]=\"schema.readOnly\">\n\t\t\t<input *ngIf=\"schema.readOnly\" [attr.name]=\"name\" type=\"hidden\" [formControl]=\"control\">\n\t\t\t{{schema.description}}\n\t\t</label>\n\t</div>\n\t<ng-container *ngIf=\"schema.type==='array'\">\n\t\t<div *ngFor=\"let option of schema.items.oneOf\" class=\"checkbox\">\n\t\t\t<label class=\"horizontal control-label\">\n\t\t\t\t<input [attr.name]=\"name\"\n\t\t\t\t\tvalue=\"{{option.enum[0]}}\" type=\"checkbox\" \n\t\t\t\t\t[attr.disabled]=\"schema.readOnly\"\n\t\t\t\t\t(change)=\"onCheck($event.target)\"\n\t\t\t\t\t[attr.checked]=\"checked[option.enum[0]] ? true : null\">\n\t\t\t\t{{option.description}}\n\t\t\t</label>\n\t\t</div>\n\t</ng-container>\n</div>"
                    },] },
        ];
        return CheckboxWidget;
    }(ControlWidget));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FileWidget = (function (_super) {
        __extends(FileWidget, _super);
        function FileWidget() {
            var _this = _super.call(this) || this;
            _this.reader = new FileReader();
            _this.filedata = {};
            return _this;
        }
        /**
         * @return {?}
         */
        FileWidget.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // OVERRIDE ControlWidget ngAfterViewInit() as ReactiveForms do not handle
                // file inputs
                var /** @type {?} */ control = this.control;
                this.formProperty.errorsChanges.subscribe(function (errors) {
                    control.setErrors(errors, { emitEvent: true });
                });
                this.reader.onloadend = function () {
                    _this.filedata.data = btoa(_this.reader.result);
                    _this.formProperty.setValue(_this.filedata, false);
                };
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        FileWidget.prototype.onFileChange = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                var /** @type {?} */ file = $event.target.files[0];
                this.filedata.filename = file.name;
                this.filedata.size = file.size;
                this.filedata['content-type'] = file.type;
                this.filedata.encoding = 'base64';
                this.reader.readAsBinaryString(file);
            };
        FileWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-file-widget',
                        template: "<div class=\"widget form-group\">\n\t<label [attr.for]=\"id\" class=\"horizontal control-label\">\n\t\t{{ schema.title }}\n\t</label>\n    <span *ngIf=\"schema.description\" class=\"formHelp\">{{schema.description}}</span>\n  <input [name]=\"name\" class=\"text-widget file-widget\" [attr.id]=\"id\"\n    [formControl]=\"control\" type=\"file\" [attr.disabled]=\"schema.readOnly?true:null\"\n    (change)=\"onFileChange($event)\">\n\t<input *ngIf=\"schema.readOnly\" [attr.name]=\"name\" type=\"hidden\" [formControl]=\"control\">\n</div>"
                    },] },
        ];
        /** @nocollapse */
        FileWidget.ctorParameters = function () { return []; };
        return FileWidget;
    }(ControlWidget));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var IntegerWidget = (function (_super) {
        __extends(IntegerWidget, _super);
        function IntegerWidget() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        IntegerWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-integer-widget',
                        template: "<div class=\"widget form-group\">\n\t<label [attr.for]=\"id\" class=\"horizontal control-label\">\n\t\t{{ schema.title }}\n\t</label>\n  <span *ngIf=\"schema.description\" class=\"formHelp\">{{schema.description}}</span>\n\t<input [attr.readonly]=\"schema.readOnly?true:null\" [name]=\"name\"\n\tclass=\"text-widget integer-widget form-control\" [formControl]=\"control\"\n\t[attr.type]=\"'number'\" [attr.min]=\"schema.minimum\" [attr.max]=\"schema.maximum\"\n\t[attr.placeholder]=\"schema.placeholder\"\n\t[attr.maxLength]=\"schema.maxLength || null\"\n  [attr.minLength]=\"schema.minLength || null\">\n</div>"
                    },] },
        ];
        return IntegerWidget;
    }(ControlWidget));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TextAreaWidget = (function (_super) {
        __extends(TextAreaWidget, _super);
        function TextAreaWidget() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TextAreaWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-textarea-widget',
                        template: "<div class=\"widget form-group\">\n\t<label [attr.for]=\"id\" class=\"horizontal control-label\">\n\t\t{{ schema.title }}\n\t</label>\n    <span *ngIf=\"schema.description\" class=\"formHelp\">{{schema.description}}</span>\n\t<textarea [attr.readonly]=\"schema.readOnly\" [name]=\"name\"\n\t\tclass=\"text-widget textarea-widget form-control\"\n\t\t[attr.placeholder]=\"schema.placeholder\"\n\t\t[attr.maxLength]=\"schema.maxLength || null\"\n    [attr.minLength]=\"schema.minLength || null\"\n\t\t[formControl]=\"control\"></textarea>\n</div>"
                    },] },
        ];
        return TextAreaWidget;
    }(ControlWidget));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var RadioWidget = (function (_super) {
        __extends(RadioWidget, _super);
        function RadioWidget() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RadioWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-radio-widget',
                        template: "<div class=\"widget form-group\">\n\t<label>{{schema.title}}</label>\n    <span *ngIf=\"schema.description\" class=\"formHelp\">{{schema.description}}</span>\n\t<div *ngFor=\"let option of schema.oneOf\" class=\"radio\">\n\t\t<label class=\"horizontal control-label\">\n\t\t\t<input [formControl]=\"control\" [attr.name]=\"name\" value=\"{{option.enum[0]}}\" type=\"radio\"  [attr.disabled]=\"schema.readOnly\">\n\t\t\t{{option.description}}\n\t\t</label>\n\t</div>\n\t<input *ngIf=\"schema.readOnly\" [attr.name]=\"name\" type=\"hidden\" [formControl]=\"control\">\n</div>"
                    },] },
        ];
        return RadioWidget;
    }(ControlWidget));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var RangeWidget = (function (_super) {
        __extends(RangeWidget, _super);
        function RangeWidget() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RangeWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-range-widget',
                        template: "<div class=\"widget form-group\">\n\t<label [attr.for]=\"id\" class=\"horizontal control-label\">\n\t\t{{ schema.title }}\n\t</label>\n    <span *ngIf=\"schema.description\" class=\"formHelp\">{{schema.description}}</span>\t\n\t<input [name]=\"name\" class=\"text-widget range-widget\" [attr.id]=\"id\"\n\t[formControl]=\"control\" [attr.type]=\"'range'\" [attr.min]=\"schema.minimum\" [attr.max]=\"schema.maximum\" [attr.disabled]=\"schema.readOnly?true:null\" >\n\t<input *ngIf=\"schema.readOnly\" [attr.name]=\"name\" type=\"hidden\">\n</div>"
                    },] },
        ];
        return RangeWidget;
    }(ControlWidget));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SelectWidget = (function (_super) {
        __extends(SelectWidget, _super);
        function SelectWidget() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SelectWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-select-widget',
                        template: "<div class=\"widget form-group\">\n\t<label [attr.for]=\"id\" class=\"horizontal control-label\">\n\t\t{{ schema.title }}\n\t</label>\n\n\t<span *ngIf=\"schema.description\" class=\"formHelp\">\n\t\t{{schema.description}}\n\t</span>\n\n\t<select *ngIf=\"schema.type!='array'\" [formControl]=\"control\" [attr.name]=\"name\" [attr.disabled]=\"schema.readOnly\" class=\"form-control\">\n\t\t<option *ngFor=\"let option of schema.oneOf\" [ngValue]=\"option.enum[0]\" >{{option.description}}</option>\n\t</select>\n\n\t<select *ngIf=\"schema.type==='array'\" multiple [formControl]=\"control\" [attr.name]=\"name\" [attr.disabled]=\"schema.readOnly\" class=\"form-control\">\n\t\t<option *ngFor=\"let option of schema.items.oneOf\" [ngValue]=\"option.enum[0]\" >{{option.description}}</option>\n\t</select>\n\n\t<input *ngIf=\"schema.readOnly\" [attr.name]=\"name\" type=\"hidden\" [formControl]=\"control\">\n</div>"
                    },] },
        ];
        return SelectWidget;
    }(ControlWidget));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var StringWidget = (function (_super) {
        __extends(StringWidget, _super);
        function StringWidget() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        StringWidget.prototype.getInputType = /**
         * @return {?}
         */
            function () {
                if (!this.schema.widget.id || this.schema.widget.id === 'string') {
                    return 'text';
                }
                else {
                    return this.schema.widget.id;
                }
            };
        StringWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-string-widget',
                        template: "<input *ngIf=\"this.getInputType()==='hidden'; else notHiddenFieldBlock\"\n  [attr.name]=\"name\" type=\"hidden\" [formControl]=\"control\">\n<ng-template #notHiddenFieldBlock>\n<div class=\"widget form-group\">\n    <label [attr.for]=\"id\" class=\"horizontal control-label\">\n    \t{{ schema.title }}\n    </label>\n    <span *ngIf=\"schema.description\" class=\"formHelp\">{{schema.description}}</span>\n    <input [name]=\"name\" [attr.readonly]=\"(schema.widget.id!=='color') && schema.readOnly?true:null\"\n    class=\"text-widget.id textline-widget form-control\" [attr.type]=\"this.getInputType()\"\n    [attr.id]=\"id\"  [formControl]=\"control\" [attr.placeholder]=\"schema.placeholder\"\n    [attr.maxLength]=\"schema.maxLength || null\"\n    [attr.minLength]=\"schema.minLength || null\"\n    [attr.disabled]=\"(schema.widget.id=='color' && schema.readOnly)?true:null\">\n    <input *ngIf=\"(schema.widget.id==='color' && schema.readOnly)\" [attr.name]=\"name\" type=\"hidden\" [formControl]=\"control\">\n</div>\n</ng-template>"
                    },] },
        ];
        return StringWidget;
    }(ControlWidget));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DefaultWidgetRegistry = (function (_super) {
        __extends(DefaultWidgetRegistry, _super);
        function DefaultWidgetRegistry() {
            var _this = _super.call(this) || this;
            _this.register('array', ArrayWidget);
            _this.register('object', ObjectWidget);
            _this.register('string', StringWidget);
            _this.register('search', StringWidget);
            _this.register('tel', StringWidget);
            _this.register('url', StringWidget);
            _this.register('email', StringWidget);
            _this.register('password', StringWidget);
            _this.register('color', StringWidget);
            _this.register('date', StringWidget);
            _this.register('date-time', StringWidget);
            _this.register('time', StringWidget);
            _this.register('integer', IntegerWidget);
            _this.register('number', IntegerWidget);
            _this.register('range', RangeWidget);
            _this.register('textarea', TextAreaWidget);
            _this.register('file', FileWidget);
            _this.register('select', SelectWidget);
            _this.register('radio', RadioWidget);
            _this.register('boolean', CheckboxWidget);
            _this.register('checkbox', CheckboxWidget);
            _this.register('button', ButtonWidget);
            _this.setDefaultWidget(StringWidget);
            return _this;
        }
        return DefaultWidgetRegistry;
    }(WidgetRegistry));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DefaultWidget = (function () {
        function DefaultWidget() {
        }
        DefaultWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-default-field',
                        template: "<p>Unknow type</p>"
                    },] },
        ];
        return DefaultWidget;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ moduleProviders = [
        {
            provide: WidgetRegistry,
            useClass: DefaultWidgetRegistry
        },
        {
            provide: SchemaValidatorFactory,
            useClass: ZSchemaValidatorFactory
        }
    ];
    var SchemaFormModule = (function () {
        function SchemaFormModule() {
        }
        /**
         * @return {?}
         */
        SchemaFormModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: SchemaFormModule,
                    providers: __spread(moduleProviders)
                };
            };
        SchemaFormModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, forms.FormsModule, forms.ReactiveFormsModule],
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
        return SchemaFormModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TemplateSchemaService = (function () {
        function TemplateSchemaService() {
            this.changes = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        TemplateSchemaService.prototype.changed = /**
         * @return {?}
         */
            function () {
                this.changes.emit();
            };
        return TemplateSchemaService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TemplateSchemaElement = (function () {
        function TemplateSchemaElement() {
        }
        /**
         * @param {?} elementRef
         * @return {?}
         */
        TemplateSchemaElement.prototype.getTextContent = /**
         * @param {?} elementRef
         * @return {?}
         */
            function (elementRef) {
                var /** @type {?} */ nodes = Array.from(elementRef.nativeElement.childNodes);
                var /** @type {?} */ node = (nodes.filter(function (el) {
                    return el.nodeType === el.TEXT_NODE;
                }).pop());
                if (!node || !node.nodeValue) {
                    return '';
                }
                return node.nodeValue.trim();
            };
        return TemplateSchemaElement;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ButtonComponent = (function (_super) {
        __extends(ButtonComponent, _super);
        function ButtonComponent(elementRef) {
            var _this = _super.call(this) || this;
            _this.elementRef = elementRef;
            _this.label = '';
            _this.click = new core.EventEmitter();
            return _this;
        }
        /**
         * @return {?}
         */
        ButtonComponent.prototype.setLabelFromContent = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ textContent = this.getTextContent(this.elementRef);
                // label as @Input takes priority over content text
                if (textContent && !this.label) {
                    this.label = textContent;
                }
            };
        /**
         * @return {?}
         */
        ButtonComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                this.setLabelFromContent();
            };
        ButtonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-button',
                        template: "<ng-content></ng-content>\n",
                        providers: [
                            {
                                provide: TemplateSchemaElement,
                                useExisting: core.forwardRef(function () { return ButtonComponent; }),
                            }
                        ]
                    },] },
        ];
        /** @nocollapse */
        ButtonComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
            ];
        };
        ButtonComponent.propDecorators = {
            "id": [{ type: core.Input },],
            "label": [{ type: core.Input },],
            "widget": [{ type: core.Input },],
            "click": [{ type: core.Output },],
        };
        return ButtonComponent;
    }(TemplateSchemaElement));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /** @enum {string} */
    var FieldType = {
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
    var /**
     * @abstract
     */ FieldParent = (function (_super) {
        __extends(FieldParent, _super);
        function FieldParent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = '';
            return _this;
        }
        Object.defineProperty(FieldParent.prototype, "path", {
            get: /**
             * @return {?}
             */ function () {
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
                    var /** @type {?} */ _button = ({
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
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ItemComponent = (function (_super) {
        __extends(ItemComponent, _super);
        function ItemComponent(elementRef) {
            var _this = _super.call(this) || this;
            _this.elementRef = elementRef;
            return _this;
        }
        /**
         * @return {?}
         */
        ItemComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.description = this.getTextContent(this.elementRef);
            };
        ItemComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-item',
                        template: "<ng-content></ng-content>\n"
                    },] },
        ];
        /** @nocollapse */
        ItemComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
            ];
        };
        ItemComponent.propDecorators = {
            "value": [{ type: core.Input },],
        };
        return ItemComponent;
    }(TemplateSchemaElement));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FieldComponent = (function (_super) {
        __extends(FieldComponent, _super);
        function FieldComponent(elementRef, templateSchemaService, actionRegistry) {
            var _this = _super.call(this) || this;
            _this.elementRef = elementRef;
            _this.templateSchemaService = templateSchemaService;
            _this.actionRegistry = actionRegistry;
            _this.type = FieldType.String;
            _this.schema = {};
            return _this;
        }
        /**
         * @return {?}
         */
        FieldComponent.prototype.getSchema = /**
         * @return {?}
         */
            function () {
                var _this = this;
                var _a = this.getFieldsSchema(this.childFields.filter(function (field) { return field !== _this; })), properties = _a.properties, items = _a.items, required = _a.required;
                var /** @type {?} */ oneOf = this.getOneOf();
                var /** @type {?} */ schema = ({
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
                var /** @type {?} */ buttons = this.getButtons();
                if (buttons.length > 0) {
                    schema.buttons = buttons;
                }
                // @Input schema takes precedence
                return Object.assign(schema, this.schema);
            };
        /**
         * @return {?}
         */
        FieldComponent.prototype.getValidators = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // registering validator here is not possible since prop full path is needed
                var /** @type {?} */ childValidators = this.getFieldsValidators(this.childFields.filter(function (field) { return field !== _this; }));
                var /** @type {?} */ validators = childValidators.map(function (_a) {
                    var path = _a.path, validator = _a.validator;
                    return {
                        path: _this.path + path,
                        validator: validator
                    };
                });
                if (!this.validator) {
                    return validators;
                }
                validators.push({ path: this.path, validator: this.validator });
                return validators;
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        FieldComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                var /** @type {?} */ keys = Object.keys(changes);
                if (keys.length > 0) {
                    try {
                        for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                            var key = keys_1_1.value;
                            if (!changes[key].isFirstChange()) {
                                // on any input change, force schema change generation
                                this.templateSchemaService.changed();
                                break;
                            }
                        }
                    }
                    catch (e_1_1) {
                        e_1 = { error: e_1_1 };
                    }
                    finally {
                        try {
                            if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return))
                                _a.call(keys_1);
                        }
                        finally {
                            if (e_1)
                                throw e_1.error;
                        }
                    }
                }
                var e_1, _a;
            };
        /**
         * @return {?}
         */
        FieldComponent.prototype.getOneOf = /**
         * @return {?}
         */
            function () {
                if (this.childItems.length === 0) {
                    return;
                }
                var /** @type {?} */ items = this.childItems.map(function (_a) {
                    var value = _a.value, description = _a.description;
                    if (!Array.isArray(value)) {
                        return { enum: [value], description: description };
                    }
                    return { enum: value, description: description };
                });
                if (items.length === 0) {
                    return;
                }
                return items;
            };
        /**
         * @return {?}
         */
        FieldComponent.prototype.setTitleFromContent = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ textContent = this.getTextContent(this.elementRef);
                //  title as @Input takes priority over content text
                if (textContent && !this.title) {
                    this.title = textContent;
                }
            };
        /**
         * @return {?}
         */
        FieldComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // cache it
                this.setTitleFromContent();
                rxjs.merge(this.childFields.changes, this.childItems.changes, this.childButtons.changes)
                    .subscribe(function () { return _this.templateSchemaService.changed(); });
            };
        FieldComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-field',
                        template: "<ng-content ></ng-content>\n"
                    },] },
        ];
        /** @nocollapse */
        FieldComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: TemplateSchemaService, },
                { type: ActionRegistry, },
            ];
        };
        FieldComponent.propDecorators = {
            "childFields": [{ type: core.ContentChildren, args: [FieldComponent,] },],
            "childItems": [{ type: core.ContentChildren, args: [ItemComponent,] },],
            "childButtons": [{ type: core.ContentChildren, args: [ButtonComponent,] },],
            "name": [{ type: core.Input },],
            "type": [{ type: core.Input },],
            "format": [{ type: core.Input },],
            "required": [{ type: core.Input },],
            "readOnly": [{ type: core.Input },],
            "title": [{ type: core.Input },],
            "description": [{ type: core.Input },],
            "placeholder": [{ type: core.Input },],
            "widget": [{ type: core.Input },],
            "validator": [{ type: core.Input },],
            "schema": [{ type: core.Input },],
        };
        return FieldComponent;
    }(FieldParent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TemplateSchemaDirective = (function (_super) {
        __extends(TemplateSchemaDirective, _super);
        function TemplateSchemaDirective(actionRegistry, validatorRegistry, formComponent, terminatorService, templateSchemaService) {
            var _this = _super.call(this) || this;
            _this.actionRegistry = actionRegistry;
            _this.validatorRegistry = validatorRegistry;
            _this.formComponent = formComponent;
            _this.terminatorService = terminatorService;
            _this.templateSchemaService = templateSchemaService;
            return _this;
        }
        /**
         * @param {?} fields
         * @return {?}
         */
        TemplateSchemaDirective.prototype.setFormDocumentSchema = /**
         * @param {?} fields
         * @return {?}
         */
            function (fields) {
                var _this = this;
                this.actionRegistry.clear();
                this.validatorRegistry.clear();
                var /** @type {?} */ schema = this.getFieldsSchema(fields);
                var /** @type {?} */ validators = this.getFieldsValidators(fields);
                validators.forEach(function (_a) {
                    var path = _a.path, validator = _a.validator;
                    _this.validatorRegistry.register(path, validator);
                });
                var /** @type {?} */ previousSchema = this.formComponent.schema;
                this.formComponent.schema = {
                    type: FieldType.Object,
                    properties: schema.properties
                };
                if (schema.required && schema.required.length > 0) {
                    this.formComponent.schema.requred = schema.required;
                }
                var /** @type {?} */ buttons = this.getButtons();
                if (buttons.length > 0) {
                    this.formComponent.schema.buttons = buttons;
                }
                this.formComponent.ngOnChanges({
                    schema: new core.SimpleChange(previousSchema, this.formComponent.schema, Boolean(previousSchema))
                });
            };
        /**
         * @return {?}
         */
        TemplateSchemaDirective.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.childFields.length > 0) {
                    this.setFormDocumentSchema(this.childFields.toArray());
                }
                rxjs.merge(this.childFields.changes, this.templateSchemaService.changes)
                    .subscribe(function () {
                    _this.terminatorService.destroy();
                    _this.setFormDocumentSchema(_this.childFields.toArray());
                });
            };
        TemplateSchemaDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: 'sf-form[templateSchema]',
                        providers: [
                            TemplateSchemaService
                        ]
                    },] },
        ];
        /** @nocollapse */
        TemplateSchemaDirective.ctorParameters = function () {
            return [
                { type: ActionRegistry, },
                { type: ValidatorRegistry, },
                { type: FormComponent, },
                { type: TerminatorService, },
                { type: TemplateSchemaService, },
            ];
        };
        TemplateSchemaDirective.propDecorators = {
            "childFields": [{ type: core.ContentChildren, args: [FieldComponent,] },],
            "childButtons": [{ type: core.ContentChildren, args: [ButtonComponent,] },],
        };
        return TemplateSchemaDirective;
    }(FieldParent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TemplateSchemaModule = (function () {
        function TemplateSchemaModule() {
        }
        TemplateSchemaModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
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
        return TemplateSchemaModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.FormComponent = FormComponent;
    exports.FormElementComponent = FormElementComponent;
    exports.FormElementComponentAction = FormElementComponentAction;
    exports.WidgetChooserComponent = WidgetChooserComponent;
    exports.WidgetRegistry = WidgetRegistry;
    exports.ValidatorRegistry = ValidatorRegistry;
    exports.ActionRegistry = ActionRegistry;
    exports.BindingRegistry = BindingRegistry;
    exports.SchemaValidatorFactory = SchemaValidatorFactory;
    exports.ZSchemaValidatorFactory = ZSchemaValidatorFactory;
    exports.Widget = Widget;
    exports.ControlWidget = ControlWidget;
    exports.ArrayLayoutWidget = ArrayLayoutWidget;
    exports.ObjectLayoutWidget = ObjectLayoutWidget;
    exports.ArrayWidget = ArrayWidget;
    exports.ButtonWidget = ButtonWidget;
    exports.ObjectWidget = ObjectWidget;
    exports.CheckboxWidget = CheckboxWidget;
    exports.FileWidget = FileWidget;
    exports.IntegerWidget = IntegerWidget;
    exports.TextAreaWidget = TextAreaWidget;
    exports.RadioWidget = RadioWidget;
    exports.RangeWidget = RangeWidget;
    exports.SelectWidget = SelectWidget;
    exports.StringWidget = StringWidget;
    exports.DefaultWidgetRegistry = DefaultWidgetRegistry;
    exports.SchemaFormModule = SchemaFormModule;
    exports.TemplateSchemaModule = TemplateSchemaModule;
    exports.ɵf = DefaultWidget;
    exports.ɵa = useFactory;
    exports.ɵd = FormPropertyFactory;
    exports.ɵb = SchemaPreprocessor;
    exports.ɵm = ButtonComponent;
    exports.ɵh = FieldParent;
    exports.ɵk = FieldComponent;
    exports.ɵl = ItemComponent;
    exports.ɵi = TemplateSchemaElement;
    exports.ɵg = TemplateSchemaDirective;
    exports.ɵj = TemplateSchemaService;
    exports.ɵe = TerminatorService;
    exports.ɵc = WidgetFactory;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNjaGVtYS1mb3JtLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LXNjaGVtYS1mb3JtL2xpYi9tb2RlbC9hY3Rpb25yZWdpc3RyeS50cyIsbnVsbCwibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vbGliL21vZGVsL2Zvcm1wcm9wZXJ0eS50cyIsIm5nOi8vbmd4LXNjaGVtYS1mb3JtL2xpYi9tb2RlbC9hdG9taWNwcm9wZXJ0eS50cyIsIm5nOi8vbmd4LXNjaGVtYS1mb3JtL2xpYi9tb2RlbC9udW1iZXJwcm9wZXJ0eS50cyIsIm5nOi8vbmd4LXNjaGVtYS1mb3JtL2xpYi9tb2RlbC9zdHJpbmdwcm9wZXJ0eS50cyIsIm5nOi8vbmd4LXNjaGVtYS1mb3JtL2xpYi9tb2RlbC9ib29sZWFucHJvcGVydHkudHMiLCJuZzovL25neC1zY2hlbWEtZm9ybS9saWIvbW9kZWwvb2JqZWN0cHJvcGVydHkudHMiLCJuZzovL25neC1zY2hlbWEtZm9ybS9saWIvbW9kZWwvYXJyYXlwcm9wZXJ0eS50cyIsIm5nOi8vbmd4LXNjaGVtYS1mb3JtL2xpYi9tb2RlbC9mb3JtcHJvcGVydHlmYWN0b3J5LnRzIiwibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vbGliL21vZGVsL3V0aWxzLnRzIiwibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vbGliL21vZGVsL3NjaGVtYXByZXByb2Nlc3Nvci50cyIsIm5nOi8vbmd4LXNjaGVtYS1mb3JtL2xpYi9tb2RlbC92YWxpZGF0b3JyZWdpc3RyeS50cyIsIm5nOi8vbmd4LXNjaGVtYS1mb3JtL2xpYi9tb2RlbC9iaW5kaW5ncmVnaXN0cnkudHMiLCJuZzovL25neC1zY2hlbWEtZm9ybS9saWIvc2NoZW1hdmFsaWRhdG9yZmFjdG9yeS50cyIsIm5nOi8vbmd4LXNjaGVtYS1mb3JtL2xpYi93aWRnZXRyZWdpc3RyeS50cyIsIm5nOi8vbmd4LXNjaGVtYS1mb3JtL2xpYi93aWRnZXRmYWN0b3J5LnRzIiwibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vbGliL3Rlcm1pbmF0b3Iuc2VydmljZS50cyIsIm5nOi8vbmd4LXNjaGVtYS1mb3JtL2xpYi9mb3JtLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LXNjaGVtYS1mb3JtL2xpYi9mb3JtZWxlbWVudC5jb21wb25lbnQudHMiLCJuZzovL25neC1zY2hlbWEtZm9ybS9saWIvZm9ybWVsZW1lbnQuYWN0aW9uLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LXNjaGVtYS1mb3JtL2xpYi93aWRnZXRjaG9vc2VyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LXNjaGVtYS1mb3JtL2xpYi93aWRnZXQudHMiLCJuZzovL25neC1zY2hlbWEtZm9ybS9saWIvZGVmYXVsdHdpZGdldHMvYXJyYXkvYXJyYXkud2lkZ2V0LnRzIiwibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vbGliL2RlZmF1bHR3aWRnZXRzL2J1dHRvbi9idXR0b24ud2lkZ2V0LnRzIiwibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vbGliL2RlZmF1bHR3aWRnZXRzL29iamVjdC9vYmplY3Qud2lkZ2V0LnRzIiwibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vbGliL2RlZmF1bHR3aWRnZXRzL2NoZWNrYm94L2NoZWNrYm94LndpZGdldC50cyIsIm5nOi8vbmd4LXNjaGVtYS1mb3JtL2xpYi9kZWZhdWx0d2lkZ2V0cy9maWxlL2ZpbGUud2lkZ2V0LnRzIiwibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vbGliL2RlZmF1bHR3aWRnZXRzL2ludGVnZXIvaW50ZWdlci53aWRnZXQudHMiLCJuZzovL25neC1zY2hlbWEtZm9ybS9saWIvZGVmYXVsdHdpZGdldHMvdGV4dGFyZWEvdGV4dGFyZWEud2lkZ2V0LnRzIiwibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vbGliL2RlZmF1bHR3aWRnZXRzL3JhZGlvL3JhZGlvLndpZGdldC50cyIsIm5nOi8vbmd4LXNjaGVtYS1mb3JtL2xpYi9kZWZhdWx0d2lkZ2V0cy9yYW5nZS9yYW5nZS53aWRnZXQudHMiLCJuZzovL25neC1zY2hlbWEtZm9ybS9saWIvZGVmYXVsdHdpZGdldHMvc2VsZWN0L3NlbGVjdC53aWRnZXQudHMiLCJuZzovL25neC1zY2hlbWEtZm9ybS9saWIvZGVmYXVsdHdpZGdldHMvc3RyaW5nL3N0cmluZy53aWRnZXQudHMiLCJuZzovL25neC1zY2hlbWEtZm9ybS9saWIvZGVmYXVsdHdpZGdldHMvZGVmYXVsdHdpZGdldHJlZ2lzdHJ5LnRzIiwibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vbGliL2RlZmF1bHQud2lkZ2V0LnRzIiwibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vbGliL3NjaGVtYS1mb3JtLm1vZHVsZS50cyIsIm5nOi8vbmd4LXNjaGVtYS1mb3JtL2xpYi90ZW1wbGF0ZS1zY2hlbWEvdGVtcGxhdGUtc2NoZW1hLnNlcnZpY2UudHMiLCJuZzovL25neC1zY2hlbWEtZm9ybS9saWIvdGVtcGxhdGUtc2NoZW1hL3RlbXBsYXRlLXNjaGVtYS1lbGVtZW50LnRzIiwibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vbGliL3RlbXBsYXRlLXNjaGVtYS9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LXNjaGVtYS1mb3JtL2xpYi90ZW1wbGF0ZS1zY2hlbWEvZmllbGQvZmllbGQudHMiLCJuZzovL25neC1zY2hlbWEtZm9ybS9saWIvdGVtcGxhdGUtc2NoZW1hL2ZpZWxkL2ZpZWxkLXBhcmVudC50cyIsIm5nOi8vbmd4LXNjaGVtYS1mb3JtL2xpYi90ZW1wbGF0ZS1zY2hlbWEvZmllbGQvaXRlbS9pdGVtLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LXNjaGVtYS1mb3JtL2xpYi90ZW1wbGF0ZS1zY2hlbWEvZmllbGQvZmllbGQuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vbGliL3RlbXBsYXRlLXNjaGVtYS90ZW1wbGF0ZS1zY2hlbWEuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vbGliL3RlbXBsYXRlLXNjaGVtYS90ZW1wbGF0ZS1zY2hlbWEubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJy4vYWN0aW9uJztcblxuZXhwb3J0IGNsYXNzIEFjdGlvblJlZ2lzdHJ5IHtcbiAgYWN0aW9uczoge1trZXk6IHN0cmluZ106IEFjdGlvbn0gPSB7fTtcblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmFjdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHJlZ2lzdGVyKGFjdGlvbklkOiBzdHJpbmcsIGFjdGlvbjogQWN0aW9uKSB7XG4gICAgdGhpcy5hY3Rpb25zW2FjdGlvbklkXSA9IGFjdGlvbjtcbiAgfVxuXG4gIGdldChhY3Rpb25JZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aW9uc1thY3Rpb25JZF07XG4gIH1cbn1cbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0geVtvcFswXSAmIDIgPyBcInJldHVyblwiIDogb3BbMF0gPyBcInRocm93XCIgOiBcIm5leHRcIl0pICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gWzAsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHtPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QsIGNvbWJpbmVMYXRlc3R9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtTY2hlbWFWYWxpZGF0b3JGYWN0b3J5fSBmcm9tICcuLi9zY2hlbWF2YWxpZGF0b3JmYWN0b3J5JztcbmltcG9ydCB7VmFsaWRhdG9yUmVnaXN0cnl9IGZyb20gJy4vdmFsaWRhdG9ycmVnaXN0cnknO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRm9ybVByb3BlcnR5IHtcbiAgcHVibGljIHNjaGVtYVZhbGlkYXRvcjogRnVuY3Rpb247XG5cbiAgX3ZhbHVlOiBhbnkgPSBudWxsO1xuICBfZXJyb3JzOiBhbnkgPSBudWxsO1xuICBwcml2YXRlIF92YWx1ZUNoYW5nZXMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4obnVsbCk7XG4gIHByaXZhdGUgX2Vycm9yc0NoYW5nZXMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4obnVsbCk7XG4gIHByaXZhdGUgX3Zpc2libGUgPSB0cnVlO1xuICBwcml2YXRlIF92aXNpYmlsaXR5Q2hhbmdlcyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4odHJ1ZSk7XG4gIHByaXZhdGUgX3Jvb3Q6IFByb3BlcnR5R3JvdXA7XG4gIHByaXZhdGUgX3BhcmVudDogUHJvcGVydHlHcm91cDtcbiAgcHJpdmF0ZSBfcGF0aDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHNjaGVtYVZhbGlkYXRvckZhY3Rvcnk6IFNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gICAgICAgICAgICAgIHByaXZhdGUgdmFsaWRhdG9yUmVnaXN0cnk6IFZhbGlkYXRvclJlZ2lzdHJ5LFxuICAgICAgICAgICAgICBwdWJsaWMgc2NoZW1hOiBhbnksXG4gICAgICAgICAgICAgIHBhcmVudDogUHJvcGVydHlHcm91cCxcbiAgICAgICAgICAgICAgcGF0aDogc3RyaW5nKSB7XG4gICAgdGhpcy5zY2hlbWFWYWxpZGF0b3IgPSBzY2hlbWFWYWxpZGF0b3JGYWN0b3J5LmNyZWF0ZVZhbGlkYXRvckZuKHRoaXMuc2NoZW1hKTtcblxuICAgIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcbiAgICBpZiAocGFyZW50KSB7XG4gICAgICB0aGlzLl9yb290ID0gcGFyZW50LnJvb3Q7XG4gICAgfSBlbHNlIGlmICh0aGlzIGluc3RhbmNlb2YgUHJvcGVydHlHcm91cCkge1xuICAgICAgdGhpcy5fcm9vdCA9IDxQcm9wZXJ0eUdyb3VwPjxhbnk+dGhpcztcbiAgICB9XG4gICAgdGhpcy5fcGF0aCA9IHBhdGg7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHZhbHVlQ2hhbmdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWVDaGFuZ2VzO1xuICB9XG5cbiAgcHVibGljIGdldCBlcnJvcnNDaGFuZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLl9lcnJvcnNDaGFuZ2VzO1xuICB9XG5cbiAgcHVibGljIGdldCB0eXBlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLnR5cGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHBhcmVudCgpOiBQcm9wZXJ0eUdyb3VwIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICB9XG5cbiAgcHVibGljIGdldCByb290KCk6IFByb3BlcnR5R3JvdXAge1xuICAgIHJldHVybiB0aGlzLl9yb290IHx8IDxQcm9wZXJ0eUdyb3VwPjxhbnk+dGhpcztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9wYXRoO1xuICB9XG5cbiAgcHVibGljIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHZpc2libGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Zpc2libGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHZhbGlkKCkge1xuICAgIHJldHVybiB0aGlzLl9lcnJvcnMgPT09IG51bGw7XG4gIH1cblxuICBwdWJsaWMgYWJzdHJhY3Qgc2V0VmFsdWUodmFsdWU6IGFueSwgb25seVNlbGY6IGJvb2xlYW4pO1xuXG4gIHB1YmxpYyBhYnN0cmFjdCByZXNldCh2YWx1ZTogYW55LCBvbmx5U2VsZjogYm9vbGVhbik7XG5cbiAgcHVibGljIHVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob25seVNlbGYgPSBmYWxzZSwgZW1pdEV2ZW50ID0gdHJ1ZSkge1xuICAgIHRoaXMuX3VwZGF0ZVZhbHVlKCk7XG5cbiAgICBpZiAoZW1pdEV2ZW50KSB7XG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlcy5uZXh0KHRoaXMudmFsdWUpO1xuICAgIH1cblxuICAgIHRoaXMuX3J1blZhbGlkYXRpb24oKTtcblxuICAgIGlmICh0aGlzLnBhcmVudCAmJiAhb25seVNlbGYpIHtcbiAgICAgIHRoaXMucGFyZW50LnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob25seVNlbGYsIGVtaXRFdmVudCk7XG4gICAgfVxuXG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3QgX2hhc1ZhbHVlKCk6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqICBAaW50ZXJuYWxcbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCBfdXBkYXRlVmFsdWUoKTtcblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBwdWJsaWMgX3J1blZhbGlkYXRpb24oKTogYW55IHtcbiAgICBsZXQgZXJyb3JzID0gdGhpcy5zY2hlbWFWYWxpZGF0b3IodGhpcy5fdmFsdWUpIHx8IFtdO1xuICAgIGxldCBjdXN0b21WYWxpZGF0b3IgPSB0aGlzLnZhbGlkYXRvclJlZ2lzdHJ5LmdldCh0aGlzLnBhdGgpO1xuICAgIGlmIChjdXN0b21WYWxpZGF0b3IpIHtcbiAgICAgIGxldCBjdXN0b21FcnJvcnMgPSBjdXN0b21WYWxpZGF0b3IodGhpcy52YWx1ZSwgdGhpcywgdGhpcy5maW5kUm9vdCgpKTtcbiAgICAgIGVycm9ycyA9IHRoaXMubWVyZ2VFcnJvcnMoZXJyb3JzLCBjdXN0b21FcnJvcnMpO1xuICAgIH1cbiAgICBpZiAoZXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZXJyb3JzID0gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLl9lcnJvcnMgPSBlcnJvcnM7XG4gICAgdGhpcy5zZXRFcnJvcnModGhpcy5fZXJyb3JzKTtcbiAgfVxuXG4gIHByaXZhdGUgbWVyZ2VFcnJvcnMoZXJyb3JzLCBuZXdFcnJvcnMpIHtcbiAgICBpZiAobmV3RXJyb3JzKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShuZXdFcnJvcnMpKSB7XG4gICAgICAgIGVycm9ycyA9IGVycm9ycy5jb25jYXQoLi4ubmV3RXJyb3JzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9ycy5wdXNoKG5ld0Vycm9ycyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlcnJvcnM7XG4gIH1cblxuICBwcml2YXRlIHNldEVycm9ycyhlcnJvcnMpIHtcbiAgICB0aGlzLl9lcnJvcnMgPSBlcnJvcnM7XG4gICAgdGhpcy5fZXJyb3JzQ2hhbmdlcy5uZXh0KGVycm9ycyk7XG4gIH1cblxuICBwdWJsaWMgZXh0ZW5kRXJyb3JzKGVycm9ycykge1xuICAgIGVycm9ycyA9IHRoaXMubWVyZ2VFcnJvcnModGhpcy5fZXJyb3JzIHx8IFtdLCBlcnJvcnMpO1xuICAgIHRoaXMuc2V0RXJyb3JzKGVycm9ycyk7XG4gIH1cblxuICBzZWFyY2hQcm9wZXJ0eShwYXRoOiBzdHJpbmcpOiBGb3JtUHJvcGVydHkge1xuICAgIGxldCBwcm9wOiBGb3JtUHJvcGVydHkgPSB0aGlzO1xuICAgIGxldCBiYXNlOiBQcm9wZXJ0eUdyb3VwID0gbnVsbDtcblxuICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgIGlmIChwYXRoWzBdID09PSAnLycpIHtcbiAgICAgIGJhc2UgPSB0aGlzLmZpbmRSb290KCk7XG4gICAgICByZXN1bHQgPSBiYXNlLmdldFByb3BlcnR5KHBhdGguc3Vic3RyKDEpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2hpbGUgKHJlc3VsdCA9PT0gbnVsbCAmJiBwcm9wLnBhcmVudCAhPT0gbnVsbCkge1xuICAgICAgICBwcm9wID0gYmFzZSA9IHByb3AucGFyZW50O1xuICAgICAgICByZXN1bHQgPSBiYXNlLmdldFByb3BlcnR5KHBhdGgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHVibGljIGZpbmRSb290KCk6IFByb3BlcnR5R3JvdXAge1xuICAgIGxldCBwcm9wZXJ0eTogRm9ybVByb3BlcnR5ID0gdGhpcztcbiAgICB3aGlsZSAocHJvcGVydHkucGFyZW50ICE9PSBudWxsKSB7XG4gICAgICBwcm9wZXJ0eSA9IHByb3BlcnR5LnBhcmVudDtcbiAgICB9XG4gICAgcmV0dXJuIDxQcm9wZXJ0eUdyb3VwPnByb3BlcnR5O1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl92aXNpYmxlID0gdmlzaWJsZTtcbiAgICB0aGlzLl92aXNpYmlsaXR5Q2hhbmdlcy5uZXh0KHZpc2libGUpO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgdGhpcy5wYXJlbnQudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShmYWxzZSwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gQSBmaWVsZCBpcyB2aXNpYmxlIGlmIEFUIExFQVNUIE9ORSBvZiB0aGUgcHJvcGVydGllcyBpdCBkZXBlbmRzIG9uIGlzIHZpc2libGUgQU5EIGhhcyBhIHZhbHVlIGluIHRoZSBsaXN0XG4gIHB1YmxpYyBfYmluZFZpc2liaWxpdHkoKSB7XG4gICAgbGV0IHZpc2libGVJZiA9IHRoaXMuc2NoZW1hLnZpc2libGVJZjtcbiAgICBpZiAodHlwZW9mIHZpc2libGVJZiA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXModmlzaWJsZUlmKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHZpc2libGVJZiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBsZXQgcHJvcGVydGllc0JpbmRpbmcgPSBbXTtcbiAgICAgIGZvciAobGV0IGRlcGVuZGVuY3lQYXRoIGluIHZpc2libGVJZikge1xuICAgICAgICBpZiAodmlzaWJsZUlmLmhhc093blByb3BlcnR5KGRlcGVuZGVuY3lQYXRoKSkge1xuICAgICAgICAgIGxldCBwcm9wZXJ0eSA9IHRoaXMuc2VhcmNoUHJvcGVydHkoZGVwZW5kZW5jeVBhdGgpO1xuICAgICAgICAgIGlmIChwcm9wZXJ0eSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWVDaGVjayA9IHByb3BlcnR5LnZhbHVlQ2hhbmdlcy5waXBlKG1hcChcbiAgICAgICAgICAgICAgdmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh2aXNpYmxlSWZbZGVwZW5kZW5jeVBhdGhdLmluZGV4T2YoJyRBTlkkJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID4gMDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHZpc2libGVJZltkZXBlbmRlbmN5UGF0aF0uaW5kZXhPZih2YWx1ZSkgIT09IC0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKSk7XG4gICAgICAgICAgICBjb25zdCB2aXNpYmlsaXR5Q2hlY2sgPSBwcm9wZXJ0eS5fdmlzaWJpbGl0eUNoYW5nZXM7XG4gICAgICAgICAgICBjb25zdCBhbmQgPSBjb21iaW5lTGF0ZXN0KFt2YWx1ZUNoZWNrLCB2aXNpYmlsaXR5Q2hlY2tdLCAodjEsIHYyKSA9PiB2MSAmJiB2Mik7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzQmluZGluZy5wdXNoKGFuZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignQ2FuXFwndCBmaW5kIHByb3BlcnR5ICcgKyBkZXBlbmRlbmN5UGF0aCArICcgZm9yIHZpc2liaWxpdHkgY2hlY2sgb2YgJyArIHRoaXMucGF0aCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbWJpbmVMYXRlc3QocHJvcGVydGllc0JpbmRpbmcsICguLi52YWx1ZXM6IGJvb2xlYW5bXSkgPT4ge1xuICAgICAgICByZXR1cm4gdmFsdWVzLmluZGV4T2YodHJ1ZSkgIT09IC0xO1xuICAgICAgfSkucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKS5zdWJzY3JpYmUoKHZpc2libGUpID0+IHtcbiAgICAgICAgdGhpcy5zZXRWaXNpYmxlKHZpc2libGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQcm9wZXJ0eUdyb3VwIGV4dGVuZHMgRm9ybVByb3BlcnR5IHtcblxuICBwcm9wZXJ0aWVzOiBGb3JtUHJvcGVydHlbXSB8IHsgW2tleTogc3RyaW5nXTogRm9ybVByb3BlcnR5IH0gPSBudWxsO1xuXG4gIGdldFByb3BlcnR5KHBhdGg6IHN0cmluZykge1xuICAgIGxldCBzdWJQYXRoSWR4ID0gcGF0aC5pbmRleE9mKCcvJyk7XG4gICAgbGV0IHByb3BlcnR5SWQgPSBzdWJQYXRoSWR4ICE9PSAtMSA/IHBhdGguc3Vic3RyKDAsIHN1YlBhdGhJZHgpIDogcGF0aDtcblxuICAgIGxldCBwcm9wZXJ0eSA9IHRoaXMucHJvcGVydGllc1twcm9wZXJ0eUlkXTtcbiAgICBpZiAocHJvcGVydHkgIT09IG51bGwgJiYgc3ViUGF0aElkeCAhPT0gLTEgJiYgcHJvcGVydHkgaW5zdGFuY2VvZiBQcm9wZXJ0eUdyb3VwKSB7XG4gICAgICBsZXQgc3ViUGF0aCA9IHBhdGguc3Vic3RyKHN1YlBhdGhJZHggKyAxKTtcbiAgICAgIHByb3BlcnR5ID0gKDxQcm9wZXJ0eUdyb3VwPnByb3BlcnR5KS5nZXRQcm9wZXJ0eShzdWJQYXRoKTtcbiAgICB9XG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9XG5cbiAgcHVibGljIGZvckVhY2hDaGlsZChmbjogKGZvcm1Qcm9wZXJ0eTogRm9ybVByb3BlcnR5LCBzdHI6IFN0cmluZykgPT4gdm9pZCkge1xuICAgIGZvciAobGV0IHByb3BlcnR5SWQgaW4gdGhpcy5wcm9wZXJ0aWVzKSB7XG4gICAgICBpZiAodGhpcy5wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KHByb3BlcnR5SWQpKSB7XG4gICAgICAgIGxldCBwcm9wZXJ0eSA9IHRoaXMucHJvcGVydGllc1twcm9wZXJ0eUlkXTtcbiAgICAgICAgZm4ocHJvcGVydHksIHByb3BlcnR5SWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBmb3JFYWNoQ2hpbGRSZWN1cnNpdmUoZm46IChmb3JtUHJvcGVydHk6IEZvcm1Qcm9wZXJ0eSkgPT4gdm9pZCkge1xuICAgIHRoaXMuZm9yRWFjaENoaWxkKChjaGlsZCkgPT4ge1xuICAgICAgZm4oY2hpbGQpO1xuICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgUHJvcGVydHlHcm91cCkge1xuICAgICAgICAoPFByb3BlcnR5R3JvdXA+Y2hpbGQpLmZvckVhY2hDaGlsZFJlY3Vyc2l2ZShmbik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgX2JpbmRWaXNpYmlsaXR5KCkge1xuICAgIHN1cGVyLl9iaW5kVmlzaWJpbGl0eSgpO1xuICAgIHRoaXMuX2JpbmRWaXNpYmlsaXR5UmVjdXJzaXZlKCk7XG4gIH1cblxuICBwcml2YXRlIF9iaW5kVmlzaWJpbGl0eVJlY3Vyc2l2ZSgpIHtcbiAgICB0aGlzLmZvckVhY2hDaGlsZFJlY3Vyc2l2ZSgocHJvcGVydHkpID0+IHtcbiAgICAgIHByb3BlcnR5Ll9iaW5kVmlzaWJpbGl0eSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGlzUm9vdCgpIHtcbiAgICByZXR1cm4gdGhpcyA9PT0gdGhpcy5yb290O1xuICB9XG59XG5cblxuIiwiaW1wb3J0IHtGb3JtUHJvcGVydHl9IGZyb20gJy4vZm9ybXByb3BlcnR5JztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEF0b21pY1Byb3BlcnR5IGV4dGVuZHMgRm9ybVByb3BlcnR5IHtcblxuICBzZXRWYWx1ZSh2YWx1ZSwgb25seVNlbGYgPSBmYWxzZSkge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmLCB0cnVlKTtcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBhbnkgPSBudWxsLCBvbmx5U2VsZiA9IHRydWUpIHtcbiAgICB0aGlzLnJlc2V0VmFsdWUodmFsdWUpO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvbmx5U2VsZiwgdHJ1ZSk7XG4gIH1cblxuICByZXNldFZhbHVlKHZhbHVlOiBhbnkpOiBhbnkge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgaWYgKHRoaXMuc2NoZW1hLmRlZmF1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YWx1ZSA9IHRoaXMuc2NoZW1hLmRlZmF1bHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IHRoaXMuZmFsbGJhY2tWYWx1ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIF9oYXNWYWx1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5mYWxsYmFja1ZhbHVlKCkgIT09IHRoaXMudmFsdWU7XG4gIH1cblxuICBhYnN0cmFjdCBmYWxsYmFja1ZhbHVlKCk6IGFueTtcblxuICBwdWJsaWMgX3VwZGF0ZVZhbHVlKCkge1xuICB9XG59XG4iLCJpbXBvcnQge0F0b21pY1Byb3BlcnR5fSBmcm9tICcuL2F0b21pY3Byb3BlcnR5JztcblxuZXhwb3J0IGNsYXNzIE51bWJlclByb3BlcnR5IGV4dGVuZHMgQXRvbWljUHJvcGVydHkge1xuXG4gIGZhbGxiYWNrVmFsdWUoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZSwgb25seVNlbGYgPSBmYWxzZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAodmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuaW5kZXhPZignLicpID4gLTEgPyBwYXJzZUZsb2F0KHZhbHVlKSA6IHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmLCB0cnVlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQXRvbWljUHJvcGVydHkgfSBmcm9tICcuL2F0b21pY3Byb3BlcnR5JztcblxuZXhwb3J0IGNsYXNzIFN0cmluZ1Byb3BlcnR5IGV4dGVuZHMgQXRvbWljUHJvcGVydHkge1xuXG4gIGZhbGxiYWNrVmFsdWUoKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEF0b21pY1Byb3BlcnR5IH0gZnJvbSAnLi9hdG9taWNwcm9wZXJ0eSc7XG5cbmV4cG9ydCBjbGFzcyBCb29sZWFuUHJvcGVydHkgZXh0ZW5kcyBBdG9taWNQcm9wZXJ0eSB7XG5cbiAgZmFsbGJhY2tWYWx1ZSgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuIiwiaW1wb3J0IHtQcm9wZXJ0eUdyb3VwfSBmcm9tICcuL2Zvcm1wcm9wZXJ0eSc7XG5pbXBvcnQge0Zvcm1Qcm9wZXJ0eUZhY3Rvcnl9IGZyb20gJy4vZm9ybXByb3BlcnR5ZmFjdG9yeSc7XG5pbXBvcnQge1NjaGVtYVZhbGlkYXRvckZhY3Rvcnl9IGZyb20gJy4uL3NjaGVtYXZhbGlkYXRvcmZhY3RvcnknO1xuaW1wb3J0IHtWYWxpZGF0b3JSZWdpc3RyeX0gZnJvbSAnLi92YWxpZGF0b3JyZWdpc3RyeSc7XG5cbmV4cG9ydCBjbGFzcyBPYmplY3RQcm9wZXJ0eSBleHRlbmRzIFByb3BlcnR5R3JvdXAge1xuXG4gIHByaXZhdGUgcHJvcGVydGllc0lkOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybVByb3BlcnR5RmFjdG9yeTogRm9ybVByb3BlcnR5RmFjdG9yeSxcbiAgICAgICAgICAgICAgc2NoZW1hVmFsaWRhdG9yRmFjdG9yeTogU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgICAgICAgICAgICAgdmFsaWRhdG9yUmVnaXN0cnk6IFZhbGlkYXRvclJlZ2lzdHJ5LFxuICAgICAgICAgICAgICBzY2hlbWE6IGFueSxcbiAgICAgICAgICAgICAgcGFyZW50OiBQcm9wZXJ0eUdyb3VwLFxuICAgICAgICAgICAgICBwYXRoOiBzdHJpbmcpIHtcbiAgICBzdXBlcihzY2hlbWFWYWxpZGF0b3JGYWN0b3J5LCB2YWxpZGF0b3JSZWdpc3RyeSwgc2NoZW1hLCBwYXJlbnQsIHBhdGgpO1xuICAgIHRoaXMuY3JlYXRlUHJvcGVydGllcygpO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IGFueSwgb25seVNlbGY6IGJvb2xlYW4pIHtcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5SWQgaW4gdmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eUlkKSkge1xuICAgICAgICB0aGlzLnByb3BlcnRpZXNbcHJvcGVydHlJZF0uc2V0VmFsdWUodmFsdWVbcHJvcGVydHlJZF0sIHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob25seVNlbGYsIHRydWUpO1xuICB9XG5cbiAgcmVzZXQodmFsdWU6IGFueSwgb25seVNlbGYgPSB0cnVlKSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB0aGlzLnNjaGVtYS5kZWZhdWx0IHx8IHt9O1xuICAgIHRoaXMucmVzZXRQcm9wZXJ0aWVzKHZhbHVlKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob25seVNlbGYsIHRydWUpO1xuICB9XG5cbiAgcmVzZXRQcm9wZXJ0aWVzKHZhbHVlOiBhbnkpIHtcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5SWQgaW4gdGhpcy5zY2hlbWEucHJvcGVydGllcykge1xuICAgICAgaWYgKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkocHJvcGVydHlJZCkpIHtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzW3Byb3BlcnR5SWRdLnJlc2V0KHZhbHVlW3Byb3BlcnR5SWRdLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjcmVhdGVQcm9wZXJ0aWVzKCkge1xuICAgIHRoaXMucHJvcGVydGllcyA9IHt9O1xuICAgIHRoaXMucHJvcGVydGllc0lkID0gW107XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eUlkIGluIHRoaXMuc2NoZW1hLnByb3BlcnRpZXMpIHtcbiAgICAgIGlmICh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KHByb3BlcnR5SWQpKSB7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5U2NoZW1hID0gdGhpcy5zY2hlbWEucHJvcGVydGllc1twcm9wZXJ0eUlkXTtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzW3Byb3BlcnR5SWRdID0gdGhpcy5mb3JtUHJvcGVydHlGYWN0b3J5LmNyZWF0ZVByb3BlcnR5KHByb3BlcnR5U2NoZW1hLCB0aGlzLCBwcm9wZXJ0eUlkKTtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzSWQucHVzaChwcm9wZXJ0eUlkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgX2hhc1ZhbHVlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIU9iamVjdC5rZXlzKHRoaXMudmFsdWUpLmxlbmd0aDtcbiAgfVxuXG4gIHB1YmxpYyBfdXBkYXRlVmFsdWUoKSB7XG4gICAgdGhpcy5yZWR1Y2VWYWx1ZSgpO1xuICB9XG5cbiAgcHVibGljIF9ydW5WYWxpZGF0aW9uKCkge1xuICAgIHN1cGVyLl9ydW5WYWxpZGF0aW9uKCk7XG5cbiAgICBpZiAodGhpcy5fZXJyb3JzKSB7XG4gICAgICB0aGlzLl9lcnJvcnMuZm9yRWFjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnN0IHByb3AgPSB0aGlzLnNlYXJjaFByb3BlcnR5KGVycm9yLnBhdGguc2xpY2UoMSkpO1xuICAgICAgICBpZiAocHJvcCkge1xuICAgICAgICAgIHByb3AuZXh0ZW5kRXJyb3JzKGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZWR1Y2VWYWx1ZSgpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IHt9O1xuICAgIHRoaXMuZm9yRWFjaENoaWxkKChwcm9wZXJ0eSwgcHJvcGVydHlJZDogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvcGVydHkudmlzaWJsZSAmJiBwcm9wZXJ0eS5faGFzVmFsdWUoKSkge1xuICAgICAgICB2YWx1ZVtwcm9wZXJ0eUlkXSA9IHByb3BlcnR5LnZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cbn1cbiIsImltcG9ydCB7Rm9ybVByb3BlcnR5LCBQcm9wZXJ0eUdyb3VwfSBmcm9tICcuL2Zvcm1wcm9wZXJ0eSc7XG5pbXBvcnQge0Zvcm1Qcm9wZXJ0eUZhY3Rvcnl9IGZyb20gJy4vZm9ybXByb3BlcnR5ZmFjdG9yeSc7XG5pbXBvcnQge1NjaGVtYVZhbGlkYXRvckZhY3Rvcnl9IGZyb20gJy4uL3NjaGVtYXZhbGlkYXRvcmZhY3RvcnknO1xuaW1wb3J0IHtWYWxpZGF0b3JSZWdpc3RyeX0gZnJvbSAnLi92YWxpZGF0b3JyZWdpc3RyeSc7XG5cbmV4cG9ydCBjbGFzcyBBcnJheVByb3BlcnR5IGV4dGVuZHMgUHJvcGVydHlHcm91cCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtUHJvcGVydHlGYWN0b3J5OiBGb3JtUHJvcGVydHlGYWN0b3J5LFxuICAgICAgICAgICAgICBzY2hlbWFWYWxpZGF0b3JGYWN0b3J5OiBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxuICAgICAgICAgICAgICB2YWxpZGF0b3JSZWdpc3RyeTogVmFsaWRhdG9yUmVnaXN0cnksXG4gICAgICAgICAgICAgIHNjaGVtYTogYW55LFxuICAgICAgICAgICAgICBwYXJlbnQ6IFByb3BlcnR5R3JvdXAsXG4gICAgICAgICAgICAgIHBhdGg6IHN0cmluZykge1xuICAgIHN1cGVyKHNjaGVtYVZhbGlkYXRvckZhY3RvcnksIHZhbGlkYXRvclJlZ2lzdHJ5LCBzY2hlbWEsIHBhcmVudCwgcGF0aCk7XG4gIH1cblxuICBhZGRJdGVtKHZhbHVlOiBhbnkgPSBudWxsKTogRm9ybVByb3BlcnR5IHtcbiAgICBsZXQgbmV3UHJvcGVydHkgPSB0aGlzLmFkZFByb3BlcnR5KCk7XG4gICAgbmV3UHJvcGVydHkucmVzZXQodmFsdWUsIGZhbHNlKTtcbiAgICByZXR1cm4gbmV3UHJvcGVydHk7XG4gIH1cblxuICBwcml2YXRlIGFkZFByb3BlcnR5KCkge1xuICAgIGxldCBuZXdQcm9wZXJ0eSA9IHRoaXMuZm9ybVByb3BlcnR5RmFjdG9yeS5jcmVhdGVQcm9wZXJ0eSh0aGlzLnNjaGVtYS5pdGVtcywgdGhpcyk7XG4gICAgKDxGb3JtUHJvcGVydHlbXT50aGlzLnByb3BlcnRpZXMpLnB1c2gobmV3UHJvcGVydHkpO1xuICAgIHJldHVybiBuZXdQcm9wZXJ0eTtcbiAgfVxuXG4gIHJlbW92ZUl0ZW0oaW5kZXg6IG51bWJlcikge1xuICAgICg8Rm9ybVByb3BlcnR5W10+dGhpcy5wcm9wZXJ0aWVzKS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShmYWxzZSwgdHJ1ZSk7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogYW55LCBvbmx5U2VsZjogYm9vbGVhbikge1xuICAgIHRoaXMuY3JlYXRlUHJvcGVydGllcygpO1xuICAgIHRoaXMucmVzZXRQcm9wZXJ0aWVzKHZhbHVlKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob25seVNlbGYsIHRydWUpO1xuICB9XG5cbiAgcHVibGljIF9oYXNWYWx1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBfdXBkYXRlVmFsdWUoKSB7XG4gICAgdGhpcy5yZWR1Y2VWYWx1ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSByZWR1Y2VWYWx1ZSgpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IFtdO1xuICAgIHRoaXMuZm9yRWFjaENoaWxkKChwcm9wZXJ0eSwgXykgPT4ge1xuICAgICAgaWYgKHByb3BlcnR5LnZpc2libGUgJiYgcHJvcGVydHkuX2hhc1ZhbHVlKCkpIHtcbiAgICAgICAgdmFsdWUucHVzaChwcm9wZXJ0eS52YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBhbnksIG9ubHlTZWxmID0gdHJ1ZSkge1xuICAgIHZhbHVlID0gdmFsdWUgfHwgdGhpcy5zY2hlbWEuZGVmYXVsdCB8fCBbXTtcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBbXTtcbiAgICB0aGlzLnJlc2V0UHJvcGVydGllcyh2YWx1ZSk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmLCB0cnVlKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlUHJvcGVydGllcygpIHtcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBbXTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSByZXNldFByb3BlcnRpZXModmFsdWU6IGFueSkge1xuICAgIGZvciAobGV0IGlkeCBpbiB2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlLmhhc093blByb3BlcnR5KGlkeCkpIHtcbiAgICAgICAgbGV0IHByb3BlcnR5ID0gdGhpcy5hZGRQcm9wZXJ0eSgpO1xuICAgICAgICBwcm9wZXJ0eS5yZXNldCh2YWx1ZVtpZHhdLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7Rm9ybVByb3BlcnR5LCBQcm9wZXJ0eUdyb3VwfSBmcm9tICcuL2Zvcm1wcm9wZXJ0eSc7XG5pbXBvcnQge051bWJlclByb3BlcnR5fSBmcm9tICcuL251bWJlcnByb3BlcnR5JztcbmltcG9ydCB7U3RyaW5nUHJvcGVydHl9IGZyb20gJy4vc3RyaW5ncHJvcGVydHknO1xuaW1wb3J0IHtCb29sZWFuUHJvcGVydHl9IGZyb20gJy4vYm9vbGVhbnByb3BlcnR5JztcbmltcG9ydCB7T2JqZWN0UHJvcGVydHl9IGZyb20gJy4vb2JqZWN0cHJvcGVydHknO1xuaW1wb3J0IHtBcnJheVByb3BlcnR5fSBmcm9tICcuL2FycmF5cHJvcGVydHknO1xuaW1wb3J0IHtTY2hlbWFWYWxpZGF0b3JGYWN0b3J5fSBmcm9tICcuLi9zY2hlbWF2YWxpZGF0b3JmYWN0b3J5JztcbmltcG9ydCB7VmFsaWRhdG9yUmVnaXN0cnl9IGZyb20gJy4vdmFsaWRhdG9ycmVnaXN0cnknO1xuXG5leHBvcnQgY2xhc3MgRm9ybVByb3BlcnR5RmFjdG9yeSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2NoZW1hVmFsaWRhdG9yRmFjdG9yeTogU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSwgcHJpdmF0ZSB2YWxpZGF0b3JSZWdpc3RyeTogVmFsaWRhdG9yUmVnaXN0cnkpIHtcbiAgfVxuXG4gIGNyZWF0ZVByb3BlcnR5KHNjaGVtYTogYW55LCBwYXJlbnQ6IFByb3BlcnR5R3JvdXAgPSBudWxsLCBwcm9wZXJ0eUlkPzogc3RyaW5nKTogRm9ybVByb3BlcnR5IHtcbiAgICBsZXQgbmV3UHJvcGVydHkgPSBudWxsO1xuICAgIGxldCBwYXRoID0gJyc7XG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgcGF0aCArPSBwYXJlbnQucGF0aDtcbiAgICAgIGlmIChwYXJlbnQucGFyZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHBhdGggKz0gJy8nO1xuICAgICAgfVxuICAgICAgaWYgKHBhcmVudC50eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICBwYXRoICs9IHByb3BlcnR5SWQ7XG4gICAgICB9IGVsc2UgaWYgKHBhcmVudC50eXBlID09PSAnYXJyYXknKSB7XG4gICAgICAgIHBhdGggKz0gJyonO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgJ0luc3RhbmNpYXRpb24gb2YgYSBGb3JtUHJvcGVydHkgd2l0aCBhbiB1bmtub3duIHBhcmVudCB0eXBlOiAnICsgcGFyZW50LnR5cGU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhdGggPSAnLyc7XG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS4kcmVmKSB7XG4gICAgICBjb25zdCByZWZTY2hlbWEgPSB0aGlzLnNjaGVtYVZhbGlkYXRvckZhY3RvcnkuZ2V0U2NoZW1hKHBhcmVudC5yb290LnNjaGVtYSwgc2NoZW1hLiRyZWYpO1xuICAgICAgbmV3UHJvcGVydHkgPSB0aGlzLmNyZWF0ZVByb3BlcnR5KHJlZlNjaGVtYSwgcGFyZW50LCBwYXRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpdGNoIChzY2hlbWEudHlwZSkge1xuICAgICAgICBjYXNlICdpbnRlZ2VyJzpcbiAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICBuZXdQcm9wZXJ0eSA9IG5ldyBOdW1iZXJQcm9wZXJ0eSh0aGlzLnNjaGVtYVZhbGlkYXRvckZhY3RvcnksIHRoaXMudmFsaWRhdG9yUmVnaXN0cnksIHNjaGVtYSwgcGFyZW50LCBwYXRoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICBuZXdQcm9wZXJ0eSA9IG5ldyBTdHJpbmdQcm9wZXJ0eSh0aGlzLnNjaGVtYVZhbGlkYXRvckZhY3RvcnksIHRoaXMudmFsaWRhdG9yUmVnaXN0cnksIHNjaGVtYSwgcGFyZW50LCBwYXRoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgICAgbmV3UHJvcGVydHkgPSBuZXcgQm9vbGVhblByb3BlcnR5KHRoaXMuc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSwgdGhpcy52YWxpZGF0b3JSZWdpc3RyeSwgc2NoZW1hLCBwYXJlbnQsIHBhdGgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgIG5ld1Byb3BlcnR5ID0gbmV3IE9iamVjdFByb3BlcnR5KHRoaXMsIHRoaXMuc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSwgdGhpcy52YWxpZGF0b3JSZWdpc3RyeSwgc2NoZW1hLCBwYXJlbnQsIHBhdGgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgbmV3UHJvcGVydHkgPSBuZXcgQXJyYXlQcm9wZXJ0eSh0aGlzLCB0aGlzLnNjaGVtYVZhbGlkYXRvckZhY3RvcnksIHRoaXMudmFsaWRhdG9yUmVnaXN0cnksIHNjaGVtYSwgcGFyZW50LCBwYXRoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBVbmRlZmluZWQgdHlwZSAke3NjaGVtYS50eXBlfWApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXdQcm9wZXJ0eSBpbnN0YW5jZW9mIFByb3BlcnR5R3JvdXApIHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZVJvb3QobmV3UHJvcGVydHkpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXdQcm9wZXJ0eTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdGlhbGl6ZVJvb3Qocm9vdFByb3BlcnR5OiBQcm9wZXJ0eUdyb3VwKSB7XG4gICAgcm9vdFByb3BlcnR5LnJlc2V0KG51bGwsIHRydWUpO1xuICAgIHJvb3RQcm9wZXJ0eS5fYmluZFZpc2liaWxpdHkoKTtcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGlzUHJlc2VudChvKSB7XG4gIHJldHVybiBvICE9PSBudWxsICYmIG8gIT09IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQmxhbmsobykge1xuICByZXR1cm4gbyA9PT0gbnVsbCB8fCBvID09PSB1bmRlZmluZWQ7XG59XG4iLCJpbXBvcnQge2lzQmxhbmt9IGZyb20gJy4vdXRpbHMnO1xuXG5mdW5jdGlvbiBmb3JtYXRNZXNzYWdlKG1lc3NhZ2UsIHBhdGgpIHtcbiAgcmV0dXJuIGBQYXJzaW5nIGVycm9yIG9uICR7cGF0aH06ICR7bWVzc2FnZX1gO1xufVxuXG5mdW5jdGlvbiBzY2hlbWFFcnJvcihtZXNzYWdlLCBwYXRoKTogdm9pZCB7XG4gIGxldCBtZXNnID0gZm9ybWF0TWVzc2FnZShtZXNzYWdlLCBwYXRoKTtcbiAgdGhyb3cgbmV3IEVycm9yKG1lc2cpO1xufVxuXG5mdW5jdGlvbiBzY2hlbWFXYXJuaW5nKG1lc3NhZ2UsIHBhdGgpOiB2b2lkIHtcbiAgbGV0IG1lc2cgPSBmb3JtYXRNZXNzYWdlKG1lc3NhZ2UsIHBhdGgpO1xuICB0aHJvdyBuZXcgRXJyb3IobWVzZyk7XG59XG5cbmV4cG9ydCBjbGFzcyBTY2hlbWFQcmVwcm9jZXNzb3Ige1xuXG4gIHN0YXRpYyBwcmVwcm9jZXNzKGpzb25TY2hlbWE6IGFueSwgcGF0aCA9ICcvJyk6IGFueSB7XG4gICAganNvblNjaGVtYSA9IGpzb25TY2hlbWEgfHwge307XG4gICAgU2NoZW1hUHJlcHJvY2Vzc29yLm5vcm1hbGl6ZUV4dGVuc2lvbnMoanNvblNjaGVtYSk7XG4gICAgaWYgKGpzb25TY2hlbWEudHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIFNjaGVtYVByZXByb2Nlc3Nvci5jaGVja1Byb3BlcnRpZXMoanNvblNjaGVtYSwgcGF0aCk7XG4gICAgICBTY2hlbWFQcmVwcm9jZXNzb3IuY2hlY2tBbmRDcmVhdGVGaWVsZHNldHMoanNvblNjaGVtYSwgcGF0aCk7XG4gICAgfSBlbHNlIGlmIChqc29uU2NoZW1hLnR5cGUgPT09ICdhcnJheScpIHtcbiAgICAgIFNjaGVtYVByZXByb2Nlc3Nvci5jaGVja0l0ZW1zKGpzb25TY2hlbWEsIHBhdGgpO1xuICAgIH1cbiAgICBTY2hlbWFQcmVwcm9jZXNzb3Iubm9ybWFsaXplV2lkZ2V0KGpzb25TY2hlbWEpO1xuICAgIFNjaGVtYVByZXByb2Nlc3Nvci5yZWN1cnNpdmVDaGVjayhqc29uU2NoZW1hLCBwYXRoKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGNoZWNrUHJvcGVydGllcyhqc29uU2NoZW1hLCBwYXRoOiBzdHJpbmcpIHtcbiAgICBpZiAoaXNCbGFuayhqc29uU2NoZW1hLnByb3BlcnRpZXMpKSB7XG4gICAgICBqc29uU2NoZW1hLnByb3BlcnRpZXMgPSB7fTtcbiAgICAgIHNjaGVtYVdhcm5pbmcoJ1Byb3ZpZGVkIGpzb24gc2NoZW1hIGRvZXMgbm90IGNvbnRhaW4gYSBcXCdwcm9wZXJ0aWVzXFwnIGVudHJ5LiBPdXRwdXQgc2NoZW1hIHdpbGwgYmUgZW1wdHknLCBwYXRoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBjaGVja0FuZENyZWF0ZUZpZWxkc2V0cyhqc29uU2NoZW1hOiBhbnksIHBhdGg6IHN0cmluZykge1xuICAgIGlmIChqc29uU2NoZW1hLmZpZWxkc2V0cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoanNvblNjaGVtYS5vcmRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIFNjaGVtYVByZXByb2Nlc3Nvci5yZXBsYWNlT3JkZXJCeUZpZWxkc2V0cyhqc29uU2NoZW1hKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFNjaGVtYVByZXByb2Nlc3Nvci5jcmVhdGVGaWVsZHNldHMoanNvblNjaGVtYSk7XG4gICAgICB9XG4gICAgfVxuICAgIFNjaGVtYVByZXByb2Nlc3Nvci5jaGVja0ZpZWxkc1VzYWdlKGpzb25TY2hlbWEsIHBhdGgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgY2hlY2tGaWVsZHNVc2FnZShqc29uU2NoZW1hLCBwYXRoOiBzdHJpbmcpIHtcbiAgICBsZXQgZmllbGRzSWQ6IHN0cmluZ1tdID0gT2JqZWN0LmtleXMoanNvblNjaGVtYS5wcm9wZXJ0aWVzKTtcbiAgICBsZXQgdXNlZEZpZWxkcyA9IHt9O1xuICAgIGZvciAobGV0IGZpZWxkc2V0IG9mIGpzb25TY2hlbWEuZmllbGRzZXRzKSB7XG4gICAgICBmb3IgKGxldCBmaWVsZElkIG9mIGZpZWxkc2V0LmZpZWxkcykge1xuICAgICAgICBpZiAodXNlZEZpZWxkc1tmaWVsZElkXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdXNlZEZpZWxkc1tmaWVsZElkXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHVzZWRGaWVsZHNbZmllbGRJZF0ucHVzaChmaWVsZHNldC5pZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgZmllbGRJZCBvZiBmaWVsZHNJZCkge1xuICAgICAgaWYgKHVzZWRGaWVsZHMuaGFzT3duUHJvcGVydHkoZmllbGRJZCkpIHtcbiAgICAgICAgaWYgKHVzZWRGaWVsZHNbZmllbGRJZF0ubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHNjaGVtYUVycm9yKGAke2ZpZWxkSWR9IGlzIHJlZmVyZW5jZWQgYnkgbW9yZSB0aGFuIG9uZSBmaWVsZHNldDogJHt1c2VkRmllbGRzW2ZpZWxkSWRdfWAsIHBhdGgpO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSB1c2VkRmllbGRzW2ZpZWxkSWRdO1xuICAgICAgfSBlbHNlIGlmIChqc29uU2NoZW1hLnJlcXVpcmVkLmluZGV4T2YoZmllbGRJZCkgPiAtMSkge1xuICAgICAgICBzY2hlbWFFcnJvcihgJHtmaWVsZElkfSBpcyBhIHJlcXVpcmVkIGZpZWxkIGJ1dCBpdCBpcyBub3QgcmVmZXJlbmNlZCBhcyBwYXJ0IG9mIGEgJ29yZGVyJyBvciBhICdmaWVsZHNldCcgcHJvcGVydHlgLCBwYXRoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlbGV0ZSBqc29uU2NoZW1hW2ZpZWxkSWRdO1xuICAgICAgICBzY2hlbWFXYXJuaW5nKGBSZW1vdmluZyB1bnJlZmVyZW5jZWQgZmllbGQgJHtmaWVsZElkfWAsIHBhdGgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IHJlbWFpbmluZ2ZpZWxkc0lkIGluIHVzZWRGaWVsZHMpIHtcbiAgICAgIGlmICh1c2VkRmllbGRzLmhhc093blByb3BlcnR5KHJlbWFpbmluZ2ZpZWxkc0lkKSkge1xuICAgICAgICBzY2hlbWFXYXJuaW5nKGBSZWZlcmVuY2luZyBub24tZXhpc3RlbnQgZmllbGQgJHtyZW1haW5pbmdmaWVsZHNJZH0gaW4gb25lIG9yIG1vcmUgZmllbGRzZXRzYCwgcGF0aCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgY3JlYXRlRmllbGRzZXRzKGpzb25TY2hlbWEpIHtcbiAgICBqc29uU2NoZW1hLm9yZGVyID0gT2JqZWN0LmtleXMoanNvblNjaGVtYS5wcm9wZXJ0aWVzKTtcbiAgICBTY2hlbWFQcmVwcm9jZXNzb3IucmVwbGFjZU9yZGVyQnlGaWVsZHNldHMoanNvblNjaGVtYSk7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyByZXBsYWNlT3JkZXJCeUZpZWxkc2V0cyhqc29uU2NoZW1hKSB7XG4gICAganNvblNjaGVtYS5maWVsZHNldHMgPSBbe1xuICAgICAgaWQ6ICdmaWVsZHNldC1kZWZhdWx0JyxcbiAgICAgIHRpdGxlOiBqc29uU2NoZW1hLnRpdGxlIHx8ICcnLFxuICAgICAgZGVzY3JpcHRpb246IGpzb25TY2hlbWEuZGVzY3JpcHRpb24gfHwgJycsXG4gICAgICBuYW1lOiBqc29uU2NoZW1hLm5hbWUgfHwgJycsXG4gICAgICBmaWVsZHM6IGpzb25TY2hlbWEub3JkZXJcbiAgICB9XTtcbiAgICBkZWxldGUganNvblNjaGVtYS5vcmRlcjtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIG5vcm1hbGl6ZVdpZGdldChmaWVsZFNjaGVtYTogYW55KSB7XG4gICAgbGV0IHdpZGdldCA9IGZpZWxkU2NoZW1hLndpZGdldDtcbiAgICBpZiAod2lkZ2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHdpZGdldCA9IHsnaWQnOiBmaWVsZFNjaGVtYS50eXBlfTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB3aWRnZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB3aWRnZXQgPSB7J2lkJzogd2lkZ2V0fTtcbiAgICB9XG4gICAgZmllbGRTY2hlbWEud2lkZ2V0ID0gd2lkZ2V0O1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgY2hlY2tJdGVtcyhqc29uU2NoZW1hLCBwYXRoKSB7XG4gICAgaWYgKGpzb25TY2hlbWEuaXRlbXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgc2NoZW1hRXJyb3IoJ05vIFxcJ2l0ZW1zXFwnIHByb3BlcnR5IGluIGFycmF5JywgcGF0aCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgcmVjdXJzaXZlQ2hlY2soanNvblNjaGVtYSwgcGF0aDogc3RyaW5nKSB7XG4gICAgaWYgKGpzb25TY2hlbWEudHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGZvciAobGV0IGZpZWxkSWQgaW4ganNvblNjaGVtYS5wcm9wZXJ0aWVzKSB7XG4gICAgICAgIGlmIChqc29uU2NoZW1hLnByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoZmllbGRJZCkpIHtcbiAgICAgICAgICBsZXQgZmllbGRTY2hlbWEgPSBqc29uU2NoZW1hLnByb3BlcnRpZXNbZmllbGRJZF07XG4gICAgICAgICAgU2NoZW1hUHJlcHJvY2Vzc29yLnByZXByb2Nlc3MoZmllbGRTY2hlbWEsIHBhdGggKyBmaWVsZElkICsgJy8nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGpzb25TY2hlbWEuaGFzT3duUHJvcGVydHkoJ2RlZmluaXRpb25zJykpIHtcbiAgICAgICAgZm9yIChsZXQgZmllbGRJZCBpbiBqc29uU2NoZW1hLmRlZmluaXRpb25zKSB7XG4gICAgICAgICAgaWYgKGpzb25TY2hlbWEuZGVmaW5pdGlvbnMuaGFzT3duUHJvcGVydHkoZmllbGRJZCkpIHtcbiAgICAgICAgICAgIGxldCBmaWVsZFNjaGVtYSA9IGpzb25TY2hlbWEuZGVmaW5pdGlvbnNbZmllbGRJZF07XG4gICAgICAgICAgICBTY2hlbWFQcmVwcm9jZXNzb3IucmVtb3ZlUmVjdXJzaXZlUmVmUHJvcGVydGllcyhmaWVsZFNjaGVtYSwgYCMvZGVmaW5pdGlvbnMvJHtmaWVsZElkfWApO1xuICAgICAgICAgICAgU2NoZW1hUHJlcHJvY2Vzc29yLnByZXByb2Nlc3MoZmllbGRTY2hlbWEsIHBhdGggKyBmaWVsZElkICsgJy8nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGpzb25TY2hlbWEudHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgU2NoZW1hUHJlcHJvY2Vzc29yLnByZXByb2Nlc3MoanNvblNjaGVtYS5pdGVtcywgcGF0aCArICcqLycpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIHJlbW92ZVJlY3Vyc2l2ZVJlZlByb3BlcnRpZXMoanNvblNjaGVtYSwgZGVmaW5pdGlvblBhdGgpIHtcbiAgICAvLyB0byBhdm9pZCBpbmZpbml0ZSBsb29wXG4gICAgaWYgKGpzb25TY2hlbWEudHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGZvciAobGV0IGZpZWxkSWQgaW4ganNvblNjaGVtYS5wcm9wZXJ0aWVzKSB7XG4gICAgICAgIGlmIChqc29uU2NoZW1hLnByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoZmllbGRJZCkpIHtcbiAgICAgICAgICBpZiAoanNvblNjaGVtYS5wcm9wZXJ0aWVzW2ZpZWxkSWRdLiRyZWZcbiAgICAgICAgICAgICYmIGpzb25TY2hlbWEucHJvcGVydGllc1tmaWVsZElkXS4kcmVmID09PSBkZWZpbml0aW9uUGF0aCkge1xuICAgICAgICAgICAgZGVsZXRlIGpzb25TY2hlbWEucHJvcGVydGllc1tmaWVsZElkXTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGpzb25TY2hlbWEucHJvcGVydGllc1tmaWVsZElkXS50eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgU2NoZW1hUHJlcHJvY2Vzc29yLnJlbW92ZVJlY3Vyc2l2ZVJlZlByb3BlcnRpZXMoanNvblNjaGVtYS5wcm9wZXJ0aWVzW2ZpZWxkSWRdLCBkZWZpbml0aW9uUGF0aCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAvKipcbiAgICogRW5hYmxlcyBhbGlhcyBuYW1lcyBmb3IgSlNPTiBzY2hlbWEgZXh0ZW5zaW9ucy5cbiAgICpcbiAgICogQ29waWVzIHRoZSB2YWx1ZSBvZiBlYWNoIGFsaWFzIEpTT04gc2NoZW1hIHByb3BlcnR5XG4gICAqIHRvIHRoZSBKU09OIHNjaGVtYSBwcm9wZXJ0eSBvZiBuZ3gtc2NoZW1hLWZvcm0uXG4gICAqXG4gICAqIEBwYXJhbSBzY2hlbWEgSlNPTiBzY2hlbWEgdG8gZW5hYmxlIGFsaWFzIG5hbWVzLlxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgbm9ybWFsaXplRXh0ZW5zaW9ucyhzY2hlbWE6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IGV4dGVuc2lvbnMgPSBbXG4gICAgICAgIHsgbmFtZTogXCJmaWVsZHNldHNcIiwgcmVnZXg6IC9eeC0/ZmllbGQtP3NldHMkL2kgfSxcbiAgICAgICAgeyBuYW1lOiBcIndpZGdldFwiLCAgICByZWdleDogL154LT93aWRnZXQkL2kgfSxcbiAgICAgICAgeyBuYW1lOiBcInZpc2libGVJZlwiLCByZWdleDogL154LT92aXNpYmxlLT9pZiQvaSB9XG4gICAgXTtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoc2NoZW1hKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIGxldCBrID0ga2V5c1tpXTtcbiAgICAgIGxldCBlID0gZXh0ZW5zaW9ucy5maW5kKGUgPT4gISFrLm1hdGNoKGUucmVnZXgpKTtcbiAgICAgIGlmIChlKSB7XG4gICAgICAgIGxldCB2ID0gc2NoZW1hW2tdO1xuICAgICAgICBsZXQgY29weSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodikpO1xuICAgICAgICBzY2hlbWFbZS5uYW1lXSA9IGNvcHk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbiIsImltcG9ydCB7IFZhbGlkYXRvciB9IGZyb20gJy4vdmFsaWRhdG9yJztcblxuZXhwb3J0IGNsYXNzIFZhbGlkYXRvclJlZ2lzdHJ5IHtcbiAgcHJpdmF0ZSB2YWxpZGF0b3JzOiBWYWxpZGF0b3JbXSA9IFtdO1xuXG4gIHJlZ2lzdGVyKHBhdGg6IHN0cmluZywgdmFsaWRhdG9yOiBWYWxpZGF0b3IpIHtcbiAgICB0aGlzLnZhbGlkYXRvcnNbcGF0aF0gPSB2YWxpZGF0b3I7XG4gIH1cblxuICBnZXQocGF0aDogc3RyaW5nKTogVmFsaWRhdG9yIHtcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0b3JzW3BhdGhdO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy52YWxpZGF0b3JzID0gW107XG4gIH1cbn1cbiIsImltcG9ydCB7QmluZGluZ30gZnJvbSAnLi9iaW5kaW5nJztcblxuZXhwb3J0IGNsYXNzIEJpbmRpbmdSZWdpc3RyeSB7XG4gIGJpbmRpbmdzOiBCaW5kaW5nW10gPSBbXTtcblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmJpbmRpbmdzID0gW107XG4gIH1cblxuICByZWdpc3RlcihwYXRoOiBzdHJpbmcsIGJpbmRpbmc6IEJpbmRpbmcgfCBCaW5kaW5nW10pIHtcbiAgICB0aGlzLmJpbmRpbmdzW3BhdGhdID0gW10uY29uY2F0KGJpbmRpbmcpO1xuICB9XG5cbiAgZ2V0KHBhdGg6IHN0cmluZyk6IEJpbmRpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuYmluZGluZ3NbcGF0aF07XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIFpTY2hlbWEgZnJvbSAnei1zY2hlbWEnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB7XG4gIGFic3RyYWN0IGNyZWF0ZVZhbGlkYXRvckZuKHNjaGVtYSk6ICh2YWx1ZTogYW55KSA9PiBhbnk7XG5cbiAgYWJzdHJhY3QgZ2V0U2NoZW1hKHNjaGVtYSwgcmVmKTogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgWlNjaGVtYVZhbGlkYXRvckZhY3RvcnkgZXh0ZW5kcyBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IHtcblxuICBwcm90ZWN0ZWQgenNjaGVtYTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuenNjaGVtYSA9IG5ldyBaU2NoZW1hKHtcbiAgICAgICAgYnJlYWtPbkZpcnN0RXJyb3I6IGZhbHNlXG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVWYWxpZGF0b3JGbihzY2hlbWE6IGFueSkge1xuICAgIHJldHVybiAodmFsdWUpOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9PiB7XG5cbiAgICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ251bWJlcicgfHwgc2NoZW1hLnR5cGUgPT09ICdpbnRlZ2VyJykge1xuICAgICAgICB2YWx1ZSA9ICt2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy56c2NoZW1hLnZhbGlkYXRlKHZhbHVlLCBzY2hlbWEpO1xuICAgICAgbGV0IGVyciA9IHRoaXMuenNjaGVtYS5nZXRMYXN0RXJyb3JzKCk7XG5cbiAgICAgIHRoaXMuZGVub3JtYWxpemVSZXF1aXJlZFByb3BlcnR5UGF0aHMoZXJyKTtcblxuICAgICAgcmV0dXJuIGVyciB8fCBudWxsO1xuICAgIH07XG4gIH1cblxuICBnZXRTY2hlbWEoc2NoZW1hOiBhbnksIHJlZjogc3RyaW5nKSB7XG4gICAgLy8gY2hlY2sgZGVmaW5pdGlvbnMgYXJlIHZhbGlkXG4gICAgY29uc3QgaXNWYWxpZCA9IHRoaXMuenNjaGVtYS5jb21waWxlU2NoZW1hKHNjaGVtYSk7XG4gICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldERlZmluaXRpb24oc2NoZW1hLCByZWYpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyB0aGlzLnpzY2hlbWEuZ2V0TGFzdEVycm9yKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBkZW5vcm1hbGl6ZVJlcXVpcmVkUHJvcGVydHlQYXRocyhlcnI6IGFueVtdKSB7XG4gICAgaWYgKGVyciAmJiBlcnIubGVuZ3RoKSB7XG4gICAgICBlcnIgPSBlcnIubWFwKGVycm9yID0+IHtcbiAgICAgICAgaWYgKGVycm9yLnBhdGggPT09ICcjLycgJiYgZXJyb3IuY29kZSA9PT0gJ09CSkVDVF9NSVNTSU5HX1JFUVVJUkVEX1BST1BFUlRZJykge1xuICAgICAgICAgIGVycm9yLnBhdGggPSBgJHtlcnJvci5wYXRofSR7ZXJyb3IucGFyYW1zWzBdfWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXREZWZpbml0aW9uKHNjaGVtYTogYW55LCByZWY6IHN0cmluZykge1xuICAgIGxldCBmb3VuZFNjaGVtYSA9IHNjaGVtYTtcbiAgICByZWYuc3BsaXQoJy8nKS5zbGljZSgxKS5mb3JFYWNoKHB0ciA9PiB7XG4gICAgICBpZiAocHRyKSB7XG4gICAgICAgIGZvdW5kU2NoZW1hID0gZm91bmRTY2hlbWFbcHRyXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZm91bmRTY2hlbWE7XG4gIH1cbn1cblxuIiwiZXhwb3J0IGNsYXNzIFdpZGdldFJlZ2lzdHJ5IHtcblxuICBwcml2YXRlIHdpZGdldHM6IHsgW3R5cGU6IHN0cmluZ106IGFueSB9ID0ge307XG5cbiAgcHJpdmF0ZSBkZWZhdWx0V2lkZ2V0OiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBzZXREZWZhdWx0V2lkZ2V0KHdpZGdldDogYW55KSB7XG4gICAgdGhpcy5kZWZhdWx0V2lkZ2V0ID0gd2lkZ2V0O1xuICB9XG5cbiAgZ2V0RGVmYXVsdFdpZGdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZhdWx0V2lkZ2V0O1xuICB9XG5cbiAgaGFzV2lkZ2V0KHR5cGU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLndpZGdldHMuaGFzT3duUHJvcGVydHkodHlwZSk7XG4gIH1cblxuICByZWdpc3Rlcih0eXBlOiBzdHJpbmcsIHdpZGdldDogYW55KSB7XG4gICAgdGhpcy53aWRnZXRzW3R5cGVdID0gd2lkZ2V0O1xuICB9XG5cbiAgZ2V0V2lkZ2V0VHlwZSh0eXBlOiBzdHJpbmcpOiBhbnkge1xuICAgIGlmICh0aGlzLmhhc1dpZGdldCh0eXBlKSkge1xuICAgICAgcmV0dXJuIHRoaXMud2lkZ2V0c1t0eXBlXTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdFdpZGdldDtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgQ29tcG9uZW50UmVmLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIEluamVjdGFibGVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFdpZGdldFJlZ2lzdHJ5IH0gZnJvbSAnLi93aWRnZXRyZWdpc3RyeSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXaWRnZXRGYWN0b3J5IHtcblxuICBwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI7XG4gIHByaXZhdGUgcmVnaXN0cnk6IFdpZGdldFJlZ2lzdHJ5O1xuXG4gIGNvbnN0cnVjdG9yKHJlZ2lzdHJ5OiBXaWRnZXRSZWdpc3RyeSwgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge1xuICAgIHRoaXMucmVnaXN0cnkgPSByZWdpc3RyeTtcbiAgICB0aGlzLnJlc29sdmVyID0gcmVzb2x2ZXI7XG4gIH1cblxuICBjcmVhdGVXaWRnZXQoY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLCB0eXBlOiBzdHJpbmcpOiBDb21wb25lbnRSZWY8YW55PiB7XG4gICAgbGV0IGNvbXBvbmVudENsYXNzID0gdGhpcy5yZWdpc3RyeS5nZXRXaWRnZXRUeXBlKHR5cGUpO1xuXG4gICAgbGV0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudENsYXNzKTtcbiAgICByZXR1cm4gY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGVybWluYXRvclNlcnZpY2Uge1xuICBwdWJsaWMgb25EZXN0cm95OiBTdWJqZWN0PGJvb2xlYW4+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMub25EZXN0cm95ID0gbmV3IFN1YmplY3QoKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5vbkRlc3Ryb3kubmV4dCh0cnVlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgT25DaGFuZ2VzLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7QWN0aW9ufSBmcm9tICcuL21vZGVsL2FjdGlvbic7XG5pbXBvcnQge0FjdGlvblJlZ2lzdHJ5fSBmcm9tICcuL21vZGVsL2FjdGlvbnJlZ2lzdHJ5JztcbmltcG9ydCB7Rm9ybVByb3BlcnR5fSBmcm9tICcuL21vZGVsL2Zvcm1wcm9wZXJ0eSc7XG5pbXBvcnQge0Zvcm1Qcm9wZXJ0eUZhY3Rvcnl9IGZyb20gJy4vbW9kZWwvZm9ybXByb3BlcnR5ZmFjdG9yeSc7XG5pbXBvcnQge1NjaGVtYVByZXByb2Nlc3Nvcn0gZnJvbSAnLi9tb2RlbC9zY2hlbWFwcmVwcm9jZXNzb3InO1xuaW1wb3J0IHtWYWxpZGF0b3JSZWdpc3RyeX0gZnJvbSAnLi9tb2RlbC92YWxpZGF0b3JyZWdpc3RyeSc7XG5pbXBvcnQge1ZhbGlkYXRvcn0gZnJvbSAnLi9tb2RlbC92YWxpZGF0b3InO1xuaW1wb3J0IHtCaW5kaW5nfSBmcm9tICcuL21vZGVsL2JpbmRpbmcnO1xuaW1wb3J0IHtCaW5kaW5nUmVnaXN0cnl9IGZyb20gJy4vbW9kZWwvYmluZGluZ3JlZ2lzdHJ5JztcblxuaW1wb3J0IHtTY2hlbWFWYWxpZGF0b3JGYWN0b3J5fSBmcm9tICcuL3NjaGVtYXZhbGlkYXRvcmZhY3RvcnknO1xuaW1wb3J0IHtXaWRnZXRGYWN0b3J5fSBmcm9tICcuL3dpZGdldGZhY3RvcnknO1xuaW1wb3J0IHtUZXJtaW5hdG9yU2VydmljZX0gZnJvbSAnLi90ZXJtaW5hdG9yLnNlcnZpY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlRmFjdG9yeShzY2hlbWFWYWxpZGF0b3JGYWN0b3J5LCB2YWxpZGF0b3JSZWdpc3RyeSkge1xuICByZXR1cm4gbmV3IEZvcm1Qcm9wZXJ0eUZhY3Rvcnkoc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSwgdmFsaWRhdG9yUmVnaXN0cnkpO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1mb3JtJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8Zm9ybT5cbiAgICAgIDxzZi1mb3JtLWVsZW1lbnRcbiAgICAgICAgKm5nSWY9XCJyb290UHJvcGVydHlcIiBbZm9ybVByb3BlcnR5XT1cInJvb3RQcm9wZXJ0eVwiPjwvc2YtZm9ybS1lbGVtZW50PlxuICAgIDwvZm9ybT5gLFxuICBwcm92aWRlcnM6IFtcbiAgICBBY3Rpb25SZWdpc3RyeSxcbiAgICBWYWxpZGF0b3JSZWdpc3RyeSxcbiAgICBCaW5kaW5nUmVnaXN0cnksXG4gICAgU2NoZW1hUHJlcHJvY2Vzc29yLFxuICAgIFdpZGdldEZhY3RvcnksXG4gICAge1xuICAgICAgcHJvdmlkZTogRm9ybVByb3BlcnR5RmFjdG9yeSxcbiAgICAgIHVzZUZhY3Rvcnk6IHVzZUZhY3RvcnksXG4gICAgICBkZXBzOiBbU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSwgVmFsaWRhdG9yUmVnaXN0cnldXG4gICAgfSxcbiAgICBUZXJtaW5hdG9yU2VydmljZSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBGb3JtQ29tcG9uZW50LFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gIEBJbnB1dCgpIHNjaGVtYTogYW55ID0gbnVsbDtcblxuICBASW5wdXQoKSBtb2RlbDogYW55O1xuXG4gIEBJbnB1dCgpIGFjdGlvbnM6IHsgW2FjdGlvbklkOiBzdHJpbmddOiBBY3Rpb24gfSA9IHt9O1xuXG4gIEBJbnB1dCgpIHZhbGlkYXRvcnM6IHsgW3BhdGg6IHN0cmluZ106IFZhbGlkYXRvciB9ID0ge307XG5cbiAgQElucHV0KCkgYmluZGluZ3M6IHsgW3BhdGg6IHN0cmluZ106IEJpbmRpbmcgfSA9IHt9O1xuXG4gIEBPdXRwdXQoKSBvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8eyB2YWx1ZTogYW55IH0+KCk7XG5cbiAgQE91dHB1dCgpIG1vZGVsQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQE91dHB1dCgpIGlzVmFsaWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQE91dHB1dCgpIG9uRXJyb3JDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHsgdmFsdWU6IGFueVtdIH0+KCk7XG5cbiAgQE91dHB1dCgpIG9uRXJyb3JzQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx7dmFsdWU6IGFueX0+KCk7XG5cbiAgcm9vdFByb3BlcnR5OiBGb3JtUHJvcGVydHkgPSBudWxsO1xuXG4gIHByaXZhdGUgb25DaGFuZ2VDYWxsYmFjazogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZm9ybVByb3BlcnR5RmFjdG9yeTogRm9ybVByb3BlcnR5RmFjdG9yeSxcbiAgICBwcml2YXRlIGFjdGlvblJlZ2lzdHJ5OiBBY3Rpb25SZWdpc3RyeSxcbiAgICBwcml2YXRlIHZhbGlkYXRvclJlZ2lzdHJ5OiBWYWxpZGF0b3JSZWdpc3RyeSxcbiAgICBwcml2YXRlIGJpbmRpbmdSZWdpc3RyeTogQmluZGluZ1JlZ2lzdHJ5LFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHRlcm1pbmF0b3I6IFRlcm1pbmF0b3JTZXJ2aWNlXG4gICkgeyB9XG5cbiAgd3JpdGVWYWx1ZShvYmo6IGFueSkge1xuICAgIGlmICh0aGlzLnJvb3RQcm9wZXJ0eSkge1xuICAgICAgdGhpcy5yb290UHJvcGVydHkucmVzZXQob2JqLCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrID0gZm47XG4gICAgaWYgKHRoaXMucm9vdFByb3BlcnR5KSB7XG4gICAgICB0aGlzLnJvb3RQcm9wZXJ0eS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKFxuICAgICAgICB0aGlzLm9uVmFsdWVDaGFuZ2VzLmJpbmQodGhpcylcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLy8gVE9ETyBpbXBsZW1lbnRcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xuICB9XG5cbiAgLy8gVE9ETyBpbXBsZW1lbnRcbiAgLy8gc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKT86IHZvaWRcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMudmFsaWRhdG9ycykge1xuICAgICAgdGhpcy5zZXRWYWxpZGF0b3JzKCk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMuYWN0aW9ucykge1xuICAgICAgdGhpcy5zZXRBY3Rpb25zKCk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMuYmluZGluZ3MpIHtcbiAgICAgIHRoaXMuc2V0QmluZGluZ3MoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zY2hlbWEgJiYgIXRoaXMuc2NoZW1hLnR5cGUpIHtcbiAgICAgIHRoaXMuc2NoZW1hLnR5cGUgPSAnb2JqZWN0JztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zY2hlbWEgJiYgY2hhbmdlcy5zY2hlbWEpIHtcbiAgICAgIGlmICghY2hhbmdlcy5zY2hlbWEuZmlyc3RDaGFuZ2UpIHtcbiAgICAgICAgdGhpcy50ZXJtaW5hdG9yLmRlc3Ryb3koKTtcbiAgICAgIH1cblxuICAgICAgU2NoZW1hUHJlcHJvY2Vzc29yLnByZXByb2Nlc3ModGhpcy5zY2hlbWEpO1xuICAgICAgdGhpcy5yb290UHJvcGVydHkgPSB0aGlzLmZvcm1Qcm9wZXJ0eUZhY3RvcnkuY3JlYXRlUHJvcGVydHkodGhpcy5zY2hlbWEpO1xuICAgICAgaWYgKHRoaXMubW9kZWwpIHtcbiAgICAgICAgLy8gdGhpcy5yb290UHJvcGVydHkucmVzZXQodGhpcy5tb2RlbCwgZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnJvb3RQcm9wZXJ0eS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKFxuICAgICAgICB0aGlzLm9uVmFsdWVDaGFuZ2VzLmJpbmQodGhpcylcbiAgICAgICk7XG5cbiAgICAgIHRoaXMucm9vdFByb3BlcnR5LmVycm9yc0NoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgICAgdGhpcy5vbkVycm9yQ2hhbmdlLmVtaXQoe3ZhbHVlOiB2YWx1ZX0pO1xuICAgICAgICB0aGlzLmlzVmFsaWQuZW1pdCghKHZhbHVlICYmIHZhbHVlLmxlbmd0aCkpO1xuICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5zY2hlbWEgJiYgKGNoYW5nZXMubW9kZWwgfHwgY2hhbmdlcy5zY2hlbWEgKSkge1xuICAgICAgdGhpcy5yb290UHJvcGVydHkucmVzZXQodGhpcy5tb2RlbCwgZmFsc2UpO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICB9XG5cbiAgcHJpdmF0ZSBzZXRWYWxpZGF0b3JzKCkge1xuICAgIHRoaXMudmFsaWRhdG9yUmVnaXN0cnkuY2xlYXIoKTtcbiAgICBpZiAodGhpcy52YWxpZGF0b3JzKSB7XG4gICAgICBmb3IgKGNvbnN0IHZhbGlkYXRvcklkIGluIHRoaXMudmFsaWRhdG9ycykge1xuICAgICAgICBpZiAodGhpcy52YWxpZGF0b3JzLmhhc093blByb3BlcnR5KHZhbGlkYXRvcklkKSkge1xuICAgICAgICAgIHRoaXMudmFsaWRhdG9yUmVnaXN0cnkucmVnaXN0ZXIodmFsaWRhdG9ySWQsIHRoaXMudmFsaWRhdG9yc1t2YWxpZGF0b3JJZF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRBY3Rpb25zKCkge1xuICAgIHRoaXMuYWN0aW9uUmVnaXN0cnkuY2xlYXIoKTtcbiAgICBpZiAodGhpcy5hY3Rpb25zKSB7XG4gICAgICBmb3IgKGNvbnN0IGFjdGlvbklkIGluIHRoaXMuYWN0aW9ucykge1xuICAgICAgICBpZiAodGhpcy5hY3Rpb25zLmhhc093blByb3BlcnR5KGFjdGlvbklkKSkge1xuICAgICAgICAgIHRoaXMuYWN0aW9uUmVnaXN0cnkucmVnaXN0ZXIoYWN0aW9uSWQsIHRoaXMuYWN0aW9uc1thY3Rpb25JZF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRCaW5kaW5ncygpIHtcbiAgICB0aGlzLmJpbmRpbmdSZWdpc3RyeS5jbGVhcigpO1xuICAgIGlmICh0aGlzLmJpbmRpbmdzKSB7XG4gICAgICBmb3IgKGNvbnN0IGJpbmRpbmdQYXRoIGluIHRoaXMuYmluZGluZ3MpIHtcbiAgICAgICAgaWYgKHRoaXMuYmluZGluZ3MuaGFzT3duUHJvcGVydHkoYmluZGluZ1BhdGgpKSB7XG4gICAgICAgICAgdGhpcy5iaW5kaW5nUmVnaXN0cnkucmVnaXN0ZXIoYmluZGluZ1BhdGgsIHRoaXMuYmluZGluZ3NbYmluZGluZ1BhdGhdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZXNldCgpIHtcbiAgICB0aGlzLnJvb3RQcm9wZXJ0eS5yZXNldChudWxsLCB0cnVlKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0TW9kZWwodmFsdWU6IGFueSkge1xuICAgIGlmICh0aGlzLm1vZGVsKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMubW9kZWwsIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb2RlbCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb25WYWx1ZUNoYW5nZXModmFsdWUpIHtcbiAgICBpZiAodGhpcy5vbkNoYW5nZUNhbGxiYWNrKSB7XG4gICAgICB0aGlzLnNldE1vZGVsKHZhbHVlKTtcbiAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh2YWx1ZSk7XG4gICAgfVxuXG4gICAgLy8gdHdvIHdheSBiaW5kaW5nIGlzIHVzZWRcbiAgICBpZiAodGhpcy5tb2RlbENoYW5nZS5vYnNlcnZlcnMubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKCF0aGlzLm9uQ2hhbmdlQ2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5zZXRNb2RlbCh2YWx1ZSk7XG4gICAgICB9XG4gICAgICB0aGlzLm1vZGVsQ2hhbmdlLmVtaXQodmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoe3ZhbHVlOiB2YWx1ZX0pO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsIEVsZW1lbnRSZWYsXG4gIElucHV0LCBPbkRlc3Ryb3ksXG4gIE9uSW5pdCwgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBGb3JtQ29udHJvbFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7V2lkZ2V0fSBmcm9tICcuL3dpZGdldCc7XG5cbmltcG9ydCB7QWN0aW9uUmVnaXN0cnl9IGZyb20gJy4vbW9kZWwvYWN0aW9ucmVnaXN0cnknO1xuaW1wb3J0IHtGb3JtUHJvcGVydHl9IGZyb20gJy4vbW9kZWwvZm9ybXByb3BlcnR5JztcbmltcG9ydCB7QmluZGluZ1JlZ2lzdHJ5fSBmcm9tICcuL21vZGVsL2JpbmRpbmdyZWdpc3RyeSc7XG5pbXBvcnQge0JpbmRpbmd9IGZyb20gJy4vbW9kZWwvYmluZGluZyc7XG5pbXBvcnQge0Z1bmN0aW9ufSBmcm9tICdlc3RyZWUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1mb3JtLWVsZW1lbnQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgKm5nSWY9XCJmb3JtUHJvcGVydHkudmlzaWJsZVwiXG4gICAgICAgICBbY2xhc3MuaGFzLWVycm9yXT1cIiFjb250cm9sLnZhbGlkXCJcbiAgICAgICAgIFtjbGFzcy5oYXMtc3VjY2Vzc109XCJjb250cm9sLnZhbGlkXCI+XG4gICAgICA8c2Ytd2lkZ2V0LWNob29zZXJcbiAgICAgICAgKHdpZGdldEluc3RhbmNpYXRlZCk9XCJvbldpZGdldEluc3RhbmNpYXRlZCgkZXZlbnQpXCJcbiAgICAgICAgW3dpZGdldEluZm9dPVwiZm9ybVByb3BlcnR5LnNjaGVtYS53aWRnZXRcIj5cbiAgICAgIDwvc2Ytd2lkZ2V0LWNob29zZXI+XG4gICAgICA8c2YtZm9ybS1lbGVtZW50LWFjdGlvbiAqbmdGb3I9XCJsZXQgYnV0dG9uIG9mIGJ1dHRvbnNcIiBbYnV0dG9uXT1cImJ1dHRvblwiIFtmb3JtUHJvcGVydHldPVwiZm9ybVByb3BlcnR5XCI+PC9zZi1mb3JtLWVsZW1lbnQtYWN0aW9uPlxuICAgIDwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUVsZW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgY291bnRlciA9IDA7XG5cbiAgQElucHV0KCkgZm9ybVByb3BlcnR5OiBGb3JtUHJvcGVydHk7XG4gIGNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnLCAoKSA9PiBudWxsKTtcblxuICB3aWRnZXQ6IFdpZGdldDxhbnk+ID0gbnVsbDtcblxuICBidXR0b25zID0gW107XG5cbiAgdW5saXN0ZW4gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvblJlZ2lzdHJ5OiBBY3Rpb25SZWdpc3RyeSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBiaW5kaW5nUmVnaXN0cnk6IEJpbmRpbmdSZWdpc3RyeSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucGFyc2VCdXR0b25zKCk7XG4gICAgdGhpcy5zZXR1cEJpbmRpbmdzKCk7XG4gIH1cblxuICBwcml2YXRlIHNldHVwQmluZGluZ3MoKSB7XG4gICAgY29uc3QgYmluZGluZ3M6IEJpbmRpbmdbXSA9IHRoaXMuYmluZGluZ1JlZ2lzdHJ5LmdldCh0aGlzLmZvcm1Qcm9wZXJ0eS5wYXRoKTtcbiAgICBpZiAoKGJpbmRpbmdzIHx8IFtdKS5sZW5ndGgpIHtcbiAgICAgIGJpbmRpbmdzLmZvckVhY2goKGJpbmRpbmcpID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBldmVudElkIGluIGJpbmRpbmcpIHtcbiAgICAgICAgICB0aGlzLmNyZWF0ZUJpbmRpbmcoZXZlbnRJZCwgYmluZGluZ1tldmVudElkXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlQmluZGluZyhldmVudElkLCBsaXN0ZW5lcikge1xuICAgIHRoaXMudW5saXN0ZW4ucHVzaCh0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgIGV2ZW50SWQsXG4gICAgICAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGxpc3RlbmVyIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgICBsaXN0ZW5lcihldmVudCwgdGhpcy5mb3JtUHJvcGVydHkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUud2FybignQ2FsbGluZyBub24gZnVuY3Rpb24gaGFuZGxlciBmb3IgZXZlbnRJZCAnICsgZXZlbnRJZCArICcgZm9yIHBhdGggJyArIHRoaXMuZm9ybVByb3BlcnR5LnBhdGgpO1xuICAgICAgICB9XG4gICAgICB9KSk7XG4gIH1cblxuICBwcml2YXRlIHBhcnNlQnV0dG9ucygpIHtcbiAgICBpZiAodGhpcy5mb3JtUHJvcGVydHkuc2NoZW1hLmJ1dHRvbnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5idXR0b25zID0gdGhpcy5mb3JtUHJvcGVydHkuc2NoZW1hLmJ1dHRvbnM7XG5cbiAgICAgIGZvciAobGV0IGJ1dHRvbiBvZiB0aGlzLmJ1dHRvbnMpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVCdXR0b25DYWxsYmFjayhidXR0b24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlQnV0dG9uQ2FsbGJhY2soYnV0dG9uKSB7XG4gICAgYnV0dG9uLmFjdGlvbiA9IChlKSA9PiB7XG4gICAgICBsZXQgYWN0aW9uO1xuICAgICAgaWYgKGJ1dHRvbi5pZCAmJiAoYWN0aW9uID0gdGhpcy5hY3Rpb25SZWdpc3RyeS5nZXQoYnV0dG9uLmlkKSkpIHtcbiAgICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICAgIGFjdGlvbih0aGlzLmZvcm1Qcm9wZXJ0eSwgYnV0dG9uLnBhcmFtZXRlcnMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfTtcbiAgfVxuXG4gIG9uV2lkZ2V0SW5zdGFuY2lhdGVkKHdpZGdldDogV2lkZ2V0PGFueT4pIHtcbiAgICB0aGlzLndpZGdldCA9IHdpZGdldDtcbiAgICBsZXQgaWQgPSAnZmllbGQnICsgKEZvcm1FbGVtZW50Q29tcG9uZW50LmNvdW50ZXIrKyk7XG5cbiAgICB0aGlzLndpZGdldC5mb3JtUHJvcGVydHkgPSB0aGlzLmZvcm1Qcm9wZXJ0eTtcbiAgICB0aGlzLndpZGdldC5zY2hlbWEgPSB0aGlzLmZvcm1Qcm9wZXJ0eS5zY2hlbWE7XG4gICAgdGhpcy53aWRnZXQubmFtZSA9IGlkO1xuICAgIHRoaXMud2lkZ2V0LmlkID0gaWQ7XG4gICAgdGhpcy53aWRnZXQuY29udHJvbCA9IHRoaXMuY29udHJvbDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVubGlzdGVuKSB7XG4gICAgICB0aGlzLnVubGlzdGVuLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaXRlbSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ29tcG9uZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95XG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1dpZGdldEZhY3Rvcnl9IGZyb20gXCIuL3dpZGdldGZhY3RvcnlcIjtcbmltcG9ydCB7VGVybWluYXRvclNlcnZpY2V9IGZyb20gXCIuL3Rlcm1pbmF0b3Iuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1mb3JtLWVsZW1lbnQtYWN0aW9uJyxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGUgI3RhcmdldD48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUVsZW1lbnRDb21wb25lbnRBY3Rpb24gaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICBASW5wdXQoKVxuICBidXR0b246IGFueTtcblxuICBASW5wdXQoKVxuICBmb3JtUHJvcGVydHk6IGFueTtcblxuICBAVmlld0NoaWxkKCd0YXJnZXQnLCB7cmVhZDogVmlld0NvbnRhaW5lclJlZn0pIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcblxuICBwcml2YXRlIHJlZjogQ29tcG9uZW50UmVmPGFueT47XG4gIHByaXZhdGUgc3ViczogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgd2lkZ2V0RmFjdG9yeTogV2lkZ2V0RmFjdG9yeSA9IG51bGwsXG4gICAgICAgICAgICAgIHByaXZhdGUgdGVybWluYXRvcjogVGVybWluYXRvclNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3VicyA9IHRoaXMudGVybWluYXRvci5vbkRlc3Ryb3kuc3Vic2NyaWJlKGRlc3Ryb3kgPT4ge1xuICAgICAgaWYgKGRlc3Ryb3kpIHtcbiAgICAgICAgdGhpcy5yZWYuZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5yZWYgPSB0aGlzLndpZGdldEZhY3RvcnkuY3JlYXRlV2lkZ2V0KHRoaXMuY29udGFpbmVyLCB0aGlzLmJ1dHRvbi53aWRnZXQgfHwgJ2J1dHRvbicpO1xuICAgIHRoaXMucmVmLmluc3RhbmNlLmJ1dHRvbiA9IHRoaXMuYnV0dG9uO1xuICAgIHRoaXMucmVmLmluc3RhbmNlLmZvcm1Qcm9wZXJ0eSA9IHRoaXMuZm9ybVByb3BlcnR5O1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJzLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ29tcG9uZW50UmVmLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUZXJtaW5hdG9yU2VydmljZSB9IGZyb20gJy4vdGVybWluYXRvci5zZXJ2aWNlJztcbmltcG9ydCB7IFdpZGdldEZhY3RvcnkgfSBmcm9tICcuL3dpZGdldGZhY3RvcnknO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2Ytd2lkZ2V0LWNob29zZXInLFxuICB0ZW1wbGF0ZTogYDxkaXYgI3RhcmdldD48L2Rpdj5gLFxufSlcbmV4cG9ydCBjbGFzcyBXaWRnZXRDaG9vc2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cbiAgQElucHV0KCkgd2lkZ2V0SW5mbzogYW55O1xuXG4gIEBPdXRwdXQoKSB3aWRnZXRJbnN0YW5jaWF0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBAVmlld0NoaWxkKCd0YXJnZXQnLCB7cmVhZDogVmlld0NvbnRhaW5lclJlZn0pIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcblxuICBwcml2YXRlIHdpZGdldEluc3RhbmNlOiBhbnk7XG4gIHByaXZhdGUgcmVmOiBDb21wb25lbnRSZWY8YW55PjtcbiAgcHJpdmF0ZSBzdWJzOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB3aWRnZXRGYWN0b3J5OiBXaWRnZXRGYWN0b3J5ID0gbnVsbCxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSB0ZXJtaW5hdG9yOiBUZXJtaW5hdG9yU2VydmljZSxcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN1YnMgPSB0aGlzLnRlcm1pbmF0b3Iub25EZXN0cm95LnN1YnNjcmliZShkZXN0cm95ID0+IHtcbiAgICAgIGlmIChkZXN0cm95KSB7XG4gICAgICAgIHRoaXMucmVmLmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMucmVmID0gdGhpcy53aWRnZXRGYWN0b3J5LmNyZWF0ZVdpZGdldCh0aGlzLmNvbnRhaW5lciwgdGhpcy53aWRnZXRJbmZvLmlkKTtcbiAgICB0aGlzLndpZGdldEluc3RhbmNpYXRlZC5lbWl0KHRoaXMucmVmLmluc3RhbmNlKTtcbiAgICB0aGlzLndpZGdldEluc3RhbmNlID0gdGhpcy5yZWYuaW5zdGFuY2U7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJzLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7QWZ0ZXJWaWV3SW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7QXJyYXlQcm9wZXJ0eX0gZnJvbSAnLi9tb2RlbC9hcnJheXByb3BlcnR5JztcbmltcG9ydCB7Rm9ybVByb3BlcnR5fSBmcm9tICcuL21vZGVsL2Zvcm1wcm9wZXJ0eSc7XG5pbXBvcnQge09iamVjdFByb3BlcnR5fSBmcm9tICcuL21vZGVsL29iamVjdHByb3BlcnR5JztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFdpZGdldDxUIGV4dGVuZHMgRm9ybVByb3BlcnR5PiB7XG4gIGZvcm1Qcm9wZXJ0eTogVDtcbiAgY29udHJvbDogRm9ybUNvbnRyb2w7XG4gIGVycm9yTWVzc2FnZXM6IHN0cmluZ1tdO1xuXG4gIGlkOiBzdHJpbmcgPSAnJztcbiAgbmFtZTogc3RyaW5nID0gJyc7XG4gIHNjaGVtYTogYW55ID0ge307XG59XG5cbmV4cG9ydCBjbGFzcyBDb250cm9sV2lkZ2V0IGV4dGVuZHMgV2lkZ2V0PEZvcm1Qcm9wZXJ0eT4gaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuY29udHJvbDtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKChuZXdWYWx1ZSkgPT4ge1xuICAgICAgaWYgKGNvbnRyb2wudmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgIGNvbnRyb2wuc2V0VmFsdWUobmV3VmFsdWUsIHtlbWl0RXZlbnQ6IGZhbHNlfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkuZXJyb3JzQ2hhbmdlcy5zdWJzY3JpYmUoKGVycm9ycykgPT4ge1xuICAgICAgY29udHJvbC5zZXRFcnJvcnMoZXJyb3JzLCB7IGVtaXRFdmVudDogdHJ1ZSB9KTtcbiAgICAgIGNvbnN0IG1lc3NhZ2VzID0gKGVycm9ycyB8fCBbXSlcbiAgICAgICAgLmZpbHRlcihlID0+IHtcbiAgICAgICAgICByZXR1cm4gZS5wYXRoICYmIGUucGF0aC5zbGljZSgxKSA9PT0gdGhpcy5mb3JtUHJvcGVydHkucGF0aDtcbiAgICAgICAgfSlcbiAgICAgICAgLm1hcChlID0+IGUubWVzc2FnZSk7XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZXMgPSBtZXNzYWdlcy5maWx0ZXIoKG0sIGkpID0+IG1lc3NhZ2VzLmluZGV4T2YobSkgPT09IGkpO1xuICAgIH0pO1xuICAgIGNvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgobmV3VmFsdWUpID0+IHtcbiAgICAgIHRoaXMuZm9ybVByb3BlcnR5LnNldFZhbHVlKG5ld1ZhbHVlLCBmYWxzZSk7XG4gICAgfSk7XG4gIH1cblxufVxuXG5leHBvcnQgY2xhc3MgQXJyYXlMYXlvdXRXaWRnZXQgZXh0ZW5kcyBXaWRnZXQ8QXJyYXlQcm9wZXJ0eT4gaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuY29udHJvbDtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5lcnJvcnNDaGFuZ2VzLnN1YnNjcmliZSgoZXJyb3JzKSA9PiB7XG4gICAgICBjb250cm9sLnNldEVycm9ycyhlcnJvcnMsIHtlbWl0RXZlbnQ6IHRydWV9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgT2JqZWN0TGF5b3V0V2lkZ2V0IGV4dGVuZHMgV2lkZ2V0PE9iamVjdFByb3BlcnR5PiBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5jb250cm9sO1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LmVycm9yc0NoYW5nZXMuc3Vic2NyaWJlKChlcnJvcnMpID0+IHtcbiAgICAgIGNvbnRyb2wuc2V0RXJyb3JzKGVycm9ycywge2VtaXRFdmVudDogdHJ1ZX0pO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQXJyYXlMYXlvdXRXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1hcnJheS13aWRnZXQnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJ3aWRnZXQgZm9ybS1ncm91cFwiPlxuXHQ8bGFiZWwgW2F0dHIuZm9yXT1cImlkXCIgY2xhc3M9XCJob3Jpem9udGFsIGNvbnRyb2wtbGFiZWxcIj5cblx0XHR7eyBzY2hlbWEudGl0bGUgfX1cblx0PC9sYWJlbD5cblx0PHNwYW4gKm5nSWY9XCJzY2hlbWEuZGVzY3JpcHRpb25cIiBjbGFzcz1cImZvcm1IZWxwXCI+e3tzY2hlbWEuZGVzY3JpcHRpb259fTwvc3Bhbj5cblx0PGRpdiAqbmdGb3I9XCJsZXQgaXRlbVByb3BlcnR5IG9mIGZvcm1Qcm9wZXJ0eS5wcm9wZXJ0aWVzOyBsZXQgaT1pbmRleDsgdHJhY2tCeTp0cmFja0J5SW5kZXhcIj5cblx0XHQ8c2YtZm9ybS1lbGVtZW50IFtmb3JtUHJvcGVydHldPVwiaXRlbVByb3BlcnR5XCI+PC9zZi1mb3JtLWVsZW1lbnQ+XG5cdFx0PGJ1dHRvbiAoY2xpY2spPVwicmVtb3ZlSXRlbShpKVwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGFycmF5LXJlbW92ZS1idXR0b25cIj5cblx0XHRcdDxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1taW51c1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj4gUmVtb3ZlXG5cdFx0PC9idXR0b24+XG5cdDwvZGl2PlxuXHQ8YnV0dG9uIChjbGljayk9XCJhZGRJdGVtKClcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBhcnJheS1hZGQtYnV0dG9uXCI+XG5cdFx0PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXBsdXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+IEFkZFxuXHQ8L2J1dHRvbj5cbjwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgQXJyYXlXaWRnZXQgZXh0ZW5kcyBBcnJheUxheW91dFdpZGdldCB7XG5cbiAgYWRkSXRlbSgpIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5hZGRJdGVtKCk7XG4gIH1cblxuICByZW1vdmVJdGVtKGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5yZW1vdmVJdGVtKGluZGV4KTtcbiAgfVxuXG4gIHRyYWNrQnlJbmRleChpbmRleDogbnVtYmVyLCBpdGVtOiBhbnkpIHtcbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1idXR0b24td2lkZ2V0JyxcbiAgdGVtcGxhdGU6ICc8YnV0dG9uIChjbGljayk9XCJidXR0b24uYWN0aW9uKCRldmVudClcIj57e2J1dHRvbi5sYWJlbH19PC9idXR0b24+J1xufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25XaWRnZXQge1xuICBwdWJsaWMgYnV0dG9uXG4gIHB1YmxpYyBmb3JtUHJvcGVydHlcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPYmplY3RMYXlvdXRXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1mb3JtLW9iamVjdCcsXG4gIHRlbXBsYXRlOiBgPGZpZWxkc2V0ICpuZ0Zvcj1cImxldCBmaWVsZHNldCBvZiBmb3JtUHJvcGVydHkuc2NoZW1hLmZpZWxkc2V0c1wiPlxuXHQ8bGVnZW5kICpuZ0lmPVwiZmllbGRzZXQudGl0bGVcIj57e2ZpZWxkc2V0LnRpdGxlfX08L2xlZ2VuZD5cblx0PGRpdiAqbmdJZj1cImZpZWxkc2V0LmRlc2NyaXB0aW9uXCI+e3tmaWVsZHNldC5kZXNjcmlwdGlvbn19PC9kaXY+XG5cdDxkaXYgKm5nRm9yPVwibGV0IGZpZWxkSWQgb2YgZmllbGRzZXQuZmllbGRzXCI+XG5cdFx0PHNmLWZvcm0tZWxlbWVudCBbZm9ybVByb3BlcnR5XT1cImZvcm1Qcm9wZXJ0eS5nZXRQcm9wZXJ0eShmaWVsZElkKVwiPjwvc2YtZm9ybS1lbGVtZW50PlxuXHQ8L2Rpdj5cbjwvZmllbGRzZXQ+YFxufSlcbmV4cG9ydCBjbGFzcyBPYmplY3RXaWRnZXQgZXh0ZW5kcyBPYmplY3RMYXlvdXRXaWRnZXQgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLWNoZWNrYm94LXdpZGdldCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIndpZGdldCBmb3JtLWdyb3VwXCI+XG4gICAgPGxhYmVsIFthdHRyLmZvcl09XCJpZFwiIGNsYXNzPVwiaG9yaXpvbnRhbCBjb250cm9sLWxhYmVsXCI+XG4gICAgICAgIHt7IHNjaGVtYS50aXRsZSB9fVxuICAgIDwvbGFiZWw+XG5cdDxkaXYgKm5nSWY9XCJzY2hlbWEudHlwZSE9J2FycmF5J1wiIGNsYXNzPVwiY2hlY2tib3hcIj5cblx0XHQ8bGFiZWwgY2xhc3M9XCJob3Jpem9udGFsIGNvbnRyb2wtbGFiZWxcIj5cblx0XHRcdDxpbnB1dCBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiIFthdHRyLm5hbWVdPVwibmFtZVwiIFtpbmRldGVybWluYXRlXT1cImNvbnRyb2wudmFsdWUgIT09IGZhbHNlICYmIGNvbnRyb2wudmFsdWUgIT09IHRydWUgPyB0cnVlIDpudWxsXCIgdHlwZT1cImNoZWNrYm94XCIgW2F0dHIuZGlzYWJsZWRdPVwic2NoZW1hLnJlYWRPbmx5XCI+XG5cdFx0XHQ8aW5wdXQgKm5nSWY9XCJzY2hlbWEucmVhZE9ubHlcIiBbYXR0ci5uYW1lXT1cIm5hbWVcIiB0eXBlPVwiaGlkZGVuXCIgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIj5cblx0XHRcdHt7c2NoZW1hLmRlc2NyaXB0aW9ufX1cblx0XHQ8L2xhYmVsPlxuXHQ8L2Rpdj5cblx0PG5nLWNvbnRhaW5lciAqbmdJZj1cInNjaGVtYS50eXBlPT09J2FycmF5J1wiPlxuXHRcdDxkaXYgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBzY2hlbWEuaXRlbXMub25lT2ZcIiBjbGFzcz1cImNoZWNrYm94XCI+XG5cdFx0XHQ8bGFiZWwgY2xhc3M9XCJob3Jpem9udGFsIGNvbnRyb2wtbGFiZWxcIj5cblx0XHRcdFx0PGlucHV0IFthdHRyLm5hbWVdPVwibmFtZVwiXG5cdFx0XHRcdFx0dmFsdWU9XCJ7e29wdGlvbi5lbnVtWzBdfX1cIiB0eXBlPVwiY2hlY2tib3hcIiBcblx0XHRcdFx0XHRbYXR0ci5kaXNhYmxlZF09XCJzY2hlbWEucmVhZE9ubHlcIlxuXHRcdFx0XHRcdChjaGFuZ2UpPVwib25DaGVjaygkZXZlbnQudGFyZ2V0KVwiXG5cdFx0XHRcdFx0W2F0dHIuY2hlY2tlZF09XCJjaGVja2VkW29wdGlvbi5lbnVtWzBdXSA/IHRydWUgOiBudWxsXCI+XG5cdFx0XHRcdHt7b3B0aW9uLmRlc2NyaXB0aW9ufX1cblx0XHRcdDwvbGFiZWw+XG5cdFx0PC9kaXY+XG5cdDwvbmctY29udGFpbmVyPlxuPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2JveFdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuXHRjaGVja2VkOiBhbnkgPSB7fTtcblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0Y29uc3QgY29udHJvbCA9IHRoaXMuY29udHJvbDtcblx0XHR0aGlzLmZvcm1Qcm9wZXJ0eS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKChuZXdWYWx1ZSkgPT4ge1xuXHRcdFx0aWYgKGNvbnRyb2wudmFsdWUgIT09IG5ld1ZhbHVlKSB7XG5cdFx0XHRcdGNvbnRyb2wuc2V0VmFsdWUobmV3VmFsdWUsIHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcblx0XHRcdFx0aWYgKG5ld1ZhbHVlICYmIEFycmF5LmlzQXJyYXkobmV3VmFsdWUpKSB7XG5cdFx0XHRcdFx0bmV3VmFsdWUubWFwKHYgPT4gdGhpcy5jaGVja2VkW3ZdID0gdHJ1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0XHR0aGlzLmZvcm1Qcm9wZXJ0eS5lcnJvcnNDaGFuZ2VzLnN1YnNjcmliZSgoZXJyb3JzKSA9PiB7XG5cdFx0XHRjb250cm9sLnNldEVycm9ycyhlcnJvcnMsIHsgZW1pdEV2ZW50OiB0cnVlIH0pO1xuXHRcdH0pO1xuXHRcdGNvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgobmV3VmFsdWUpID0+IHtcblx0XHRcdHRoaXMuZm9ybVByb3BlcnR5LnNldFZhbHVlKG5ld1ZhbHVlLCBmYWxzZSk7XG5cdFx0fSk7XG5cdH1cblxuXHRvbkNoZWNrKGVsKSB7XG5cdFx0aWYgKGVsLmNoZWNrZWQpIHtcblx0XHRcdHRoaXMuY2hlY2tlZFtlbC52YWx1ZV0gPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkZWxldGUgdGhpcy5jaGVja2VkW2VsLnZhbHVlXTtcblx0XHR9XG5cdFx0dGhpcy5mb3JtUHJvcGVydHkuc2V0VmFsdWUoT2JqZWN0LmtleXModGhpcy5jaGVja2VkKSwgZmFsc2UpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLWZpbGUtd2lkZ2V0JyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwid2lkZ2V0IGZvcm0tZ3JvdXBcIj5cblx0PGxhYmVsIFthdHRyLmZvcl09XCJpZFwiIGNsYXNzPVwiaG9yaXpvbnRhbCBjb250cm9sLWxhYmVsXCI+XG5cdFx0e3sgc2NoZW1hLnRpdGxlIH19XG5cdDwvbGFiZWw+XG4gICAgPHNwYW4gKm5nSWY9XCJzY2hlbWEuZGVzY3JpcHRpb25cIiBjbGFzcz1cImZvcm1IZWxwXCI+e3tzY2hlbWEuZGVzY3JpcHRpb259fTwvc3Bhbj5cbiAgPGlucHV0IFtuYW1lXT1cIm5hbWVcIiBjbGFzcz1cInRleHQtd2lkZ2V0IGZpbGUtd2lkZ2V0XCIgW2F0dHIuaWRdPVwiaWRcIlxuICAgIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCIgdHlwZT1cImZpbGVcIiBbYXR0ci5kaXNhYmxlZF09XCJzY2hlbWEucmVhZE9ubHk/dHJ1ZTpudWxsXCJcbiAgICAoY2hhbmdlKT1cIm9uRmlsZUNoYW5nZSgkZXZlbnQpXCI+XG5cdDxpbnB1dCAqbmdJZj1cInNjaGVtYS5yZWFkT25seVwiIFthdHRyLm5hbWVdPVwibmFtZVwiIHR5cGU9XCJoaWRkZW5cIiBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiPlxuPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBGaWxlV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gIHByb3RlY3RlZCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICBwcm90ZWN0ZWQgZmlsZWRhdGE6IGFueSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgLy8gT1ZFUlJJREUgQ29udHJvbFdpZGdldCBuZ0FmdGVyVmlld0luaXQoKSBhcyBSZWFjdGl2ZUZvcm1zIGRvIG5vdCBoYW5kbGVcbiAgICAvLyBmaWxlIGlucHV0c1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmNvbnRyb2w7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkuZXJyb3JzQ2hhbmdlcy5zdWJzY3JpYmUoKGVycm9ycykgPT4ge1xuICAgICAgY29udHJvbC5zZXRFcnJvcnMoZXJyb3JzLCB7IGVtaXRFdmVudDogdHJ1ZSB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMucmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuZmlsZWRhdGEuZGF0YSA9IGJ0b2EodGhpcy5yZWFkZXIucmVzdWx0KTtcbiAgICAgIHRoaXMuZm9ybVByb3BlcnR5LnNldFZhbHVlKHRoaXMuZmlsZWRhdGEsIGZhbHNlKTtcbiAgICB9O1xuICB9XG5cbiAgb25GaWxlQ2hhbmdlKCRldmVudCkge1xuICAgIGNvbnN0IGZpbGUgPSAkZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xuICAgIHRoaXMuZmlsZWRhdGEuZmlsZW5hbWUgPSBmaWxlLm5hbWU7XG4gICAgdGhpcy5maWxlZGF0YS5zaXplID0gZmlsZS5zaXplO1xuICAgIHRoaXMuZmlsZWRhdGFbJ2NvbnRlbnQtdHlwZSddID0gZmlsZS50eXBlO1xuICAgIHRoaXMuZmlsZWRhdGEuZW5jb2RpbmcgPSAnYmFzZTY0JztcbiAgICB0aGlzLnJlYWRlci5yZWFkQXNCaW5hcnlTdHJpbmcoZmlsZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1pbnRlZ2VyLXdpZGdldCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIndpZGdldCBmb3JtLWdyb3VwXCI+XG5cdDxsYWJlbCBbYXR0ci5mb3JdPVwiaWRcIiBjbGFzcz1cImhvcml6b250YWwgY29udHJvbC1sYWJlbFwiPlxuXHRcdHt7IHNjaGVtYS50aXRsZSB9fVxuXHQ8L2xhYmVsPlxuICA8c3BhbiAqbmdJZj1cInNjaGVtYS5kZXNjcmlwdGlvblwiIGNsYXNzPVwiZm9ybUhlbHBcIj57e3NjaGVtYS5kZXNjcmlwdGlvbn19PC9zcGFuPlxuXHQ8aW5wdXQgW2F0dHIucmVhZG9ubHldPVwic2NoZW1hLnJlYWRPbmx5P3RydWU6bnVsbFwiIFtuYW1lXT1cIm5hbWVcIlxuXHRjbGFzcz1cInRleHQtd2lkZ2V0IGludGVnZXItd2lkZ2V0IGZvcm0tY29udHJvbFwiIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCJcblx0W2F0dHIudHlwZV09XCInbnVtYmVyJ1wiIFthdHRyLm1pbl09XCJzY2hlbWEubWluaW11bVwiIFthdHRyLm1heF09XCJzY2hlbWEubWF4aW11bVwiXG5cdFthdHRyLnBsYWNlaG9sZGVyXT1cInNjaGVtYS5wbGFjZWhvbGRlclwiXG5cdFthdHRyLm1heExlbmd0aF09XCJzY2hlbWEubWF4TGVuZ3RoIHx8IG51bGxcIlxuICBbYXR0ci5taW5MZW5ndGhdPVwic2NoZW1hLm1pbkxlbmd0aCB8fCBudWxsXCI+XG48L2Rpdj5gXG59KVxuZXhwb3J0IGNsYXNzIEludGVnZXJXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IHt9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXRleHRhcmVhLXdpZGdldCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIndpZGdldCBmb3JtLWdyb3VwXCI+XG5cdDxsYWJlbCBbYXR0ci5mb3JdPVwiaWRcIiBjbGFzcz1cImhvcml6b250YWwgY29udHJvbC1sYWJlbFwiPlxuXHRcdHt7IHNjaGVtYS50aXRsZSB9fVxuXHQ8L2xhYmVsPlxuICAgIDxzcGFuICpuZ0lmPVwic2NoZW1hLmRlc2NyaXB0aW9uXCIgY2xhc3M9XCJmb3JtSGVscFwiPnt7c2NoZW1hLmRlc2NyaXB0aW9ufX08L3NwYW4+XG5cdDx0ZXh0YXJlYSBbYXR0ci5yZWFkb25seV09XCJzY2hlbWEucmVhZE9ubHlcIiBbbmFtZV09XCJuYW1lXCJcblx0XHRjbGFzcz1cInRleHQtd2lkZ2V0IHRleHRhcmVhLXdpZGdldCBmb3JtLWNvbnRyb2xcIlxuXHRcdFthdHRyLnBsYWNlaG9sZGVyXT1cInNjaGVtYS5wbGFjZWhvbGRlclwiXG5cdFx0W2F0dHIubWF4TGVuZ3RoXT1cInNjaGVtYS5tYXhMZW5ndGggfHwgbnVsbFwiXG4gICAgW2F0dHIubWluTGVuZ3RoXT1cInNjaGVtYS5taW5MZW5ndGggfHwgbnVsbFwiXG5cdFx0W2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIj48L3RleHRhcmVhPlxuPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBUZXh0QXJlYVdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQge31cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtcmFkaW8td2lkZ2V0JyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwid2lkZ2V0IGZvcm0tZ3JvdXBcIj5cblx0PGxhYmVsPnt7c2NoZW1hLnRpdGxlfX08L2xhYmVsPlxuICAgIDxzcGFuICpuZ0lmPVwic2NoZW1hLmRlc2NyaXB0aW9uXCIgY2xhc3M9XCJmb3JtSGVscFwiPnt7c2NoZW1hLmRlc2NyaXB0aW9ufX08L3NwYW4+XG5cdDxkaXYgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBzY2hlbWEub25lT2ZcIiBjbGFzcz1cInJhZGlvXCI+XG5cdFx0PGxhYmVsIGNsYXNzPVwiaG9yaXpvbnRhbCBjb250cm9sLWxhYmVsXCI+XG5cdFx0XHQ8aW5wdXQgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIiBbYXR0ci5uYW1lXT1cIm5hbWVcIiB2YWx1ZT1cInt7b3B0aW9uLmVudW1bMF19fVwiIHR5cGU9XCJyYWRpb1wiICBbYXR0ci5kaXNhYmxlZF09XCJzY2hlbWEucmVhZE9ubHlcIj5cblx0XHRcdHt7b3B0aW9uLmRlc2NyaXB0aW9ufX1cblx0XHQ8L2xhYmVsPlxuXHQ8L2Rpdj5cblx0PGlucHV0ICpuZ0lmPVwic2NoZW1hLnJlYWRPbmx5XCIgW2F0dHIubmFtZV09XCJuYW1lXCIgdHlwZT1cImhpZGRlblwiIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCI+XG48L2Rpdj5gXG59KVxuZXhwb3J0IGNsYXNzIFJhZGlvV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCB7fVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1yYW5nZS13aWRnZXQnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJ3aWRnZXQgZm9ybS1ncm91cFwiPlxuXHQ8bGFiZWwgW2F0dHIuZm9yXT1cImlkXCIgY2xhc3M9XCJob3Jpem9udGFsIGNvbnRyb2wtbGFiZWxcIj5cblx0XHR7eyBzY2hlbWEudGl0bGUgfX1cblx0PC9sYWJlbD5cbiAgICA8c3BhbiAqbmdJZj1cInNjaGVtYS5kZXNjcmlwdGlvblwiIGNsYXNzPVwiZm9ybUhlbHBcIj57e3NjaGVtYS5kZXNjcmlwdGlvbn19PC9zcGFuPlx0XG5cdDxpbnB1dCBbbmFtZV09XCJuYW1lXCIgY2xhc3M9XCJ0ZXh0LXdpZGdldCByYW5nZS13aWRnZXRcIiBbYXR0ci5pZF09XCJpZFwiXG5cdFtmb3JtQ29udHJvbF09XCJjb250cm9sXCIgW2F0dHIudHlwZV09XCIncmFuZ2UnXCIgW2F0dHIubWluXT1cInNjaGVtYS5taW5pbXVtXCIgW2F0dHIubWF4XT1cInNjaGVtYS5tYXhpbXVtXCIgW2F0dHIuZGlzYWJsZWRdPVwic2NoZW1hLnJlYWRPbmx5P3RydWU6bnVsbFwiID5cblx0PGlucHV0ICpuZ0lmPVwic2NoZW1hLnJlYWRPbmx5XCIgW2F0dHIubmFtZV09XCJuYW1lXCIgdHlwZT1cImhpZGRlblwiPlxuPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBSYW5nZVdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQge31cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnc2Ytc2VsZWN0LXdpZGdldCcsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIndpZGdldCBmb3JtLWdyb3VwXCI+XG5cdDxsYWJlbCBbYXR0ci5mb3JdPVwiaWRcIiBjbGFzcz1cImhvcml6b250YWwgY29udHJvbC1sYWJlbFwiPlxuXHRcdHt7IHNjaGVtYS50aXRsZSB9fVxuXHQ8L2xhYmVsPlxuXG5cdDxzcGFuICpuZ0lmPVwic2NoZW1hLmRlc2NyaXB0aW9uXCIgY2xhc3M9XCJmb3JtSGVscFwiPlxuXHRcdHt7c2NoZW1hLmRlc2NyaXB0aW9ufX1cblx0PC9zcGFuPlxuXG5cdDxzZWxlY3QgKm5nSWY9XCJzY2hlbWEudHlwZSE9J2FycmF5J1wiIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCIgW2F0dHIubmFtZV09XCJuYW1lXCIgW2F0dHIuZGlzYWJsZWRdPVwic2NoZW1hLnJlYWRPbmx5XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cblx0XHQ8b3B0aW9uICpuZ0Zvcj1cImxldCBvcHRpb24gb2Ygc2NoZW1hLm9uZU9mXCIgW25nVmFsdWVdPVwib3B0aW9uLmVudW1bMF1cIiA+e3tvcHRpb24uZGVzY3JpcHRpb259fTwvb3B0aW9uPlxuXHQ8L3NlbGVjdD5cblxuXHQ8c2VsZWN0ICpuZ0lmPVwic2NoZW1hLnR5cGU9PT0nYXJyYXknXCIgbXVsdGlwbGUgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIiBbYXR0ci5uYW1lXT1cIm5hbWVcIiBbYXR0ci5kaXNhYmxlZF09XCJzY2hlbWEucmVhZE9ubHlcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuXHRcdDxvcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBzY2hlbWEuaXRlbXMub25lT2ZcIiBbbmdWYWx1ZV09XCJvcHRpb24uZW51bVswXVwiID57e29wdGlvbi5kZXNjcmlwdGlvbn19PC9vcHRpb24+XG5cdDwvc2VsZWN0PlxuXG5cdDxpbnB1dCAqbmdJZj1cInNjaGVtYS5yZWFkT25seVwiIFthdHRyLm5hbWVdPVwibmFtZVwiIHR5cGU9XCJoaWRkZW5cIiBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiPlxuPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IHt9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXN0cmluZy13aWRnZXQnLFxuICB0ZW1wbGF0ZTogYDxpbnB1dCAqbmdJZj1cInRoaXMuZ2V0SW5wdXRUeXBlKCk9PT0naGlkZGVuJzsgZWxzZSBub3RIaWRkZW5GaWVsZEJsb2NrXCJcbiAgW2F0dHIubmFtZV09XCJuYW1lXCIgdHlwZT1cImhpZGRlblwiIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCI+XG48bmctdGVtcGxhdGUgI25vdEhpZGRlbkZpZWxkQmxvY2s+XG48ZGl2IGNsYXNzPVwid2lkZ2V0IGZvcm0tZ3JvdXBcIj5cbiAgICA8bGFiZWwgW2F0dHIuZm9yXT1cImlkXCIgY2xhc3M9XCJob3Jpem9udGFsIGNvbnRyb2wtbGFiZWxcIj5cbiAgICBcdHt7IHNjaGVtYS50aXRsZSB9fVxuICAgIDwvbGFiZWw+XG4gICAgPHNwYW4gKm5nSWY9XCJzY2hlbWEuZGVzY3JpcHRpb25cIiBjbGFzcz1cImZvcm1IZWxwXCI+e3tzY2hlbWEuZGVzY3JpcHRpb259fTwvc3Bhbj5cbiAgICA8aW5wdXQgW25hbWVdPVwibmFtZVwiIFthdHRyLnJlYWRvbmx5XT1cIihzY2hlbWEud2lkZ2V0LmlkIT09J2NvbG9yJykgJiYgc2NoZW1hLnJlYWRPbmx5P3RydWU6bnVsbFwiXG4gICAgY2xhc3M9XCJ0ZXh0LXdpZGdldC5pZCB0ZXh0bGluZS13aWRnZXQgZm9ybS1jb250cm9sXCIgW2F0dHIudHlwZV09XCJ0aGlzLmdldElucHV0VHlwZSgpXCJcbiAgICBbYXR0ci5pZF09XCJpZFwiICBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiIFthdHRyLnBsYWNlaG9sZGVyXT1cInNjaGVtYS5wbGFjZWhvbGRlclwiXG4gICAgW2F0dHIubWF4TGVuZ3RoXT1cInNjaGVtYS5tYXhMZW5ndGggfHwgbnVsbFwiXG4gICAgW2F0dHIubWluTGVuZ3RoXT1cInNjaGVtYS5taW5MZW5ndGggfHwgbnVsbFwiXG4gICAgW2F0dHIuZGlzYWJsZWRdPVwiKHNjaGVtYS53aWRnZXQuaWQ9PSdjb2xvcicgJiYgc2NoZW1hLnJlYWRPbmx5KT90cnVlOm51bGxcIj5cbiAgICA8aW5wdXQgKm5nSWY9XCIoc2NoZW1hLndpZGdldC5pZD09PSdjb2xvcicgJiYgc2NoZW1hLnJlYWRPbmx5KVwiIFthdHRyLm5hbWVdPVwibmFtZVwiIHR5cGU9XCJoaWRkZW5cIiBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiPlxuPC9kaXY+XG48L25nLXRlbXBsYXRlPmBcbn0pXG5leHBvcnQgY2xhc3MgU3RyaW5nV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCB7XG5cbiAgICBnZXRJbnB1dFR5cGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5zY2hlbWEud2lkZ2V0LmlkIHx8IHRoaXMuc2NoZW1hLndpZGdldC5pZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiAndGV4dCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY2hlbWEud2lkZ2V0LmlkO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQXJyYXlXaWRnZXQgfSBmcm9tICcuL2FycmF5L2FycmF5LndpZGdldCc7XG5pbXBvcnQgeyBCdXR0b25XaWRnZXQgfSBmcm9tICcuL2J1dHRvbi9idXR0b24ud2lkZ2V0JztcbmltcG9ydCB7IENoZWNrYm94V2lkZ2V0IH0gZnJvbSAnLi9jaGVja2JveC9jaGVja2JveC53aWRnZXQnO1xuaW1wb3J0IHsgRmlsZVdpZGdldCB9IGZyb20gJy4vZmlsZS9maWxlLndpZGdldCc7XG5pbXBvcnQgeyBJbnRlZ2VyV2lkZ2V0IH0gZnJvbSAnLi9pbnRlZ2VyL2ludGVnZXIud2lkZ2V0JztcbmltcG9ydCB7IE9iamVjdFdpZGdldCB9IGZyb20gJy4vb2JqZWN0L29iamVjdC53aWRnZXQnO1xuaW1wb3J0IHsgUmFkaW9XaWRnZXQgfSBmcm9tICcuL3JhZGlvL3JhZGlvLndpZGdldCc7XG5pbXBvcnQgeyBSYW5nZVdpZGdldCB9IGZyb20gJy4vcmFuZ2UvcmFuZ2Uud2lkZ2V0JztcbmltcG9ydCB7IFNlbGVjdFdpZGdldCB9IGZyb20gJy4vc2VsZWN0L3NlbGVjdC53aWRnZXQnO1xuaW1wb3J0IHsgU3RyaW5nV2lkZ2V0IH0gZnJvbSAnLi9zdHJpbmcvc3RyaW5nLndpZGdldCc7XG5pbXBvcnQgeyBUZXh0QXJlYVdpZGdldCB9IGZyb20gJy4vdGV4dGFyZWEvdGV4dGFyZWEud2lkZ2V0JztcblxuaW1wb3J0IHsgV2lkZ2V0UmVnaXN0cnkgfSBmcm9tICcuLi93aWRnZXRyZWdpc3RyeSc7XG5cbmV4cG9ydCBjbGFzcyBEZWZhdWx0V2lkZ2V0UmVnaXN0cnkgZXh0ZW5kcyBXaWRnZXRSZWdpc3RyeSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyKCdhcnJheScsICBBcnJheVdpZGdldCk7XG4gICAgdGhpcy5yZWdpc3Rlcignb2JqZWN0JywgIE9iamVjdFdpZGdldCk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyKCdzdHJpbmcnLCBTdHJpbmdXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ3NlYXJjaCcsIFN0cmluZ1dpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcigndGVsJywgU3RyaW5nV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCd1cmwnLCBTdHJpbmdXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ2VtYWlsJywgU3RyaW5nV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdwYXNzd29yZCcsIFN0cmluZ1dpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcignY29sb3InLCBTdHJpbmdXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ2RhdGUnLCBTdHJpbmdXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ2RhdGUtdGltZScsIFN0cmluZ1dpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcigndGltZScsIFN0cmluZ1dpZGdldCk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyKCdpbnRlZ2VyJywgSW50ZWdlcldpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcignbnVtYmVyJywgSW50ZWdlcldpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcigncmFuZ2UnLCBSYW5nZVdpZGdldCk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyKCd0ZXh0YXJlYScsIFRleHRBcmVhV2lkZ2V0KTtcblxuICAgIHRoaXMucmVnaXN0ZXIoJ2ZpbGUnLCBGaWxlV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdzZWxlY3QnLCBTZWxlY3RXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ3JhZGlvJywgUmFkaW9XaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ2Jvb2xlYW4nLCBDaGVja2JveFdpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcignY2hlY2tib3gnLCBDaGVja2JveFdpZGdldCk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyKCdidXR0b24nLCBCdXR0b25XaWRnZXQpO1xuXG4gICAgdGhpcy5zZXREZWZhdWx0V2lkZ2V0KFN0cmluZ1dpZGdldCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1kZWZhdWx0LWZpZWxkJyxcbiAgdGVtcGxhdGU6IGA8cD5Vbmtub3cgdHlwZTwvcD5gXG59KVxuZXhwb3J0IGNsYXNzIERlZmF1bHRXaWRnZXQge31cbiIsImltcG9ydCB7TmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBGb3Jtc01vZHVsZSxcbiAgUmVhY3RpdmVGb3Jtc01vZHVsZVxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7Rm9ybUVsZW1lbnRDb21wb25lbnR9IGZyb20gJy4vZm9ybWVsZW1lbnQuY29tcG9uZW50JztcbmltcG9ydCB7Rm9ybUNvbXBvbmVudH0gZnJvbSAnLi9mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQge1dpZGdldENob29zZXJDb21wb25lbnR9IGZyb20gJy4vd2lkZ2V0Y2hvb3Nlci5jb21wb25lbnQnO1xuaW1wb3J0IHtBcnJheVdpZGdldH0gZnJvbSAnLi9kZWZhdWx0d2lkZ2V0cy9hcnJheS9hcnJheS53aWRnZXQnO1xuaW1wb3J0IHtCdXR0b25XaWRnZXR9IGZyb20gJy4vZGVmYXVsdHdpZGdldHMvYnV0dG9uL2J1dHRvbi53aWRnZXQnO1xuaW1wb3J0IHtPYmplY3RXaWRnZXR9IGZyb20gJy4vZGVmYXVsdHdpZGdldHMvb2JqZWN0L29iamVjdC53aWRnZXQnO1xuaW1wb3J0IHtDaGVja2JveFdpZGdldH0gZnJvbSAnLi9kZWZhdWx0d2lkZ2V0cy9jaGVja2JveC9jaGVja2JveC53aWRnZXQnO1xuaW1wb3J0IHtGaWxlV2lkZ2V0fSBmcm9tICcuL2RlZmF1bHR3aWRnZXRzL2ZpbGUvZmlsZS53aWRnZXQnO1xuaW1wb3J0IHtJbnRlZ2VyV2lkZ2V0fSBmcm9tICcuL2RlZmF1bHR3aWRnZXRzL2ludGVnZXIvaW50ZWdlci53aWRnZXQnO1xuaW1wb3J0IHtUZXh0QXJlYVdpZGdldH0gZnJvbSAnLi9kZWZhdWx0d2lkZ2V0cy90ZXh0YXJlYS90ZXh0YXJlYS53aWRnZXQnO1xuaW1wb3J0IHtSYWRpb1dpZGdldH0gZnJvbSAnLi9kZWZhdWx0d2lkZ2V0cy9yYWRpby9yYWRpby53aWRnZXQnO1xuaW1wb3J0IHtSYW5nZVdpZGdldH0gZnJvbSAnLi9kZWZhdWx0d2lkZ2V0cy9yYW5nZS9yYW5nZS53aWRnZXQnO1xuaW1wb3J0IHtTZWxlY3RXaWRnZXR9IGZyb20gJy4vZGVmYXVsdHdpZGdldHMvc2VsZWN0L3NlbGVjdC53aWRnZXQnO1xuaW1wb3J0IHtTdHJpbmdXaWRnZXR9IGZyb20gJy4vZGVmYXVsdHdpZGdldHMvc3RyaW5nL3N0cmluZy53aWRnZXQnO1xuaW1wb3J0IHtEZWZhdWx0V2lkZ2V0UmVnaXN0cnl9IGZyb20gJy4vZGVmYXVsdHdpZGdldHMvZGVmYXVsdHdpZGdldHJlZ2lzdHJ5JztcbmltcG9ydCB7XG4gIERlZmF1bHRXaWRnZXRcbn0gZnJvbSAnLi9kZWZhdWx0LndpZGdldCc7XG5cbmltcG9ydCB7V2lkZ2V0UmVnaXN0cnl9IGZyb20gJy4vd2lkZ2V0cmVnaXN0cnknO1xuaW1wb3J0IHtTY2hlbWFWYWxpZGF0b3JGYWN0b3J5LCBaU2NoZW1hVmFsaWRhdG9yRmFjdG9yeX0gZnJvbSAnLi9zY2hlbWF2YWxpZGF0b3JmYWN0b3J5JztcbmltcG9ydCB7Rm9ybUVsZW1lbnRDb21wb25lbnRBY3Rpb259IGZyb20gJy4vZm9ybWVsZW1lbnQuYWN0aW9uLmNvbXBvbmVudCc7XG5cbmNvbnN0IG1vZHVsZVByb3ZpZGVycyA9IFtcbiAge1xuICAgIHByb3ZpZGU6IFdpZGdldFJlZ2lzdHJ5LFxuICAgIHVzZUNsYXNzOiBEZWZhdWx0V2lkZ2V0UmVnaXN0cnlcbiAgfSxcbiAge1xuICAgIHByb3ZpZGU6IFNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gICAgdXNlQ2xhc3M6IFpTY2hlbWFWYWxpZGF0b3JGYWN0b3J5XG4gIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRm9ybUVsZW1lbnRDb21wb25lbnQsXG4gICAgRm9ybUVsZW1lbnRDb21wb25lbnRBY3Rpb24sXG4gICAgRm9ybUNvbXBvbmVudCxcbiAgICBXaWRnZXRDaG9vc2VyQ29tcG9uZW50LFxuICAgIERlZmF1bHRXaWRnZXQsXG4gICAgQXJyYXlXaWRnZXQsXG4gICAgQnV0dG9uV2lkZ2V0LFxuICAgIE9iamVjdFdpZGdldCxcbiAgICBDaGVja2JveFdpZGdldCxcbiAgICBGaWxlV2lkZ2V0LFxuICAgIEludGVnZXJXaWRnZXQsXG4gICAgVGV4dEFyZWFXaWRnZXQsXG4gICAgUmFkaW9XaWRnZXQsXG4gICAgUmFuZ2VXaWRnZXQsXG4gICAgU2VsZWN0V2lkZ2V0LFxuICAgIFN0cmluZ1dpZGdldCxcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgRm9ybUVsZW1lbnRDb21wb25lbnQsXG4gICAgRm9ybUVsZW1lbnRDb21wb25lbnRBY3Rpb24sXG4gICAgRm9ybUNvbXBvbmVudCxcbiAgICBXaWRnZXRDaG9vc2VyQ29tcG9uZW50LFxuICAgIEFycmF5V2lkZ2V0LFxuICAgIEJ1dHRvbldpZGdldCxcbiAgICBPYmplY3RXaWRnZXQsXG4gICAgQ2hlY2tib3hXaWRnZXQsXG4gICAgRmlsZVdpZGdldCxcbiAgICBJbnRlZ2VyV2lkZ2V0LFxuICAgIFRleHRBcmVhV2lkZ2V0LFxuICAgIFJhZGlvV2lkZ2V0LFxuICAgIFJhbmdlV2lkZ2V0LFxuICAgIFNlbGVjdFdpZGdldCxcbiAgICBTdHJpbmdXaWRnZXQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBGb3JtQ29tcG9uZW50LFxuICAgIEZvcm1FbGVtZW50Q29tcG9uZW50LFxuICAgIEZvcm1FbGVtZW50Q29tcG9uZW50QWN0aW9uLFxuICAgIFdpZGdldENob29zZXJDb21wb25lbnQsXG4gICAgQXJyYXlXaWRnZXQsXG4gICAgQnV0dG9uV2lkZ2V0LFxuICAgIE9iamVjdFdpZGdldCxcbiAgICBDaGVja2JveFdpZGdldCxcbiAgICBGaWxlV2lkZ2V0LFxuICAgIEludGVnZXJXaWRnZXQsXG4gICAgVGV4dEFyZWFXaWRnZXQsXG4gICAgUmFkaW9XaWRnZXQsXG4gICAgUmFuZ2VXaWRnZXQsXG4gICAgU2VsZWN0V2lkZ2V0LFxuICAgIFN0cmluZ1dpZGdldFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNjaGVtYUZvcm1Nb2R1bGUge1xuXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogU2NoZW1hRm9ybU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogWy4uLm1vZHVsZVByb3ZpZGVyc11cbiAgICB9O1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVTY2hlbWFTZXJ2aWNlIHtcblxuICBjaGFuZ2VzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgY2hhbmdlZCgpIHtcbiAgICB0aGlzLmNoYW5nZXMuZW1pdCgpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlU2NoZW1hRWxlbWVudCB7XG5cbiAgZ2V0VGV4dENvbnRlbnQoZWxlbWVudFJlZjogRWxlbWVudFJlZik6IHN0cmluZyB7XG4gICAgY29uc3Qgbm9kZXMgPSBBcnJheS5mcm9tKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzKTtcbiAgICBjb25zdCBub2RlID0gPEhUTUxFbGVtZW50Pm5vZGVzLmZpbHRlcigoZWw6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICByZXR1cm4gZWwubm9kZVR5cGUgPT09IGVsLlRFWFRfTk9ERTtcbiAgICB9KS5wb3AoKTtcblxuICAgIGlmICghbm9kZSB8fCAhbm9kZS5ub2RlVmFsdWUpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZS5ub2RlVmFsdWUudHJpbSgpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBUZW1wbGF0ZVNjaGVtYUVsZW1lbnQgfSBmcm9tICcuLi90ZW1wbGF0ZS1zY2hlbWEtZWxlbWVudCc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtYnV0dG9uJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5gLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBUZW1wbGF0ZVNjaGVtYUVsZW1lbnQsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBCdXR0b25Db21wb25lbnQpLFxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQgZXh0ZW5kcyBUZW1wbGF0ZVNjaGVtYUVsZW1lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcblxuICBASW5wdXQoKVxuICBpZDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGxhYmVsID0gJyc7XG5cbiAgQElucHV0KClcbiAgd2lkZ2V0OiBzdHJpbmcgfCBvYmplY3Q7XG5cbiAgQE91dHB1dCgpXG4gIGNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0TGFiZWxGcm9tQ29udGVudCgpIHtcbiAgICBjb25zdCB0ZXh0Q29udGVudCA9IHRoaXMuZ2V0VGV4dENvbnRlbnQodGhpcy5lbGVtZW50UmVmKTtcblxuICAgIC8vIGxhYmVsIGFzIEBJbnB1dCB0YWtlcyBwcmlvcml0eSBvdmVyIGNvbnRlbnQgdGV4dFxuICAgIGlmICh0ZXh0Q29udGVudCAmJiAhdGhpcy5sYWJlbCkge1xuICAgICAgdGhpcy5sYWJlbCA9IHRleHRDb250ZW50O1xuICAgIH1cblxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuc2V0TGFiZWxGcm9tQ29udGVudCgpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IFZhbGlkYXRvciB9IGZyb20gJy4uLy4uL21vZGVsL3ZhbGlkYXRvcic7XG5cbmV4cG9ydCBlbnVtIEZpZWxkVHlwZSB7XG4gIFN0cmluZyA9ICdzdHJpbmcnLFxuICBPYmplY3QgPSAnb2JqZWN0JyxcbiAgQXJyYXkgPSAnYXJyYXknLFxuICBCb29sZWFuID0gJ2Jvb2xlYW4nLFxuICBJbnRlZ2VyID0gICdpbnRlZ2VyJyxcbiAgTnVtYmVyID0gJ251bWJlcicsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmllbGQge1xuICBuYW1lOiBzdHJpbmc7XG4gIHJlcXVpcmVkOiBib29sZWFuO1xuICBnZXRTY2hlbWEoKTogYW55O1xuICBnZXRCdXR0b25zKCk6IGFueTtcbiAgZ2V0VmFsaWRhdG9ycygpOiB7IHBhdGg6IHN0cmluZywgdmFsaWRhdG9yOiBWYWxpZGF0b3IgfVtdO1xufVxuXG5cbiIsImltcG9ydCB7IEVsZW1lbnRSZWYsIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tICcuLi8uLi9tb2RlbC92YWxpZGF0b3InO1xuaW1wb3J0IHsgQWN0aW9uUmVnaXN0cnkgfSBmcm9tICcuLi8uLi9tb2RlbC9hY3Rpb25yZWdpc3RyeSc7XG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuLi9idXR0b24vYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZW1wbGF0ZVNjaGVtYUVsZW1lbnQgfSBmcm9tICcuLi90ZW1wbGF0ZS1zY2hlbWEtZWxlbWVudCc7XG5cbmltcG9ydCB7IEZpZWxkLCBGaWVsZFR5cGUgfSBmcm9tICcuL2ZpZWxkJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZpZWxkUGFyZW50IGV4dGVuZHMgVGVtcGxhdGVTY2hlbWFFbGVtZW50IHtcblxuICBuYW1lID0gJyc7XG4gIHR5cGU6IEZpZWxkVHlwZTtcblxuICBnZXQgcGF0aCgpOiBzdHJpbmcge1xuICAgIGlmICghdGhpcy5uYW1lKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuICcvJyArIHRoaXMubmFtZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBhY3Rpb25SZWdpc3RyeTogQWN0aW9uUmVnaXN0cnk7XG4gIHByb3RlY3RlZCBhYnN0cmFjdCBjaGlsZEJ1dHRvbnM6IFF1ZXJ5TGlzdDxCdXR0b25Db21wb25lbnQ+O1xuXG5cbiAgZ2V0QnV0dG9ucygpOiB7IGlkOiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcsIHdpZGdldD86IHN0cmluZyB8IG9iamVjdCB9W10ge1xuXG4gICAgcmV0dXJuIHRoaXMuY2hpbGRCdXR0b25zLm1hcCgoYnV0dG9uLCBpbmRleCkgPT4ge1xuXG4gICAgICBpZiAoIWJ1dHRvbi5pZCkge1xuICAgICAgICBjb25zdCByYW5kb21TdHJpbmcgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KS5zdWJzdHIoMiwgOCk7XG4gICAgICAgIC8vIGdlbmVyYXRlIGlkIGZvciBidXR0b25cbiAgICAgICAgYnV0dG9uLmlkID0gdGhpcy5uYW1lICsgcmFuZG9tU3RyaW5nICsgJ18nICArIChpbmRleCArIDEpO1xuICAgICAgfVxuXG4gICAgICAvLyByZWdpc3RlciBhcyBidXR0b24gYWN0aW9uIHRoZSBFdmVudEVtaXR0ZXIgY2xpY2tcbiAgICAgIHRoaXMuYWN0aW9uUmVnaXN0cnkucmVnaXN0ZXIoXG4gICAgICAgIGJ1dHRvbi5pZCxcbiAgICAgICAgYnV0dG9uLmNsaWNrLmVtaXQuYmluZChidXR0b24uY2xpY2spXG4gICAgICApO1xuXG4gICAgICBjb25zdCBfYnV0dG9uID0gPGFueT57XG4gICAgICAgIGlkOiBidXR0b24uaWQsXG4gICAgICAgIGxhYmVsOiBidXR0b24ubGFiZWwsXG4gICAgICB9O1xuXG4gICAgICBpZiAoYnV0dG9uLndpZGdldCkge1xuICAgICAgICBfYnV0dG9uLndpZGdldCA9IGJ1dHRvbi53aWRnZXQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfYnV0dG9uO1xuXG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0RmllbGRzVmFsaWRhdG9ycyhcbiAgICBmaWVsZHM6IEZpZWxkW11cbiAgKTogeyBwYXRoOiBzdHJpbmcsIHZhbGlkYXRvcjogVmFsaWRhdG9yIH1bXSB7XG5cbiAgICByZXR1cm4gZmllbGRzLnJlZHVjZSgodmFsaWRhdG9ycywgZmllbGQpID0+IHtcbiAgICAgIHJldHVybiB2YWxpZGF0b3JzLmNvbmNhdChmaWVsZC5nZXRWYWxpZGF0b3JzKCkpO1xuICAgIH0sIFtdKTtcblxuICB9XG5cbiAgcHJvdGVjdGVkIGdldEZpZWxkc1NjaGVtYShmaWVsZHM6IEZpZWxkW10pIHtcbiAgICByZXR1cm4gZmllbGRzLnJlZHVjZSgoc2NoZW1hOiBhbnksIGZpZWxkKSA9PiB7XG5cbiAgICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XG4gICAgICAgIGNhc2UgRmllbGRUeXBlLkFycmF5OlxuICAgICAgICAgIHNjaGVtYS5pdGVtcyA9IGZpZWxkLmdldFNjaGVtYSgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaWYgKCFzY2hlbWEucHJvcGVydGllcykge1xuICAgICAgICAgICAgc2NoZW1hLnByb3BlcnRpZXMgPSB7fTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzY2hlbWEucHJvcGVydGllc1tmaWVsZC5uYW1lXSA9IGZpZWxkLmdldFNjaGVtYSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBidXR0b25zID0gZmllbGQuZ2V0QnV0dG9ucygpO1xuICAgICAgaWYgKGJ1dHRvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICBzY2hlbWEuYnV0dG9ucyA9IGJ1dHRvbnM7XG4gICAgICB9XG5cbiAgICAgIGlmICghZmllbGQucmVxdWlyZWQpIHtcbiAgICAgICAgcmV0dXJuIHNjaGVtYTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFzY2hlbWEucmVxdWlyZWQpIHtcbiAgICAgICAgc2NoZW1hLnJlcXVpcmVkID0gW107XG4gICAgICB9XG4gICAgICBzY2hlbWEucmVxdWlyZWQucHVzaChmaWVsZC5uYW1lKTtcbiAgICAgIHJldHVybiBzY2hlbWE7XG4gICAgfSwge30pO1xuICB9XG5cbn1cbiIsImltcG9ydCB7XG4gQ29tcG9uZW50LFxuIEVsZW1lbnRSZWYsXG4gSW5wdXQsXG4gT25Jbml0LFxuIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRlbXBsYXRlU2NoZW1hRWxlbWVudCB9IGZyb20gJy4uLy4uL3RlbXBsYXRlLXNjaGVtYS1lbGVtZW50JztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1pdGVtJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5gXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1Db21wb25lbnQgZXh0ZW5kcyBUZW1wbGF0ZVNjaGVtYUVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpXG4gIHZhbHVlOiBhbnk7XG5cbiAgZGVzY3JpcHRpb246IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHRoaXMuZ2V0VGV4dENvbnRlbnQodGhpcy5lbGVtZW50UmVmKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBWaWV3Q2hpbGQsXG4gIFF1ZXJ5TGlzdCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlLFxuICBPbkNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBtZXJnZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICcuLi8uLi9tb2RlbC9hY3Rpb24nO1xuaW1wb3J0IHsgQWN0aW9uUmVnaXN0cnkgfSBmcm9tICcuLi8uLi9tb2RlbC9hY3Rpb25yZWdpc3RyeSc7XG5pbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tICcuLi8uLi9tb2RlbC92YWxpZGF0b3InO1xuXG5pbXBvcnQgeyBUZW1wbGF0ZVNjaGVtYUVsZW1lbnQgfSBmcm9tICcuLi90ZW1wbGF0ZS1zY2hlbWEtZWxlbWVudCc7XG5pbXBvcnQgeyBUZW1wbGF0ZVNjaGVtYVNlcnZpY2UgfSBmcm9tICcuLi90ZW1wbGF0ZS1zY2hlbWEuc2VydmljZSc7XG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuLi9idXR0b24vYnV0dG9uLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEZpZWxkUGFyZW50IH0gZnJvbSAnLi9maWVsZC1wYXJlbnQnO1xuaW1wb3J0IHsgRmllbGRUeXBlLCBGaWVsZCB9IGZyb20gJy4vZmllbGQnO1xuaW1wb3J0IHsgSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vaXRlbS9pdGVtLmNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtZmllbGQnLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50ID48L25nLWNvbnRlbnQ+XG5gXG59KVxuZXhwb3J0IGNsYXNzIEZpZWxkQ29tcG9uZW50IGV4dGVuZHMgRmllbGRQYXJlbnQgaW1wbGVtZW50c1xuRmllbGQsIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihGaWVsZENvbXBvbmVudClcbiAgY2hpbGRGaWVsZHM6IFF1ZXJ5TGlzdDxGaWVsZENvbXBvbmVudD47XG5cbiAgQENvbnRlbnRDaGlsZHJlbihJdGVtQ29tcG9uZW50KVxuICBjaGlsZEl0ZW1zOiBRdWVyeUxpc3Q8SXRlbUNvbXBvbmVudD47XG5cbiAgQENvbnRlbnRDaGlsZHJlbihCdXR0b25Db21wb25lbnQpXG4gIGNoaWxkQnV0dG9uczogUXVlcnlMaXN0PEJ1dHRvbkNvbXBvbmVudD47XG5cbiAgQElucHV0KClcbiAgbmFtZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHR5cGUgPSBGaWVsZFR5cGUuU3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGZvcm1hdDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHJlcXVpcmVkOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIHJlYWRPbmx5OiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIHRpdGxlOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgZGVzY3JpcHRpb246IHN0cmluZztcblxuICBASW5wdXQoKVxuICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHdpZGdldDogc3RyaW5nIHwgb2JqZWN0O1xuXG4gIEBJbnB1dCgpXG4gIHZhbGlkYXRvcjogVmFsaWRhdG9yO1xuXG4gIEBJbnB1dCgpXG4gIHNjaGVtYTogYW55ID0geyB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHRlbXBsYXRlU2NoZW1hU2VydmljZTogVGVtcGxhdGVTY2hlbWFTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhY3Rpb25SZWdpc3RyeTogQWN0aW9uUmVnaXN0cnlcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGdldFNjaGVtYSgpOiBhbnkge1xuXG4gICAgY29uc3QgeyBwcm9wZXJ0aWVzLCBpdGVtcywgcmVxdWlyZWQgfSA9IHRoaXMuZ2V0RmllbGRzU2NoZW1hKFxuICAgICAgdGhpcy5jaGlsZEZpZWxkcy5maWx0ZXIoZmllbGQgPT4gZmllbGQgIT09IHRoaXMpXG4gICAgKTtcblxuICAgIGNvbnN0IG9uZU9mID0gdGhpcy5nZXRPbmVPZigpO1xuXG4gICAgY29uc3Qgc2NoZW1hID0gPGFueT57XG4gICAgICB0eXBlOiB0aGlzLnR5cGVcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMudGl0bGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2NoZW1hLnRpdGxlID0gdGhpcy50aXRsZTtcbiAgICB9XG5cbiAgICBpZiAocHJvcGVydGllcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzY2hlbWEucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gICAgfVxuXG4gICAgaWYgKGl0ZW1zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNjaGVtYS5pdGVtcyA9IGl0ZW1zO1xuICAgIH1cblxuICAgIC8vIHJlcXVyaWVkIGNoaWxkIGZpZWxkc1xuICAgIGlmIChyZXF1aXJlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzY2hlbWEucmVxdWlyZWQgPSByZXF1aXJlZDtcbiAgICB9XG5cbiAgICBpZiAob25lT2YgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2NoZW1hLm9uZU9mID0gb25lT2Y7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2NoZW1hLmRlc2NyaXB0aW9uID0gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wbGFjZWhvbGRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzY2hlbWEucGxhY2Vob2xkZXIgPSB0aGlzLnBsYWNlaG9sZGVyO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmZvcm1hdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzY2hlbWEuZm9ybWF0ID0gdGhpcy5mb3JtYXQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMud2lkZ2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNjaGVtYS53aWRnZXQgPSB0aGlzLndpZGdldDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5yZWFkT25seSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzY2hlbWEucmVhZE9ubHkgPSB0aGlzLnJlYWRPbmx5O1xuICAgIH1cblxuICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLmdldEJ1dHRvbnMoKTtcbiAgICBpZiAoYnV0dG9ucy5sZW5ndGggPiAwKSB7XG4gICAgICBzY2hlbWEuYnV0dG9ucyA9IGJ1dHRvbnM7XG4gICAgfVxuXG4gICAgLy8gQElucHV0IHNjaGVtYSB0YWtlcyBwcmVjZWRlbmNlXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oc2NoZW1hLCB0aGlzLnNjaGVtYSk7XG5cbiAgfVxuXG4gIGdldFZhbGlkYXRvcnMoKTogeyBwYXRoOiBzdHJpbmcsIHZhbGlkYXRvcjogVmFsaWRhdG9yIH1bXSB7XG5cbiAgICAvLyByZWdpc3RlcmluZyB2YWxpZGF0b3IgaGVyZSBpcyBub3QgcG9zc2libGUgc2luY2UgcHJvcCBmdWxsIHBhdGggaXMgbmVlZGVkXG4gICAgY29uc3QgY2hpbGRWYWxpZGF0b3JzID0gdGhpcy5nZXRGaWVsZHNWYWxpZGF0b3JzKFxuICAgICAgdGhpcy5jaGlsZEZpZWxkcy5maWx0ZXIoZmllbGQgPT4gZmllbGQgIT09IHRoaXMpXG4gICAgKTtcbiAgICBjb25zdCB2YWxpZGF0b3JzID0gY2hpbGRWYWxpZGF0b3JzLm1hcCgoeyBwYXRoLCB2YWxpZGF0b3IgfSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aDogdGhpcy5wYXRoICsgcGF0aCxcbiAgICAgICAgdmFsaWRhdG9yXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgaWYgKCF0aGlzLnZhbGlkYXRvcikge1xuICAgICAgcmV0dXJuIHZhbGlkYXRvcnM7XG4gICAgfVxuXG4gICAgdmFsaWRhdG9ycy5wdXNoKHsgcGF0aDogdGhpcy5wYXRoLCB2YWxpZGF0b3I6IHRoaXMudmFsaWRhdG9yIH0pO1xuICAgIHJldHVybiB2YWxpZGF0b3JzO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNoYW5nZXMpO1xuICAgIGlmIChrZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgaWYgKCFjaGFuZ2VzW2tleV0uaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICAgICAgLy8gb24gYW55IGlucHV0IGNoYW5nZSwgZm9yY2Ugc2NoZW1hIGNoYW5nZSBnZW5lcmF0aW9uXG4gICAgICAgICAgdGhpcy50ZW1wbGF0ZVNjaGVtYVNlcnZpY2UuY2hhbmdlZCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuXG4gIHByaXZhdGUgZ2V0T25lT2YoKSB7XG5cbiAgICBpZiAodGhpcy5jaGlsZEl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5jaGlsZEl0ZW1zLm1hcCgoeyB2YWx1ZSwgZGVzY3JpcHRpb24gfSkgPT4ge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4geyBlbnVtOiBbdmFsdWVdLCBkZXNjcmlwdGlvbiB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4geyBlbnVtOiB2YWx1ZSwgZGVzY3JpcHRpb24gfTtcbiAgICB9KTtcblxuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm4gaXRlbXM7XG4gIH1cblxuXG4gIHByaXZhdGUgc2V0VGl0bGVGcm9tQ29udGVudCgpIHtcbiAgICBjb25zdCB0ZXh0Q29udGVudCA9IHRoaXMuZ2V0VGV4dENvbnRlbnQodGhpcy5lbGVtZW50UmVmKTtcblxuICAgIC8vICB0aXRsZSBhcyBASW5wdXQgdGFrZXMgcHJpb3JpdHkgb3ZlciBjb250ZW50IHRleHRcbiAgICBpZiAodGV4dENvbnRlbnQgJiYgIXRoaXMudGl0bGUpIHtcbiAgICAgIHRoaXMudGl0bGUgPSB0ZXh0Q29udGVudDtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG5cbiAgICAvLyBjYWNoZSBpdFxuICAgIHRoaXMuc2V0VGl0bGVGcm9tQ29udGVudCgpO1xuXG4gICAgbWVyZ2UoXG4gICAgICB0aGlzLmNoaWxkRmllbGRzLmNoYW5nZXMsXG4gICAgICB0aGlzLmNoaWxkSXRlbXMuY2hhbmdlcyxcbiAgICAgIHRoaXMuY2hpbGRCdXR0b25zLmNoYW5nZXNcbiAgICApXG4gICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnRlbXBsYXRlU2NoZW1hU2VydmljZS5jaGFuZ2VkKCkpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEhvc3RCaW5kaW5nLFxuICBTaW1wbGVDaGFuZ2UsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi4vZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWN0aW9uUmVnaXN0cnkgfSBmcm9tICcuLi9tb2RlbC9hY3Rpb25yZWdpc3RyeSc7XG5pbXBvcnQgeyBWYWxpZGF0b3JSZWdpc3RyeSB9IGZyb20gJy4uL21vZGVsL3ZhbGlkYXRvcnJlZ2lzdHJ5JztcbmltcG9ydCB7IFRlcm1pbmF0b3JTZXJ2aWNlIH0gZnJvbSAnLi4vdGVybWluYXRvci5zZXJ2aWNlJztcblxuaW1wb3J0IHsgVGVtcGxhdGVTY2hlbWFTZXJ2aWNlIH0gZnJvbSAnLi90ZW1wbGF0ZS1zY2hlbWEuc2VydmljZSc7XG5pbXBvcnQgeyBGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vZmllbGQvZmllbGQuY29tcG9uZW50JztcbmltcG9ydCB7IEZpZWxkVHlwZSwgRmllbGQgfSBmcm9tICcuL2ZpZWxkL2ZpZWxkJztcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmllbGRQYXJlbnQgfSBmcm9tICcuL2ZpZWxkL2ZpZWxkLXBhcmVudCc7XG5cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnc2YtZm9ybVt0ZW1wbGF0ZVNjaGVtYV0nLFxuICBwcm92aWRlcnM6IFtcbiAgICBUZW1wbGF0ZVNjaGVtYVNlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZVNjaGVtYURpcmVjdGl2ZSBleHRlbmRzIEZpZWxkUGFyZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihGaWVsZENvbXBvbmVudClcbiAgY2hpbGRGaWVsZHM6IFF1ZXJ5TGlzdDxGaWVsZENvbXBvbmVudD47XG5cbiAgQENvbnRlbnRDaGlsZHJlbihCdXR0b25Db21wb25lbnQpXG4gIGNoaWxkQnV0dG9uczogUXVlcnlMaXN0PEJ1dHRvbkNvbXBvbmVudD47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGFjdGlvblJlZ2lzdHJ5OiBBY3Rpb25SZWdpc3RyeSxcbiAgICBwcm90ZWN0ZWQgdmFsaWRhdG9yUmVnaXN0cnk6IFZhbGlkYXRvclJlZ2lzdHJ5LFxuICAgIHByaXZhdGUgZm9ybUNvbXBvbmVudDogRm9ybUNvbXBvbmVudCxcbiAgICBwcml2YXRlIHRlcm1pbmF0b3JTZXJ2aWNlOiBUZXJtaW5hdG9yU2VydmljZSxcbiAgICBwcml2YXRlIHRlbXBsYXRlU2NoZW1hU2VydmljZTogVGVtcGxhdGVTY2hlbWFTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBzZXRGb3JtRG9jdW1lbnRTY2hlbWEoZmllbGRzOiBGaWVsZENvbXBvbmVudFtdKSB7XG4gICAgICB0aGlzLmFjdGlvblJlZ2lzdHJ5LmNsZWFyKCk7XG4gICAgICB0aGlzLnZhbGlkYXRvclJlZ2lzdHJ5LmNsZWFyKCk7XG5cbiAgICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMuZ2V0RmllbGRzU2NoZW1hKGZpZWxkcyk7XG5cbiAgICAgIGNvbnN0IHZhbGlkYXRvcnMgPSB0aGlzLmdldEZpZWxkc1ZhbGlkYXRvcnMoZmllbGRzKTtcbiAgICAgIHZhbGlkYXRvcnMuZm9yRWFjaCgoeyBwYXRoLCB2YWxpZGF0b3IgfSkgPT4ge1xuICAgICAgICB0aGlzLnZhbGlkYXRvclJlZ2lzdHJ5LnJlZ2lzdGVyKHBhdGgsIHZhbGlkYXRvcik7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcHJldmlvdXNTY2hlbWEgPSB0aGlzLmZvcm1Db21wb25lbnQuc2NoZW1hO1xuICAgICAgdGhpcy5mb3JtQ29tcG9uZW50LnNjaGVtYSA9IHtcbiAgICAgICAgdHlwZTogRmllbGRUeXBlLk9iamVjdCxcbiAgICAgICAgcHJvcGVydGllczogc2NoZW1hLnByb3BlcnRpZXNcbiAgICAgIH07XG5cbiAgICAgIGlmIChzY2hlbWEucmVxdWlyZWQgJiYgc2NoZW1hLnJlcXVpcmVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5mb3JtQ29tcG9uZW50LnNjaGVtYS5yZXF1cmVkID0gc2NoZW1hLnJlcXVpcmVkO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBidXR0b25zID0gdGhpcy5nZXRCdXR0b25zKCk7XG4gICAgICBpZiAoYnV0dG9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuZm9ybUNvbXBvbmVudC5zY2hlbWEuYnV0dG9ucyA9IGJ1dHRvbnM7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZm9ybUNvbXBvbmVudC5uZ09uQ2hhbmdlcyh7XG4gICAgICAgIHNjaGVtYTogbmV3IFNpbXBsZUNoYW5nZShcbiAgICAgICAgICBwcmV2aW91c1NjaGVtYSxcbiAgICAgICAgICB0aGlzLmZvcm1Db21wb25lbnQuc2NoZW1hLFxuICAgICAgICAgIEJvb2xlYW4ocHJldmlvdXNTY2hlbWEpXG4gICAgICAgIClcbiAgICAgIH0pO1xuXG4gIH1cblxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcblxuICAgIGlmICh0aGlzLmNoaWxkRmllbGRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2V0Rm9ybURvY3VtZW50U2NoZW1hKHRoaXMuY2hpbGRGaWVsZHMudG9BcnJheSgpKTtcbiAgICB9XG5cbiAgICBtZXJnZShcbiAgICAgIHRoaXMuY2hpbGRGaWVsZHMuY2hhbmdlcyxcbiAgICAgIHRoaXMudGVtcGxhdGVTY2hlbWFTZXJ2aWNlLmNoYW5nZXNcbiAgICApXG4gICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMudGVybWluYXRvclNlcnZpY2UuZGVzdHJveSgpO1xuICAgICAgdGhpcy5zZXRGb3JtRG9jdW1lbnRTY2hlbWEodGhpcy5jaGlsZEZpZWxkcy50b0FycmF5KCkpO1xuICAgIH0pO1xuXG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9maWVsZC9maWVsZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGVtcGxhdGVTY2hlbWFEaXJlY3RpdmUgfSBmcm9tICcuL3RlbXBsYXRlLXNjaGVtYS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9idXR0b24vYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9maWVsZC9pdGVtL2l0ZW0uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBUZW1wbGF0ZVNjaGVtYURpcmVjdGl2ZSxcbiAgICBGaWVsZENvbXBvbmVudCxcbiAgICBCdXR0b25Db21wb25lbnQsXG4gICAgSXRlbUNvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVGVtcGxhdGVTY2hlbWFEaXJlY3RpdmUsXG4gICAgRmllbGRDb21wb25lbnQsXG4gICAgQnV0dG9uQ29tcG9uZW50LFxuICAgIEl0ZW1Db21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZVNjaGVtYU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJCZWhhdmlvclN1YmplY3QiLCJtYXAiLCJjb21iaW5lTGF0ZXN0IiwiZGlzdGluY3RVbnRpbENoYW5nZWQiLCJ0c2xpYl8xLl9fZXh0ZW5kcyIsInRzbGliXzEuX192YWx1ZXMiLCJJbmplY3RhYmxlIiwiQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyIiwiU3ViamVjdCIsIkV2ZW50RW1pdHRlciIsIkNvbXBvbmVudCIsIk5HX1ZBTFVFX0FDQ0VTU09SIiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJJbnB1dCIsIk91dHB1dCIsIkZvcm1Db250cm9sIiwiUmVuZGVyZXIyIiwiRWxlbWVudFJlZiIsIlZpZXdDaGlsZCIsIlZpZXdDb250YWluZXJSZWYiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkZvcm1zTW9kdWxlIiwiUmVhY3RpdmVGb3Jtc01vZHVsZSIsImZvcndhcmRSZWYiLCJtZXJnZSIsIkNvbnRlbnRDaGlsZHJlbiIsIlNpbXBsZUNoYW5nZSIsIkRpcmVjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBLFFBQUE7OzJCQUNxQyxFQUFFOzs7OztRQUVyQyw4QkFBSzs7O1lBQUw7Z0JBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7YUFDbkI7Ozs7OztRQUVELGlDQUFROzs7OztZQUFSLFVBQVMsUUFBZ0IsRUFBRSxNQUFjO2dCQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQzthQUNqQzs7Ozs7UUFFRCw0QkFBRzs7OztZQUFILFVBQUksUUFBZ0I7Z0JBQ2xCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUMvQjs2QkFmSDtRQWdCQzs7SUNoQkQ7Ozs7Ozs7Ozs7Ozs7O0lBY0E7SUFFQSxJQUFJLGFBQWEsR0FBRyxNQUFNLENBQUMsY0FBYztTQUNwQyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsWUFBWSxLQUFLLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFT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