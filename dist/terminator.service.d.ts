import { Subject } from 'rxjs/Rx';
export declare class TerminatorService {
    onDestroy: Subject<boolean>;
    constructor();
    destroy(): void;
}
