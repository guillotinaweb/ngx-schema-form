// - - - - - - - - - - - - - - - - - - 
// Running only this test is possible on Angular9 with:
// ng test --include='**/json-schema-example/*.visibleIf.spec.ts' --watch=true`
// - - - - - - - - - - - - - - - - - - 

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {
  SchemaFormModule,
  SchemaValidatorFactory,
  ZSchemaValidatorFactory,
  WidgetRegistry,
  DefaultWidgetRegistry
} from '../../../projects/schema-form/src/public_api';


import { JsonSchemaExampleComponent } from './json-schema-example.component';
import { By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('JsonSchemaExampleComponent', () => {
  let component: JsonSchemaExampleComponent;
  let fixture: ComponentFixture<JsonSchemaExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SchemaFormModule.forRoot(),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ JsonSchemaExampleComponent ],
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
    fixture = TestBed.createComponent(JsonSchemaExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


describe('JsonSchemaExampleComponent - canonical-path', () => {
  let component: JsonSchemaExampleComponent;
  let fixture: ComponentFixture<JsonSchemaExampleComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SchemaFormModule.forRoot(),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ JsonSchemaExampleComponent ],
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
    fixture = TestBed.createComponent(JsonSchemaExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
/*
  it('should create', () => {
    expect(component).toBeTruthy();
  });
*/
  beforeEach(() => {

    // select demo sample
    const select: HTMLSelectElement = fixture.debugElement.query(By.css('#samples')).nativeElement;
    select.value = select.options[5].value;  // <-- select a new value
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();
  });

  it(`# 1. Test canonical path`, async(() => {
    // Visible component shows up if a boolean value `true` is provided

    const app = component

    fixture.whenStable().then(() => {

      fixture.detectChanges();

      // expect selected sample schema to be loaded
      expect(app.schema.properties.form.title).toEqual('Test canonical path');
      
      // expect page containing a sf-form element
      let sf_form = fixture.debugElement.query(By.css('sf-form'))
      expect(sf_form).toBeTruthy()

      // check for button to exist
      let _test_add_item_button = fixture.debugElement.query(By.css('.array-add-button'));
      expect(_test_add_item_button).toBeTruthy()
      
      // add item no 1
      _test_add_item_button.triggerEventHandler('click', null);
      fixture.detectChanges();

      // check label 1 exists
      let _test_label_checkbox1 = fixture.debugElement.query(By.css('[for=form\\.0\\.prop1\\.subProp1]'));
      expect(_test_label_checkbox1).toBeTruthy()

      // check checkbox 1 exists
      let _test_boolean_checkbox1 = fixture.debugElement.query(By.css('#form\\.0\\.prop1\\.subProp1'));
      expect(_test_boolean_checkbox1).toBeTruthy()

      // check label click checks checkbox
      _test_boolean_checkbox1.nativeElement.checked = false
      fixture.detectChanges();
      _test_label_checkbox1.nativeElement.click()
      fixture.detectChanges();
      expect(_test_boolean_checkbox1.nativeElement.checked).toBeTruthy()

      // add item no 2
      _test_add_item_button.triggerEventHandler('click', null);
      fixture.detectChanges();
      
      // check label 1 still exists
      _test_label_checkbox1 = fixture.debugElement.query(By.css('[for=form\\.0\\.prop1\\.subProp1]'));
      expect(_test_label_checkbox1).toBeTruthy()

      // check checkbox 1 still exists
      _test_boolean_checkbox1 = fixture.debugElement.query(By.css('#form\\.0\\.prop1\\.subProp1'));
      expect(_test_boolean_checkbox1).toBeTruthy()

      // check label 2 exists
      let _test_label_checkbox2 = fixture.debugElement.query(By.css('[for=form\\.1\\.prop1\\.subProp1]'));
      expect(_test_label_checkbox2).toBeTruthy()

      // check checkbox 2 exists
      let _test_boolean_checkbox2 = fixture.debugElement.query(By.css('#form\\.1\\.prop1\\.subProp1'));
      expect(_test_boolean_checkbox2).toBeTruthy()


      // check label click checks checkbox
      _test_boolean_checkbox1.nativeElement.checked = false
      fixture.detectChanges()
      _test_label_checkbox1.nativeElement.click()
      fixture.detectChanges()
      expect(_test_boolean_checkbox1.nativeElement.checked).toBeTruthy()

      // check label click checks checkbox
      _test_boolean_checkbox2.nativeElement.checked = false
      fixture.detectChanges()
      _test_label_checkbox2.nativeElement.click()
      fixture.detectChanges()
      expect(_test_boolean_checkbox2.nativeElement.checked).toBeTruthy()

    });

  }));



});

