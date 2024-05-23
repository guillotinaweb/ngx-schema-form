import { waitForAsync, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from "@angular/common/http";
import {
  SchemaFormModule,
  SchemaValidatorFactory,
  ZSchemaValidatorFactory,
  TemplateSchemaModule,
  WidgetRegistry,
  DefaultWidgetRegistry,
} from "../../../projects/schema-form/src/public_api";

import { TemplateSchemaExampleComponent } from "./template-schema-example.component";

describe("TemplateSchemaExampleComponent", () => {
  let component: TemplateSchemaExampleComponent;
  let fixture: ComponentFixture<TemplateSchemaExampleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateSchemaExampleComponent],
      imports: [SchemaFormModule.forRoot(), TemplateSchemaModule, FormsModule],
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
    fixture = TestBed.createComponent(TemplateSchemaExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
