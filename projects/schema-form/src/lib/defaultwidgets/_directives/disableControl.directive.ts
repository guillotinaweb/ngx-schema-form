import { Input, Directive } from '@angular/core'
import { NgControl } from '@angular/forms';

@Directive({
    selector: '[disableControl]',
})
export class DisableControlDirective {

    @Input() set disableControl(condition: boolean | null | undefined) {
        const action = condition ? 'disable' : 'enable';
        this.ngControl.control[action]();
    }

    constructor(private ngControl: NgControl) {
    }

}