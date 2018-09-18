/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
const /** @type {?} */ moduleProviders = [
    {
        provide: WidgetRegistry,
        useClass: DefaultWidgetRegistry
    },
    {
        provide: SchemaValidatorFactory,
        useClass: ZSchemaValidatorFactory
    }
];
export class SchemaFormModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: SchemaFormModule,
            providers: [...moduleProviders]
        };
    }
}
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
function SchemaFormModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SchemaFormModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SchemaFormModule.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWZvcm0ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNjaGVtYS1mb3JtLyIsInNvdXJjZXMiOlsibGliL3NjaGVtYS1mb3JtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFFBQVEsRUFBc0IsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFDTCxXQUFXLEVBQ1gsbUJBQW1CLEVBQ3BCLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDN0QsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQy9DLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUNoRSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDbkUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQ25FLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUN6RSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDN0QsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUN6RSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDaEUsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ2hFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUNuRSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDbkUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFDN0UsT0FBTyxFQUNMLGFBQWEsRUFDZCxNQUFNLGtCQUFrQixDQUFDO0FBRTFCLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUMsc0JBQXNCLEVBQUUsdUJBQXVCLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RixPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUUxRSx1QkFBTSxlQUFlLEdBQUc7SUFDdEI7UUFDRSxPQUFPLEVBQUUsY0FBYztRQUN2QixRQUFRLEVBQUUscUJBQXFCO0tBQ2hDO0lBQ0Q7UUFDRSxPQUFPLEVBQUUsc0JBQXNCO1FBQy9CLFFBQVEsRUFBRSx1QkFBdUI7S0FDbEM7Q0FDRixDQUFDO0FBeURGLE1BQU07Ozs7SUFFSixNQUFNLENBQUMsT0FBTztRQUNaLE1BQU0sQ0FBQztZQUNMLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsU0FBUyxFQUFFLENBQUMsR0FBRyxlQUFlLENBQUM7U0FDaEMsQ0FBQztLQUNIOzs7WUE5REYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsbUJBQW1CLENBQUM7Z0JBQ3pELFlBQVksRUFBRTtvQkFDWixvQkFBb0I7b0JBQ3BCLDBCQUEwQjtvQkFDMUIsYUFBYTtvQkFDYixzQkFBc0I7b0JBQ3RCLGFBQWE7b0JBQ2IsV0FBVztvQkFDWCxZQUFZO29CQUNaLFlBQVk7b0JBQ1osY0FBYztvQkFDZCxVQUFVO29CQUNWLGFBQWE7b0JBQ2IsY0FBYztvQkFDZCxXQUFXO29CQUNYLFdBQVc7b0JBQ1gsWUFBWTtvQkFDWixZQUFZO2lCQUNiO2dCQUNELGVBQWUsRUFBRTtvQkFDZixvQkFBb0I7b0JBQ3BCLDBCQUEwQjtvQkFDMUIsYUFBYTtvQkFDYixzQkFBc0I7b0JBQ3RCLFdBQVc7b0JBQ1gsWUFBWTtvQkFDWixZQUFZO29CQUNaLGNBQWM7b0JBQ2QsVUFBVTtvQkFDVixhQUFhO29CQUNiLGNBQWM7b0JBQ2QsV0FBVztvQkFDWCxXQUFXO29CQUNYLFlBQVk7b0JBQ1osWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsYUFBYTtvQkFDYixvQkFBb0I7b0JBQ3BCLDBCQUEwQjtvQkFDMUIsc0JBQXNCO29CQUN0QixXQUFXO29CQUNYLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixjQUFjO29CQUNkLFVBQVU7b0JBQ1YsYUFBYTtvQkFDYixjQUFjO29CQUNkLFdBQVc7b0JBQ1gsV0FBVztvQkFDWCxZQUFZO29CQUNaLFlBQVk7aUJBQ2I7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBGb3Jtc01vZHVsZSxcbiAgUmVhY3RpdmVGb3Jtc01vZHVsZVxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7Rm9ybUVsZW1lbnRDb21wb25lbnR9IGZyb20gJy4vZm9ybWVsZW1lbnQuY29tcG9uZW50JztcbmltcG9ydCB7Rm9ybUNvbXBvbmVudH0gZnJvbSAnLi9mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQge1dpZGdldENob29zZXJDb21wb25lbnR9IGZyb20gJy4vd2lkZ2V0Y2hvb3Nlci5jb21wb25lbnQnO1xuaW1wb3J0IHtBcnJheVdpZGdldH0gZnJvbSAnLi9kZWZhdWx0d2lkZ2V0cy9hcnJheS9hcnJheS53aWRnZXQnO1xuaW1wb3J0IHtCdXR0b25XaWRnZXR9IGZyb20gJy4vZGVmYXVsdHdpZGdldHMvYnV0dG9uL2J1dHRvbi53aWRnZXQnO1xuaW1wb3J0IHtPYmplY3RXaWRnZXR9IGZyb20gJy4vZGVmYXVsdHdpZGdldHMvb2JqZWN0L29iamVjdC53aWRnZXQnO1xuaW1wb3J0IHtDaGVja2JveFdpZGdldH0gZnJvbSAnLi9kZWZhdWx0d2lkZ2V0cy9jaGVja2JveC9jaGVja2JveC53aWRnZXQnO1xuaW1wb3J0IHtGaWxlV2lkZ2V0fSBmcm9tICcuL2RlZmF1bHR3aWRnZXRzL2ZpbGUvZmlsZS53aWRnZXQnO1xuaW1wb3J0IHtJbnRlZ2VyV2lkZ2V0fSBmcm9tICcuL2RlZmF1bHR3aWRnZXRzL2ludGVnZXIvaW50ZWdlci53aWRnZXQnO1xuaW1wb3J0IHtUZXh0QXJlYVdpZGdldH0gZnJvbSAnLi9kZWZhdWx0d2lkZ2V0cy90ZXh0YXJlYS90ZXh0YXJlYS53aWRnZXQnO1xuaW1wb3J0IHtSYWRpb1dpZGdldH0gZnJvbSAnLi9kZWZhdWx0d2lkZ2V0cy9yYWRpby9yYWRpby53aWRnZXQnO1xuaW1wb3J0IHtSYW5nZVdpZGdldH0gZnJvbSAnLi9kZWZhdWx0d2lkZ2V0cy9yYW5nZS9yYW5nZS53aWRnZXQnO1xuaW1wb3J0IHtTZWxlY3RXaWRnZXR9IGZyb20gJy4vZGVmYXVsdHdpZGdldHMvc2VsZWN0L3NlbGVjdC53aWRnZXQnO1xuaW1wb3J0IHtTdHJpbmdXaWRnZXR9IGZyb20gJy4vZGVmYXVsdHdpZGdldHMvc3RyaW5nL3N0cmluZy53aWRnZXQnO1xuaW1wb3J0IHtEZWZhdWx0V2lkZ2V0UmVnaXN0cnl9IGZyb20gJy4vZGVmYXVsdHdpZGdldHMvZGVmYXVsdHdpZGdldHJlZ2lzdHJ5JztcbmltcG9ydCB7XG4gIERlZmF1bHRXaWRnZXRcbn0gZnJvbSAnLi9kZWZhdWx0LndpZGdldCc7XG5cbmltcG9ydCB7V2lkZ2V0UmVnaXN0cnl9IGZyb20gJy4vd2lkZ2V0cmVnaXN0cnknO1xuaW1wb3J0IHtTY2hlbWFWYWxpZGF0b3JGYWN0b3J5LCBaU2NoZW1hVmFsaWRhdG9yRmFjdG9yeX0gZnJvbSAnLi9zY2hlbWF2YWxpZGF0b3JmYWN0b3J5JztcbmltcG9ydCB7Rm9ybUVsZW1lbnRDb21wb25lbnRBY3Rpb259IGZyb20gJy4vZm9ybWVsZW1lbnQuYWN0aW9uLmNvbXBvbmVudCc7XG5cbmNvbnN0IG1vZHVsZVByb3ZpZGVycyA9IFtcbiAge1xuICAgIHByb3ZpZGU6IFdpZGdldFJlZ2lzdHJ5LFxuICAgIHVzZUNsYXNzOiBEZWZhdWx0V2lkZ2V0UmVnaXN0cnlcbiAgfSxcbiAge1xuICAgIHByb3ZpZGU6IFNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gICAgdXNlQ2xhc3M6IFpTY2hlbWFWYWxpZGF0b3JGYWN0b3J5XG4gIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRm9ybUVsZW1lbnRDb21wb25lbnQsXG4gICAgRm9ybUVsZW1lbnRDb21wb25lbnRBY3Rpb24sXG4gICAgRm9ybUNvbXBvbmVudCxcbiAgICBXaWRnZXRDaG9vc2VyQ29tcG9uZW50LFxuICAgIERlZmF1bHRXaWRnZXQsXG4gICAgQXJyYXlXaWRnZXQsXG4gICAgQnV0dG9uV2lkZ2V0LFxuICAgIE9iamVjdFdpZGdldCxcbiAgICBDaGVja2JveFdpZGdldCxcbiAgICBGaWxlV2lkZ2V0LFxuICAgIEludGVnZXJXaWRnZXQsXG4gICAgVGV4dEFyZWFXaWRnZXQsXG4gICAgUmFkaW9XaWRnZXQsXG4gICAgUmFuZ2VXaWRnZXQsXG4gICAgU2VsZWN0V2lkZ2V0LFxuICAgIFN0cmluZ1dpZGdldCxcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgRm9ybUVsZW1lbnRDb21wb25lbnQsXG4gICAgRm9ybUVsZW1lbnRDb21wb25lbnRBY3Rpb24sXG4gICAgRm9ybUNvbXBvbmVudCxcbiAgICBXaWRnZXRDaG9vc2VyQ29tcG9uZW50LFxuICAgIEFycmF5V2lkZ2V0LFxuICAgIEJ1dHRvbldpZGdldCxcbiAgICBPYmplY3RXaWRnZXQsXG4gICAgQ2hlY2tib3hXaWRnZXQsXG4gICAgRmlsZVdpZGdldCxcbiAgICBJbnRlZ2VyV2lkZ2V0LFxuICAgIFRleHRBcmVhV2lkZ2V0LFxuICAgIFJhZGlvV2lkZ2V0LFxuICAgIFJhbmdlV2lkZ2V0LFxuICAgIFNlbGVjdFdpZGdldCxcbiAgICBTdHJpbmdXaWRnZXQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBGb3JtQ29tcG9uZW50LFxuICAgIEZvcm1FbGVtZW50Q29tcG9uZW50LFxuICAgIEZvcm1FbGVtZW50Q29tcG9uZW50QWN0aW9uLFxuICAgIFdpZGdldENob29zZXJDb21wb25lbnQsXG4gICAgQXJyYXlXaWRnZXQsXG4gICAgQnV0dG9uV2lkZ2V0LFxuICAgIE9iamVjdFdpZGdldCxcbiAgICBDaGVja2JveFdpZGdldCxcbiAgICBGaWxlV2lkZ2V0LFxuICAgIEludGVnZXJXaWRnZXQsXG4gICAgVGV4dEFyZWFXaWRnZXQsXG4gICAgUmFkaW9XaWRnZXQsXG4gICAgUmFuZ2VXaWRnZXQsXG4gICAgU2VsZWN0V2lkZ2V0LFxuICAgIFN0cmluZ1dpZGdldFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNjaGVtYUZvcm1Nb2R1bGUge1xuXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogU2NoZW1hRm9ybU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogWy4uLm1vZHVsZVByb3ZpZGVyc11cbiAgICB9O1xuICB9XG5cbn1cbiJdfQ==