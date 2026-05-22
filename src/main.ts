import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom, provideZoneChangeDetection } from '@angular/core';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import {
  SchemaFormModule,
  SchemaValidatorFactory,
  ZSchemaValidatorFactory,
  WidgetRegistry,
  DefaultWidgetRegistry,
  ExpressionCompilerFactory,
  JEXLExpressionCompilerFactory
} from 'ngx-schema-form';

bootstrapApplication(AppComponent, {
  providers: [
    provideZoneChangeDetection(), provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(SchemaFormModule.forRoot()),
    { provide: WidgetRegistry, useClass: DefaultWidgetRegistry },
    { provide: SchemaValidatorFactory, useClass: ZSchemaValidatorFactory },
    { provide: ExpressionCompilerFactory, useClass: JEXLExpressionCompilerFactory },
  ]
}).catch(err => console.error(err));
