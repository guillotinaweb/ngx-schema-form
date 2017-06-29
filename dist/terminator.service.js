import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';
var TerminatorService = (function () {
    function TerminatorService() {
        this.onDestroy = new Subject();
    }
    TerminatorService.prototype.destroy = function () {
        this.onDestroy.next(true);
    };
    TerminatorService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    TerminatorService.ctorParameters = function () { return []; };
    return TerminatorService;
}());
export { TerminatorService };
