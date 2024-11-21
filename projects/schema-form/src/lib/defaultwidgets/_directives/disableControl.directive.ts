import { Input, Directive } from '@angular/core'
import { NgControl } from '@angular/forms';

@Directive({
    selector: '[disableControl]',
    standalone: false
})
export class DisableControlDirective {

    @Input() set disableControl(condition: boolean) {
        const action = condition ? 'disable' : 'enable';
        this.ngControl.control[action]();
    }

    constructor(private ngControl: NgControl) {
    }

}