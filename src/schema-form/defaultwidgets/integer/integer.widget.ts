import {
  Component,
} from "@angular/core";

import { ControlWidget } from "../../widget";

@Component({
  selector: "integer-widget",
  template: require("./integer.widget.html")
})
export class IntegerWidget extends ControlWidget {}
