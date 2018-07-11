import { ElementRef } from '@angular/core';

export class TemplateSchemaElement {

  getTextContent(elementRef: ElementRef): string {
    const nodes = Array.from(elementRef.nativeElement.childNodes);
    const node = <HTMLElement>nodes.filter((el: HTMLElement) => {
      return el.nodeType === el.TEXT_NODE;
    }).pop();

    if (!node || !node.nodeValue) {
      return '';
    }

    return node.nodeValue.trim();
  }

}
