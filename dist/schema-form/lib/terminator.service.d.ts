import { Subject } from 'rxjs';
export declare class TerminatorService {
    onDestroy: Subject<boolean>;
    constructor();
    destroy(): void;
}
