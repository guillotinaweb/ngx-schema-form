import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class TemplateSchemaService {

  changes = new EventEmitter();

  constructor() { }

  changed() {
    this.changes.emit();
  }

}
