import { Validator } from './validator';
export declare class ValidatorRegistry {
    private validators;
    register(path: string, validator: Validator): void;
    get(path: string): Validator;
    clear(): void;
}
