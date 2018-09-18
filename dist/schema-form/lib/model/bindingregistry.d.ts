import { Binding } from './binding';
export declare class BindingRegistry {
    bindings: Binding[];
    clear(): void;
    register(path: string, binding: Binding | Binding[]): void;
    get(path: string): Binding[];
}
