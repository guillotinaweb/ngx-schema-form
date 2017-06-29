import { AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ArrayProperty, FormProperty, ObjectProperty } from './model';
export declare abstract class Widget<T extends FormProperty> {
    formProperty: T;
    control: FormControl;
    id: string;
    name: string;
    schema: any;
}
export declare class ControlWidget extends Widget<FormProperty> implements AfterViewInit {
    ngAfterViewInit(): void;
}
export declare class ArrayLayoutWidget extends Widget<ArrayProperty> {
}
export declare class ObjectLayoutWidget extends Widget<ObjectProperty> {
}
