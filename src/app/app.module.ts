import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SchemaFormModule, SchemaValidatorFactory, ZSchemaValidatorFactory } from 'ngx-schema-form';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SchemaFormModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: SchemaValidatorFactory,
      useClass: ZSchemaValidatorFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
