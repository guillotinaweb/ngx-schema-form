import { AfterContentInit, ElementRef, EventEmitter } from '@angular/core';
import { TemplateSchemaElement } from '../template-schema-element';
export declare class ButtonComponent extends TemplateSchemaElement implements AfterContentInit {
    private elementRef;
    id: string;
    label: string;
    widget: string | object;
    click: EventEmitter<any>;
    constructor(elementRef: ElementRef);
    private setLabelFromContent();
    ngAfterContentInit(): void;
}
