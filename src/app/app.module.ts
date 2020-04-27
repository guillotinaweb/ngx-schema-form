import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {
  SchemaFormModule,
  SchemaValidatorFactory,
  ZSchemaValidatorFactory,
  TemplateSchemaModule,
  WidgetRegistry,
  DefaultWidgetRegistry
} from 'ngx-schema-form';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import {
  JsonSchemaExampleComponent
} from './json-schema-example/json-schema-example.component';
import {
  TemplateSchemaExampleComponent
} from './template-schema-example/template-schema-example.component';

@NgModule({
  declarations: [
    AppComponent,
    JsonSchemaExampleComponent,
    TemplateSchemaExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    SchemaFormModule.forRoot(),
    TemplateSchemaModule
  ],
  providers: [
    {provide: WidgetRegistry, useClass: DefaultWidgetRegistry},
    {
      provide: SchemaValidatorFactory,
      useClass: ZSchemaValidatorFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
