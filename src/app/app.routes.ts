import { Routes } from '@angular/router';

import {
  JsonSchemaExampleComponent
} from './json-schema-example/json-schema-example.component';
import {
  TemplateSchemaExampleComponent
} from './template-schema-example/template-schema-example.component';



export const routes: Routes = [
  {
    path: '',
    redirectTo: 'json',
    pathMatch: 'full'
  },
  {
    path: 'json',
    component: JsonSchemaExampleComponent
  },
  {
    path: 'template',
    component: TemplateSchemaExampleComponent
  }
];


