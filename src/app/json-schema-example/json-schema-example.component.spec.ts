import { waitForAsync, ComponentFixture, TestBed } from "@angular/core/testing";
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from "@angular/common/http";
import {
  SchemaFormModule,
  SchemaValidatorFactory,
  ZSchemaValidatorFactory,
  WidgetRegistry,
  DefaultWidgetRegistry,
} from "../../../projects/schema-form/src/public_api";

import { JsonSchemaExampleComponent } from "./json-schema-example.component";

describe("JsonSchemaExampleComponent", () => {
  let component: JsonSchemaExampleComponent;
  let fixture: ComponentFixture<JsonSchemaExampleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [JsonSchemaExampleComponent],
      imports: [SchemaFormModule.forRoot()],
      providers: [
        { provide: WidgetRegistry, useClass: DefaultWidgetRegistry },
        {
          provide: SchemaValidatorFactory,
          useClass: ZSchemaValidatorFactory,
        },
        provideHttpClient(withInterceptorsFromDi()),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonSchemaExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
