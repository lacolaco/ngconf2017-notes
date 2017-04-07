import { NgswPage } from './app.po';

describe('ngsw App', () => {
  let page: NgswPage;

  beforeEach(() => {
    page = new NgswPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
