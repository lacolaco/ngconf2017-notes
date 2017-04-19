import { TestExamplePage } from './app.po';

describe('test-example App', () => {
  let page: TestExamplePage;

  beforeEach(() => {
    page = new TestExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
