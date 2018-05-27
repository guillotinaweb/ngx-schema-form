import { TestBed, inject } from '@angular/core/testing';

import { SchemaFormService } from './schema-form.service';

describe('SchemaFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchemaFormService]
    });
  });

  it('should be created', inject([SchemaFormService], (service: SchemaFormService) => {
    expect(service).toBeTruthy();
  }));
});
