import {AfterContentInit, Component, ElementRef, EventEmitter, forwardRef, inject, Input, Output} from '@angular/core';

import {TemplateSchemaElement} from '../template-schema-element';


@Component({
  selector: 'sf-button',
  templateUrl: './button.component.html',
  providers: [
    {
      provide: TemplateSchemaElement,
      useExisting: forwardRef(() => ButtonComponent),
    }
  ],
  standalone: false
})
export class ButtonComponent extends TemplateSchemaElement implements AfterContentInit {
  private elementRef = inject(ElementRef);


  @Input()
  id: string;

  @Input()
  label = '';

  @Input()
  widget: string | object;

  @Output()
  click = new EventEmitter<any>();

  constructor() {
    super();
  }

  private setLabelFromContent() {
    const textContent = this.getTextContent(this.elementRef);

    // label as @Input takes priority over content text
    if (textContent && !this.label) {
      this.label = textContent;
    }

  }

  ngAfterContentInit() {
    this.setLabelFromContent();
  }

}
