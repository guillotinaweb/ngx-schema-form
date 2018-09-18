import { TemplateSchemaModule } from './template-schema.module';

describe('TemplateSchemaModule', () => {
  let templateSchemaModule: TemplateSchemaModule;

  beforeEach(() => {
    templateSchemaModule = new TemplateSchemaModule();
  });

  it('should create an instance', () => {
    expect(templateSchemaModule).toBeTruthy();
  });
});
