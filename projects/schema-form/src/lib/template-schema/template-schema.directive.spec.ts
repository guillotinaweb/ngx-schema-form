import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { take } from 'rxjs/operators';

import { FormComponent } from '../form.component';
import { SchemaFormModule } from '../schema-form.module';
import { TemplateSchemaModule } from './template-schema.module';
import { TemplateSchemaDirective } from './template-schema.directive';


@Component({
  selector: 'sf-test',
  template: `
    <sf-form templateSchema [(ngModel)]="model" >
      <sf-field
          name="username"
          [type]="type"
          [required]="usernameRequired"
          [validator]="validatorA"
          description="A username field">
          Username
      </sf-field>
      <sf-field name="credentials" type="object">
          Credentials
          <sf-field
              name="password"
              widget="password"
              [required]="true"
              description="A password field">
              Password
          </sf-field>
          <sf-field
              *ngIf="register"
              name="passwordConfirm"
              widget="password"
              [required]="true">
              Confirm Password
          </sf-field>
      </sf-field>
      <sf-button (click)="onClickA($event)">Send</sf-button>
      <sf-button (click)="onClickB($event)">Cancel</sf-button>
    </sf-form>
  `
})
class TestComponent {
  model: any = {};

  type = 'string';
  register = false;

  onClickA(event: any) { }
  onClickB(event: any) { }

  validatorA(value, property, form): any {
    return null;
  }

}

function getTestComponentFixture(
  template?: string
): ComponentFixture<TestComponent> {

  if (template) {
    TestBed.overrideTemplate(TestComponent, template);
  }
  TestBed.compileComponents();
  const fixture = TestBed.createComponent(TestComponent);
  fixture.detectChanges();

  return fixture;
}

describe('TemplateSchemaDirective', () => {

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          FormsModule,
          SchemaFormModule.forRoot(),
          TemplateSchemaModule
        ],
        declarations: [TestComponent],
        providers: []
      });
    })
  );

  it('should create FormComponent and TemplateSchemaDirective', () => {
    const fixture = getTestComponentFixture();
    const directive = fixture.debugElement.query(
      By.directive(TemplateSchemaDirective)
    ).componentInstance;
    const component = fixture.debugElement.query(
      By.directive(FormComponent)
    ).componentInstance;
    
    expect(directive).toBeTruthy();
    expect(component).toBeTruthy();
  });

  it('should support 2 way data binding', () => {
    const fixture = getTestComponentFixture();
    const component = fixture.componentInstance;
    // first input
    const input = fixture.debugElement.query(By.css('input')).nativeElement;

    expect(input.value).toBeFalsy();

    component.model = {
      username: 'A'
    };

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(input.value).toEqual('A');

      const value = 'CHANGED';
      input.value = value;
      input.dispatchEvent(new Event('input'));

      expect(component.model.username).toEqual(value);
    });
  });

  it('should generate new form on template changes ', () => {
    const fixture = getTestComponentFixture();
    const component = fixture.componentInstance;

    let inputs = fixture.debugElement.queryAll(By.css('input'));
    expect(inputs.length).toBe(2);

    component.register = true;
    fixture.detectChanges()

    inputs = fixture.debugElement.queryAll(By.css('input'));
    expect(inputs.length).toBe(3);

  });

  it('should generate new form on field @Input changes ', () => {
    const fixture = getTestComponentFixture();
    const component = fixture.componentInstance;

    let input = fixture.debugElement.query(By.css('input'));
    expect(input.nativeElement.type).toBe('text');

    component.type = 'number';
    fixture.detectChanges()

    input = fixture.debugElement.query(By.css('input'));
    expect(input.nativeElement.type).toBe('number');

  });

  it('should generate new form on template changes and keep model data', () => {
    const fixture = getTestComponentFixture();
    const component = fixture.componentInstance;

    let inputs = fixture.debugElement.queryAll(By.css('input'));
    expect(inputs.length).toBe(2);
    inputs.forEach((debugElement) => {
      expect(debugElement.nativeElement.value).toBeFalsy();
    });

    const valueA = 'A';
    component.model = {
      username: valueA
    };

    component.register = true;
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      inputs = fixture.debugElement.queryAll(By.css('input'));

      expect(inputs[0].nativeElement.value).toEqual(valueA);
      expect(component.model.username).toEqual(valueA);
      expect(inputs.length).toBe(3);

      const valueB = 'CHANGED';
      inputs[0].nativeElement.value = valueB;
      inputs[0].nativeElement.dispatchEvent(new Event('input'));

      expect(component.model.username).toEqual(valueB);
    });

  });

  it('should bind button click event to its respective handler', () => {
    const fixture = getTestComponentFixture();
    const component = fixture.componentInstance;

    spyOn(component, 'onClickA');
    spyOn(component, 'onClickB');

    const buttons = fixture.debugElement.queryAll(By.css('button'));

    expect(component.onClickA).not.toHaveBeenCalled();
    buttons[0].triggerEventHandler('click', new Event('click'));
    expect(component.onClickA).toHaveBeenCalled();

    expect(component.onClickB).not.toHaveBeenCalled();
    buttons[1].triggerEventHandler('click', new Event('click'));
    expect(component.onClickB).toHaveBeenCalled();

  });


  it('should bind validator to field respective property', () => {
    const fixture = getTestComponentFixture();
    const component = fixture.componentInstance;
    const formComponent = fixture.debugElement.query(
      By.directive(FormComponent)
    ).componentInstance;
     // first input
    const input = fixture.debugElement.query(By.css('input')).nativeElement;
    expect(input.value).toBeFalsy();

    let property = formComponent.rootProperty.getProperty('username');
    property.setValue('pepita');
    fixture.detectChanges();
    property.errorsChanges.pipe(take(1)).subscribe((errors) => {
      expect(errors).toBeNull();
    });

    const code = 'USERNAME_NOT_MATCHING';
    component.validatorA = (value, property, form) => {
      if (form.value && value !== 'pepito') {
        return [{
          code,
          path: '#' + property.path,
          message: 'Username should be pepito',
          params: [value]
        }];
      }

      return null;
    };

    fixture.detectChanges();
    property = formComponent.rootProperty.getProperty('username');
    property.errorsChanges.pipe(take(1)).subscribe((errors) => {
      expect(errors.length).toBe(1);
      expect(errors[0].code).toEqual(code);
    })

  });



});
