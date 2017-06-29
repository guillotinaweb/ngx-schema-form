import { Component, ChangeDetectorRef, EventEmitter, Input, Output, ViewChild, ViewContainerRef, } from '@angular/core';
import { TerminatorService } from './terminator.service';
import { WidgetFactory } from './widgetfactory';
var WidgetChooserComponent = (function () {
    function WidgetChooserComponent(widgetFactory, cdr, terminator) {
        if (widgetFactory === void 0) { widgetFactory = null; }
        this.widgetFactory = widgetFactory;
        this.cdr = cdr;
        this.terminator = terminator;
        this.widgetInstanciated = new EventEmitter();
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.terminator.onDestroy.subscribe(function (destroy) {
            if (destroy) {
                _this.ref.destroy();
            }
        });
    };
    WidgetChooserComponent.prototype.ngOnChanges = function () {
        this.ref = this.widgetFactory.createWidget(this.container, this.widgetInfo.id);
        this.widgetInstanciated.emit(this.ref.instance);
        this.widgetInstance = this.ref.instance;
        this.cdr.detectChanges();
    };
    WidgetChooserComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sf-widget-chooser',
                    template: "<div #target></div>",
                },] },
    ];
    /** @nocollapse */
    WidgetChooserComponent.ctorParameters = function () { return [
        { type: WidgetFactory, },
        { type: ChangeDetectorRef, },
        { type: TerminatorService, },
    ]; };
    WidgetChooserComponent.propDecorators = {
        'widgetInfo': [{ type: Input },],
        'widgetInstanciated': [{ type: Output },],
        'container': [{ type: ViewChild, args: ['target', { read: ViewContainerRef },] },],
    };
    return WidgetChooserComponent;
}());
export { WidgetChooserComponent };
