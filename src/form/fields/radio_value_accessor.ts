/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 angular2-school
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * https://github.com/angular2-school/angular2-radio-button
 *
 */

import {Directive, Renderer, ElementRef, forwardRef} from '@angular/core';

import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/common';

export const RADIO_VALUE_ACCESSOR: any = /*@ts2dart_const*/ {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioControlValueAccessor),
    multi: true
};

/**
 * The accessor for writing a value and listening to changes on a radio input element.
 *
 *  ### Example
 *  ```
 *  <input type="radio" ngModel="radioModel">
 *  ```
 */
@Directive({
    selector:
        'input[type=radio][ngControl],input[type=radio][ngFormControl],input[type=radio][ngModel]',
    host: {'(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()'},
    bindings: [RADIO_VALUE_ACCESSOR]
})
export class RadioControlValueAccessor implements ControlValueAccessor {
    onChange = (_) => {};
    onTouched = () => {};

    constructor(private _renderer: Renderer, private _elementRef: ElementRef) {}

    writeValue(value: any): void {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', value == this._elementRef.nativeElement.value);
    }
    registerOnChange(fn: (_: any) => {}): void { this.onChange = fn; }
    registerOnTouched(fn: () => {}): void { this.onTouched = fn; }
}
