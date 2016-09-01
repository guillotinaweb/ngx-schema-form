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
	RichTextWidget,
	SelectWidget,
	StringWidget
} from "./defaultwidgets";

import { TinyMCEComponent } from "./defaultwidgets/richtext/tinymce.component";
import { TinyMCEValueAccessor } from "./defaultwidgets/richtext/tinymce.valueaccessor";


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
		RichTextWidget,
		SelectWidget,
		StringWidget,
		TinyMCEComponent,
		TinyMCEValueAccessor
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
		RichTextWidget,
		SelectWidget,
		StringWidget,
		TinyMCEComponent
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
		RichTextWidget,
		SelectWidget,
		StringWidget
	]
})
export class SchemaFormModule {}
