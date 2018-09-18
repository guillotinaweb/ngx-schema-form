/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { ObjectLayoutWidget } from '../../widget';
export class ObjectWidget extends ObjectLayoutWidget {
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
function ObjectWidget_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ObjectWidget.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ObjectWidget.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zY2hlbWEtZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9kZWZhdWx0d2lkZ2V0cy9vYmplY3Qvb2JqZWN0LndpZGdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFZbEQsTUFBTSxtQkFBb0IsU0FBUSxrQkFBa0I7OztZQVZuRCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFOzs7Ozs7WUFNQTthQUNYIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE9iamVjdExheW91dFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLWZvcm0tb2JqZWN0JyxcbiAgdGVtcGxhdGU6IGA8ZmllbGRzZXQgKm5nRm9yPVwibGV0IGZpZWxkc2V0IG9mIGZvcm1Qcm9wZXJ0eS5zY2hlbWEuZmllbGRzZXRzXCI+XG5cdDxsZWdlbmQgKm5nSWY9XCJmaWVsZHNldC50aXRsZVwiPnt7ZmllbGRzZXQudGl0bGV9fTwvbGVnZW5kPlxuXHQ8ZGl2ICpuZ0lmPVwiZmllbGRzZXQuZGVzY3JpcHRpb25cIj57e2ZpZWxkc2V0LmRlc2NyaXB0aW9ufX08L2Rpdj5cblx0PGRpdiAqbmdGb3I9XCJsZXQgZmllbGRJZCBvZiBmaWVsZHNldC5maWVsZHNcIj5cblx0XHQ8c2YtZm9ybS1lbGVtZW50IFtmb3JtUHJvcGVydHldPVwiZm9ybVByb3BlcnR5LmdldFByb3BlcnR5KGZpZWxkSWQpXCI+PC9zZi1mb3JtLWVsZW1lbnQ+XG5cdDwvZGl2PlxuPC9maWVsZHNldD5gXG59KVxuZXhwb3J0IGNsYXNzIE9iamVjdFdpZGdldCBleHRlbmRzIE9iamVjdExheW91dFdpZGdldCB7IH1cbiJdfQ==