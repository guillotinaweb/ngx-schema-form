import {Component} from '@angular/core';

import {ArrayLayoutWidget} from '../../widget';
import {FormProperty} from '../../model';

@Component({
  selector: 'sf-array-widget',
  template: `
    <div class="widget form-group">
      @if (schema.title) {
        <label [attr.for]="id" class="horizontal control-label">
          {{ schema.title }}
        </label>
      }
      @if (schema.description) {
        <span class="formHelp">{{ schema.description }}</span>
      }
      @for (itemProperty of formProperty.properties; track itemProperty) {
        <div>
          <sf-form-element [formProperty]="itemProperty"></sf-form-element>
          @if (!(schema.hasOwnProperty('minItems') && schema.hasOwnProperty('maxItems') && schema.minItems === schema.maxItems)) {
            <button (click)="removeItem(itemProperty)" class="btn btn-default array-remove-button"
                    [disabled]="isRemoveButtonDisabled()"
            >
              <span class="glyphicon glyphicon-minus" aria-hidden="true"></span> Remove
            </button>
          }
        </div>
      }
      @if (!(schema.hasOwnProperty('minItems') && schema.hasOwnProperty('maxItems') && schema.minItems === schema.maxItems)) {
        <button (click)="addItem()" class="btn btn-default array-add-button"
                [disabled]="isAddButtonDisabled()"
        >
          <span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Add
        </button>
      }
    </div>`,
  standalone: false
})
export class ArrayWidget extends ArrayLayoutWidget {
  buttonDisabledAdd: boolean
  buttonDisabledRemove: boolean

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
