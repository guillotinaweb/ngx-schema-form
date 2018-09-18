import { OnChanges, ViewContainerRef, OnInit, OnDestroy } from "@angular/core";
import { WidgetFactory } from "./widgetfactory";
import { TerminatorService } from "./terminator.service";
export declare class FormElementComponentAction implements OnInit, OnChanges, OnDestroy {
    private widgetFactory;
    private terminator;
    button: any;
    formProperty: any;
    container: ViewContainerRef;
    private ref;
    private subs;
    constructor(widgetFactory: WidgetFactory, terminator: TerminatorService);
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
