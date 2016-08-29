import { REACTIVE_FORM_DIRECTIVES } from "@angular/forms";

import {
	Component,
	Input,
	forwardRef
} from "@angular/core";
import { ArrayLayoutWidget } from "../base";
import { FormElementComponent } from "../../form/formelement.component";
import { ArrayProperty } from "../../model"

@Component({
	selector: "array-listing-widget",
	template: require("./arraylist.widget.html"),
	directives: [forwardRef(() => FormElementComponent)]
})
export class ArrayListWidget extends ArrayLayoutWidget {
	addItem() {
		this.formProperty.addItem();
	}

	removeItem(index: number) {
		this.formProperty.removeItem(index);
	}
}
