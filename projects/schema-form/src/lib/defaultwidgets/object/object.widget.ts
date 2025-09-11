import {Component} from '@angular/core';

import {ObjectLayoutWidget} from '../../widget';

@Component({
  selector: 'sf-form-object',
  template: `@for (fieldset of formProperty.schema.fieldsets; track fieldset) {
    <fieldset>
      @if (fieldset.title) {
        <legend>{{ fieldset.title }}</legend>
      }
      @if (fieldset.description) {
        <div>{{ fieldset.description }}</div>
      }
      @for (fieldId of fieldset.fields; track fieldId) {
        <div>
          <sf-form-element [formProperty]="formProperty.getProperty(fieldId)"></sf-form-element>
        </div>
      }
    </fieldset>
  }`,
  standalone: false
})
export class ObjectWidget extends ObjectLayoutWidget {
}
