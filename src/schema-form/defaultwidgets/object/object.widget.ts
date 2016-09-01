import {
	Component,
} from "@angular/core";

import { ObjectLayoutWidget } from "../../widget";

@Component({
	selector: "formobject",
	template: require("./object.widget.html")
})
export class ObjectWidget extends ObjectLayoutWidget { }
