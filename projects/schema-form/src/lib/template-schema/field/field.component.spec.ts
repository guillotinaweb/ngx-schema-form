import {
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionRegistry } from '../../model/actionregistry';
import { ButtonComponent } from '../button/button.component';
import { TemplateSchemaService } from '../template-schema.service';
import { FieldComponent } from './field.component';
import { ItemComponent } from './item/item.component';
import {ISchema} from '../../model/ISchema';

@Component({
  selector: 'sf-test',
  template: ''
})
class TestComponent {
  @ViewChild(FieldComponent)
  field: FieldComponent;

  validator() { }
}


function getFieldComponent(template: string): FieldComponent {

  TestBed.overrideTemplate(TestComponent, template);
  TestBed.compileComponents();
  const fixture = TestBed.createComponent(TestComponent);
  fixture.detectChanges();

  return fixture.componentInstance.field;

}


describe('FieldComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FieldComponent,
        ItemComponent,
        ButtonComponent,
        TestComponent,
      ],
      providers: [
        ActionRegistry,
        TemplateSchemaService
      ]
    });
  }));

  it('should create', () => {

    TestBed.compileComponents();
    const fieldFixture = TestBed.createComponent(FieldComponent);
    const fieldComponent = fieldFixture.componentInstance;
    fieldFixture.detectChanges();

    expect(fieldComponent).toBeTruthy();

  });

  it('should generate basic schema', () => {

    const field = getFieldComponent(`
      <sf-field name="delivery" type="string" [required]="true">
        Name
      </sf-field>
    `);

    expect(field).toBeTruthy();
    expect(field.getButtons().length).toBe(0);
    expect(field.getValidators().length).toBe(0);
    expect(field.required).toBeTruthy();

    const schema = field.getSchema();

    expect(schema).toEqual({type: 'string', title: 'Name'});

  });

  it('should combine generated schema, with [schema] object properties taking precedence', () => {

    const field = getFieldComponent(`
      <sf-field
        name="delivery"
        type="string"
        placeholder="Proper age"
        [schema]="{ name: 'age', type: 'number', title: 'Age' }" >
        Name
      </sf-field>
    `);

    expect(field).toBeTruthy();
    expect(field.getButtons().length).toBe(0);
    expect(field.getValidators().length).toBe(0);
    expect(field.required).toBeFalsy();

    const schema = field.getSchema();

    expect(schema).toEqual({
      name: 'age',
      type: 'number',
      title: 'Age',
      placeholder: 'Proper age'
    });


  });



  it('should generate object schema', () => {

    const field = getFieldComponent(`
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
              name="passwordConfirm"
              widget="password"
              [required]="true">
              Confirm Password
          </sf-field>
      </sf-field>

    `);

    expect(field).toBeTruthy();
    expect(field.getButtons().length).toBe(0);
    expect(field.getValidators().length).toBe(0);

    const schema = field.getSchema();

    expect(schema).toEqual({
      title: 'Credentials',
      type: 'object',
      properties: {
        password: {
          description: 'A password field',
          title: 'Password',
          type: 'string',
          widget: 'password'
        },
        passwordConfirm: {
          title: 'Confirm Password',
          type: 'string',
          widget: 'password'
        }
      },
      required: [
        'password',
        'passwordConfirm'
      ]
    });

  });


  it('should generate string schema with oneOf based on content defined ItemComponent', () => {

    const field = getFieldComponent(`
      <sf-field name="delivery" type="string" widget="select" >
        Delivery Service
        <sf-item value="fedex">Fedex</sf-item>
        <sf-item value="ups">UPS</sf-item>
        <sf-item value="other">Other</sf-item>
      </sf-field>
    `);

    expect(field).toBeTruthy();
    expect(field.getButtons().length).toBe(0);
    expect(field.getValidators().length).toBe(0);

    const schema = field.getSchema();

    expect(schema).toEqual({
      title: 'Delivery Service',
      type: 'string',
      widget: 'select',
      oneOf: [
        {enum: ['fedex'], description: 'Fedex'},
        {enum: ['ups'], description: 'UPS'},
        {enum: ['other'], description: 'Other'}
      ]
    });

  });

  it('should generate array schema based on content defined ItemComponent', () => {

    const field = getFieldComponent(`
      <sf-field name="colors" type="array" widget="select" >
        Colors
        <sf-field name="color" type="string" >
          <sf-item value="blue">Blue</sf-item>
          <sf-item value="green">Green</sf-item>
          <sf-item value="pink">Pink</sf-item>
          <sf-item value="orange">Orange</sf-item>
        </sf-field>
      </sf-field>
    `);

    expect(field).toBeTruthy();
    expect(field.getButtons().length).toBe(0);
    expect(field.getValidators().length).toBe(0);

    const schema: ISchema = field.getSchema();

    expect(schema).toEqual({
      type: 'array',
      title: 'Colors',
      widget: 'select',
      items: {
        type: 'string',
        oneOf: [
          { enum: ['blue'], description: 'Blue' },
          { enum: ['green'], description: 'Green' },
          { enum: ['pink'], description: 'Pink' },
          { enum: ['orange'], description: 'Orange' }
        ]
      },
    });

  });


  it('should have buttons', () => {

    const field = getFieldComponent(`
      <sf-field name="delivery" type="string" [required]="true">
        Name
        <sf-button>Send</sf-button>
        <sf-button>Clear</sf-button>
      </sf-field>
    `);

    expect(field).toBeTruthy();
    expect(field.getValidators().length).toBe(0);
    expect(field.required).toBeTruthy();

    const buttons = field.getButtons();
    const schema = field.getSchema();

    expect(schema.type).toEqual('string')
    expect(schema.title).toEqual('Name')
    expect(schema.buttons.length).toBe(2)
    expect(buttons.length).toBe(2);
    expect(buttons[0].label).toEqual('Send');
    expect(buttons[1].label).toEqual('Clear');
    expect(buttons[0].id).toBeDefined();
    expect(buttons[1].id).toBeDefined();

  });


  it('should have validators with respective field path', () => {

    const field = getFieldComponent(`
      <sf-field name="credentials" type="object">
          Credentials
          <sf-field
              name="password"
              widget="password"
              [required]="true"
              [validator]="validator"
              description="A password field">
              Password
          </sf-field>
          <sf-field
              name="passwordConfirm"
              widget="password"
              [validator]="validator"
              [required]="true">
              Confirm Password
          </sf-field>
      </sf-field>
    `);

    expect(field).toBeTruthy();
    const validators = field.getValidators();

    expect(validators.length).toBe(2);
    expect(field.getButtons().length).toBe(0);
    expect(field.required).toBeFalsy();

    expect(validators[0].path).toEqual('/credentials/password');
    expect(validators[1].path).toEqual('/credentials/passwordConfirm');

  });

});
