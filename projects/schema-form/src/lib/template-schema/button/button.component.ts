import {
  Component,
  AfterContentInit,
  Input,
  Output,
  ElementRef,
  EventEmitter,
  forwardRef
} from '@angular/core';

import { TemplateSchemaElement } from '../template-schema-element';


@Component({
  selector: 'sf-button',
  templateUrl: './button.component.html',
  providers: [
    {
      provide: TemplateSchemaElement,
      useExisting: forwardRef(() => ButtonComponent),
    }
  ]
})
export class ButtonComponent extends TemplateSchemaElement implements AfterContentInit {

  @Input()
  id: string;

  @Input()
  label = '';

  @Input()
  widget: string | object;

  @Output()
  click = new EventEmitter<any>();

  constructor(private elementRef: ElementRef) {
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
