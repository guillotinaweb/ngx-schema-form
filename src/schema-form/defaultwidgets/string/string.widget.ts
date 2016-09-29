import { Component } from "@angular/core";

import { ControlWidget } from "../../widget";

@Component({
  selector: "string-widget",
  template: require("./string.widget.html")
})
export class StringWidget extends ControlWidget {}
