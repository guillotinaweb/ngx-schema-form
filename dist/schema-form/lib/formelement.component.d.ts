import { ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Widget } from './widget';
import { ActionRegistry } from './model/actionregistry';
import { FormProperty } from './model/formproperty';
import { BindingRegistry } from './model/bindingregistry';
export declare class FormElementComponent implements OnInit, OnDestroy {
    private actionRegistry;
    private bindingRegistry;
    private renderer;
    private elementRef;
    private static counter;
    formProperty: FormProperty;
    control: FormControl;
    widget: Widget<any>;
    buttons: any[];
    unlisten: any[];
    constructor(actionRegistry: ActionRegistry, bindingRegistry: BindingRegistry, renderer: Renderer2, elementRef: ElementRef);
    ngOnInit(): void;
    private setupBindings();
    private createBinding(eventId, listener);
    private parseButtons();
    private createButtonCallback(button);
    onWidgetInstanciated(widget: Widget<any>): void;
    ngOnDestroy(): void;
}
