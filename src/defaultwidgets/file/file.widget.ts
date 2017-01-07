import { Component } from '@angular/core';

import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-file-widget',
  templateUrl: './file.widget.html'
})
export class FileWidget extends ControlWidget {

  constructor() {
    super();
  }
}
