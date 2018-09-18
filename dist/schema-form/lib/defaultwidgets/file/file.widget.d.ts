import { AfterViewInit } from '@angular/core';
import { ControlWidget } from '../../widget';
export declare class FileWidget extends ControlWidget implements AfterViewInit {
    protected reader: FileReader;
    protected filedata: any;
    constructor();
    ngAfterViewInit(): void;
    onFileChange($event: any): void;
}
