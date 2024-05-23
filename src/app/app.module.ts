import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
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

@NgModule({ declarations: [
        AppComponent,
        JsonSchemaExampleComponent,
        TemplateSchemaExampleComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes),
        SchemaFormModule.forRoot(),
        TemplateSchemaModule], providers: [
        { provide: WidgetRegistry, useClass: DefaultWidgetRegistry },
        {
            provide: SchemaValidatorFactory,
            useClass: ZSchemaValidatorFactory
        },
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }
