import { provideZoneChangeDetection } from '@angular/core';
import { TestBed, inject } from '@angular/core/testing';

import { TemplateSchemaService } from './template-schema.service';

describe('TemplateSchemaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZoneChangeDetection(), TemplateSchemaService]
    });
  });

  it('should be created', inject([TemplateSchemaService], (service: TemplateSchemaService) => {
    expect(service).toBeTruthy();
  }));
});
