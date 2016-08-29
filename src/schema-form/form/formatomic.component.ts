import {
	Component,
	Input
} from "@angular/core";

import { AtomicProperty } from "../model/atomicproperty";

@Component({
	selector: "formatomic",
	template: require("./formatomic.component.html")
})
export class FormAtomic {
	@Input() formProperty: AtomicProperty;
}
