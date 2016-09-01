import { Component } from "@angular/core";
import { BaseWidget } from "../../base";

@Component({
	selector: "default-field",
	template: `<p>Cannot find valid type for {{name}}`
})
export class DefaultWidget extends BaseWidget {}
