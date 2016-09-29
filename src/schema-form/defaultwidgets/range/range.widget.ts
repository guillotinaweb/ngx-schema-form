import { Component } from "@angular/core";

import { ControlWidget } from "../../widget";

@Component({
  selector: "range-widget",
  template: require("./range.widget.html")
})
export class RangeWidget extends ControlWidget {}
