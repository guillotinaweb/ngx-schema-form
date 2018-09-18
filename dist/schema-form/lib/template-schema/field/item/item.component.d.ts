import { ElementRef, OnInit } from '@angular/core';
import { TemplateSchemaElement } from '../../template-schema-element';
export declare class ItemComponent extends TemplateSchemaElement implements OnInit {
    private elementRef;
    value: any;
    description: string;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
}
