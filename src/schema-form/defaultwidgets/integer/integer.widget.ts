import {
  Component,
} from '@angular/core';

import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-integer-widget',
  template: require('./integer.widget.html')
})
export class IntegerWidget extends ControlWidget {}
