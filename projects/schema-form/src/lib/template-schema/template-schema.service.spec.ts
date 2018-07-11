import { TestBed, inject } from '@angular/core/testing';

import { TemplateSchemaService } from './template-schema.service';

describe('TemplateSchemaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemplateSchemaService]
    });
  });

  it('should be created', inject([TemplateSchemaService], (service: TemplateSchemaService) => {
    expect(service).toBeTruthy();
  }));
});
