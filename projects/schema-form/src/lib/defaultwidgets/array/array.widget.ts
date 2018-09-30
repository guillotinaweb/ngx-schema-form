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
		<button (click)="removeItem(itemProperty)" class="btn btn-default array-remove-button">
			<span class="glyphicon glyphicon-minus" aria-hidden="true"></span> Remove
		</button>
	</div>
	<button (click)="addItem()" class="btn btn-default array-add-button">
		<span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Add
	</button>
</div>`
})
export class ArrayWidget extends ArrayLayoutWidget {

  addItem() {
    this.formProperty.addItem();
  }

  removeItem(item: FormProperty) {
    this.formProperty.removeItem(item);
  }

  trackByIndex(index: number, item: any) {
    return index;
  }
}
