import { AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ArrayProperty } from './model/arrayproperty';
import { FormProperty } from './model/formproperty';
import { ObjectProperty } from './model/objectproperty';
export declare abstract class Widget<T extends FormProperty> {
    formProperty: T;
    control: FormControl;
    errorMessages: string[];
    id: string;
    name: string;
    schema: any;
}
export declare class ControlWidget extends Widget<FormProperty> implements AfterViewInit {
    ngAfterViewInit(): void;
}
export declare class ArrayLayoutWidget extends Widget<ArrayProperty> implements AfterViewInit {
    ngAfterViewInit(): void;
}
export declare class ObjectLayoutWidget extends Widget<ObjectProperty> implements AfterViewInit {
    ngAfterViewInit(): void;
}
