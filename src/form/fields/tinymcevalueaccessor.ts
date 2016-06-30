import {
	Directive,
	Inject,
	Provider,
	forwardRef
} from "@angular/core";

import {TinyMCE} from "./tinymce";

import {
	ControlValueAccessor,
	NG_VALUE_ACCESSOR
} from "@angular/forms";

const TINYMCEVALUEACCESSOR = new Provider(NG_VALUE_ACCESSOR, {useExisting: forwardRef(() => TinyMCEValueAccessor), multi: true});

@Directive({
	selector: "tinymce[ngModel]",
	host: {"(contentChange)": "valueUpdated($event.value)",
		"(blur)" : "onTouched()"
	},
	providers : [TINYMCEVALUEACCESSOR]
})
export class TinyMCEValueAccessor implements ControlValueAccessor {

	onChange = (_) => {};
	onTouched = () => {};

	constructor(private host: TinyMCE) { }

	writeValue(value: string): void {
		this.host.setContent(value);
	}

	registerOnChange(fn: (_: any) => void): void {
		this.onChange = fn;
	}
	registerOnTouched(fn: () => void): void {
		this.onTouched = fn;
	}

	private valueUpdated(value) {
		this.onChange(value);
	}

}
