/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
var TerminatorService = /** @class */ (function () {
    function TerminatorService() {
        this.onDestroy = new Subject();
    }
    /**
     * @return {?}
     */
    TerminatorService.prototype.destroy = /**
     * @return {?}
     */
    function () {
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
function TerminatorService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TerminatorService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TerminatorService.ctorParameters;
    /** @type {?} */
    TerminatorService.prototype.onDestroy;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVybWluYXRvci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNjaGVtYS1mb3JtLyIsInNvdXJjZXMiOlsibGliL3Rlcm1pbmF0b3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQU03QjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztLQUNoQzs7OztJQUVELG1DQUFPOzs7SUFBUDtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzNCOztnQkFWRixVQUFVOzs7OzRCQUhYOztTQUlhLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRlcm1pbmF0b3JTZXJ2aWNlIHtcbiAgcHVibGljIG9uRGVzdHJveTogU3ViamVjdDxib29sZWFuPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm9uRGVzdHJveSA9IG5ldyBTdWJqZWN0KCk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMub25EZXN0cm95Lm5leHQodHJ1ZSk7XG4gIH1cbn1cbiJdfQ==