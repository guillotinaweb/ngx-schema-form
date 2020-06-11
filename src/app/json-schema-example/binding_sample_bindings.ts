import {FormProperty, PropertyGroup} from '../../../projects/schema-form/src/lib/model';

const myFormBindings = {
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
    },
    {
      'click': (event, formProperty: FormProperty) => {
        console.log('2222 Called event!', event.target, event, formProperty);
      }
    }
  ],
  '/forename': [{
    'mouseover': [(event, formProperty: FormProperty) => {
      console.log('Mouse over event triggered FIRST time!', event.target, event, formProperty);
    }, (event, formProperty: FormProperty) => {
      console.log('Mouse over event triggered SECOND time!', event.target, event, formProperty);
    }]
  }]
};

export default myFormBindings;
