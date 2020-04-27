import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  SchemaFormModule,
  SchemaValidatorFactory,
  ZSchemaValidatorFactory,
  TemplateSchemaModule,
  WidgetRegistry,
  DefaultWidgetRegistry
} from '../../../projects/schema-form/src/public_api';

import {
  TemplateSchemaExampleComponent
} from './template-schema-example.component';

describe('TemplateSchemaExampleComponent', () => {
  let component: TemplateSchemaExampleComponent;
  let fixture: ComponentFixture<TemplateSchemaExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SchemaFormModule,
        TemplateSchemaModule,
        HttpClientModule,
        FormsModule
      ],
      declarations: [ TemplateSchemaExampleComponent ],
      providers: [
        {provide: WidgetRegistry, useClass: DefaultWidgetRegistry},
        {
          provide: SchemaValidatorFactory,
          useClass: ZSchemaValidatorFactory
        }
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateSchemaExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
