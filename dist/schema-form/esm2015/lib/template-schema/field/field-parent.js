/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { TemplateSchemaElement } from '../template-schema-element';
import { FieldType } from './field';
/**
 * @abstract
 */
export class FieldParent extends TemplateSchemaElement {
    constructor() {
        super(...arguments);
        this.name = '';
    }
    /**
     * @return {?}
     */
    get path() {
        if (!this.name) {
            return '';
        }
        return '/' + this.name;
    }
    /**
     * @return {?}
     */
    getButtons() {
        return this.childButtons.map((button, index) => {
            if (!button.id) {
                const /** @type {?} */ randomString = Math.random().toString(16).substr(2, 8);
                // generate id for button
                button.id = this.name + randomString + '_' + (index + 1);
            }
            // register as button action the EventEmitter click
            this.actionRegistry.register(button.id, button.click.emit.bind(button.click));
            const /** @type {?} */ _button = /** @type {?} */ ({
                id: button.id,
                label: button.label,
            });
            if (button.widget) {
                _button.widget = button.widget;
            }
            return _button;
        });
    }
    /**
     * @param {?} fields
     * @return {?}
     */
    getFieldsValidators(fields) {
        return fields.reduce((validators, field) => {
            return validators.concat(field.getValidators());
        }, []);
    }
    /**
     * @param {?} fields
     * @return {?}
     */
    getFieldsSchema(fields) {
        return fields.reduce((schema, field) => {
            switch (this.type) {
                case FieldType.Array:
                    schema.items = field.getSchema();
                    break;
                default:
                    if (!schema.properties) {
                        schema.properties = {};
                    }
                    schema.properties[field.name] = field.getSchema();
                    break;
            }
            const /** @type {?} */ buttons = field.getButtons();
            if (buttons.length > 0) {
                schema.buttons = buttons;
            }
            if (!field.required) {
                return schema;
            }
            if (!schema.required) {
                schema.required = [];
            }
            schema.required.push(field.name);
            return schema;
        }, {});
    }
}
function FieldParent_tsickle_Closure_declarations() {
    /** @type {?} */
    FieldParent.prototype.name;
    /** @type {?} */
    FieldParent.prototype.type;
    /** @type {?} */
    FieldParent.prototype.actionRegistry;
    /** @type {?} */
    FieldParent.prototype.childButtons;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtcGFyZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNjaGVtYS1mb3JtLyIsInNvdXJjZXMiOlsibGliL3RlbXBsYXRlLXNjaGVtYS9maWVsZC9maWVsZC1wYXJlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUtBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRW5FLE9BQU8sRUFBUyxTQUFTLEVBQUUsTUFBTSxTQUFTLENBQUM7Ozs7QUFFM0MsTUFBTSxrQkFBNEIsU0FBUSxxQkFBcUI7OztvQkFFdEQsRUFBRTs7Ozs7SUFHVCxJQUFJLElBQUk7UUFDTixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2YsTUFBTSxDQUFDLEVBQUUsQ0FBQztTQUNYO1FBRUQsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0tBQ3hCOzs7O0lBTUQsVUFBVTtRQUVSLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUU3QyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNmLHVCQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7O2dCQUU3RCxNQUFNLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxHQUFHLEdBQUcsR0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQzthQUMzRDs7WUFHRCxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FDMUIsTUFBTSxDQUFDLEVBQUUsRUFDVCxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUNyQyxDQUFDO1lBRUYsdUJBQU0sT0FBTyxxQkFBUTtnQkFDbkIsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFO2dCQUNiLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSzthQUNwQixDQUFBLENBQUM7WUFFRixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDbEIsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO2FBQ2hDO1lBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUVoQixDQUFDLENBQUM7S0FDSjs7Ozs7SUFFUyxtQkFBbUIsQ0FDM0IsTUFBZTtRQUdmLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3pDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1NBQ2pELEVBQUUsRUFBRSxDQUFDLENBQUM7S0FFUjs7Ozs7SUFFUyxlQUFlLENBQUMsTUFBZTtRQUN2QyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQVcsRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUUxQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDbEIsS0FBSyxTQUFTLENBQUMsS0FBSztvQkFDbEIsTUFBTSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ2pDLEtBQUssQ0FBQztnQkFFUjtvQkFDRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUN2QixNQUFNLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztxQkFDeEI7b0JBRUQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUNsRCxLQUFLLENBQUM7YUFDVDtZQUVELHVCQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbkMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzthQUMxQjtZQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDZjtZQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO2FBQ3RCO1lBQ0QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pDLE1BQU0sQ0FBQyxNQUFNLENBQUM7U0FDZixFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBQ1I7Q0FFRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tICcuLi8uLi9tb2RlbC92YWxpZGF0b3InO1xuaW1wb3J0IHsgQWN0aW9uUmVnaXN0cnkgfSBmcm9tICcuLi8uLi9tb2RlbC9hY3Rpb25yZWdpc3RyeSc7XG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuLi9idXR0b24vYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZW1wbGF0ZVNjaGVtYUVsZW1lbnQgfSBmcm9tICcuLi90ZW1wbGF0ZS1zY2hlbWEtZWxlbWVudCc7XG5cbmltcG9ydCB7IEZpZWxkLCBGaWVsZFR5cGUgfSBmcm9tICcuL2ZpZWxkJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZpZWxkUGFyZW50IGV4dGVuZHMgVGVtcGxhdGVTY2hlbWFFbGVtZW50IHtcblxuICBuYW1lID0gJyc7XG4gIHR5cGU6IEZpZWxkVHlwZTtcblxuICBnZXQgcGF0aCgpOiBzdHJpbmcge1xuICAgIGlmICghdGhpcy5uYW1lKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuICcvJyArIHRoaXMubmFtZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBhY3Rpb25SZWdpc3RyeTogQWN0aW9uUmVnaXN0cnk7XG4gIHByb3RlY3RlZCBhYnN0cmFjdCBjaGlsZEJ1dHRvbnM6IFF1ZXJ5TGlzdDxCdXR0b25Db21wb25lbnQ+O1xuXG5cbiAgZ2V0QnV0dG9ucygpOiB7IGlkOiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcsIHdpZGdldD86IHN0cmluZyB8IG9iamVjdCB9W10ge1xuXG4gICAgcmV0dXJuIHRoaXMuY2hpbGRCdXR0b25zLm1hcCgoYnV0dG9uLCBpbmRleCkgPT4ge1xuXG4gICAgICBpZiAoIWJ1dHRvbi5pZCkge1xuICAgICAgICBjb25zdCByYW5kb21TdHJpbmcgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KS5zdWJzdHIoMiwgOCk7XG4gICAgICAgIC8vIGdlbmVyYXRlIGlkIGZvciBidXR0b25cbiAgICAgICAgYnV0dG9uLmlkID0gdGhpcy5uYW1lICsgcmFuZG9tU3RyaW5nICsgJ18nICArIChpbmRleCArIDEpO1xuICAgICAgfVxuXG4gICAgICAvLyByZWdpc3RlciBhcyBidXR0b24gYWN0aW9uIHRoZSBFdmVudEVtaXR0ZXIgY2xpY2tcbiAgICAgIHRoaXMuYWN0aW9uUmVnaXN0cnkucmVnaXN0ZXIoXG4gICAgICAgIGJ1dHRvbi5pZCxcbiAgICAgICAgYnV0dG9uLmNsaWNrLmVtaXQuYmluZChidXR0b24uY2xpY2spXG4gICAgICApO1xuXG4gICAgICBjb25zdCBfYnV0dG9uID0gPGFueT57XG4gICAgICAgIGlkOiBidXR0b24uaWQsXG4gICAgICAgIGxhYmVsOiBidXR0b24ubGFiZWwsXG4gICAgICB9O1xuXG4gICAgICBpZiAoYnV0dG9uLndpZGdldCkge1xuICAgICAgICBfYnV0dG9uLndpZGdldCA9IGJ1dHRvbi53aWRnZXQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfYnV0dG9uO1xuXG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0RmllbGRzVmFsaWRhdG9ycyhcbiAgICBmaWVsZHM6IEZpZWxkW11cbiAgKTogeyBwYXRoOiBzdHJpbmcsIHZhbGlkYXRvcjogVmFsaWRhdG9yIH1bXSB7XG5cbiAgICByZXR1cm4gZmllbGRzLnJlZHVjZSgodmFsaWRhdG9ycywgZmllbGQpID0+IHtcbiAgICAgIHJldHVybiB2YWxpZGF0b3JzLmNvbmNhdChmaWVsZC5nZXRWYWxpZGF0b3JzKCkpO1xuICAgIH0sIFtdKTtcblxuICB9XG5cbiAgcHJvdGVjdGVkIGdldEZpZWxkc1NjaGVtYShmaWVsZHM6IEZpZWxkW10pIHtcbiAgICByZXR1cm4gZmllbGRzLnJlZHVjZSgoc2NoZW1hOiBhbnksIGZpZWxkKSA9PiB7XG5cbiAgICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XG4gICAgICAgIGNhc2UgRmllbGRUeXBlLkFycmF5OlxuICAgICAgICAgIHNjaGVtYS5pdGVtcyA9IGZpZWxkLmdldFNjaGVtYSgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaWYgKCFzY2hlbWEucHJvcGVydGllcykge1xuICAgICAgICAgICAgc2NoZW1hLnByb3BlcnRpZXMgPSB7fTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzY2hlbWEucHJvcGVydGllc1tmaWVsZC5uYW1lXSA9IGZpZWxkLmdldFNjaGVtYSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBidXR0b25zID0gZmllbGQuZ2V0QnV0dG9ucygpO1xuICAgICAgaWYgKGJ1dHRvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICBzY2hlbWEuYnV0dG9ucyA9IGJ1dHRvbnM7XG4gICAgICB9XG5cbiAgICAgIGlmICghZmllbGQucmVxdWlyZWQpIHtcbiAgICAgICAgcmV0dXJuIHNjaGVtYTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFzY2hlbWEucmVxdWlyZWQpIHtcbiAgICAgICAgc2NoZW1hLnJlcXVpcmVkID0gW107XG4gICAgICB9XG4gICAgICBzY2hlbWEucmVxdWlyZWQucHVzaChmaWVsZC5uYW1lKTtcbiAgICAgIHJldHVybiBzY2hlbWE7XG4gICAgfSwge30pO1xuICB9XG5cbn1cbiJdfQ==