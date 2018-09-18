import { AtomicProperty } from './atomicproperty';
export declare class NumberProperty extends AtomicProperty {
    fallbackValue(): any;
    setValue(value: any, onlySelf?: boolean): void;
}
