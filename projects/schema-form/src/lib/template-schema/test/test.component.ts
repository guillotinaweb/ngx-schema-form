import {
  Component,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'sf-test',
  templateUrl: `
    <sf-form #form [(ngModel)]="model" templateSchema>

        <sf-field name="credentials" type="object">
            Credentials
            <sf-field
                name="password"
                widget="password"
                [required]="true"
                description="A password"
                [validator]="passwordValidator">
                Password
            </sf-field>
            <sf-field
                name="passwordConfirm"
                widget="password"
                [required]="true"
                [validator]="passwordConfirmValidator">
                Confirm Password
            </sf-field>
            <sf-button (click)="handlerA($event)">Button A</sf-button>
        </sf-field>

        <sf-field name="categories" type="array" widget="checkbox" >
          Categories
          <sf-field type="string" >
            <sf-item value="dog">Dog</sf-item>
            <sf-item value="cat">Cat</sf-item>
            <sf-item value="dolphin">Dolphin</sf-item>
          </sf-field>
        </sf-field>

        <sf-field
            *ngIf="testModel?.categories?.includes('dog')"
            name="colors"
            type="array"
            widget="select" >
            Colors

          <sf-field name="color" type="string" >
            <sf-item value="blue">Blue</sf-item>
            <sf-item value="green">Green</sf-item>
            <sf-item value="pink">Pink</sf-item>
            <sf-item value="orange">Orange</sf-item>
          </sf-field>
        </sf-field>

        <sf-field name="delivery" type="string" widget="select" >
          Delivery Service
          <sf-item value="fedex">Fedex</sf-item>
          <sf-item value="ups">UPS</sf-item>
          <sf-item value="other">Other</sf-item>
        </sf-field>

        <sf-button (click)="handlerB($event)">Button B</sf-button>
        <sf-button (click)="handlerC($event)">Button C</sf-button>
    </sf-form>
  `
})
export class TestComponent {

  model: any = {};

  handlerA() {
    return 'A';
  }

  handlerB() {
    return 'B';
  }

  handlerC() {
    return 'C';
  }
}


