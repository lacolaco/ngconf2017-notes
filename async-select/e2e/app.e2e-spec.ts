import { AsyncSelectPage } from './app.po';

describe('async-select App', () => {
  let page: AsyncSelectPage;

  beforeEach(() => {
    page = new AsyncSelectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
