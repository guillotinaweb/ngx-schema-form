/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormElementComponent } from './formelement.component';
import { FormComponent } from './form.component';
import { WidgetChooserComponent } from './widgetchooser.component';
import { ArrayWidget } from './defaultwidgets/array/array.widget';
import { ButtonWidget } from './defaultwidgets/button/button.widget';
import { ObjectWidget } from './defaultwidgets/object/object.widget';
import { CheckboxWidget } from './defaultwidgets/checkbox/checkbox.widget';
import { FileWidget } from './defaultwidgets/file/file.widget';
import { IntegerWidget } from './defaultwidgets/integer/integer.widget';
import { TextAreaWidget } from './defaultwidgets/textarea/textarea.widget';
import { RadioWidget } from './defaultwidgets/radio/radio.widget';
import { RangeWidget } from './defaultwidgets/range/range.widget';
import { SelectWidget } from './defaultwidgets/select/select.widget';
import { StringWidget } from './defaultwidgets/string/string.widget';
import { DefaultWidgetRegistry } from './defaultwidgets/defaultwidgetregistry';
import { DefaultWidget } from './default.widget';
import { WidgetRegistry } from './widgetregistry';
import { SchemaValidatorFactory, ZSchemaValidatorFactory } from './schemavalidatorfactory';
import { FormElementComponentAction } from './formelement.action.component';
var /** @type {?} */ moduleProviders = [
    {
        provide: WidgetRegistry,
        useClass: DefaultWidgetRegistry
    },
    {
        provide: SchemaValidatorFactory,
        useClass: ZSchemaValidatorFactory
    }
];
var SchemaFormModule = /** @class */ (function () {
    function SchemaFormModule() {
    }
    /**
     * @return {?}
     */
    SchemaFormModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: SchemaFormModule,
            providers: tslib_1.__spread(moduleProviders)
        };
    };
    SchemaFormModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, ReactiveFormsModule],
                    declarations: [
                        FormElementComponent,
                        FormElementComponentAction,
                        FormComponent,
                        WidgetChooserComponent,
                        DefaultWidget,
                        ArrayWidget,
                        ButtonWidget,
                        ObjectWidget,
                        CheckboxWidget,
                        FileWidget,
                        IntegerWidget,
                        TextAreaWidget,
                        RadioWidget,
                        RangeWidget,
                        SelectWidget,
                        StringWidget,
                    ],
                    entryComponents: [
                        FormElementComponent,
                        FormElementComponentAction,
                        FormComponent,
                        WidgetChooserComponent,
                        ArrayWidget,
                        ButtonWidget,
                        ObjectWidget,
                        CheckboxWidget,
                        FileWidget,
                        IntegerWidget,
                        TextAreaWidget,
                        RadioWidget,
                        RangeWidget,
                        SelectWidget,
                        StringWidget,
                    ],
                    exports: [
                        FormComponent,
                        FormElementComponent,
                        FormElementComponentAction,
                        WidgetChooserComponent,
                        ArrayWidget,
                        ButtonWidget,
                        ObjectWidget,
                        CheckboxWidget,
                        FileWidget,
                        IntegerWidget,
                        TextAreaWidget,
                        RadioWidget,
                        RangeWidget,
                        SelectWidget,
                        StringWidget
                    ]
                },] },
    ];
    return SchemaFormModule;
}());
export { SchemaFormModule };
function SchemaFormModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SchemaFormModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SchemaFormModule.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWZvcm0ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNjaGVtYS1mb3JtLyIsInNvdXJjZXMiOlsibGliL3NjaGVtYS1mb3JtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQXNCLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQ0wsV0FBVyxFQUNYLG1CQUFtQixFQUNwQixNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzdELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUNqRSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDaEUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQ25FLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUNuRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDekUsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQzdELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUN0RSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDekUsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ2hFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUNoRSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDbkUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQ25FLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHdDQUF3QyxDQUFDO0FBQzdFLE9BQU8sRUFDTCxhQUFhLEVBQ2QsTUFBTSxrQkFBa0IsQ0FBQztBQUUxQixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFDLHNCQUFzQixFQUFFLHVCQUF1QixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekYsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFFMUUscUJBQU0sZUFBZSxHQUFHO0lBQ3RCO1FBQ0UsT0FBTyxFQUFFLGNBQWM7UUFDdkIsUUFBUSxFQUFFLHFCQUFxQjtLQUNoQztJQUNEO1FBQ0UsT0FBTyxFQUFFLHNCQUFzQjtRQUMvQixRQUFRLEVBQUUsdUJBQXVCO0tBQ2xDO0NBQ0YsQ0FBQzs7Ozs7OztJQTJETyx3QkFBTzs7O0lBQWQ7UUFDRSxNQUFNLENBQUM7WUFDTCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFNBQVMsbUJBQU0sZUFBZSxDQUFDO1NBQ2hDLENBQUM7S0FDSDs7Z0JBOURGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixDQUFDO29CQUN6RCxZQUFZLEVBQUU7d0JBQ1osb0JBQW9CO3dCQUNwQiwwQkFBMEI7d0JBQzFCLGFBQWE7d0JBQ2Isc0JBQXNCO3dCQUN0QixhQUFhO3dCQUNiLFdBQVc7d0JBQ1gsWUFBWTt3QkFDWixZQUFZO3dCQUNaLGNBQWM7d0JBQ2QsVUFBVTt3QkFDVixhQUFhO3dCQUNiLGNBQWM7d0JBQ2QsV0FBVzt3QkFDWCxXQUFXO3dCQUNYLFlBQVk7d0JBQ1osWUFBWTtxQkFDYjtvQkFDRCxlQUFlLEVBQUU7d0JBQ2Ysb0JBQW9CO3dCQUNwQiwwQkFBMEI7d0JBQzFCLGFBQWE7d0JBQ2Isc0JBQXNCO3dCQUN0QixXQUFXO3dCQUNYLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixjQUFjO3dCQUNkLFVBQVU7d0JBQ1YsYUFBYTt3QkFDYixjQUFjO3dCQUNkLFdBQVc7d0JBQ1gsV0FBVzt3QkFDWCxZQUFZO3dCQUNaLFlBQVk7cUJBQ2I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2Isb0JBQW9CO3dCQUNwQiwwQkFBMEI7d0JBQzFCLHNCQUFzQjt3QkFDdEIsV0FBVzt3QkFDWCxZQUFZO3dCQUNaLFlBQVk7d0JBQ1osY0FBYzt3QkFDZCxVQUFVO3dCQUNWLGFBQWE7d0JBQ2IsY0FBYzt3QkFDZCxXQUFXO3dCQUNYLFdBQVc7d0JBQ1gsWUFBWTt3QkFDWixZQUFZO3FCQUNiO2lCQUNGOzsyQkEvRkQ7O1NBZ0dhLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBGb3Jtc01vZHVsZSxcbiAgUmVhY3RpdmVGb3Jtc01vZHVsZVxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7Rm9ybUVsZW1lbnRDb21wb25lbnR9IGZyb20gJy4vZm9ybWVsZW1lbnQuY29tcG9uZW50JztcbmltcG9ydCB7Rm9ybUNvbXBvbmVudH0gZnJvbSAnLi9mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQge1dpZGdldENob29zZXJDb21wb25lbnR9IGZyb20gJy4vd2lkZ2V0Y2hvb3Nlci5jb21wb25lbnQnO1xuaW1wb3J0IHtBcnJheVdpZGdldH0gZnJvbSAnLi9kZWZhdWx0d2lkZ2V0cy9hcnJheS9hcnJheS53aWRnZXQnO1xuaW1wb3J0IHtCdXR0b25XaWRnZXR9IGZyb20gJy4vZGVmYXVsdHdpZGdldHMvYnV0dG9uL2J1dHRvbi53aWRnZXQnO1xuaW1wb3J0IHtPYmplY3RXaWRnZXR9IGZyb20gJy4vZGVmYXVsdHdpZGdldHMvb2JqZWN0L29iamVjdC53aWRnZXQnO1xuaW1wb3J0IHtDaGVja2JveFdpZGdldH0gZnJvbSAnLi9kZWZhdWx0d2lkZ2V0cy9jaGVja2JveC9jaGVja2JveC53aWRnZXQnO1xuaW1wb3J0IHtGaWxlV2lkZ2V0fSBmcm9tICcuL2RlZmF1bHR3aWRnZXRzL2ZpbGUvZmlsZS53aWRnZXQnO1xuaW1wb3J0IHtJbnRlZ2VyV2lkZ2V0fSBmcm9tICcuL2RlZmF1bHR3aWRnZXRzL2ludGVnZXIvaW50ZWdlci53aWRnZXQnO1xuaW1wb3J0IHtUZXh0QXJlYVdpZGdldH0gZnJvbSAnLi9kZWZhdWx0d2lkZ2V0cy90ZXh0YXJlYS90ZXh0YXJlYS53aWRnZXQnO1xuaW1wb3J0IHtSYWRpb1dpZGdldH0gZnJvbSAnLi9kZWZhdWx0d2lkZ2V0cy9yYWRpby9yYWRpby53aWRnZXQnO1xuaW1wb3J0IHtSYW5nZVdpZGdldH0gZnJvbSAnLi9kZWZhdWx0d2lkZ2V0cy9yYW5nZS9yYW5nZS53aWRnZXQnO1xuaW1wb3J0IHtTZWxlY3RXaWRnZXR9IGZyb20gJy4vZGVmYXVsdHdpZGdldHMvc2VsZWN0L3NlbGVjdC53aWRnZXQnO1xuaW1wb3J0IHtTdHJpbmdXaWRnZXR9IGZyb20gJy4vZGVmYXVsdHdpZGdldHMvc3RyaW5nL3N0cmluZy53aWRnZXQnO1xuaW1wb3J0IHtEZWZhdWx0V2lkZ2V0UmVnaXN0cnl9IGZyb20gJy4vZGVmYXVsdHdpZGdldHMvZGVmYXVsdHdpZGdldHJlZ2lzdHJ5JztcbmltcG9ydCB7XG4gIERlZmF1bHRXaWRnZXRcbn0gZnJvbSAnLi9kZWZhdWx0LndpZGdldCc7XG5cbmltcG9ydCB7V2lkZ2V0UmVnaXN0cnl9IGZyb20gJy4vd2lkZ2V0cmVnaXN0cnknO1xuaW1wb3J0IHtTY2hlbWFWYWxpZGF0b3JGYWN0b3J5LCBaU2NoZW1hVmFsaWRhdG9yRmFjdG9yeX0gZnJvbSAnLi9zY2hlbWF2YWxpZGF0b3JmYWN0b3J5JztcbmltcG9ydCB7Rm9ybUVsZW1lbnRDb21wb25lbnRBY3Rpb259IGZyb20gJy4vZm9ybWVsZW1lbnQuYWN0aW9uLmNvbXBvbmVudCc7XG5cbmNvbnN0IG1vZHVsZVByb3ZpZGVycyA9IFtcbiAge1xuICAgIHByb3ZpZGU6IFdpZGdldFJlZ2lzdHJ5LFxuICAgIHVzZUNsYXNzOiBEZWZhdWx0V2lkZ2V0UmVnaXN0cnlcbiAgfSxcbiAge1xuICAgIHByb3ZpZGU6IFNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gICAgdXNlQ2xhc3M6IFpTY2hlbWFWYWxpZGF0b3JGYWN0b3J5XG4gIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRm9ybUVsZW1lbnRDb21wb25lbnQsXG4gICAgRm9ybUVsZW1lbnRDb21wb25lbnRBY3Rpb24sXG4gICAgRm9ybUNvbXBvbmVudCxcbiAgICBXaWRnZXRDaG9vc2VyQ29tcG9uZW50LFxuICAgIERlZmF1bHRXaWRnZXQsXG4gICAgQXJyYXlXaWRnZXQsXG4gICAgQnV0dG9uV2lkZ2V0LFxuICAgIE9iamVjdFdpZGdldCxcbiAgICBDaGVja2JveFdpZGdldCxcbiAgICBGaWxlV2lkZ2V0LFxuICAgIEludGVnZXJXaWRnZXQsXG4gICAgVGV4dEFyZWFXaWRnZXQsXG4gICAgUmFkaW9XaWRnZXQsXG4gICAgUmFuZ2VXaWRnZXQsXG4gICAgU2VsZWN0V2lkZ2V0LFxuICAgIFN0cmluZ1dpZGdldCxcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgRm9ybUVsZW1lbnRDb21wb25lbnQsXG4gICAgRm9ybUVsZW1lbnRDb21wb25lbnRBY3Rpb24sXG4gICAgRm9ybUNvbXBvbmVudCxcbiAgICBXaWRnZXRDaG9vc2VyQ29tcG9uZW50LFxuICAgIEFycmF5V2lkZ2V0LFxuICAgIEJ1dHRvbldpZGdldCxcbiAgICBPYmplY3RXaWRnZXQsXG4gICAgQ2hlY2tib3hXaWRnZXQsXG4gICAgRmlsZVdpZGdldCxcbiAgICBJbnRlZ2VyV2lkZ2V0LFxuICAgIFRleHRBcmVhV2lkZ2V0LFxuICAgIFJhZGlvV2lkZ2V0LFxuICAgIFJhbmdlV2lkZ2V0LFxuICAgIFNlbGVjdFdpZGdldCxcbiAgICBTdHJpbmdXaWRnZXQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBGb3JtQ29tcG9uZW50LFxuICAgIEZvcm1FbGVtZW50Q29tcG9uZW50LFxuICAgIEZvcm1FbGVtZW50Q29tcG9uZW50QWN0aW9uLFxuICAgIFdpZGdldENob29zZXJDb21wb25lbnQsXG4gICAgQXJyYXlXaWRnZXQsXG4gICAgQnV0dG9uV2lkZ2V0LFxuICAgIE9iamVjdFdpZGdldCxcbiAgICBDaGVja2JveFdpZGdldCxcbiAgICBGaWxlV2lkZ2V0LFxuICAgIEludGVnZXJXaWRnZXQsXG4gICAgVGV4dEFyZWFXaWRnZXQsXG4gICAgUmFkaW9XaWRnZXQsXG4gICAgUmFuZ2VXaWRnZXQsXG4gICAgU2VsZWN0V2lkZ2V0LFxuICAgIFN0cmluZ1dpZGdldFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNjaGVtYUZvcm1Nb2R1bGUge1xuXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogU2NoZW1hRm9ybU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogWy4uLm1vZHVsZVByb3ZpZGVyc11cbiAgICB9O1xuICB9XG5cbn1cbiJdfQ==