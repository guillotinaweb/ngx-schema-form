var ActionRegistry = (function () {
    function ActionRegistry() {
        this.actions = {};
    }
    ActionRegistry.prototype.clear = function () {
        this.actions = {};
    };
    ActionRegistry.prototype.register = function (actionId, action) {
        this.actions[actionId] = action;
    };
    ActionRegistry.prototype.get = function (actionId) {
        return this.actions[actionId];
    };
    return ActionRegistry;
}());
export { ActionRegistry };
