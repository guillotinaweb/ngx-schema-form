import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { SchemaFormModule } from "../src";

@NgModule({
  imports: [BrowserModule, SchemaFormModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
