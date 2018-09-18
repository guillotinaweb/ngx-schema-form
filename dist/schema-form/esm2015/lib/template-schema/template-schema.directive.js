/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
export class TemplateSchemaDirective extends FieldParent {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUtc2NoZW1hLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zY2hlbWEtZm9ybS8iLCJzb3VyY2VzIjpbImxpYi90ZW1wbGF0ZS1zY2hlbWEvdGVtcGxhdGUtc2NoZW1hLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxlQUFlLEVBQ2YsU0FBUyxFQUdULFlBQVksRUFFYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTdCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFMUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQVNuRCxNQUFNLDhCQUErQixTQUFRLFdBQVc7Ozs7Ozs7O0lBUXRELFlBQ1ksY0FBOEIsRUFDOUIsaUJBQW9DLEVBQ3RDLGVBQ0EsbUJBQ0E7UUFFUixLQUFLLEVBQUUsQ0FBQztRQU5FLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3RDLGtCQUFhLEdBQWIsYUFBYTtRQUNiLHNCQUFpQixHQUFqQixpQkFBaUI7UUFDakIsMEJBQXFCLEdBQXJCLHFCQUFxQjtLQUc5Qjs7Ozs7SUFFRCxxQkFBcUIsQ0FBQyxNQUF3QjtRQUMxQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUUvQix1QkFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU1Qyx1QkFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ2xELENBQUMsQ0FBQztRQUVILHVCQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUNqRCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRztZQUMxQixJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDdEIsVUFBVSxFQUFFLE1BQU0sQ0FBQyxVQUFVO1NBQzlCLENBQUM7UUFFRixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7U0FDckQ7UUFFRCx1QkFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQzdDO1FBRUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7WUFDN0IsTUFBTSxFQUFFLElBQUksWUFBWSxDQUN0QixjQUFjLEVBQ2QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQ3pCLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FDeEI7U0FDRixDQUFDLENBQUM7S0FFTjs7OztJQUdELGtCQUFrQjtRQUVoQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7U0FDeEQ7UUFFRCxLQUFLLENBQ0gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQ3hCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQ25DO2FBQ0QsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNiLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQ3hELENBQUMsQ0FBQztLQUVKOzs7WUE1RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFNBQVMsRUFBRTtvQkFDVCxxQkFBcUI7aUJBQ3RCO2FBQ0Y7Ozs7WUFoQlEsY0FBYztZQUNkLGlCQUFpQjtZQUZqQixhQUFhO1lBR2IsaUJBQWlCO1lBRWpCLHFCQUFxQjs7OzRCQWUzQixlQUFlLFNBQUMsY0FBYzs2QkFHOUIsZUFBZSxTQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBIb3N0QmluZGluZyxcbiAgU2ltcGxlQ2hhbmdlLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRm9ybUNvbXBvbmVudCB9IGZyb20gJy4uL2Zvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IEFjdGlvblJlZ2lzdHJ5IH0gZnJvbSAnLi4vbW9kZWwvYWN0aW9ucmVnaXN0cnknO1xuaW1wb3J0IHsgVmFsaWRhdG9yUmVnaXN0cnkgfSBmcm9tICcuLi9tb2RlbC92YWxpZGF0b3JyZWdpc3RyeSc7XG5pbXBvcnQgeyBUZXJtaW5hdG9yU2VydmljZSB9IGZyb20gJy4uL3Rlcm1pbmF0b3Iuc2VydmljZSc7XG5cbmltcG9ydCB7IFRlbXBsYXRlU2NoZW1hU2VydmljZSB9IGZyb20gJy4vdGVtcGxhdGUtc2NoZW1hLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2ZpZWxkL2ZpZWxkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWVsZFR5cGUsIEZpZWxkIH0gZnJvbSAnLi9maWVsZC9maWVsZCc7XG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2J1dHRvbi9idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IEZpZWxkUGFyZW50IH0gZnJvbSAnLi9maWVsZC9maWVsZC1wYXJlbnQnO1xuXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ3NmLWZvcm1bdGVtcGxhdGVTY2hlbWFdJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgVGVtcGxhdGVTY2hlbWFTZXJ2aWNlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVTY2hlbWFEaXJlY3RpdmUgZXh0ZW5kcyBGaWVsZFBhcmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oRmllbGRDb21wb25lbnQpXG4gIGNoaWxkRmllbGRzOiBRdWVyeUxpc3Q8RmllbGRDb21wb25lbnQ+O1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oQnV0dG9uQ29tcG9uZW50KVxuICBjaGlsZEJ1dHRvbnM6IFF1ZXJ5TGlzdDxCdXR0b25Db21wb25lbnQ+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBhY3Rpb25SZWdpc3RyeTogQWN0aW9uUmVnaXN0cnksXG4gICAgcHJvdGVjdGVkIHZhbGlkYXRvclJlZ2lzdHJ5OiBWYWxpZGF0b3JSZWdpc3RyeSxcbiAgICBwcml2YXRlIGZvcm1Db21wb25lbnQ6IEZvcm1Db21wb25lbnQsXG4gICAgcHJpdmF0ZSB0ZXJtaW5hdG9yU2VydmljZTogVGVybWluYXRvclNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVNjaGVtYVNlcnZpY2U6IFRlbXBsYXRlU2NoZW1hU2VydmljZVxuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgc2V0Rm9ybURvY3VtZW50U2NoZW1hKGZpZWxkczogRmllbGRDb21wb25lbnRbXSkge1xuICAgICAgdGhpcy5hY3Rpb25SZWdpc3RyeS5jbGVhcigpO1xuICAgICAgdGhpcy52YWxpZGF0b3JSZWdpc3RyeS5jbGVhcigpO1xuXG4gICAgICBjb25zdCBzY2hlbWEgPSB0aGlzLmdldEZpZWxkc1NjaGVtYShmaWVsZHMpO1xuXG4gICAgICBjb25zdCB2YWxpZGF0b3JzID0gdGhpcy5nZXRGaWVsZHNWYWxpZGF0b3JzKGZpZWxkcyk7XG4gICAgICB2YWxpZGF0b3JzLmZvckVhY2goKHsgcGF0aCwgdmFsaWRhdG9yIH0pID0+IHtcbiAgICAgICAgdGhpcy52YWxpZGF0b3JSZWdpc3RyeS5yZWdpc3RlcihwYXRoLCB2YWxpZGF0b3IpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHByZXZpb3VzU2NoZW1hID0gdGhpcy5mb3JtQ29tcG9uZW50LnNjaGVtYTtcbiAgICAgIHRoaXMuZm9ybUNvbXBvbmVudC5zY2hlbWEgPSB7XG4gICAgICAgIHR5cGU6IEZpZWxkVHlwZS5PYmplY3QsXG4gICAgICAgIHByb3BlcnRpZXM6IHNjaGVtYS5wcm9wZXJ0aWVzXG4gICAgICB9O1xuXG4gICAgICBpZiAoc2NoZW1hLnJlcXVpcmVkICYmIHNjaGVtYS5yZXF1aXJlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuZm9ybUNvbXBvbmVudC5zY2hlbWEucmVxdXJlZCA9IHNjaGVtYS5yZXF1aXJlZDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYnV0dG9ucyA9IHRoaXMuZ2V0QnV0dG9ucygpO1xuICAgICAgaWYgKGJ1dHRvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLmZvcm1Db21wb25lbnQuc2NoZW1hLmJ1dHRvbnMgPSBidXR0b25zO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmZvcm1Db21wb25lbnQubmdPbkNoYW5nZXMoe1xuICAgICAgICBzY2hlbWE6IG5ldyBTaW1wbGVDaGFuZ2UoXG4gICAgICAgICAgcHJldmlvdXNTY2hlbWEsXG4gICAgICAgICAgdGhpcy5mb3JtQ29tcG9uZW50LnNjaGVtYSxcbiAgICAgICAgICBCb29sZWFuKHByZXZpb3VzU2NoZW1hKVxuICAgICAgICApXG4gICAgICB9KTtcblxuICB9XG5cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG5cbiAgICBpZiAodGhpcy5jaGlsZEZpZWxkcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnNldEZvcm1Eb2N1bWVudFNjaGVtYSh0aGlzLmNoaWxkRmllbGRzLnRvQXJyYXkoKSk7XG4gICAgfVxuXG4gICAgbWVyZ2UoXG4gICAgICB0aGlzLmNoaWxkRmllbGRzLmNoYW5nZXMsXG4gICAgICB0aGlzLnRlbXBsYXRlU2NoZW1hU2VydmljZS5jaGFuZ2VzXG4gICAgKVxuICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnRlcm1pbmF0b3JTZXJ2aWNlLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuc2V0Rm9ybURvY3VtZW50U2NoZW1hKHRoaXMuY2hpbGRGaWVsZHMudG9BcnJheSgpKTtcbiAgICB9KTtcblxuICB9XG5cbn1cbiJdfQ==