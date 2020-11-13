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


describe('JsonSchemaExampleComponent - visibleIf - data-types', () => {
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
    select.value = select.options[4].value;  // <-- select a new value
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();
  });

  it(`# 1. Test boolean as boolean`, async(() => {
    // Visible component shows up if a boolean value `true` is provided

    const app = component

    fixture.whenStable().then(() => {

      fixture.detectChanges();

      // expect selected sample schema to be loaded
      expect(app.schema.properties.demo.properties.typeTest.fieldsets[0].description).toEqual('# 1. Test boolean');
      
      // expect page containing a sf-form element
      let sf_form = fixture.debugElement.query(By.css('sf-form'))
      expect(sf_form).toBeTruthy()

      
      // initial state
      let _test_boolean_check = fixture.debugElement.query(By.css('#demo\\.typeTest\\.checkbool'));
      expect(_test_boolean_check).toBeTruthy()

      let _test_boolean_visible = fixture.debugElement.query(By.css('#demo\\.typeTest\\.testbool'));
      expect(_test_boolean_visible).toBeNull()

      let _test_boolean_visible_negative = fixture.debugElement.query(By.css('#demo\\.typeTest\\.testboolnegative'));
      expect(_test_boolean_visible_negative).toBeTruthy()


      // positive state
      _test_boolean_check.nativeElement.checked = true
      _test_boolean_check.nativeElement.dispatchEvent(new Event('change'));
      fixture.detectChanges();
      
      _test_boolean_visible = fixture.debugElement.query(By.css('#demo\\.typeTest\\.testbool'));
      expect(_test_boolean_visible).toBeTruthy()

      _test_boolean_visible_negative = fixture.debugElement.query(By.css('#demo\\.typeTest\\.testboolnegative'));
      expect(_test_boolean_visible_negative).toBeNull()


      // negative state
      _test_boolean_check.nativeElement.checked = false
      _test_boolean_check.nativeElement.dispatchEvent(new Event('change'));
      fixture.detectChanges();

      _test_boolean_visible = fixture.debugElement.query(By.css('#demo\\.typeTest\\.testbool'));
      expect(_test_boolean_visible).toBeNull()

      _test_boolean_visible_negative = fixture.debugElement.query(By.css('#demo\\.typeTest\\.testboolnegative'));
      expect(_test_boolean_visible_negative).toBeTruthy()

    });

  }));

  it(`# 1. Test boolean as string`, async(() => {
    // Visible component shows up if a boolean value `"true"` as string is provided

    const app = component

    fixture.whenStable().then(() => {

      fixture.detectChanges();

      // expect selected sample schema to be loaded
      expect(app.schema.properties.demo.properties.typeTest.fieldsets[0].description).toEqual('# 1. Test boolean');

      // expect page containing a sf-form element
      let sf_form = fixture.debugElement.query(By.css('sf-form'))
      expect(sf_form).toBeTruthy()

      
      // initial state
      let _test_boolean_check_true = fixture.debugElement.query(By.css('#demo\\.typeTest\\.checkboolstring\\.true'));
      expect(_test_boolean_check_true).toBeTruthy()
      let _test_boolean_check_false = fixture.debugElement.query(By.css('#demo\\.typeTest\\.checkboolstring\\.false'));
      expect(_test_boolean_check_false).toBeTruthy()

      let _test_boolean_visible = fixture.debugElement.query(By.css('#demo\\.typeTest\\.testboolstring'));
      expect(_test_boolean_visible).toBeNull()

      // positive state
      _test_boolean_check_true.nativeElement.checked = true
      _test_boolean_check_true.nativeElement.dispatchEvent(new Event('change'));
      fixture.detectChanges();

      _test_boolean_visible = fixture.debugElement.query(By.css('#demo\\.typeTest\\.testboolstring'));
      expect(_test_boolean_visible).toBeTruthy()

      // negative state
      _test_boolean_check_false.nativeElement.checked = false
      _test_boolean_check_false.nativeElement.dispatchEvent(new Event('change'));
      fixture.detectChanges();

      _test_boolean_visible = fixture.debugElement.query(By.css('#demo\\.typeTest\\.testboolstring'));
      expect(_test_boolean_visible).toBeNull()
    });
  }));

  it(`# 2. Test number`, async(() => {
    // Visible component shows up if a number value `1` is provided

    const app = component

    fixture.whenStable().then(() => {

      fixture.detectChanges();

      // expect selected sample schema to be loaded
      expect(app.schema.properties.demo.properties.typeTest.fieldsets[1].description).toEqual('# 2. Test number');

      // expect page containing a sf-form element
      let sf_form = fixture.debugElement.query(By.css('sf-form'))
      expect(sf_form).toBeTruthy()

      
      // initial state
      let _test_number_input = fixture.debugElement.query(By.css('#demo\\.typeTest\\.checknum'));
      expect(_test_number_input).toBeTruthy()

      let _test_number_visible = fixture.debugElement.query(By.css('#demo\\.typeTest\\.testnum'));
      expect(_test_number_visible).toBeNull()

      // positive state
      _test_number_input.nativeElement.value = '1'
      _test_number_input.nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      _test_number_visible = fixture.debugElement.query(By.css('#demo\\.typeTest\\.testnum'));
      expect(_test_number_visible).toBeTruthy()

      // negative state
      _test_number_input.nativeElement.value = '2'
      _test_number_input.nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      _test_number_visible = fixture.debugElement.query(By.css('#demo\\.typeTest\\.testnum'));
      expect(_test_number_visible).toBeNull()
    });
  }));

  it(`# 2. Test number as string`, async(() => {
    // Visible component shows up if a number value `"1"` as string is provided

    const app = component

    fixture.whenStable().then(() => {

      fixture.detectChanges();

      // expect selected sample schema to be loaded
      expect(app.schema.properties.demo.properties.typeTest.fieldsets[1].description).toEqual('# 2. Test number');

      // expect page containing a sf-form element
      let sf_form = fixture.debugElement.query(By.css('sf-form'))
      expect(sf_form).toBeTruthy()

      
      // initial state
      let _test_number_select = fixture.debugElement.query(By.css('#demo\\.typeTest\\.checknumstring'));
      expect(_test_number_select).toBeTruthy()

      let _test_number_visible = fixture.debugElement.query(By.css('#demo\\.typeTest\\.testnumstring'));
      expect(_test_number_visible).toBeNull()

      // positive state
      _test_number_select.nativeElement.value = _test_number_select.nativeElement.options[1].value;  // set to '1'
      _test_number_select.nativeElement.dispatchEvent(new Event('change'));
      fixture.detectChanges();

      _test_number_visible = fixture.debugElement.query(By.css('#demo\\.typeTest\\.testnumstring'));
      expect(_test_number_visible).toBeTruthy()

      // negative state
      _test_number_select.nativeElement.value = _test_number_select.nativeElement.options[2].value;  // set to '2'
      _test_number_select.nativeElement.dispatchEvent(new Event('change'));
      fixture.detectChanges();

      _test_number_visible = fixture.debugElement.query(By.css('#demo\\.typeTest\\.testnumstring'));
      expect(_test_number_visible).toBeNull()
    });
  }));

  it(`# 3. Test string`, async(() => {
    // Visible component shows up if a string value `"a"` is provided

    const app = component

    fixture.whenStable().then(() => {

      fixture.detectChanges();

      // expect selected sample schema to be loaded
      expect(app.schema.properties.demo.properties.typeTest.fieldsets[2].description).toEqual('# 3. Test string');

      // expect page containing a sf-form element
      let sf_form = fixture.debugElement.query(By.css('sf-form'))
      expect(sf_form).toBeTruthy()

      
      // initial state
      let _test_string_input = fixture.debugElement.query(By.css('#demo\\.typeTest\\.checkstring'));
      expect(_test_string_input).toBeTruthy()

      let _test_number_visible = fixture.debugElement.query(By.css('#demo\\.typeTest\\.teststring'));
      expect(_test_number_visible).toBeNull()

      // positive state
      _test_string_input.nativeElement.value = 'a'
      _test_string_input.nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      _test_number_visible = fixture.debugElement.query(By.css('#demo\\.typeTest\\.teststring'));
      expect(_test_number_visible).toBeTruthy()

      // negative state
      _test_string_input.nativeElement.value = 'z'
      _test_string_input.nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      _test_number_visible = fixture.debugElement.query(By.css('#demo\\.typeTest\\.teststring'));
      expect(_test_number_visible).toBeNull()
    });
  }));


});


describe('JsonSchemaExampleComponent - visibleIf - condition-types', () => {
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
    select.value = select.options[4].value;  // <-- select a new value
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();
  });

  it(`# 4. Test 'VisibleIf' with default 'one-of' with multiple values`, async(() => {
    // Visible component shows up if status value is 'Warn' or 'Fail'

    fixture.whenStable().then(() => {

      fixture.detectChanges();

      // expect page containing a sf-form element
      let sf_form = fixture.debugElement.query(By.css('sf-form'))
      expect(sf_form).toBeTruthy()

      
      // initial state
      let _test_boolean_check_pass = fixture.debugElement.query(By.css('#demo\\.visibleIfBinding1a\\.status1a\\.Pass'));
      expect(_test_boolean_check_pass).toBeTruthy()
      let _test_boolean_check_warn = fixture.debugElement.query(By.css('#demo\\.visibleIfBinding1a\\.status1a\\.Warn'));
      expect(_test_boolean_check_warn).toBeTruthy()
      let _test_boolean_check_fail = fixture.debugElement.query(By.css('#demo\\.visibleIfBinding1a\\.status1a\\.Fail'));
      expect(_test_boolean_check_fail).toBeTruthy()

      let _test_boolean_visible = fixture.debugElement.query(By.css('#demo\\.visibleIfBinding1a\\.visibleComponent1a'));
      expect(_test_boolean_visible).toBeNull()

      // negative state 'Pass'
      _test_boolean_check_pass.nativeElement.checked = true
      _test_boolean_check_pass.nativeElement.dispatchEvent(new Event('change'));
      fixture.detectChanges();

      _test_boolean_visible = fixture.debugElement.query(By.css('#demo\\.visibleIfBinding1a\\.visibleComponent1a'));
      expect(_test_boolean_visible).toBeNull()

      // positive state 'Warn'
      _test_boolean_check_warn.nativeElement.checked = true
      _test_boolean_check_warn.nativeElement.dispatchEvent(new Event('change'));
      fixture.detectChanges();
      
      _test_boolean_visible = fixture.debugElement.query(By.css('#demo\\.visibleIfBinding1a\\.visibleComponent1a'));
      expect(_test_boolean_visible).toBeTruthy()

      // negative state 'Pass'
      _test_boolean_check_pass.nativeElement.checked = true
      _test_boolean_check_pass.nativeElement.dispatchEvent(new Event('change'));
      fixture.detectChanges();

      _test_boolean_visible = fixture.debugElement.query(By.css('#demo\\.visibleIfBinding1a\\.visibleComponent1a'));
      expect(_test_boolean_visible).toBeNull()

      // positive state 'Fail'
      _test_boolean_check_fail.nativeElement.checked = true
      _test_boolean_check_fail.nativeElement.dispatchEvent(new Event('change'));
      fixture.detectChanges();
      
      _test_boolean_visible = fixture.debugElement.query(By.css('#demo\\.visibleIfBinding1a\\.visibleComponent1a'));
      expect(_test_boolean_visible).toBeTruthy()

    });

  }));


  it(`# 5. Test 'VisibleIf' with 'oneOf' condition`, async(() => {
    // Visible component shows up if status value is 'Warn' or 'Fail'

    fixture.whenStable().then(() => {

      fixture.detectChanges();

      // expect page containing a sf-form element
      let sf_form = fixture.debugElement.query(By.css('sf-form'))
      expect(sf_form).toBeTruthy()

      
      // initial state
      let _test_boolean_check_pass = fixture.debugElement.query(By.css('#demo\\.visibleIfBinding1b\\.status1b\\.Pass'));
      expect(_test_boolean_check_pass).toBeTruthy()
      let _test_boolean_check_warn = fixture.debugElement.query(By.css('#demo\\.visibleIfBinding1b\\.status1b\\.Warn'));
      expect(_test_boolean_check_warn).toBeTruthy()
      let _test_boolean_check_fail = fixture.debugElement.query(By.css('#demo\\.visibleIfBinding1b\\.status1b\\.Fail'));
      expect(_test_boolean_check_fail).toBeTruthy()

      let _test_boolean_visible = fixture.debugElement.query(By.css('#demo\\.visibleIfBinding1a\\.visibleComponent1b'));
      expect(_test_boolean_visible).toBeNull()

      // negative state 'Pass'
      _test_boolean_check_pass.nativeElement.checked = true
      _test_boolean_check_pass.nativeElement.dispatchEvent(new Event('change'));
      fixture.detectChanges();

      _test_boolean_visible = fixture.debugElement.query(By.css('#demo\\.visibleIfBinding1b\\.visibleComponent1b'));
      expect(_test_boolean_visible).toBeNull()

      // positive state 'Warn'
      _test_boolean_check_warn.nativeElement.checked = true
      _test_boolean_check_warn.nativeElement.dispatchEvent(new Event('change'));
      fixture.detectChanges();
      
      _test_boolean_visible = fixture.debugElement.query(By.css('#demo\\.visibleIfBinding1b\\.visibleComponent1b'));
      expect(_test_boolean_visible).toBeTruthy()

      // negative state 'Pass'
      _test_boolean_check_pass.nativeElement.checked = true
      _test_boolean_check_pass.nativeElement.dispatchEvent(new Event('change'));
      fixture.detectChanges();

      _test_boolean_visible = fixture.debugElement.query(By.css('#demo\\.visibleIfBinding1b\\.visibleComponent1b'));
      expect(_test_boolean_visible).toBeNull()

      // positive state 'Fail'
      _test_boolean_check_fail.nativeElement.checked = true
      _test_boolean_check_fail.nativeElement.dispatchEvent(new Event('change'));
      fixture.detectChanges();
      
      _test_boolean_visible = fixture.debugElement.query(By.css('#demo\\.visibleIfBinding1b\\.visibleComponent1b'));
      expect(_test_boolean_visible).toBeTruthy()

    });

  }));

  it(`# 6. Test Boolean 'VisibleIf' with 'allOf' condition (check 'Warn' and 'Fail')`, async(() => {
    // Visible component shows up if status 'Warn' and 'Fail' are checked

    fixture.whenStable().then(() => {

      fixture.detectChanges();

      // expect page containing a sf-form element
      let sf_form = fixture.debugElement.query(By.css('sf-form'))
      expect(sf_form).toBeTruthy()

      
      // initial state
      let _test_checkbox_pass = fixture.debugElement.query(By.css('#demo\\.visibleIfBinding2a\\.status2a'));
      expect(_test_checkbox_pass).toBeTruthy()
      let _test_checkbox_warn = fixture.debugElement.query(By.css('#demo\\.visibleIfBinding2a\\.status2b'));
      expect(_test_checkbox_warn).toBeTruthy()
      let _test_checkbox_fail = fixture.debugElement.query(By.css('#demo\\.visibleIfBinding2a\\.status2c'));
      expect(_test_checkbox_fail).toBeTruthy()

      let _test_boolean_visible = fixture.debugElement.query(By.css('#demo\\.visibleIfBinding2a\\.visibleComponent2a'));
      expect(_test_boolean_visible).toBeNull()
      
      const visibleComponent = '#demo\\.visibleIfBinding2a\\.visibleComponent2a'
      const checkboxes = [
        _test_checkbox_pass,
        _test_checkbox_warn,
        _test_checkbox_fail
      ]

      let combinations = [
        //         'Pass', 'Warn', 'Fail', 'Should component show up?'
        { values: [false, false, false], visible: false, emit:false }, // the initial state
        { values: [true, false, false], visible: false, emit:false }, 
        { values: [false, true, false], visible: false, emit:false }, 
        { values: [false, false, true], visible: false, emit:false }, 
        { values: [true, true, false], visible: false, emit:false }, 
        { values: [true, true, true], visible: true, emit:false }, 
        { values: [false, true, true], visible: true, emit:false }
      ]
      combinations = combinations.concat(
        // same as above but this forces emitting the change event
        combinations.map(item => { item.emit = true; return item }))

      for (const combination of combinations) {
        for (let i = 0; i < combination.values.length; i++) {
          if (checkboxes[i].nativeElement.checked !== combination.values[i] || combination.emit) {
            checkboxes[i].nativeElement.checked = combination.values[i]
            checkboxes[i].nativeElement.dispatchEvent(new Event('change'));
          }
          fixture.detectChanges();

          const _test_boolean_visible_el = fixture.debugElement.query(By.css(visibleComponent));
          const errorOut=`Expected visibility ${combination.visible} | emits: ${combination.emit||false} | checked: pass:${combination.values[0]}/native:${checkboxes[0].nativeElement.checked}, warn:${combination.values[1]}/native:${checkboxes[1].nativeElement.checked}, fail:${combination.values[2]}/native:${checkboxes[2].nativeElement.checked}`
          if(_test_checkbox_warn.nativeElement.checked && _test_checkbox_fail.nativeElement.checked){
            expect(_test_boolean_visible_el).toBeTruthy(errorOut)
          } else {
            expect(_test_boolean_visible_el).toBeNull(errorOut)
          }
        }
      }

    });

  }));

  it(`# 7. Test String 'VisibleIf' with 'allOf' condition (select 'Warn' and 'Fail')`, async(() => {
    // Visible component shows up if status 'Warn' and 'Fail' are checked

    fixture.whenStable().then(() => {

      fixture.detectChanges();

      // expect page containing a sf-form element
      let sf_form = fixture.debugElement.query(By.css('sf-form'))
      expect(sf_form).toBeTruthy()

      
      // initial state
      let _test_select_pass = fixture.debugElement.query(By.css('#demo\\.visibleIfBinding2b\\.status2a'));
      expect(_test_select_pass).toBeTruthy()
      let _test_select_warn = fixture.debugElement.query(By.css('#demo\\.visibleIfBinding2b\\.status2b'));
      expect(_test_select_warn).toBeTruthy()
      let _test_select_fail = fixture.debugElement.query(By.css('#demo\\.visibleIfBinding2b\\.status2c'));
      expect(_test_select_fail).toBeTruthy()

      let _test_select_visible = fixture.debugElement.query(By.css('#demo\\.visibleIfBinding2b\\.visibleComponent2b'));
      expect(_test_select_visible).toBeNull()
      
      const visibleComponent = '#demo\\.visibleIfBinding2b\\.visibleComponent2b'
      const dropdowns = [
        _test_select_pass,
        _test_select_warn,
        _test_select_fail
      ]

      let combinations = [
        //         'Pass', 'Warn', 'Fail', 'Should component show up?'
        { values: ['', '', ''], visible: false, emit:false }, // the initial state

        { values: ['Pass', '', ''], visible: false, emit:false }, 
        { values: ['', 'Warn', ''], visible: false, emit:false }, 
        { values: ['', '', 'Fail'], visible: false, emit:false },
        { values: ['', 'Pass', 'Fail'], visible: true, emit:false }, 
        { values: ['Pass', 'Warn', 'Pass'], visible: true, emit:false },
        { values: ['', 'Warn', 'Fail'], visible: true, emit:false }, 
        { values: ['Pass', 'Warn', 'Fail'], visible: true, emit:false }

      ]
      combinations = combinations.concat(
        // same as above but this forces emitting the change event
        combinations.map(item => { item.emit = true; return item }))

      for (const combination of combinations) {
        for (let i = 0; i < combination.values.length; i++) {
          if (dropdowns[i].nativeElement.value !== combination.values[i] || combination.emit) {
            dropdowns[i].nativeElement.value = combination.values[i]
            dropdowns[i].nativeElement.dispatchEvent(new Event('change'));
          }
          fixture.detectChanges();

          const _test_select_visible_el = fixture.debugElement.query(By.css(visibleComponent));
          const errorOut=`Expected visibility ${combination.visible} | emits: ${combination.emit||false} | checked: pass:${combination.values[0]}/native:${dropdowns[0].nativeElement.value}, warn:${combination.values[1]}/native:${dropdowns[1].nativeElement.value}, fail:${combination.values[2]}/native:${dropdowns[2].nativeElement.value}`
          if (_test_select_warn.nativeElement.value === 'Warn' && _test_select_fail.nativeElement.value === 'Fail') {
            expect(_test_select_visible_el).toBeTruthy(errorOut)
          } else {
            expect(_test_select_visible_el).toBeNull(errorOut)
          }
        }
      }

    });

  }));

  it(`# 8. Test oneOf - Set age to 15, set last name to 'aaa'`, async(() => {
    // Visible component shows up if age is set to 15 and last name to 'aaa'

    fixture.whenStable().then(() => {

      fixture.detectChanges();

      // expect page containing a sf-form element
      let sf_form = fixture.debugElement.query(By.css('sf-form'))
      expect(sf_form).toBeTruthy()

      
      // initial state
      let _test_input_age = fixture.debugElement.query(By.css('#demo\\.updateVisibiltyTest\\.age'));
      expect(_test_input_age).toBeTruthy()
      let _test_select_lastname = fixture.debugElement.query(By.css('#demo\\.updateVisibiltyTest\\.lastName'));
      expect(_test_select_lastname).toBeTruthy()
      
      let _test_visible_component = fixture.debugElement.query(By.css('#demo\\.updateVisibiltyTest\\.firstName'));
      expect(_test_visible_component).toBeNull()

      let visibleComponent = '#demo\\.updateVisibiltyTest\\.firstName'
      let elements = [
        _test_input_age,
        _test_select_lastname
      ]
      
      let combinations = [
        //         'Pass', 'Warn', 'Fail', 'Should component show up?'
        { values: ['', ''], visible: false, emit:false }, // the initial state
        { values: [0, ''], visible: false, emit:false },
        { values: [0, 'bbb'], visible: false, emit:false },
        { values: [0, 'aaa'], visible: false, emit:false },
        { values: [15, 'aaa'], visible: true, emit:false },
        { values: [15, 'bbb'], visible: false, emit:false },
        { values: [155, 'aaa'], visible: false, emit:false },

      ]
      combinations = combinations.concat(
        // same as above but this forces emitting the change event
        combinations.map(item => { item.emit = true; return item }))

      for (const combination of combinations) {
        for (let i = 0; i < combination.values.length; i++) {
          if (elements[i].nativeElement.value !== combination.values[i] || combination.emit) {
            elements[i].nativeElement.value = combination.values[i]
            elements[i].nativeElement.dispatchEvent(new Event('change'));
          }
          fixture.detectChanges();

          const _test_select_visible_el = fixture.debugElement.query(By.css(visibleComponent));
          const errorOut=`Expected visibility ${combination.visible} | emits: ${combination.emit||false} | checked: age:${combination.values[0]}/native:${elements[0].nativeElement.value}, firstname:${combination.values[1]}/native:${elements[1].nativeElement.value}`
          if (_test_input_age.nativeElement.value === 15 && _test_select_lastname.nativeElement.value === 'aaa') {
            expect(_test_select_visible_el).toBeTruthy(errorOut)
          } else {
            expect(_test_select_visible_el).toBeNull(errorOut)
          }
        }
      }

    });

  }));

});

