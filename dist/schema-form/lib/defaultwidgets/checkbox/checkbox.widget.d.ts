import { AfterViewInit } from '@angular/core';
import { ControlWidget } from '../../widget';
export declare class CheckboxWidget extends ControlWidget implements AfterViewInit {
    checked: any;
    ngAfterViewInit(): void;
    onCheck(el: any): void;
}
