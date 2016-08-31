import {
	Component,
	Input
} from "@angular/core";
import { BaseWidget } from "../../widget";

@Component({
	selector: "string-widget",
	template: require("./string.widget.html")
})
export class StringWidget extends BaseWidget {
	@Input("value") value: string = "";

}
