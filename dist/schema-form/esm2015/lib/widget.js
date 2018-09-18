/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// unsupported: template constraints.
/**
 * @abstract
 * @template T
 */
export class Widget {
    constructor() {
        this.id = '';
        this.name = '';
        this.schema = {};
    }
}
function Widget_tsickle_Closure_declarations() {
    /** @type {?} */
    Widget.prototype.formProperty;
    /** @type {?} */
    Widget.prototype.control;
    /** @type {?} */
    Widget.prototype.errorMessages;
    /** @type {?} */
    Widget.prototype.id;
    /** @type {?} */
    Widget.prototype.name;
    /** @type {?} */
    Widget.prototype.schema;
}
export class ControlWidget extends Widget {
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        const /** @type {?} */ control = this.control;
        this.formProperty.valueChanges.subscribe((newValue) => {
            if (control.value !== newValue) {
                control.setValue(newValue, { emitEvent: false });
            }
        });
        this.formProperty.errorsChanges.subscribe((errors) => {
            control.setErrors(errors, { emitEvent: true });
            const /** @type {?} */ messages = (errors || [])
                .filter(e => {
                return e.path && e.path.slice(1) === this.formProperty.path;
            })
                .map(e => e.message);
            this.errorMessages = messages.filter((m, i) => messages.indexOf(m) === i);
        });
        control.valueChanges.subscribe((newValue) => {
            this.formProperty.setValue(newValue, false);
        });
    }
}
export class ArrayLayoutWidget extends Widget {
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        const /** @type {?} */ control = this.control;
        this.formProperty.errorsChanges.subscribe((errors) => {
            control.setErrors(errors, { emitEvent: true });
        });
    }
}
export class ObjectLayoutWidget extends Widget {
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        const /** @type {?} */ control = this.control;
        this.formProperty.errorsChanges.subscribe((errors) => {
            control.setErrors(errors, { emitEvent: true });
        });
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNjaGVtYS1mb3JtLyIsInNvdXJjZXMiOlsibGliL3dpZGdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFPQSxNQUFNOztrQkFLUyxFQUFFO29CQUNBLEVBQUU7c0JBQ0gsRUFBRTs7Q0FDakI7Ozs7Ozs7Ozs7Ozs7OztBQUVELE1BQU0sb0JBQXFCLFNBQVEsTUFBb0I7Ozs7SUFFckQsZUFBZTtRQUNiLHVCQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ3BELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDL0IsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQzthQUNoRDtTQUNGLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ25ELE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7WUFDL0MsdUJBQU0sUUFBUSxHQUFHLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQztpQkFDNUIsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNWLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO2FBQzdELENBQUM7aUJBQ0QsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDM0UsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUMxQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDN0MsQ0FBQyxDQUFDO0tBQ0o7Q0FFRjtBQUVELE1BQU0sd0JBQXlCLFNBQVEsTUFBcUI7Ozs7SUFFMUQsZUFBZTtRQUNiLHVCQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ25ELE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEVBQUMsU0FBUyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7U0FDOUMsQ0FBQyxDQUFDO0tBQ0o7Q0FDRjtBQUVELE1BQU0seUJBQTBCLFNBQVEsTUFBc0I7Ozs7SUFFNUQsZUFBZTtRQUNiLHVCQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ25ELE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEVBQUMsU0FBUyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7U0FDOUMsQ0FBQyxDQUFDO0tBQ0o7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7QXJyYXlQcm9wZXJ0eX0gZnJvbSAnLi9tb2RlbC9hcnJheXByb3BlcnR5JztcbmltcG9ydCB7Rm9ybVByb3BlcnR5fSBmcm9tICcuL21vZGVsL2Zvcm1wcm9wZXJ0eSc7XG5pbXBvcnQge09iamVjdFByb3BlcnR5fSBmcm9tICcuL21vZGVsL29iamVjdHByb3BlcnR5JztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFdpZGdldDxUIGV4dGVuZHMgRm9ybVByb3BlcnR5PiB7XG4gIGZvcm1Qcm9wZXJ0eTogVDtcbiAgY29udHJvbDogRm9ybUNvbnRyb2w7XG4gIGVycm9yTWVzc2FnZXM6IHN0cmluZ1tdO1xuXG4gIGlkOiBzdHJpbmcgPSAnJztcbiAgbmFtZTogc3RyaW5nID0gJyc7XG4gIHNjaGVtYTogYW55ID0ge307XG59XG5cbmV4cG9ydCBjbGFzcyBDb250cm9sV2lkZ2V0IGV4dGVuZHMgV2lkZ2V0PEZvcm1Qcm9wZXJ0eT4gaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuY29udHJvbDtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKChuZXdWYWx1ZSkgPT4ge1xuICAgICAgaWYgKGNvbnRyb2wudmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgIGNvbnRyb2wuc2V0VmFsdWUobmV3VmFsdWUsIHtlbWl0RXZlbnQ6IGZhbHNlfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkuZXJyb3JzQ2hhbmdlcy5zdWJzY3JpYmUoKGVycm9ycykgPT4ge1xuICAgICAgY29udHJvbC5zZXRFcnJvcnMoZXJyb3JzLCB7IGVtaXRFdmVudDogdHJ1ZSB9KTtcbiAgICAgIGNvbnN0IG1lc3NhZ2VzID0gKGVycm9ycyB8fCBbXSlcbiAgICAgICAgLmZpbHRlcihlID0+IHtcbiAgICAgICAgICByZXR1cm4gZS5wYXRoICYmIGUucGF0aC5zbGljZSgxKSA9PT0gdGhpcy5mb3JtUHJvcGVydHkucGF0aDtcbiAgICAgICAgfSlcbiAgICAgICAgLm1hcChlID0+IGUubWVzc2FnZSk7XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZXMgPSBtZXNzYWdlcy5maWx0ZXIoKG0sIGkpID0+IG1lc3NhZ2VzLmluZGV4T2YobSkgPT09IGkpO1xuICAgIH0pO1xuICAgIGNvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgobmV3VmFsdWUpID0+IHtcbiAgICAgIHRoaXMuZm9ybVByb3BlcnR5LnNldFZhbHVlKG5ld1ZhbHVlLCBmYWxzZSk7XG4gICAgfSk7XG4gIH1cblxufVxuXG5leHBvcnQgY2xhc3MgQXJyYXlMYXlvdXRXaWRnZXQgZXh0ZW5kcyBXaWRnZXQ8QXJyYXlQcm9wZXJ0eT4gaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuY29udHJvbDtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5lcnJvcnNDaGFuZ2VzLnN1YnNjcmliZSgoZXJyb3JzKSA9PiB7XG4gICAgICBjb250cm9sLnNldEVycm9ycyhlcnJvcnMsIHtlbWl0RXZlbnQ6IHRydWV9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgT2JqZWN0TGF5b3V0V2lkZ2V0IGV4dGVuZHMgV2lkZ2V0PE9iamVjdFByb3BlcnR5PiBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5jb250cm9sO1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LmVycm9yc0NoYW5nZXMuc3Vic2NyaWJlKChlcnJvcnMpID0+IHtcbiAgICAgIGNvbnRyb2wuc2V0RXJyb3JzKGVycm9ycywge2VtaXRFdmVudDogdHJ1ZX0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=