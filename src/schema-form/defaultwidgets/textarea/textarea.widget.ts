import { Component } from "@angular/core";

import { ControlWidget } from "../../widget";

@Component({
  selector: "textarea-widget",
  template: require("./textarea.widget.html")
})
export class TextAreaWidget extends ControlWidget {}
