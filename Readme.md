# Angular2 Schema Form

## What is it ?
Angular2 Schema Form is an Angular2 module allowing you to instanciate an HTML form from a JSON schema.

## Run the demo
To run the example execute:

	npm start

It will be available on http://localhost:3000.

## Input Schema
Here is an example of schema that can be converted to a form:

```json
{
	"properties": {
		"name":{
			"type":"string",
			"description": "Full name"
		},
		"email": {
			"type": "string",
			"description": "Email address"
		}
	},
	"required": ["email"]
}
```
## Usage
The Form component has two inputs:
- `schema` is the schema to use to genereate the form
- `model` contains the default values to use.
```js
	import {Form} from "form/form.component"
	@Component({
		selector: "example",
		template: "<schema-form [schema]='mySchema' [model]='myModel'></schema-form>",
		providers: [FieldRegistry],
		directives:[Form]
	})
	class MyComponent{
		mySchema: any = {
			"properties": {
				"name":{"type":"string"}
				// ...
			},
			"required": ["name"]
		};
		myModel: any = {
			"name":"John Doe"
		};
		constructor(registry: Fieldregistry){
			//registry.registerFieldType("date",MyDatePicker);
		}
	}
```
