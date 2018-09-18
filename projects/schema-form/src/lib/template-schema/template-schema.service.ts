import { Injectable, EventEmitter } from '@angular/core';

export class TemplateSchemaService {

  changes = new EventEmitter();

  constructor() { }

  changed() {
    this.changes.emit();
  }

}
