# Angular2 Schema Form

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

## Setup
To use Angular2 Schema Form in your project, simply execute the following command:

```bash
  npm install angular2-schema-form --save-dev
```

## Minimal example
Here our goal will be to create a simple login form.
```js
import {
	Component
} from "@angular/core";
import {
	disableDeprecatedForms,
	provideForms
} from "@angular/forms"
import { bootstrap } from "@angular/platform-browser-dynamic";
import {
	Form,
	WidgetRegistry
} from "angular2-schema-form";

@Component({
	selector:"minimal-app",
	template: '<schema-form [schema]="mySchema"></schema-form>',
	directives: [Form]
})
class AppComponent {
	mySchema = {
		"properties": {
			"login": {
				"type": "string",
				"description": "username"
			},
			"password": {
				"type": "string",
				"description": "Password"
			},
      "rememberMe": {
        "type": "boolean",
        "description": "Remember me"
      }
		},
	}
}

bootstrap(AppComponent, [disableDeprecatedForms(), provideForms(), WidgetRegistry]);
```

You just have to check that all the peer-dependencies of this module are satisfied in your package.json.
## Input Schema
Here is an example of schema that can be converted to a form:

## Quick start
1. To use this module, you have to declare the `WidgetRegistry` as a provider at bootstrap.

  ```js
  // main.ts
  import { bootstrap } from "@angular/platform-browser-dynamic";
  import { disableDeprecatedForms, provideForms } from "@angular/forms"
  import { WidgetRegistry } from "angular2-schema-form";
  import { MyApp } from "./app/app.component";

  bootstrap(MyApp,[disableDeprecatedForms(), provideForms(), WidgetRegistry]);
  ```

2. Add the `schema-form` to your template

  ```html
  <!-- myapp.template.html -->
  ...
  <schema-form></schemaform>
  ...
  ```

3. Add `Form` to your Component directives.

  ```js
  // myapp.component.ts
  import { Form } from "angular2-schema-form";

  @Component({
    directives: [Form],
    template: require("./myapp.template.html") // webpack's require
  })
  export class MyApp {
    ...
  }
  ```

4. Bind the schema input propertie
  The Form Component's `schema` input property is used to construct the form.

  ```html
  <!-- myapp.template.html -->
  ...
  <schema-form [schema]='mySchema' ... ></schema-form>
  ...
  ```

  ```js
  // myapp.component.ts
  ...
  @Component({ ... })
  class MyApp {
    mySchema: any = require("./myschema.json");
    ...
  }
  ```

5. Bind actions to the form buttons
  When a form button is clicked its action is triggered. Actions are provided through the `actions` input property.

  ```html
  <!-- myapp.template.html -->
  ...
  <schema-form ... [actions]="myActions" ></schema-form>
  ...
  ```

  ```js
  // myapp.component.ts

  @Component({ ... })
  class MyApp {
    ...
    myActions: any = {
      "submit": (form) => { form.submit(); },
      "reset": (form) => { form.submit(); },
      "debug": (form) => { alert(JSON.stringify(form.getModel()); }
    }
    ...
  }
  ```
Now you should have a minimal working form.

## Schema format

The format accepted as an input of the `Form` Component is an extension of [JSON Schema](http://json-schema.org/).
In this section are described the extensions made to the original JSON Schema standard.

### Form description

```js
{
  "properties": {
    "username": {
      "type": "string",
      "description": "First name"
    },
    "email": {
      "type": "string",
      "description": "Email"
    }
  },
  "fieldsets": [{
    "id":"profileInformation",
    "fields": ["username", "email"]
  }],
  "buttons": [{
    "label":"Save",
    "id": "send"
  }, {
    "label":"Reset",
    "id": "reset"
  }]
}
```

The fields are described in the `properties` entry of the schema:
A field has a type which is one of the JSON schema [primitive types](http://json-schema.org/latest/json-schema-core.html#anchor8).
The `fieldset` entry describes which are the sections of the form and which fields they contain.
The `buttons` entry permit to add buttons to the form.

### Schema validation
Currently, schema validation is made by z-schema. When a field's value change, it is validated against the corresponding "property".
The field validity is reflected through the css class of the field which can be either `ng-valid` or `ng-invalid`.

```js
{
  "properties": {
    "username": {
      "type": "string",
      "pattern": "^[A-Za-z][1-9A-Za-z]+$",
      "maxLength": 10,
      "description": "First name"
    },
    "email": {
      "type": "string",
      "format": "email",
      "description": "Email"
    }
  },
  ...
}
```

The above example add validation information to the fields (eg. `"maxLength": 10`). The validation constraints which can be set to a field are those described in the [JSON Schema validation specification](http://json-schema.org/latest/json-schema-validation.html).

### Example
```json
{
  "properties": {
    "name":{
      "type":"string",
      "description": "Full name",
      "pattern": "^[A-Za-z][1-9A-Za-z]+$",
      "maxLength": 10
    },
    "email": {
      "type": "string",
      "description": "Email address",
      "format": "email"
    }
  },
  "fieldsets": [{
    "id": "profileInformation",
    "fields": ["name", "email"]
  }],
  "buttons": [{
    "label":"Save",
    "id": "send"
  }, {
    "label":"Reset",
    "id": "reset"
  }],
  "required": ["name"]
}
```

## Form input bindings

All input bindings are supposed to work if loaded asynchronously.

### Initial values

You can provide an initial model as an input of the form. The model must be a subset of the `properties` listed in your JSON schema.
The form will then be prefilled with these properties.

In the SchemaForm host Component:

```js
@Component({ ... })
export class MyApp {
  private initialModel: {
    "username": "johnd",
    "email": "john.doe@example.com"
  };
}
```

In its template:

```html
<schema-form ... [model]="initialModel"></schema-form>
```

### Custom validation

If you need to add a custom validator for a field, you can pass a validator function to the Form as an input.

In the SchemaForm host Component:

```js
@Component({ ... })
export class MyApp {
  ...
  private validators = {};

  constructor() {
    this.validators["username"] = (value) => {
      if (value.split('').reverse().join('') === value) {
        return null;
      } else {
        return {"palindrome": {"actualValue": value}};
      }
    }

    this.validators["email"] = (value, model) => {
      if (isPresent(model.username)) {
        let prefix = value.split("@")[0];
        return prefix === model.username ? null
        : {"emailContainsUsername": {"shouldContain": model.username, "actualValue": value } };
      }
    }
  }
  ...
}
```

And in its template:

```html
<schema-form ... [fieldValidators]="validators"></schema-form>
```

### Actions

The form's buttons are bound to custom actions which are also provided by one-way binding.
The `actions` input must be a dictionnary that maps a button id to a function.

```js
@Component({ ... })
export class MyApp {
  ...
  private actions = {};

  constructor() {
    actions["submit"] = (form) => {
      console.log(JSON.stringify(form.getModel()));
    };
    actions["reset"] = (form) => {
      form.reset();
    };
  }
}


```

## Creating a custom widget
Angular2 schema form allows you to create your own widget. Currently this feature is not completely defined and API could change.

## Building the API documentation

You can build an HTML version of the API documentation by running the following command:

```bash
npm run typedoc
```
The api is then available in the "doc" directory.
