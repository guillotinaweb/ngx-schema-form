/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ActionRegistry = /** @class */ (function () {
    function ActionRegistry() {
        this.actions = {};
    }
    /**
     * @return {?}
     */
    ActionRegistry.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.actions = {};
    };
    /**
     * @param {?} actionId
     * @param {?} action
     * @return {?}
     */
    ActionRegistry.prototype.register = /**
     * @param {?} actionId
     * @param {?} action
     * @return {?}
     */
    function (actionId, action) {
        this.actions[actionId] = action;
    };
    /**
     * @param {?} actionId
     * @return {?}
     */
    ActionRegistry.prototype.get = /**
     * @param {?} actionId
     * @return {?}
     */
    function (actionId) {
        return this.actions[actionId];
    };
    return ActionRegistry;
}());
export { ActionRegistry };
function ActionRegistry_tsickle_Closure_declarations() {
    /** @type {?} */
    ActionRegistry.prototype.actions;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucmVnaXN0cnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vIiwic291cmNlcyI6WyJsaWIvbW9kZWwvYWN0aW9ucmVnaXN0cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLElBQUE7O3VCQUNxQyxFQUFFOzs7OztJQUVyQyw4QkFBSzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztLQUNuQjs7Ozs7O0lBRUQsaUNBQVE7Ozs7O0lBQVIsVUFBUyxRQUFnQixFQUFFLE1BQWM7UUFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7S0FDakM7Ozs7O0lBRUQsNEJBQUc7Ozs7SUFBSCxVQUFJLFFBQWdCO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQy9CO3lCQWZIO0lBZ0JDLENBQUE7QUFkRCwwQkFjQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJy4vYWN0aW9uJztcblxuZXhwb3J0IGNsYXNzIEFjdGlvblJlZ2lzdHJ5IHtcbiAgYWN0aW9uczoge1trZXk6IHN0cmluZ106IEFjdGlvbn0gPSB7fTtcblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmFjdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHJlZ2lzdGVyKGFjdGlvbklkOiBzdHJpbmcsIGFjdGlvbjogQWN0aW9uKSB7XG4gICAgdGhpcy5hY3Rpb25zW2FjdGlvbklkXSA9IGFjdGlvbjtcbiAgfVxuXG4gIGdldChhY3Rpb25JZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aW9uc1thY3Rpb25JZF07XG4gIH1cbn1cbiJdfQ==