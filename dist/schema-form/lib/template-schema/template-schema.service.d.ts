import { EventEmitter } from '@angular/core';
export declare class TemplateSchemaService {
    changes: EventEmitter<{}>;
    constructor();
    changed(): void;
}
