# Angular2 Schema Form [![Build Status](https://travis-ci.org/makinacorpus/angular2-schema-form.svg?branch=master)](https://travis-ci.org/makinacorpus/angular2-schema-form)

Angular2 Schema Form is an Angular2 module allowing you to instanciate an HTML form from a [JSON schema](http://json-schema.org/).


## Demo
There is an [example of application](https://github.com/fbessou/angular2-schema-form-demo) using Angular2 Schema Form.
You can also test the module on [the website](https://makinacorpus.github.com/angular2-schema-form).

## Features

* Generate a form from a single json schema object
* Allow initialisation from previous values
* Validation handled by z-schema
* Allow injection of custom validators
* Allow declaration of custom widgets

## Installation
To use Angular2 Schema Form in your project simply execute the following command:

```bash
npm install angular2-schema-form --save-dev
```

You just have to check that all the peer-dependencies of this module are satisfied in your package.json.

## Getting started
Here our goal will be to create a simple login form.
Let's start by creating a simple AppComponent taking a simple JSON schema as input.

```js
// app.component.ts

import { Component } from "@angular/core";
import { Form } from "angular2-schema-form";

@Component({
selector:"minimal-app",
// Declare that our Component contains a Form component.
directives: [Form],
// Bind the "mySchema" member to the schema input of the Form component.
template: '<schema-form [schema]="mySchema"></schema-form>'
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

Bootstrap your AppComponent:

```js
// main.browser.ts

import {
  disableDeprecatedForms,
    provideForms
} from "@angular/forms"
import { bootstrap } from "@angular/platform-browser-dynamic";

import { WidgetRegistry } from "angular2-schema-form";

// Until Angular2 RC5, we have to specify we are using new forms API
bootstrap(AppComponent, [disableDeprecatedForms(), provideForms(), WidgetRegistry]);
```

The code above creates a form with three required fields. The validation state of each field is reflected by the class of each of them which can be either "has-error" or "has-success".
Validation is done every time a field's value is changed. Basic validation is made by testing the value of the field against its corresponding schema.
The input schema support almost all the features listed on the JSON schema specification.

**WARNING: Currently there is no support for nested schema. The following schema will generate a form unable to generate valid values:**

```js
{
  "properties": {
    "address": {
      "properties": {
        "country": {"type": "string"},
          "zip": {"type": "number"}
      }
    }
  }
}
```

### Accessing the value of the form.

#### Input binding

It is possible to provide initial values to the form. You can set the initial value of the form through the `model` input:


```js
@Component({
template: '<schema-form [schema]="mySchema" [model]="myModel"></schema-form>'
})
export class AppComponent {
  mySchema = {...};
  myModel = {email:" john.doe@example.com"};
}
```

#### Output binding
The Form component provide the `onChange` output binding of which value represents the value of the form.
For instance, you can display the current value of the form with the following template:

```js
template: '<schema-form [schema]="mySchema" (onChange)="value=$event.value"></schema-form>{{value}}'
```

### Widgets
Each field can be displayed using a specific widget. To declare the widget you want to use, add its id to the field's definition:

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

If there is no widget declared for a given field, its type name is used as widget id.
Some widgets accept parameters as input, in such cases, it is possible to provide them in the schema directly in the `widget` property:

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

Available widgets are managed through a WidgetRegistry. By default, this registry contains many widgets which are listed below by type:

 - **string**: string, search, tel, url, email, password, color, date, date-time, time, textarea, select, file, radio, richtext
 - **number**: number, integer, range
 - **integer**: integer, range
 - **boolean**: checkbox

Note that the select and radio widgets rely on the `oneOf` property:

```js
"operatingSystem": {
  "type": "string",
  "oneOf":[{
    "enum": ["linux"],
    "description": "GNU/Linux"
  }, {
    "enum": ["osx"],
    "description": "OSX"
  }, {
    "enum": ["windows"],
    "description": "Windows"
  },{
    "enum": ["other"],
    "description": "Other"
  }],
  "default": "other"
}
```

### Actions and buttons
The input schema can be extended to add buttons to the form:

```js
// app.component.ts
@Component({
selector:"minimal-app",
directives: [Form],
// Bind the actions map to the the "actions" input
template: '<schema-form [schema]="mySchema" [actions]="myActions"></schema-form>'
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
    "required": ["email","password","rememberMe"],
    "buttons": [{
      "id": "alert", // the id of the action callback
      "label": "Alert !" // the text inside the button
    }, {
      "id": "reset",
      "label": "Reset"
    }]
  }

  // Declare a mapping between action ids and their implementations
  myActions = {
    "alert": (form) => {alert(JSON.stringify(form.value))},
    "reset": (form) => {form.reset()}
  }
}
```

### Advanced validation

JSON schema provide validation against a static schema but its often necessary to provide other validation rules.
The Form component accept a `fieldValidators` input which binds to a map between a field id and a validation function. The validation function takes three arguments: the value of the field, the value of the form and the controls of every fields (which can be useful to check if another field is valid, touched, etc.).

In the following example we create a simple registration form. The user have to enter his password twice. To perform this check we create a custom validator:

```js
@Component({
selector:"minimal-app",
directives: [Form],
// Bind the validator map to the the "fieldValidators" input
template: '<schema-form [schema]="mySchema" [fieldValidators]="myValidators"></schema-form>'
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
    "required": ["email","password","passwordCheck"]
  }

  // Declare a mapping between action ids and their implementations
  myValidators = {
    "passwordCheck": (value, values, controls) => {
      if (controls.password !== undefined
          && controls.password.valid
          && value !== values.password
         ) {
        return {"passwordCheck":{"expectedValue":"same as 'password'"}}
      }
      return null;
    }
  }
}
```

### Conditional fields

It is possible to make the presence of a field depend on another field's value. To achieve this, you just have to add a "`visibleIf` property to a field's definition.

```js
@Component({
selector:"minimal-app",
directives: [Form],
template: '<schema-form [schema]="mySchema"></schema-form>'
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
        "default": true
      },
      "registerEmail": {
        "type": "string",
        "description": "Email",
        "format": "email",
        // Declare that this field must show only if registerNewsletter is true 
        "visibleIf": {
          "registerNewsletter": [true]
        }
      }
    },
    "required": ["name","comment","registerToNewsletter"]
  }
}
```

### Fields presentation and ordering
As a JSON object is an unordered collection you can't be sure your fields will be correctly ordered when the form is built. The `order` and `fieldsets`  entries of the schema are here to organize your fields.

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
    "firstName": {"type": "string","description": "First name"},
      "lastName": {"type": "string","description": "Last name"},
      "email": {"type": "string","description": "Email"},
      "notificationsFrequency": {
        "type":"string",
        "description": "Notifications frequency",
        "widget": "select",
        "oneOf": [{
          "description": "Daily", "enum": ["daily"]
        }, {
          "description": "Weekly", "enum": ["weekly"]
        }, {
          "description": "Monthly", "enum": ["monthly"]
        }],
        "default": "daily"
      }
  },
  "fieldsets": [{
    "title": "Personal information",
    "fields": ["firstName", "lastName", "email"]
  }, {
    "title": "Account settings",
    "fields": ["notificationsFrequency"]
  }]
}
```

The `title` entry of each fieldset is optional.

## Creating a custom widget
Angular2 schema form allows you to create your own widget. Currently this feature is not completely defined and API could change.

## Building the API documentation

You can build an HTML version of the API documentation by running the following command:

```bash
npm run typedoc
```

The api is then available in the "doc" directory.
