import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Widget } from './widget';
import { ActionRegistry, FormProperty } from './model';
export declare class FormElementComponent implements OnInit {
    private actionRegistry;
    private static counter;
    formProperty: FormProperty;
    control: FormControl;
    widget: Widget<any>;
    buttons: any[];
    constructor(actionRegistry: ActionRegistry);
    ngOnInit(): void;
    private parseButtons();
    private createButtonCallback(button);
    onWidgetInstanciated(widget: Widget<any>): void;
}
