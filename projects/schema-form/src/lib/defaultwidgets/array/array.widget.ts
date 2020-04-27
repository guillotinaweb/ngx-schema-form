import { Component } from '@angular/core';

import { ArrayLayoutWidget } from '../../widget';
import { FormProperty } from '../../model';

@Component({
  selector: 'sf-array-widget',
  template: `<div class="widget form-group">
	<label [attr.for]="id" class="horizontal control-label">
		{{ schema.title }}
	</label>
	<span *ngIf="schema.description" class="formHelp">{{schema.description}}</span>
	<div *ngFor="let itemProperty of formProperty.properties">
		<sf-form-element [formProperty]="itemProperty"></sf-form-element>
		<button (click)="removeItem(itemProperty)" class="btn btn-default array-remove-button"
			[disabled]="isRemoveButtonDisabled()" 
			*ngIf="!(schema.hasOwnProperty('minItems') && schema.hasOwnProperty('maxItems') && schema.minItems === schema.maxItems)"
			>
			<span class="glyphicon glyphicon-minus" aria-hidden="true"></span> Remove
		</button>
	</div>
	<button (click)="addItem()" class="btn btn-default array-add-button"
		[disabled]="isAddButtonDisabled()"
		*ngIf="!(schema.hasOwnProperty('minItems') && schema.hasOwnProperty('maxItems') && schema.minItems === schema.maxItems)"
	>
		<span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Add
	</button>
</div>`
})
export class ArrayWidget extends ArrayLayoutWidget {
  buttonDisabledAdd:boolean
  buttonDisabledRemove:boolean

  addItem() {
	this.formProperty.addItem();
	this.updateButtonDisabledState()
  }

  removeItem(item: FormProperty) {
	this.formProperty.removeItem(item);
	this.updateButtonDisabledState()
  }

  trackByIndex(index: number, item: any) {
    return index;
  }

	updateButtonDisabledState() {
		this.buttonDisabledAdd = this.isAddButtonDisabled()
		this.buttonDisabledRemove = this.isRemoveButtonDisabled()
	}
	isAddButtonDisabled() {
		if (this.schema.hasOwnProperty('maxItems') && Array.isArray(this.formProperty.properties)) {
			if (this.formProperty.properties.length >= this.schema.maxItems) {
				return true
			}
		}
		return false
	}

	isRemoveButtonDisabled() {
		if (this.schema.hasOwnProperty('minItems') && Array.isArray(this.formProperty.properties)) {
			if (this.formProperty.properties.length <= this.schema.minItems) {
				return true
			}
		}
		return false
	}
}
