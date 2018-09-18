/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { ControlWidget } from '../../widget';
export class SelectWidget extends ControlWidget {
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
function SelectWidget_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SelectWidget.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SelectWidget.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zY2hlbWEtZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9kZWZhdWx0d2lkZ2V0cy9zZWxlY3Qvc2VsZWN0LndpZGdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBd0I3QyxNQUFNLG1CQUFvQixTQUFRLGFBQWE7OztZQXRCOUMsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O09Ba0JKO2FBQ04iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3NmLXNlbGVjdC13aWRnZXQnLFxuXHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJ3aWRnZXQgZm9ybS1ncm91cFwiPlxuXHQ8bGFiZWwgW2F0dHIuZm9yXT1cImlkXCIgY2xhc3M9XCJob3Jpem9udGFsIGNvbnRyb2wtbGFiZWxcIj5cblx0XHR7eyBzY2hlbWEudGl0bGUgfX1cblx0PC9sYWJlbD5cblxuXHQ8c3BhbiAqbmdJZj1cInNjaGVtYS5kZXNjcmlwdGlvblwiIGNsYXNzPVwiZm9ybUhlbHBcIj5cblx0XHR7e3NjaGVtYS5kZXNjcmlwdGlvbn19XG5cdDwvc3Bhbj5cblxuXHQ8c2VsZWN0ICpuZ0lmPVwic2NoZW1hLnR5cGUhPSdhcnJheSdcIiBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiIFthdHRyLm5hbWVdPVwibmFtZVwiIFthdHRyLmRpc2FibGVkXT1cInNjaGVtYS5yZWFkT25seVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG5cdFx0PG9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIHNjaGVtYS5vbmVPZlwiIFtuZ1ZhbHVlXT1cIm9wdGlvbi5lbnVtWzBdXCIgPnt7b3B0aW9uLmRlc2NyaXB0aW9ufX08L29wdGlvbj5cblx0PC9zZWxlY3Q+XG5cblx0PHNlbGVjdCAqbmdJZj1cInNjaGVtYS50eXBlPT09J2FycmF5J1wiIG11bHRpcGxlIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCIgW2F0dHIubmFtZV09XCJuYW1lXCIgW2F0dHIuZGlzYWJsZWRdPVwic2NoZW1hLnJlYWRPbmx5XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cblx0XHQ8b3B0aW9uICpuZ0Zvcj1cImxldCBvcHRpb24gb2Ygc2NoZW1hLml0ZW1zLm9uZU9mXCIgW25nVmFsdWVdPVwib3B0aW9uLmVudW1bMF1cIiA+e3tvcHRpb24uZGVzY3JpcHRpb259fTwvb3B0aW9uPlxuXHQ8L3NlbGVjdD5cblxuXHQ8aW5wdXQgKm5nSWY9XCJzY2hlbWEucmVhZE9ubHlcIiBbYXR0ci5uYW1lXT1cIm5hbWVcIiB0eXBlPVwiaGlkZGVuXCIgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIj5cbjwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0V2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCB7fVxuIl19