/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { ControlWidget } from '../../widget';
export class FileWidget extends ControlWidget {
    constructor() {
        super();
        this.reader = new FileReader();
        this.filedata = {};
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // OVERRIDE ControlWidget ngAfterViewInit() as ReactiveForms do not handle
        // file inputs
        const /** @type {?} */ control = this.control;
        this.formProperty.errorsChanges.subscribe((errors) => {
            control.setErrors(errors, { emitEvent: true });
        });
        this.reader.onloadend = () => {
            this.filedata.data = btoa(this.reader.result);
            this.formProperty.setValue(this.filedata, false);
        };
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onFileChange($event) {
        const /** @type {?} */ file = $event.target.files[0];
        this.filedata.filename = file.name;
        this.filedata.size = file.size;
        this.filedata['content-type'] = file.type;
        this.filedata.encoding = 'base64';
        this.reader.readAsBinaryString(file);
    }
}
FileWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-file-widget',
                template: `<div class="widget form-group">
	<label [attr.for]="id" class="horizontal control-label">
		{{ schema.title }}
	</label>
    <span *ngIf="schema.description" class="formHelp">{{schema.description}}</span>
  <input [name]="name" class="text-widget file-widget" [attr.id]="id"
    [formControl]="control" type="file" [attr.disabled]="schema.readOnly?true:null"
    (change)="onFileChange($event)">
	<input *ngIf="schema.readOnly" [attr.name]="name" type="hidden" [formControl]="control">
</div>`
            },] },
];
/** @nocollapse */
FileWidget.ctorParameters = () => [];
function FileWidget_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FileWidget.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FileWidget.ctorParameters;
    /** @type {?} */
    FileWidget.prototype.reader;
    /** @type {?} */
    FileWidget.prototype.filedata;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS53aWRnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vIiwic291cmNlcyI6WyJsaWIvZGVmYXVsdHdpZGdldHMvZmlsZS9maWxlLndpZGdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQWU3QyxNQUFNLGlCQUFrQixTQUFRLGFBQWE7SUFLM0M7UUFDRSxLQUFLLEVBQUUsQ0FBQztzQkFKUyxJQUFJLFVBQVUsRUFBRTt3QkFDVCxFQUFFO0tBSTNCOzs7O0lBRUQsZUFBZTs7O1FBR2IsdUJBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDbkQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUNoRCxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxHQUFHLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNsRCxDQUFDO0tBQ0g7Ozs7O0lBRUQsWUFBWSxDQUFDLE1BQU07UUFDakIsdUJBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDdEM7OztZQTNDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFOzs7Ozs7Ozs7T0FTTDthQUNOIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1maWxlLXdpZGdldCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIndpZGdldCBmb3JtLWdyb3VwXCI+XG5cdDxsYWJlbCBbYXR0ci5mb3JdPVwiaWRcIiBjbGFzcz1cImhvcml6b250YWwgY29udHJvbC1sYWJlbFwiPlxuXHRcdHt7IHNjaGVtYS50aXRsZSB9fVxuXHQ8L2xhYmVsPlxuICAgIDxzcGFuICpuZ0lmPVwic2NoZW1hLmRlc2NyaXB0aW9uXCIgY2xhc3M9XCJmb3JtSGVscFwiPnt7c2NoZW1hLmRlc2NyaXB0aW9ufX08L3NwYW4+XG4gIDxpbnB1dCBbbmFtZV09XCJuYW1lXCIgY2xhc3M9XCJ0ZXh0LXdpZGdldCBmaWxlLXdpZGdldFwiIFthdHRyLmlkXT1cImlkXCJcbiAgICBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiIHR5cGU9XCJmaWxlXCIgW2F0dHIuZGlzYWJsZWRdPVwic2NoZW1hLnJlYWRPbmx5P3RydWU6bnVsbFwiXG4gICAgKGNoYW5nZSk9XCJvbkZpbGVDaGFuZ2UoJGV2ZW50KVwiPlxuXHQ8aW5wdXQgKm5nSWY9XCJzY2hlbWEucmVhZE9ubHlcIiBbYXR0ci5uYW1lXT1cIm5hbWVcIiB0eXBlPVwiaGlkZGVuXCIgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIj5cbjwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgRmlsZVdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICBwcm90ZWN0ZWQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgcHJvdGVjdGVkIGZpbGVkYXRhOiBhbnkgPSB7fTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIC8vIE9WRVJSSURFIENvbnRyb2xXaWRnZXQgbmdBZnRlclZpZXdJbml0KCkgYXMgUmVhY3RpdmVGb3JtcyBkbyBub3QgaGFuZGxlXG4gICAgLy8gZmlsZSBpbnB1dHNcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5jb250cm9sO1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LmVycm9yc0NoYW5nZXMuc3Vic2NyaWJlKChlcnJvcnMpID0+IHtcbiAgICAgIGNvbnRyb2wuc2V0RXJyb3JzKGVycm9ycywgeyBlbWl0RXZlbnQ6IHRydWUgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgICB0aGlzLmZpbGVkYXRhLmRhdGEgPSBidG9hKHRoaXMucmVhZGVyLnJlc3VsdCk7XG4gICAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5zZXRWYWx1ZSh0aGlzLmZpbGVkYXRhLCBmYWxzZSk7XG4gICAgfTtcbiAgfVxuXG4gIG9uRmlsZUNoYW5nZSgkZXZlbnQpIHtcbiAgICBjb25zdCBmaWxlID0gJGV2ZW50LnRhcmdldC5maWxlc1swXTtcbiAgICB0aGlzLmZpbGVkYXRhLmZpbGVuYW1lID0gZmlsZS5uYW1lO1xuICAgIHRoaXMuZmlsZWRhdGEuc2l6ZSA9IGZpbGUuc2l6ZTtcbiAgICB0aGlzLmZpbGVkYXRhWydjb250ZW50LXR5cGUnXSA9IGZpbGUudHlwZTtcbiAgICB0aGlzLmZpbGVkYXRhLmVuY29kaW5nID0gJ2Jhc2U2NCc7XG4gICAgdGhpcy5yZWFkZXIucmVhZEFzQmluYXJ5U3RyaW5nKGZpbGUpO1xuICB9XG59XG4iXX0=