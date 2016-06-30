import { bootstrap }    from "@angular/platform-browser-dynamic";
import { DemoApp } from "./app.component";
import { disableDeprecatedForms, provideForms} from "@angular/forms"
bootstrap(DemoApp,[disableDeprecatedForms(),provideForms()]);
