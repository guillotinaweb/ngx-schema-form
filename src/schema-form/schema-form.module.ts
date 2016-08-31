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
	ArrayListWidget,
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
	declarations: [
		FormElementComponent,
		FormComponent,
		WidgetChooserComponent,
		ArrayListWidget,
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
	imports : [BrowserModule, FormsModule, ReactiveFormsModule],
	entryComponents: [
		FormElementComponent,
		FormComponent,
		WidgetChooserComponent,
		ArrayListWidget,
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
		ArrayListWidget,
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
