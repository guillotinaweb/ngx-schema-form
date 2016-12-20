import { Component } from '@angular/core';

import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-textarea-widget',
  template: require('./textarea.widget.html')
})
export class TextAreaWidget extends ControlWidget {}
