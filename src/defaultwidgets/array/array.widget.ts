import { Component } from '@angular/core';

import { ArrayLayoutWidget } from '../../widget';

@Component({
  selector: 'sf-array-widget',
  templateUrl: './array.widget.html'
})
export class ArrayWidget extends ArrayLayoutWidget {

  addItem() {
    this.formProperty.addItem();
  }

  removeItem(index: number) {
    this.formProperty.removeItem(index);
  }

  trackByIndex(index: number, item: any) {
    return index;
  }
}
