import { Component, AfterViewInit } from '@angular/core';

import { ControlWidget } from '../../widget';

@Component({
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
})
export class CheckboxWidget extends ControlWidget implements AfterViewInit {

	checked: any = {};

	ngAfterViewInit() {
		const control = this.control;
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

	onCheck(el) {
		if (el.checked) {
			this.checked[el.value] = true;
		} else {
			delete this.checked[el.value];
		}
		this.formProperty.setValue(Object.keys(this.checked), false);
	}
}
