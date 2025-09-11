import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class TemplateSchemaService {

  changes = new EventEmitter();

  constructor() {
  }

  changed() {
    this.changes.emit();
  }

}
