import { Component } from "@angular/core";

import { ControlWidget } from "../../widget";

@Component({
  selector: "select-widget",
  template: require("./select.widget.html")
})
export class SelectWidget extends ControlWidget {}
