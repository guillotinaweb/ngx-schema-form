import { NgModule } from '@angular/core';

import { FieldComponent } from './field/field.component';
import { TemplateSchemaDirective } from './template-schema.directive';
import { ButtonComponent } from './button/button.component';
import { ItemComponent } from './field/item/item.component';

const STANDALONE_COMPONENTS = [
  TemplateSchemaDirective,
  FieldComponent,
  ButtonComponent,
  ItemComponent
];

@NgModule({
  imports: [...STANDALONE_COMPONENTS],
  exports: [...STANDALONE_COMPONENTS]
})
export class TemplateSchemaModule { }
