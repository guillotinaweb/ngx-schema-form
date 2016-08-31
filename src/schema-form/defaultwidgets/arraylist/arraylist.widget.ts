
import {
	Component,
	Input,
	forwardRef
} from "@angular/core";
import { ArrayLayoutWidget } from "../../widget";
import { FormElementComponent } from "../../formelement.component";
import { ArrayProperty } from "../../model"

@Component({
	selector: "array-listing-widget",
	template: require("./arraylist.widget.html")
})
export class ArrayListWidget extends ArrayLayoutWidget {
	addItem() {
		this.formProperty.addItem();
	}

	removeItem(index: number) {
		this.formProperty.removeItem(index);
	}
}
