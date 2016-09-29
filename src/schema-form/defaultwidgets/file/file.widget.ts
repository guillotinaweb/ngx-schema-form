import {
  Component,
} from "@angular/core";

import { ControlWidget } from "../../widget";

@Component({
  selector: "file-widget",
  template: require("./file.widget.html")
})
export class FileWidget extends ControlWidget {

  constructor() {
    super();
  }
}
