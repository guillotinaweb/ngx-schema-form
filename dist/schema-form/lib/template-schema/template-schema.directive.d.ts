import { QueryList, AfterContentInit } from '@angular/core';
import { FormComponent } from '../form.component';
import { ActionRegistry } from '../model/actionregistry';
import { ValidatorRegistry } from '../model/validatorregistry';
import { TerminatorService } from '../terminator.service';
import { TemplateSchemaService } from './template-schema.service';
import { FieldComponent } from './field/field.component';
import { ButtonComponent } from './button/button.component';
import { FieldParent } from './field/field-parent';
export declare class TemplateSchemaDirective extends FieldParent implements AfterContentInit {
    protected actionRegistry: ActionRegistry;
    protected validatorRegistry: ValidatorRegistry;
    private formComponent;
    private terminatorService;
    private templateSchemaService;
    childFields: QueryList<FieldComponent>;
    childButtons: QueryList<ButtonComponent>;
    constructor(actionRegistry: ActionRegistry, validatorRegistry: ValidatorRegistry, formComponent: FormComponent, terminatorService: TerminatorService, templateSchemaService: TemplateSchemaService);
    setFormDocumentSchema(fields: FieldComponent[]): void;
    ngAfterContentInit(): void;
}
