/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export class ActionRegistry {
    constructor() {
        this.actions = {};
    }
    /**
     * @return {?}
     */
    clear() {
        this.actions = {};
    }
    /**
     * @param {?} actionId
     * @param {?} action
     * @return {?}
     */
    register(actionId, action) {
        this.actions[actionId] = action;
    }
    /**
     * @param {?} actionId
     * @return {?}
     */
    get(actionId) {
        return this.actions[actionId];
    }
}
function ActionRegistry_tsickle_Closure_declarations() {
    /** @type {?} */
    ActionRegistry.prototype.actions;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucmVnaXN0cnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vIiwic291cmNlcyI6WyJsaWIvbW9kZWwvYWN0aW9ucmVnaXN0cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE1BQU07O3VCQUMrQixFQUFFOzs7OztJQUVyQyxLQUFLO1FBQ0gsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7S0FDbkI7Ozs7OztJQUVELFFBQVEsQ0FBQyxRQUFnQixFQUFFLE1BQWM7UUFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7S0FDakM7Ozs7O0lBRUQsR0FBRyxDQUFDLFFBQWdCO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQy9CO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICcuL2FjdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBBY3Rpb25SZWdpc3RyeSB7XG4gIGFjdGlvbnM6IHtba2V5OiBzdHJpbmddOiBBY3Rpb259ID0ge307XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5hY3Rpb25zID0ge307XG4gIH1cblxuICByZWdpc3RlcihhY3Rpb25JZDogc3RyaW5nLCBhY3Rpb246IEFjdGlvbikge1xuICAgIHRoaXMuYWN0aW9uc1thY3Rpb25JZF0gPSBhY3Rpb247XG4gIH1cblxuICBnZXQoYWN0aW9uSWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmFjdGlvbnNbYWN0aW9uSWRdO1xuICB9XG59XG4iXX0=