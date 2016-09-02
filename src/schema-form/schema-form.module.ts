import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {
	FormsModule,
	ReactiveFormsModule
} from "@angular/forms";

import { FormElementComponent } from "./formelement.component";
import { FormComponent } from "./form.component";
import { WidgetChooserComponent } from "./widgetchooser.component";
import { WidgetRegistry } from "./widgetregistry";
import {
	ArrayWidget,
	ObjectWidget,
	CheckboxWidget,
	FileWidget,
	IntegerWidget,
	TextAreaWidget,
	RadioWidget,
	RangeWidget,
	SelectWidget,
	StringWidget
} from "./defaultwidgets";

@NgModule({
	imports : [BrowserModule, FormsModule, ReactiveFormsModule],
	declarations: [
		FormElementComponent,
		FormComponent,
		WidgetChooserComponent,
		ArrayWidget,
		ObjectWidget,
		CheckboxWidget,
		FileWidget,
		IntegerWidget,
		TextAreaWidget,
		RadioWidget,
		RangeWidget,
		SelectWidget,
		StringWidget,
	],
	entryComponents: [
		FormElementComponent,
		FormComponent,
		WidgetChooserComponent,
		ArrayWidget,
		ObjectWidget,
		CheckboxWidget,
		FileWidget,
		IntegerWidget,
		TextAreaWidget,
		RadioWidget,
		RangeWidget,
		SelectWidget,
		StringWidget,
	],
	exports: [
		FormComponent,
		FormElementComponent,
		ArrayWidget,
		ObjectWidget,
		CheckboxWidget,
		FileWidget,
		IntegerWidget,
		TextAreaWidget,
		RadioWidget,
		RangeWidget,
		SelectWidget,
		StringWidget
	]
})
export class SchemaFormModule {}
