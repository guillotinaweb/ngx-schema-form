import { Component } from '@angular/core';

import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-range-widget',
  template: require('./range.widget.html')
})
export class RangeWidget extends ControlWidget {}
