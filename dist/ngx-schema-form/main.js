(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./projects/schema-form/src/lib/default.widget.ts":
/*!********************************************************!*\
  !*** ./projects/schema-form/src/lib/default.widget.ts ***!
  \********************************************************/
/*! exports provided: DefaultWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultWidget", function() { return DefaultWidget; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DefaultWidget = /** @class */ (function () {
    function DefaultWidget() {
    }
    DefaultWidget = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sf-default-field',
            template: "<p>Unknow type</p>"
        })
    ], DefaultWidget);
    return DefaultWidget;
}());



/***/ }),

/***/ "./projects/schema-form/src/lib/defaultwidgets/array/array.widget.ts":
/*!***************************************************************************!*\
  !*** ./projects/schema-form/src/lib/defaultwidgets/array/array.widget.ts ***!
  \***************************************************************************/
/*! exports provided: ArrayWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayWidget", function() { return ArrayWidget; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../widget */ "./projects/schema-form/src/lib/widget.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ArrayWidget = /** @class */ (function (_super) {
    __extends(ArrayWidget, _super);
    function ArrayWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArrayWidget.prototype.addItem = function () {
        this.formProperty.addItem();
    };
    ArrayWidget.prototype.removeItem = function (index) {
        this.formProperty.removeItem(index);
    };
    ArrayWidget.prototype.trackByIndex = function (index, item) {
        return index;
    };
    ArrayWidget = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sf-array-widget',
            template: "<div class=\"widget form-group\">\n\t<label [attr.for]=\"id\" class=\"horizontal control-label\">\n\t\t{{ schema.title }}\n\t</label>\n\t<span *ngIf=\"schema.description\" class=\"formHelp\">{{schema.description}}</span>\n\t<div *ngFor=\"let itemProperty of formProperty.properties; let i=index; trackBy:trackByIndex\">\n\t\t<sf-form-element [formProperty]=\"itemProperty\"></sf-form-element>\n\t\t<button (click)=\"removeItem(i)\" class=\"btn btn-default array-remove-button\">\n\t\t\t<span class=\"glyphicon glyphicon-minus\" aria-hidden=\"true\"></span> Remove\n\t\t</button>\n\t</div>\n\t<button (click)=\"addItem()\" class=\"btn btn-default array-add-button\">\n\t\t<span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span> Add\n\t</button>\n</div>"
        })
    ], ArrayWidget);
    return ArrayWidget;
}(_widget__WEBPACK_IMPORTED_MODULE_1__["ArrayLayoutWidget"]));



/***/ }),

/***/ "./projects/schema-form/src/lib/defaultwidgets/button/button.widget.ts":
/*!*****************************************************************************!*\
  !*** ./projects/schema-form/src/lib/defaultwidgets/button/button.widget.ts ***!
  \*****************************************************************************/
/*! exports provided: ButtonWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonWidget", function() { return ButtonWidget; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ButtonWidget = /** @class */ (function () {
    function ButtonWidget() {
    }
    ButtonWidget = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sf-button-widget',
            template: '<button (click)="button.action($event)">{{button.label}}</button>'
        })
    ], ButtonWidget);
    return ButtonWidget;
}());



/***/ }),

/***/ "./projects/schema-form/src/lib/defaultwidgets/checkbox/checkbox.widget.ts":
/*!*********************************************************************************!*\
  !*** ./projects/schema-form/src/lib/defaultwidgets/checkbox/checkbox.widget.ts ***!
  \*********************************************************************************/
/*! exports provided: CheckboxWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxWidget", function() { return CheckboxWidget; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../widget */ "./projects/schema-form/src/lib/widget.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CheckboxWidget = /** @class */ (function (_super) {
    __extends(CheckboxWidget, _super);
    function CheckboxWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.checked = {};
        return _this;
    }
    CheckboxWidget.prototype.ngAfterViewInit = function () {
        var _this = this;
        var control = this.control;
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
    CheckboxWidget.prototype.onCheck = function (el) {
        if (el.checked) {
            this.checked[el.value] = true;
        }
        else {
            delete this.checked[el.value];
        }
        this.formProperty.setValue(Object.keys(this.checked), false);
    };
    CheckboxWidget = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sf-checkbox-widget',
            template: "<div class=\"widget form-group\">\n    <label [attr.for]=\"id\" class=\"horizontal control-label\">\n        {{ schema.title }}\n    </label>\n\t<div *ngIf=\"schema.type!='array'\" class=\"checkbox\">\n\t\t<label class=\"horizontal control-label\">\n\t\t\t<input [formControl]=\"control\" [attr.name]=\"name\" [indeterminate]=\"control.value !== false && control.value !== true ? true :null\" type=\"checkbox\" [attr.disabled]=\"schema.readOnly\">\n\t\t\t<input *ngIf=\"schema.readOnly\" [attr.name]=\"name\" type=\"hidden\" [formControl]=\"control\">\n\t\t\t{{schema.description}}\n\t\t</label>\n\t</div>\n\t<ng-container *ngIf=\"schema.type==='array'\">\n\t\t<div *ngFor=\"let option of schema.items.oneOf\" class=\"checkbox\">\n\t\t\t<label class=\"horizontal control-label\">\n\t\t\t\t<input [attr.name]=\"name\"\n\t\t\t\t\tvalue=\"{{option.enum[0]}}\" type=\"checkbox\" \n\t\t\t\t\t[attr.disabled]=\"schema.readOnly\"\n\t\t\t\t\t(change)=\"onCheck($event.target)\"\n\t\t\t\t\t[attr.checked]=\"checked[option.enum[0]] ? true : null\">\n\t\t\t\t{{option.description}}\n\t\t\t</label>\n\t\t</div>\n\t</ng-container>\n</div>"
        })
    ], CheckboxWidget);
    return CheckboxWidget;
}(_widget__WEBPACK_IMPORTED_MODULE_1__["ControlWidget"]));



/***/ }),

/***/ "./projects/schema-form/src/lib/defaultwidgets/defaultwidgetregistry.ts":
/*!******************************************************************************!*\
  !*** ./projects/schema-form/src/lib/defaultwidgets/defaultwidgetregistry.ts ***!
  \******************************************************************************/
/*! exports provided: DefaultWidgetRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultWidgetRegistry", function() { return DefaultWidgetRegistry; });
/* harmony import */ var _array_array_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array/array.widget */ "./projects/schema-form/src/lib/defaultwidgets/array/array.widget.ts");
/* harmony import */ var _button_button_widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button/button.widget */ "./projects/schema-form/src/lib/defaultwidgets/button/button.widget.ts");
/* harmony import */ var _checkbox_checkbox_widget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkbox/checkbox.widget */ "./projects/schema-form/src/lib/defaultwidgets/checkbox/checkbox.widget.ts");
/* harmony import */ var _file_file_widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./file/file.widget */ "./projects/schema-form/src/lib/defaultwidgets/file/file.widget.ts");
/* harmony import */ var _integer_integer_widget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./integer/integer.widget */ "./projects/schema-form/src/lib/defaultwidgets/integer/integer.widget.ts");
/* harmony import */ var _object_object_widget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./object/object.widget */ "./projects/schema-form/src/lib/defaultwidgets/object/object.widget.ts");
/* harmony import */ var _radio_radio_widget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./radio/radio.widget */ "./projects/schema-form/src/lib/defaultwidgets/radio/radio.widget.ts");
/* harmony import */ var _range_range_widget__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./range/range.widget */ "./projects/schema-form/src/lib/defaultwidgets/range/range.widget.ts");
/* harmony import */ var _select_select_widget__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./select/select.widget */ "./projects/schema-form/src/lib/defaultwidgets/select/select.widget.ts");
/* harmony import */ var _string_string_widget__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./string/string.widget */ "./projects/schema-form/src/lib/defaultwidgets/string/string.widget.ts");
/* harmony import */ var _textarea_textarea_widget__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./textarea/textarea.widget */ "./projects/schema-form/src/lib/defaultwidgets/textarea/textarea.widget.ts");
/* harmony import */ var _widgetregistry__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../widgetregistry */ "./projects/schema-form/src/lib/widgetregistry.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();












var DefaultWidgetRegistry = /** @class */ (function (_super) {
    __extends(DefaultWidgetRegistry, _super);
    function DefaultWidgetRegistry() {
        var _this = _super.call(this) || this;
        _this.register('array', _array_array_widget__WEBPACK_IMPORTED_MODULE_0__["ArrayWidget"]);
        _this.register('object', _object_object_widget__WEBPACK_IMPORTED_MODULE_5__["ObjectWidget"]);
        _this.register('string', _string_string_widget__WEBPACK_IMPORTED_MODULE_9__["StringWidget"]);
        _this.register('search', _string_string_widget__WEBPACK_IMPORTED_MODULE_9__["StringWidget"]);
        _this.register('tel', _string_string_widget__WEBPACK_IMPORTED_MODULE_9__["StringWidget"]);
        _this.register('url', _string_string_widget__WEBPACK_IMPORTED_MODULE_9__["StringWidget"]);
        _this.register('email', _string_string_widget__WEBPACK_IMPORTED_MODULE_9__["StringWidget"]);
        _this.register('password', _string_string_widget__WEBPACK_IMPORTED_MODULE_9__["StringWidget"]);
        _this.register('color', _string_string_widget__WEBPACK_IMPORTED_MODULE_9__["StringWidget"]);
        _this.register('date', _string_string_widget__WEBPACK_IMPORTED_MODULE_9__["StringWidget"]);
        _this.register('date-time', _string_string_widget__WEBPACK_IMPORTED_MODULE_9__["StringWidget"]);
        _this.register('time', _string_string_widget__WEBPACK_IMPORTED_MODULE_9__["StringWidget"]);
        _this.register('integer', _integer_integer_widget__WEBPACK_IMPORTED_MODULE_4__["IntegerWidget"]);
        _this.register('number', _integer_integer_widget__WEBPACK_IMPORTED_MODULE_4__["IntegerWidget"]);
        _this.register('range', _range_range_widget__WEBPACK_IMPORTED_MODULE_7__["RangeWidget"]);
        _this.register('textarea', _textarea_textarea_widget__WEBPACK_IMPORTED_MODULE_10__["TextAreaWidget"]);
        _this.register('file', _file_file_widget__WEBPACK_IMPORTED_MODULE_3__["FileWidget"]);
        _this.register('select', _select_select_widget__WEBPACK_IMPORTED_MODULE_8__["SelectWidget"]);
        _this.register('radio', _radio_radio_widget__WEBPACK_IMPORTED_MODULE_6__["RadioWidget"]);
        _this.register('boolean', _checkbox_checkbox_widget__WEBPACK_IMPORTED_MODULE_2__["CheckboxWidget"]);
        _this.register('checkbox', _checkbox_checkbox_widget__WEBPACK_IMPORTED_MODULE_2__["CheckboxWidget"]);
        _this.register('button', _button_button_widget__WEBPACK_IMPORTED_MODULE_1__["ButtonWidget"]);
        _this.setDefaultWidget(_string_string_widget__WEBPACK_IMPORTED_MODULE_9__["StringWidget"]);
        return _this;
    }
    return DefaultWidgetRegistry;
}(_widgetregistry__WEBPACK_IMPORTED_MODULE_11__["WidgetRegistry"]));



/***/ }),

/***/ "./projects/schema-form/src/lib/defaultwidgets/file/file.widget.ts":
/*!*************************************************************************!*\
  !*** ./projects/schema-form/src/lib/defaultwidgets/file/file.widget.ts ***!
  \*************************************************************************/
/*! exports provided: FileWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileWidget", function() { return FileWidget; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../widget */ "./projects/schema-form/src/lib/widget.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FileWidget = /** @class */ (function (_super) {
    __extends(FileWidget, _super);
    function FileWidget() {
        var _this = _super.call(this) || this;
        _this.reader = new FileReader();
        _this.filedata = {};
        return _this;
    }
    FileWidget.prototype.ngAfterViewInit = function () {
        var _this = this;
        // OVERRIDE ControlWidget ngAfterViewInit() as ReactiveForms do not handle
        // file inputs
        var control = this.control;
        this.formProperty.errorsChanges.subscribe(function (errors) {
            control.setErrors(errors, { emitEvent: true });
        });
        this.reader.onloadend = function () {
            _this.filedata.data = btoa(_this.reader.result);
            _this.formProperty.setValue(_this.filedata, false);
        };
    };
    FileWidget.prototype.onFileChange = function ($event) {
        var file = $event.target.files[0];
        this.filedata.filename = file.name;
        this.filedata.size = file.size;
        this.filedata['content-type'] = file.type;
        this.filedata.encoding = 'base64';
        this.reader.readAsBinaryString(file);
    };
    FileWidget = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sf-file-widget',
            template: "<div class=\"widget form-group\">\n\t<label [attr.for]=\"id\" class=\"horizontal control-label\">\n\t\t{{ schema.title }}\n\t</label>\n    <span *ngIf=\"schema.description\" class=\"formHelp\">{{schema.description}}</span>\n  <input [name]=\"name\" class=\"text-widget file-widget\" [attr.id]=\"id\"\n    [formControl]=\"control\" type=\"file\" [attr.disabled]=\"schema.readOnly?true:null\"\n    (change)=\"onFileChange($event)\">\n\t<input *ngIf=\"schema.readOnly\" [attr.name]=\"name\" type=\"hidden\" [formControl]=\"control\">\n</div>"
        }),
        __metadata("design:paramtypes", [])
    ], FileWidget);
    return FileWidget;
}(_widget__WEBPACK_IMPORTED_MODULE_1__["ControlWidget"]));



/***/ }),

/***/ "./projects/schema-form/src/lib/defaultwidgets/index.ts":
/*!**************************************************************!*\
  !*** ./projects/schema-form/src/lib/defaultwidgets/index.ts ***!
  \**************************************************************/
/*! exports provided: ArrayWidget, CheckboxWidget, FileWidget, IntegerWidget, ObjectWidget, RadioWidget, RangeWidget, SelectWidget, StringWidget, TextAreaWidget, ButtonWidget, DefaultWidgetRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array_array_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array/array.widget */ "./projects/schema-form/src/lib/defaultwidgets/array/array.widget.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrayWidget", function() { return _array_array_widget__WEBPACK_IMPORTED_MODULE_0__["ArrayWidget"]; });

/* harmony import */ var _checkbox_checkbox_widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox/checkbox.widget */ "./projects/schema-form/src/lib/defaultwidgets/checkbox/checkbox.widget.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxWidget", function() { return _checkbox_checkbox_widget__WEBPACK_IMPORTED_MODULE_1__["CheckboxWidget"]; });

/* harmony import */ var _file_file_widget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file/file.widget */ "./projects/schema-form/src/lib/defaultwidgets/file/file.widget.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileWidget", function() { return _file_file_widget__WEBPACK_IMPORTED_MODULE_2__["FileWidget"]; });

/* harmony import */ var _integer_integer_widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./integer/integer.widget */ "./projects/schema-form/src/lib/defaultwidgets/integer/integer.widget.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntegerWidget", function() { return _integer_integer_widget__WEBPACK_IMPORTED_MODULE_3__["IntegerWidget"]; });

/* harmony import */ var _object_object_widget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./object/object.widget */ "./projects/schema-form/src/lib/defaultwidgets/object/object.widget.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObjectWidget", function() { return _object_object_widget__WEBPACK_IMPORTED_MODULE_4__["ObjectWidget"]; });

/* harmony import */ var _radio_radio_widget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./radio/radio.widget */ "./projects/schema-form/src/lib/defaultwidgets/radio/radio.widget.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioWidget", function() { return _radio_radio_widget__WEBPACK_IMPORTED_MODULE_5__["RadioWidget"]; });

/* harmony import */ var _range_range_widget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./range/range.widget */ "./projects/schema-form/src/lib/defaultwidgets/range/range.widget.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RangeWidget", function() { return _range_range_widget__WEBPACK_IMPORTED_MODULE_6__["RangeWidget"]; });

/* harmony import */ var _select_select_widget__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./select/select.widget */ "./projects/schema-form/src/lib/defaultwidgets/select/select.widget.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectWidget", function() { return _select_select_widget__WEBPACK_IMPORTED_MODULE_7__["SelectWidget"]; });

/* harmony import */ var _string_string_widget__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./string/string.widget */ "./projects/schema-form/src/lib/defaultwidgets/string/string.widget.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringWidget", function() { return _string_string_widget__WEBPACK_IMPORTED_MODULE_8__["StringWidget"]; });

/* harmony import */ var _textarea_textarea_widget__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./textarea/textarea.widget */ "./projects/schema-form/src/lib/defaultwidgets/textarea/textarea.widget.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextAreaWidget", function() { return _textarea_textarea_widget__WEBPACK_IMPORTED_MODULE_9__["TextAreaWidget"]; });

/* harmony import */ var _button_button_widget__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./button/button.widget */ "./projects/schema-form/src/lib/defaultwidgets/button/button.widget.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonWidget", function() { return _button_button_widget__WEBPACK_IMPORTED_MODULE_10__["ButtonWidget"]; });

/* harmony import */ var _defaultwidgetregistry__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./defaultwidgetregistry */ "./projects/schema-form/src/lib/defaultwidgets/defaultwidgetregistry.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultWidgetRegistry", function() { return _defaultwidgetregistry__WEBPACK_IMPORTED_MODULE_11__["DefaultWidgetRegistry"]; });















/***/ }),

/***/ "./projects/schema-form/src/lib/defaultwidgets/integer/integer.widget.ts":
/*!*******************************************************************************!*\
  !*** ./projects/schema-form/src/lib/defaultwidgets/integer/integer.widget.ts ***!
  \*******************************************************************************/
/*! exports provided: IntegerWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntegerWidget", function() { return IntegerWidget; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../widget */ "./projects/schema-form/src/lib/widget.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var IntegerWidget = /** @class */ (function (_super) {
    __extends(IntegerWidget, _super);
    function IntegerWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IntegerWidget = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sf-integer-widget',
            template: "<div class=\"widget form-group\">\n\t<label [attr.for]=\"id\" class=\"horizontal control-label\">\n\t\t{{ schema.title }}\n\t</label>\n  <span *ngIf=\"schema.description\" class=\"formHelp\">{{schema.description}}</span>\n\t<input [attr.readonly]=\"schema.readOnly?true:null\" [name]=\"name\"\n\tclass=\"text-widget integer-widget form-control\" [formControl]=\"control\"\n\t[attr.type]=\"'number'\" [attr.min]=\"schema.minimum\" [attr.max]=\"schema.maximum\"\n\t[attr.placeholder]=\"schema.placeholder\"\n\t[attr.maxLength]=\"schema.maxLength || null\"\n  [attr.minLength]=\"schema.minLength || null\">\n</div>"
        })
    ], IntegerWidget);
    return IntegerWidget;
}(_widget__WEBPACK_IMPORTED_MODULE_1__["ControlWidget"]));



/***/ }),

/***/ "./projects/schema-form/src/lib/defaultwidgets/object/object.widget.ts":
/*!*****************************************************************************!*\
  !*** ./projects/schema-form/src/lib/defaultwidgets/object/object.widget.ts ***!
  \*****************************************************************************/
/*! exports provided: ObjectWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectWidget", function() { return ObjectWidget; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../widget */ "./projects/schema-form/src/lib/widget.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ObjectWidget = /** @class */ (function (_super) {
    __extends(ObjectWidget, _super);
    function ObjectWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ObjectWidget = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sf-form-object',
            template: "<fieldset *ngFor=\"let fieldset of formProperty.schema.fieldsets\">\n\t<legend *ngIf=\"fieldset.title\">{{fieldset.title}}</legend>\n\t<div *ngIf=\"fieldset.description\">{{fieldset.description}}</div>\n\t<div *ngFor=\"let fieldId of fieldset.fields\">\n\t\t<sf-form-element [formProperty]=\"formProperty.getProperty(fieldId)\"></sf-form-element>\n\t</div>\n</fieldset>"
        })
    ], ObjectWidget);
    return ObjectWidget;
}(_widget__WEBPACK_IMPORTED_MODULE_1__["ObjectLayoutWidget"]));



/***/ }),

/***/ "./projects/schema-form/src/lib/defaultwidgets/radio/radio.widget.ts":
/*!***************************************************************************!*\
  !*** ./projects/schema-form/src/lib/defaultwidgets/radio/radio.widget.ts ***!
  \***************************************************************************/
/*! exports provided: RadioWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioWidget", function() { return RadioWidget; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../widget */ "./projects/schema-form/src/lib/widget.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RadioWidget = /** @class */ (function (_super) {
    __extends(RadioWidget, _super);
    function RadioWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RadioWidget = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sf-radio-widget',
            template: "<div class=\"widget form-group\">\n\t<label>{{schema.title}}</label>\n    <span *ngIf=\"schema.description\" class=\"formHelp\">{{schema.description}}</span>\n\t<div *ngFor=\"let option of schema.oneOf\" class=\"radio\">\n\t\t<label class=\"horizontal control-label\">\n\t\t\t<input [formControl]=\"control\" [attr.name]=\"name\" value=\"{{option.enum[0]}}\" type=\"radio\"  [attr.disabled]=\"schema.readOnly\">\n\t\t\t{{option.description}}\n\t\t</label>\n\t</div>\n\t<input *ngIf=\"schema.readOnly\" [attr.name]=\"name\" type=\"hidden\" [formControl]=\"control\">\n</div>"
        })
    ], RadioWidget);
    return RadioWidget;
}(_widget__WEBPACK_IMPORTED_MODULE_1__["ControlWidget"]));



/***/ }),

/***/ "./projects/schema-form/src/lib/defaultwidgets/range/range.widget.ts":
/*!***************************************************************************!*\
  !*** ./projects/schema-form/src/lib/defaultwidgets/range/range.widget.ts ***!
  \***************************************************************************/
/*! exports provided: RangeWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeWidget", function() { return RangeWidget; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../widget */ "./projects/schema-form/src/lib/widget.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RangeWidget = /** @class */ (function (_super) {
    __extends(RangeWidget, _super);
    function RangeWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RangeWidget = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sf-range-widget',
            template: "<div class=\"widget form-group\">\n\t<label [attr.for]=\"id\" class=\"horizontal control-label\">\n\t\t{{ schema.title }}\n\t</label>\n    <span *ngIf=\"schema.description\" class=\"formHelp\">{{schema.description}}</span>\t\n\t<input [name]=\"name\" class=\"text-widget range-widget\" [attr.id]=\"id\"\n\t[formControl]=\"control\" [attr.type]=\"'range'\" [attr.min]=\"schema.minimum\" [attr.max]=\"schema.maximum\" [attr.disabled]=\"schema.readOnly?true:null\" >\n\t<input *ngIf=\"schema.readOnly\" [attr.name]=\"name\" type=\"hidden\">\n</div>"
        })
    ], RangeWidget);
    return RangeWidget;
}(_widget__WEBPACK_IMPORTED_MODULE_1__["ControlWidget"]));



/***/ }),

/***/ "./projects/schema-form/src/lib/defaultwidgets/select/select.widget.ts":
/*!*****************************************************************************!*\
  !*** ./projects/schema-form/src/lib/defaultwidgets/select/select.widget.ts ***!
  \*****************************************************************************/
/*! exports provided: SelectWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectWidget", function() { return SelectWidget; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../widget */ "./projects/schema-form/src/lib/widget.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SelectWidget = /** @class */ (function (_super) {
    __extends(SelectWidget, _super);
    function SelectWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectWidget = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sf-select-widget',
            template: "<div class=\"widget form-group\">\n\t<label [attr.for]=\"id\" class=\"horizontal control-label\">\n\t\t{{ schema.title }}\n\t</label>\n\n\t<span *ngIf=\"schema.description\" class=\"formHelp\">\n\t\t{{schema.description}}\n\t</span>\n\n\t<select *ngIf=\"schema.type!='array'\" [formControl]=\"control\" [attr.name]=\"name\" [attr.disabled]=\"schema.readOnly\" class=\"form-control\">\n\t\t<option *ngFor=\"let option of schema.oneOf\" [ngValue]=\"option.enum[0]\" >{{option.description}}</option>\n\t</select>\n\n\t<select *ngIf=\"schema.type==='array'\" multiple [formControl]=\"control\" [attr.name]=\"name\" [attr.disabled]=\"schema.readOnly\" class=\"form-control\">\n\t\t<option *ngFor=\"let option of schema.items.oneOf\" [ngValue]=\"option.enum[0]\" >{{option.description}}</option>\n\t</select>\n\n\t<input *ngIf=\"schema.readOnly\" [attr.name]=\"name\" type=\"hidden\" [formControl]=\"control\">\n</div>"
        })
    ], SelectWidget);
    return SelectWidget;
}(_widget__WEBPACK_IMPORTED_MODULE_1__["ControlWidget"]));



/***/ }),

/***/ "./projects/schema-form/src/lib/defaultwidgets/string/string.widget.ts":
/*!*****************************************************************************!*\
  !*** ./projects/schema-form/src/lib/defaultwidgets/string/string.widget.ts ***!
  \*****************************************************************************/
/*! exports provided: StringWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringWidget", function() { return StringWidget; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../widget */ "./projects/schema-form/src/lib/widget.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var StringWidget = /** @class */ (function (_super) {
    __extends(StringWidget, _super);
    function StringWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StringWidget.prototype.getInputType = function () {
        if (!this.schema.widget.id || this.schema.widget.id === 'string') {
            return 'text';
        }
        else {
            return this.schema.widget.id;
        }
    };
    StringWidget = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sf-string-widget',
            template: "<input *ngIf=\"this.getInputType()==='hidden'; else notHiddenFieldBlock\"\n  [attr.name]=\"name\" type=\"hidden\" [formControl]=\"control\">\n<ng-template #notHiddenFieldBlock>\n<div class=\"widget form-group\">\n    <label [attr.for]=\"id\" class=\"horizontal control-label\">\n    \t{{ schema.title }}\n    </label>\n    <span *ngIf=\"schema.description\" class=\"formHelp\">{{schema.description}}</span>\n    <input [name]=\"name\" [attr.readonly]=\"(schema.widget.id!=='color') && schema.readOnly?true:null\"\n    class=\"text-widget.id textline-widget form-control\" [attr.type]=\"this.getInputType()\"\n    [attr.id]=\"id\"  [formControl]=\"control\" [attr.placeholder]=\"schema.placeholder\"\n    [attr.maxLength]=\"schema.maxLength || null\"\n    [attr.minLength]=\"schema.minLength || null\"\n    [attr.disabled]=\"(schema.widget.id=='color' && schema.readOnly)?true:null\">\n    <input *ngIf=\"(schema.widget.id==='color' && schema.readOnly)\" [attr.name]=\"name\" type=\"hidden\" [formControl]=\"control\">\n</div>\n</ng-template>"
        })
    ], StringWidget);
    return StringWidget;
}(_widget__WEBPACK_IMPORTED_MODULE_1__["ControlWidget"]));



/***/ }),

/***/ "./projects/schema-form/src/lib/defaultwidgets/textarea/textarea.widget.ts":
/*!*********************************************************************************!*\
  !*** ./projects/schema-form/src/lib/defaultwidgets/textarea/textarea.widget.ts ***!
  \*********************************************************************************/
/*! exports provided: TextAreaWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextAreaWidget", function() { return TextAreaWidget; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../widget */ "./projects/schema-form/src/lib/widget.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TextAreaWidget = /** @class */ (function (_super) {
    __extends(TextAreaWidget, _super);
    function TextAreaWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextAreaWidget = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sf-textarea-widget',
            template: "<div class=\"widget form-group\">\n\t<label [attr.for]=\"id\" class=\"horizontal control-label\">\n\t\t{{ schema.title }}\n\t</label>\n    <span *ngIf=\"schema.description\" class=\"formHelp\">{{schema.description}}</span>\n\t<textarea [attr.readonly]=\"schema.readOnly\" [name]=\"name\"\n\t\tclass=\"text-widget textarea-widget form-control\"\n\t\t[attr.placeholder]=\"schema.placeholder\"\n\t\t[attr.maxLength]=\"schema.maxLength || null\"\n    [attr.minLength]=\"schema.minLength || null\"\n\t\t[formControl]=\"control\"></textarea>\n</div>"
        })
    ], TextAreaWidget);
    return TextAreaWidget;
}(_widget__WEBPACK_IMPORTED_MODULE_1__["ControlWidget"]));



/***/ }),

/***/ "./projects/schema-form/src/lib/form.component.ts":
/*!********************************************************!*\
  !*** ./projects/schema-form/src/lib/form.component.ts ***!
  \********************************************************/
/*! exports provided: useFactory, FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFactory", function() { return useFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _model_actionregistry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/actionregistry */ "./projects/schema-form/src/lib/model/actionregistry.ts");
/* harmony import */ var _model_formpropertyfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/formpropertyfactory */ "./projects/schema-form/src/lib/model/formpropertyfactory.ts");
/* harmony import */ var _model_schemapreprocessor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/schemapreprocessor */ "./projects/schema-form/src/lib/model/schemapreprocessor.ts");
/* harmony import */ var _model_validatorregistry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model/validatorregistry */ "./projects/schema-form/src/lib/model/validatorregistry.ts");
/* harmony import */ var _model_bindingregistry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model/bindingregistry */ "./projects/schema-form/src/lib/model/bindingregistry.ts");
/* harmony import */ var _schemavalidatorfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./schemavalidatorfactory */ "./projects/schema-form/src/lib/schemavalidatorfactory.ts");
/* harmony import */ var _widgetfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./widgetfactory */ "./projects/schema-form/src/lib/widgetfactory.ts");
/* harmony import */ var _terminator_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./terminator.service */ "./projects/schema-form/src/lib/terminator.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










function useFactory(schemaValidatorFactory, validatorRegistry) {
    return new _model_formpropertyfactory__WEBPACK_IMPORTED_MODULE_3__["FormPropertyFactory"](schemaValidatorFactory, validatorRegistry);
}
var FormComponent = /** @class */ (function () {
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
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isValid = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onErrorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onErrorsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rootProperty = null;
    }
    FormComponent_1 = FormComponent;
    FormComponent.prototype.writeValue = function (obj) {
        if (this.rootProperty) {
            this.rootProperty.reset(obj, false);
        }
    };
    FormComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
        if (this.rootProperty) {
            this.rootProperty.valueChanges.subscribe(this.onValueChanges.bind(this));
        }
    };
    // TODO implement
    FormComponent.prototype.registerOnTouched = function (fn) {
    };
    // TODO implement
    // setDisabledState(isDisabled: boolean)?: void
    FormComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.validators) {
            this.setValidators();
        }
        if (changes.actions) {
            this.setActions();
        }
        if (changes.bindings) {
            this.setBindings();
        }
        if (this.schema && !this.schema.type) {
            this.schema.type = 'object';
        }
        if (this.schema && changes.schema) {
            if (!changes.schema.firstChange) {
                this.terminator.destroy();
            }
            _model_schemapreprocessor__WEBPACK_IMPORTED_MODULE_4__["SchemaPreprocessor"].preprocess(this.schema);
            this.rootProperty = this.formPropertyFactory.createProperty(this.schema);
            if (this.model) {
                // this.rootProperty.reset(this.model, false);
            }
            this.rootProperty.valueChanges.subscribe(this.onValueChanges.bind(this));
            this.rootProperty.errorsChanges.subscribe(function (value) {
                _this.onErrorChange.emit({ value: value });
                _this.isValid.emit(!(value && value.length));
            });
        }
        if (this.schema && (changes.model || changes.schema)) {
            this.rootProperty.reset(this.model, false);
            this.cdr.detectChanges();
        }
    };
    FormComponent.prototype.setValidators = function () {
        this.validatorRegistry.clear();
        if (this.validators) {
            for (var validatorId in this.validators) {
                if (this.validators.hasOwnProperty(validatorId)) {
                    this.validatorRegistry.register(validatorId, this.validators[validatorId]);
                }
            }
        }
    };
    FormComponent.prototype.setActions = function () {
        this.actionRegistry.clear();
        if (this.actions) {
            for (var actionId in this.actions) {
                if (this.actions.hasOwnProperty(actionId)) {
                    this.actionRegistry.register(actionId, this.actions[actionId]);
                }
            }
        }
    };
    FormComponent.prototype.setBindings = function () {
        this.bindingRegistry.clear();
        if (this.bindings) {
            for (var bindingPath in this.bindings) {
                if (this.bindings.hasOwnProperty(bindingPath)) {
                    this.bindingRegistry.register(bindingPath, this.bindings[bindingPath]);
                }
            }
        }
    };
    FormComponent.prototype.reset = function () {
        this.rootProperty.reset(null, true);
    };
    FormComponent.prototype.setModel = function (value) {
        if (this.model) {
            Object.assign(this.model, value);
        }
        else {
            this.model = value;
        }
    };
    FormComponent.prototype.onValueChanges = function (value) {
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormComponent.prototype, "schema", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormComponent.prototype, "model", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormComponent.prototype, "actions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormComponent.prototype, "validators", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormComponent.prototype, "bindings", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FormComponent.prototype, "onChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FormComponent.prototype, "modelChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FormComponent.prototype, "isValid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FormComponent.prototype, "onErrorChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FormComponent.prototype, "onErrorsChange", void 0);
    FormComponent = FormComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sf-form',
            template: "\n    <form>\n      <sf-form-element\n        *ngIf=\"rootProperty\" [formProperty]=\"rootProperty\"></sf-form-element>\n    </form>",
            providers: [
                _model_actionregistry__WEBPACK_IMPORTED_MODULE_2__["ActionRegistry"],
                _model_validatorregistry__WEBPACK_IMPORTED_MODULE_5__["ValidatorRegistry"],
                _model_bindingregistry__WEBPACK_IMPORTED_MODULE_6__["BindingRegistry"],
                _model_schemapreprocessor__WEBPACK_IMPORTED_MODULE_4__["SchemaPreprocessor"],
                _widgetfactory__WEBPACK_IMPORTED_MODULE_8__["WidgetFactory"],
                {
                    provide: _model_formpropertyfactory__WEBPACK_IMPORTED_MODULE_3__["FormPropertyFactory"],
                    useFactory: useFactory,
                    deps: [_schemavalidatorfactory__WEBPACK_IMPORTED_MODULE_7__["SchemaValidatorFactory"], _model_validatorregistry__WEBPACK_IMPORTED_MODULE_5__["ValidatorRegistry"]]
                },
                _terminator_service__WEBPACK_IMPORTED_MODULE_9__["TerminatorService"],
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: FormComponent_1,
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [_model_formpropertyfactory__WEBPACK_IMPORTED_MODULE_3__["FormPropertyFactory"],
            _model_actionregistry__WEBPACK_IMPORTED_MODULE_2__["ActionRegistry"],
            _model_validatorregistry__WEBPACK_IMPORTED_MODULE_5__["ValidatorRegistry"],
            _model_bindingregistry__WEBPACK_IMPORTED_MODULE_6__["BindingRegistry"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _terminator_service__WEBPACK_IMPORTED_MODULE_9__["TerminatorService"]])
    ], FormComponent);
    return FormComponent;
    var FormComponent_1;
}());



/***/ }),

/***/ "./projects/schema-form/src/lib/formelement.action.component.ts":
/*!**********************************************************************!*\
  !*** ./projects/schema-form/src/lib/formelement.action.component.ts ***!
  \**********************************************************************/
/*! exports provided: FormElementComponentAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormElementComponentAction", function() { return FormElementComponentAction; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _widgetfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widgetfactory */ "./projects/schema-form/src/lib/widgetfactory.ts");
/* harmony import */ var _terminator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./terminator.service */ "./projects/schema-form/src/lib/terminator.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormElementComponentAction = /** @class */ (function () {
    function FormElementComponentAction(widgetFactory, terminator) {
        if (widgetFactory === void 0) { widgetFactory = null; }
        this.widgetFactory = widgetFactory;
        this.terminator = terminator;
    }
    FormElementComponentAction.prototype.ngOnInit = function () {
        var _this = this;
        this.subs = this.terminator.onDestroy.subscribe(function (destroy) {
            if (destroy) {
                _this.ref.destroy();
            }
        });
    };
    FormElementComponentAction.prototype.ngOnChanges = function () {
        this.ref = this.widgetFactory.createWidget(this.container, this.button.widget || 'button');
        this.ref.instance.button = this.button;
        this.ref.instance.formProperty = this.formProperty;
    };
    FormElementComponentAction.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormElementComponentAction.prototype, "button", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormElementComponentAction.prototype, "formProperty", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('target', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], FormElementComponentAction.prototype, "container", void 0);
    FormElementComponentAction = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sf-form-element-action',
            template: '<ng-template #target></ng-template>'
        }),
        __metadata("design:paramtypes", [_widgetfactory__WEBPACK_IMPORTED_MODULE_1__["WidgetFactory"],
            _terminator_service__WEBPACK_IMPORTED_MODULE_2__["TerminatorService"]])
    ], FormElementComponentAction);
    return FormElementComponentAction;
}());



/***/ }),

/***/ "./projects/schema-form/src/lib/formelement.component.ts":
/*!***************************************************************!*\
  !*** ./projects/schema-form/src/lib/formelement.component.ts ***!
  \***************************************************************/
/*! exports provided: FormElementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormElementComponent", function() { return FormElementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _model_actionregistry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/actionregistry */ "./projects/schema-form/src/lib/model/actionregistry.ts");
/* harmony import */ var _model_formproperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/formproperty */ "./projects/schema-form/src/lib/model/formproperty.ts");
/* harmony import */ var _model_bindingregistry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/bindingregistry */ "./projects/schema-form/src/lib/model/bindingregistry.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FormElementComponent = /** @class */ (function () {
    function FormElementComponent(actionRegistry, bindingRegistry, renderer, elementRef) {
        this.actionRegistry = actionRegistry;
        this.bindingRegistry = bindingRegistry;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', function () { return null; });
        this.widget = null;
        this.buttons = [];
        this.unlisten = [];
    }
    FormElementComponent_1 = FormElementComponent;
    FormElementComponent.prototype.ngOnInit = function () {
        this.parseButtons();
        this.setupBindings();
    };
    FormElementComponent.prototype.setupBindings = function () {
        var _this = this;
        var bindings = this.bindingRegistry.get(this.formProperty.path);
        if ((bindings || []).length) {
            bindings.forEach(function (binding) {
                for (var eventId in binding) {
                    _this.createBinding(eventId, binding[eventId]);
                }
            });
        }
    };
    FormElementComponent.prototype.createBinding = function (eventId, listener) {
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
    FormElementComponent.prototype.parseButtons = function () {
        if (this.formProperty.schema.buttons !== undefined) {
            this.buttons = this.formProperty.schema.buttons;
            for (var _i = 0, _a = this.buttons; _i < _a.length; _i++) {
                var button = _a[_i];
                this.createButtonCallback(button);
            }
        }
    };
    FormElementComponent.prototype.createButtonCallback = function (button) {
        var _this = this;
        button.action = function (e) {
            var action;
            if (button.id && (action = _this.actionRegistry.get(button.id))) {
                if (action) {
                    action(_this.formProperty, button.parameters);
                }
            }
            e.preventDefault();
        };
    };
    FormElementComponent.prototype.onWidgetInstanciated = function (widget) {
        this.widget = widget;
        var id = 'field' + (FormElementComponent_1.counter++);
        this.widget.formProperty = this.formProperty;
        this.widget.schema = this.formProperty.schema;
        this.widget.name = id;
        this.widget.id = id;
        this.widget.control = this.control;
    };
    FormElementComponent.prototype.ngOnDestroy = function () {
        if (this.unlisten) {
            this.unlisten.forEach(function (item) {
                item();
            });
        }
    };
    FormElementComponent.counter = 0;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_formproperty__WEBPACK_IMPORTED_MODULE_3__["FormProperty"])
    ], FormElementComponent.prototype, "formProperty", void 0);
    FormElementComponent = FormElementComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sf-form-element',
            template: "\n    <div *ngIf=\"formProperty.visible\"\n         [class.has-error]=\"!control.valid\"\n         [class.has-success]=\"control.valid\">\n      <sf-widget-chooser\n        (widgetInstanciated)=\"onWidgetInstanciated($event)\"\n        [widgetInfo]=\"formProperty.schema.widget\">\n      </sf-widget-chooser>\n      <sf-form-element-action *ngFor=\"let button of buttons\" [button]=\"button\" [formProperty]=\"formProperty\"></sf-form-element-action>\n    </div>"
        }),
        __metadata("design:paramtypes", [_model_actionregistry__WEBPACK_IMPORTED_MODULE_2__["ActionRegistry"],
            _model_bindingregistry__WEBPACK_IMPORTED_MODULE_4__["BindingRegistry"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], FormElementComponent);
    return FormElementComponent;
    var FormElementComponent_1;
}());



/***/ }),

/***/ "./projects/schema-form/src/lib/index.ts":
/*!***********************************************!*\
  !*** ./projects/schema-form/src/lib/index.ts ***!
  \***********************************************/
/*! exports provided: FormComponent, FormElementComponent, FormElementComponentAction, WidgetChooserComponent, WidgetRegistry, ValidatorRegistry, ActionRegistry, BindingRegistry, SchemaValidatorFactory, ZSchemaValidatorFactory, Widget, ControlWidget, ArrayLayoutWidget, ObjectLayoutWidget, ArrayWidget, CheckboxWidget, FileWidget, IntegerWidget, ObjectWidget, RadioWidget, RangeWidget, SelectWidget, StringWidget, TextAreaWidget, ButtonWidget, DefaultWidgetRegistry, SchemaFormModule, TemplateSchemaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.component */ "./projects/schema-form/src/lib/form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return _form_component__WEBPACK_IMPORTED_MODULE_0__["FormComponent"]; });

/* harmony import */ var _formelement_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formelement.component */ "./projects/schema-form/src/lib/formelement.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormElementComponent", function() { return _formelement_component__WEBPACK_IMPORTED_MODULE_1__["FormElementComponent"]; });

/* harmony import */ var _formelement_action_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formelement.action.component */ "./projects/schema-form/src/lib/formelement.action.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormElementComponentAction", function() { return _formelement_action_component__WEBPACK_IMPORTED_MODULE_2__["FormElementComponentAction"]; });

/* harmony import */ var _widgetchooser_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widgetchooser.component */ "./projects/schema-form/src/lib/widgetchooser.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WidgetChooserComponent", function() { return _widgetchooser_component__WEBPACK_IMPORTED_MODULE_3__["WidgetChooserComponent"]; });

/* harmony import */ var _widgetregistry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./widgetregistry */ "./projects/schema-form/src/lib/widgetregistry.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WidgetRegistry", function() { return _widgetregistry__WEBPACK_IMPORTED_MODULE_4__["WidgetRegistry"]; });

/* harmony import */ var _model_validatorregistry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model/validatorregistry */ "./projects/schema-form/src/lib/model/validatorregistry.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidatorRegistry", function() { return _model_validatorregistry__WEBPACK_IMPORTED_MODULE_5__["ValidatorRegistry"]; });

/* harmony import */ var _model_actionregistry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model/actionregistry */ "./projects/schema-form/src/lib/model/actionregistry.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionRegistry", function() { return _model_actionregistry__WEBPACK_IMPORTED_MODULE_6__["ActionRegistry"]; });

/* harmony import */ var _model_bindingregistry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./model/bindingregistry */ "./projects/schema-form/src/lib/model/bindingregistry.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BindingRegistry", function() { return _model_bindingregistry__WEBPACK_IMPORTED_MODULE_7__["BindingRegistry"]; });

/* harmony import */ var _schemavalidatorfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./schemavalidatorfactory */ "./projects/schema-form/src/lib/schemavalidatorfactory.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SchemaValidatorFactory", function() { return _schemavalidatorfactory__WEBPACK_IMPORTED_MODULE_8__["SchemaValidatorFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZSchemaValidatorFactory", function() { return _schemavalidatorfactory__WEBPACK_IMPORTED_MODULE_8__["ZSchemaValidatorFactory"]; });

/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./widget */ "./projects/schema-form/src/lib/widget.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Widget", function() { return _widget__WEBPACK_IMPORTED_MODULE_9__["Widget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlWidget", function() { return _widget__WEBPACK_IMPORTED_MODULE_9__["ControlWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrayLayoutWidget", function() { return _widget__WEBPACK_IMPORTED_MODULE_9__["ArrayLayoutWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObjectLayoutWidget", function() { return _widget__WEBPACK_IMPORTED_MODULE_9__["ObjectLayoutWidget"]; });

/* harmony import */ var _defaultwidgets__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./defaultwidgets */ "./projects/schema-form/src/lib/defaultwidgets/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrayWidget", function() { return _defaultwidgets__WEBPACK_IMPORTED_MODULE_10__["ArrayWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxWidget", function() { return _defaultwidgets__WEBPACK_IMPORTED_MODULE_10__["CheckboxWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileWidget", function() { return _defaultwidgets__WEBPACK_IMPORTED_MODULE_10__["FileWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntegerWidget", function() { return _defaultwidgets__WEBPACK_IMPORTED_MODULE_10__["IntegerWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObjectWidget", function() { return _defaultwidgets__WEBPACK_IMPORTED_MODULE_10__["ObjectWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioWidget", function() { return _defaultwidgets__WEBPACK_IMPORTED_MODULE_10__["RadioWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RangeWidget", function() { return _defaultwidgets__WEBPACK_IMPORTED_MODULE_10__["RangeWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectWidget", function() { return _defaultwidgets__WEBPACK_IMPORTED_MODULE_10__["SelectWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringWidget", function() { return _defaultwidgets__WEBPACK_IMPORTED_MODULE_10__["StringWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextAreaWidget", function() { return _defaultwidgets__WEBPACK_IMPORTED_MODULE_10__["TextAreaWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonWidget", function() { return _defaultwidgets__WEBPACK_IMPORTED_MODULE_10__["ButtonWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultWidgetRegistry", function() { return _defaultwidgets__WEBPACK_IMPORTED_MODULE_10__["DefaultWidgetRegistry"]; });

/* harmony import */ var _schema_form_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./schema-form.module */ "./projects/schema-form/src/lib/schema-form.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SchemaFormModule", function() { return _schema_form_module__WEBPACK_IMPORTED_MODULE_11__["SchemaFormModule"]; });

/* harmony import */ var _template_schema_template_schema_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./template-schema/template-schema.module */ "./projects/schema-form/src/lib/template-schema/template-schema.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateSchemaModule", function() { return _template_schema_template_schema_module__WEBPACK_IMPORTED_MODULE_12__["TemplateSchemaModule"]; });
















/***/ }),

/***/ "./projects/schema-form/src/lib/model/actionregistry.ts":
/*!**************************************************************!*\
  !*** ./projects/schema-form/src/lib/model/actionregistry.ts ***!
  \**************************************************************/
/*! exports provided: ActionRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionRegistry", function() { return ActionRegistry; });
var ActionRegistry = /** @class */ (function () {
    function ActionRegistry() {
        this.actions = {};
    }
    ActionRegistry.prototype.clear = function () {
        this.actions = {};
    };
    ActionRegistry.prototype.register = function (actionId, action) {
        this.actions[actionId] = action;
    };
    ActionRegistry.prototype.get = function (actionId) {
        return this.actions[actionId];
    };
    return ActionRegistry;
}());



/***/ }),

/***/ "./projects/schema-form/src/lib/model/arrayproperty.ts":
/*!*************************************************************!*\
  !*** ./projects/schema-form/src/lib/model/arrayproperty.ts ***!
  \*************************************************************/
/*! exports provided: ArrayProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayProperty", function() { return ArrayProperty; });
/* harmony import */ var _formproperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formproperty */ "./projects/schema-form/src/lib/model/formproperty.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ArrayProperty = /** @class */ (function (_super) {
    __extends(ArrayProperty, _super);
    function ArrayProperty(formPropertyFactory, schemaValidatorFactory, validatorRegistry, schema, parent, path) {
        var _this = _super.call(this, schemaValidatorFactory, validatorRegistry, schema, parent, path) || this;
        _this.formPropertyFactory = formPropertyFactory;
        return _this;
    }
    ArrayProperty.prototype.addItem = function (value) {
        if (value === void 0) { value = null; }
        var newProperty = this.addProperty();
        newProperty.reset(value, false);
        return newProperty;
    };
    ArrayProperty.prototype.addProperty = function () {
        var newProperty = this.formPropertyFactory.createProperty(this.schema.items, this);
        this.properties.push(newProperty);
        return newProperty;
    };
    ArrayProperty.prototype.removeItem = function (index) {
        this.properties.splice(index, 1);
        this.updateValueAndValidity(false, true);
    };
    ArrayProperty.prototype.setValue = function (value, onlySelf) {
        this.createProperties();
        this.resetProperties(value);
        this.updateValueAndValidity(onlySelf, true);
    };
    ArrayProperty.prototype._hasValue = function () {
        return true;
    };
    ArrayProperty.prototype._updateValue = function () {
        this.reduceValue();
    };
    ArrayProperty.prototype.reduceValue = function () {
        var value = [];
        this.forEachChild(function (property, _) {
            if (property.visible && property._hasValue()) {
                value.push(property.value);
            }
        });
        this._value = value;
    };
    ArrayProperty.prototype.reset = function (value, onlySelf) {
        if (onlySelf === void 0) { onlySelf = true; }
        value = value || this.schema.default || [];
        this.properties = [];
        this.resetProperties(value);
        this.updateValueAndValidity(onlySelf, true);
    };
    ArrayProperty.prototype.createProperties = function () {
        this.properties = [];
    };
    ArrayProperty.prototype.resetProperties = function (value) {
        for (var idx in value) {
            if (value.hasOwnProperty(idx)) {
                var property = this.addProperty();
                property.reset(value[idx], true);
            }
        }
    };
    return ArrayProperty;
}(_formproperty__WEBPACK_IMPORTED_MODULE_0__["PropertyGroup"]));



/***/ }),

/***/ "./projects/schema-form/src/lib/model/atomicproperty.ts":
/*!**************************************************************!*\
  !*** ./projects/schema-form/src/lib/model/atomicproperty.ts ***!
  \**************************************************************/
/*! exports provided: AtomicProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtomicProperty", function() { return AtomicProperty; });
/* harmony import */ var _formproperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formproperty */ "./projects/schema-form/src/lib/model/formproperty.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var AtomicProperty = /** @class */ (function (_super) {
    __extends(AtomicProperty, _super);
    function AtomicProperty() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtomicProperty.prototype.setValue = function (value, onlySelf) {
        if (onlySelf === void 0) { onlySelf = false; }
        this._value = value;
        this.updateValueAndValidity(onlySelf, true);
    };
    AtomicProperty.prototype.reset = function (value, onlySelf) {
        if (value === void 0) { value = null; }
        if (onlySelf === void 0) { onlySelf = true; }
        this.resetValue(value);
        this.updateValueAndValidity(onlySelf, true);
    };
    AtomicProperty.prototype.resetValue = function (value) {
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
    AtomicProperty.prototype._hasValue = function () {
        return this.fallbackValue() !== this.value;
    };
    AtomicProperty.prototype._updateValue = function () {
    };
    return AtomicProperty;
}(_formproperty__WEBPACK_IMPORTED_MODULE_0__["FormProperty"]));



/***/ }),

/***/ "./projects/schema-form/src/lib/model/bindingregistry.ts":
/*!***************************************************************!*\
  !*** ./projects/schema-form/src/lib/model/bindingregistry.ts ***!
  \***************************************************************/
/*! exports provided: BindingRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BindingRegistry", function() { return BindingRegistry; });
var BindingRegistry = /** @class */ (function () {
    function BindingRegistry() {
        this.bindings = [];
    }
    BindingRegistry.prototype.clear = function () {
        this.bindings = [];
    };
    BindingRegistry.prototype.register = function (path, binding) {
        this.bindings[path] = [].concat(binding);
    };
    BindingRegistry.prototype.get = function (path) {
        return this.bindings[path];
    };
    return BindingRegistry;
}());



/***/ }),

/***/ "./projects/schema-form/src/lib/model/booleanproperty.ts":
/*!***************************************************************!*\
  !*** ./projects/schema-form/src/lib/model/booleanproperty.ts ***!
  \***************************************************************/
/*! exports provided: BooleanProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanProperty", function() { return BooleanProperty; });
/* harmony import */ var _atomicproperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./atomicproperty */ "./projects/schema-form/src/lib/model/atomicproperty.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var BooleanProperty = /** @class */ (function (_super) {
    __extends(BooleanProperty, _super);
    function BooleanProperty() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BooleanProperty.prototype.fallbackValue = function () {
        return null;
    };
    return BooleanProperty;
}(_atomicproperty__WEBPACK_IMPORTED_MODULE_0__["AtomicProperty"]));



/***/ }),

/***/ "./projects/schema-form/src/lib/model/formproperty.ts":
/*!************************************************************!*\
  !*** ./projects/schema-form/src/lib/model/formproperty.ts ***!
  \************************************************************/
/*! exports provided: FormProperty, PropertyGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormProperty", function() { return FormProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyGroup", function() { return PropertyGroup; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var FormProperty = /** @class */ (function () {
    function FormProperty(schemaValidatorFactory, validatorRegistry, schema, parent, path) {
        this.validatorRegistry = validatorRegistry;
        this.schema = schema;
        this._value = null;
        this._errors = null;
        this._valueChanges = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this._errorsChanges = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this._visible = true;
        this._visibilityChanges = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](true);
        this.schemaValidator = schemaValidatorFactory.createValidatorFn(this.schema);
        this._parent = parent;
        if (parent) {
            this._root = parent.root;
        }
        else if (this instanceof PropertyGroup) {
            this._root = this;
        }
        this._path = path;
    }
    Object.defineProperty(FormProperty.prototype, "valueChanges", {
        get: function () {
            return this._valueChanges;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormProperty.prototype, "errorsChanges", {
        get: function () {
            return this._errorsChanges;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormProperty.prototype, "type", {
        get: function () {
            return this.schema.type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormProperty.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormProperty.prototype, "root", {
        get: function () {
            return this._root || this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormProperty.prototype, "path", {
        get: function () {
            return this._path;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormProperty.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormProperty.prototype, "visible", {
        get: function () {
            return this._visible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormProperty.prototype, "valid", {
        get: function () {
            return this._errors === null;
        },
        enumerable: true,
        configurable: true
    });
    FormProperty.prototype.updateValueAndValidity = function (onlySelf, emitEvent) {
        if (onlySelf === void 0) { onlySelf = false; }
        if (emitEvent === void 0) { emitEvent = true; }
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
     * @internal
     */
    FormProperty.prototype._runValidation = function () {
        var errors = this.schemaValidator(this._value) || [];
        var customValidator = this.validatorRegistry.get(this.path);
        if (customValidator) {
            var customErrors = customValidator(this.value, this, this.findRoot());
            errors = this.mergeErrors(errors, customErrors);
        }
        if (errors.length === 0) {
            errors = null;
        }
        this._errors = errors;
        this.setErrors(this._errors);
    };
    FormProperty.prototype.mergeErrors = function (errors, newErrors) {
        if (newErrors) {
            if (Array.isArray(newErrors)) {
                errors = errors.concat.apply(errors, newErrors);
            }
            else {
                errors.push(newErrors);
            }
        }
        return errors;
    };
    FormProperty.prototype.setErrors = function (errors) {
        this._errors = errors;
        this._errorsChanges.next(errors);
    };
    FormProperty.prototype.extendErrors = function (errors) {
        errors = this.mergeErrors(this._errors || [], errors);
        this.setErrors(errors);
    };
    FormProperty.prototype.searchProperty = function (path) {
        var prop = this;
        var base = null;
        var result = null;
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
    FormProperty.prototype.findRoot = function () {
        var property = this;
        while (property.parent !== null) {
            property = property.parent;
        }
        return property;
    };
    FormProperty.prototype.setVisible = function (visible) {
        this._visible = visible;
        this._visibilityChanges.next(visible);
        this.updateValueAndValidity();
        if (this.parent) {
            this.parent.updateValueAndValidity(false, true);
        }
    };
    // A field is visible if AT LEAST ONE of the properties it depends on is visible AND has a value in the list
    FormProperty.prototype._bindVisibility = function () {
        var _this = this;
        var visibleIf = this.schema.visibleIf;
        if (typeof visibleIf === 'object' && Object.keys(visibleIf).length === 0) {
            this.setVisible(false);
        }
        else if (visibleIf !== undefined) {
            var propertiesBinding = [];
            var _loop_1 = function (dependencyPath) {
                if (visibleIf.hasOwnProperty(dependencyPath)) {
                    var property = this_1.searchProperty(dependencyPath);
                    if (property) {
                        var valueCheck = property.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (value) {
                            if (visibleIf[dependencyPath].indexOf('$ANY$') !== -1) {
                                return value.length > 0;
                            }
                            else {
                                return visibleIf[dependencyPath].indexOf(value) !== -1;
                            }
                        }));
                        var visibilityCheck = property._visibilityChanges;
                        var and = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])([valueCheck, visibilityCheck], function (v1, v2) { return v1 && v2; });
                        propertiesBinding.push(and);
                    }
                    else {
                        console.warn('Can\'t find property ' + dependencyPath + ' for visibility check of ' + this_1.path);
                    }
                }
            };
            var this_1 = this;
            for (var dependencyPath in visibleIf) {
                _loop_1(dependencyPath);
            }
            Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])(propertiesBinding, function () {
                var values = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    values[_i] = arguments[_i];
                }
                return values.indexOf(true) !== -1;
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])()).subscribe(function (visible) {
                _this.setVisible(visible);
            });
        }
    };
    return FormProperty;
}());

var PropertyGroup = /** @class */ (function (_super) {
    __extends(PropertyGroup, _super);
    function PropertyGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = null;
        return _this;
    }
    PropertyGroup.prototype.getProperty = function (path) {
        var subPathIdx = path.indexOf('/');
        var propertyId = subPathIdx !== -1 ? path.substr(0, subPathIdx) : path;
        var property = this.properties[propertyId];
        if (property !== null && subPathIdx !== -1 && property instanceof PropertyGroup) {
            var subPath = path.substr(subPathIdx + 1);
            property = property.getProperty(subPath);
        }
        return property;
    };
    PropertyGroup.prototype.forEachChild = function (fn) {
        for (var propertyId in this.properties) {
            if (this.properties.hasOwnProperty(propertyId)) {
                var property = this.properties[propertyId];
                fn(property, propertyId);
            }
        }
    };
    PropertyGroup.prototype.forEachChildRecursive = function (fn) {
        this.forEachChild(function (child) {
            fn(child);
            if (child instanceof PropertyGroup) {
                child.forEachChildRecursive(fn);
            }
        });
    };
    PropertyGroup.prototype._bindVisibility = function () {
        _super.prototype._bindVisibility.call(this);
        this._bindVisibilityRecursive();
    };
    PropertyGroup.prototype._bindVisibilityRecursive = function () {
        this.forEachChildRecursive(function (property) {
            property._bindVisibility();
        });
    };
    PropertyGroup.prototype.isRoot = function () {
        return this === this.root;
    };
    return PropertyGroup;
}(FormProperty));



/***/ }),

/***/ "./projects/schema-form/src/lib/model/formpropertyfactory.ts":
/*!*******************************************************************!*\
  !*** ./projects/schema-form/src/lib/model/formpropertyfactory.ts ***!
  \*******************************************************************/
/*! exports provided: FormPropertyFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPropertyFactory", function() { return FormPropertyFactory; });
/* harmony import */ var _formproperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formproperty */ "./projects/schema-form/src/lib/model/formproperty.ts");
/* harmony import */ var _numberproperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./numberproperty */ "./projects/schema-form/src/lib/model/numberproperty.ts");
/* harmony import */ var _stringproperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringproperty */ "./projects/schema-form/src/lib/model/stringproperty.ts");
/* harmony import */ var _booleanproperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./booleanproperty */ "./projects/schema-form/src/lib/model/booleanproperty.ts");
/* harmony import */ var _objectproperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./objectproperty */ "./projects/schema-form/src/lib/model/objectproperty.ts");
/* harmony import */ var _arrayproperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./arrayproperty */ "./projects/schema-form/src/lib/model/arrayproperty.ts");






var FormPropertyFactory = /** @class */ (function () {
    function FormPropertyFactory(schemaValidatorFactory, validatorRegistry) {
        this.schemaValidatorFactory = schemaValidatorFactory;
        this.validatorRegistry = validatorRegistry;
    }
    FormPropertyFactory.prototype.createProperty = function (schema, parent, propertyId) {
        if (parent === void 0) { parent = null; }
        var newProperty = null;
        var path = '';
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
            var refSchema = this.schemaValidatorFactory.getSchema(parent.root.schema, schema.$ref);
            newProperty = this.createProperty(refSchema, parent, path);
        }
        else {
            switch (schema.type) {
                case 'integer':
                case 'number':
                    newProperty = new _numberproperty__WEBPACK_IMPORTED_MODULE_1__["NumberProperty"](this.schemaValidatorFactory, this.validatorRegistry, schema, parent, path);
                    break;
                case 'string':
                    newProperty = new _stringproperty__WEBPACK_IMPORTED_MODULE_2__["StringProperty"](this.schemaValidatorFactory, this.validatorRegistry, schema, parent, path);
                    break;
                case 'boolean':
                    newProperty = new _booleanproperty__WEBPACK_IMPORTED_MODULE_3__["BooleanProperty"](this.schemaValidatorFactory, this.validatorRegistry, schema, parent, path);
                    break;
                case 'object':
                    newProperty = new _objectproperty__WEBPACK_IMPORTED_MODULE_4__["ObjectProperty"](this, this.schemaValidatorFactory, this.validatorRegistry, schema, parent, path);
                    break;
                case 'array':
                    newProperty = new _arrayproperty__WEBPACK_IMPORTED_MODULE_5__["ArrayProperty"](this, this.schemaValidatorFactory, this.validatorRegistry, schema, parent, path);
                    break;
                default:
                    throw new TypeError("Undefined type " + schema.type);
            }
        }
        if (newProperty instanceof _formproperty__WEBPACK_IMPORTED_MODULE_0__["PropertyGroup"]) {
            this.initializeRoot(newProperty);
        }
        return newProperty;
    };
    FormPropertyFactory.prototype.initializeRoot = function (rootProperty) {
        rootProperty.reset(null, true);
        rootProperty._bindVisibility();
    };
    return FormPropertyFactory;
}());



/***/ }),

/***/ "./projects/schema-form/src/lib/model/numberproperty.ts":
/*!**************************************************************!*\
  !*** ./projects/schema-form/src/lib/model/numberproperty.ts ***!
  \**************************************************************/
/*! exports provided: NumberProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberProperty", function() { return NumberProperty; });
/* harmony import */ var _atomicproperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./atomicproperty */ "./projects/schema-form/src/lib/model/atomicproperty.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var NumberProperty = /** @class */ (function (_super) {
    __extends(NumberProperty, _super);
    function NumberProperty() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumberProperty.prototype.fallbackValue = function () {
        return null;
    };
    NumberProperty.prototype.setValue = function (value, onlySelf) {
        if (onlySelf === void 0) { onlySelf = false; }
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
}(_atomicproperty__WEBPACK_IMPORTED_MODULE_0__["AtomicProperty"]));



/***/ }),

/***/ "./projects/schema-form/src/lib/model/objectproperty.ts":
/*!**************************************************************!*\
  !*** ./projects/schema-form/src/lib/model/objectproperty.ts ***!
  \**************************************************************/
/*! exports provided: ObjectProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectProperty", function() { return ObjectProperty; });
/* harmony import */ var _formproperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formproperty */ "./projects/schema-form/src/lib/model/formproperty.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ObjectProperty = /** @class */ (function (_super) {
    __extends(ObjectProperty, _super);
    function ObjectProperty(formPropertyFactory, schemaValidatorFactory, validatorRegistry, schema, parent, path) {
        var _this = _super.call(this, schemaValidatorFactory, validatorRegistry, schema, parent, path) || this;
        _this.formPropertyFactory = formPropertyFactory;
        _this.propertiesId = [];
        _this.createProperties();
        return _this;
    }
    ObjectProperty.prototype.setValue = function (value, onlySelf) {
        for (var propertyId in value) {
            if (value.hasOwnProperty(propertyId)) {
                this.properties[propertyId].setValue(value[propertyId], true);
            }
        }
        this.updateValueAndValidity(onlySelf, true);
    };
    ObjectProperty.prototype.reset = function (value, onlySelf) {
        if (onlySelf === void 0) { onlySelf = true; }
        value = value || this.schema.default || {};
        this.resetProperties(value);
        this.updateValueAndValidity(onlySelf, true);
    };
    ObjectProperty.prototype.resetProperties = function (value) {
        for (var propertyId in this.schema.properties) {
            if (this.schema.properties.hasOwnProperty(propertyId)) {
                this.properties[propertyId].reset(value[propertyId], true);
            }
        }
    };
    ObjectProperty.prototype.createProperties = function () {
        this.properties = {};
        this.propertiesId = [];
        for (var propertyId in this.schema.properties) {
            if (this.schema.properties.hasOwnProperty(propertyId)) {
                var propertySchema = this.schema.properties[propertyId];
                this.properties[propertyId] = this.formPropertyFactory.createProperty(propertySchema, this, propertyId);
                this.propertiesId.push(propertyId);
            }
        }
    };
    ObjectProperty.prototype._hasValue = function () {
        return !!Object.keys(this.value).length;
    };
    ObjectProperty.prototype._updateValue = function () {
        this.reduceValue();
    };
    ObjectProperty.prototype._runValidation = function () {
        var _this = this;
        _super.prototype._runValidation.call(this);
        if (this._errors) {
            this._errors.forEach(function (error) {
                var prop = _this.searchProperty(error.path.slice(1));
                if (prop) {
                    prop.extendErrors(error);
                }
            });
        }
    };
    ObjectProperty.prototype.reduceValue = function () {
        var value = {};
        this.forEachChild(function (property, propertyId) {
            if (property.visible && property._hasValue()) {
                value[propertyId] = property.value;
            }
        });
        this._value = value;
    };
    return ObjectProperty;
}(_formproperty__WEBPACK_IMPORTED_MODULE_0__["PropertyGroup"]));



/***/ }),

/***/ "./projects/schema-form/src/lib/model/schemapreprocessor.ts":
/*!******************************************************************!*\
  !*** ./projects/schema-form/src/lib/model/schemapreprocessor.ts ***!
  \******************************************************************/
/*! exports provided: SchemaPreprocessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemaPreprocessor", function() { return SchemaPreprocessor; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./projects/schema-form/src/lib/model/utils.ts");

function formatMessage(message, path) {
    return "Parsing error on " + path + ": " + message;
}
function schemaError(message, path) {
    var mesg = formatMessage(message, path);
    throw new Error(mesg);
}
function schemaWarning(message, path) {
    var mesg = formatMessage(message, path);
    throw new Error(mesg);
}
var SchemaPreprocessor = /** @class */ (function () {
    function SchemaPreprocessor() {
    }
    SchemaPreprocessor.preprocess = function (jsonSchema, path) {
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
    SchemaPreprocessor.checkProperties = function (jsonSchema, path) {
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isBlank"])(jsonSchema.properties)) {
            jsonSchema.properties = {};
            schemaWarning('Provided json schema does not contain a \'properties\' entry. Output schema will be empty', path);
        }
    };
    SchemaPreprocessor.checkAndCreateFieldsets = function (jsonSchema, path) {
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
    SchemaPreprocessor.checkFieldsUsage = function (jsonSchema, path) {
        var fieldsId = Object.keys(jsonSchema.properties);
        var usedFields = {};
        for (var _i = 0, _a = jsonSchema.fieldsets; _i < _a.length; _i++) {
            var fieldset = _a[_i];
            for (var _b = 0, _c = fieldset.fields; _b < _c.length; _b++) {
                var fieldId = _c[_b];
                if (usedFields[fieldId] === undefined) {
                    usedFields[fieldId] = [];
                }
                usedFields[fieldId].push(fieldset.id);
            }
        }
        for (var _d = 0, fieldsId_1 = fieldsId; _d < fieldsId_1.length; _d++) {
            var fieldId = fieldsId_1[_d];
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
        for (var remainingfieldsId in usedFields) {
            if (usedFields.hasOwnProperty(remainingfieldsId)) {
                schemaWarning("Referencing non-existent field " + remainingfieldsId + " in one or more fieldsets", path);
            }
        }
    };
    SchemaPreprocessor.createFieldsets = function (jsonSchema) {
        jsonSchema.order = Object.keys(jsonSchema.properties);
        SchemaPreprocessor.replaceOrderByFieldsets(jsonSchema);
    };
    SchemaPreprocessor.replaceOrderByFieldsets = function (jsonSchema) {
        jsonSchema.fieldsets = [{
                id: 'fieldset-default',
                title: jsonSchema.title || '',
                description: jsonSchema.description || '',
                name: jsonSchema.name || '',
                fields: jsonSchema.order
            }];
        delete jsonSchema.order;
    };
    SchemaPreprocessor.normalizeWidget = function (fieldSchema) {
        var widget = fieldSchema.widget;
        if (widget === undefined) {
            widget = { 'id': fieldSchema.type };
        }
        else if (typeof widget === 'string') {
            widget = { 'id': widget };
        }
        fieldSchema.widget = widget;
    };
    SchemaPreprocessor.checkItems = function (jsonSchema, path) {
        if (jsonSchema.items === undefined) {
            schemaError('No \'items\' property in array', path);
        }
    };
    SchemaPreprocessor.recursiveCheck = function (jsonSchema, path) {
        if (jsonSchema.type === 'object') {
            for (var fieldId in jsonSchema.properties) {
                if (jsonSchema.properties.hasOwnProperty(fieldId)) {
                    var fieldSchema = jsonSchema.properties[fieldId];
                    SchemaPreprocessor.preprocess(fieldSchema, path + fieldId + '/');
                }
            }
            if (jsonSchema.hasOwnProperty('definitions')) {
                for (var fieldId in jsonSchema.definitions) {
                    if (jsonSchema.definitions.hasOwnProperty(fieldId)) {
                        var fieldSchema = jsonSchema.definitions[fieldId];
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
    SchemaPreprocessor.removeRecursiveRefProperties = function (jsonSchema, definitionPath) {
        // to avoid infinite loop
        if (jsonSchema.type === 'object') {
            for (var fieldId in jsonSchema.properties) {
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
     * @param schema JSON schema to enable alias names.
     */
    SchemaPreprocessor.normalizeExtensions = function (schema) {
        var extensions = [
            { name: "fieldsets", regex: /^x-?field-?sets$/i },
            { name: "widget", regex: /^x-?widget$/i },
            { name: "visibleIf", regex: /^x-?visible-?if$/i }
        ];
        var keys = Object.keys(schema);
        var _loop_1 = function (i) {
            var k = keys[i];
            var e = extensions.find(function (e) { return !!k.match(e.regex); });
            if (e) {
                var v = schema[k];
                var copy = JSON.parse(JSON.stringify(v));
                schema[e.name] = copy;
            }
        };
        for (var i = 0; i < keys.length; ++i) {
            _loop_1(i);
        }
    };
    return SchemaPreprocessor;
}());



/***/ }),

/***/ "./projects/schema-form/src/lib/model/stringproperty.ts":
/*!**************************************************************!*\
  !*** ./projects/schema-form/src/lib/model/stringproperty.ts ***!
  \**************************************************************/
/*! exports provided: StringProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringProperty", function() { return StringProperty; });
/* harmony import */ var _atomicproperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./atomicproperty */ "./projects/schema-form/src/lib/model/atomicproperty.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var StringProperty = /** @class */ (function (_super) {
    __extends(StringProperty, _super);
    function StringProperty() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StringProperty.prototype.fallbackValue = function () {
        return '';
    };
    return StringProperty;
}(_atomicproperty__WEBPACK_IMPORTED_MODULE_0__["AtomicProperty"]));



/***/ }),

/***/ "./projects/schema-form/src/lib/model/utils.ts":
/*!*****************************************************!*\
  !*** ./projects/schema-form/src/lib/model/utils.ts ***!
  \*****************************************************/
/*! exports provided: isPresent, isBlank */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPresent", function() { return isPresent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBlank", function() { return isBlank; });
function isPresent(o) {
    return o !== null && o !== undefined;
}
function isBlank(o) {
    return o === null || o === undefined;
}


/***/ }),

/***/ "./projects/schema-form/src/lib/model/validatorregistry.ts":
/*!*****************************************************************!*\
  !*** ./projects/schema-form/src/lib/model/validatorregistry.ts ***!
  \*****************************************************************/
/*! exports provided: ValidatorRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidatorRegistry", function() { return ValidatorRegistry; });
var ValidatorRegistry = /** @class */ (function () {
    function ValidatorRegistry() {
        this.validators = [];
    }
    ValidatorRegistry.prototype.register = function (path, validator) {
        this.validators[path] = validator;
    };
    ValidatorRegistry.prototype.get = function (path) {
        return this.validators[path];
    };
    ValidatorRegistry.prototype.clear = function () {
        this.validators = [];
    };
    return ValidatorRegistry;
}());



/***/ }),

/***/ "./projects/schema-form/src/lib/schema-form.module.ts":
/*!************************************************************!*\
  !*** ./projects/schema-form/src/lib/schema-form.module.ts ***!
  \************************************************************/
/*! exports provided: SchemaFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemaFormModule", function() { return SchemaFormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _formelement_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formelement.component */ "./projects/schema-form/src/lib/formelement.component.ts");
/* harmony import */ var _form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form.component */ "./projects/schema-form/src/lib/form.component.ts");
/* harmony import */ var _widgetchooser_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./widgetchooser.component */ "./projects/schema-form/src/lib/widgetchooser.component.ts");
/* harmony import */ var _defaultwidgets_array_array_widget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./defaultwidgets/array/array.widget */ "./projects/schema-form/src/lib/defaultwidgets/array/array.widget.ts");
/* harmony import */ var _defaultwidgets_button_button_widget__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./defaultwidgets/button/button.widget */ "./projects/schema-form/src/lib/defaultwidgets/button/button.widget.ts");
/* harmony import */ var _defaultwidgets_object_object_widget__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./defaultwidgets/object/object.widget */ "./projects/schema-form/src/lib/defaultwidgets/object/object.widget.ts");
/* harmony import */ var _defaultwidgets_checkbox_checkbox_widget__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./defaultwidgets/checkbox/checkbox.widget */ "./projects/schema-form/src/lib/defaultwidgets/checkbox/checkbox.widget.ts");
/* harmony import */ var _defaultwidgets_file_file_widget__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./defaultwidgets/file/file.widget */ "./projects/schema-form/src/lib/defaultwidgets/file/file.widget.ts");
/* harmony import */ var _defaultwidgets_integer_integer_widget__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./defaultwidgets/integer/integer.widget */ "./projects/schema-form/src/lib/defaultwidgets/integer/integer.widget.ts");
/* harmony import */ var _defaultwidgets_textarea_textarea_widget__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./defaultwidgets/textarea/textarea.widget */ "./projects/schema-form/src/lib/defaultwidgets/textarea/textarea.widget.ts");
/* harmony import */ var _defaultwidgets_radio_radio_widget__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./defaultwidgets/radio/radio.widget */ "./projects/schema-form/src/lib/defaultwidgets/radio/radio.widget.ts");
/* harmony import */ var _defaultwidgets_range_range_widget__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./defaultwidgets/range/range.widget */ "./projects/schema-form/src/lib/defaultwidgets/range/range.widget.ts");
/* harmony import */ var _defaultwidgets_select_select_widget__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./defaultwidgets/select/select.widget */ "./projects/schema-form/src/lib/defaultwidgets/select/select.widget.ts");
/* harmony import */ var _defaultwidgets_string_string_widget__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./defaultwidgets/string/string.widget */ "./projects/schema-form/src/lib/defaultwidgets/string/string.widget.ts");
/* harmony import */ var _defaultwidgets_defaultwidgetregistry__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./defaultwidgets/defaultwidgetregistry */ "./projects/schema-form/src/lib/defaultwidgets/defaultwidgetregistry.ts");
/* harmony import */ var _default_widget__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./default.widget */ "./projects/schema-form/src/lib/default.widget.ts");
/* harmony import */ var _widgetregistry__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./widgetregistry */ "./projects/schema-form/src/lib/widgetregistry.ts");
/* harmony import */ var _schemavalidatorfactory__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./schemavalidatorfactory */ "./projects/schema-form/src/lib/schemavalidatorfactory.ts");
/* harmony import */ var _formelement_action_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./formelement.action.component */ "./projects/schema-form/src/lib/formelement.action.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var moduleProviders = [
    {
        provide: _widgetregistry__WEBPACK_IMPORTED_MODULE_19__["WidgetRegistry"],
        useClass: _defaultwidgets_defaultwidgetregistry__WEBPACK_IMPORTED_MODULE_17__["DefaultWidgetRegistry"]
    },
    {
        provide: _schemavalidatorfactory__WEBPACK_IMPORTED_MODULE_20__["SchemaValidatorFactory"],
        useClass: _schemavalidatorfactory__WEBPACK_IMPORTED_MODULE_20__["ZSchemaValidatorFactory"]
    }
];
var SchemaFormModule = /** @class */ (function () {
    function SchemaFormModule() {
    }
    SchemaFormModule_1 = SchemaFormModule;
    SchemaFormModule.forRoot = function () {
        return {
            ngModule: SchemaFormModule_1,
            providers: moduleProviders.slice()
        };
    };
    SchemaFormModule = SchemaFormModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
            declarations: [
                _formelement_component__WEBPACK_IMPORTED_MODULE_3__["FormElementComponent"],
                _formelement_action_component__WEBPACK_IMPORTED_MODULE_21__["FormElementComponentAction"],
                _form_component__WEBPACK_IMPORTED_MODULE_4__["FormComponent"],
                _widgetchooser_component__WEBPACK_IMPORTED_MODULE_5__["WidgetChooserComponent"],
                _default_widget__WEBPACK_IMPORTED_MODULE_18__["DefaultWidget"],
                _defaultwidgets_array_array_widget__WEBPACK_IMPORTED_MODULE_6__["ArrayWidget"],
                _defaultwidgets_button_button_widget__WEBPACK_IMPORTED_MODULE_7__["ButtonWidget"],
                _defaultwidgets_object_object_widget__WEBPACK_IMPORTED_MODULE_8__["ObjectWidget"],
                _defaultwidgets_checkbox_checkbox_widget__WEBPACK_IMPORTED_MODULE_9__["CheckboxWidget"],
                _defaultwidgets_file_file_widget__WEBPACK_IMPORTED_MODULE_10__["FileWidget"],
                _defaultwidgets_integer_integer_widget__WEBPACK_IMPORTED_MODULE_11__["IntegerWidget"],
                _defaultwidgets_textarea_textarea_widget__WEBPACK_IMPORTED_MODULE_12__["TextAreaWidget"],
                _defaultwidgets_radio_radio_widget__WEBPACK_IMPORTED_MODULE_13__["RadioWidget"],
                _defaultwidgets_range_range_widget__WEBPACK_IMPORTED_MODULE_14__["RangeWidget"],
                _defaultwidgets_select_select_widget__WEBPACK_IMPORTED_MODULE_15__["SelectWidget"],
                _defaultwidgets_string_string_widget__WEBPACK_IMPORTED_MODULE_16__["StringWidget"],
            ],
            entryComponents: [
                _formelement_component__WEBPACK_IMPORTED_MODULE_3__["FormElementComponent"],
                _formelement_action_component__WEBPACK_IMPORTED_MODULE_21__["FormElementComponentAction"],
                _form_component__WEBPACK_IMPORTED_MODULE_4__["FormComponent"],
                _widgetchooser_component__WEBPACK_IMPORTED_MODULE_5__["WidgetChooserComponent"],
                _defaultwidgets_array_array_widget__WEBPACK_IMPORTED_MODULE_6__["ArrayWidget"],
                _defaultwidgets_button_button_widget__WEBPACK_IMPORTED_MODULE_7__["ButtonWidget"],
                _defaultwidgets_object_object_widget__WEBPACK_IMPORTED_MODULE_8__["ObjectWidget"],
                _defaultwidgets_checkbox_checkbox_widget__WEBPACK_IMPORTED_MODULE_9__["CheckboxWidget"],
                _defaultwidgets_file_file_widget__WEBPACK_IMPORTED_MODULE_10__["FileWidget"],
                _defaultwidgets_integer_integer_widget__WEBPACK_IMPORTED_MODULE_11__["IntegerWidget"],
                _defaultwidgets_textarea_textarea_widget__WEBPACK_IMPORTED_MODULE_12__["TextAreaWidget"],
                _defaultwidgets_radio_radio_widget__WEBPACK_IMPORTED_MODULE_13__["RadioWidget"],
                _defaultwidgets_range_range_widget__WEBPACK_IMPORTED_MODULE_14__["RangeWidget"],
                _defaultwidgets_select_select_widget__WEBPACK_IMPORTED_MODULE_15__["SelectWidget"],
                _defaultwidgets_string_string_widget__WEBPACK_IMPORTED_MODULE_16__["StringWidget"],
            ],
            exports: [
                _form_component__WEBPACK_IMPORTED_MODULE_4__["FormComponent"],
                _formelement_component__WEBPACK_IMPORTED_MODULE_3__["FormElementComponent"],
                _formelement_action_component__WEBPACK_IMPORTED_MODULE_21__["FormElementComponentAction"],
                _widgetchooser_component__WEBPACK_IMPORTED_MODULE_5__["WidgetChooserComponent"],
                _defaultwidgets_array_array_widget__WEBPACK_IMPORTED_MODULE_6__["ArrayWidget"],
                _defaultwidgets_button_button_widget__WEBPACK_IMPORTED_MODULE_7__["ButtonWidget"],
                _defaultwidgets_object_object_widget__WEBPACK_IMPORTED_MODULE_8__["ObjectWidget"],
                _defaultwidgets_checkbox_checkbox_widget__WEBPACK_IMPORTED_MODULE_9__["CheckboxWidget"],
                _defaultwidgets_file_file_widget__WEBPACK_IMPORTED_MODULE_10__["FileWidget"],
                _defaultwidgets_integer_integer_widget__WEBPACK_IMPORTED_MODULE_11__["IntegerWidget"],
                _defaultwidgets_textarea_textarea_widget__WEBPACK_IMPORTED_MODULE_12__["TextAreaWidget"],
                _defaultwidgets_radio_radio_widget__WEBPACK_IMPORTED_MODULE_13__["RadioWidget"],
                _defaultwidgets_range_range_widget__WEBPACK_IMPORTED_MODULE_14__["RangeWidget"],
                _defaultwidgets_select_select_widget__WEBPACK_IMPORTED_MODULE_15__["SelectWidget"],
                _defaultwidgets_string_string_widget__WEBPACK_IMPORTED_MODULE_16__["StringWidget"]
            ]
        })
    ], SchemaFormModule);
    return SchemaFormModule;
    var SchemaFormModule_1;
}());



/***/ }),

/***/ "./projects/schema-form/src/lib/schemavalidatorfactory.ts":
/*!****************************************************************!*\
  !*** ./projects/schema-form/src/lib/schemavalidatorfactory.ts ***!
  \****************************************************************/
/*! exports provided: SchemaValidatorFactory, ZSchemaValidatorFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemaValidatorFactory", function() { return SchemaValidatorFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZSchemaValidatorFactory", function() { return ZSchemaValidatorFactory; });
/* harmony import */ var z_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! z-schema */ "./node_modules/z-schema/src/ZSchema.js");
/* harmony import */ var z_schema__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(z_schema__WEBPACK_IMPORTED_MODULE_0__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var SchemaValidatorFactory = /** @class */ (function () {
    function SchemaValidatorFactory() {
    }
    return SchemaValidatorFactory;
}());

var ZSchemaValidatorFactory = /** @class */ (function (_super) {
    __extends(ZSchemaValidatorFactory, _super);
    function ZSchemaValidatorFactory() {
        var _this = _super.call(this) || this;
        _this.zschema = new z_schema__WEBPACK_IMPORTED_MODULE_0__({
            breakOnFirstError: false
        });
        return _this;
    }
    ZSchemaValidatorFactory.prototype.createValidatorFn = function (schema) {
        var _this = this;
        return function (value) {
            if (schema.type === 'number' || schema.type === 'integer') {
                value = +value;
            }
            _this.zschema.validate(value, schema);
            var err = _this.zschema.getLastErrors();
            _this.denormalizeRequiredPropertyPaths(err);
            return err || null;
        };
    };
    ZSchemaValidatorFactory.prototype.getSchema = function (schema, ref) {
        // check definitions are valid
        var isValid = this.zschema.compileSchema(schema);
        if (isValid) {
            return this.getDefinition(schema, ref);
        }
        else {
            throw this.zschema.getLastError();
        }
    };
    ZSchemaValidatorFactory.prototype.denormalizeRequiredPropertyPaths = function (err) {
        if (err && err.length) {
            err = err.map(function (error) {
                if (error.path === '#/' && error.code === 'OBJECT_MISSING_REQUIRED_PROPERTY') {
                    error.path = "" + error.path + error.params[0];
                }
                return error;
            });
        }
    };
    ZSchemaValidatorFactory.prototype.getDefinition = function (schema, ref) {
        var foundSchema = schema;
        ref.split('/').slice(1).forEach(function (ptr) {
            if (ptr) {
                foundSchema = foundSchema[ptr];
            }
        });
        return foundSchema;
    };
    return ZSchemaValidatorFactory;
}(SchemaValidatorFactory));



/***/ }),

/***/ "./projects/schema-form/src/lib/template-schema/button/button.component.html":
/*!***********************************************************************************!*\
  !*** ./projects/schema-form/src/lib/template-schema/button/button.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\n"

/***/ }),

/***/ "./projects/schema-form/src/lib/template-schema/button/button.component.ts":
/*!*********************************************************************************!*\
  !*** ./projects/schema-form/src/lib/template-schema/button/button.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _template_schema_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../template-schema-element */ "./projects/schema-form/src/lib/template-schema/template-schema-element.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ButtonComponent = /** @class */ (function (_super) {
    __extends(ButtonComponent, _super);
    function ButtonComponent(elementRef) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        _this.label = '';
        _this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    ButtonComponent_1 = ButtonComponent;
    ButtonComponent.prototype.setLabelFromContent = function () {
        var textContent = this.getTextContent(this.elementRef);
        // label as @Input takes priority over content text
        if (textContent && !this.label) {
            this.label = textContent;
        }
    };
    ButtonComponent.prototype.ngAfterContentInit = function () {
        this.setLabelFromContent();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ButtonComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ButtonComponent.prototype, "widget", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ButtonComponent.prototype, "click", void 0);
    ButtonComponent = ButtonComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sf-button',
            template: __webpack_require__(/*! ./button.component.html */ "./projects/schema-form/src/lib/template-schema/button/button.component.html"),
            providers: [
                {
                    provide: _template_schema_element__WEBPACK_IMPORTED_MODULE_1__["TemplateSchemaElement"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ButtonComponent_1; }),
                }
            ]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ButtonComponent);
    return ButtonComponent;
    var ButtonComponent_1;
}(_template_schema_element__WEBPACK_IMPORTED_MODULE_1__["TemplateSchemaElement"]));



/***/ }),

/***/ "./projects/schema-form/src/lib/template-schema/field/field-parent.ts":
/*!****************************************************************************!*\
  !*** ./projects/schema-form/src/lib/template-schema/field/field-parent.ts ***!
  \****************************************************************************/
/*! exports provided: FieldParent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldParent", function() { return FieldParent; });
/* harmony import */ var _template_schema_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../template-schema-element */ "./projects/schema-form/src/lib/template-schema/template-schema-element.ts");
/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./field */ "./projects/schema-form/src/lib/template-schema/field/field.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var FieldParent = /** @class */ (function (_super) {
    __extends(FieldParent, _super);
    function FieldParent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = '';
        return _this;
    }
    Object.defineProperty(FieldParent.prototype, "path", {
        get: function () {
            if (!this.name) {
                return '';
            }
            return '/' + this.name;
        },
        enumerable: true,
        configurable: true
    });
    FieldParent.prototype.getButtons = function () {
        var _this = this;
        return this.childButtons.map(function (button, index) {
            if (!button.id) {
                var randomString = Math.random().toString(16).substr(2, 8);
                // generate id for button
                button.id = _this.name + randomString + '_' + (index + 1);
            }
            // register as button action the EventEmitter click
            _this.actionRegistry.register(button.id, button.click.emit.bind(button.click));
            var _button = {
                id: button.id,
                label: button.label,
            };
            if (button.widget) {
                _button.widget = button.widget;
            }
            return _button;
        });
    };
    FieldParent.prototype.getFieldsValidators = function (fields) {
        return fields.reduce(function (validators, field) {
            return validators.concat(field.getValidators());
        }, []);
    };
    FieldParent.prototype.getFieldsSchema = function (fields) {
        var _this = this;
        return fields.reduce(function (schema, field) {
            switch (_this.type) {
                case _field__WEBPACK_IMPORTED_MODULE_1__["FieldType"].Array:
                    schema.items = field.getSchema();
                    break;
                default:
                    if (!schema.properties) {
                        schema.properties = {};
                    }
                    schema.properties[field.name] = field.getSchema();
                    break;
            }
            var buttons = field.getButtons();
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
}(_template_schema_element__WEBPACK_IMPORTED_MODULE_0__["TemplateSchemaElement"]));



/***/ }),

/***/ "./projects/schema-form/src/lib/template-schema/field/field.component.html":
/*!*********************************************************************************!*\
  !*** ./projects/schema-form/src/lib/template-schema/field/field.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content ></ng-content>\n"

/***/ }),

/***/ "./projects/schema-form/src/lib/template-schema/field/field.component.ts":
/*!*******************************************************************************!*\
  !*** ./projects/schema-form/src/lib/template-schema/field/field.component.ts ***!
  \*******************************************************************************/
/*! exports provided: FieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldComponent", function() { return FieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _model_actionregistry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/actionregistry */ "./projects/schema-form/src/lib/model/actionregistry.ts");
/* harmony import */ var _template_schema_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../template-schema.service */ "./projects/schema-form/src/lib/template-schema/template-schema.service.ts");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../button/button.component */ "./projects/schema-form/src/lib/template-schema/button/button.component.ts");
/* harmony import */ var _field_parent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./field-parent */ "./projects/schema-form/src/lib/template-schema/field/field-parent.ts");
/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./field */ "./projects/schema-form/src/lib/template-schema/field/field.ts");
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./item/item.component */ "./projects/schema-form/src/lib/template-schema/field/item/item.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FieldComponent = /** @class */ (function (_super) {
    __extends(FieldComponent, _super);
    function FieldComponent(elementRef, templateSchemaService, actionRegistry) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        _this.templateSchemaService = templateSchemaService;
        _this.actionRegistry = actionRegistry;
        _this.type = _field__WEBPACK_IMPORTED_MODULE_6__["FieldType"].String;
        _this.schema = {};
        return _this;
    }
    FieldComponent_1 = FieldComponent;
    FieldComponent.prototype.getSchema = function () {
        var _this = this;
        var _a = this.getFieldsSchema(this.childFields.filter(function (field) { return field !== _this; })), properties = _a.properties, items = _a.items, required = _a.required;
        var oneOf = this.getOneOf();
        var schema = {
            type: this.type
        };
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
        var buttons = this.getButtons();
        if (buttons.length > 0) {
            schema.buttons = buttons;
        }
        // @Input schema takes precedence
        return Object.assign(schema, this.schema);
    };
    FieldComponent.prototype.getValidators = function () {
        var _this = this;
        // registering validator here is not possible since prop full path is needed
        var childValidators = this.getFieldsValidators(this.childFields.filter(function (field) { return field !== _this; }));
        var validators = childValidators.map(function (_a) {
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
    FieldComponent.prototype.ngOnChanges = function (changes) {
        var keys = Object.keys(changes);
        if (keys.length > 0) {
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                if (!changes[key].isFirstChange()) {
                    // on any input change, force schema change generation
                    this.templateSchemaService.changed();
                    break;
                }
            }
        }
    };
    FieldComponent.prototype.getOneOf = function () {
        if (this.childItems.length === 0) {
            return;
        }
        var items = this.childItems.map(function (_a) {
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
    FieldComponent.prototype.setTitleFromContent = function () {
        var textContent = this.getTextContent(this.elementRef);
        //  title as @Input takes priority over content text
        if (textContent && !this.title) {
            this.title = textContent;
        }
    };
    FieldComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        // cache it
        this.setTitleFromContent();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.childFields.changes, this.childItems.changes, this.childButtons.changes)
            .subscribe(function () { return _this.templateSchemaService.changed(); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(FieldComponent_1),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], FieldComponent.prototype, "childFields", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(_item_item_component__WEBPACK_IMPORTED_MODULE_7__["ItemComponent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], FieldComponent.prototype, "childItems", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], FieldComponent.prototype, "childButtons", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FieldComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FieldComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FieldComponent.prototype, "format", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], FieldComponent.prototype, "required", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], FieldComponent.prototype, "readOnly", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FieldComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FieldComponent.prototype, "description", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FieldComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FieldComponent.prototype, "widget", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], FieldComponent.prototype, "validator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FieldComponent.prototype, "schema", void 0);
    FieldComponent = FieldComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sf-field',
            template: __webpack_require__(/*! ./field.component.html */ "./projects/schema-form/src/lib/template-schema/field/field.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _template_schema_service__WEBPACK_IMPORTED_MODULE_3__["TemplateSchemaService"],
            _model_actionregistry__WEBPACK_IMPORTED_MODULE_2__["ActionRegistry"]])
    ], FieldComponent);
    return FieldComponent;
    var FieldComponent_1;
}(_field_parent__WEBPACK_IMPORTED_MODULE_5__["FieldParent"]));



/***/ }),

/***/ "./projects/schema-form/src/lib/template-schema/field/field.ts":
/*!*********************************************************************!*\
  !*** ./projects/schema-form/src/lib/template-schema/field/field.ts ***!
  \*********************************************************************/
/*! exports provided: FieldType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldType", function() { return FieldType; });
var FieldType;
(function (FieldType) {
    FieldType["String"] = "string";
    FieldType["Object"] = "object";
    FieldType["Array"] = "array";
    FieldType["Boolean"] = "boolean";
    FieldType["Integer"] = "integer";
    FieldType["Number"] = "number";
})(FieldType || (FieldType = {}));


/***/ }),

/***/ "./projects/schema-form/src/lib/template-schema/field/item/item.component.html":
/*!*************************************************************************************!*\
  !*** ./projects/schema-form/src/lib/template-schema/field/item/item.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\n"

/***/ }),

/***/ "./projects/schema-form/src/lib/template-schema/field/item/item.component.ts":
/*!***********************************************************************************!*\
  !*** ./projects/schema-form/src/lib/template-schema/field/item/item.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _template_schema_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../template-schema-element */ "./projects/schema-form/src/lib/template-schema/template-schema-element.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemComponent = /** @class */ (function (_super) {
    __extends(ItemComponent, _super);
    function ItemComponent(elementRef) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        return _this;
    }
    ItemComponent.prototype.ngOnInit = function () {
        this.description = this.getTextContent(this.elementRef);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemComponent.prototype, "value", void 0);
    ItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sf-item',
            template: __webpack_require__(/*! ./item.component.html */ "./projects/schema-form/src/lib/template-schema/field/item/item.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ItemComponent);
    return ItemComponent;
}(_template_schema_element__WEBPACK_IMPORTED_MODULE_1__["TemplateSchemaElement"]));



/***/ }),

/***/ "./projects/schema-form/src/lib/template-schema/template-schema-element.ts":
/*!*********************************************************************************!*\
  !*** ./projects/schema-form/src/lib/template-schema/template-schema-element.ts ***!
  \*********************************************************************************/
/*! exports provided: TemplateSchemaElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateSchemaElement", function() { return TemplateSchemaElement; });
var TemplateSchemaElement = /** @class */ (function () {
    function TemplateSchemaElement() {
    }
    TemplateSchemaElement.prototype.getTextContent = function (elementRef) {
        var nodes = Array.from(elementRef.nativeElement.childNodes);
        var node = nodes.filter(function (el) {
            return el.nodeType === el.TEXT_NODE;
        }).pop();
        if (!node || !node.nodeValue) {
            return '';
        }
        return node.nodeValue.trim();
    };
    return TemplateSchemaElement;
}());



/***/ }),

/***/ "./projects/schema-form/src/lib/template-schema/template-schema.directive.ts":
/*!***********************************************************************************!*\
  !*** ./projects/schema-form/src/lib/template-schema/template-schema.directive.ts ***!
  \***********************************************************************************/
/*! exports provided: TemplateSchemaDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateSchemaDirective", function() { return TemplateSchemaDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form.component */ "./projects/schema-form/src/lib/form.component.ts");
/* harmony import */ var _model_actionregistry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/actionregistry */ "./projects/schema-form/src/lib/model/actionregistry.ts");
/* harmony import */ var _model_validatorregistry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/validatorregistry */ "./projects/schema-form/src/lib/model/validatorregistry.ts");
/* harmony import */ var _terminator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../terminator.service */ "./projects/schema-form/src/lib/terminator.service.ts");
/* harmony import */ var _template_schema_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./template-schema.service */ "./projects/schema-form/src/lib/template-schema/template-schema.service.ts");
/* harmony import */ var _field_field_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./field/field.component */ "./projects/schema-form/src/lib/template-schema/field/field.component.ts");
/* harmony import */ var _field_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./field/field */ "./projects/schema-form/src/lib/template-schema/field/field.ts");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./button/button.component */ "./projects/schema-form/src/lib/template-schema/button/button.component.ts");
/* harmony import */ var _field_field_parent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./field/field-parent */ "./projects/schema-form/src/lib/template-schema/field/field-parent.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var TemplateSchemaDirective = /** @class */ (function (_super) {
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
    TemplateSchemaDirective.prototype.setFormDocumentSchema = function (fields) {
        var _this = this;
        this.actionRegistry.clear();
        this.validatorRegistry.clear();
        var schema = this.getFieldsSchema(fields);
        var validators = this.getFieldsValidators(fields);
        validators.forEach(function (_a) {
            var path = _a.path, validator = _a.validator;
            _this.validatorRegistry.register(path, validator);
        });
        var previousSchema = this.formComponent.schema;
        this.formComponent.schema = {
            type: _field_field__WEBPACK_IMPORTED_MODULE_8__["FieldType"].Object,
            properties: schema.properties
        };
        if (schema.required && schema.required.length > 0) {
            this.formComponent.schema.requred = schema.required;
        }
        var buttons = this.getButtons();
        if (buttons.length > 0) {
            this.formComponent.schema.buttons = buttons;
        }
        this.formComponent.ngOnChanges({
            schema: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SimpleChange"](previousSchema, this.formComponent.schema, Boolean(previousSchema))
        });
    };
    TemplateSchemaDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.childFields.length > 0) {
            this.setFormDocumentSchema(this.childFields.toArray());
        }
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.childFields.changes, this.templateSchemaService.changes)
            .subscribe(function () {
            _this.terminatorService.destroy();
            _this.setFormDocumentSchema(_this.childFields.toArray());
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(_field_field_component__WEBPACK_IMPORTED_MODULE_7__["FieldComponent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], TemplateSchemaDirective.prototype, "childFields", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(_button_button_component__WEBPACK_IMPORTED_MODULE_9__["ButtonComponent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], TemplateSchemaDirective.prototype, "childButtons", void 0);
    TemplateSchemaDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: 'sf-form[templateSchema]',
            providers: [
                _template_schema_service__WEBPACK_IMPORTED_MODULE_6__["TemplateSchemaService"]
            ]
        }),
        __metadata("design:paramtypes", [_model_actionregistry__WEBPACK_IMPORTED_MODULE_3__["ActionRegistry"],
            _model_validatorregistry__WEBPACK_IMPORTED_MODULE_4__["ValidatorRegistry"],
            _form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"],
            _terminator_service__WEBPACK_IMPORTED_MODULE_5__["TerminatorService"],
            _template_schema_service__WEBPACK_IMPORTED_MODULE_6__["TemplateSchemaService"]])
    ], TemplateSchemaDirective);
    return TemplateSchemaDirective;
}(_field_field_parent__WEBPACK_IMPORTED_MODULE_10__["FieldParent"]));



/***/ }),

/***/ "./projects/schema-form/src/lib/template-schema/template-schema.module.ts":
/*!********************************************************************************!*\
  !*** ./projects/schema-form/src/lib/template-schema/template-schema.module.ts ***!
  \********************************************************************************/
/*! exports provided: TemplateSchemaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateSchemaModule", function() { return TemplateSchemaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _field_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./field/field.component */ "./projects/schema-form/src/lib/template-schema/field/field.component.ts");
/* harmony import */ var _template_schema_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template-schema.directive */ "./projects/schema-form/src/lib/template-schema/template-schema.directive.ts");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button/button.component */ "./projects/schema-form/src/lib/template-schema/button/button.component.ts");
/* harmony import */ var _field_item_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./field/item/item.component */ "./projects/schema-form/src/lib/template-schema/field/item/item.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TemplateSchemaModule = /** @class */ (function () {
    function TemplateSchemaModule() {
    }
    TemplateSchemaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _template_schema_directive__WEBPACK_IMPORTED_MODULE_3__["TemplateSchemaDirective"],
                _field_field_component__WEBPACK_IMPORTED_MODULE_2__["FieldComponent"],
                _button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"],
                _field_item_item_component__WEBPACK_IMPORTED_MODULE_5__["ItemComponent"]
            ],
            exports: [
                _template_schema_directive__WEBPACK_IMPORTED_MODULE_3__["TemplateSchemaDirective"],
                _field_field_component__WEBPACK_IMPORTED_MODULE_2__["FieldComponent"],
                _button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"],
                _field_item_item_component__WEBPACK_IMPORTED_MODULE_5__["ItemComponent"]
            ]
        })
    ], TemplateSchemaModule);
    return TemplateSchemaModule;
}());



/***/ }),

/***/ "./projects/schema-form/src/lib/template-schema/template-schema.service.ts":
/*!*********************************************************************************!*\
  !*** ./projects/schema-form/src/lib/template-schema/template-schema.service.ts ***!
  \*********************************************************************************/
/*! exports provided: TemplateSchemaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateSchemaService", function() { return TemplateSchemaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var TemplateSchemaService = /** @class */ (function () {
    function TemplateSchemaService() {
        this.changes = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TemplateSchemaService.prototype.changed = function () {
        this.changes.emit();
    };
    return TemplateSchemaService;
}());



/***/ }),

/***/ "./projects/schema-form/src/lib/terminator.service.ts":
/*!************************************************************!*\
  !*** ./projects/schema-form/src/lib/terminator.service.ts ***!
  \************************************************************/
/*! exports provided: TerminatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminatorService", function() { return TerminatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TerminatorService = /** @class */ (function () {
    function TerminatorService() {
        this.onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    TerminatorService.prototype.destroy = function () {
        this.onDestroy.next(true);
    };
    TerminatorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TerminatorService);
    return TerminatorService;
}());



/***/ }),

/***/ "./projects/schema-form/src/lib/widget.ts":
/*!************************************************!*\
  !*** ./projects/schema-form/src/lib/widget.ts ***!
  \************************************************/
/*! exports provided: Widget, ControlWidget, ArrayLayoutWidget, ObjectLayoutWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Widget", function() { return Widget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlWidget", function() { return ControlWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayLayoutWidget", function() { return ArrayLayoutWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectLayoutWidget", function() { return ObjectLayoutWidget; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Widget = /** @class */ (function () {
    function Widget() {
        this.id = '';
        this.name = '';
        this.schema = {};
    }
    return Widget;
}());

var ControlWidget = /** @class */ (function (_super) {
    __extends(ControlWidget, _super);
    function ControlWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControlWidget.prototype.ngAfterViewInit = function () {
        var _this = this;
        var control = this.control;
        this.formProperty.valueChanges.subscribe(function (newValue) {
            if (control.value !== newValue) {
                control.setValue(newValue, { emitEvent: false });
            }
        });
        this.formProperty.errorsChanges.subscribe(function (errors) {
            control.setErrors(errors, { emitEvent: true });
            var messages = (errors || [])
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

var ArrayLayoutWidget = /** @class */ (function (_super) {
    __extends(ArrayLayoutWidget, _super);
    function ArrayLayoutWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArrayLayoutWidget.prototype.ngAfterViewInit = function () {
        var control = this.control;
        this.formProperty.errorsChanges.subscribe(function (errors) {
            control.setErrors(errors, { emitEvent: true });
        });
    };
    return ArrayLayoutWidget;
}(Widget));

var ObjectLayoutWidget = /** @class */ (function (_super) {
    __extends(ObjectLayoutWidget, _super);
    function ObjectLayoutWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ObjectLayoutWidget.prototype.ngAfterViewInit = function () {
        var control = this.control;
        this.formProperty.errorsChanges.subscribe(function (errors) {
            control.setErrors(errors, { emitEvent: true });
        });
    };
    return ObjectLayoutWidget;
}(Widget));



/***/ }),

/***/ "./projects/schema-form/src/lib/widgetchooser.component.ts":
/*!*****************************************************************!*\
  !*** ./projects/schema-form/src/lib/widgetchooser.component.ts ***!
  \*****************************************************************/
/*! exports provided: WidgetChooserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetChooserComponent", function() { return WidgetChooserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _terminator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terminator.service */ "./projects/schema-form/src/lib/terminator.service.ts");
/* harmony import */ var _widgetfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widgetfactory */ "./projects/schema-form/src/lib/widgetfactory.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetChooserComponent = /** @class */ (function () {
    function WidgetChooserComponent(widgetFactory, cdr, terminator) {
        if (widgetFactory === void 0) { widgetFactory = null; }
        this.widgetFactory = widgetFactory;
        this.cdr = cdr;
        this.terminator = terminator;
        this.widgetInstanciated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs = this.terminator.onDestroy.subscribe(function (destroy) {
            if (destroy) {
                _this.ref.destroy();
            }
        });
    };
    WidgetChooserComponent.prototype.ngOnChanges = function () {
        this.ref = this.widgetFactory.createWidget(this.container, this.widgetInfo.id);
        this.widgetInstanciated.emit(this.ref.instance);
        this.widgetInstance = this.ref.instance;
        this.cdr.detectChanges();
    };
    WidgetChooserComponent.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WidgetChooserComponent.prototype, "widgetInfo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], WidgetChooserComponent.prototype, "widgetInstanciated", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('target', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], WidgetChooserComponent.prototype, "container", void 0);
    WidgetChooserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sf-widget-chooser',
            template: "<div #target></div>",
        }),
        __metadata("design:paramtypes", [_widgetfactory__WEBPACK_IMPORTED_MODULE_2__["WidgetFactory"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _terminator_service__WEBPACK_IMPORTED_MODULE_1__["TerminatorService"]])
    ], WidgetChooserComponent);
    return WidgetChooserComponent;
}());



/***/ }),

/***/ "./projects/schema-form/src/lib/widgetfactory.ts":
/*!*******************************************************!*\
  !*** ./projects/schema-form/src/lib/widgetfactory.ts ***!
  \*******************************************************/
/*! exports provided: WidgetFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetFactory", function() { return WidgetFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _widgetregistry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widgetregistry */ "./projects/schema-form/src/lib/widgetregistry.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WidgetFactory = /** @class */ (function () {
    function WidgetFactory(registry, resolver) {
        this.registry = registry;
        this.resolver = resolver;
    }
    WidgetFactory.prototype.createWidget = function (container, type) {
        var componentClass = this.registry.getWidgetType(type);
        var componentFactory = this.resolver.resolveComponentFactory(componentClass);
        return container.createComponent(componentFactory);
    };
    WidgetFactory = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_widgetregistry__WEBPACK_IMPORTED_MODULE_1__["WidgetRegistry"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], WidgetFactory);
    return WidgetFactory;
}());



/***/ }),

/***/ "./projects/schema-form/src/lib/widgetregistry.ts":
/*!********************************************************!*\
  !*** ./projects/schema-form/src/lib/widgetregistry.ts ***!
  \********************************************************/
/*! exports provided: WidgetRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetRegistry", function() { return WidgetRegistry; });
var WidgetRegistry = /** @class */ (function () {
    function WidgetRegistry() {
        this.widgets = {};
    }
    WidgetRegistry.prototype.setDefaultWidget = function (widget) {
        this.defaultWidget = widget;
    };
    WidgetRegistry.prototype.getDefaultWidget = function () {
        return this.defaultWidget;
    };
    WidgetRegistry.prototype.hasWidget = function (type) {
        return this.widgets.hasOwnProperty(type);
    };
    WidgetRegistry.prototype.register = function (type, widget) {
        this.widgets[type] = widget;
    };
    WidgetRegistry.prototype.getWidgetType = function (type) {
        if (this.hasWidget(type)) {
            return this.widgets[type];
        }
        return this.defaultWidget;
    };
    return WidgetRegistry;
}());



/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-static-top\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" routerLink=\"/json\">NGX Schema Form</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li routerLinkActive=\"active\"><a routerLink=\"/json\">JSON Schema </a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/template\">Template Schema</a></li>\n      </ul>\n      <div *ngIf=\"page === 'json'\" class=\"navbar-form navbar-right\">\n        <div class=\"form-group\">\n          <input type=\"text\" [(ngModel)]=\"schemaUrl\" name=\"schemaUrl\" class=\"form-control\" placeholder=\"Load schema form URL\">\n        </div>\n        <button (click)=\"loadSchema()\" class=\"btn btn-default\" style=\"margin-left: 5px\">Load</button>\n        <button *ngIf=\"schemaUrl\" (click)=\"removeSchema()\" class=\"btn btn-default\" style=\"margin-left: 5px\">Clear</button>\n      </div>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(appService, router) {
        this.appService = appService;
        this.router = router;
    }
    AppComponent.prototype.loadSchema = function () {
        this.appService.loadSchema(this.schemaUrl);
    };
    AppComponent.prototype.removeSchema = function () {
        this.schemaUrl = undefined;
        this.appService.removeSchema();
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var data = this.appService.loadSchema();
        if (data && data.url) {
            this.schemaUrl = data.url;
        }
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; })).subscribe(function () {
            _this.page = _this.router.routerState.snapshot.url.replace('/', '');
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_schema_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-schema-form */ "./projects/schema-form/src/lib/index.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _json_schema_example_json_schema_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./json-schema-example/json-schema-example.component */ "./src/app/json-schema-example/json-schema-example.component.ts");
/* harmony import */ var _template_schema_example_template_schema_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./template-schema-example/template-schema-example.component */ "./src/app/template-schema-example/template-schema-example.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _json_schema_example_json_schema_example_component__WEBPACK_IMPORTED_MODULE_8__["JsonSchemaExampleComponent"],
                _template_schema_example_template_schema_example_component__WEBPACK_IMPORTED_MODULE_9__["TemplateSchemaExampleComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_6__["routes"]),
                ngx_schema_form__WEBPACK_IMPORTED_MODULE_5__["SchemaFormModule"],
                ngx_schema_form__WEBPACK_IMPORTED_MODULE_5__["TemplateSchemaModule"]
            ],
            providers: [
                { provide: ngx_schema_form__WEBPACK_IMPORTED_MODULE_5__["WidgetRegistry"], useClass: ngx_schema_form__WEBPACK_IMPORTED_MODULE_5__["DefaultWidgetRegistry"] },
                {
                    provide: ngx_schema_form__WEBPACK_IMPORTED_MODULE_5__["SchemaValidatorFactory"],
                    useClass: ngx_schema_form__WEBPACK_IMPORTED_MODULE_5__["ZSchemaValidatorFactory"]
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _json_schema_example_json_schema_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json-schema-example/json-schema-example.component */ "./src/app/json-schema-example/json-schema-example.component.ts");
/* harmony import */ var _template_schema_example_template_schema_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template-schema-example/template-schema-example.component */ "./src/app/template-schema-example/template-schema-example.component.ts");


var routes = [
    {
        path: '',
        redirectTo: 'json',
        pathMatch: 'full'
    },
    {
        path: 'json',
        component: _json_schema_example_json_schema_example_component__WEBPACK_IMPORTED_MODULE_0__["JsonSchemaExampleComponent"]
    },
    {
        path: 'template',
        component: _template_schema_example_template_schema_example_component__WEBPACK_IMPORTED_MODULE_1__["TemplateSchemaExampleComponent"]
    }
];


/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DATA = 'data';
var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        this.dataChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    Object.defineProperty(AppService.prototype, "data", {
        get: function () {
            if (this._data) {
                return this._data;
            }
            var data = sessionStorage.getItem(DATA);
            if (data) {
                this._data = JSON.parse(data);
                return this._data;
            }
            return;
        },
        set: function (data) {
            this._data = data;
            sessionStorage.setItem(DATA, JSON.stringify(data));
        },
        enumerable: true,
        configurable: true
    });
    AppService.prototype.loadSchema = function (url) {
        var _this = this;
        if (!url) {
            this.dataChanged.next(this.data);
            return this.data;
        }
        this.http.get(url).subscribe(function (schema) {
            _this.data = { url: url, schema: schema };
            _this.dataChanged.next(_this.data);
        });
        return this.data;
    };
    AppService.prototype.removeSchema = function () {
        sessionStorage.removeItem(DATA);
        this._data = undefined;
        this.dataChanged.next(null);
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/json-schema-example/binding_sample_bindings.ts":
/*!****************************************************************!*\
  !*** ./src/app/json-schema-example/binding_sample_bindings.ts ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var myFormBindings = {
    '/name': [
        {
            'input': function (event, formProperty) {
                var parent = formProperty.findRoot();
                /**
                 * Set the input value for the children
                 */
                var child1 = parent.getProperty('children/0/name');
                child1.setValue(formProperty.value, false);
                var child2 = parent.getProperty('children/1/name');
                child2.setValue(event.target.value, false);
                /**
                 * Get the input value for all the children
                 */
                for (var _i = 0, _a = parent.getProperty('children').properties; _i < _a.length; _i++) {
                    var objectProperty = _a[_i];
                    console.log('Value for child ', objectProperty, objectProperty.properties['name'].value);
                }
            }
        },
        {
            'click': function (event, formProperty) {
                console.log('2222 Called event!', event.target, event, formProperty);
            }
        }
    ]
};
/* harmony default export */ __webpack_exports__["default"] = (myFormBindings);


/***/ }),

/***/ "./src/app/json-schema-example/binding_sample_model.json":
/*!***************************************************************!*\
  !*** ./src/app/json-schema-example/binding_sample_model.json ***!
  \***************************************************************/
/*! exports provided: name, forename, children, default */
/***/ (function(module) {

module.exports = {"name":"","forename":"","children":[{"name":"","forename":"Maria","age":10},{"name":"","forename":"Ella","age":12}]};

/***/ }),

/***/ "./src/app/json-schema-example/binding_sample_schema.json":
/*!****************************************************************!*\
  !*** ./src/app/json-schema-example/binding_sample_schema.json ***!
  \****************************************************************/
/*! exports provided: type, title, description, properties, default */
/***/ (function(module) {

module.exports = {"type":"object","title":"Example with custom bindings.","description":"Type a family name to see how the name gets synchronized with the children.","properties":{"name":{"type":"string","title":"Surname"},"forename":{"type":"string","title":"Forename"},"children":{"type":"array","title":"Family","items":{"type":"object","title":"Children","properties":{"name":{"type":"string","title":"Surname"},"forename":{"type":"string","title":"forename"},"age":{"type":"number","title":"age"}}}}}};

/***/ }),

/***/ "./src/app/json-schema-example/json-schema-example.component.html":
/*!************************************************************************!*\
  !*** ./src/app/json-schema-example/json-schema-example.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <label for=\"samples\">Select schema form example: </label>&nbsp;\n      <select id=\"samples\" (change)=\"changeSchema($event.target.value)\">\n        <option *ngFor=\"let sample of samples\" (select)=\"sample.event()\" [selected]=\"sample.selected\">{{sample.label}}</option>\n      </select>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <h3>Form:</h3>\n      <sf-form (onErrorChange)=\"logErrors($event.value)\"\n               (onChange)=\"setValue($event.value)\"\n               [schema]=\"schema\"\n               [model]=\"model\"\n               [validators]=\"fieldValidators\"\n               [actions]=\"actions\"\n               [bindings]=\"fieldBindings\">\n      </sf-form>\n    </div>\n    <div class=\"col-md-4\">\n      <h3>Schema:</h3>\n      <pre>{{schema | json}}</pre>\n    </div>\n    <div class=\"col-md-4\">\n      <h3>Model:</h3>\n      <pre>{{value | json}}</pre>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/json-schema-example/json-schema-example.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/json-schema-example/json-schema-example.component.ts ***!
  \**********************************************************************/
/*! exports provided: JsonSchemaExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonSchemaExampleComponent", function() { return JsonSchemaExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_schema_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-schema-form */ "./projects/schema-form/src/lib/index.ts");
/* harmony import */ var _otherschema_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./otherschema.json */ "./src/app/json-schema-example/otherschema.json");
var _otherschema_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/Object.assign({}, _otherschema_json__WEBPACK_IMPORTED_MODULE_2__, {"default": _otherschema_json__WEBPACK_IMPORTED_MODULE_2__});
/* harmony import */ var _samplemodel_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./samplemodel.json */ "./src/app/json-schema-example/samplemodel.json");
var _samplemodel_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/Object.assign({}, _samplemodel_json__WEBPACK_IMPORTED_MODULE_3__, {"default": _samplemodel_json__WEBPACK_IMPORTED_MODULE_3__});
/* harmony import */ var _binding_sample_schema_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./binding_sample_schema.json */ "./src/app/json-schema-example/binding_sample_schema.json");
var _binding_sample_schema_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/Object.assign({}, _binding_sample_schema_json__WEBPACK_IMPORTED_MODULE_4__, {"default": _binding_sample_schema_json__WEBPACK_IMPORTED_MODULE_4__});
/* harmony import */ var _binding_sample_model_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./binding_sample_model.json */ "./src/app/json-schema-example/binding_sample_model.json");
var _binding_sample_model_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/Object.assign({}, _binding_sample_model_json__WEBPACK_IMPORTED_MODULE_5__, {"default": _binding_sample_model_json__WEBPACK_IMPORTED_MODULE_5__});
/* harmony import */ var _binding_sample_bindings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./binding_sample_bindings */ "./src/app/json-schema-example/binding_sample_bindings.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var JsonSchemaExampleComponent = /** @class */ (function () {
    function JsonSchemaExampleComponent(registry, appService) {
        this.appService = appService;
        this.schema = { properties: {} };
        this.model = {};
        this.fieldValidators = {};
        this.actions = {};
        this.fieldBindings = {};
        this.samples = [
            { label: 'Sample 1 - General', event: this.changeSchemaFirst, selected: true },
            { label: 'Sample 2 - Custom bindings', event: this.changeSchemaWithBindings, selected: false },
            { label: 'Sample 3 - Otherschema', event: this.changeSchemaOtherschema, selected: false }
        ];
    }
    JsonSchemaExampleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs = this.appService.dataChanged
            .subscribe(function (data) {
            if (data) {
                _this.schema = data.schema;
                return;
            }
            _this.changeSchemaInitial();
        });
    };
    JsonSchemaExampleComponent.prototype.ngOnDestroy = function () {
        if (this.subs) {
            this.subs.unsubscribe();
        }
    };
    JsonSchemaExampleComponent.prototype.logErrors = function (errors) {
        console.log('ERRORS', errors);
    };
    JsonSchemaExampleComponent.prototype.changeSchemaInitial = function () {
        for (var _i = 0, _a = this.samples; _i < _a.length; _i++) {
            var sample = _a[_i];
            if (sample.selected) {
                sample.event.bind(this)();
            }
        }
    };
    JsonSchemaExampleComponent.prototype.changeSchema = function (event) {
        console.log(event);
        for (var _i = 0, _a = this.samples; _i < _a.length; _i++) {
            var sample = _a[_i];
            if (sample.label === event) {
                sample.event.bind(this)();
            }
        }
    };
    JsonSchemaExampleComponent.prototype.changeSchemaFirst = function () {
        this.schema = _otherschema_json__WEBPACK_IMPORTED_MODULE_2__;
        this.model = _samplemodel_json__WEBPACK_IMPORTED_MODULE_3__;
        this.fieldBindings = {};
        this.fieldValidators = {};
        this.actions = {};
        this.fieldValidators['/bornOn'] = function (value, property, form) {
            var errors = null;
            var dateArr = value.split('-');
            if (dateArr.length === 3) {
                var now = new Date();
                var min = new Date(now.getFullYear() - 100, now.getMonth(), now.getDay()).getTime();
                var max = new Date().getTime();
                var born = new Date(dateArr[0], dateArr[1] - 1, dateArr[2]).getTime();
                if (born < min || born > max) {
                    errors = [
                        {
                            bornOn: {
                                expectedValue: '>today - 100 && < today',
                                actualValue: value,
                            },
                        },
                    ];
                }
            }
            return errors;
        };
        this.fieldValidators['/promotion'] = function (value, property, form) {
            if (value === 'student') {
                var bornOn = form.getProperty('/bornOn');
                if (bornOn.valid) {
                    var date = bornOn.value.split('-');
                    var validYear = new Date().getFullYear() - 17;
                    try {
                        var actualYear = parseInt(date[0], 10);
                        if (actualYear < validYear) {
                            return null;
                        }
                        return [
                            {
                                promotion: {
                                    bornOn: {
                                        expectedValue: 'year<' + validYear,
                                        actualValue: actualYear,
                                    },
                                },
                            },
                        ];
                    }
                    catch (e) {
                    }
                }
                return [
                    {
                        promotion: {
                            bornOn: {
                                expectedFormat: 'date',
                                actualValue: bornOn.value,
                            },
                        },
                    },
                ];
            }
            return null;
        };
        this.actions['alert'] = function (property, options) {
            property.forEachChildRecursive(function (child) {
                console.log(child.valid, child);
            });
            alert(JSON.stringify(property.value));
        };
        this.actions['reset'] = function (form, options) {
            form.reset();
        };
        this.actions['reset'] = function (form, options) {
            form.reset();
        };
        this.actions['disable'] = this.disableAll.bind(this);
    };
    JsonSchemaExampleComponent.prototype.changeSchemaOtherschema = function () {
        this.schema = _otherschema_json__WEBPACK_IMPORTED_MODULE_2__;
        this.model = {};
        this.fieldBindings = {};
        this.fieldValidators = {};
        this.actions = {};
    };
    JsonSchemaExampleComponent.prototype.changeSchemaWithBindings = function () {
        this.schema = _binding_sample_schema_json__WEBPACK_IMPORTED_MODULE_4__;
        this.model = _binding_sample_model_json__WEBPACK_IMPORTED_MODULE_5__;
        this.fieldBindings = _binding_sample_bindings__WEBPACK_IMPORTED_MODULE_6__["default"];
        this.fieldValidators = {};
        this.actions = {};
    };
    JsonSchemaExampleComponent.prototype.disableAll = function () {
        var _this = this;
        Object.keys(this.schema.properties).map(function (prop) {
            _this.schema.properties[prop].readOnly = true;
        });
    };
    JsonSchemaExampleComponent.prototype.setValue = function (value) {
        this.value = value;
    };
    JsonSchemaExampleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sf-json-schema-example',
            template: __webpack_require__(/*! ./json-schema-example.component.html */ "./src/app/json-schema-example/json-schema-example.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [ngx_schema_form__WEBPACK_IMPORTED_MODULE_1__["WidgetRegistry"],
            _app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"]])
    ], JsonSchemaExampleComponent);
    return JsonSchemaExampleComponent;
}());



/***/ }),

/***/ "./src/app/json-schema-example/otherschema.json":
/*!******************************************************!*\
  !*** ./src/app/json-schema-example/otherschema.json ***!
  \******************************************************/
/*! exports provided: title, fieldsets, properties, required, default */
/***/ (function(module) {

module.exports = {"title":"Otherschema","fieldsets":[{"fields":["title","description"],"id":"default","title":"Default"},{"fields":["author","language"],"id":"settings","title":"Settings"}],"properties":{"description":{"description":"Short description","minLength":0,"title":"Summary","type":"string","widget":"textarea"},"title":{"description":"","title":"Title","type":"string"},"author":{"description":"","title":"Author","type":"string"},"language":{"description":"","choices":[["es","Spanish"],["fr","French"]],"title":"Language","type":"string","widget":"select"}},"required":["title"]};

/***/ }),

/***/ "./src/app/json-schema-example/samplemodel.json":
/*!******************************************************!*\
  !*** ./src/app/json-schema-example/samplemodel.json ***!
  \******************************************************/
/*! exports provided: firstName, lastName, categories, transactionNumber, favoriteColor, transactionDescription, password, category, freeShipping, customEmail, default */
/***/ (function(module) {

module.exports = {"firstName":"John","lastName":"Doe","categories":["cat","dog"],"transactionNumber":123456,"favoriteColor":"#aaafff","transactionDescription":"Payment for your subscription","password":"admin","category":["hightech"],"freeShipping":false,"customEmail":"Nothing here..."};

/***/ }),

/***/ "./src/app/template-schema-example/template-schema-example.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/template-schema-example/template-schema-example.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "textarea.template-schema {\n  resize: none;\n  width: 100% !important;\n  height: 100% !important;\n  padding: 9.5px;\n  margin: 0;\n  font-size: 13px;\n  line-height: 1.42857143;\n  color: #6c6b6b;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n"

/***/ }),

/***/ "./src/app/template-schema-example/template-schema-example.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/template-schema-example/template-schema-example.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n            <h3>Form:</h3>\n            <sf-form #form [(ngModel)]=\"model\" templateSchema>\n                <sf-field name=\"recipient\" type=\"object\">\n                    Part 1 - Recipient\n                    <sf-field\n                        name=\"firstName\"\n                        [required]=\"true\"\n                        description=\"(First Name)\"\n                        placeholder=\"First Name\"\n                        [schema]=\"{ maxLength: 40, minLength: 2 }\">\n                        First Name\n                    </sf-field>\n                    <sf-field\n                        name=\"lastName\"\n                        [required]=\"true\"\n                        description=\"(Last Name)\"\n                        placeholder=\"Last Name\"\n                        [schema]=\"{ maxLength: 40, minLength: 2 }\">\n                        Last Name\n                    </sf-field>\n                    <sf-field name=\"categories\" type=\"array\" widget=\"checkbox\">\n                        Categories\n                        <sf-field type=\"string\">\n                            <sf-item value=\"dog\">Dog</sf-item>\n                            <sf-item value=\"cat\">Cat</sf-item>\n                            <sf-item value=\"dolphin\">Dolphin</sf-item>\n                        </sf-field>\n                    </sf-field>\n                    <sf-field\n                        name=\"bornOn\"\n                        widget=\"date\"\n                        format=\"date\"\n                        [schema]=\"{ default: '1800-12-12' }\"\n                        description=\"(Born On)\"\n                        placeholder=\"Ex: 2009-03-11\">\n                        Born On\n                    </sf-field>\n                    <sf-field\n                        name=\"moreInfo\"\n                        type=\"boolean\"\n                        description=\"More information?\"\n                        widget=\"checkbox\"\n                        [schema]=\"{ default: true }\"></sf-field>\n                    <sf-field\n                        name=\"favoriteColor\"\n                        widget=\"color\"\n                        [schema]=\"{ default: '#aaa111', pattern: '^#[0-9a-fA-F]{6}$', visibleIf: { moreInfo: [true] } }\">\n                        Favorite color\n                    </sf-field>\n                    <sf-field name=\"colors\" type=\"array\" widget=\"array\">\n                        Colors\n                        <sf-field type=\"string\" widget=\"color\">\n                            <sf-button id=\"Remove\" (click)=\"onClick('Supprimer')\">Supprimer</sf-button>\n                        </sf-field>\n                        <sf-button id=\"addItem\" (click)=\"onClick('Ajouter')\">Ajouter</sf-button>\n                        <sf-button id=\"reset\" (click)=\"onClick('Reset')\">Reset</sf-button>\n                    </sf-field>\n                </sf-field>\n\n                <sf-field name=\"survey\" type=\"object\">\n                    Little survey\n                    <sf-field name=\"q1\" description=\"Enter a number\"></sf-field>\n                    <sf-field name=\"q2\" type=\"object\" description=\"Address\">\n                        <sf-field\n                            name=\"color\"\n                            description=\"Color\"\n                            widget=\"color\"\n                            [schema]=\"{ default: '#aaa000', pattern: 'ff$' }\"></sf-field>\n                        <sf-field\n                            name=\"number\"\n                            description=\"Zip\"\n                            widget=\"number\"\n                            [schema]=\"{ default: 15 }\"></sf-field>\n                    </sf-field>\n                </sf-field>\n                <sf-field name=\"transaction\" type=\"object\">\n                    Part 2 - Transactions\n                    <sf-field\n                        name=\"transactionNumber\"\n                        description=\"Transaction number\"\n                        widget=\"number\"\n                        [readOnly]=\"true\"\n                        [schema]=\"{ default: 15 }\"></sf-field>\n                    <sf-field\n                        name=\"transactionDescription\"\n                        widget=\"textarea\"\n                        description=\"What is being transacted\"></sf-field>\n\n                    <sf-field name=\"promotion\" widget=\"radio\" description=\"promotion\">\n                        <sf-item value=\"student\">Student discount (20%)</sf-item>\n                        <sf-item value=\"summer\">Summer 2016 discount (15%)</sf-item>\n                        <sf-item value=\"none\">None</sf-item>\n                    </sf-field>\n\n                    <sf-field name=\"category\" type=\"array\" widget=\"select\" description=\"Category\">\n                        <sf-field type=\"string\">\n                            <sf-item value=\"design\">Design</sf-item>\n                            <sf-item value=\"hightech\">High-Tech</sf-item>\n                            <sf-item value=\"materials\">Materials</sf-item>\n                            <sf-item value=\"services\">Services</sf-item>\n                        </sf-field>\n                    </sf-field>\n                </sf-field>\n\n                <sf-field name=\"shipping\" type=\"object\">\n                    Part 3 - Shipping\n                    <sf-field\n                        name=\"numberOfBoxes\"\n                        description=\"Number of boxes required\"\n                        widget=\"range\"\n                        [schema]=\"{ minimun: 1, maximun: 10 }\"></sf-field>\n\n                    <sf-field\n                        name=\"delivery\"\n                        type=\"string\"\n                        widget=\"select\"\n                        [schema]=\"{ default: 'fedex' }\"\n                        description=\"Delivery service\">\n                        <sf-item value=\"fedex\">Fedex</sf-item>\n                        <sf-item value=\"ups\">UPS</sf-item>\n                        <sf-item value=\"other\">Other</sf-item>\n                    </sf-field>\n\n                </sf-field>\n\n                <sf-field name=\"contact\" type=\"object\">\n                    Part 4 - Email\n                    <sf-field\n                        name=\"useCustomEmail\"\n                        type=\"boolean\"\n                        description=\"Write a custom email ?\"></sf-field>\n                    <sf-field\n                        *ngIf=\"model?.contact?.useCustomEmail\"\n                        name=\"customEmail\"\n                        widget=\"textarea\"\n                        description=\"Email to send\"></sf-field>\n                </sf-field>\n\n                <sf-field name=\"confirmation\" type=\"object\">\n                    Part 5 - Confirmation\n                    <sf-field name=\"confirmationEmail\" format=\"email\" description=\"Email\"></sf-field>\n                    <sf-field name=\"password\" widget=\"password\" description=\"Password\"></sf-field>\n                </sf-field>\n\n                <sf-button (click)=\"onClick('Something')\">Do Something</sf-button>\n            </sf-form>\n\n        </div>\n        <div class=\"col-md-4\" style=\"height: 1000px\">\n            <h3>Template:</h3>\n<textarea class=\"template-schema\" readonly wrap=\"off\" resize=\"off\">\n&lt;sf-form #form [(ngModel)]=\"model\" templateSchema&gt;\n    &lt;sf-field name=\"recipient\" type=\"object\"&gt;\n        Part 1 - Recipient\n        &lt;sf-field\n            name=\"firstName\"\n            [required]=\"true\"\n            description=\"(First Name)\"\n            placeholder=\"First Name\"\n            [schema]=\"{ maxLength: 40, minLength: 2 }\"&gt;\n            First Name\n        &lt;/sf-field&gt;\n        &lt;sf-field\n            name=\"lastName\"\n            [required]=\"true\"\n            description=\"(Last Name)\"\n            placeholder=\"Last Name\"\n            [schema]=\"{ maxLength: 40, minLength: 2 }\"&gt;\n            Last Name\n        &lt;/sf-field&gt;\n        &lt;sf-field name=\"categories\" type=\"array\" widget=\"checkbox\"&gt;\n            Categories\n            &lt;sf-field type=\"string\"&gt;\n                &lt;sf-item value=\"dog\"&gt;Dog&lt;/sf-item&gt;\n                &lt;sf-item value=\"cat\"&gt;Cat&lt;/sf-item&gt;\n                &lt;sf-item value=\"dolphin\"&gt;Dolphin&lt;/sf-item&gt;\n            &lt;/sf-field&gt;\n        &lt;/sf-field&gt;\n        &lt;sf-field\n            name=\"bornOn\"\n            widget=\"date\"\n            format=\"date\"\n            [schema]=\"{ default: '1800-12-12' }\"\n            description=\"(Born On)\"\n            placeholder=\"Ex: 2009-03-11\"&gt;\n            Born On\n        &lt;/sf-field&gt;\n        &lt;sf-field\n            name=\"moreInfo\"\n            type=\"boolean\"\n            description=\"More information?\"\n            widget=\"checkbox\"\n            [schema]=\"{ default: true }\"&gt;&lt;/sf-field&gt;\n        &lt;sf-field\n            name=\"favoriteColor\"\n            widget=\"color\"\n            [schema]=\"{ default: '#aaa111', pattern: '^#[0-9a-fA-F]{6}$', visibleIf: { moreInfo: [true] } }\"&gt;\n            Favorite color\n        &lt;/sf-field&gt;\n        &lt;sf-field name=\"colors\" type=\"array\" widget=\"array\"&gt;\n            Colors\n            &lt;sf-field type=\"string\" widget=\"color\"&gt;\n                &lt;sf-button id=\"Remove\" (click)=\"onClick('Supprimer')\"&gt;Supprimer&lt;/sf-button&gt;\n            &lt;/sf-field&gt;\n            &lt;sf-button id=\"addItem\" (click)=\"onClick('Ajouter')\"&gt;Ajouter&lt;/sf-button&gt;\n            &lt;sf-button id=\"reset\" (click)=\"onClick('Reset')\"&gt;Reset&lt;/sf-button&gt;\n        &lt;/sf-field&gt;\n    &lt;/sf-field&gt;\n\n    &lt;sf-field name=\"survey\" type=\"object\"&gt;\n        Little survey\n        &lt;sf-field name=\"q1\" description=\"Enter a number\"&gt;&lt;/sf-field&gt;\n        &lt;sf-field name=\"q2\" type=\"object\" description=\"Address\"&gt;\n            &lt;sf-field\n                name=\"color\"\n                description=\"Color\"\n                widget=\"color\"\n                [schema]=\"{ default: '#aaa000', pattern: 'ff$' }\"&gt;&lt;/sf-field&gt;\n            &lt;sf-field\n                name=\"number\"\n                description=\"Zip\"\n                widget=\"number\"\n                [schema]=\"{ default: 15 }\"&gt;&lt;/sf-field&gt;\n        &lt;/sf-field&gt;\n    &lt;/sf-field&gt;\n    &lt;sf-field name=\"transaction\" type=\"object\"&gt;\n        Part 2 - Transactions\n        &lt;sf-field\n            name=\"transactionNumber\"\n            description=\"Transaction number\"\n            widget=\"number\"\n            [readOnly]=\"true\"\n            [schema]=\"{ default: 15 }\"&gt;&lt;/sf-field&gt;\n        &lt;sf-field\n            name=\"transactionDescription\"\n            widget=\"textarea\"\n            description=\"What is being transacted\"&gt;&lt;/sf-field&gt;\n\n        &lt;sf-field name=\"promotion\" widget=\"radio\" description=\"promotion\"&gt;\n            &lt;sf-item value=\"student\"&gt;Student discount (20%)&lt;/sf-item&gt;\n            &lt;sf-item value=\"summer\"&gt;Summer 2016 discount (15%)&lt;/sf-item&gt;\n            &lt;sf-item value=\"none\"&gt;None&lt;/sf-item&gt;\n        &lt;/sf-field&gt;\n\n        &lt;sf-field name=\"category\" type=\"array\" widget=\"select\" description=\"Category\"&gt;\n            &lt;sf-field type=\"string\"&gt;\n                &lt;sf-item value=\"design\"&gt;Design&lt;/sf-item&gt;\n                &lt;sf-item value=\"hightech\"&gt;High-Tech&lt;/sf-item&gt;\n                &lt;sf-item value=\"materials\"&gt;Materials&lt;/sf-item&gt;\n                &lt;sf-item value=\"services\"&gt;Services&lt;/sf-item&gt;\n            &lt;/sf-field&gt;\n        &lt;/sf-field&gt;\n    &lt;/sf-field&gt;\n\n    &lt;sf-field name=\"shipping\" type=\"object\"&gt;\n        Part 3 - Shipping\n        &lt;sf-field\n            name=\"numberOfBoxes\"\n            description=\"Number of boxes required\"\n            widget=\"range\"\n            [schema]=\"{ minimun: 1, maximun: 10 }\"&gt;&lt;/sf-field&gt;\n\n        &lt;sf-field\n            name=\"delivery\"\n            type=\"string\"\n            widget=\"select\"\n            [schema]=\"{ default: 'fedex' }\"\n            description=\"Delivery service\"&gt;\n            &lt;sf-item value=\"fedex\"&gt;Fedex&lt;/sf-item&gt;\n            &lt;sf-item value=\"ups\"&gt;UPS&lt;/sf-item&gt;\n            &lt;sf-item value=\"other\"&gt;Other&lt;/sf-item&gt;\n        &lt;/sf-field&gt;\n\n    &lt;/sf-field&gt;\n\n    &lt;sf-field name=\"contact\" type=\"object\"&gt;\n        Part 4 - Email\n        &lt;sf-field\n            name=\"useCustomEmail\"\n            type=\"boolean\"\n            description=\"Write a custom email ?\"&gt;&lt;/sf-field&gt;\n        &lt;sf-field\n            *ngIf=\"model?.contact?.useCustomEmail\"\n            name=\"customEmail\"\n            widget=\"textarea\"\n            description=\"Email to send\"&gt;&lt;/sf-field&gt;\n    &lt;/sf-field&gt;\n\n    &lt;sf-field name=\"confirmation\" type=\"object\"&gt;\n        Part 5 - Confirmation\n        &lt;sf-field name=\"confirmationEmail\" format=\"email\" description=\"Email\"&gt;&lt;/sf-field&gt;\n        &lt;sf-field name=\"password\" widget=\"password\" description=\"Password\"&gt;&lt;/sf-field&gt;\n    &lt;/sf-field&gt;\n\n    &lt;sf-button (click)=\"onClick('Something')\"&gt;Do Something&lt;/sf-button&gt;\n&lt;/sf-form&gt;\n\n</textarea>\n        </div>\n        <div class=\"col-md-4\">\n            <h3>Model:</h3>\n            <pre>{{model | json}}</pre>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/template-schema-example/template-schema-example.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/template-schema-example/template-schema-example.component.ts ***!
  \******************************************************************************/
/*! exports provided: TemplateSchemaExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateSchemaExampleComponent", function() { return TemplateSchemaExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TemplateSchemaExampleComponent = /** @class */ (function () {
    function TemplateSchemaExampleComponent() {
        this.model = {};
    }
    TemplateSchemaExampleComponent.prototype.onClick = function (message) {
        alert(message);
    };
    TemplateSchemaExampleComponent.prototype.ngOnInit = function () {
    };
    TemplateSchemaExampleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-template-schema-example',
            template: __webpack_require__(/*! ./template-schema-example.component.html */ "./src/app/template-schema-example/template-schema-example.component.html"),
            styles: [__webpack_require__(/*! ./template-schema-example.component.css */ "./src/app/template-schema-example/template-schema-example.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TemplateSchemaExampleComponent);
    return TemplateSchemaExampleComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/d/Users/Daniele/Development/workspace/ngx-schema-form/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map