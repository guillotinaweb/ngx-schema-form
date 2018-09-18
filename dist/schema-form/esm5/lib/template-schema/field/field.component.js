/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ContentChildren, QueryList, ElementRef } from '@angular/core';
import { merge } from 'rxjs';
import { ActionRegistry } from '../../model/actionregistry';
import { TemplateSchemaService } from '../template-schema.service';
import { ButtonComponent } from '../button/button.component';
import { FieldParent } from './field-parent';
import { FieldType } from './field';
import { ItemComponent } from './item/item.component';
var FieldComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FieldComponent, _super);
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
        var /** @type {?} */ schema = /** @type {?} */ ({
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
                for (var keys_1 = tslib_1.__values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                    var key = keys_1_1.value;
                    if (!changes[key].isFirstChange()) {
                        // on any input change, force schema change generation
                        this.templateSchemaService.changed();
                        break;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
                }
                finally { if (e_1) throw e_1.error; }
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
        merge(this.childFields.changes, this.childItems.changes, this.childButtons.changes)
            .subscribe(function () { return _this.templateSchemaService.changed(); });
    };
    FieldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sf-field',
                    template: "<ng-content ></ng-content>\n"
                },] },
    ];
    /** @nocollapse */
    FieldComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: TemplateSchemaService, },
        { type: ActionRegistry, },
    ]; };
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
    return FieldComponent;
}(FieldParent));
export { FieldComponent };
function FieldComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FieldComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FieldComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    FieldComponent.propDecorators;
    /** @type {?} */
    FieldComponent.prototype.childFields;
    /** @type {?} */
    FieldComponent.prototype.childItems;
    /** @type {?} */
    FieldComponent.prototype.childButtons;
    /** @type {?} */
    FieldComponent.prototype.name;
    /** @type {?} */
    FieldComponent.prototype.type;
    /** @type {?} */
    FieldComponent.prototype.format;
    /** @type {?} */
    FieldComponent.prototype.required;
    /** @type {?} */
    FieldComponent.prototype.readOnly;
    /** @type {?} */
    FieldComponent.prototype.title;
    /** @type {?} */
    FieldComponent.prototype.description;
    /** @type {?} */
    FieldComponent.prototype.placeholder;
    /** @type {?} */
    FieldComponent.prototype.widget;
    /** @type {?} */
    FieldComponent.prototype.validator;
    /** @type {?} */
    FieldComponent.prototype.schema;
    /** @type {?} */
    FieldComponent.prototype.elementRef;
    /** @type {?} */
    FieldComponent.prototype.templateSchemaService;
    /** @type {?} */
    FieldComponent.prototype.actionRegistry;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNjaGVtYS1mb3JtLyIsInNvdXJjZXMiOlsibGliL3RlbXBsYXRlLXNjaGVtYS9maWVsZC9maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFJTCxlQUFlLEVBRWYsU0FBUyxFQUNULFVBQVUsRUFLWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQWMsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSXpDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUk1RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFN0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxTQUFTLEVBQVMsTUFBTSxTQUFTLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztJQVFsQiwwQ0FBVztJQTZDN0Msd0JBQ1UsWUFDQSx1QkFDRSxjQUE4QjtRQUgxQyxZQUtFLGlCQUFPLFNBQ1I7UUFMUyxnQkFBVSxHQUFWLFVBQVU7UUFDViwyQkFBcUIsR0FBckIscUJBQXFCO1FBQ25CLG9CQUFjLEdBQWQsY0FBYyxDQUFnQjtxQkFoQ25DLFNBQVMsQ0FBQyxNQUFNO3VCQTJCVCxFQUFHOztLQVFoQjs7OztJQUVELGtDQUFTOzs7SUFBVDtRQUFBLGlCQTZEQztRQTNEQyxzR0FBUSwwQkFBVSxFQUFFLGdCQUFLLEVBQUUsc0JBQVEsQ0FFakM7UUFFRixxQkFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRTlCLHFCQUFNLE1BQU0scUJBQVE7WUFDbEIsSUFBSSxFQUFFLElBQUksQ0FBQyxJ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bnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBWaWV3Q2hpbGQsXG4gIFF1ZXJ5TGlzdCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlLFxuICBPbkNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBtZXJnZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICcuLi8uLi9tb2RlbC9hY3Rpb24nO1xuaW1wb3J0IHsgQWN0aW9uUmVnaXN0cnkgfSBmcm9tICcuLi8uLi9tb2RlbC9hY3Rpb25yZWdpc3RyeSc7XG5pbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tICcuLi8uLi9tb2RlbC92YWxpZGF0b3InO1xuXG5pbXBvcnQgeyBUZW1wbGF0ZVNjaGVtYUVsZW1lbnQgfSBmcm9tICcuLi90ZW1wbGF0ZS1zY2hlbWEtZWxlbWVudCc7XG5pbXBvcnQgeyBUZW1wbGF0ZVNjaGVtYVNlcnZpY2UgfSBmcm9tICcuLi90ZW1wbGF0ZS1zY2hlbWEuc2VydmljZSc7XG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuLi9idXR0b24vYnV0dG9uLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEZpZWxkUGFyZW50IH0gZnJvbSAnLi9maWVsZC1wYXJlbnQnO1xuaW1wb3J0IHsgRmllbGRUeXBlLCBGaWVsZCB9IGZyb20gJy4vZmllbGQnO1xuaW1wb3J0IHsgSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vaXRlbS9pdGVtLmNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtZmllbGQnLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50ID48L25nLWNvbnRlbnQ+XG5gXG59KVxuZXhwb3J0IGNsYXNzIEZpZWxkQ29tcG9uZW50IGV4dGVuZHMgRmllbGRQYXJlbnQgaW1wbGVtZW50c1xuRmllbGQsIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihGaWVsZENvbXBvbmVudClcbiAgY2hpbGRGaWVsZHM6IFF1ZXJ5TGlzdDxGaWVsZENvbXBvbmVudD47XG5cbiAgQENvbnRlbnRDaGlsZHJlbihJdGVtQ29tcG9uZW50KVxuICBjaGlsZEl0ZW1zOiBRdWVyeUxpc3Q8SXRlbUNvbXBvbmVudD47XG5cbiAgQENvbnRlbnRDaGlsZHJlbihCdXR0b25Db21wb25lbnQpXG4gIGNoaWxkQnV0dG9uczogUXVlcnlMaXN0PEJ1dHRvbkNvbXBvbmVudD47XG5cbiAgQElucHV0KClcbiAgbmFtZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHR5cGUgPSBGaWVsZFR5cGUuU3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGZvcm1hdDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHJlcXVpcmVkOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIHJlYWRPbmx5OiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIHRpdGxlOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgZGVzY3JpcHRpb246IHN0cmluZztcblxuICBASW5wdXQoKVxuICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHdpZGdldDogc3RyaW5nIHwgb2JqZWN0O1xuXG4gIEBJbnB1dCgpXG4gIHZhbGlkYXRvcjogVmFsaWRhdG9yO1xuXG4gIEBJbnB1dCgpXG4gIHNjaGVtYTogYW55ID0geyB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHRlbXBsYXRlU2NoZW1hU2VydmljZTogVGVtcGxhdGVTY2hlbWFTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhY3Rpb25SZWdpc3RyeTogQWN0aW9uUmVnaXN0cnlcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGdldFNjaGVtYSgpOiBhbnkge1xuXG4gICAgY29uc3QgeyBwcm9wZXJ0aWVzLCBpdGVtcywgcmVxdWlyZWQgfSA9IHRoaXMuZ2V0RmllbGRzU2NoZW1hKFxuICAgICAgdGhpcy5jaGlsZEZpZWxkcy5maWx0ZXIoZmllbGQgPT4gZmllbGQgIT09IHRoaXMpXG4gICAgKTtcblxuICAgIGNvbnN0IG9uZU9mID0gdGhpcy5nZXRPbmVPZigpO1xuXG4gICAgY29uc3Qgc2NoZW1hID0gPGFueT57XG4gICAgICB0eXBlOiB0aGlzLnR5cGVcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMudGl0bGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2NoZW1hLnRpdGxlID0gdGhpcy50aXRsZTtcbiAgICB9XG5cbiAgICBpZiAocHJvcGVydGllcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzY2hlbWEucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gICAgfVxuXG4gICAgaWYgKGl0ZW1zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNjaGVtYS5pdGVtcyA9IGl0ZW1zO1xuICAgIH1cblxuICAgIC8vIHJlcXVyaWVkIGNoaWxkIGZpZWxkc1xuICAgIGlmIChyZXF1aXJlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzY2hlbWEucmVxdWlyZWQgPSByZXF1aXJlZDtcbiAgICB9XG5cbiAgICBpZiAob25lT2YgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2NoZW1hLm9uZU9mID0gb25lT2Y7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2NoZW1hLmRlc2NyaXB0aW9uID0gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wbGFjZWhvbGRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzY2hlbWEucGxhY2Vob2xkZXIgPSB0aGlzLnBsYWNlaG9sZGVyO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmZvcm1hdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzY2hlbWEuZm9ybWF0ID0gdGhpcy5mb3JtYXQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMud2lkZ2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNjaGVtYS53aWRnZXQgPSB0aGlzLndpZGdldDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5yZWFkT25seSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzY2hlbWEucmVhZE9ubHkgPSB0aGlzLnJlYWRPbmx5O1xuICAgIH1cblxuICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLmdldEJ1dHRvbnMoKTtcbiAgICBpZiAoYnV0dG9ucy5sZW5ndGggPiAwKSB7XG4gICAgICBzY2hlbWEuYnV0dG9ucyA9IGJ1dHRvbnM7XG4gICAgfVxuXG4gICAgLy8gQElucHV0IHNjaGVtYSB0YWtlcyBwcmVjZWRlbmNlXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oc2NoZW1hLCB0aGlzLnNjaGVtYSk7XG5cbiAgfVxuXG4gIGdldFZhbGlkYXRvcnMoKTogeyBwYXRoOiBzdHJpbmcsIHZhbGlkYXRvcjogVmFsaWRhdG9yIH1bXSB7XG5cbiAgICAvLyByZWdpc3RlcmluZyB2YWxpZGF0b3IgaGVyZSBpcyBub3QgcG9zc2libGUgc2luY2UgcHJvcCBmdWxsIHBhdGggaXMgbmVlZGVkXG4gICAgY29uc3QgY2hpbGRWYWxpZGF0b3JzID0gdGhpcy5nZXRGaWVsZHNWYWxpZGF0b3JzKFxuICAgICAgdGhpcy5jaGlsZEZpZWxkcy5maWx0ZXIoZmllbGQgPT4gZmllbGQgIT09IHRoaXMpXG4gICAgKTtcbiAgICBjb25zdCB2YWxpZGF0b3JzID0gY2hpbGRWYWxpZGF0b3JzLm1hcCgoeyBwYXRoLCB2YWxpZGF0b3IgfSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aDogdGhpcy5wYXRoICsgcGF0aCxcbiAgICAgICAgdmFsaWRhdG9yXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgaWYgKCF0aGlzLnZhbGlkYXRvcikge1xuICAgICAgcmV0dXJuIHZhbGlkYXRvcnM7XG4gICAgfVxuXG4gICAgdmFsaWRhdG9ycy5wdXNoKHsgcGF0aDogdGhpcy5wYXRoLCB2YWxpZGF0b3I6IHRoaXMudmFsaWRhdG9yIH0pO1xuICAgIHJldHVybiB2YWxpZGF0b3JzO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNoYW5nZXMpO1xuICAgIGlmIChrZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgaWYgKCFjaGFuZ2VzW2tleV0uaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICAgICAgLy8gb24gYW55IGlucHV0IGNoYW5nZSwgZm9yY2Ugc2NoZW1hIGNoYW5nZSBnZW5lcmF0aW9uXG4gICAgICAgICAgdGhpcy50ZW1wbGF0ZVNjaGVtYVNlcnZpY2UuY2hhbmdlZCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuXG4gIHByaXZhdGUgZ2V0T25lT2YoKSB7XG5cbiAgICBpZiAodGhpcy5jaGlsZEl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5jaGlsZEl0ZW1zLm1hcCgoeyB2YWx1ZSwgZGVzY3JpcHRpb24gfSkgPT4ge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4geyBlbnVtOiBbdmFsdWVdLCBkZXNjcmlwdGlvbiB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4geyBlbnVtOiB2YWx1ZSwgZGVzY3JpcHRpb24gfTtcbiAgICB9KTtcblxuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm4gaXRlbXM7XG4gIH1cblxuXG4gIHByaXZhdGUgc2V0VGl0bGVGcm9tQ29udGVudCgpIHtcbiAgICBjb25zdCB0ZXh0Q29udGVudCA9IHRoaXMuZ2V0VGV4dENvbnRlbnQodGhpcy5lbGVtZW50UmVmKTtcblxuICAgIC8vICB0aXRsZSBhcyBASW5wdXQgdGFrZXMgcHJpb3JpdHkgb3ZlciBjb250ZW50IHRleHRcbiAgICBpZiAodGV4dENvbnRlbnQgJiYgIXRoaXMudGl0bGUpIHtcbiAgICAgIHRoaXMudGl0bGUgPSB0ZXh0Q29udGVudDtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG5cbiAgICAvLyBjYWNoZSBpdFxuICAgIHRoaXMuc2V0VGl0bGVGcm9tQ29udGVudCgpO1xuXG4gICAgbWVyZ2UoXG4gICAgICB0aGlzLmNoaWxkRmllbGRzLmNoYW5nZXMsXG4gICAgICB0aGlzLmNoaWxkSXRlbXMuY2hhbmdlcyxcbiAgICAgIHRoaXMuY2hpbGRCdXR0b25zLmNoYW5nZXNcbiAgICApXG4gICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnRlbXBsYXRlU2NoZW1hU2VydmljZS5jaGFuZ2VkKCkpO1xuICB9XG5cbn1cbiJdfQ==