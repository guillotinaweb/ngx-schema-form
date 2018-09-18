import { AfterContentInit, QueryList, ElementRef, SimpleChanges, OnChanges } from '@angular/core';
import { ActionRegistry } from '../../model/actionregistry';
import { Validator } from '../../model/validator';
import { TemplateSchemaService } from '../template-schema.service';
import { ButtonComponent } from '../button/button.component';
import { FieldParent } from './field-parent';
import { FieldType, Field } from './field';
import { ItemComponent } from './item/item.component';
export declare class FieldComponent extends FieldParent implements Field, OnChanges, AfterContentInit {
    private elementRef;
    private templateSchemaService;
    protected actionRegistry: ActionRegistry;
    childFields: QueryList<FieldComponent>;
    childItems: QueryList<ItemComponent>;
    childButtons: QueryList<ButtonComponent>;
    name: string;
    type: FieldType;
    format: string;
    required: boolean;
    readOnly: boolean;
    title: string;
    description: string;
    placeholder: string;
    widget: string | object;
    validator: Validator;
    schema: any;
    constructor(elementRef: ElementRef, templateSchemaService: TemplateSchemaService, actionRegistry: ActionRegistry);
    getSchema(): any;
    getValidators(): {
        path: string;
        validator: Validator;
    }[];
    ngOnChanges(changes: SimpleChanges): void;
    private getOneOf();
    private setTitleFromContent();
    ngAfterContentInit(): void;
}
