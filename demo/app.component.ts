import {
    Component,
    Directive,
    ElementRef,
    NgZone,
    Renderer,
    ViewEncapsulation,
    ViewContainerRef
} from "@angular/core";
import {
    FormComponent,
    WidgetRegistry,
    Validator,
    DefaultWidgetRegistry
} from "../src";

@Component({
    selector: "schema-form-demo-app",
    template: require("./app.component.html"),
    styleUrls: ["demo/app.scss"],
    encapsulation: ViewEncapsulation.None,
    providers: [{provide: WidgetRegistry, useClass: DefaultWidgetRegistry}]
})
export class AppComponent {

    private schema: any;
    private model: any;
    private fieldValidators: { [fieldId: string]: Validator} = {};
    private actions = {};

    constructor(registry: WidgetRegistry) {

        this.schema = (() => {
            try {
                return require("./sampleschema.json");
            } catch (e) {
                console.log(e);
            }
        })();
        this.model = (() => {
            try {
                return require("./samplemodel.json");

            } catch (e) {
                console.log(e);
            }
        })();

        this.fieldValidators["/bornOn"] = (value, property, form) => {
            let errors = null;
            let dateArr = value.split("-");
            if (dateArr.length === 3) {
                let now = new Date();
                let min = new Date(now.getFullYear() - 100, now.getMonth(), now.getDay()).getTime();
                let max = new Date().getTime();
                let born = new Date(dateArr[0], dateArr[1] - 1, dateArr[2]).getTime();
                if (born < min || born > max ) {
                    errors = [{"bornOn": {"expectedValue": ">today - 100 && < today", "actualValue": value}}];
                }
            }
            return errors;
        };

        this.fieldValidators["/promotion"] = (value, property, form) => {
            if (value === "student") {
                let bornOn = form.getProperty("/bornOn");
                if (bornOn.valid) {
                    let date = bornOn.value.split("-");
                    let validYear = new Date().getFullYear() - 17;
                    try {
                        let actualYear = parseInt(date[0]);
                        if (actualYear < validYear) {
                            return null;
                        }
                        return [{"promotion": {"bornOn": {"expectedValue": "year<" + validYear, "actualValue": actualYear}}}];
                    } catch (e) { }
                }
                return [{"promotion": {"bornOn": {"expectedFormat": "date", "actualValue": bornOn.value}}}];
            }
            return null;
        };

        this.actions["alert"] = (property, options) => {
            alert(JSON.stringify(property.value));
        };

        this.actions["reset"] = (form, options) => {
            form.reset();
        };

        this.actions["addItem"] = (property, parameters) => {
            property.addItem(parameters.value);
        };
    }

}
