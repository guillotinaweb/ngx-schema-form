/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { ControlWidget } from '../../widget';
export class RangeWidget extends ControlWidget {
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
function RangeWidget_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    RangeWidget.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    RangeWidget.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2Uud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNjaGVtYS1mb3JtLyIsInNvdXJjZXMiOlsibGliL2RlZmF1bHR3aWRnZXRzL3JhbmdlL3JhbmdlLndpZGdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBYzdDLE1BQU0sa0JBQW1CLFNBQVEsYUFBYTs7O1lBWjdDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUU7Ozs7Ozs7O09BUUw7YUFDTiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtcmFuZ2Utd2lkZ2V0JyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwid2lkZ2V0IGZvcm0tZ3JvdXBcIj5cblx0PGxhYmVsIFthdHRyLmZvcl09XCJpZFwiIGNsYXNzPVwiaG9yaXpvbnRhbCBjb250cm9sLWxhYmVsXCI+XG5cdFx0e3sgc2NoZW1hLnRpdGxlIH19XG5cdDwvbGFiZWw+XG4gICAgPHNwYW4gKm5nSWY9XCJzY2hlbWEuZGVzY3JpcHRpb25cIiBjbGFzcz1cImZvcm1IZWxwXCI+e3tzY2hlbWEuZGVzY3JpcHRpb259fTwvc3Bhbj5cdFxuXHQ8aW5wdXQgW25hbWVdPVwibmFtZVwiIGNsYXNzPVwidGV4dC13aWRnZXQgcmFuZ2Utd2lkZ2V0XCIgW2F0dHIuaWRdPVwiaWRcIlxuXHRbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiIFthdHRyLnR5cGVdPVwiJ3JhbmdlJ1wiIFthdHRyLm1pbl09XCJzY2hlbWEubWluaW11bVwiIFthdHRyLm1heF09XCJzY2hlbWEubWF4aW11bVwiIFthdHRyLmRpc2FibGVkXT1cInNjaGVtYS5yZWFkT25seT90cnVlOm51bGxcIiA+XG5cdDxpbnB1dCAqbmdJZj1cInNjaGVtYS5yZWFkT25seVwiIFthdHRyLm5hbWVdPVwibmFtZVwiIHR5cGU9XCJoaWRkZW5cIj5cbjwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgUmFuZ2VXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IHt9XG4iXX0=