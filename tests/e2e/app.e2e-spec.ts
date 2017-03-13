import { TestsPage } from './app.po';

describe('tests App', () => {
  let page: TestsPage;

  beforeEach(() => {
    page = new TestsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
