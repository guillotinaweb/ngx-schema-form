/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ContentChildren, QueryList, SimpleChange } from '@angular/core';
import { merge } from 'rxjs';
import { FormComponent } from '../form.component';
import { ActionRegistry } from '../model/actionregistry';
import { ValidatorRegistry } from '../model/validatorregistry';
import { TerminatorService } from '../terminator.service';
import { TemplateSchemaService } from './template-schema.service';
import { FieldComponent } from './field/field.component';
import { FieldType } from './field/field';
import { ButtonComponent } from './button/button.component';
import { FieldParent } from './field/field-parent';
var TemplateSchemaDirective = /** @class */ (function (_super) {
    tslib_1.__extends(TemplateSchemaDirective, _super);
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
            schema: new SimpleChange(previousSchema, this.formComponent.schema, Boolean(previousSchema))
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
        merge(this.childFields.changes, this.templateSchemaService.changes)
            .subscribe(function () {
            _this.terminatorService.destroy();
            _this.setFormDocumentSchema(_this.childFields.toArray());
        });
    };
    TemplateSchemaDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'sf-form[templateSchema]',
                    providers: [
                        TemplateSchemaService
                    ]
                },] },
    ];
    /** @nocollapse */
    TemplateSchemaDirective.ctorParameters = function () { return [
        { type: ActionRegistry, },
        { type: ValidatorRegistry, },
        { type: FormComponent, },
        { type: TerminatorService, },
        { type: TemplateSchemaService, },
    ]; };
    TemplateSchemaDirective.propDecorators = {
        "childFields": [{ type: ContentChildren, args: [FieldComponent,] },],
        "childButtons": [{ type: ContentChildren, args: [ButtonComponent,] },],
    };
    return TemplateSchemaDirective;
}(FieldParent));
export { TemplateSchemaDirective };
function TemplateSchemaDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TemplateSchemaDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TemplateSchemaDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    TemplateSchemaDirective.propDecorators;
    /** @type {?} */
    TemplateSchemaDirective.prototype.childFields;
    /** @type {?} */
    TemplateSchemaDirective.prototype.childButtons;
    /** @type {?} */
    TemplateSchemaDirective.prototype.actionRegistry;
    /** @type {?} */
    TemplateSchemaDirective.prototype.validatorRegistry;
    /** @type {?} */
    TemplateSchemaDirective.prototype.formComponent;
    /** @type {?} */
    TemplateSchemaDirective.prototype.terminatorService;
    /** @type {?} */
    TemplateSchemaDirective.prototype.templateSchemaService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUtc2NoZW1hLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zY2hlbWEtZm9ybS8iLCJzb3VyY2VzIjpbImxpYi90ZW1wbGF0ZS1zY2hlbWEvdGVtcGxhdGUtc2NoZW1hLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLFNBQVMsRUFHVCxZQUFZLEVBRWIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUU3QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTFELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsU0FBUyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0lBU04sbURBQVc7SUFRdEQsaUNBQ1ksY0FBOEIsRUFDOUIsaUJBQW9DLEVBQ3RDLGVBQ0EsbUJBQ0E7UUFMVixZQU9FLGlCQUFPLFNBQ1I7UUFQVyxvQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUN0QyxtQkFBYSxHQUFiLGFBQWE7UUFDYix1QkFBaUIsR0FBakIsaUJBQWlCO1FBQ2pCLDJCQUFxQixHQUFyQixxQkFBcUI7O0tBRzlCOzs7OztJQUVELHVEQUFxQjs7OztJQUFyQixVQUFzQixNQUF3QjtRQUE5QyxpQkFrQ0M7UUFqQ0csSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFL0IscUJBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFNUMscUJBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwRCxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBbUI7Z0JBQWpCLGNBQUksRUFBRSx3QkFBUztZQUNuQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztTQUNsRCxDQUFDLENBQUM7UUFFSCxxQkFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDakQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUc7WUFDMUIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQ3RCLFVBQVUsRUFBRSxNQUFNLENBQUMsVUFBVTtTQUM5QixDQUFDO1FBRUYsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xELElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1NBQ3JEO1FBRUQscUJBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUM3QztRQUVELElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO1lBQzdCLE1BQU0sRUFBRSxJQUFJLFlBQVksQ0FDdEIsY0FBYyxFQUNkLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUN6QixPQUFPLENBQUMsY0FBYyxDQUFDLENBQ3hCO1NBQ0YsQ0FBQyxDQUFDO0tBRU47Ozs7SUFHRCxvREFBa0I7OztJQUFsQjtRQUFBLGlCQWVDO1FBYkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQ3hEO1FBRUQsS0FBSyxDQUNILElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUN4QixJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUNuQzthQUNELFNBQVMsQ0FBQztZQUNSLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQyxLQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQ3hELENBQUMsQ0FBQztLQUVKOztnQkE1RUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLFNBQVMsRUFBRTt3QkFDVCxxQkFBcUI7cUJBQ3RCO2lCQUNGOzs7O2dCQWhCUSxjQUFjO2dCQUNkLGlCQUFpQjtnQkFGakIsYUFBYTtnQkFHYixpQkFBaUI7Z0JBRWpCLHFCQUFxQjs7O2dDQWUzQixlQUFlLFNBQUMsY0FBYztpQ0FHOUIsZUFBZSxTQUFDLGVBQWU7O2tDQWxDbEM7RUE2QjZDLFdBQVc7U0FBM0MsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgSG9zdEJpbmRpbmcsXG4gIFNpbXBsZUNoYW5nZSxcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG1lcmdlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEZvcm1Db21wb25lbnQgfSBmcm9tICcuLi9mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBY3Rpb25SZWdpc3RyeSB9IGZyb20gJy4uL21vZGVsL2FjdGlvbnJlZ2lzdHJ5JztcbmltcG9ydCB7IFZhbGlkYXRvclJlZ2lzdHJ5IH0gZnJvbSAnLi4vbW9kZWwvdmFsaWRhdG9ycmVnaXN0cnknO1xuaW1wb3J0IHsgVGVybWluYXRvclNlcnZpY2UgfSBmcm9tICcuLi90ZXJtaW5hdG9yLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBUZW1wbGF0ZVNjaGVtYVNlcnZpY2UgfSBmcm9tICcuL3RlbXBsYXRlLXNjaGVtYS5zZXJ2aWNlJztcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9maWVsZC9maWVsZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmllbGRUeXBlLCBGaWVsZCB9IGZyb20gJy4vZmllbGQvZmllbGQnO1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9idXR0b24vYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWVsZFBhcmVudCB9IGZyb20gJy4vZmllbGQvZmllbGQtcGFyZW50JztcblxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdzZi1mb3JtW3RlbXBsYXRlU2NoZW1hXScsXG4gIHByb3ZpZGVyczogW1xuICAgIFRlbXBsYXRlU2NoZW1hU2VydmljZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlU2NoZW1hRGlyZWN0aXZlIGV4dGVuZHMgRmllbGRQYXJlbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcblxuICBAQ29udGVudENoaWxkcmVuKEZpZWxkQ29tcG9uZW50KVxuICBjaGlsZEZpZWxkczogUXVlcnlMaXN0PEZpZWxkQ29tcG9uZW50PjtcblxuICBAQ29udGVudENoaWxkcmVuKEJ1dHRvbkNvbXBvbmVudClcbiAgY2hpbGRCdXR0b25zOiBRdWVyeUxpc3Q8QnV0dG9uQ29tcG9uZW50PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgYWN0aW9uUmVnaXN0cnk6IEFjdGlvblJlZ2lzdHJ5LFxuICAgIHByb3RlY3RlZCB2YWxpZGF0b3JSZWdpc3RyeTogVmFsaWRhdG9yUmVnaXN0cnksXG4gICAgcHJpdmF0ZSBmb3JtQ29tcG9uZW50OiBGb3JtQ29tcG9uZW50LFxuICAgIHByaXZhdGUgdGVybWluYXRvclNlcnZpY2U6IFRlcm1pbmF0b3JTZXJ2aWNlLFxuICAgIHByaXZhdGUgdGVtcGxhdGVTY2hlbWFTZXJ2aWNlOiBUZW1wbGF0ZVNjaGVtYVNlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHNldEZvcm1Eb2N1bWVudFNjaGVtYShmaWVsZHM6IEZpZWxkQ29tcG9uZW50W10pIHtcbiAgICAgIHRoaXMuYWN0aW9uUmVnaXN0cnkuY2xlYXIoKTtcbiAgICAgIHRoaXMudmFsaWRhdG9yUmVnaXN0cnkuY2xlYXIoKTtcblxuICAgICAgY29uc3Qgc2NoZW1hID0gdGhpcy5nZXRGaWVsZHNTY2hlbWEoZmllbGRzKTtcblxuICAgICAgY29uc3QgdmFsaWRhdG9ycyA9IHRoaXMuZ2V0RmllbGRzVmFsaWRhdG9ycyhmaWVsZHMpO1xuICAgICAgdmFsaWRhdG9ycy5mb3JFYWNoKCh7IHBhdGgsIHZhbGlkYXRvciB9KSA9PiB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yUmVnaXN0cnkucmVnaXN0ZXIocGF0aCwgdmFsaWRhdG9yKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBwcmV2aW91c1NjaGVtYSA9IHRoaXMuZm9ybUNvbXBvbmVudC5zY2hlbWE7XG4gICAgICB0aGlzLmZvcm1Db21wb25lbnQuc2NoZW1hID0ge1xuICAgICAgICB0eXBlOiBGaWVsZFR5cGUuT2JqZWN0LFxuICAgICAgICBwcm9wZXJ0aWVzOiBzY2hlbWEucHJvcGVydGllc1xuICAgICAgfTtcblxuICAgICAgaWYgKHNjaGVtYS5yZXF1aXJlZCAmJiBzY2hlbWEucmVxdWlyZWQubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLmZvcm1Db21wb25lbnQuc2NoZW1hLnJlcXVyZWQgPSBzY2hlbWEucmVxdWlyZWQ7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLmdldEJ1dHRvbnMoKTtcbiAgICAgIGlmIChidXR0b25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5mb3JtQ29tcG9uZW50LnNjaGVtYS5idXR0b25zID0gYnV0dG9ucztcbiAgICAgIH1cblxuICAgICAgdGhpcy5mb3JtQ29tcG9uZW50Lm5nT25DaGFuZ2VzKHtcbiAgICAgICAgc2NoZW1hOiBuZXcgU2ltcGxlQ2hhbmdlKFxuICAgICAgICAgIHByZXZpb3VzU2NoZW1hLFxuICAgICAgICAgIHRoaXMuZm9ybUNvbXBvbmVudC5zY2hlbWEsXG4gICAgICAgICAgQm9vbGVhbihwcmV2aW91c1NjaGVtYSlcbiAgICAgICAgKVxuICAgICAgfSk7XG5cbiAgfVxuXG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuXG4gICAgaWYgKHRoaXMuY2hpbGRGaWVsZHMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5zZXRGb3JtRG9jdW1lbnRTY2hlbWEodGhpcy5jaGlsZEZpZWxkcy50b0FycmF5KCkpO1xuICAgIH1cblxuICAgIG1lcmdlKFxuICAgICAgdGhpcy5jaGlsZEZpZWxkcy5jaGFuZ2VzLFxuICAgICAgdGhpcy50ZW1wbGF0ZVNjaGVtYVNlcnZpY2UuY2hhbmdlc1xuICAgIClcbiAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy50ZXJtaW5hdG9yU2VydmljZS5kZXN0cm95KCk7XG4gICAgICB0aGlzLnNldEZvcm1Eb2N1bWVudFNjaGVtYSh0aGlzLmNoaWxkRmllbGRzLnRvQXJyYXkoKSk7XG4gICAgfSk7XG5cbiAgfVxuXG59XG4iXX0=