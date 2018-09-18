import {FormProperty} from './formproperty';

export interface Binding {
  [eventName: string]: ((event: any, formProperty: FormProperty) => void) | ((event: any, formProperty: FormProperty) => void)[];
}
