/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { ControlWidget } from '../../widget';
export class CheckboxWidget extends ControlWidget {
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
function CheckboxWidget_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    CheckboxWidget.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    CheckboxWidget.ctorParameters;
    /** @type {?} */
    CheckboxWidget.prototype.checked;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNjaGVtYS1mb3JtLyIsInNvdXJjZXMiOlsibGliL2RlZmF1bHR3aWRnZXRzL2NoZWNrYm94L2NoZWNrYm94LndpZGdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQTZCN0MsTUFBTSxxQkFBc0IsU0FBUSxhQUFhOzs7dUJBRWpDLEVBQUU7Ozs7O0lBRWpCLGVBQWU7UUFDZCx1QkFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNyRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQ2pELEVBQUUsQ0FBQyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDekMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7aUJBQzFDO2FBQ0Q7U0FDRCxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNwRCxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQy9DLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzVDLENBQUMsQ0FBQztLQUNIOzs7OztJQUVELE9BQU8sQ0FBQyxFQUFFO1FBQ1QsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQzlCO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDN0Q7OztZQXhERCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXVCTDthQUNOIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1jaGVja2JveC13aWRnZXQnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJ3aWRnZXQgZm9ybS1ncm91cFwiPlxuICAgIDxsYWJlbCBbYXR0ci5mb3JdPVwiaWRcIiBjbGFzcz1cImhvcml6b250YWwgY29udHJvbC1sYWJlbFwiPlxuICAgICAgICB7eyBzY2hlbWEudGl0bGUgfX1cbiAgICA8L2xhYmVsPlxuXHQ8ZGl2ICpuZ0lmPVwic2NoZW1hLnR5cGUhPSdhcnJheSdcIiBjbGFzcz1cImNoZWNrYm94XCI+XG5cdFx0PGxhYmVsIGNsYXNzPVwiaG9yaXpvbnRhbCBjb250cm9sLWxhYmVsXCI+XG5cdFx0XHQ8aW5wdXQgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIiBbYXR0ci5uYW1lXT1cIm5hbWVcIiBbaW5kZXRlcm1pbmF0ZV09XCJjb250cm9sLnZhbHVlICE9PSBmYWxzZSAmJiBjb250cm9sLnZhbHVlICE9PSB0cnVlID8gdHJ1ZSA6bnVsbFwiIHR5cGU9XCJjaGVja2JveFwiIFthdHRyLmRpc2FibGVkXT1cInNjaGVtYS5yZWFkT25seVwiPlxuXHRcdFx0PGlucHV0ICpuZ0lmPVwic2NoZW1hLnJlYWRPbmx5XCIgW2F0dHIubmFtZV09XCJuYW1lXCIgdHlwZT1cImhpZGRlblwiIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCI+XG5cdFx0XHR7e3NjaGVtYS5kZXNjcmlwdGlvbn19XG5cdFx0PC9sYWJlbD5cblx0PC9kaXY+XG5cdDxuZy1jb250YWluZXIgKm5nSWY9XCJzY2hlbWEudHlwZT09PSdhcnJheSdcIj5cblx0XHQ8ZGl2ICpuZ0Zvcj1cImxldCBvcHRpb24gb2Ygc2NoZW1hLml0ZW1zLm9uZU9mXCIgY2xhc3M9XCJjaGVja2JveFwiPlxuXHRcdFx0PGxhYmVsIGNsYXNzPVwiaG9yaXpvbnRhbCBjb250cm9sLWxhYmVsXCI+XG5cdFx0XHRcdDxpbnB1dCBbYXR0ci5uYW1lXT1cIm5hbWVcIlxuXHRcdFx0XHRcdHZhbHVlPVwie3tvcHRpb24uZW51bVswXX19XCIgdHlwZT1cImNoZWNrYm94XCIgXG5cdFx0XHRcdFx0W2F0dHIuZGlzYWJsZWRdPVwic2NoZW1hLnJlYWRPbmx5XCJcblx0XHRcdFx0XHQoY2hhbmdlKT1cIm9uQ2hlY2soJGV2ZW50LnRhcmdldClcIlxuXHRcdFx0XHRcdFthdHRyLmNoZWNrZWRdPVwiY2hlY2tlZFtvcHRpb24uZW51bVswXV0gPyB0cnVlIDogbnVsbFwiPlxuXHRcdFx0XHR7e29wdGlvbi5kZXNjcmlwdGlvbn19XG5cdFx0XHQ8L2xhYmVsPlxuXHRcdDwvZGl2PlxuXHQ8L25nLWNvbnRhaW5lcj5cbjwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cblx0Y2hlY2tlZDogYW55ID0ge307XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdGNvbnN0IGNvbnRyb2wgPSB0aGlzLmNvbnRyb2w7XG5cdFx0dGhpcy5mb3JtUHJvcGVydHkudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgobmV3VmFsdWUpID0+IHtcblx0XHRcdGlmIChjb250cm9sLnZhbHVlICE9PSBuZXdWYWx1ZSkge1xuXHRcdFx0XHRjb250cm9sLnNldFZhbHVlKG5ld1ZhbHVlLCB7IGVtaXRFdmVudDogZmFsc2UgfSk7XG5cdFx0XHRcdGlmIChuZXdWYWx1ZSAmJiBBcnJheS5pc0FycmF5KG5ld1ZhbHVlKSkge1xuXHRcdFx0XHRcdG5ld1ZhbHVlLm1hcCh2ID0+IHRoaXMuY2hlY2tlZFt2XSA9IHRydWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0dGhpcy5mb3JtUHJvcGVydHkuZXJyb3JzQ2hhbmdlcy5zdWJzY3JpYmUoKGVycm9ycykgPT4ge1xuXHRcdFx0Y29udHJvbC5zZXRFcnJvcnMoZXJyb3JzLCB7IGVtaXRFdmVudDogdHJ1ZSB9KTtcblx0XHR9KTtcblx0XHRjb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKG5ld1ZhbHVlKSA9PiB7XG5cdFx0XHR0aGlzLmZvcm1Qcm9wZXJ0eS5zZXRWYWx1ZShuZXdWYWx1ZSwgZmFsc2UpO1xuXHRcdH0pO1xuXHR9XG5cblx0b25DaGVjayhlbCkge1xuXHRcdGlmIChlbC5jaGVja2VkKSB7XG5cdFx0XHR0aGlzLmNoZWNrZWRbZWwudmFsdWVdID0gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGVsZXRlIHRoaXMuY2hlY2tlZFtlbC52YWx1ZV07XG5cdFx0fVxuXHRcdHRoaXMuZm9ybVByb3BlcnR5LnNldFZhbHVlKE9iamVjdC5rZXlzKHRoaXMuY2hlY2tlZCksIGZhbHNlKTtcblx0fVxufVxuIl19