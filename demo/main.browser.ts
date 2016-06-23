import { bootstrap }    from "@angular/platform-browser-dynamic";
import { DemoApp } from "./app.component";
import { provideForms} from "@angular/forms"
bootstrap(DemoApp,[provideForms()]);
