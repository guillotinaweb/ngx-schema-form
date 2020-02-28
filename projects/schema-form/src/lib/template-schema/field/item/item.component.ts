import {
 Component,
 ElementRef,
 Input,
 OnInit,
} from '@angular/core';

import { TemplateSchemaElement } from '../../template-schema-element';


@Component({
  selector: 'sf-item',
  templateUrl: './item.component.html'
})
export class ItemComponent extends TemplateSchemaElement implements OnInit {

  @Input()
  value: any;

  description: string;

  constructor(private elementRef: ElementRef) {
    super();
  }

  ngOnInit() {
    this.description = this.getTextContent(this.elementRef);
  }

}
