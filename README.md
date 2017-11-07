# Angular2 Schema Form [![Build Status](https://travis-ci.org/makinacorpus/angular2-schema-form.svg?branch=master)](https://travis-ci.org/makinacorpus/angular2-schema-form)

Angular2 Schema Form is an Angular2 module allowing you to instanciate an HTML form from a [JSON schema](http://json-schema.org/).

## DISCLAIMER

Angular2 Schema Form is **not** related to [angular-schema-form](https://github.com/json-schema-form/angular-schema-form) and [schemaform.io](http://schemaform.io/).

We think `angular-schema-form` is a great Angular 1 library, and when it will move to Angular 2, we will probably join our efforts to produce and maintain a unique Angular 2 solution.

## Demo
There is an [example of application](https://github.com/fbessou/angular2-schema-form-demo) using Angular2 Schema Form.
You can also test the module on [the website](https://makinacorpus.github.io/angular2-schema-form).

## Features

* Generate a form from a single json schema object
* Allow initialization from previous values
* Validation handled by z-schema
* Allow injection of custom validators
* Allow declaration of custom widgets

## Installation
To use Angular2 Schema Form in your project simply execute the following command:

```bash
npm install angular2-schema-form --save
```

You just have to check that all the peer-dependencies of this module are satisfied in your package.json.

## Getting started
Here our goal will be to create a simple login form.
Let's start by creating a simple AppComponent taking a simple JSON schema as input.

```js
// app.component.ts

import { Component } from "@angular/core";

@Component({
  selector:"minimal-app",
  // Bind the "mySchema" member to the schema input of the Form component.
  template: '<sf-form [schema]="mySchema"></sf-form>'
})

export class AppComponent {
  // The schema that will be used to generate a form
  mySchema = {
    "properties": {
      "email": {
        "type": "string",
        "description": "email",
        "format": "email"
      },
      "password": {
        "type": "string",
        "description": "Password"
      },
      "rememberMe": {
        "type": "boolean",
        "default": false,
        "description": "Remember me"
      }
    },
    "required": ["email","password","rememberMe"]
  }
}
```

Create a module which import the AppComponent and configure Angular2 schema form.
```js
//app.module.ts

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { SchemaFormModule, WidgetRegistry, DefaultWidgetRegistry } from "angular2-schema-form";
import { AppComponent } from "./app.component";

@NgModule({
  imports: [
    SchemaFormModule,
    BrowserModule
  ],
  declarations: [AppComponent],
  providers: [{provide: WidgetRegistry, useClass: DefaultWidgetRegistry}]
})
export class AppModule {}
```

The code above creates a form with three required fields.
The validation state of each field is reflected by the class of each of them which can be either "has-error" or "has-success".
Validation is done everytime a field's value changes.
Basic validation is made by testing the value of the field against its corresponding schema.
The input schema support almost all the features listed on the [JSON schema specification](http://json-schema.org/).

### Accessing the form's value

#### Input binding
It is possible to provide initial values to the form.
You can set the initial form's value through the `model` input:


```js
@Component({
template: '<sf-form [schema]="mySchema" [model]="myModel"></sf-form>'
})
export class AppComponent {
  mySchema = {...};
  myModel = {email:" john.doe@example.com"};
}
```

#### Output binding
The Form component provides the `onChange` output binding of which value represents the value of the form.
For instance, you can display the current forms's value with the following template:

```js
template: '<sf-form [schema]="mySchema" (onChange)="value=$event.value"></sf-form>{{value | json}}'
```

### Widgets
Each field can be displayed using a specific widget.
To declare the widget you want to use, add its `id` to the field's definition:

```js
mySchema = {
  "properties": {
    "email": {
      "type": "string",
      "description": "email",
      "format": "email"
    },
    "password": {
      "type": "string",
      "description": "Password",
      "widget": "password"// == "widget": {"id": "password"}
    },
    "rememberMe": {
      "type": "boolean",
      "default": false,
      "description": "Remember me"
    }
  }
}
```

If there is no widget declared in a given property's schema, its type is used as widget id and the [default registry](#default-widgets-registry) gives a default widget (see details below).
For instance, a string property will use the "string" widget.
The following JSON schema is equivalent with the above example:

```js
mySchema = {
  "properties": {
    "email": {
      "type": "string",
      "description": "email",
      "format": "email",
      "widget": "string"
    },
    "password": {
      "type": "string",
      "description": "Password",
      "widget": "password"// == "widget": {"id": "password"}
    },
    "rememberMe": {
      "type": "boolean",
      "default": false,
      "description": "Remember me",
      "widget": "boolean"
    }
  }
}
```

Some widgets accept parameters as input, in such cases, it is possible to provide them in the schema directly within the `widget` property (here the [TinyMCE widget](https://github.com/fbessou/ng2sf-tinymce) ):

```js
mySchema = {
  "properties": {
    "pageContent": {
      "type": "string",
      "description": "Page content",
      "widget": {
        "id": "richtext",
        "plugins": "textcolor colorpicker",
        "toolbar": "forecolor backcolor"
      }
    }
  }
}
```

### Default widget's registry
Available widgets are managed through a `WidgetRegistry`.
The default registry ([`DefaultWidgetRegistry`](./src/defaultwidgets/defaultwidgetregistry.ts)) contains many widgets listed below, ordered by type:

- **string**: string, search, tel, url, email, password, color, date, date-time, time, textarea, select, file, radio, richtext
- **number**: number, integer, range
- **integer**: integer, range
- **boolean**: boolean, checkbox

Note that the select and radio widgets rely on the `oneOf` property:

```javascript
"operatingSystem": {
  "type": "string",
  "oneOf": [
    {
      "enum": [
        "linux"
      ],
      "description": "GNU/Linux"
    },
    {
      "enum": [
        "osx"
      ],
      "description": "OSX"
    },
    {
      "enum": [
        "windows"
      ],
      "description": "Windows"
    },
    {
      "enum": [
        "other"
      ],
      "description": "Other"
    }
  ],
  "default": "other"
}
```

### Actions and buttons
Each schema can be extended by adding buttons after its widget.

```js
// app.component.ts
@Component({
  selector: "minimal-app",
  // Bind the actions map to the the "actions" input
  template: '<sf-form [schema]="mySchema" [actions]="myActions"></sf-form>'
})
export class AppComponent {
  // The schema that will be used to generate a form
  mySchema = {
    "properties": {
      "email": {
        "type": "string",
        "description": "email",
        "format": "email"
      },
      "password": {
        "type": "string",
        "description": "Password",
        "buttons": [{
          "id": "reset",
          "label": "Reset"
        }]
      },
      "rememberMe": {
        "type": "boolean",
        "default": false,
        "description": "Remember me"
      }
    },
    "required": ["email", "password", "rememberMe"],
    "buttons": [{
      "id": "alert", // the id of the action callback
      "label": "Alert !" // the text inside the button
    }]
  }

  // Declare a mapping between action ids and their event listener
  myActions = {
    "alert": (property) => { alert(JSON.stringify(property.value)) },
    "reset": (property) => { property.reset() }
  }
}
```

#### Render buttons

You may define you own widget to create buttons by 
overriding the default widget for action buttons
or create completely customized button widgets.

##### Override

Override the default action button widget 
in your `WidgetRegistry` implementation
and register your own button widget.

```js
    this.register('button', MyButtonWidgetComponent);
```

##### Custom

Define a custom button widget by 
setting the property `button.widget` in the schema

```json
  "password": {
    "type": "string",
    "description": "Password",
    "buttons": [
      {
        "id": "reset",
        "label": "Reset"
      },
      {
        "id": "custom_b",
        "label": "My custom button",
        "widget": "my_custom_button" // custom widget name for this button
      }
    ]
  }
``` 

and then register it in your `WidgetRegistry` implementation

```js
    this.register('my_custom_button', MyCustomButtonWidgetComponent);
```
  
##### Binding

The button widget will get provided the `button` object form the schema
including the `button.action` from the action registry 
and the `formProperty` object.

To be fully AOT compatible 
the custom button widget may then extend `ButtonWidget` or 
provide the properties `button` and `formProperty` by it self.

```js
  import {Component} from "@angular/core";
  import {ButtonWidget} from 'angular2-schema-form/dist/defaultwidgets'
  
  @Component({
    selector: 'sf-button-widget',
    templateUrl: 'custom-button.widget.html'
  })
  export class CustomWidgetComponent extends ButtonWidget {
  
  }
```

```js
  @Component({
    selector: 'sf-button-widget',
    templateUrl: 'custom-button.widget.html'
  })
  export class CustomWidgetComponent {
    public button
    public formProperty
  }
```

### Advanced validation
JSON schema provides validation against a static schema but its often necessary to provide other validation rules.
The Form component accepts a `validators` input bound to a map between a field id and a validation function.
The validation function takes three arguments: the value of the field, the property corresponding to it and the form object.

In the following example we create a simple registration form.
The user have to enter his password twice.
To perform this check we create a custom validator:

```js
@Component({
  selector: "minimal-app",
  // Bind the validator map to the the "validators" input
  template: '<sf-form [schema]="mySchema" [validators]="myValidators"></sf-form>'
})
export class AppComponent {
  mySchema = {
    "properties": {
      "email": {
        "type": "string",
        "description": "email",
        "format": "email"
      },
      "password": {
        "type": "string",
        "description": "Password"
      },
      "passwordCheck": {
        "type": "string",
        "description": "Password (verification)"
      }
    },
    "required": ["email", "password", "passwordCheck"]
  }

  // Declare a mapping between action ids and their implementations
  myValidators = {
    "/passwordCheck": (value, property, form) => {
      if (controls.password !== undefined && controls.password.valid && value !== values.password) {
        return { "passwordCheck": { "expectedValue": "same as 'password'" } }
      }
      return null;
    }
  }
}
```

### Conditional fields
It is possible to make the presence of a field depends on another field's value.
To achieve this you just have to add a `visibleIf` property to a field's definition.
Adding the value $ANY$ to the array of conditional values,will make the field visible for any value inserted.

```js
@Component({
  selector: "minimal-app",
  template: '<sf-form [schema]="mySchema"></sf-form>'
})
export class AppComponent {
  mySchema = {
    "properties": {
      "name": {
        "type": "string",
        "description": "Username"
      },
      "comment": {
        "type": "string",
        "description": "Comment"
      },
      "registerNewsletter": {
        "type": "boolean",
        "description": "I want to receive the newsletter",
        "default": false,
        "visibleIf": {
          "comment": ['$ANY$']
        }
      },
      "registerEmail": {
        "type": "string",
        "description": "Email",
        "format": "email",
        // Declare that this field must be displayed only if registerNewsletter is true
        "visibleIf": {
          "registerNewsletter": [true]
        }
      }
    },
    "required": ["name", "comment", "registerToNewsletter"]
  }
}
```
Assigning an empty Object to 'visibleIf' is interpreted as _visibleIf_ nothing, thereby the widget is hidden.
```js
mySchema = {
    "properties": {
      "hidden": {
        "type": "boolean",
        "visibleIf": { }
      }
    }
  }
```

#### Hidden fields
When a field has been made invisible by the condition `visibleIf`
then the property of the invisible field will be missing in the result model.

If there is need to submit default values that are not visible for the form
the `widget.id` `hidden` might be the better choice
```js
  mySchema = {
    "properties": {
      "hiddenInput": {
        "type": "boolean",
        "widget": "hidden",
        "default": true
      },
      "lastName": {
        "type": "string",
        ...
      }
    }
  }
```
so the value of the hidden field will be bound to the output model

```js
  {
    "hiddenInput": true,
    "lastName": "Doe",
    ...
  }
```

### Fields presentation and ordering
As a JSON object is an unordered collection you can't be sure your fields will be correctly ordered when the form is built.
The `order` and `fieldsets` entries of the schema are here to organize your fields.

#### Ordering
The `order` entry is an array listing all the fields ids in the order they must appear in the form:

```js
{
  "properties": {
    "firstName": {"type": "string","description": "First name"},
    "lastName": {"type": "string","description": "Last name"},
    "email": {"type": "string","description": "Email"}
  },
  "order": ["firstName", "lastName", "email"]
}
```

#### Fieldsets
With the `fieldsets` property, you can describe the different parts of the form and the fields they contain:

```js
{
  "properties": {
    "firstName": {
      "type": "string",
      "description": "First name"
    },
    "lastName": {
      "type": "string",
      "description": "Last name"
    },
    "email": {
      "type": "string",
      "description": "Email"
    },
    "notificationsFrequency": {
      "type": "string",
      "description": "Notifications frequency",
      "widget": "select",
      "oneOf": [
        {
          "description": "Daily",
          "enum": [
            "daily"
          ]
        },
        {
          "description": "Weekly",
          "enum": [
            "weekly"
          ]
        },
        {
          "description": "Monthly",
          "enum": [
            "monthly"
          ]
        }
      ],
      "default": "daily"
    }
  },
  "fieldsets": [
    {
      "title": "Personal information",
      "fields": [
        "firstName",
        "lastName",
        "email"
      ]
    },
    {
      "title": "Account settings",
      "fields": [
        "notificationsFrequency"
      ]
    }
  ]
}
```

The `title` entry of each fieldset is optional.

## Fixing the schema or model before rendering

Sometimes your schema (or model) is provided by a backend you cannot control.
If it is not formatted the way Angular 2 Schema Form expects or if some elements are missing (for instance the fieldsets, some widgets, etc.), you can fix it very easily in your component:

```javascript
@Component({
  selector: 'plone-view-edit',
  template: '<sf-form [schema]="schema" [model]="model" [actions]="actions"></sf-form>'
})
export class MyComponent {
  private schema: any = {
    'properties': {}
  };
  private actions: any = {};
  private model: any = {};

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('http://mybackend/schema').subscribe(res => {
      let schema = res.json();

      // FIXES
      // the "description" field must be rendered with tinymce
      schema.properties.description.widget = 'tinymce'

      // the "publication" field is required
      schema.required = ['publication'];

      this.schema = schema;
    });
  }
}
```

## Creating a custom widget
Angular2 schema form allows you to create your own widget.

Note: Currently this feature is not completely defined and the API might change.

You need to derivate the widget you want to customize:
```javascript
@Component({
  selector: 'mdl-sf-string-widget',
  templateUrl: './string.widget.html'
})
export class MyStringWidget extends StringWidget {}
```

You need to provide its html template (let's imagine we want to use the Material Design text field):
```html
<mdl-textfield [label]="schema.description" type="string" floating-label 
    [name]="name" [attr.readonly]="schema.readOnly?true:null"
    [attr.id]="id"
    [attr.disabled]="schema.readOnly?true:null"
    [formControl]="control"></mdl-textfield>
```

And you need to declare it in a custom registry:
```javascript
import { MyStringWidget } from './mystring';

export class MyWidgetRegistry extends DefaultWidgetRegistry {
  constructor() {
    super();

    this.register('string',  MyStringWidget);
  }
}
```

And, in your module, you need to:

- declare your widget component (like any regular component),
- declare it as an entry components (it means it can be instanciated dynamically),
- and provide your registry.

```javascript
declarations: [MyStringWidget],
entryComponents: [MyStringWidget],
providers: [{provide: WidgetRegistry, useClass: MyWidgetRegistry}],
```

Note: you will also need to import `ReactiveFormsModule` if you want to be able to use form control:
```javascript
import { ReactiveFormsModule } from '@angular/forms';
...
@NgModule({
  ...
  imports: [
    ...
    ReactiveFormsModule,
  ]
})
```

## Development and build

To work on this package:

```bash
npm install
```

You also need the peer dependencies:

```bash
npm run install:peers
```

Then you can build:

```bash
npm run build
```

If you want to work with the demo:

```bash
npm install -g @angular/cli
cd ./tests
npm install
cd ./src/app
ln -s ../../../src/ lib
cd -
ng serve
```

## Building the API documentation
You can build an HTML version of the API documentation by running the following command:

```bash
npm run typedoc
```

The api is then available in the "doc" directory.
