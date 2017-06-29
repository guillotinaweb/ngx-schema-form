import { ChangeDetectorRef, EventEmitter, OnChanges, ViewContainerRef } from '@angular/core';
import { TerminatorService } from './terminator.service';
import { WidgetFactory } from './widgetfactory';
export declare class WidgetChooserComponent implements OnChanges {
    private widgetFactory;
    private cdr;
    private terminator;
    widgetInfo: any;
    widgetInstanciated: EventEmitter<any>;
    container: ViewContainerRef;
    private widgetInstance;
    private ref;
    constructor(widgetFactory: WidgetFactory, cdr: ChangeDetectorRef, terminator: TerminatorService);
    ngOnInit(): void;
    ngOnChanges(): void;
}
