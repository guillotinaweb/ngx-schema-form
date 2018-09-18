/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { ControlWidget } from '../../widget';
export class StringWidget extends ControlWidget {
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
function StringWidget_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    StringWidget.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    StringWidget.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zY2hlbWEtZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9kZWZhdWx0d2lkZ2V0cy9zdHJpbmcvc3RyaW5nLndpZGdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBc0I3QyxNQUFNLG1CQUFvQixTQUFRLGFBQWE7Ozs7SUFFM0MsWUFBWTtRQUNSLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQy9ELE1BQU0sQ0FBQyxNQUFNLENBQUM7U0FDakI7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7U0FDaEM7S0FDSjs7O1lBNUJKLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFnQkc7YUFDZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2Ytc3RyaW5nLXdpZGdldCcsXG4gIHRlbXBsYXRlOiBgPGlucHV0ICpuZ0lmPVwidGhpcy5nZXRJbnB1dFR5cGUoKT09PSdoaWRkZW4nOyBlbHNlIG5vdEhpZGRlbkZpZWxkQmxvY2tcIlxuICBbYXR0ci5uYW1lXT1cIm5hbWVcIiB0eXBlPVwiaGlkZGVuXCIgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIj5cbjxuZy10ZW1wbGF0ZSAjbm90SGlkZGVuRmllbGRCbG9jaz5cbjxkaXYgY2xhc3M9XCJ3aWRnZXQgZm9ybS1ncm91cFwiPlxuICAgIDxsYWJlbCBbYXR0ci5mb3JdPVwiaWRcIiBjbGFzcz1cImhvcml6b250YWwgY29udHJvbC1sYWJlbFwiPlxuICAgIFx0e3sgc2NoZW1hLnRpdGxlIH19XG4gICAgPC9sYWJlbD5cbiAgICA8c3BhbiAqbmdJZj1cInNjaGVtYS5kZXNjcmlwdGlvblwiIGNsYXNzPVwiZm9ybUhlbHBcIj57e3NjaGVtYS5kZXNjcmlwdGlvbn19PC9zcGFuPlxuICAgIDxpbnB1dCBbbmFtZV09XCJuYW1lXCIgW2F0dHIucmVhZG9ubHldPVwiKHNjaGVtYS53aWRnZXQuaWQhPT0nY29sb3InKSAmJiBzY2hlbWEucmVhZE9ubHk/dHJ1ZTpudWxsXCJcbiAgICBjbGFzcz1cInRleHQtd2lkZ2V0LmlkIHRleHRsaW5lLXdpZGdldCBmb3JtLWNvbnRyb2xcIiBbYXR0ci50eXBlXT1cInRoaXMuZ2V0SW5wdXRUeXBlKClcIlxuICAgIFthdHRyLmlkXT1cImlkXCIgIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCIgW2F0dHIucGxhY2Vob2xkZXJdPVwic2NoZW1hLnBsYWNlaG9sZGVyXCJcbiAgICBbYXR0ci5tYXhMZW5ndGhdPVwic2NoZW1hLm1heExlbmd0aCB8fCBudWxsXCJcbiAgICBbYXR0ci5taW5MZW5ndGhdPVwic2NoZW1hLm1pbkxlbmd0aCB8fCBudWxsXCJcbiAgICBbYXR0ci5kaXNhYmxlZF09XCIoc2NoZW1hLndpZGdldC5pZD09J2NvbG9yJyAmJiBzY2hlbWEucmVhZE9ubHkpP3RydWU6bnVsbFwiPlxuICAgIDxpbnB1dCAqbmdJZj1cIihzY2hlbWEud2lkZ2V0LmlkPT09J2NvbG9yJyAmJiBzY2hlbWEucmVhZE9ubHkpXCIgW2F0dHIubmFtZV09XCJuYW1lXCIgdHlwZT1cImhpZGRlblwiIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCI+XG48L2Rpdj5cbjwvbmctdGVtcGxhdGU+YFxufSlcbmV4cG9ydCBjbGFzcyBTdHJpbmdXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IHtcblxuICAgIGdldElucHV0VHlwZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNjaGVtYS53aWRnZXQuaWQgfHwgdGhpcy5zY2hlbWEud2lkZ2V0LmlkID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuICd0ZXh0JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjaGVtYS53aWRnZXQuaWQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=