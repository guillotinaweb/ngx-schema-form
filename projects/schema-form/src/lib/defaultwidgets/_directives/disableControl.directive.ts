import {Directive, inject, Input} from '@angular/core'
import {NgControl} from '@angular/forms';

@Directive({
  selector: '[disableControl]',
  standalone: false
})
export class DisableControlDirective {
  private ngControl = inject(NgControl);

  @Input() set disableControl(condition: boolean) {
    const action = condition ? 'disable' : 'enable';
    this.ngControl.control[action]();
  }
}
