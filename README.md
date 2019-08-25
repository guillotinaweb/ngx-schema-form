# Ngx Schema Form [![Build Status](https://travis-ci.org/guillotinaweb/ngx-schema-form.svg?branch=master)](https://travis-ci.org/guillotinaweb/ngx-schema-form)

Ngx Schema Form is an Angular 2+ module allowing you to instanciate an HTML form from a [JSON schema](http://json-schema.org/).

Note: Version 1.x is compliant with Angular <=4, version 2.x is compliant with Angular >=6.

## DISCLAIMER

Ngx Schema Form is **not** related to [angular-schema-form](https://github.com/json-schema-form/angular-schema-form) and [schemaform.io](http://schemaform.io/).

We think `angular-schema-form` is a great Angular 1 library, and when it will move to Angular 2+, we will probably join our efforts to produce and maintain a unique Angular 2+ solution.

## Demo

[Demo](https://guillotinaweb.github.io/ngx-schema-form/dist/ngx-schema-form)

## Features

* Generate a form from a single json schema object
* Generate a form from a default set of html constructs
* Allow initialization from previous values
* Validation handled by z-schema
* Allow injection of custom validators
* Allow declaration of custom widgets
* Allow injection of custom bindings (new!)

## Installation
To use Ngx Schema Form in your project simply execute the following command:

```bash
npm install ngx-schema-form --save
```

You just have to check that all the peer-dependencies of this module are satisfied in your package.json.

##### JSON Schema
With the installation there comes a JSON-Schema file that declares all specific or additional
properties supported by *ngx-schema-form*.

When using `*.json` files you may declare it with the `$schema` property to let your IDE's autocompletion help you create a schema-form.

```bash
{
  "$schema": "./node_modules/ngx-schema-form/ngx-schema-form-schema.json",
  "title": "My awesome schema-form"
  ...
}

```


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

Create a module which import the AppComponent and configure Ngx schema form.
```js
//app.module.ts

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { SchemaFormModule, WidgetRegistry, DefaultWidgetRegistry } from "ngx-schema-form";
import { AppComponent } from "./app.component";

@NgModule({
  imports: [
    SchemaFormModule.forRoot(),
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

The `model` property allow two-way data binding:

```
<sf-form [schema]="mySchema" [(model)]="value"></sf-form>{{value | json}}
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
The default registry ([`DefaultWidgetRegistry`](./projects/schema-form/src/lib/defaultwidgets/defaultwidgetregistry.ts)) contains many widgets listed below, ordered by type:

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
  import {ButtonWidget} from 'ngx-schema-form/dist/defaultwidgets'
  
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
      const passwordProperty = formProperty.findRoot().getProperty('password')
      if (passwordProperty.value !== undefined && property.valid && value !== passwordProperty.value) {
        return { "passwordCheck": { "expectedValue": "same as 'password'" } }
      }
      return null;
    }
  }
}
```

### Custom Bindings

Some form field may require a reaction to other forms fields when getting some input.
The Form component accepts a `bindings` input bound to a map of field paths mapped to event and binding functions.  
The binding function takes two arguments: the native event, and the property corresponding to it.

The following example creates a form where you will fill in some data for a family.
When you type in the name of the parent (first person) the name of the children will be kept updated.

```js
@Component({
  selector: "minimal-app",
  // Bind the bindings map to the the "bindings" input
  template: '<sf-form [schema]="mySchema" [bindings]="myFieldBindings"></sf-form>'
})
export class AppComponent {
  mySchema = 
  {
               "type": "object",
               "title": "Example with custom bindings.",
               "description": "Type a family name to see how the name gets synchronized with the children.",
               "properties": {
                 "name": {
                   "type": "string",
                   "title": "Surname"
                 },
                 "forename": {
                   "type": "string",
                   "title": "Forename"
                 },
                 "children": {
                   "type": "array",
                   "title": "Family",
                   "items": {
                     "type": "object",
                     "title": "Children",
                     "properties": {
                       "name": {
                         "type": "string",
                         "title": "Surname"
                       },
                       "forename": {
                         "type": "string",
                         "title": "forename"
                       },
                       "age": {
                         "type": "number",
                         "title": "age"
                       }
                     }
                   }
                 }
               }
             }

  // Declare a mapping between field and event-id
  myFieldBindings = {
      '/name': [
        {
          'input': (event, formProperty: FormProperty) => {
            const parent: PropertyGroup = formProperty.findRoot();

            /**
             * Set the input value for the children
             */
            const child1: FormProperty = parent.getProperty('children/0/name');

            child1.setValue(formProperty.value, false);

            const child2: FormProperty = parent.getProperty('children/1/name');
            child2.setValue(event.target.value, false);

            /**
             * Get the input value for all the children
             */
            for (const objectProperty of parent.getProperty('children').properties) {
              console.log('Value for child ', objectProperty, objectProperty.properties['name'].value);
            }
          }
        }
      ]
    };
}
```

### Conditional fields
It is possible to make the presence of a field depends on another field's value.
To achieve this you just have to add a `visibleIf` property to a field's definition.
Adding the value `$ANY$` to the array of conditional values,will make the field visible for any value inserted.

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
Assigning an empty Object to 'visibleIf' is interpreted as _visibleIf_ nothing, thereby the widget is hidden and not present in model.
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

`visibleIf` may also declare conditional binding by using `oneOf` or `allOf` properties.
Where `oneOf` is handled as `OR` and `allOf` is handled as `AND`.
```
  "visibleIf": {
        "allOf": [
          {
            "forename": [
              "$ANY$"
            ]
          },
          {
            "name": [
              "$ANY$"
            ]
          }
        ]
      }
```
The `oneOf` a is prioritized before the `allOf` and both are prioritized before the 
property binding.
 
_`oneOf` and `allOf` oneOf and allOf are reserved keywords and not suitable as property names_

**Arrays**

To address array items or not yet existing properties the `visibleIf` 
condition path may contain wildcard `*`.

e.g 
```
  "visibleIf": {
        "oneOf": [
          {
            "/person/*/age": [
              "18"
            ]
          }
        ]
      }
```

To address a specific item the `visibleIf` 
condition path should contain the index position.

e.g 
```
  "visibleIf": {
        "oneOf": [
          {
            "/person/1/age": [
              "18"
            ]
          }
        ]
      }
```

**Expressions**

Expressions allow a more complex `visibleIf` condition related to the involded fields.  
To use an expression the value of the item  
in the conditional array must start with `$EXP$`.  
When processing the expression a context is available containing  
a `source` and a `target` object.  
Where `source` is the `FormProperty` that has the `visibleIf` condition defined  
and `target` is the `FormProperty` that has been defined by the `path`.

```
  "myField" : { // SOURCE
    "visibleIf": {
          "oneOf": [
            {
              "/person/1/age": // TARGET
              [
                "$EXP$ target.value < 18"
              ]
            }
          ]
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
Ngx schema form allows you to create your own widget.

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

## Create form from html instead of json schema
Ngx schema form allows you to create forms from angular html templates too.
For this you only need to import `TemplateSchemaModule` to your app, and use the 
directive `templateSchema` on sf-form.

The followin html will generate the same form as the json schema in getting started section.

```html
<sf-form  [(ngModel)]="model"  templateSchema >
  <sf-field name="email" format="email" [required]="true"> Email </sf-field>
  <sf-field name="password" widget="password" [required]="true"> Password </sf-field>
  <sf-field name="rememberMe" type="boolean"> Remember Me </sf-field>
</sf-form>

```
For more details see example app.

## Development and build

To work on this package:

```bash
npm install
```

Then you can build:

```bash
npm run build:lib
```

If you want to work with the demo:

```bash
npm install -g @angular/cli
npm install
ng build schema-form
npm start
```

## Building the API documentation
You can build an HTML version of the API documentation by running the following command:

```bash
npm run typedoc
```

The api is then available in the "doc" directory.
