import { Action } from './action';
export declare class ActionRegistry {
    actions: {
        [key: string]: Action;
    };
    clear(): void;
    register(actionId: string, action: Action): void;
    get(actionId: string): Action;
}
