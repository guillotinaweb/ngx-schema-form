import {Component, ElementRef, inject, Input, OnInit} from '@angular/core';

import {TemplateSchemaElement} from '../../template-schema-element';


@Component({
  selector: 'sf-item',
  templateUrl: './item.component.html',
  standalone: false
})
export class ItemComponent extends TemplateSchemaElement implements OnInit {
  private elementRef = inject(ElementRef);


  @Input()
  value: any;

  description: string;

  constructor() {
    super();
  }

  ngOnInit() {
    this.description = this.getTextContent(this.elementRef);
  }

}
