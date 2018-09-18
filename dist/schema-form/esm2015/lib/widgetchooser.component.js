/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ChangeDetectorRef, EventEmitter, Input, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { TerminatorService } from './terminator.service';
import { WidgetFactory } from './widgetfactory';
export class WidgetChooserComponent {
    /**
     * @param {?=} widgetFactory
     * @param {?=} cdr
     * @param {?=} terminator
     */
    constructor(widgetFactory = null, cdr, terminator) {
        this.widgetFactory = widgetFactory;
        this.cdr = cdr;
        this.terminator = terminator;
        this.widgetInstanciated = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.subs = this.terminator.onDestroy.subscribe(destroy => {
            if (destroy) {
                this.ref.destroy();
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.ref = this.widgetFactory.createWidget(this.container, this.widgetInfo.id);
        this.widgetInstanciated.emit(this.ref.instance);
        this.widgetInstance = this.ref.instance;
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
WidgetChooserComponent.decorators = [
    { type: Component, args: [{
                selector: 'sf-widget-chooser',
                template: `<div #target></div>`,
            },] },
];
/** @nocollapse */
WidgetChooserComponent.ctorParameters = () => [
    { type: WidgetFactory, },
    { type: ChangeDetectorRef, },
    { type: TerminatorService, },
];
WidgetChooserComponent.propDecorators = {
    "widgetInfo": [{ type: Input },],
    "widgetInstanciated": [{ type: Output },],
    "container": [{ type: ViewChild, args: ['target', { read: ViewContainerRef },] },],
};
function WidgetChooserComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    WidgetChooserComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    WidgetChooserComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    WidgetChooserComponent.propDecorators;
    /** @type {?} */
    WidgetChooserComponent.prototype.widgetInfo;
    /** @type {?} */
    WidgetChooserComponent.prototype.widgetInstanciated;
    /** @type {?} */
    WidgetChooserComponent.prototype.container;
    /** @type {?} */
    WidgetChooserComponent.prototype.widgetInstance;
    /** @type {?} */
    WidgetChooserComponent.prototype.ref;
    /** @type {?} */
    WidgetChooserComponent.prototype.subs;
    /** @type {?} */
    WidgetChooserComponent.prototype.widgetFactory;
    /** @type {?} */
    WidgetChooserComponent.prototype.cdr;
    /** @type {?} */
    WidgetChooserComponent.prototype.terminator;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0Y2hvb3Nlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vIiwic291cmNlcyI6WyJsaWIvd2lkZ2V0Y2hvb3Nlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsaUJBQWlCLEVBQ2pCLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxnQkFBZ0IsRUFHakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBUWhELE1BQU07Ozs7OztJQVlKLFlBQ1UsZ0JBQStCLElBQUksRUFDbkMsS0FDQTtRQUZBLGtCQUFhLEdBQWIsYUFBYTtRQUNiLFFBQUcsR0FBSCxHQUFHO1FBQ0gsZUFBVSxHQUFWLFVBQVU7a0NBWFcsSUFBSSxZQUFZLEVBQU87S0FZakQ7Ozs7SUFFTCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDeEQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDWixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ3BCO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7UUFDeEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUMxQjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3pCOzs7WUF2Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRSxxQkFBcUI7YUFDaEM7Ozs7WUFQUSxhQUFhO1lBWHBCLGlCQUFpQjtZQVVWLGlCQUFpQjs7OzJCQVd2QixLQUFLO21DQUVMLE1BQU07MEJBRU4sU0FBUyxTQUFDLFFBQVEsRUFBRSxFQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ29tcG9uZW50UmVmLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUZXJtaW5hdG9yU2VydmljZSB9IGZyb20gJy4vdGVybWluYXRvci5zZXJ2aWNlJztcbmltcG9ydCB7IFdpZGdldEZhY3RvcnkgfSBmcm9tICcuL3dpZGdldGZhY3RvcnknO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2Ytd2lkZ2V0LWNob29zZXInLFxuICB0ZW1wbGF0ZTogYDxkaXYgI3RhcmdldD48L2Rpdj5gLFxufSlcbmV4cG9ydCBjbGFzcyBXaWRnZXRDaG9vc2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cbiAgQElucHV0KCkgd2lkZ2V0SW5mbzogYW55O1xuXG4gIEBPdXRwdXQoKSB3aWRnZXRJbnN0YW5jaWF0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBAVmlld0NoaWxkKCd0YXJnZXQnLCB7cmVhZDogVmlld0NvbnRhaW5lclJlZn0pIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcblxuICBwcml2YXRlIHdpZGdldEluc3RhbmNlOiBhbnk7XG4gIHByaXZhdGUgcmVmOiBDb21wb25lbnRSZWY8YW55PjtcbiAgcHJpdmF0ZSBzdWJzOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB3aWRnZXRGYWN0b3J5OiBXaWRnZXRGYWN0b3J5ID0gbnVsbCxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSB0ZXJtaW5hdG9yOiBUZXJtaW5hdG9yU2VydmljZSxcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN1YnMgPSB0aGlzLnRlcm1pbmF0b3Iub25EZXN0cm95LnN1YnNjcmliZShkZXN0cm95ID0+IHtcbiAgICAgIGlmIChkZXN0cm95KSB7XG4gICAgICAgIHRoaXMucmVmLmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMucmVmID0gdGhpcy53aWRnZXRGYWN0b3J5LmNyZWF0ZVdpZGdldCh0aGlzLmNvbnRhaW5lciwgdGhpcy53aWRnZXRJbmZvLmlkKTtcbiAgICB0aGlzLndpZGdldEluc3RhbmNpYXRlZC5lbWl0KHRoaXMucmVmLmluc3RhbmNlKTtcbiAgICB0aGlzLndpZGdldEluc3RhbmNlID0gdGhpcy5yZWYuaW5zdGFuY2U7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJzLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==