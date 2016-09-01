import { Component } from "@angular/core";

import { ControlWidget } from "../../widget";

@Component({
	selector: "richtext-widget",
	template: require("./richtext.widget.html"),
})
export class RichTextWidget extends ControlWidget {}
