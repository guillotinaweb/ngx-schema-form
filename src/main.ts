import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import {
  SchemaFormModule,
  SchemaValidatorFactory,
  ZSchemaValidatorFactory,
  WidgetRegistry,
  DefaultWidgetRegistry
} from 'ngx-schema-form';
import { ExpressionCompilerFactory, JEXLExpressionCompilerFactory } from 'ngx-schema-form';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(SchemaFormModule.forRoot()),
    { provide: WidgetRegistry, useClass: DefaultWidgetRegistry },
    { provide: SchemaValidatorFactory, useClass: ZSchemaValidatorFactory },
    { provide: ExpressionCompilerFactory, useClass: JEXLExpressionCompilerFactory },
  ]
}).catch(err => console.error(err));
