import { ChangeDetectorRef, EventEmitter, OnChanges, ViewContainerRef, OnInit, OnDestroy } from '@angular/core';
import { TerminatorService } from './terminator.service';
import { WidgetFactory } from './widgetfactory';
export declare class WidgetChooserComponent implements OnInit, OnChanges, OnDestroy {
    private widgetFactory;
    private cdr;
    private terminator;
    widgetInfo: any;
    widgetInstanciated: EventEmitter<any>;
    container: ViewContainerRef;
    private widgetInstance;
    private ref;
    private subs;
    constructor(widgetFactory: WidgetFactory, cdr: ChangeDetectorRef, terminator: TerminatorService);
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
