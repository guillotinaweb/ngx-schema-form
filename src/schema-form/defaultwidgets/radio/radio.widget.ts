import { Component } from "@angular/core";

import { ControlWidget } from "../../widget";

@Component({
  selector: "radio-widget",
  template: require("./radio.widget.html")
})
export class RadioWidget extends ControlWidget {}
