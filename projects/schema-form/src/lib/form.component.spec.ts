import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {FormComponent} from './form.component';
import {SchemaFormModule} from './schema-form.module';
import {FieldType} from './template-schema/field/field';
import {ISchema} from './model/ISchema';

class BaseTest {
  schema: ISchema = {
    type: FieldType.Object,
    properties: {
      fieldA: {
        type: FieldType.String,
        title: 'A title',
        description: 'A description'
      }
    }
  };

  modelA: any = {};
  actions: any = {};
  validators: any = {};
}

@Component({
  selector: 'sf-test',
  template: `
    <sf-form
      [schema]="schema"
      [(model)]="modelA">
    </sf-form>
  `
})
class TestAComponent extends BaseTest {}

@Component({
  selector: 'sf-test',
  template: `
    <sf-form
      [schema]="schema"
      [(ngModel)]="modelA">
    </sf-form>
  `
})
class TestBComponent extends BaseTest {}

const schemaB: ISchema = {
  type: FieldType.Object,
  properties: {
    fieldB: {
      type: FieldType.String,
      title: 'A title',
      description: 'A description'
    },
    fieldA: {
      type: FieldType.String,
      title: 'B title',
      description: 'B description'
    }
  }
};

describe('FormComponent', () => {
  const testCases = [TestAComponent, TestBComponent];

  testCases.forEach((testComponent, index) => {
    let fixture: ComponentFixture<BaseTest>;
    let component: BaseTest;

    beforeEach(
      async(() => {
        TestBed.configureTestingModule({
          imports: [FormsModule, SchemaFormModule.forRoot()],
          declarations: [testComponent],
          providers: []
        });
      })
    );

    describe((!index ? 'Without' : 'With') + ' NgModel', () => {
      beforeEach(
        async(() => {
          TestBed.compileComponents();
          fixture = TestBed.createComponent(testComponent);
          fixture.detectChanges();

          component = fixture.componentInstance;
        })
      );


      it('should create', () => {
        const predicate = By.directive(FormComponent);
        const form = fixture.debugElement.query(predicate).componentInstance;
        expect(form).toBeTruthy();
      });

      it('should generate form with input', () => {
        const forms = fixture.debugElement.queryAll(By.css('form'));
        expect(forms.length).toBe(1);

        const inputs = forms[0].queryAll(By.css('input'));
        expect(inputs.length).toBe(1);
      });

      it('should generate new form on schema changes', () => {
        component.schema = schemaB;
        fixture.detectChanges();

        const forms = fixture.debugElement.queryAll(By.css('form'));
        expect(forms.length).toBe(1);

        const inputs = forms[0].queryAll(By.css('input'));
        expect(inputs.length).toBe(2);
      });

      // synchronous test, works for model @Input only
      if (component instanceof TestAComponent) {
        it('should populate respective input on changes to model', () => {
          component.schema = schemaB;
          fixture.detectChanges();

          const inputs = fixture.nativeElement.querySelectorAll('input');

          inputs.forEach(input => {
            expect(input.value).toBeFalsy();
          });

          component.modelA = {
            fieldA: 'A',
            fieldB: 'B'
          };
          fixture.detectChanges();

          expect(inputs[0].value).toEqual('B');
          expect(inputs[1].value).toEqual('A');
        });
      }

      it('should support 2 way data binding', () => {
        const input = fixture.debugElement.query(By.css('input')).nativeElement;

        expect(input.value).toBeFalsy();

        component.modelA = {
          fieldA: 'A'
        };

        fixture.detectChanges();

        fixture.whenStable().then(() => {
          expect(input.value).toEqual('A');

          const value = 'CHANGED';
          input.value = value;
          input.dispatchEvent(new Event('input'));

          expect(component.modelA.fieldA).toEqual(value);
        });
      });

      it('should emit onChange events on field value change', () => {
        const predicate = By.directive(FormComponent);
        const form = fixture.debugElement.query(predicate).componentInstance;
        spyOn(form.onChange, 'emit');

        const input = fixture.debugElement.query(By.css('input')).nativeElement;
        fixture.detectChanges();

        fixture.whenStable().then(() => {
          input.value = 'CHANGED';
          input.dispatchEvent(new Event('input'));

          const value = { fieldA: 'CHANGED' };
          expect(form.onChange.emit).toHaveBeenCalledWith({ value });
        });
      });
    });
  });
});
